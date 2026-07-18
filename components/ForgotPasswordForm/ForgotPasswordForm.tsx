"use client";

import { useTranslations } from "next-intl";
import styles from "./ForgotPasswordForm.module.css";

export function ForgotPasswordForm() {
  const t = useTranslations("ForgotPasswordForm");

  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <label className={styles.field}>
        <span>{t("emailLabel")}</span>

        <input
          type="email"
          name="email"
          placeholder="name@example.com"
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
        {t("submit")}
        <span aria-hidden="true">→</span>
      </button>

      <p
        className={styles.status}
        id="password-reset-status"
      >
        {t("status")}
      </p>
    </form>
  );
}