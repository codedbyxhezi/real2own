import Image from "next/image";
import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./PartnerShowcase.module.css";

const partnerTypes = [
  "Generalunternehmer",
  "Architekturbüros",
  "Holz- und Massivbau",
  "Smart-Home-Technik",
  "Energieberatung",
  "Projektentwicklung",
];

const advantages = [
  {
    icon: "users" as const,
    title: "Direkter Kontakt",
    description: "Ohne unnötige Vermittlungswege zum passenden Ansprechpartner.",
  },
  {
    icon: "shield" as const,
    title: "Geprüfte Partner",
    description: "Nachvollziehbare Profile, Referenzen und Leistungsbereiche.",
  },
];

export function PartnerShowcase() {
  return (
    <section
      className={styles.section}
      id="partner"
      aria-label="Baupartner und Projektpartner"
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.layout}>
          <Reveal className={styles.visual}>
            <Image
              src="/images/partner-build.png"
              alt="Architektur- und Baupartner bei der Projektplanung"
              fill
              quality={90}
              sizes="
                (max-width: 950px) calc(100vw - 32px),
                50vw
              "
              className={styles.image}
            />

            <div className={styles.visualShade} />

            <div className={styles.visualTop}>
              <span className={styles.index}>01</span>

              <span className={styles.network}>
                Partnernetzwerk
              </span>
            </div>

            <div className={styles.verification}>
              <span className={styles.verifiedIcon}>
                <Icon name="shield" size={18} />
              </span>

              <span>
                <strong>Real2Own Verified</strong>
                <small>
                  Identität, Referenzen und Leistungen geprüft
                </small>
              </span>
            </div>

            <div className={styles.metric}>
              <strong>180+</strong>
              <span>aktive Bau- und Projektpartner</span>
            </div>
          </Reveal>

          <Reveal className={styles.copy} delay={100}>
            <p className={styles.eyebrow}>Planen. Bauen. Realisieren.</p>

            <h2>
              Die richtigen Partner für ein Projekt, das Bestand hat.
            </h2>

            <p className={styles.lead}>
              Real2Own verbindet Eigentümer, Investoren und Bauherren mit
              ausgewählten Unternehmen aus Architektur, Bau und technischer
              Planung. Regional erfahren und transparent vergleichbar.
            </p>

            <div className={styles.partnerTypes}>
              {partnerTypes.map((type, index) => (
                <div className={styles.partnerType} key={type}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{type}</strong>
                </div>
              ))}
            </div>

            <div className={styles.points}>
              {advantages.map((advantage) => (
                <div className={styles.point} key={advantage.title}>
                  <span className={styles.pointIcon}>
                    <Icon name={advantage.icon} size={19} />
                  </span>

                  <span>
                    <strong>{advantage.title}</strong>
                    <small>{advantage.description}</small>
                  </span>
                </div>
              ))}
            </div>

            <a className={styles.cta} href="#kontakt">
              <span>Baupartner entdecken</span>

              <span className={styles.ctaIcon}>
                <Icon name="arrow" size={17} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}