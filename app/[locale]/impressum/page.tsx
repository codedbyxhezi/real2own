import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "../legal.module.css";

type ImpressumPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const navigation = [
  {
    key: "provider",
    href: "#anbieter",
  },
  {
    key: "contact",
    href: "#kontakt",
  },
  {
    key: "activity",
    href: "#taetigkeit",
  },
  {
    key: "authority",
    href: "#aufsichtsbehoerde",
  },
  {
    key: "responsible",
    href: "#verantwortlich",
  },
] as const;

export async function generateMetadata({
  params,
}: ImpressumPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "ImprintPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ImpressumPage() {
  const t = await getTranslations("ImprintPage");

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

          <h1>
            {t("title")}
          </h1>

          <p className={styles.updated}>
            {t("updated")}
          </p>
        </header>

        <div className={styles.layout}>
          <nav
            className={styles.navigation}
            aria-label={t("navigation.ariaLabel")}
          >
            <p>
              {t("navigation.title")}
            </p>

            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.key}
              >
                {t(
                  `navigation.items.${item.key}`
                )}
              </a>
            ))}
          </nav>

          <article className={styles.content}>
            <section id="anbieter">
              <h2>
                {t("provider.title")}
              </h2>

              <address className={styles.address}>
                <strong>real2own</strong>
                <br />
                {t("provider.owner")}: Hüseyin Bayram
                <br />
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                {t("provider.country")}
              </address>
            </section>

            <section id="kontakt">
              <h2>
                {t("contact.title")}
              </h2>

              <p>
                {t("contact.phone")}:{" "}
                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
                <br />
                {t("contact.email")}:{" "}
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </p>
            </section>

            <section id="taetigkeit">
              <h2>
                {t("activity.title")}
              </h2>

              <p>
                {t("activity.description")}
              </p>

              <h3>
                {t("activity.regulationTitle")}
              </h3>

              <p>
                {t("activity.regulation")}
              </p>
            </section>

            <section id="aufsichtsbehoerde">
              <h2>
                {t("authority.title")}
              </h2>

              <address className={styles.address}>
                <strong>
                  Industrie- und Handelskammer für München und Oberbayern
                </strong>
                <br />
                Max-Joseph-Straße 2
                <br />
                80333 München
              </address>
            </section>

            <section id="verantwortlich">
              <h2>
                {t("responsible.title")}
              </h2>

              <p>
                {t("responsible.description")}
              </p>

              <address className={styles.address}>
                <strong>
                  Hüseyin Bayram
                </strong>
                <br />
                Landsberger Str. 455
                <br />
                81241 München
              </address>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}