import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Icon } from "@/components/Icon/Icon";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import styles from "./Kontakt.module.css";

type KontaktPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const contactTopics = [
  {
    key: "search",
    number: "01",
    href: "/immobilien/kaufen",
  },
  {
    key: "offer",
    number: "02",
    href: "/immobilie-anbieten#anfrage",
  },
  {
    key: "project",
    number: "03",
    href: "/projekt-praesentieren#projektanfrage",
  },
  {
    key: "partner",
    number: "04",
    href: "/partner-werden#bewerbung",
  },
] as const;

export async function generateMetadata({
  params,
}: KontaktPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ContactPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function KontaktPage() {
  const t = await getTranslations("ContactPage");

  return (
    <>
      <Header />

      <main id="top">
        <section
          className={styles.hero}
          aria-labelledby="contact-title"
        >
          <Image
            src="/images/hero/hero-02.webp"
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

              <h1 id="contact-title">
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
                href="#kontaktformular"
              >
                {t("hero.action")}

                <Icon
                  name="arrow"
                  size={17}
                />
              </a>
            </div>

            <address className={styles.heroContact}>
              <span>Real2Own</span>

              <a href="mailto:info@real2own.com">
                info@real2own.com
              </a>

              <a href="tel:+491791415281">
                +49 179 14 15 281
              </a>

              <p>
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                {t("address.country")}
              </p>
            </address>
          </div>
        </section>

        <section
          className={styles.topics}
          aria-labelledby="contact-topics-title"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.darkEyebrow}>
                  {t("topics.eyebrow")}
                </p>

                <h2 id="contact-topics-title">
                  {t("topics.title")}
                </h2>
              </div>

              <p>
                {t("topics.description")}
              </p>
            </div>

            <div className={styles.topicGrid}>
              {contactTopics.map((topic) => (
                <article
                  className={styles.topic}
                  key={topic.key}
                >
                  <span>
                    {topic.number}
                  </span>

                  <h3>
                    {t(
                      `topics.items.${topic.key}.title`
                    )}
                  </h3>

                  <p>
                    {t(
                      `topics.items.${topic.key}.description`
                    )}
                  </p>

                  <Link href={topic.href}>
                    {t("topics.action")}

                    <Icon
                      name="arrow"
                      size={15}
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.formSection}
          id="kontaktformular"
          aria-labelledby="contact-form-title"
        >
          <div
            className={`container ${styles.formContainer}`}
          >
            <div className={styles.formIntro}>
              <p className={styles.eyebrow}>
                {t("formSection.eyebrow")}
              </p>

              <h2 id="contact-form-title">
                {t("formSection.title")}
              </h2>

              <p>
                {t("formSection.description")}
              </p>

              <div
                className={
                  styles.contactDetails
                }
              >
                <div>
                  <span>
                    {t(
                      "formSection.email"
                    )}
                  </span>

                  <a href="mailto:info@real2own.com">
                    info@real2own.com
                  </a>
                </div>

                <div>
                  <span>
                    {t(
                      "formSection.phone"
                    )}
                  </span>

                  <a href="tel:+491791415281">
                    +49 179 14 15 281
                  </a>
                </div>

                <div>
                  <span>
                    {t(
                      "formSection.address"
                    )}
                  </span>

                  <p>
                    Landsberger Str. 455
                    <br />
                    81241 München
                  </p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section
          className={
            styles.availability
          }
        >
          <div
            className={`container ${styles.availabilityContainer}`}
          >
            <div>
              <p
                className={
                  styles.darkEyebrow
                }
              >
                {t(
                  "availability.eyebrow"
                )}
              </p>

              <h2>
                {t(
                  "availability.title"
                )}
              </h2>
            </div>

            <div
              className={
                styles.availabilityCopy
              }
            >
              <p>
                {t(
                  "availability.description"
                )}
              </p>

              <a href="tel:+491791415281">
                {t(
                  "availability.action"
                )}

                <Icon
                  name="arrow"
                  size={17}
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}