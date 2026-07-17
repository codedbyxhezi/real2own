import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { PropertyOfferForm } from "../../components/PropertyOfferForm/PropertyOfferForm";
import styles from "./ImmobilieAnbieten.module.css";

export const metadata: Metadata = {
  title: "Immobilie anbieten",
  description:
    "Immobilie, Grundstück oder Neubauprojekt bei Real2Own anbieten und eine persönliche Vermarktungsanfrage stellen.",
};

const processSteps = [
  {
    number: "01",
    title: "Objekt beschreiben",
    description:
      "Übermittle uns die wichtigsten Angaben zu deiner Immobilie, dem Grundstück oder dem Projekt.",
  },
  {
    number: "02",
    title: "Anfrage prüfen",
    description:
      "Wir prüfen die Angaben und besprechen anschließend die passende Vorgehensweise mit dir.",
  },
  {
    number: "03",
    title: "Vermarktung planen",
    description:
      "Gemeinsam definieren wir Zielgruppe, Positionierung und die nächsten Schritte der Vermarktung.",
  },
];

export default function ImmobilieAnbietenPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="offer-title"
        >
          <Image
            src="/images/hero/hero-04.webp"
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
                Immobilie anbieten
              </p>

              <h1 id="offer-title">
                Deine Immobilie verdient den richtigen Auftritt.
              </h1>

              <p className={styles.heroDescription}>
                Teile uns die wichtigsten Informationen mit. Wir besprechen
                persönlich, wie deine Immobilie, dein Grundstück oder dein
                Projekt präsentiert werden kann.
              </p>

              <a
                className={styles.heroAction}
                href="#anfrage"
              >
                Anfrage starten
                <Icon name="arrow" size={17} />
              </a>
            </div>

            <dl className={styles.heroFacts}>
              <div>
                <dt>Persönlich</dt>
                <dd>Direkter Austausch zu deinem Vorhaben</dd>
              </div>

              <div>
                <dt>Individuell</dt>
                <dd>Vermarktung passend zum Objekt</dd>
              </div>

              <div>
                <dt>International</dt>
                <dd>Zugang zu unterschiedlichen Zielmärkten</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className={styles.formSection}
          id="anfrage"
          aria-labelledby="offer-form-title"
        >
          <div className={`container ${styles.formContainer}`}>
            <div className={styles.formIntro}>
              <p className={styles.darkEyebrow}>
                Objektanfrage
              </p>

              <h2 id="offer-form-title">
                Erzähl uns von deinem Objekt.
              </h2>

              <p>
                Trage die verfügbaren Informationen ein. Fehlende Details
                können wir später gemeinsam ergänzen.
              </p>

              <div className={styles.contactBox}>
                <span>Direkter Kontakt</span>

                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>

                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
              </div>
            </div>

            <PropertyOfferForm />
          </div>
        </section>

        <section
          className={styles.process}
          aria-labelledby="offer-process-title"
        >
          <div className="container">
            <div className={styles.processHeading}>
              <div>
                <p className={styles.darkEyebrow}>
                  Der weitere Ablauf
                </p>

                <h2 id="offer-process-title">
                  Klar, persönlich und ohne Umwege.
                </h2>
              </div>

              <p>
                Eine gute Vermarktung beginnt nicht mit einem Standardinserat,
                sondern mit einem klaren Verständnis für Objekt, Standort und
                Zielgruppe.
              </p>
            </div>

            <div className={styles.steps}>
              {processSteps.map((step) => (
                <article
                  className={styles.step}
                  key={step.number}
                >
                  <span>{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={`container ${styles.bottomCtaInner}`}>
            <div>
              <p className={styles.eyebrow}>
                Noch Fragen?
              </p>

              <h2>
                Lass uns dein Vorhaben persönlich besprechen.
              </h2>
            </div>

            <Link href="/kontakt">
              Kontakt aufnehmen
              <Icon name="arrow" size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}