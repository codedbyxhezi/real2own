import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Icon,
  type IconName,
} from "@/components/Icon/Icon";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./PartnerShowcase.module.css";

const partnerTypes = [
  "generalContractors",
  "architects",
  "construction",
  "smartHome",
  "energyConsulting",
  "projectDevelopment",
] as const;

const advantages: Array<{
  key: "directContact" | "selectedPartners";
  icon: IconName;
}> = [
  {
    key: "directContact",
    icon: "users",
  },
  {
    key: "selectedPartners",
    icon: "shield",
  },
];

export function PartnerShowcase() {
  const t = useTranslations("PartnerShowcase");

  return (
    <section
      className={styles.section}
      id="partner"
      aria-label={t("ariaLabel")}
    >
      <div className={`container ${styles.container}`}>
        <div className={styles.layout}>
          <Reveal className={styles.visual}>
            <Image
              src="/images/partner-build.png"
              alt={t("imageAlt")}
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
              <span className={styles.index}>
                01
              </span>

              <span className={styles.network}>
                {t("partnerNetwork")}
              </span>
            </div>

            <div className={styles.verification}>
              <span className={styles.verifiedIcon}>
                <Icon
                  name="shield"
                  size={18}
                />
              </span>

              <span>
                <strong>
                  {t("verifiedTitle")}
                </strong>

                <small>
                  {t("verifiedText")}
                </small>
              </span>
            </div>

            <div className={styles.metric}>
              <strong>180+</strong>

              <span>
                {t("activePartners")}
              </span>
            </div>
          </Reveal>

          <Reveal
            className={styles.copy}
            delay={100}
          >
            <p className={styles.eyebrow}>
              {t("eyebrow")}
            </p>

            <h2>
              {t("title")}
            </h2>

            <p className={styles.lead}>
              {t("description")}
            </p>

            <div className={styles.partnerTypes}>
              {partnerTypes.map(
                (type, index) => (
                  <div
                    className={styles.partnerType}
                    key={type}
                  >
                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <strong>
                      {t(
                        `partnerTypes.${type}`
                      )}
                    </strong>
                  </div>
                )
              )}
            </div>

            <div className={styles.points}>
              {advantages.map(
                (advantage) => (
                  <div
                    className={styles.point}
                    key={advantage.key}
                  >
                    <span
                      className={
                        styles.pointIcon
                      }
                    >
                      <Icon
                        name={advantage.icon}
                        size={19}
                      />
                    </span>

                    <span>
                      <strong>
                        {t(
                          `advantages.${advantage.key}.title`
                        )}
                      </strong>

                      <small>
                        {t(
                          `advantages.${advantage.key}.description`
                        )}
                      </small>
                    </span>
                  </div>
                )
              )}
            </div>

            <Link
              className={styles.cta}
              href="/baupartner"
            >
              <span>
                {t("cta")}
              </span>

              <span
                className={styles.ctaIcon}
                aria-hidden="true"
              >
                <Icon
                  name="arrow"
                  size={17}
                />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}