"use client";

import Link from "next/link";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <label className={styles.field}>
        <span>E-Mail-Adresse</span>

        <input
          type="email"
          name="email"
          placeholder="name@beispiel.de"
          autoComplete="email"
          required
        />
      </label>

      <label className={styles.field}>
        <span>Passwort</span>

        <input
          type="password"
          name="password"
          placeholder="Dein Passwort"
          autoComplete="current-password"
          required
        />
      </label>

      <div className={styles.options}>
        <label className={styles.remember}>
          <input type="checkbox" name="remember" />
          <span>Angemeldet bleiben</span>
        </label>

        <Link href="/passwort-vergessen">
          Passwort vergessen?
        </Link>
      </div>

      <button
        className={styles.submit}
        type="submit"
        disabled
        aria-describedby="login-status"
      >
        Anmeldung folgt
        <span aria-hidden="true">→</span>
      </button>

      <p className={styles.status} id="login-status">
        Der sichere Kundenlogin wird zusammen mit dem Backend aktiviert.
      </p>

      <div className={styles.register}>
        <span>Noch kein Konto?</span>

        <Link href="/registrieren">
          Jetzt registrieren
        </Link>
      </div>
    </form>
  );
}