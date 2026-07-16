import Image from "next/image";
import { Icon } from "@/components/Icon/Icon";
import type { Property } from "@/data/properties";
import styles from "./PropertyCard.module.css";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
};

export function PropertyCard({
  property,
  priority = false,
}: PropertyCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          fill
          priority={priority}
          quality={88}
          sizes="
            (max-width: 650px) calc(100vw - 28px),
            (max-width: 1000px) calc(50vw - 34px),
            33vw
          "
          className={styles.image}
        />

        <div className={styles.imageShade} />

        <div className={styles.topRow}>
          <span className={styles.purpose}>
            {property.purpose}
          </span>

          <button
            className={styles.favoriteButton}
            type="button"
            aria-label={`${property.title} zu Favoriten hinzufügen`}
          >
            <Icon name="heart" size={18} />
          </button>
        </div>

        {property.badge ? (
          <span className={styles.badge}>
            {property.badge}
          </span>
        ) : null}
      </div>

      <div className={styles.body}>
        <div className={styles.location}>
          <Icon name="location" size={14} />

          <span>
            {property.location}, {property.country}
          </span>
        </div>

        <div className={styles.titleRow}>
          <h3>{property.title}</h3>
          <p className={styles.price}>{property.price}</p>
        </div>

        <div className={styles.details}>
          <span>
            <strong>{property.beds}</strong>
            Zimmer
          </span>

          <span>
            <strong>{property.baths}</strong>
            Bäder
          </span>

          <span>
            <strong>{property.area}</strong>
            m²
          </span>
        </div>
      </div>
    </article>
  );
}