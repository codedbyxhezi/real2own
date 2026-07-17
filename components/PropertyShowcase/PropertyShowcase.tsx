import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import { PropertyCard } from "@/components/PropertyCard/PropertyCard";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { properties } from "@/data/properties";
import styles from "./PropertyShowcase.module.css";

export function PropertyShowcase() {
  return (
    <section
      className={`section ${styles.section}`}
      id="immobilien"
      aria-label="Ausgewählte Immobilien"
    >
      <div className={`container ${styles.container}`}>
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              eyebrow="Ausgewählte Immobilien"
              title="Orte, die mehr aus deinem Leben machen."
              description="Entdecke kuratierte Wohn- und Investmentobjekte – transparent aufbereitet, international vergleichbar und bereit für den nächsten Schritt."
              action={
                <Link
                  className={styles.allLink}
                  href="/immobilien/kaufen"
                >
                  <span>Alle Immobilien</span>

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