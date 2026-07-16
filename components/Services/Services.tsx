import { Icon, type IconName } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Services.module.css";

const services: Array<{
  icon: IconName;
  label: string;
  title: string;
  text: string;
}> = [
  {
    icon: "home",
    label: "Immobilien",
    title: "Haus oder Wohnung kaufen",
    text: "Ausgewählte Angebote, nachvollziehbare Daten und direkter Zugang zu regionalen Ansprechpartnern.",
  },
  {
    icon: "key",
    label: "Mieten",
    title: "Flexibel wohnen",
    text: "Langzeitmiete, temporäres Wohnen und hochwertige Residenzen an internationalen Standorten.",
  },
  {
    icon: "land",
    label: "Grundstücke",
    title: "Flächen mit Potenzial finden",
    text: "Bauland und Investmentflächen mit wichtigen Standort-, Entwicklungs- und Potenzialdaten.",
  },
  {
    icon: "building",
    label: "Neubau",
    title: "Mit geprüften Partnern bauen",
    text: "Architekturbüros, Bauunternehmen und Projektentwickler transparent vergleichen und kontaktieren.",
  },
];

export function Services() {
  return (
    <section
      className={`section ${styles.section}`}
      id="leistungen"
      aria-label="Leistungen von Real2Own"
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              eyebrow="Alles an einem Ort"
              title="Vom ersten Wunsch bis zur Schlüsselübergabe."
              description="Real2Own verbindet Immobiliensuche, Standortentscheidung und Projektumsetzung in einer internationalen Plattform."
            />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal delay={index * 70} key={service.title}>
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={service.icon} size={22} />
                  </span>
                </div>

                <div className={styles.cardCopy}>
                  <p className={styles.label}>{service.label}</p>
                  <h3>{service.title}</h3>
                  <p className={styles.text}>{service.text}</p>
                </div>

                <a
                  className={styles.link}
                  href="#kontakt"
                  aria-label={`Mehr über ${service.title}`}
                >
                  <span>Mehr erfahren</span>

                  <span className={styles.linkIcon} aria-hidden="true">
                    <Icon name="arrow" size={16} />
                  </span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}