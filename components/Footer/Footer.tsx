import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import styles from "./Footer.module.css";

const navigation = [
  {
    title: "Immobilien",
    links: [
      { label: "Immobilien kaufen", href: "/#immobilien" },
      { label: "Wohnungen mieten", href: "/#immobilien" },
      { label: "Grundstücke", href: "/#leistungen" },
      { label: "Neubauprojekte", href: "/#leistungen" },
    ],
  },
  {
    title: "Eigentümer & Partner",
    links: [
      { label: "Immobilie anbieten", href: "/#kontakt" },
      { label: "Baupartner finden", href: "/#partner" },
      { label: "Projekt präsentieren", href: "/#partner" },
      { label: "Partner werden", href: "/#kontakt" },
    ],
  },
  {
    title: "Real2Own",
    links: [
      { label: "Über Real2Own", href: "/#top" },
      { label: "Internationale Märkte", href: "/#international" },
      { label: "Kontakt", href: "/#kontakt" },
      { label: "Impressum", href: "/impressum" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brandRow}>
          <Link
            className={styles.logo}
            href="/#top"
            aria-label="Real2Own Startseite"
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
            Immobilien, Grundstücke und Projektpartner auf einer
            internationalen Plattform.
          </p>

          <a className={styles.backToTop} href="#top">
            <span>Nach oben</span>

            <span className={styles.backToTopIcon} aria-hidden="true">
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </div>

        <div className={styles.main}>
          <div className={styles.contact}>
            <p className={styles.label}>Kontakt</p>

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
              Inhaber: Hüseyin Bayram
              <br />
              Landsberger Str. 455
              <br />
              81241 München
            </address>
          </div>

          <nav
            className={styles.navigation}
            aria-label="Footer Navigation"
          >
            {navigation.map((column) => (
              <div className={styles.column} key={column.title}>
                <h3>{column.title}</h3>

                {column.links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <div className={styles.contactCta}>
            <p className={styles.label}>Persönliche Beratung</p>

            <h2>Ein konkretes Immobilienvorhaben?</h2>

            <p>
              Wir unterstützen dich bei der Suche, Vermarktung oder
              Entwicklung von Immobilien und Grundstücken.
            </p>

            <a href="mailto:info@real2own.com">
              <span>Kontakt aufnehmen</span>
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {currentYear} real2own</span>

          <span className={styles.platform}>
            International Real Estate Platform
          </span>

          <nav aria-label="Rechtliche Informationen">
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz#cookies">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}