import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { PropertyOfferForm } from "@/components/PropertyOfferForm/PropertyOfferForm";
import styles from "./ProjektPraesentieren.module.css";

export const metadata: Metadata = {
  title: "Projekt präsentieren",
  description:
    "Neubauprojekt oder Immobilienentwicklung bei Real2Own präsentieren und internationale Interessenten erreichen.",
};

const advantages = [
  {
    number: "01",
    title: "Klare Positionierung",
    description:
      "Projekt, Architektur, Standort und Zielgruppe werden strukturiert und hochwertig präsentiert.",
  },
  {
    number: "02",
    title: "Internationale Sichtbarkeit",
    description:
      "Das Projekt kann Interessenten aus unterschiedlichen Märkten zugänglich gemacht werden.",
  },
  {
    number: "03",
    title: "Direkte Anfragen",
    description:
      "Interessenten und mögliche Partner erhalten einen klaren Zugang zu den wichtigsten Projektdaten.",
  },
];

export default function ProjektPraesentierenPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="project-title"
        >
          <Image
            src="/images/grundstuecke/grundstueck-04.jpg"
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
                Für Projektentwickler
              </p>

              <h1 id="project-title">
                Projekte sichtbar machen. Potenziale klar vermitteln.
              </h1>

              <p className={styles.heroDescription}>
                Präsentiere Neubauprojekte, Wohnentwicklungen und geplante
                Immobilienvorhaben professionell auf Real2Own.
              </p>

              <a className={styles.heroAction} href="#projektanfrage">
                Projekt einreichen
                <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
        </section>

        <section
          className={styles.intro}
          aria-labelledby="project-intro-title"
        >
          <div className={`container ${styles.introContainer}`}>
            <div>
              <p className={styles.darkEyebrow}>
                Projektvermarktung
              </p>

              <h2 id="project-intro-title">
                Mehr als eine gewöhnliche Projektanzeige.
              </h2>
            </div>

            <p>
              Eine überzeugende Präsentation verbindet Architektur,
              Standortqualität, Projektdaten und die Geschichte hinter der
              Entwicklung zu einem verständlichen Gesamtbild.
            </p>
          </div>

          <div className={`container ${styles.advantages}`}>
            {advantages.map((advantage) => (
              <article
                className={styles.advantage}
                key={advantage.number}
              >
                <span>{advantage.number}</span>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.formSection}
          id="projektanfrage"
          aria-labelledby="project-form-title"
        >
          <div className={`container ${styles.formContainer}`}>
            <div className={styles.formIntro}>
              <p className={styles.eyebrow}>
                Projekt einreichen
              </p>

              <h2 id="project-form-title">
                Stell uns dein Vorhaben vor.
              </h2>

              <p>
                Sende uns zunächst die wichtigsten Eckdaten. Unterlagen,
                Grundrisse, Visualisierungen und Exposés können anschließend
                direkt per E-Mail ergänzt werden.
              </p>

              <div className={styles.directContact}>
                <span>Direkter Kontakt</span>

                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>

                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
              </div>
            </div>

            <PropertyOfferForm
              defaultTransaction="Projekt präsentieren"
            />
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={`container ${styles.bottomCtaInner}`}>
            <div>
              <p className={styles.darkEyebrow}>
                Projektpartnerschaften
              </p>

              <h2>
                Du suchst zusätzlich Bau- oder Vertriebspartner?
              </h2>
            </div>

            <Link href="/baupartner">
              Baupartner entdecken
              <Icon name="arrow" size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}