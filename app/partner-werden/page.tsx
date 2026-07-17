import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { PartnerApplicationForm } from "@/components/PartnerApplicationForm/PartnerApplicationForm";
import styles from "./PartnerWerden.module.css";

export const metadata: Metadata = {
  title: "Partner werden",
  description:
    "Als Bauunternehmen, Architekturbüro, Projektentwickler oder Immobilienpartner Teil des Real2Own-Netzwerks werden.",
};

const partnerGroups = [
  "Bauunternehmen",
  "Architekturbüros",
  "Projektentwickler",
  "Generalunternehmer",
  "Immobilienmakler",
  "Finanzierungs- und Fachpartner",
];

const benefits = [
  {
    number: "01",
    title: "Professionelles Profil",
    description:
      "Präsentiere Leistungen, Märkte, Referenzen und Spezialisierungen in einem klar strukturierten Partnerprofil.",
  },
  {
    number: "02",
    title: "Passende Projektanfragen",
    description:
      "Erhalte Anfragen von Eigentümern, Bauherren und Projektentwicklern mit konkretem Immobilienbezug.",
  },
  {
    number: "03",
    title: "Internationale Sichtbarkeit",
    description:
      "Positioniere dein Unternehmen in ausgewählten deutschen und internationalen Immobilienmärkten.",
  },
];

export default function PartnerWerdenPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="partner-title"
        >
          <Image
            src="/images/partner-werden/partner-werden-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Real2Own Partnernetzwerk</p>

              <h1 id="partner-title">
                Gemeinsam bessere Immobilienprojekte realisieren.
              </h1>

              <p className={styles.heroDescription}>
                Werde Teil eines Netzwerks aus Bauunternehmen,
                Architekturbüros, Projektentwicklern und spezialisierten
                Immobilienpartnern.
              </p>

              <a className={styles.heroAction} href="#bewerbung">
                Partnerschaft anfragen
                <Icon name="arrow" size={17} />
              </a>
            </div>

            <div className={styles.partnerIndex}>
              <span>Geeignet für</span>

              <ul>
                {partnerGroups.slice(0, 4).map((group) => (
                  <li key={group}>{group}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className={styles.network}
          aria-labelledby="network-title"
        >
          <div className={`container ${styles.networkHeading}`}>
            <div>
              <p className={styles.darkEyebrow}>Das Netzwerk</p>

              <h2 id="network-title">
                Unterschiedliche Kompetenzen. Ein gemeinsames Ziel.
              </h2>
            </div>

            <p>
              Real2Own verbindet Immobilienangebote, Bauvorhaben und
              professionelle Dienstleistungen. Partnerprofile schaffen dabei
              einen direkten Zugang zu relevanten Projekten und Auftraggebern.
            </p>
          </div>

          <div className={`container ${styles.partnerGroups}`}>
            {partnerGroups.map((group, index) => (
              <article key={group}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group}</h3>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.benefits}
          aria-labelledby="benefits-title"
        >
          <div className={`container ${styles.benefitsContainer}`}>
            <div className={styles.benefitsIntro}>
              <p className={styles.eyebrow}>Vorteile</p>

              <h2 id="benefits-title">
                Sichtbarkeit dort, wo neue Projekte entstehen.
              </h2>

              <p>
                Die Partnerschaft richtet sich an etablierte Unternehmen und
                spezialisierte Anbieter mit nachvollziehbaren Leistungen und
                professionellem Marktauftritt.
              </p>
            </div>

            <div className={styles.benefitList}>
              {benefits.map((benefit) => (
                <article key={benefit.number}>
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

        <section
          className={styles.formSection}
          id="bewerbung"
          aria-labelledby="application-title"
        >
          <div className={`container ${styles.formContainer}`}>
            <div className={styles.formIntro}>
              <p className={styles.darkEyebrow}>Partneranfrage</p>

              <h2 id="application-title">
                Stell uns dein Unternehmen vor.
              </h2>

              <p>
                Übermittle die wichtigsten Angaben zu deinem Unternehmen,
                deinen Leistungen und den Märkten, in denen du tätig bist.
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

            <PartnerApplicationForm />
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div className={`container ${styles.bottomCtaInner}`}>
            <div>
              <p className={styles.eyebrow}>Projektpartner suchen</p>

              <h2>
                Du möchtest zuerst das bestehende Netzwerk kennenlernen?
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