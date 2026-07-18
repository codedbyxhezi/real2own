import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  const t = useTranslations("FinalCta");

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
              <p className={styles.eyebrow}>
                {t("eyebrow")}
              </p>

              <h2 id="final-cta-title">
                {t("title")}
              </h2>

              <p className={styles.description}>
                {t("description")}
              </p>
            </div>

            <div className={styles.actions}>
              <Link
                className={styles.action}
                href="/immobilien/kaufen"
              >
                <span className={styles.actionNumber}>
                  01
                </span>

                <span className={styles.actionCopy}>
                  <small>
                    {t("properties.label")}
                  </small>

                  <strong>
                    {t("properties.title")}
                  </strong>
                </span>

                <span
                  className={styles.actionIcon}
                  aria-hidden="true"
                >
                  <Icon
                    name="arrow"
                    size={17}
                  />
                </span>
              </Link>

              <Link
                className={styles.action}
                href="/partner-werden"
              >
                <span className={styles.actionNumber}>
                  02
                </span>

                <span className={styles.actionCopy}>
                  <small>
                    {t("partners.label")}
                  </small>

                  <strong>
                    {t("partners.title")}
                  </strong>
                </span>

                <span
                  className={styles.actionIcon}
                  aria-hidden="true"
                >
                  <Icon
                    name="arrow"
                    size={17}
                  />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}