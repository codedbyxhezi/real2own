import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "../legal.module.css";

type DatenschutzPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const navigation = [
  {
    key: "general",
    href: "#allgemeine-hinweise",
  },
  {
    key: "controller",
    href: "#verantwortlicher",
  },
  {
    key: "hosting",
    href: "#hosting",
  },
  {
    key: "contact",
    href: "#kontaktaufnahme",
  },
  {
    key: "cookies",
    href: "#cookies",
  },
  {
    key: "rights",
    href: "#rechte",
  },
  {
    key: "authority",
    href: "#aufsichtsbehoerde",
  },
] as const;

const hostingDataItems = [
  "ip",
  "dateTime",
  "page",
  "http",
  "browser",
  "operatingSystem",
  "referrer",
  "device",
  "security",
] as const;

const contactDataItems = [
  "name",
  "email",
  "phone",
  "message",
  "property",
  "recommendation",
  "valuation",
  "searchCriteria",
  "exclusiveOffers",
] as const;

const purposeItems = [
  "website",
  "enquiries",
  "communication",
  "contracts",
  "brokerage",
  "recommendations",
  "valuations",
  "mediation",
  "legalObligations",
] as const;

const legalBasisItems = [
  "consent",
  "contract",
  "legalObligation",
  "legitimateInterest",
] as const;

const rightsItems = [
  "access",
  "correction",
  "deletion",
  "restriction",
  "portability",
  "objection",
  "withdrawal",
  "complaint",
] as const;

export async function generateMetadata({
  params,
}: DatenschutzPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PrivacyPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function DatenschutzPage() {
  const t = await getTranslations("PrivacyPage");

  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <Link
            className={styles.backLink}
            href="/"
          >
            <Icon name="arrow" size={15} />
            {t("back")}
          </Link>

          <p className={styles.eyebrow}>
            {t("eyebrow")}
          </p>

          <h1>{t("title")}</h1>

          <p className={styles.updated}>
            {t("updated")}
          </p>
        </header>

        <div className={styles.layout}>
          <nav
            className={styles.navigation}
            aria-label={t("navigation.ariaLabel")}
          >
            <p>{t("navigation.title")}</p>

            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.key}
              >
                {t(`navigation.items.${item.key}`)}
              </a>
            ))}
          </nav>

          <article className={styles.content}>
            <section id="allgemeine-hinweise">
              <h2>{t("general.title")}</h2>

              <p>{t("general.paragraph1")}</p>

              <p>{t("general.paragraph2")}</p>
            </section>

            <section id="verantwortlicher">
              <h2>{t("controller.title")}</h2>

              <p>{t("controller.intro")}</p>

              <address className={styles.address}>
                <strong>real2own</strong>
                <br />
                {t("common.owner")}: Hüseyin Bayram
                <br />
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                {t("common.country")}
                <br />
                <br />
                {t("common.phone")}:{" "}
                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
                <br />
                {t("common.email")}:{" "}
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </address>
            </section>

            <section id="hosting">
              <h2>{t("hosting.title")}</h2>

              <p>{t("hosting.intro")}</p>

              <address className={styles.address}>
                <strong>Vercel Inc.</strong>
                <br />
                440 N Barranca Avenue #4133
                <br />
                Covina, CA 91723
                <br />
                United States
              </address>

              <p>{t("hosting.description")}</p>

              <p>{t("hosting.dataIntro")}</p>

              <ul>
                {hostingDataItems.map((item) => (
                  <li key={item}>
                    {t(`hosting.dataItems.${item}`)}
                  </li>
                ))}
              </ul>

              <p>{t("hosting.legalBasis")}</p>

              <h3>{t("hosting.processing.title")}</h3>

              <p>{t("hosting.processing.paragraph1")}</p>

              <p>{t("hosting.processing.paragraph2")}</p>

              <h3>{t("hosting.international.title")}</h3>

              <p>{t("hosting.international.paragraph1")}</p>

              <p>{t("hosting.international.paragraph2")}</p>

              <p>{t("hosting.international.paragraph3")}</p>

              <h3>{t("hosting.retention.title")}</h3>

              <p>{t("hosting.retention.paragraph1")}</p>

              <p>{t("hosting.retention.paragraph2")}</p>
            </section>

            <section id="kontaktaufnahme">
              <h2>{t("contact.title")}</h2>

              <p>{t("contact.paragraph1")}</p>

              <p>{t("contact.dataIntro")}</p>

              <ul>
                {contactDataItems.map((item) => (
                  <li key={item}>
                    {t(`contact.dataItems.${item}`)}
                  </li>
                ))}
              </ul>

              <p>{t("contact.contractBasis")}</p>

              <p>{t("contact.otherBasis")}</p>

              <p>{t("contact.consentBasis")}</p>

              <p>{t("contact.serviceProvider")}</p>
            </section>

            <section id="zwecke">
              <h2>{t("purposes.title")}</h2>

              <p>{t("purposes.intro")}</p>

              <ul>
                {purposeItems.map((item) => (
                  <li key={item}>
                    {t(`purposes.items.${item}`)}
                  </li>
                ))}
              </ul>
            </section>

            <section id="rechtsgrundlagen">
              <h2>{t("legalBases.title")}</h2>

              <p>{t("legalBases.intro")}</p>

              <ul>
                {legalBasisItems.map((item) => (
                  <li key={item}>
                    {t(`legalBases.items.${item}`)}
                  </li>
                ))}
              </ul>
            </section>

            <section id="speicherdauer">
              <h2>{t("retention.title")}</h2>

              <p>{t("retention.paragraph1")}</p>

              <p>{t("retention.paragraph2")}</p>

              <p>{t("retention.paragraph3")}</p>

              <p>{t("retention.paragraph4")}</p>
            </section>

            <section id="cookies">
              <h2>{t("cookies.title")}</h2>

              <p>{t("cookies.intro")}</p>

              <h3>{t("cookies.necessary.title")}</h3>

              <p>{t("cookies.necessary.paragraph1")}</p>

              <p>{t("cookies.necessary.paragraph2")}</p>

              <p>{t("cookies.necessary.paragraph3")}</p>

              <h3>{t("cookies.optional.title")}</h3>

              <p>{t("cookies.optional.paragraph1")}</p>

              <p>{t("cookies.optional.paragraph2")}</p>

              <p>{t("cookies.optional.paragraph3")}</p>

              <h3>{t("cookies.browser.title")}</h3>

              <p>{t("cookies.browser.paragraph1")}</p>

              <p>{t("cookies.browser.paragraph2")}</p>
            </section>

            <section id="weitergabe">
              <h2>{t("recipients.title")}</h2>

              <p>{t("recipients.paragraph1")}</p>

              <p>{t("recipients.paragraph2")}</p>

              <p>{t("recipients.paragraph3")}</p>

              <p>{t("recipients.paragraph4")}</p>
            </section>

            <section id="rechte">
              <h2>{t("rights.title")}</h2>

              <p>{t("rights.intro")}</p>

              <ul>
                {rightsItems.map((item) => (
                  <li key={item}>
                    {t(`rights.items.${item}`)}
                  </li>
                ))}
              </ul>

              <p>{t("rights.contact")}</p>

              <p>
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </p>
            </section>

            <section id="widerruf">
              <h2>{t("revocation.title")}</h2>

              <h3>{t("revocation.consent.title")}</h3>

              <p>{t("revocation.consent.description")}</p>

              <h3>{t("revocation.objection.title")}</h3>

              <p>{t("revocation.objection.paragraph1")}</p>

              <p>{t("revocation.objection.paragraph2")}</p>
            </section>

            <section id="aufsichtsbehoerde">
              <h2>{t("authority.title")}</h2>

              <p>{t("authority.paragraph1")}</p>

              <p>{t("authority.paragraph2")}</p>

              <address className={styles.address}>
                <strong>
                  Bayerisches Landesamt für Datenschutzaufsicht
                </strong>
                <br />
                Promenade 18
                <br />
                91522 Ansbach
                <br />
                {t("common.country")}
                <br />
                <br />
                {t("common.phone")}:{" "}
                <a href="tel:+499811800930">
                  +49 981 180093-0
                </a>
              </address>

              <p>{t("authority.paragraph3")}</p>
            </section>

            <section id="verschluesselung">
              <h2>{t("encryption.title")}</h2>

              <p>{t("encryption.paragraph1")}</p>

              <p>{t("encryption.paragraph2")}</p>
            </section>

            <section id="automatisierte-entscheidungen">
              <h2>{t("automated.title")}</h2>

              <p>{t("automated.paragraph1")}</p>

              <p>{t("automated.paragraph2")}</p>
            </section>

            <section id="datenschutzkontakt">
              <h2>{t("privacyContact.title")}</h2>

              <p>{t("privacyContact.description")}</p>

              <address className={styles.address}>
                <strong>real2own</strong>
                <br />
                {t("common.owner")}: Hüseyin Bayram
                <br />
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                {t("common.country")}
                <br />
                <br />
                {t("common.email")}:{" "}
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </address>
            </section>

            <section id="aktualisierung">
              <h2>{t("updates.title")}</h2>

              <p>{t("updates.paragraph1")}</p>

              <p>{t("updates.paragraph2")}</p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}