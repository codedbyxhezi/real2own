import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ForgotPasswordForm } from "@/components/ForgotPasswordForm/ForgotPasswordForm";
import styles from "./PasswortVergessen.module.css";

export const metadata: Metadata = {
  title: "Passwort vergessen",
  description:
    "Passwort für den persönlichen Real2Own-Bereich zurücksetzen.",
};

export default function PasswortVergessenPage() {
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
        className={styles.card}
        aria-labelledby="forgot-password-title"
      >
        <Link
          className={styles.logo}
          href="/"
          aria-label="Real2Own Startseite"
        >
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own"
            width={70}
            height={70}
            priority
          />
        </Link>

        <div className={styles.heading}>
          <p className={styles.eyebrow}>
            Kontozugang
          </p>

          <h1 id="forgot-password-title">
            Passwort vergessen?
          </h1>

          <p>
            Gib die E-Mail-Adresse deines Kontos ein. Du erhältst später einen
            sicheren Link zum Festlegen eines neuen Passworts.
          </p>
        </div>

        <ForgotPasswordForm />

        <div className={styles.loginLink}>
          <span>Passwort wieder eingefallen?</span>

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