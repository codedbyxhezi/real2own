import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import { ListingExplorer } from "@/components/ListingExplorer/ListingExplorer";
import type { ListingProperty } from "@/types/property";
import styles from "./ListingPage.module.css";

type ListingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  resultLabel: string;
  properties: ListingProperty[];
};

export function ListingPage({
  eyebrow,
  title,
  description,
  resultLabel,
  properties,
}: ListingPageProps) {
  return (
    <>
      <section
        className={styles.hero}
        aria-labelledby="listing-page-title"
      >
        <div className={`container ${styles.heroContainer}`}>
          <p className={styles.eyebrow}>{eyebrow}</p>

          <h1 id="listing-page-title">{title}</h1>

          <p className={styles.description}>
            {description}
          </p>
        </div>
      </section>

      <ListingExplorer
        resultLabel={resultLabel}
        properties={properties}
      />

      <section className={styles.cta}>
        <div className={`container ${styles.ctaContainer}`}>
          <div>
            <p className={styles.ctaEyebrow}>
              Persönliche Immobiliensuche
            </p>

            <h2>
              Noch nicht das passende Angebot gefunden?
            </h2>
          </div>

          <div className={styles.ctaCopy}>
            <p>
              Teile uns Standort, Budget und Anforderungen mit. Wir
              unterstützen dich bei der gezielten Suche.
            </p>

            <Link href="/kontakt#kontaktformular">
              Suchauftrag starten
              <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}