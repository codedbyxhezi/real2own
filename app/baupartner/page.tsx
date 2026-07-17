import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./Baupartner.module.css";

export const metadata: Metadata = {
  title: "Baupartner",
  description:
    "Geprüfte Bauunternehmen, Architekturbüros und Projektpartner für Immobilien- und Bauvorhaben finden.",
};

const partnerTypes = [
  {
    number: "01",
    title: "Bauunternehmen",
    description:
      "Erfahrene Unternehmen für Neubau, Sanierung, Ausbau und schlüsselfertige Bauvorhaben.",
  },
  {
    number: "02",
    title: "Architekturbüros",
    description:
      "Architekten für individuelle Wohnkonzepte, Genehmigungsplanung und anspruchsvolle Architektur.",
  },
  {
    number: "03",
    title: "Projektentwickler",
    description:
      "Partner für Grundstücksentwicklung, Planung, Finanzierung und Realisierung komplexer Projekte.",
  },
  {
    number: "04",
    title: "Generalunternehmer",
    description:
      "Zentrale Ansprechpartner für die koordinierte und vollständige Umsetzung eines Bauvorhabens.",
  },
];

const steps = [
  {
    number: "01",
    title: "Vorhaben beschreiben",
    description:
      "Teile uns Standort, Projektart, Grundstücksdaten und deine wichtigsten Anforderungen mit.",
  },
  {
    number: "02",
    title: "Partner vergleichen",
    description:
      "Entdecke passende Unternehmen und verschaffe dir einen Überblick über Leistungen und Referenzen.",
  },
  {
    number: "03",
    title: "Direkt Kontakt aufnehmen",
    description:
      "Besprich dein Projekt mit ausgewählten Partnern und plane gemeinsam die nächsten Schritte.",
  },
];

export default function BaupartnerPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="baupartner-title"
        >
          <Image
            src="/images/baupartner/baupartner-hero.jpg"
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
                Bau- und Projektpartner
              </p>

              <h1 id="baupartner-title">
                Gute Projekte beginnen mit den richtigen Partnern.
              </h1>

              <p className={styles.heroDescription}>
                Finde geprüfte Bauunternehmen, Architekturbüros und
                Projektentwickler für private und professionelle
                Immobilienvorhaben.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryAction}
                  href="/kontakt"
                >
                  Partner finden
                  <Icon name="arrow" size={17} />
                </Link>

                <Link
                  className={styles.secondaryAction}
                  href="/partner-werden"
                >
                  Als Partner registrieren
                </Link>
              </div>
            </div>

            <dl className={styles.heroFacts}>
              <div>
                <dt>International</dt>
                <dd>Partner in ausgewählten Märkten</dd>
              </div>

              <div>
                <dt>Geprüft</dt>
                <dd>Klare Profile und Referenzen</dd>
              </div>

              <div>
                <dt>Direkt</dt>
                <dd>Kontakt ohne Umwege</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className={styles.categories}
          aria-labelledby="partner-categories-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.darkEyebrow}>
                  Partnernetzwerk
                </p>

                <h2 id="partner-categories-title">
                  Kompetenz für jede Projektphase.
                </h2>
              </div>

              <p>
                Von der ersten Idee über Planung und Genehmigung bis zur
                vollständigen Realisierung findest du passende Partner für
                dein Vorhaben.
              </p>
            </div>

            <div className={styles.categoryGrid}>
              {partnerTypes.map((partner) => (
                <article
                  className={styles.category}
                  key={partner.number}
                >
                  <span className={styles.categoryNumber}>
                    {partner.number}
                  </span>

                  <h3>{partner.title}</h3>

                  <p>{partner.description}</p>

                  <Link href="/kontakt">
                    Partner entdecken
                    <Icon name="arrow" size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.process}
          aria-labelledby="partner-process-title"
        >
          <div className={`container ${styles.processContainer}`}>
            <div className={styles.processIntro}>
              <p className={styles.eyebrow}>So funktioniert es</p>

              <h2 id="partner-process-title">
                Vom Vorhaben zum passenden Team.
              </h2>

              <p>
                Real2Own bringt Anforderungen, Standorte und geeignete
                Projektpartner übersichtlich zusammen.
              </p>
            </div>

            <div className={styles.steps}>
              {steps.map((step) => (
                <article className={styles.step} key={step.number}>
                  <span>{step.number}</span>

                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div className={styles.ctaCopy}>
                <p className={styles.darkEyebrow}>
                  Projekt starten
                </p>

                <h2>
                  Du planst ein Bau- oder Immobilienprojekt?
                </h2>

                <p>
                  Beschreibe dein Vorhaben und wir unterstützen dich bei
                  der Suche nach geeigneten Bau- und Projektpartnern.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link
                  className={styles.ctaPrimary}
                  href="/kontakt"
                >
                  Projekt besprechen
                  <Icon name="arrow" size={17} />
                </Link>

                <Link
                  className={styles.ctaSecondary}
                  href="/partner-werden"
                >
                  Partner werden
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