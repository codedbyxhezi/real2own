import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./UeberUns.module.css";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Real2Own verbindet Immobilien, Grundstücke, Neubauprojekte und professionelle Partner in deutschen und internationalen Märkten.",
};

const principles = [
  {
    number: "01",
    title: "Persönlicher Austausch",
    description:
      "Immobilienentscheidungen sind individuell. Deshalb setzen wir auf direkten Kontakt und klare Kommunikation.",
  },
  {
    number: "02",
    title: "Internationale Perspektive",
    description:
      "Wir verbinden Immobilienangebote und Projekte über regionale Grenzen hinweg mit passenden Interessenten.",
  },
  {
    number: "03",
    title: "Qualität vor Masse",
    description:
      "Im Mittelpunkt stehen ausgewählte Angebote, professionelle Präsentationen und nachvollziehbare Informationen.",
  },
];

const areas = [
  {
    title: "Immobilien kaufen",
    description:
      "Ausgewählte Wohnungen, Häuser und Villen in Deutschland und internationalen Märkten.",
    href: "/immobilien/kaufen",
  },
  {
    title: "Immobilien mieten",
    description:
      "Wohnungen und Häuser für langfristiges Wohnen oder einen neuen Lebensmittelpunkt.",
    href: "/immobilien/mieten",
  },
  {
    title: "Grundstücke",
    description:
      "Baugrundstücke und Entwicklungsflächen für private und professionelle Vorhaben.",
    href: "/grundstuecke",
  },
  {
    title: "Neubauprojekte",
    description:
      "Moderne Wohnprojekte, Residenzen und Immobilienentwicklungen in ausgewählten Lagen.",
    href: "/neubauprojekte",
  },
  {
    title: "Baupartner",
    description:
      "Zugang zu Bauunternehmen, Architekten und Projektpartnern für die Realisierung neuer Ideen.",
    href: "/baupartner",
  },
  {
    title: "Internationale Märkte",
    description:
      "Immobilien und Projekte in unterschiedlichen Ländern über eine zentrale Plattform entdecken.",
    href: "/international",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="about-title"
        >
          <Image
            src="/images/hero/hero-03.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Über Real2Own</p>

              <h1 id="about-title">
                Immobilien verbinden Menschen, Orte und Möglichkeiten.
              </h1>

              <p className={styles.heroDescription}>
                Real2Own ist eine Plattform für Immobilien, Grundstücke,
                Neubauprojekte und professionelle Partner in deutschen und
                internationalen Märkten.
              </p>

              <Link className={styles.heroAction} href="/kontakt">
                Persönlich kennenlernen
                <Icon name="arrow" size={17} />
              </Link>
            </div>

            <div className={styles.heroNote}>
              <span>Real2Own</span>

              <p>
                Persönliche Immobilienvermittlung mit internationaler
                Perspektive.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.story}
          aria-labelledby="story-title"
        >
          <div className={`container ${styles.storyContainer}`}>
            <div>
              <p className={styles.darkEyebrow}>Unsere Idee</p>

              <h2 id="story-title">
                Ein zentraler Ort für unterschiedliche Immobilienvorhaben.
              </h2>
            </div>

            <div className={styles.storyText}>
              <p>
                Die Suche nach einer Immobilie, einem Grundstück oder einem
                geeigneten Projektpartner ist häufig auf viele unterschiedliche
                Plattformen und Ansprechpartner verteilt.
              </p>

              <p>
                Real2Own führt diese Bereiche zusammen. Käufer, Mieter,
                Eigentümer, Projektentwickler und Baupartner erhalten einen
                übersichtlichen Zugang zu passenden Angeboten und Kontakten.
              </p>

              <p>
                Dabei steht nicht die größtmögliche Anzahl von Inseraten im
                Mittelpunkt, sondern eine klare, hochwertige und persönliche
                Präsentation.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.principles}
          aria-labelledby="principles-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Unsere Haltung</p>

                <h2 id="principles-title">
                  Klarheit, Qualität und persönlicher Kontakt.
                </h2>
              </div>

              <p>
                Immobilien sind mehr als Daten und Quadratmeter. Gute
                Entscheidungen benötigen verständliche Informationen, passende
                Ansprechpartner und Vertrauen.
              </p>
            </div>

            <div className={styles.principleGrid}>
              {principles.map((principle) => (
                <article
                  className={styles.principle}
                  key={principle.number}
                >
                  <span>{principle.number}</span>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.areas}
          aria-labelledby="areas-title"
        >
          <div className={`container ${styles.areasContainer}`}>
            <div className={styles.areasIntro}>
              <p className={styles.darkEyebrow}>Unsere Bereiche</p>

              <h2 id="areas-title">
                Immobilien und Projekte aus verschiedenen Perspektiven.
              </h2>

              <p>
                Real2Own verbindet private Immobiliensuche mit Grundstücken,
                Neubauprojekten und professionellen Projektpartnerschaften.
              </p>
            </div>

            <div className={styles.areaList}>
              {areas.map((area, index) => (
                <Link href={area.href} key={area.title}>
                  <span className={styles.areaNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </div>

                  <Icon name="arrow" size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={`container ${styles.contactContainer}`}>
            <div>
              <p className={styles.eyebrow}>Real2Own kennenlernen</p>

              <h2>
                Lass uns über deine Immobilienpläne sprechen.
              </h2>
            </div>

            <div className={styles.contactDetails}>
              <p>
                Ob Kauf, Miete, Verkauf, Grundstück oder Projektpartnerschaft:
                Wir freuen uns auf den persönlichen Austausch.
              </p>

              <Link href="/kontakt">
                Kontakt aufnehmen
                <Icon name="arrow" size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}