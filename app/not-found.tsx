import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./not-found.module.css";

const destinations = [
  {
    label: "Immobilien kaufen",
    href: "/immobilien/kaufen",
  },
  {
    label: "Immobilien mieten",
    href: "/immobilien/mieten",
  },
  {
    label: "Grundstücke",
    href: "/grundstuecke",
  },
  {
    label: "Neubauprojekte",
    href: "/neubauprojekte",
  },
];

export default function NotFound() {
  return (
    <>
      <Header />

      <main id="top" className={styles.page}>
        <section
          className={styles.hero}
          aria-labelledby="not-found-title"
        >
          <div className={`container ${styles.container}`}>
            <div className={styles.number} aria-hidden="true">
              404
            </div>

            <div className={styles.content}>
              <p className={styles.eyebrow}>
                Seite nicht gefunden
              </p>

              <h1 id="not-found-title">
                Dieser Ort ist nicht mehr verfügbar.
              </h1>

              <p className={styles.description}>
                Die aufgerufene Seite wurde möglicherweise verschoben,
                umbenannt oder ist nicht mehr erreichbar.
              </p>

              <div className={styles.actions}>
                <Link
                  className={styles.primaryAction}
                  href="/"
                >
                  Zur Startseite
                  <Icon name="arrow" size={17} />
                </Link>

                <Link
                  className={styles.secondaryAction}
                  href="/kontakt"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>

            <div className={styles.navigation}>
              <p>Weiter entdecken</p>

              <div className={styles.links}>
                {destinations.map((destination, index) => (
                  <Link
                    href={destination.href}
                    key={destination.href}
                  >
                    <span className={styles.linkNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{destination.label}</span>

                    <Icon name="arrow" size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}