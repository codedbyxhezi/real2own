import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./International.module.css";

export const metadata: Metadata = {
  title: "Internationale Immobilien",
  description:
    "Ausgewählte Immobilienmärkte in Deutschland, Spanien, Portugal und den Vereinigten Arabischen Emiraten entdecken.",
};

const markets = [
  {
    number: "01",
    city: "Mallorca",
    country: "Spanien",
    description:
      "Mediterrane Villen, Apartments und Grundstücke in ausgewählten Küsten- und Bergregionen.",
    image: "/images/mallorca.png",
    href: "/immobilien/kaufen?location=mallorca",
    facts: ["Villen", "Apartments", "Grundstücke"],
  },
  {
    number: "02",
    city: "Dubai",
    country: "Vereinigte Arabische Emirate",
    description:
      "Moderne Residenzen, internationale Neubauprojekte und Immobilien in gefragten Stadtlagen.",
    image: "/images/dubai-marina.png",
    href: "/immobilien/kaufen?location=dubai",
    facts: ["Residenzen", "Neubau", "Investments"],
  },
  {
    number: "03",
    city: "Lissabon",
    country: "Portugal",
    description:
      "Stadthäuser, Apartments und Wohnprojekte zwischen historischer Architektur und Atlantikküste.",
    image: "/images/lisbon.png",
    href: "/immobilien/kaufen?location=lissabon",
    facts: ["Stadthäuser", "Apartments", "Projekte"],
  },
  {
    number: "04",
    city: "Berlin",
    country: "Deutschland",
    description:
      "Eigentumswohnungen, Stadtvillen und Entwicklungsprojekte in einer internationalen Metropole.",
    image: "/images/berlin.png",
    href: "/immobilien/kaufen?location=berlin",
    facts: ["Wohnungen", "Stadtvillen", "Entwicklung"],
  },
];

const benefits = [
  {
    number: "01",
    title: "Märkte vergleichen",
    description:
      "Objekte, Standorte und unterschiedliche Immobilienarten übersichtlich miteinander vergleichen.",
  },
  {
    number: "02",
    title: "Lokale Partner finden",
    description:
      "Zugang zu Ansprechpartnern, Maklern und Projektpartnern mit Kenntnis des jeweiligen Marktes.",
  },
  {
    number: "03",
    title: "Gezielter suchen",
    description:
      "Suchkriterien nach Standort, Objektart, Budget und Nutzung individuell eingrenzen.",
  },
];

export default function InternationalPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="international-title"
        >
          <Image
            src="/images/mallorca.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Internationale Märkte
              </p>

              <h1 id="international-title">
                Immobilien kennen keine Grenzen.
              </h1>

              <p className={styles.heroDescription}>
                Entdecke ausgewählte Immobilien, Grundstücke und
                Neubauprojekte in internationalen Märkten – zentral auf einer
                Plattform.
              </p>

              <Link
                className={styles.heroAction}
                href="#maerkte"
              >
                Märkte entdecken
                <Icon name="arrow" size={17} />
              </Link>
            </div>

            <div className={styles.heroIndex}>
              <span className={styles.heroIndexNumber}>04</span>

              <span>
                ausgewählte
                <br />
                Märkte
              </span>
            </div>
          </div>
        </section>

        <section
          className={styles.markets}
          id="maerkte"
          aria-labelledby="markets-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.darkEyebrow}>
                  Standorte
                </p>

                <h2 id="markets-title">
                  Märkte mit eigener Perspektive.
                </h2>
              </div>

              <p>
                Jeder Immobilienmarkt folgt eigenen Strukturen. Real2Own
                verbindet ausgewählte Standorte mit passenden Objekten und
                lokalen Projektpartnern.
              </p>
            </div>

            <div className={styles.marketGrid}>
              {markets.map((market, index) => (
                <article
                  className={`${styles.marketCard} ${
                    index === 0 ? styles.featuredMarket : ""
                  }`}
                  key={market.city}
                >
                  <Link
                    className={styles.marketImageLink}
                    href={market.href}
                    aria-label={`Immobilien in ${market.city} entdecken`}
                  >
                    <Image
                      src={market.image}
                      alt={`${market.city}, ${market.country}`}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 760px) 100vw, 66vw"
                          : "(max-width: 760px) 100vw, 33vw"
                      }
                      className={styles.marketImage}
                    />

                    <div className={styles.marketOverlay} />

                    <span className={styles.marketNumber}>
                      {market.number}
                    </span>

                    <span className={styles.marketCountry}>
                      {market.country}
                    </span>
                  </Link>

                  <div className={styles.marketContent}>
                    <div className={styles.marketTitle}>
                      <h3>{market.city}</h3>

                      <Link
                        href={market.href}
                        aria-label={`Zu den Immobilien in ${market.city}`}
                      >
                        <Icon name="arrow" size={17} />
                      </Link>
                    </div>

                    <p>{market.description}</p>

                    <div className={styles.marketFacts}>
                      {market.facts.map((fact) => (
                        <span key={fact}>{fact}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.approach}
          aria-labelledby="approach-title"
        >
          <div className={`container ${styles.approachContainer}`}>
            <div className={styles.approachIntro}>
              <p className={styles.eyebrow}>
                International suchen
              </p>

              <h2 id="approach-title">
                Ein Zugang zu unterschiedlichen Märkten.
              </h2>
            </div>

            <div className={styles.benefits}>
              {benefits.map((benefit) => (
                <article
                  className={styles.benefit}
                  key={benefit.number}
                >
                  <span>{benefit.number}</span>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.propertyTypes}>
          <div className={`container ${styles.propertyTypesContainer}`}>
            <div className={styles.propertyTypesCopy}>
              <p className={styles.darkEyebrow}>
                Unterschiedliche Anforderungen
              </p>

              <h2>
                Vom Stadtapartment bis zum Entwicklungsgrundstück.
              </h2>

              <p>
                Real2Own verbindet private Immobiliensuche, Grundstücke,
                Neubauprojekte und professionelle Projektpartnerschaften.
              </p>
            </div>

            <div className={styles.propertyTypeLinks}>
              <Link href="/immobilien/kaufen">
                <span>Immobilien kaufen</span>
                <Icon name="arrow" size={17} />
              </Link>

              <Link href="/immobilien/mieten">
                <span>Immobilien mieten</span>
                <Icon name="arrow" size={17} />
              </Link>

              <Link href="/grundstuecke">
                <span>Grundstücke</span>
                <Icon name="arrow" size={17} />
              </Link>

              <Link href="/neubauprojekte">
                <span>Neubauprojekte</span>
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div>
                <p className={styles.darkEyebrow}>
                  Persönliche Immobiliensuche
                </p>

                <h2>
                  Du suchst in einem bestimmten Land oder einer Region?
                </h2>
              </div>

              <div className={styles.ctaCopy}>
                <p>
                  Teile uns Standort, Budget und Anforderungen mit. Wir
                  unterstützen dich bei der gezielten internationalen Suche.
                </p>

                <Link href="/kontakt">
                  Suchauftrag starten
                  <Icon name="arrow" size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}