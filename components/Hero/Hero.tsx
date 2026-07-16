import Image from "next/image";
import { SearchPanel } from "@/components/SearchPanel/SearchPanel";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Image
        src="/images/hero-real2own.webp"
        alt="Historische europäische Altstadt"
        className={styles.background}
        fill
        priority
        quality={90}
        sizes="100vw"
      />

      <div className={styles.overlay} />

      <div className={`container ${styles.content}`}>
        <div className={styles.desktopIntro}>
          <p className={styles.eyebrow}>
            International Real Estate
          </p>

          <h1>
            Immobilien,
            <span>die bleiben.</span>
          </h1>

          <p className={styles.description}>
            Ausgewählte Häuser, Wohnungen und Grundstücke in internationalen
            Märkten. Kaufen, mieten oder gemeinsam mit geprüften Partnern bauen.
          </p>
        </div>

        <div className={styles.mobileIntro}>
          <span>Real2Own</span>
          <h1>Finde dein neues Zuhause.</h1>
        </div>

        <div className={styles.search}>
          <SearchPanel />
        </div>

        <div className={styles.footer}>
          <p>
            Immobilien kaufen, mieten und bauen.
          </p>

          <div className={styles.markets}>
            <span>Berlin</span>
            <span>Dubai</span>
            <span>Madrid</span>
            <span>Lisbon</span>
          </div>
        </div>
      </div>
    </section>
  );
}