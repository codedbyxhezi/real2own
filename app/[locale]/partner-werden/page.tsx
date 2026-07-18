import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { PartnerApplicationForm } from "@/components/PartnerApplicationForm/PartnerApplicationForm";
import styles from "./PartnerWerden.module.css";

type PartnerWerdenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const partnerGroups = [
  "constructionCompanies",
  "architectureFirms",
  "projectDevelopers",
  "generalContractors",
  "realEstateAgents",
  "financeSpecialists",
] as const;

const benefits = [
  {
    key: "profile",
    number: "01",
  },
  {
    key: "enquiries",
    number: "02",
  },
  {
    key: "visibility",
    number: "03",
  },
] as const;

export async function generateMetadata({
  params,
}: PartnerWerdenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "BecomePartnerPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function PartnerWerdenPage() {
  const t = await getTranslations(
    "BecomePartnerPage"
  );

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="partner-title"
        >
          <Image
            src="/images/partner-werden/partner-werden-hero.jpg"
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

              <h1 id="partner-title">
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
                href="#bewerbung"
              >
                {t("hero.action")}

                <Icon
                  name="arrow"
                  size={17}
                />
              </a>
            </div>

            <div
              className={
                styles.partnerIndex
              }
            >
              <span>
                {t("hero.suitableFor")}
              </span>

              <ul>
                {partnerGroups
                  .slice(0, 4)
                  .map((group) => (
                    <li key={group}>
                      {t(
                        `partnerGroups.${group}`
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className={styles.network}
          aria-labelledby="network-title"
        >
          <div
            className={`container ${styles.networkHeading}`}
          >
            <div>
              <p
                className={
                  styles.darkEyebrow
                }
              >
                {t(
                  "network.eyebrow"
                )}
              </p>

              <h2 id="network-title">
                {t("network.title")}
              </h2>
            </div>

            <p>
              {t(
                "network.description"
              )}
            </p>
          </div>

          <div
            className={`container ${styles.partnerGroups}`}
          >
            {partnerGroups.map(
              (group, index) => (
                <article key={group}>
                  <span>
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>
                    {t(
                      `partnerGroups.${group}`
                    )}
                  </h3>
                </article>
              )
            )}
          </div>
        </section>

        <section
          className={styles.benefits}
          aria-labelledby="benefits-title"
        >
          <div
            className={`container ${styles.benefitsContainer}`}
          >
            <div
              className={
                styles.benefitsIntro
              }
            >
              <p className={styles.eyebrow}>
                {t(
                  "benefits.eyebrow"
                )}
              </p>

              <h2 id="benefits-title">
                {t("benefits.title")}
              </h2>

              <p>
                {t(
                  "benefits.description"
                )}
              </p>
            </div>

            <div
              className={
                styles.benefitList
              }
            >
              {benefits.map(
                (benefit) => (
                  <article
                    key={
                      benefit.key
                    }
                  >
                    <span>
                      {
                        benefit.number
                      }
                    </span>

                    <div>
                      <h3>
                        {t(
                          `benefits.items.${benefit.key}.title`
                        )}
                      </h3>

                      <p>
                        {t(
                          `benefits.items.${benefit.key}.description`
                        )}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section
          className={
            styles.formSection
          }
          id="bewerbung"
          aria-labelledby="application-title"
        >
          <div
            className={`container ${styles.formContainer}`}
          >
            <div
              className={
                styles.formIntro
              }
            >
              <p
                className={
                  styles.darkEyebrow
                }
              >
                {t(
                  "formSection.eyebrow"
                )}
              </p>

              <h2 id="application-title">
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
                  styles.directContact
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

            <PartnerApplicationForm />
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

            <Link href="/baupartner">
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