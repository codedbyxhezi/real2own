"use client";

import Link from "next/link";
import styles from "./RegisterForm.module.css";

export function RegisterForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={styles.nameGrid}>
        <label className={styles.field}>
          <span>Vorname</span>

          <input
            type="text"
            name="firstName"
            placeholder="Vorname"
            autoComplete="given-name"
            required
          />
        </label>

        <label className={styles.field}>
          <span>Nachname</span>

          <input
            type="text"
            name="lastName"
            placeholder="Nachname"
            autoComplete="family-name"
            required
          />
        </label>
      </div>

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
          placeholder="Mindestens 8 Zeichen"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </label>

      <label className={styles.field}>
        <span>Passwort wiederholen</span>

        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Passwort wiederholen"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </label>

      <label className={styles.consent}>
        <input type="checkbox" name="privacy" required />

        <span>
          Ich habe die{" "}
          <Link href="/datenschutz">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und akzeptiere die Verarbeitung meiner Angaben.
        </span>
      </label>

      <button
        className={styles.submit}
        type="submit"
        disabled
        aria-describedby="registration-status"
      >
        Registrierung folgt
        <span aria-hidden="true">→</span>
      </button>

      <p className={styles.status} id="registration-status">
        Die Kontoerstellung wird zusammen mit dem sicheren Backend aktiviert.
      </p>

      <div className={styles.login}>
        <span>Bereits registriert?</span>

        <Link href="/anmelden">
          Jetzt anmelden
        </Link>
      </div>
    </form>
  );
}