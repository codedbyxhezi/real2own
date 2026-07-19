"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import {
  useLocale,
  useTranslations,
} from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import type { ListingProperty } from "@/types/property";
import styles from "./ListingExplorer.module.css";

type ListingExplorerProps = {
  resultLabel: string;
  properties: ListingProperty[];
};

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

const propertyTypeAliases = [
  [
    "apartment",
    "apartments",
    "wohnung",
    "wohnungen",
    "apartamento",
    "apartamentos",
    "neubauwohnungen",
    "new-build apartments",
    "viviendas de obra nueva",
  ],
  [
    "house",
    "houses",
    "haus",
    "hauser",
    "stadthaus",
    "townhouse",
    "casa",
    "casas",
    "casa urbana",
  ],
  [
    "villa",
    "villas",
    "villen",
    "villenprojekt",
    "villa development",
    "proyecto de villas",
  ],
  [
    "penthouse",
    "penthouses",
    "atico",
    "aticos",
  ],
  [
    "loft",
    "lofts",
    "loftwohnung",
  ],
  [
    "land",
    "plot",
    "plots",
    "grundstuck",
    "grundstucke",
    "baugrundstuck",
    "baugrundstucke",
    "parcela",
    "parcelas",
    "terreno",
    "terrenos",
    "development site",
    "entwicklungsflache",
    "terreno de desarrollo",
    "project site",
    "projektgrundstuck",
    "terreno para proyecto",
  ],
  [
    "development",
    "developments",
    "new development",
    "new developments",
    "neubauprojekt",
    "neubauprojekte",
    "wohnprojekt",
    "residential project",
    "proyecto residencial",
    "wohnquartier",
    "residential district",
    "barrio residencial",
    "residences",
    "residenzen",
    "residencias",
  ],
];

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
      sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw"
      priority={priority}
      className={styles.image}
      onError={() => {
        if (imageSrc !== FALLBACK_IMAGE) {
          setImageSrc(FALLBACK_IMAGE);
        }
      }}
    />
  );
}

function extractNumber(
  value: string
) {
  const match = value.match(
    /\d[\d.,]*/
  );

  if (!match) {
    return 0;
  }

  const token = match[0];
  const parts = token.split(/[.,]/);

  if (parts.length === 1) {
    return Number(parts[0]);
  }

  const looksLikeThousands =
    parts
      .slice(1)
      .every(
        (part) =>
          part.length === 3
      );

  if (looksLikeThousands) {
    return Number(
      parts.join("")
    );
  }

  if (
    parts.length === 2 &&
    parts[1].length <= 2
  ) {
    return Number(
      `${parts[0]}.${parts[1]}`
    );
  }

  return Number(
    parts.join("")
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

function resolvePropertyType(
  queryValue: string,
  propertyTypes: string[],
  locale: string
) {
  const normalizedQuery =
    normalizeText(
      queryValue.trim(),
      locale
    );

  if (
    !normalizedQuery ||
    [
      "all",
      "alle",
      "any",
      "todos",
      "todas",
    ].includes(normalizedQuery)
  ) {
    return "";
  }

  const exactMatch =
    propertyTypes.find(
      (type) =>
        normalizeText(
          type,
          locale
        ) === normalizedQuery
    );

  if (exactMatch) {
    return exactMatch;
  }

  const singularPluralMatch =
    propertyTypes.find(
      (type) => {
        const normalizedType =
          normalizeText(
            type,
            locale
          );

        return (
          normalizedType ===
            `${normalizedQuery}s` ||
          `${normalizedType}s` ===
            normalizedQuery
        );
      }
    );

  if (singularPluralMatch) {
    return singularPluralMatch;
  }

  const matchingAliasGroup =
    propertyTypeAliases.find(
      (group) =>
        group.includes(
          normalizedQuery
        )
    );

  if (!matchingAliasGroup) {
    return "";
  }

  return (
    propertyTypes.find(
      (type) =>
        matchingAliasGroup.includes(
          normalizeText(
            type,
            locale
          )
        )
    ) ?? ""
  );
}

export function ListingExplorer({
  resultLabel,
  properties,
}: ListingExplorerProps) {
  const t = useTranslations(
    "ListingExplorer"
  );

  const locale = useLocale();
  const searchParams =
    useSearchParams();

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
  ] = useState(6);

  const propertyTypes = useMemo(
    () =>
      Array.from(
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
      ),
    [
      locale,
      properties,
    ]
  );

  useEffect(() => {
    const locationParameter =
      searchParams.get(
        "location"
      );

    const typeParameter =
      searchParams.get(
        "type"
      );

    const budgetParameter =
      searchParams.get(
        "budget"
      );

    setLocation(
      locationParameter ?? ""
    );

    setMaximumPrice(
      budgetParameter ?? ""
    );

    setPropertyType(
      typeParameter
        ? resolvePropertyType(
            typeParameter,
            propertyTypes,
            locale
          )
        : ""
    );

    setVisibleCount(6);
  }, [
    locale,
    propertyTypes,
    searchParams,
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
        Number(
          minimumRooms
        );

      const filtered =
        properties.filter(
          (property) => {
            const matchesLocation =
              !normalizedLocation ||
              normalizeText(
                property.location,
                locale
              ).includes(
                normalizedLocation
              ) ||
              normalizeText(
                property.title,
                locale
              ).includes(
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
              matchesLocation &&
              matchesType &&
              matchesPrice &&
              matchesRooms
            );
          }
        );

      return [
        ...filtered,
      ].sort(
        (
          first,
          second
        ) => {
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
    Boolean(
      location ||
      propertyType ||
      maximumPrice ||
      minimumRooms ||
      sort !== "recommended"
    );

  function resetFilters() {
    setLocation("");
    setPropertyType("");
    setMaximumPrice("");
    setMinimumRooms("");
    setSort("recommended");
    setVisibleCount(6);
  }

  function handleFilterChange() {
    setVisibleCount(6);
  }

  return (
    <>
      <section
        className={
          styles.searchSection
        }
        aria-label={t(
          "filterAria"
        )}
      >
        <div
          className={`container ${styles.searchContainer}`}
        >
          <div
            className={
              styles.searchGrid
            }
          >
            <label
              className={
                styles.field
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
                onChange={(
                  event
                ) => {
                  setLocation(
                    event.target
                      .value
                  );

                  handleFilterChange();
                }}
              />
            </label>

            <label
              className={
                styles.field
              }
            >
              <span>
                {t(
                  "propertyTypeLabel"
                )}
              </span>

              <select
                value={
                  propertyType
                }
                onChange={(
                  event
                ) => {
                  setPropertyType(
                    event.target
                      .value
                  );

                  handleFilterChange();
                }}
              >
                <option value="">
                  {t(
                    "allPropertyTypes"
                  )}
                </option>

                {propertyTypes.map(
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
                styles.field
              }
            >
              <span>
                {t(
                  "maximumPriceLabel"
                )}
              </span>

              <input
                type="text"
                value={
                  maximumPrice
                }
                placeholder={t(
                  "maximumPricePlaceholder"
                )}
                inputMode="numeric"
                onChange={(
                  event
                ) => {
                  setMaximumPrice(
                    event.target
                      .value
                  );

                  handleFilterChange();
                }}
              />
            </label>

            <label
              className={
                styles.field
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
                onChange={(
                  event
                ) => {
                  setMinimumRooms(
                    event.target
                      .value
                  );

                  handleFilterChange();
                }}
              >
                <option value="">
                  {t(
                    "anyRooms"
                  )}
                </option>

                {[
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                ].map(
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
          </div>

          <div
            className={
              styles.searchFooter
            }
          >
            <p aria-live="polite">
              {t(
                "resultCount",
                {
                  count:
                    filteredProperties.length,
                }
              )}
            </p>

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

                <span
                  aria-hidden="true"
                >
                  ×
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      <section
        className={
          styles.results
        }
        aria-labelledby="listing-results-title"
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
                  styles.eyebrow
                }
              >
                {t(
                  "currentSelection"
                )}
              </p>

              <h2 id="listing-results-title">
                {resultLabel}
              </h2>
            </div>

            <label
              className={
                styles.sort
              }
            >
              <span>
                {t(
                  "sortLabel"
                )}
              </span>

              <select
                value={sort}
                onChange={(
                  event
                ) =>
                  setSort(
                    event.target
                      .value as SortOption
                  )
                }
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
                  styles.grid
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
                      key={
                        property.id
                      }
                    >
                      <Link
                        className={
                          styles.imageLink
                        }
                        href={`/immobilien/${property.id}`}
                        aria-label={t(
                          "viewPropertyAria",
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
                            index < 2
                          }
                        />

                        <div
                          className={
                            styles.imageOverlay
                          }
                        />

                        {property.label && (
                          <span
                            className={
                              styles.label
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
                        <div
                          className={
                            styles.cardLocation
                          }
                        >
                          {
                            property.location
                          }
                        </div>

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
                            styles.cardFacts
                          }
                        >
                          <div>
                            <dt>
                              {t(
                                "facts.propertyType"
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
                            {t(
                              "details"
                            )}

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
                    onClick={() =>
                      setVisibleCount(
                        (
                          count
                        ) =>
                          count +
                          6
                      )
                    }
                  >
                    {t(
                      "loadMore"
                    )}

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
              className={
                styles.empty
              }
            >
              <span
                className={
                  styles.emptyNumber
                }
              >
                00
              </span>

              <div>
                <h3>
                  {t(
                    "empty.title"
                  )}
                </h3>

                <p>
                  {t(
                    "empty.description"
                  )}
                </p>

                <button
                  type="button"
                  onClick={
                    resetFilters
                  }
                >
                  {t(
                    "empty.reset"
                  )}

                  <Icon
                    name="arrow"
                    size={15}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}