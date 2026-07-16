import { Icon, type IconName } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Process.module.css";

const steps: Array<{
  number: string;
  icon: IconName;
  title: string;
  text: string;
}> = [
  {
    number: "01",
    icon: "search",
    title: "Entdecken",
    text: "Suche international nach Immobilien, Grundstücken und geeigneten Projektpartnern.",
  },
  {
    number: "02",
    icon: "heart",
    title: "Vergleichen",
    text: "Bewerte Angebote anhand einheitlicher Daten, Preise und Standortinformationen.",
  },
  {
    number: "03",
    icon: "calendar",
    title: "Verbinden",
    text: "Plane Besichtigungen und sprich direkt mit Maklern, Eigentümern oder Baupartnern.",
  },
  {
    number: "04",
    icon: "key",
    title: "Realisieren",
    text: "Begleite Kauf, Miete oder Bauprojekt über einen klar strukturierten Prozess.",
  },
];

export function Process() {
  return (
    <section
      className={`section ${styles.section}`}
      aria-label="So funktioniert Real2Own"
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              align="center"
              eyebrow="So funktioniert Real2Own"
              title="Ein klarer Weg zu deinem nächsten Zuhause."
              description="Von der ersten Suche bis zur erfolgreichen Übergabe bleibt jeder Schritt transparent, nachvollziehbar und persönlich begleitet."
            />
          </div>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal delay={index * 70} key={step.number}>
              <article className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.number}>{step.number}</span>

                  <span className={styles.icon} aria-hidden="true">
                    <Icon name={step.icon} size={20} />
                  </span>
                </div>

                <div className={styles.copy}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <span className={styles.progress} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}