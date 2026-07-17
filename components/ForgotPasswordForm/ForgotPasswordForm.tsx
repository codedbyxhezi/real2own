"use client";

import styles from "./ForgotPasswordForm.module.css";

export function ForgotPasswordForm() {
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

      <button
        className={styles.submit}
        type="submit"
        disabled
        aria-describedby="password-reset-status"
      >
        Passwort-Reset folgt
        <span aria-hidden="true">→</span>
      </button>

      <p className={styles.status} id="password-reset-status">
        Der sichere Versand des Zurücksetzungslinks wird mit dem Backend
        aktiviert.
      </p>
    </form>
  );
}