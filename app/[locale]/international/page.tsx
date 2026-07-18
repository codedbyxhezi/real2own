import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import styles from "./International.module.css";

type InternationalPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const markets = [
  {
    key: "mallorca",
    number: "01",
    image: "/images/mallorca.png",
    href: "/immobilien/kaufen?location=mallorca",
  },
  {
    key: "dubai",
    number: "02",
    image: "/images/dubai-marina.png",
    href: "/immobilien/kaufen?location=dubai",
  },
  {
    key: "lisbon",
    number: "03",
    image: "/images/lisbon.png",
    href: "/immobilien/kaufen?location=lissabon",
  },
  {
    key: "berlin",
    number: "04",
    image: "/images/berlin.png",
    href: "/immobilien/kaufen?location=berlin",
  },
] as const;

const benefits = [
  {
    key: "compare",
    number: "01",
  },
  {
    key: "localPartners",
    number: "02",
  },
  {
    key: "targetedSearch",
    number: "03",
  },
] as const;

const propertyTypeLinks = [
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
] as const;

export async function generateMetadata({
  params,
}: InternationalPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "InternationalPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function InternationalPage() {
  const t = await getTranslations("InternationalPage");

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="international-title"
        >
          <Image
            src="/images/mallorca.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} />

          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                {t("hero.eyebrow")}
              </p>

              <h1 id="international-title">
                {t("hero.title")}
              </h1>

              <p className={styles.heroDescription}>
                {t("hero.description")}
              </p>

              <Link
                className={styles.heroAction}
                href="#maerkte"
              >
                {t("hero.action")}
                <Icon name="arrow" size={17} />
              </Link>
            </div>

            <div className={styles.heroIndex}>
              <span className={styles.heroIndexNumber}>
                04
              </span>

              <span>
                {t("hero.marketCountFirst")}
                <br />
                {t("hero.marketCountSecond")}
              </span>
            </div>
          </div>
        </section>

        <section
          className={styles.markets}
          id="maerkte"
          aria-labelledby="markets-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.darkEyebrow}>
                  {t("markets.eyebrow")}
                </p>

                <h2 id="markets-title">
                  {t("markets.title")}
                </h2>
              </div>

              <p>
                {t("markets.description")}
              </p>
            </div>

            <div className={styles.marketGrid}>
              {markets.map((market, index) => {
                const city = t(
                  `markets.items.${market.key}.city`
                );

                const country = t(
                  `markets.items.${market.key}.country`
                );

                return (
                  <article
                    className={`${styles.marketCard} ${
                      index === 0
                        ? styles.featuredMarket
                        : ""
                    }`}
                    key={market.key}
                  >
                    <Link
                      className={styles.marketImageLink}
                      href={market.href}
                      aria-label={t("markets.discoverAria", {
                        city,
                      })}
                    >
                      <Image
                        src={market.image}
                        alt={t("markets.imageAlt", {
                          city,
                          country,
                        })}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 760px) 100vw, 66vw"
                            : "(max-width: 760px) 100vw, 33vw"
                        }
                        className={styles.marketImage}
                      />

                      <div className={styles.marketOverlay} />

                      <span className={styles.marketNumber}>
                        {market.number}
                      </span>

                      <span className={styles.marketCountry}>
                        {country}
                      </span>
                    </Link>

                    <div className={styles.marketContent}>
                      <div className={styles.marketTitle}>
                        <h3>{city}</h3>

                        <Link
                          href={market.href}
                          aria-label={t("markets.openAria", {
                            city,
                          })}
                        >
                          <Icon name="arrow" size={17} />
                        </Link>
                      </div>

                      <p>
                        {t(
                          `markets.items.${market.key}.description`
                        )}
                      </p>

                      <div className={styles.marketFacts}>
                        {(["fact1", "fact2", "fact3"] as const).map(
                          (fact) => (
                            <span key={fact}>
                              {t(
                                `markets.items.${market.key}.facts.${fact}`
                              )}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className={styles.approach}
          aria-labelledby="approach-title"
        >
          <div className={`container ${styles.approachContainer}`}>
            <div className={styles.approachIntro}>
              <p className={styles.eyebrow}>
                {t("approach.eyebrow")}
              </p>

              <h2 id="approach-title">
                {t("approach.title")}
              </h2>
            </div>

            <div className={styles.benefits}>
              {benefits.map((benefit) => (
                <article
                  className={styles.benefit}
                  key={benefit.key}
                >
                  <span>{benefit.number}</span>

                  <div>
                    <h3>
                      {t(
                        `approach.benefits.${benefit.key}.title`
                      )}
                    </h3>

                    <p>
                      {t(
                        `approach.benefits.${benefit.key}.description`
                      )}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.propertyTypes}>
          <div
            className={`container ${styles.propertyTypesContainer}`}
          >
            <div className={styles.propertyTypesCopy}>
              <p className={styles.darkEyebrow}>
                {t("propertyTypes.eyebrow")}
              </p>

              <h2>
                {t("propertyTypes.title")}
              </h2>

              <p>
                {t("propertyTypes.description")}
              </p>
            </div>

            <div className={styles.propertyTypeLinks}>
              {propertyTypeLinks.map((link) => (
                <Link href={link.href} key={link.key}>
                  <span>
                    {t(`propertyTypes.links.${link.key}`)}
                  </span>

                  <Icon name="arrow" size={17} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div>
                <p className={styles.darkEyebrow}>
                  {t("cta.eyebrow")}
                </p>

                <h2>
                  {t("cta.title")}
                </h2>
              </div>

              <div className={styles.ctaCopy}>
                <p>
                  {t("cta.description")}
                </p>

                <Link href="/kontakt">
                  {t("cta.action")}
                  <Icon name="arrow" size={17} />
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