import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "./Footer.module.css";

const navigation = [
  {
    titleKey: "propertiesTitle",
    links: [
      {
        labelKey: "buyProperties",
        href: "/immobilien/kaufen",
      },
      {
        labelKey: "rentProperties",
        href: "/immobilien/mieten",
      },
      {
        labelKey: "land",
        href: "/grundstuecke",
      },
      {
        labelKey: "developments",
        href: "/neubauprojekte",
      },
    ],
  },
  {
    titleKey: "ownersPartnersTitle",
    links: [
      {
        labelKey: "offerProperty",
        href: "/immobilie-anbieten",
      },
      {
        labelKey: "findBuildingPartners",
        href: "/baupartner",
      },
      {
        labelKey: "presentProject",
        href: "/projekt-praesentieren",
      },
      {
        labelKey: "becomePartner",
        href: "/partner-werden",
      },
    ],
  },
  {
    titleKey: "real2ownTitle",
    links: [
      {
        labelKey: "about",
        href: "/ueber-uns",
      },
      {
        labelKey: "internationalMarkets",
        href: "/international",
      },
      {
        labelKey: "contact",
        href: "/kontakt",
      },
      {
        labelKey: "legalNotice",
        href: "/impressum",
      },
    ],
  },
] as const;

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brandRow}>
          <Link
            className={styles.logo}
            href="/"
            aria-label={t("homeAria")}
          >
            <Image
              src="/images/real2own-logo-transparent.png"
              alt=""
              width={128}
              height={128}
              sizes="(max-width: 600px) 54px, 68px"
              className={styles.logoImage}
            />

            <span>real2own</span>
          </Link>

          <p className={styles.statement}>
            {t("statement")}
          </p>

          <a className={styles.backToTop} href="#top">
            <span>{t("backToTop")}</span>

            <span
              className={styles.backToTopIcon}
              aria-hidden="true"
            >
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </div>

        <div className={styles.main}>
          <div className={styles.contact}>
            <p className={styles.label}>
              {t("contactLabel")}
            </p>

            <a
              className={styles.contactMail}
              href="mailto:info@real2own.com"
            >
              info@real2own.com
            </a>

            <a
              className={styles.contactPhone}
              href="tel:+491791415281"
            >
              +49 179 14 15 281
            </a>

            <address>
              real2own
              <br />
              {t("owner")}: Hüseyin Bayram
              <br />
              Landsberger Str. 455
              <br />
              81241 München
            </address>
          </div>

          <nav
            className={styles.navigation}
            aria-label={t("navigationAria")}
          >
            {navigation.map((column) => (
              <div
                className={styles.column}
                key={column.titleKey}
              >
                <h3>
                  {t(column.titleKey)}
                </h3>

                {column.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.labelKey}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <div className={styles.contactCta}>
            <p className={styles.label}>
              {t("consultationLabel")}
            </p>

            <h2>
              {t("consultationTitle")}
            </h2>

            <p>
              {t("consultationText")}
            </p>

            <Link href="/kontakt">
              <span>
                {t("contactAction")}
              </span>

              <Icon name="arrow" size={17} />
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {currentYear} real2own
          </span>

          <span className={styles.platform}>
            {t("platform")}
          </span>

          <nav aria-label={t("legalAria")}>
            <Link href="/datenschutz">
              {t("privacy")}
            </Link>

            <Link href="/impressum">
              {t("legalNotice")}
            </Link>

            <Link href="/datenschutz#cookies">
              {t("cookies")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}