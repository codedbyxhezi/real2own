import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main
      className={styles.page}
      aria-label="Seite wird geladen"
      aria-live="polite"
      aria-busy="true"
    >
      <div className={styles.frame} />

      <div className={styles.content}>
        <Image
          src="/images/real2own-logo-transparent.png"
          alt="Real2Own"
          width={82}
          height={82}
          priority
          className={styles.logo}
        />

        <div className={styles.loader} aria-hidden="true">
          <span />
        </div>

        <p>Inhalte werden geladen</p>
      </div>

      <span className={styles.brand}>Real2Own</span>
    </main>
  );
}