import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import { PropertyCard } from "@/components/PropertyCard/PropertyCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { properties } from "@/data/properties";
import styles from "./PropertyShowcase.module.css";

export function PropertyShowcase() {
  const t = useTranslations("PropertyShowcase");

  return (
    <section
      className={`section ${styles.section}`}
      id="immobilien"
      aria-label={t("ariaLabel")}
    >
      <div className={`container ${styles.container}`}>
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
              action={
                <Link
                  className={styles.allLink}
                  href="/immobilien/kaufen"
                >
                  <span>{t("viewAll")}</span>

                  <span
                    className={styles.linkIcon}
                    aria-hidden="true"
                  >
                    <Icon name="arrow" size={16} />
                  </span>
                </Link>
              }
            />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {properties.map((property, index) => (
            <Reveal
              delay={(index % 3) * 70}
              key={property.id}
            >
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}