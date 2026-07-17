import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import styles from "./Kontakt.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Real2Own kontaktieren und Immobilien-, Grundstücks- oder Projektanfragen persönlich besprechen.",
};

const contactTopics = [
  {
    number: "01",
    title: "Immobilie suchen",
    description:
      "Teile uns Standort, Budget und deine Anforderungen für Kauf oder Miete mit.",
    href: "/immobilien/kaufen",
  },
  {
    number: "02",
    title: "Immobilie anbieten",
    description:
      "Besprich mit uns den Verkauf oder die Vermietung deiner Immobilie.",
    href: "/immobilie-anbieten#anfrage",
  },
  {
    number: "03",
    title: "Projekt vorstellen",
    description:
      "Präsentiere ein Grundstück, Neubauprojekt oder eine Immobilienentwicklung.",
    href: "/projekt-praesentieren#projektanfrage",
  },
  {
    number: "04",
    title: "Partner werden",
    description:
      "Stell uns dein Unternehmen und deine Leistungen für Bauprojekte vor.",
    href: "/partner-werden#bewerbung",
  },
];

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="contact-title"
        >
          <Image
            src="/images/hero/hero-02.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Kontakt</p>

              <h1 id="contact-title">
                Lass uns über dein Immobilienvorhaben sprechen.
              </h1>

              <p className={styles.heroDescription}>
                Ob Kauf, Miete, Verkauf, Grundstück, Neubauprojekt oder
                Partnerschaft – wir freuen uns auf den persönlichen Austausch.
              </p>

              <a className={styles.heroAction} href="#kontaktformular">
                Nachricht senden
                <Icon name="arrow" size={17} />
              </a>
            </div>

            <address className={styles.heroContact}>
              <span>Real2Own</span>

              <a href="mailto:info@real2own.com">
                info@real2own.com
              </a>

              <a href="tel:+491791415281">
                +49 179 14 15 281
              </a>

              <p>
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                Deutschland
              </p>
            </address>
          </div>
        </section>

        <section
          className={styles.topics}
          aria-labelledby="contact-topics-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.darkEyebrow}>
                  Dein Anliegen
                </p>

                <h2 id="contact-topics-title">
                  Der direkte Weg zum passenden Bereich.
                </h2>
              </div>

              <p>
                Wähle den Bereich, der zu deinem Vorhaben passt, oder sende uns
                direkt eine allgemeine Nachricht über das Kontaktformular.
              </p>
            </div>

            <div className={styles.topicGrid}>
              {contactTopics.map((topic) => (
                <article className={styles.topic} key={topic.number}>
                  <span>{topic.number}</span>

                  <h3>{topic.title}</h3>

                  <p>{topic.description}</p>

                  <Link href={topic.href}>
                    Zum Bereich
                    <Icon name="arrow" size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.formSection}
          id="kontaktformular"
          aria-labelledby="contact-form-title"
        >
          <div className={`container ${styles.formContainer}`}>
            <div className={styles.formIntro}>
              <p className={styles.eyebrow}>
                Persönliche Nachricht
              </p>

              <h2 id="contact-form-title">
                Wie können wir dich unterstützen?
              </h2>

              <p>
                Beschreibe dein Anliegen kurz. Je genauer die ersten Angaben
                sind, desto gezielter können wir auf deine Anfrage eingehen.
              </p>

              <div className={styles.contactDetails}>
                <div>
                  <span>E-Mail</span>
                  <a href="mailto:info@real2own.com">
                    info@real2own.com
                  </a>
                </div>

                <div>
                  <span>Telefon</span>
                  <a href="tel:+491791415281">
                    +49 179 14 15 281
                  </a>
                </div>

                <div>
                  <span>Anschrift</span>
                  <p>
                    Landsberger Str. 455
                    <br />
                    81241 München
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className={styles.availability}>
          <div className={`container ${styles.availabilityContainer}`}>
            <div>
              <p className={styles.darkEyebrow}>
                Persönlicher Austausch
              </p>

              <h2>
                Ein gutes Gespräch schafft Klarheit.
              </h2>
            </div>

            <div className={styles.availabilityCopy}>
              <p>
                Termine für persönliche Gespräche oder Videokonferenzen werden
                individuell vereinbart.
              </p>

              <a href="tel:+491791415281">
                Jetzt anrufen
                <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}