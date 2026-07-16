import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum | Real2Own",
  description:
    "Anbieterkennzeichnung und rechtliche Informationen von Real2Own.",
};

const navigation = [
  {
    label: "Anbieter",
    href: "#anbieter",
  },
  {
    label: "Kontakt",
    href: "#kontakt",
  },
  {
    label: "Tätigkeit",
    href: "#taetigkeit",
  },
  {
    label: "Aufsichtsbehörde",
    href: "#aufsichtsbehoerde",
  },
  {
    label: "Inhaltlich verantwortlich",
    href: "#verantwortlich",
  },
];

export default function ImpressumPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <Link className={styles.backLink} href="/">
            <Icon name="arrow" size={15} />
            Zurück zur Startseite
          </Link>

          <p className={styles.eyebrow}>Rechtliche Informationen</p>

          <h1>Impressum</h1>

          <p className={styles.updated}>Stand: Juli 2026</p>
        </header>

        <div className={styles.layout}>
          <nav
            className={styles.navigation}
            aria-label="Inhalt des Impressums"
          >
            <p>Inhalt</p>

            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <article className={styles.content}>
            <section id="anbieter">
              <h2>Angaben gemäß § 5 DDG</h2>

              <address className={styles.address}>
                <strong>real2own</strong>
                <br />
                Inhaber: Hüseyin Bayram
                <br />
                Landsberger Str. 455
                <br />
                81241 München
                <br />
                Deutschland
              </address>
            </section>

            <section id="kontakt">
              <h2>Kontakt</h2>

              <p>
                Telefon:{" "}
                <a href="tel:+491791415281">
                  +49 179 14 15 281
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@real2own.com">
                  info@real2own.com
                </a>
              </p>
            </section>

            <section id="taetigkeit">
              <h2>Berufliche Tätigkeit</h2>

              <p>
                Immobilienmakler gemäß § 34c Gewerbeordnung
                {" "} (GewO).
              </p>

              <h3>Berufsrechtliche Regelung</h3>

              <p>
                § 34c Gewerbeordnung
              </p>
            </section>

            <section id="aufsichtsbehoerde">
              <h2>Zuständige Aufsichtsbehörde</h2>

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
              <h2>Inhaltlich verantwortlich</h2>

              <p>
                Verantwortlich für journalistisch-redaktionelle Inhalte gemäß
                § 18 Abs. 2 Medienstaatsvertrag:
              </p>

              <address className={styles.address}>
                <strong>Hüseyin Bayram</strong>
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