"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.page}>
      <section
        className={styles.card}
        aria-labelledby="error-title"
      >
        <p className={styles.eyebrow}>
          Etwas ist schiefgelaufen
        </p>

        <h1 id="error-title">
          Die Seite konnte nicht geladen werden.
        </h1>

        <p className={styles.description}>
          Es ist ein unerwarteter Fehler aufgetreten.
          Versuche es bitte erneut oder kehre zur
          Startseite zurück.
        </p>

        <div className={styles.actions}>
          <button
            className={styles.retryButton}
            type="button"
            onClick={() => reset()}
          >
            <span>Erneut versuchen</span>
            <span
              className={styles.arrow}
              aria-hidden="true"
            >
              ↻
            </span>
          </button>

          <Link
            className={styles.homeLink}
            href="/"
          >
            Zur Startseite
          </Link>
        </div>
      </section>

      <span className={styles.brand}>
        Real2Own
      </span>
    </main>
  );
}