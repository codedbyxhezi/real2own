import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./UeberUns.module.css";

type UeberUnsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const principles = [
  {
    key: "personal",
    number: "01",
  },
  {
    key: "international",
    number: "02",
  },
  {
    key: "quality",
    number: "03",
  },
] as const;

const areas = [
  {
    key: "buy",
    href: "/immobilien/kaufen",
  },
  {
    key: "rent",
    href: "/immobilien/mieten",
  },
  {
    key: "land",
    href: "/grundstuecke",
  },
  {
    key: "developments",
    href: "/neubauprojekte",
  },
  {
    key: "partners",
    href: "/baupartner",
  },
  {
    key: "international",
    href: "/international",
  },
] as const;

export async function generateMetadata({
  params,
}: UeberUnsPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "AboutPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function UeberUnsPage() {
  const t = await getTranslations("AboutPage");

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="about-title"
        >
          <Image
            src="/images/hero/hero-03.webp"
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

              <h1 id="about-title">
                {t("hero.title")}
              </h1>

              <p className={styles.heroDescription}>
                {t("hero.description")}
              </p>

              <Link
                className={styles.heroAction}
                href="/kontakt"
              >
                {t("hero.action")}

                <Icon
                  name="arrow"
                  size={17}
                />
              </Link>
            </div>

            <div className={styles.heroNote}>
              <span>Real2Own</span>

              <p>
                {t("hero.note")}
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.story}
          aria-labelledby="story-title"
        >
          <div
            className={`container ${styles.storyContainer}`}
          >
            <div>
              <p className={styles.darkEyebrow}>
                {t("story.eyebrow")}
              </p>

              <h2 id="story-title">
                {t("story.title")}
              </h2>
            </div>

            <div className={styles.storyText}>
              <p>
                {t("story.paragraph1")}
              </p>

              <p>
                {t("story.paragraph2")}
              </p>

              <p>
                {t("story.paragraph3")}
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.principles}
          aria-labelledby="principles-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>
                  {t("principles.eyebrow")}
                </p>

                <h2 id="principles-title">
                  {t("principles.title")}
                </h2>
              </div>

              <p>
                {t("principles.description")}
              </p>
            </div>

            <div className={styles.principleGrid}>
              {principles.map((principle) => (
                <article
                  className={styles.principle}
                  key={principle.key}
                >
                  <span>
                    {principle.number}
                  </span>

                  <h3>
                    {t(
                      `principles.items.${principle.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `principles.items.${principle.key}.description`
                    )}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.areas}
          aria-labelledby="areas-title"
        >
          <div
            className={`container ${styles.areasContainer}`}
          >
            <div className={styles.areasIntro}>
              <p className={styles.darkEyebrow}>
                {t("areas.eyebrow")}
              </p>

              <h2 id="areas-title">
                {t("areas.title")}
              </h2>

              <p>
                {t("areas.description")}
              </p>
            </div>

            <div className={styles.areaList}>
              {areas.map((area, index) => (
                <Link
                  href={area.href}
                  key={area.key}
                >
                  <span
                    className={styles.areaNumber}
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <div>
                    <h3>
                      {t(
                        `areas.items.${area.key}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `areas.items.${area.key}.description`
                      )}
                    </p>
                  </div>

                  <Icon
                    name="arrow"
                    size={18}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div
            className={`container ${styles.contactContainer}`}
          >
            <div>
              <p className={styles.eyebrow}>
                {t("contact.eyebrow")}
              </p>

              <h2>
                {t("contact.title")}
              </h2>
            </div>

            <div
              className={styles.contactDetails}
            >
              <p>
                {t("contact.description")}
              </p>

              <Link href="/kontakt">
                {t("contact.action")}

                <Icon
                  name="arrow"
                  size={17}
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}