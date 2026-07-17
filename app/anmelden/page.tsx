import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm/LoginForm";
import styles from "./Anmelden.module.css";

export const metadata: Metadata = {
  title: "Anmelden",
  description: "Im persönlichen Real2Own-Bereich anmelden.",
};

export default function AnmeldenPage() {
  return (
    <main className={styles.page}>
      <Link
        className={styles.backLink}
        href="/"
        aria-label="Zurück zur Startseite"
      >
        <span aria-hidden="true">←</span>
        Zurück
      </Link>

      <section
        className={styles.login}
        aria-labelledby="login-title"
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label="Real2Own Startseite"
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own"
            width={92}
            height={92}
            priority
          />
        </Link>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            Persönlicher Bereich
          </p>

          <h1 id="login-title">
            Willkommen zurück.
          </h1>

          <p>
            Melde dich an, um Favoriten, Suchaufträge und deine
            Immobilienanfragen zu verwalten.
          </p>
        </div>

        <LoginForm />

        <div className={styles.register}>
          <span>Noch kein Konto?</span>

          <Link href="/registrieren">
            Konto erstellen
          </Link>
        </div>

        <p className={styles.legal}>
          Mit der Anmeldung akzeptierst du unsere{" "}
          <Link href="/datenschutz">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </section>

      <span className={styles.copyright}>
        © {new Date().getFullYear()} Real2Own
      </span>
    </main>
  );
}