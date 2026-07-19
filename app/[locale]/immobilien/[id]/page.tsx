import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import {
  getPropertyById,
  propertyCatalog,
} from "@/data/propertyCatalog";
import styles from "./PropertyDetail.module.css";

type PropertyPageProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

type CategoryKey =
  | "buy"
  | "rent"
  | "land"
  | "development";

function getCategoryKey(
  category: string
): CategoryKey {
  switch (category) {
    case "Miete":
      return "rent";

    case "Grundstück":
      return "land";

    case "Neubauprojekt":
      return "development";

    default:
      return "buy";
  }
}

function getCategoryHref(
  category: CategoryKey
):
  | "/immobilien/kaufen"
  | "/immobilien/mieten"
  | "/grundstuecke"
  | "/neubauprojekte" {
  switch (category) {
    case "rent":
      return "/immobilien/mieten";

    case "land":
      return "/grundstuecke";

    case "development":
      return "/neubauprojekte";

    default:
      return "/immobilien/kaufen";
  }
}

export function generateStaticParams() {
  return propertyCatalog.map(
    (property) => ({
      id: String(property.id),
    })
  );
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id, locale } =
    await params;

  const property =
    getPropertyById(
      id,
      locale
    );

  const t =
    await getTranslations({
      locale,
      namespace:
        "PropertyDetailPage",
    });

  if (!property) {
    return {
      title: t(
        "metadata.notFoundTitle"
      ),
    };
  }

  return {
    title: property.title,

    description: t(
      "metadata.description",
      {
        title:
          property.title,

        location:
          property.location,

        price:
          property.price,
      }
    ),
  };
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { id, locale } =
    await params;

  const property =
    getPropertyById(
      id,
      locale
    );

  if (!property) {
    notFound();
  }

  const t =
    await getTranslations({
      locale,
      namespace:
        "PropertyDetailPage",
    });

  const categoryKey =
    getCategoryKey(
      property.category
    );

  const categoryHref =
    getCategoryHref(
      categoryKey
    );

  const categoryLabel =
    t(
      `categories.${categoryKey}`
    );

  const mailSubject =
    encodeURIComponent(
      t("email.subject", {
        id: property.id,
        title:
          property.title,
      })
    );

  const mailBody =
    encodeURIComponent(
      [
        t("email.greeting"),
        "",
        t("email.interest"),
        "",
        property.title,
        property.location,

        t(
          "email.propertyNumber",
          {
            id: property.id,
          }
        ),

        "",
        t(
          "email.moreInformation"
        ),
        "",
        t("email.closing"),
      ].join("\n")
    );

  return (
    <>
      <Header />

      <main id="top">
        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          className={styles.hero}
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            priority
            sizes="100vw"
            className={
              styles.heroImage
            }
          />

          <div
            className={
              styles.heroOverlay
            }
          />

          <div
            className={`container ${styles.heroContainer}`}
          >
            <div
              className={
                styles.breadcrumbs
              }
            >
              <Link href="/">
                {t(
                  "breadcrumbs.home"
                )}
              </Link>

              <span>/</span>

              <Link
                href={
                  categoryHref
                }
              >
                {categoryLabel}
              </Link>

              <span>/</span>

              <span>
                R2O-
                {property.id}
              </span>
            </div>

            <div
              className={
                styles.heroContent
              }
            >
              <div>
                <div
                  className={
                    styles.meta
                  }
                >
                  <span>
                    {
                      categoryLabel
                    }
                  </span>

                  <span>
                    {
                      property.location
                    }
                  </span>

                  {property.label && (
                    <span>
                      {
                        property.label
                      }
                    </span>
                  )}
                </div>

                <h1>
                  {property.title}
                </h1>
              </div>

              <div
                className={
                  styles.heroPrice
                }
              >
                <span>
                  {t(
                    "hero.offerPrice"
                  )}
                </span>

                <strong>
                  {property.price}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SUMMARY
            ===================================================== */}

        <section
          className={
            styles.summary
          }
        >
          <div
            className={`container ${styles.summaryContainer}`}
          >
            <dl
              className={
                styles.facts
              }
            >
              <div>
                <dt>
                  {t(
                    "summary.propertyType"
                  )}
                </dt>

                <dd>
                  {
                    property.propertyType
                  }
                </dd>
              </div>

              <div>
                <dt>
                  {t(
                    "summary.area"
                  )}
                </dt>

                <dd>
                  {property.area}
                </dd>
              </div>

              <div>
                <dt>
                  {t(
                    "summary.units"
                  )}
                </dt>

                <dd>
                  {property.rooms}
                </dd>
              </div>

              <div>
                <dt>
                  {t(
                    "summary.propertyNumber"
                  )}
                </dt>

                <dd>
                  R2O-
                  {property.id}
                </dd>
              </div>
            </dl>

            <div
              className={
                styles.actions
              }
            >
              <a
                className={
                  styles.primaryAction
                }
                href={`mailto:info@real2own.com?subject=${mailSubject}&body=${mailBody}`}
              >
                {t(
                  "summary.primaryAction"
                )}

                <Icon
                  name="arrow"
                  size={17}
                />
              </a>

              <Link
                className={
                  styles.secondaryAction
                }
                href="/kontakt#kontaktformular"
              >
                {t(
                  "summary.secondaryAction"
                )}
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
            ===================================================== */}

        <section
          className={
            styles.gallery
          }
          aria-label={t(
            "gallery.ariaLabel"
          )}
        >
          <div
            className={`container ${styles.galleryGrid}`}
          >
            {property.gallery.map(
              (
                image,
                index
              ) => (
                <div
                  className={
                    index === 0
                      ? styles.galleryMain
                      : styles.galleryItem
                  }
                  key={`${image}-${index}`}
                >
                  <Image
                    src={image}
                    alt={t(
                      "gallery.imageAlt",
                      {
                        title:
                          property.title,

                        number:
                          index + 1,
                      }
                    )}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 760px) 100vw, 66vw"
                        : "(max-width: 760px) 100vw, 33vw"
                    }
                    className={
                      styles.galleryImage
                    }
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            INFORMATION
            ===================================================== */}

        <section
          className={
            styles.information
          }
        >
          <div
            className={`container ${styles.informationContainer}`}
          >
            <div
              className={
                styles.description
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                {t(
                  "information.eyebrow"
                )}
              </p>

              <h2>
                {t(
                  "information.title"
                )}
              </h2>

              <p
                className={
                  styles.location
                }
              >
                {
                  property.location
                }
              </p>

              <p
                className={
                  styles.descriptionText
                }
              >
                {
                  property.description
                }
              </p>

              <p
                className={
                  styles.disclaimer
                }
              >
                {t(
                  "information.disclaimer"
                )}
              </p>
            </div>

            <div
              className={
                styles.featureSection
              }
            >
              <p
                className={
                  styles.eyebrow
                }
              >
                {t(
                  "features.eyebrow"
                )}
              </p>

              <ul
                className={
                  styles.features
                }
              >
                {property.features.map(
                  (
                    feature,
                    index
                  ) => (
                    <li
                      key={`${feature}-${index}`}
                    >
                      <span>
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
            ===================================================== */}

        <section
          className={
            styles.contact
          }
        >
          <div
            className={`container ${styles.contactContainer}`}
          >
            <div>
              <p
                className={
                  styles.contactEyebrow
                }
              >
                {t(
                  "contact.eyebrow"
                )}
              </p>

              <h2>
                {t(
                  "contact.title"
                )}
              </h2>
            </div>

            <div
              className={
                styles.contactCopy
              }
            >
              <p>
                {t(
                  "contact.description"
                )}
              </p>

              <a
                href="tel:+491791415281"
              >
                +49 179 14 15 281
              </a>

              <a
                href="mailto:info@real2own.com"
              >
                info@real2own.com
              </a>

              <Link
                href="/kontakt#kontaktformular"
              >
                {t(
                  "contact.action"
                )}

                <Icon
                  name="arrow"
                  size={17}
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}