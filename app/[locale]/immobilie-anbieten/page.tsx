import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { PropertyOfferForm } from "@/components/PropertyOfferForm/PropertyOfferForm";
import styles from "./ImmobilieAnbieten.module.css";

type ImmobilieAnbietenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const processSteps = [
  {
    key: "describe",
    number: "01",
  },
  {
    key: "review",
    number: "02",
  },
  {
    key: "marketing",
    number: "03",
  },
] as const;

export async function generateMetadata({
  params,
}: ImmobilieAnbietenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "OfferPropertyPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ImmobilieAnbietenPage() {
  const t = await getTranslations(
    "OfferPropertyPage"
  );

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="offer-title"
        >
          <Image
            src="/images/hero/hero-04.webp"
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

              <h1 id="offer-title">
                {t("hero.title")}
              </h1>

              <p
                className={
                  styles.heroDescription
                }
              >
                {t("hero.description")}
              </p>

              <a
                className={styles.heroAction}
                href="#anfrage"
              >
                {t("hero.action")}

                <Icon
                  name="arrow"
                  size={17}
                />
              </a>
            </div>

            <dl className={styles.heroFacts}>
              <div>
                <dt>
                  {t(
                    "hero.facts.personal.title"
                  )}
                </dt>

                <dd>
                  {t(
                    "hero.facts.personal.text"
                  )}
                </dd>
              </div>

              <div>
                <dt>
                  {t(
                    "hero.facts.individual.title"
                  )}
                </dt>

                <dd>
                  {t(
                    "hero.facts.individual.text"
                  )}
                </dd>
              </div>

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
            </dl>
          </div>
        </section>

        <section
          className={styles.formSection}
          id="anfrage"
          aria-labelledby="offer-form-title"
        >
          <div
            className={`container ${styles.formContainer}`}
          >
            <div className={styles.formIntro}>
              <p
                className={
                  styles.darkEyebrow
                }
              >
                {t(
                  "formSection.eyebrow"
                )}
              </p>

              <h2 id="offer-form-title">
                {t(
                  "formSection.title"
                )}
              </h2>

              <p>
                {t(
                  "formSection.description"
                )}
              </p>

              <div
                className={
                  styles.contactBox
                }
              >
                <span>
                  {t(
                    "formSection.directContact"
                  )}
                </span>

                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>

                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
              </div>
            </div>

            <PropertyOfferForm />
          </div>
        </section>

        <section
          className={styles.process}
          aria-labelledby="offer-process-title"
        >
          <div className="container">
            <div
              className={
                styles.processHeading
              }
            >
              <div>
                <p
                  className={
                    styles.darkEyebrow
                  }
                >
                  {t(
                    "process.eyebrow"
                  )}
                </p>

                <h2 id="offer-process-title">
                  {t("process.title")}
                </h2>
              </div>

              <p>
                {t(
                  "process.description"
                )}
              </p>
            </div>

            <div className={styles.steps}>
              {processSteps.map(
                (step) => (
                  <article
                    className={
                      styles.step
                    }
                    key={step.key}
                  >
                    <span>
                      {step.number}
                    </span>

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
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section
          className={
            styles.bottomCta
          }
        >
          <div
            className={`container ${styles.bottomCtaInner}`}
          >
            <div>
              <p
                className={
                  styles.eyebrow
                }
              >
                {t(
                  "bottomCta.eyebrow"
                )}
              </p>

              <h2>
                {t(
                  "bottomCta.title"
                )}
              </h2>
            </div>

            <Link href="/kontakt">
              {t(
                "bottomCta.action"
              )}

              <Icon
                name="arrow"
                size={17}
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}