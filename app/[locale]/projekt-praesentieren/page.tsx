import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { PropertyOfferForm } from "@/components/PropertyOfferForm/PropertyOfferForm";
import styles from "./ProjektPraesentieren.module.css";

type ProjektPraesentierenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const advantages = [
  {
    key: "positioning",
    number: "01",
  },
  {
    key: "visibility",
    number: "02",
  },
  {
    key: "enquiries",
    number: "03",
  },
] as const;

export async function generateMetadata({
  params,
}: ProjektPraesentierenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PresentProjectPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ProjektPraesentierenPage() {
  const t = await getTranslations(
    "PresentProjectPage"
  );

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="project-title"
        >
          <Image
            src="/images/grundstuecke/grundstueck-04.jpg"
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

              <h1 id="project-title">
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
                href="#projektanfrage"
              >
                {t("hero.action")}

                <Icon
                  name="arrow"
                  size={17}
                />
              </a>
            </div>
          </div>
        </section>

        <section
          className={styles.intro}
          aria-labelledby="project-intro-title"
        >
          <div
            className={`container ${styles.introContainer}`}
          >
            <div>
              <p
                className={
                  styles.darkEyebrow
                }
              >
                {t("intro.eyebrow")}
              </p>

              <h2 id="project-intro-title">
                {t("intro.title")}
              </h2>
            </div>

            <p>
              {t("intro.description")}
            </p>
          </div>

          <div
            className={`container ${styles.advantages}`}
          >
            {advantages.map(
              (advantage) => (
                <article
                  className={
                    styles.advantage
                  }
                  key={advantage.key}
                >
                  <span>
                    {advantage.number}
                  </span>

                  <h3>
                    {t(
                      `advantages.${advantage.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `advantages.${advantage.key}.description`
                    )}
                  </p>
                </article>
              )
            )}
          </div>
        </section>

        <section
          className={
            styles.formSection
          }
          id="projektanfrage"
          aria-labelledby="project-form-title"
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
                  styles.eyebrow
                }
              >
                {t(
                  "formSection.eyebrow"
                )}
              </p>

              <h2 id="project-form-title">
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

            <PropertyOfferForm
              defaultTransaction="presentProject"
            />
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
                  styles.darkEyebrow
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