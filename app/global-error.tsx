"use client";

import styles from "./error.module.css";

type GlobalErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({
  reset,
}: GlobalErrorProps) {
  return (
    <html lang="de">
      <body>
        <main className={styles.page}>
          <section
            className={styles.card}
            aria-labelledby="global-error-title"
          >
            <p className={styles.eyebrow}>
              Technischer Fehler
            </p>

            <h1 id="global-error-title">
              Real2Own ist gerade nicht erreichbar.
            </h1>

            <p className={styles.description}>
              Beim Laden der Anwendung ist ein
              unerwarteter Fehler aufgetreten.
              Bitte versuche es erneut.
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
            </div>
          </section>

          <span className={styles.brand}>
            Real2Own
          </span>
        </main>
      </body>
    </html>
  );
}