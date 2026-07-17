import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";
import styles from "./Registrieren.module.css";

export const metadata: Metadata = {
  title: "Konto erstellen",
  description:
    "Ein persönliches Real2Own-Konto erstellen und Immobilienfavoriten sowie Suchaufträge verwalten.",
};

export default function RegistrierenPage() {
  return (
    <main className={styles.page}>
      <Link
        className={styles.backLink}
        href="/anmelden"
        aria-label="Zurück zur Anmeldung"
      >
        <span aria-hidden="true">←</span>
        Zur Anmeldung
      </Link>

      <section
        className={styles.register}
        aria-labelledby="register-title"
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label="Real2Own Startseite"
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own"
            width={72}
            height={72}
            priority
          />
        </Link>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            Persönlicher Bereich
          </p>

          <h1 id="register-title">
            Konto erstellen.
          </h1>

          <p>
            Speichere Immobilien, verwalte Suchaufträge und behalte deine
            Anfragen zentral im Blick.
          </p>
        </div>

        <RegisterForm />

        <div className={styles.loginLink}>
          <span>Bereits registriert?</span>

          <Link href="/anmelden">
            Jetzt anmelden
          </Link>
        </div>
      </section>

      <span className={styles.copyright}>
        © {new Date().getFullYear()} Real2Own
      </span>
    </main>
  );
}