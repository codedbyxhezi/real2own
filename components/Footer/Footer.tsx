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
    ],
  },
] as const;

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.intro}>
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
              sizes="(max-width: 600px) 52px, 62px"
              className={styles.logoImage}
            />

            <span>real2own</span>
          </Link>

          <p className={styles.statement}>
            {t("statement")}
          </p>
        </div>

        <div className={styles.panel}>
          <div className={styles.contact}>
            <p className={styles.label}>
              {t("contactLabel")}
            </p>

            <a
              className={styles.contactLink}
              href="mailto:info@real2own.com"
            >
              <span>
                <small>E-Mail</small>
                <strong>info@real2own.com</strong>
              </span>

              <span
                className={styles.contactIcon}
                aria-hidden="true"
              >
                <Icon name="arrow" size={15} />
              </span>
            </a>

            <a
              className={styles.contactLink}
              href="tel:+491791415281"
            >
              <span>
                <small>Telefon</small>
                <strong>+49 179 14 15 281</strong>
              </span>

              <span
                className={styles.contactIcon}
                aria-hidden="true"
              >
                <Icon name="arrow" size={15} />
              </span>
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

                <div className={styles.links}>
                  {column.links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.labelKey}
                    >
                      <span>{t(link.labelKey)}</span>

                      <Icon
                        name="chevron"
                        size={12}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className={styles.consultation}>
            <p className={styles.label}>
              {t("consultationLabel")}
            </p>

            <h2>
              {t("consultationTitle")}
            </h2>

            <p className={styles.consultationText}>
              {t("consultationText")}
            </p>

            <Link
              className={styles.consultationButton}
              href="/kontakt"
            >
              <span>
                {t("contactAction")}
              </span>

              <span
                className={styles.consultationIcon}
                aria-hidden="true"
              >
                <Icon name="arrow" size={16} />
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>
              © {currentYear} real2own
            </span>

            <span className={styles.platform}>
              {t("platform")}
            </span>
          </div>

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