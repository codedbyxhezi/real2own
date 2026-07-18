import { useTranslations } from "next-intl";
import {
  Icon,
  type IconName,
} from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Process.module.css";

const steps: Array<{
  key: "discover" | "compare" | "connect" | "realize";
  number: string;
  icon: IconName;
}> = [
  {
    key: "discover",
    number: "01",
    icon: "search",
  },
  {
    key: "compare",
    number: "02",
    icon: "heart",
  },
  {
    key: "connect",
    number: "03",
    icon: "calendar",
  },
  {
    key: "realize",
    number: "04",
    icon: "key",
  },
];

export function Process() {
  const t = useTranslations("Process");

  return (
    <section
      className={`section ${styles.section}`}
      aria-label={t("ariaLabel")}
    >
      <div className="container">
        <Reveal>
          <div className={styles.heading}>
            <SectionHeading
              align="center"
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />
          </div>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal
              delay={index * 70}
              key={step.key}
            >
              <article className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.number}>
                    {step.number}
                  </span>

                  <span
                    className={styles.icon}
                    aria-hidden="true"
                  >
                    <Icon
                      name={step.icon}
                      size={20}
                    />
                  </span>
                </div>

                <div className={styles.copy}>
                  <h3>
                    {t(`steps.${step.key}.title`)}
                  </h3>

                  <p>
                    {t(`steps.${step.key}.text`)}
                  </p>
                </div>

                <span
                  className={styles.progress}
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}