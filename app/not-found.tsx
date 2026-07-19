import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <section
        className={styles.card}
        aria-labelledby="not-found-title"
      >
        <p className={styles.eyebrow}>
          Error 404
        </p>

        <div className={styles.number} aria-hidden="true">
          404
        </div>

        <h1 id="not-found-title">
          Seite nicht gefunden.
        </h1>

        <p className={styles.description}>
          Die angeforderte Seite existiert nicht,
          wurde verschoben oder ist nicht mehr verfügbar.
        </p>

        <Link
          className={styles.homeLink}
          href="/"
        >
          <span>Zur Startseite</span>
          <span
            className={styles.arrow}
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </section>

      <span className={styles.brand}>
        REAL2OWN
      </span>
    </main>
  );
}