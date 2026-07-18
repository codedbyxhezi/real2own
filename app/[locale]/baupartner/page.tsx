import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./Baupartner.module.css";

type BaupartnerPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const partnerTypes = [
  {
    key: "constructionCompanies",
    number: "01",
  },
  {
    key: "architectureFirms",
    number: "02",
  },
  {
    key: "projectDevelopers",
    number: "03",
  },
  {
    key: "generalContractors",
    number: "04",
  },
] as const;

const steps = [
  {
    key: "describe",
    number: "01",
  },
  {
    key: "compare",
    number: "02",
  },
  {
    key: "contact",
    number: "03",
  },
] as const;

export async function generateMetadata({
  params,
}: BaupartnerPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "BuildingPartnersPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function BaupartnerPage() {
  const t = await getTranslations(
    "BuildingPartnersPage"
  );

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="baupartner-title"
        >
          <Image
            src="/images/baupartner/baupartner-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div
            className={`container ${styles.heroContainer}`}
          >
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                {t("hero.eyebrow")}
              </p>

              <h1 id="baupartner-title">
                {t("hero.title")}
              </h1>

              <p
                className={
                  styles.heroDescription
                }
              >
                {t("hero.description")}
              </p>

              <div
                className={
                  styles.heroActions
                }
              >
                <Link
                  className={
                    styles.primaryAction
                  }
                  href="/kontakt"
                >
                  {t(
                    "hero.primaryAction"
                  )}

                  <Icon
                    name="arrow"
                    size={17}
                  />
                </Link>

                <Link
                  className={
                    styles.secondaryAction
                  }
                  href="/partner-werden"
                >
                  {t(
                    "hero.secondaryAction"
                  )}
                </Link>
              </div>
            </div>

            <dl className={styles.heroFacts}>
              <div>
                <dt>
                  {t(
                    "hero.facts.international.title"
                  )}
                </dt>

                <dd>
                  {t(
                    "hero.facts.international.text"
                  )}
                </dd>
              </div>

              <div>
                <dt>
                  {t(
                    "hero.facts.verified.title"
                  )}
                </dt>

                <dd>
                  {t(
                    "hero.facts.verified.text"
                  )}
                </dd>
              </div>

              <div>
                <dt>
                  {t(
                    "hero.facts.direct.title"
                  )}
                </dt>

                <dd>
                  {t(
                    "hero.facts.direct.text"
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          className={styles.categories}
          aria-labelledby="partner-categories-title"
        >
          <div className="container">
            <div
              className={
                styles.sectionHeading
              }
            >
              <div>
                <p
                  className={
                    styles.darkEyebrow
                  }
                >
                  {t(
                    "categories.eyebrow"
                  )}
                </p>

                <h2 id="partner-categories-title">
                  {t(
                    "categories.title"
                  )}
                </h2>
              </div>

              <p>
                {t(
                  "categories.description"
                )}
              </p>
            </div>

            <div
              className={
                styles.categoryGrid
              }
            >
              {partnerTypes.map(
                (partner) => (
                  <article
                    className={
                      styles.category
                    }
                    key={
                      partner.key
                    }
                  >
                    <span
                      className={
                        styles.categoryNumber
                      }
                    >
                      {
                        partner.number
                      }
                    </span>

                    <h3>
                      {t(
                        `categories.items.${partner.key}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `categories.items.${partner.key}.description`
                      )}
                    </p>

                    <Link href="/kontakt">
                      {t(
                        "categories.action"
                      )}

                      <Icon
                        name="arrow"
                        size={15}
                      />
                    </Link>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section
          className={styles.process}
          aria-labelledby="partner-process-title"
        >
          <div
            className={`container ${styles.processContainer}`}
          >
            <div
              className={
                styles.processIntro
              }
            >
              <p className={styles.eyebrow}>
                {t(
                  "process.eyebrow"
                )}
              </p>

              <h2 id="partner-process-title">
                {t("process.title")}
              </h2>

              <p>
                {t(
                  "process.description"
                )}
              </p>
            </div>

            <div className={styles.steps}>
              {steps.map((step) => (
                <article
                  className={styles.step}
                  key={step.key}
                >
                  <span>
                    {step.number}
                  </span>

                  <div>
                    <h3>
                      {t(
                        `process.steps.${step.key}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `process.steps.${step.key}.description`
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div
              className={
                styles.ctaCard
              }
            >
              <div
                className={
                  styles.ctaCopy
                }
              >
                <p
                  className={
                    styles.darkEyebrow
                  }
                >
                  {t(
                    "cta.eyebrow"
                  )}
                </p>

                <h2>
                  {t("cta.title")}
                </h2>

                <p>
                  {t(
                    "cta.description"
                  )}
                </p>
              </div>

              <div
                className={
                  styles.ctaActions
                }
              >
                <Link
                  className={
                    styles.ctaPrimary
                  }
                  href="/kontakt"
                >
                  {t(
                    "cta.primaryAction"
                  )}

                  <Icon
                    name="arrow"
                    size={17}
                  />
                </Link>

                <Link
                  className={
                    styles.ctaSecondary
                  }
                  href="/partner-werden"
                >
                  {t(
                    "cta.secondaryAction"
                  )}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}