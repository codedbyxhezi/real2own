import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Icon,
  type IconName,
} from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Services.module.css";

const services: Array<{
  key: "buy" | "rent" | "land" | "build";
  icon: IconName;
  href:
    | "/immobilien/kaufen"
    | "/immobilien/mieten"
    | "/grundstuecke"
    | "/baupartner";
}> = [
  {
    key: "buy",
    icon: "home",
    href: "/immobilien/kaufen",
  },
  {
    key: "rent",
    icon: "key",
    href: "/immobilien/mieten",
  },
  {
    key: "land",
    icon: "land",
    href: "/grundstuecke",
  },
  {
    key: "build",
    icon: "building",
    href: "/baupartner",
  },
];

export function Services() {
  const t = useTranslations("Services");

  return (
    <section
      className={`section ${styles.section}`}
      id="leistungen"
      aria-label={t("ariaLabel")}
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const serviceTitle = t(
              `services.${service.key}.title`
            );

            return (
              <Reveal
                delay={index * 70}
                key={service.key}
              >
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className={styles.icon}
                      aria-hidden="true"
                    >
                      <Icon
                        name={service.icon}
                        size={22}
                      />
                    </span>
                  </div>

                  <div className={styles.cardCopy}>
                    <p className={styles.label}>
                      {t(
                        `services.${service.key}.label`
                      )}
                    </p>

                    <h3>{serviceTitle}</h3>

                    <p className={styles.text}>
                      {t(
                        `services.${service.key}.text`
                      )}
                    </p>
                  </div>

                  <Link
                    className={styles.link}
                    href={service.href}
                    aria-label={t("learnMoreAria", {
                      title: serviceTitle,
                    })}
                  >
                    <span>
                      {t("learnMore")}
                    </span>

                    <span
                      className={styles.linkIcon}
                      aria-hidden="true"
                    >
                      <Icon
                        name="arrow"
                        size={16}
                      />
                    </span>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}