import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section
      className={styles.section}
      id="kontakt"
      aria-labelledby="final-cta-title"
    >
      <div className="container">
        <Reveal>
          <div className={styles.card}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>Der nächste Schritt</p>

              <h2 id="final-cta-title">
                Aus einer Suche wird eine Entscheidung.
              </h2>

              <p className={styles.description}>
                Entdecke internationale Immobilien, finde passende Grundstücke
                oder werde als geprüfter Bau- und Projektpartner Teil von
                Real2Own.
              </p>
            </div>

            <div className={styles.actions}>
              <a className={styles.action} href="#top">
                <span className={styles.actionNumber}>01</span>

                <span className={styles.actionCopy}>
                  <small>Für Käufer und Mieter</small>
                  <strong>Immobilien entdecken</strong>
                </span>

                <span className={styles.actionIcon} aria-hidden="true">
                  <Icon name="arrow" size={17} />
                </span>
              </a>

              <a
                className={styles.action}
                href="mailto:partner@real2own.example"
              >
                <span className={styles.actionNumber}>02</span>

                <span className={styles.actionCopy}>
                  <small>Für Unternehmen</small>
                  <strong>Partner werden</strong>
                </span>

                <span className={styles.actionIcon} aria-hidden="true">
                  <Icon name="arrow" size={17} />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}