import Image from "next/image";
import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./DestinationGrid.module.css";

const destinations = [
  {
    city: "Berlin",
    country: "Deutschland",
    listings: "6.240 Objekte",
    image: "/images/berlin.png",
    position: "center 45%",
    className: styles.featured,
  },
  {
    city: "Dubai",
    country: "Vereinigte Arabische Emirate",
    listings: "4.870 Objekte",
    image: "/images/dubai-marina.png",
    position: "center 52%",
    className: styles.vertical,
  },
  {
    city: "Mallorca",
    country: "Spanien",
    listings: "2.130 Objekte",
    image: "/images/mallorca.png",
    position: "center 58%",
    className: "",
  },
  {
    city: "Lissabon",
    country: "Portugal",
    listings: "1.940 Objekte",
    image: "/images/lisbon.png",
    position: "center 48%",
    className: "",
  },
];

export function DestinationGrid() {
  return (
    <section
      className={`section ${styles.section}`}
      id="international"
      aria-label="Internationale Immobilienmärkte"
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              align="center"
              eyebrow="International zuhause"
              title="Ein Zugang. Viele Märkte. Grenzenlose Möglichkeiten."
              description="Vergleiche Standorte, Immobilien und lokale Partner über Ländergrenzen hinweg – übersichtlich kuratiert und persönlich begleitet."
            />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {destinations.map((destination, index) => (
            <Reveal
              className={destination.className}
              delay={index * 70}
              key={destination.city}
            >
              <a
                className={styles.card}
                href="#kontakt"
                aria-label={`Immobilien in ${destination.city} entdecken`}
              >
                <Image
                  src={destination.image}
                  alt={`Immobilien und Architektur in ${destination.city}`}
                  fill
                  quality={88}
                  sizes="
                    (max-width: 680px) calc(100vw - 28px),
                    (max-width: 1000px) calc(50vw - 32px),
                    40vw
                  "
                  className={styles.image}
                  style={{ objectPosition: destination.position }}
                />

                <div className={styles.overlay} />

                <div className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className={styles.cardTop}>
                  <span>{destination.listings}</span>

                  <span className={styles.arrow} aria-hidden="true">
                    <Icon name="arrow" size={17} />
                  </span>
                </div>

                <div className={styles.cardCopy}>
                  <p>{destination.country}</p>
                  <h3>{destination.city}</h3>

                  <span className={styles.discover}>
                    Markt entdecken
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}