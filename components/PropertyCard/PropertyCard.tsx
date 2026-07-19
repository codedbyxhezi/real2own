import Image from "next/image";
import {
  useLocale,
  useTranslations,
} from "next-intl";
import { Icon } from "@/components/Icon/Icon";
import type { Property } from "@/data/properties";
import styles from "./PropertyCard.module.css";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
  variant?: "showcase" | "listing";
};

const localeMap = {
  de: "de-DE",
  en: "en-GB",
  es: "es-ES",
} as const;

export function PropertyCard({
  property,
  priority = false,
  variant = "showcase",
}: PropertyCardProps) {
  const t = useTranslations("PropertyCard");
  const locale = useLocale();

  const numberLocale =
    localeMap[
      locale as keyof typeof localeMap
    ] ?? "de-DE";

  const formattedPrice =
    new Intl.NumberFormat(numberLocale, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(property.price);

  const country = t(
    `countries.${property.country}`
  );

  const isListing =
    variant === "listing";

  return (
    <article
      className={`${styles.card} ${
        isListing
          ? styles.listingCard
          : styles.showcaseCard
      }`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={property.image}
          alt={t("imageAlt", {
            title: property.title,
            location: property.location,
          })}
          fill
          priority={priority}
          quality={90}
          sizes={
            isListing
              ? `
                (max-width: 650px) calc(100vw - 32px),
                (max-width: 1000px) calc(50vw - 32px),
                31vw
              `
              : `
                (max-width: 650px) calc(100vw - 28px),
                (max-width: 1000px) calc(50vw - 34px),
                33vw
              `
          }
          className={styles.image}
        />

        <div className={styles.imageShade} />

        <div className={styles.topRow}>
          <span className={styles.purpose}>
            {t(
              `purposes.${property.purpose}`
            )}
          </span>

          <button
            className={styles.favoriteButton}
            type="button"
            aria-label={t("favoriteAria", {
              title: property.title,
            })}
          >
            <Icon
              name="heart"
              size={18}
            />
          </button>
        </div>

        {property.badge ? (
          <span className={styles.badge}>
            {t(
              `badges.${property.badge}`
            )}
          </span>
        ) : null}
      </div>

      <div className={styles.body}>
        <div className={styles.location}>
          <Icon
            name="location"
            size={14}
          />

          <span>
            {property.location},{" "}
            {country}
          </span>
        </div>

        <div className={styles.titleRow}>
          <div>
            <span className={styles.type}>
              {t(
                `types.${property.type}`
              )}
            </span>

            <h3>
              {property.title}
            </h3>
          </div>

          <p className={styles.price}>
            {formattedPrice}

            {property.pricePeriod ===
              "month" && (
              <small>
                {" "}
                / {t("perMonth")}
              </small>
            )}
          </p>
        </div>

        <div className={styles.details}>
          <span>
            <strong>
              {property.beds}
            </strong>

            {t("rooms")}
          </span>

          <span>
            <strong>
              {property.baths}
            </strong>

            {t("bathrooms")}
          </span>

          <span>
            <strong>
              {property.area}
            </strong>

            m²
          </span>
        </div>
      </div>
    </article>
  );
}