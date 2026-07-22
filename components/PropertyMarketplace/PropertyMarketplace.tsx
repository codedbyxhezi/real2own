"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import {
  useLocale,
  useTranslations,
} from "next-intl";
import { useSearchParams } from "next/navigation";
import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import type {
  ListingCategoryKey,
  ListingProperty,
} from "@/types/property";
import styles from "./PropertyMarketplace.module.css";

type PropertyMarketplaceProps = {
  eyebrow: string;
  title: string;
  description: string;
  resultTitle: string;
  properties: ListingProperty[];
};

type CategoryFilter =
  | "all"
  | ListingCategoryKey;

type SortOption =
  | "recommended"
  | "price-ascending"
  | "price-descending"
  | "area-descending";

type ListingImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

const FALLBACK_IMAGE =
  "/images/hero/luxusvilla-mittelmeer-meerblick-sonnenuntergang.webp";

const categoryOptions: CategoryFilter[] = [
  "all",
  "buy",
  "rent",
  "land",
  "development",
];

const categoryAliases: Record<
  ListingCategoryKey,
  string[]
> = {
  buy: [
    "buy",
    "sale",
    "kaufen",
    "kauf",
    "comprar",
    "venta",
  ],
  rent: [
    "rent",
    "rental",
    "mieten",
    "miete",
    "alquilar",
    "alquiler",
  ],
  land: [
    "land",
    "plot",
    "plots",
    "grundstuck",
    "grundstucke",
    "grundstück",
    "grundstücke",
    "baugrundstuck",
    "baugrundstück",
    "terreno",
    "terrenos",
    "parcela",
    "parcelas",
  ],
  development: [
    "development",
    "developments",
    "newbuild",
    "new build",
    "new development",
    "new developments",
    "neubau",
    "neubauprojekt",
    "neubauprojekte",
    "obra nueva",
  ],
};

function ListingImage({
  src,
  alt,
  priority = false,
}: ListingImageProps) {
  const [imageSrc, setImageSrc] =
    useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={1200}
      height={900}
      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
      priority={priority}
      className={styles.cardImage}
      onError={() => {
        if (imageSrc !== FALLBACK_IMAGE) {
          setImageSrc(FALLBACK_IMAGE);
        }
      }}
    />
  );
}

function normalizeText(
  value: string,
  locale: string
) {
  return value
    .toLocaleLowerCase(locale)
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    );
}

function extractNumber(value: string) {
  const normalizedValue = value
    .replace(/[^\d.,]/g, "")
    .trim();

  if (!normalizedValue) {
    return 0;
  }

  const lastComma =
    normalizedValue.lastIndexOf(",");

  const lastDot =
    normalizedValue.lastIndexOf(".");

  const decimalSeparator =
    lastComma > lastDot ? "," : ".";

  const parts =
    normalizedValue.split(
      decimalSeparator
    );

  const finalPart =
    parts[parts.length - 1];

  const hasDecimalPart =
    parts.length > 1 &&
    finalPart.length <= 2;

  if (hasDecimalPart) {
    parts.pop();

    const wholeNumber = parts
      .join("")
      .replace(/[.,]/g, "");

    return Number(
      `${wholeNumber}.${finalPart}`
    );
  }

  return Number(
    normalizedValue.replace(
      /[.,]/g,
      ""
    )
  );
}

function resolveCategory(
  value: string | null,
  locale: string
): CategoryFilter {
  if (!value) {
    return "all";
  }

  const normalizedValue =
    normalizeText(
      value.trim(),
      locale
    );

  if (
    !normalizedValue ||
    [
      "all",
      "alle",
      "todos",
      "todas",
    ].includes(normalizedValue)
  ) {
    return "all";
  }

  const categoryKeys =
    Object.keys(
      categoryAliases
    ) as ListingCategoryKey[];

  const category =
    categoryKeys.find(
      (categoryKey) =>
        categoryAliases[
          categoryKey
        ].some(
          (alias) =>
            normalizeText(
              alias,
              locale
            ) === normalizedValue
        )
    );

  return category ?? "all";
}

function resolvePropertyType(
  value: string | null,
  propertyTypes: string[],
  locale: string
) {
  if (!value) {
    return "";
  }

  const normalizedValue =
    normalizeText(
      value.trim(),
      locale
    );

  return (
    propertyTypes.find(
      (propertyType) =>
        normalizeText(
          propertyType,
          locale
        ) === normalizedValue
    ) ?? ""
  );
}

export function PropertyMarketplace({
  eyebrow,
  title,
  description,
  resultTitle,
  properties,
}: PropertyMarketplaceProps) {
  const t = useTranslations(
    "PropertyMarketplace"
  );

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const resultsRef =
    useRef<HTMLElement>(null);

  const [category, setCategory] =
    useState<CategoryFilter>(
      "all"
    );

  const [location, setLocation] =
    useState("");

  const [
    propertyType,
    setPropertyType,
  ] = useState("");

  const [
    maximumPrice,
    setMaximumPrice,
  ] = useState("");

  const [
    minimumRooms,
    setMinimumRooms,
  ] = useState("");

  const [sort, setSort] =
    useState<SortOption>(
      "recommended"
    );

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(9);

  const searchQuery =
    searchParams.toString();

  const allPropertyTypes =
    useMemo(() => {
      return Array.from(
        new Set(
          properties.map(
            (property) =>
              property.type
          )
        )
      ).sort(
        (first, second) =>
          first.localeCompare(
            second,
            locale
          )
      );
    }, [locale, properties]);

  useEffect(() => {
    const params =
      new URLSearchParams(
        searchQuery
      );

    const categoryParameter =
      params.get("category") ??
      params.get("angebot");

    const typeParameter =
      params.get("type") ??
      params.get("typ");

    const typeCategory =
      resolveCategory(
        typeParameter,
        locale
      );

    const nextCategory =
      categoryParameter
        ? resolveCategory(
            categoryParameter,
            locale
          )
        : typeCategory;

    const nextPropertyType =
      typeCategory !== "all"
        ? ""
        : resolvePropertyType(
            typeParameter,
            allPropertyTypes,
            locale
          );

    setCategory(nextCategory);

    setLocation(
      params.get("location") ??
        ""
    );

    setPropertyType(
      nextPropertyType
    );

    setMaximumPrice(
      params.get("maxPrice") ??
        params.get("budget") ??
        ""
    );

    setMinimumRooms(
      params.get("rooms") ??
        ""
    );

    setSort("recommended");
    setVisibleCount(9);
  }, [
    allPropertyTypes,
    locale,
    searchQuery,
  ]);

  const availablePropertyTypes =
    useMemo(() => {
      const relevantProperties =
        category === "all"
          ? properties
          : properties.filter(
              (property) =>
                property.categoryKey ===
                category
            );

      return Array.from(
        new Set(
          relevantProperties.map(
            (property) =>
              property.type
          )
        )
      ).sort(
        (first, second) =>
          first.localeCompare(
            second,
            locale
          )
      );
    }, [
      category,
      locale,
      properties,
    ]);

  useEffect(() => {
    if (
      propertyType &&
      !availablePropertyTypes.includes(
        propertyType
      )
    ) {
      setPropertyType("");
    }
  }, [
    availablePropertyTypes,
    propertyType,
  ]);

  const filteredProperties =
    useMemo(() => {
      const normalizedLocation =
        normalizeText(
          location.trim(),
          locale
        );

      const maximumPriceNumber =
        extractNumber(
          maximumPrice
        );

      const minimumRoomsNumber =
        Number(minimumRooms);

      const filtered =
        properties.filter(
          (property) => {
            const matchesCategory =
              category === "all" ||
              property.categoryKey ===
                category;

            const normalizedPropertyLocation =
              normalizeText(
                property.location,
                locale
              );

            const normalizedTitle =
              normalizeText(
                property.title,
                locale
              );

            const matchesLocation =
              !normalizedLocation ||
              normalizedPropertyLocation.includes(
                normalizedLocation
              ) ||
              normalizedTitle.includes(
                normalizedLocation
              );

            const matchesType =
              !propertyType ||
              property.type ===
                propertyType;

            const propertyPrice =
              extractNumber(
                property.price
              );

            const matchesPrice =
              !maximumPriceNumber ||
              propertyPrice <=
                maximumPriceNumber;

            const propertyRooms =
              extractNumber(
                property.rooms
              );

            const matchesRooms =
              !minimumRoomsNumber ||
              (
                propertyRooms > 0 &&
                propertyRooms >=
                  minimumRoomsNumber
              );

            return (
              matchesCategory &&
              matchesLocation &&
              matchesType &&
              matchesPrice &&
              matchesRooms
            );
          }
        );

      return [...filtered].sort(
        (first, second) => {
          if (
            sort ===
            "price-ascending"
          ) {
            return (
              extractNumber(
                first.price
              ) -
              extractNumber(
                second.price
              )
            );
          }

          if (
            sort ===
            "price-descending"
          ) {
            return (
              extractNumber(
                second.price
              ) -
              extractNumber(
                first.price
              )
            );
          }

          if (
            sort ===
            "area-descending"
          ) {
            return (
              extractNumber(
                second.area
              ) -
              extractNumber(
                first.area
              )
            );
          }

          return 0;
        }
      );
    }, [
      category,
      locale,
      location,
      maximumPrice,
      minimumRooms,
      properties,
      propertyType,
      sort,
    ]);

  const visibleProperties =
    filteredProperties.slice(
      0,
      visibleCount
    );

  const hasActiveFilters =
    category !== "all" ||
    Boolean(
      location ||
      propertyType ||
      maximumPrice ||
      minimumRooms
    );

  function updateUrl() {
    const params =
      new URLSearchParams();

    if (category !== "all") {
      params.set(
        "category",
        category
      );
    }

    if (location.trim()) {
      params.set(
        "location",
        location.trim()
      );
    }

    if (propertyType) {
      params.set(
        "type",
        propertyType
      );
    }

    if (maximumPrice.trim()) {
      params.set(
        "maxPrice",
        maximumPrice.trim()
      );
    }

    if (minimumRooms) {
      params.set(
        "rooms",
        minimumRooms
      );
    }

    const query =
      params.toString();

    const destination =
      query.length > 0
        ? `${pathname}?${query}`
        : pathname;

    router.replace(destination, {
      scroll: false,
    });
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setVisibleCount(9);
    updateUrl();

    window.setTimeout(() => {
      resultsRef.current?.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
        }
      );
    }, 50);
  }

  function resetFilters() {
    setCategory("all");
    setLocation("");
    setPropertyType("");
    setMaximumPrice("");
    setMinimumRooms("");
    setSort("recommended");
    setVisibleCount(9);

    router.replace(pathname, {
      scroll: false,
    });
  }

  return (
    <>
      <section
        className={styles.hero}
        aria-label={description}
      >
        <div
          className={`container ${styles.heroInner}`}
        >
          <div
            className={
              styles.searchIntro
            }
          >
            <p
              className={
                styles.eyebrow
              }
            >
              {eyebrow}
            </p>

            <h1>{title}</h1>
          </div>

          <form
            className={
              styles.searchPanel
            }
            onSubmit={handleSubmit}
          >
            <div
              className={
                styles.categoryTabs
              }
              aria-label={t(
                "categoryNavigation"
              )}
            >
              {categoryOptions.map(
                (option) => {
                  const active =
                    category === option;

                  return (
                    <button
                      className={[
                        styles.categoryTab,
                        active
                          ? styles.categoryTabActive
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      type="button"
                      aria-pressed={
                        active
                      }
                      key={option}
                      onClick={() => {
                        setCategory(
                          option
                        );

                        setVisibleCount(
                          9
                        );
                      }}
                    >
                      {t(
                        `categories.${option}`
                      )}
                    </button>
                  );
                }
              )}
            </div>

            <div
              className={
                styles.searchGrid
              }
            >
              <label
                className={
                  styles.searchField
                }
              >
                <span>
                  {t(
                    "locationLabel"
                  )}
                </span>

                <input
                  type="search"
                  value={location}
                  placeholder={t(
                    "locationPlaceholder"
                  )}
                  onChange={(event) => {
                    setLocation(
                      event.target.value
                    );

                    setVisibleCount(9);
                  }}
                />
              </label>

              <label
                className={
                  styles.searchField
                }
              >
                <span>
                  {t(
                    "propertyTypeLabel"
                  )}
                </span>

                <select
                  value={propertyType}
                  onChange={(event) => {
                    setPropertyType(
                      event.target.value
                    );

                    setVisibleCount(9);
                  }}
                >
                  <option value="">
                    {t(
                      "allPropertyTypes"
                    )}
                  </option>

                  {availablePropertyTypes.map(
                    (type) => (
                      <option
                        value={type}
                        key={type}
                      >
                        {type}
                      </option>
                    )
                  )}
                </select>
              </label>

              <label
                className={
                  styles.searchField
                }
              >
                <span>
                  {t(
                    "maximumPriceLabel"
                  )}
                </span>

                <input
                  type="text"
                  inputMode="numeric"
                  value={
                    maximumPrice
                  }
                  placeholder={t(
                    "maximumPricePlaceholder"
                  )}
                  onChange={(event) => {
                    setMaximumPrice(
                      event.target.value
                    );

                    setVisibleCount(9);
                  }}
                />
              </label>

              <label
                className={
                  styles.searchField
                }
              >
                <span>
                  {t(
                    "minimumRoomsLabel"
                  )}
                </span>

                <select
                  value={
                    minimumRooms
                  }
                  onChange={(event) => {
                    setMinimumRooms(
                      event.target.value
                    );

                    setVisibleCount(9);
                  }}
                >
                  <option value="">
                    {t("anyRooms")}
                  </option>

                  {[1, 2, 3, 4, 5, 6].map(
                    (count) => (
                      <option
                        value={count}
                        key={count}
                      >
                        {t(
                          "roomOption",
                          {
                            count,
                          }
                        )}
                      </option>
                    )
                  )}
                </select>
              </label>

              <button
                className={
                  styles.searchButton
                }
                type="submit"
              >
                <span>
                  {t("search")}
                </span>

                <Icon
                  name="arrow"
                  size={17}
                />
              </button>
            </div>

            <div
              className={
                styles.searchMeta
              }
            >
              <span aria-live="polite">
                {t("resultCount", {
                  count:
                    filteredProperties.length,
                })}
              </span>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={
                    resetFilters
                  }
                >
                  {t(
                    "resetFilters"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      <section
        ref={resultsRef}
        className={styles.results}
        aria-labelledby="property-results-title"
      >
        <div className="container">
          <div
            className={
              styles.resultsHeader
            }
          >
            <div>
              <p
                className={
                  styles.resultsEyebrow
                }
              >
                {t(
                  "resultsEyebrow"
                )}
              </p>

              <h2 id="property-results-title">
                {resultTitle}
              </h2>

              <p>
                {t("resultCount", {
                  count:
                    filteredProperties.length,
                })}
              </p>
            </div>

            <label
              className={styles.sort}
            >
              <span>
                {t("sortLabel")}
              </span>

              <select
                value={sort}
                onChange={(event) => {
                  setSort(
                    event.target
                      .value as SortOption
                  );
                }}
              >
                <option value="recommended">
                  {t(
                    "sortOptions.recommended"
                  )}
                </option>

                <option value="price-ascending">
                  {t(
                    "sortOptions.priceAscending"
                  )}
                </option>

                <option value="price-descending">
                  {t(
                    "sortOptions.priceDescending"
                  )}
                </option>

                <option value="area-descending">
                  {t(
                    "sortOptions.areaDescending"
                  )}
                </option>
              </select>
            </label>
          </div>

          {visibleProperties.length >
          0 ? (
            <>
              <div
                className={
                  styles.propertyGrid
                }
              >
                {visibleProperties.map(
                  (
                    property,
                    index
                  ) => (
                    <article
                      className={
                        styles.card
                      }
                      key={property.id}
                    >
                      <Link
                        className={
                          styles.imageLink
                        }
                        href={`/immobilien/${property.id}`}
                        aria-label={t(
                          "viewProperty",
                          {
                            title:
                              property.title,
                          }
                        )}
                      >
                        <ListingImage
                          src={
                            property.image
                          }
                          alt={
                            property.title
                          }
                          priority={
                            index < 3
                          }
                        />

                        <span
                          className={
                            styles.imageShade
                          }
                        />

                        {property.label && (
                          <span
                            className={
                              styles.cardLabel
                            }
                          >
                            {
                              property.label
                            }
                          </span>
                        )}

                        <span
                          className={
                            styles.cardArrow
                          }
                          aria-hidden="true"
                        >
                          <Icon
                            name="arrow"
                            size={16}
                          />
                        </span>
                      </Link>

                      <div
                        className={
                          styles.cardContent
                        }
                      >
                        <p
                          className={
                            styles.cardLocation
                          }
                        >
                          {
                            property.location
                          }
                        </p>

                        <h3>
                          <Link
                            href={`/immobilien/${property.id}`}
                          >
                            {
                              property.title
                            }
                          </Link>
                        </h3>

                        <dl
                          className={
                            styles.facts
                          }
                        >
                          <div>
                            <dt>
                              {t(
                                "facts.type"
                              )}
                            </dt>

                            <dd>
                              {
                                property.type
                              }
                            </dd>
                          </div>

                          <div>
                            <dt>
                              {t(
                                "facts.area"
                              )}
                            </dt>

                            <dd>
                              {
                                property.area
                              }
                            </dd>
                          </div>

                          <div>
                            <dt>
                              {t(
                                "facts.rooms"
                              )}
                            </dt>

                            <dd>
                              {
                                property.rooms
                              }
                            </dd>
                          </div>
                        </dl>

                        <div
                          className={
                            styles.cardFooter
                          }
                        >
                          <strong>
                            {
                              property.price
                            }
                          </strong>

                          <Link
                            href={`/immobilien/${property.id}`}
                          >
                            {t("details")}

                            <Icon
                              name="arrow"
                              size={14}
                            />
                          </Link>
                        </div>
                      </div>
                    </article>
                  )
                )}
              </div>

              {visibleCount <
                filteredProperties.length && (
                <div
                  className={
                    styles.loadMore
                  }
                >
                  <button
                    type="button"
                    onClick={() => {
                      setVisibleCount(
                        (current) =>
                          current + 9
                      );
                    }}
                  >
                    {t("loadMore")}

                    <span
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div
              className={styles.empty}
            >
              <span>00</span>

              <div>
                <h3>
                  {t("emptyTitle")}
                </h3>

                <p>
                  {t(
                    "emptyDescription"
                  )}
                </p>

                <button
                  type="button"
                  onClick={
                    resetFilters
                  }
                >
                  {t(
                    "resetFilters"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}