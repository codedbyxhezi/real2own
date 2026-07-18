"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  const t = useTranslations("LoginForm");

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

      <label className={styles.field}>
        <span>{t("passwordLabel")}</span>

        <input
          type="password"
          name="password"
          placeholder={t("passwordPlaceholder")}
          autoComplete="current-password"
          required
        />
      </label>

      <div className={styles.options}>
        <label className={styles.remember}>
          <input
            type="checkbox"
            name="remember"
          />

          <span>
            {t("remember")}
          </span>
        </label>

        <Link href="/passwort-vergessen">
          {t("forgotPassword")}
        </Link>
      </div>

      <button
        className={styles.submit}
        type="submit"
        disabled
        aria-describedby="login-status"
      >
        {t("submit")}

        <span aria-hidden="true">
          →
        </span>
      </button>

      <p
        className={styles.status}
        id="login-status"
      >
        {t("status")}
      </p>

      <div className={styles.register}>
        <span>
          {t("noAccount")}
        </span>

        <Link href="/registrieren">
          {t("register")}
        </Link>
      </div>
    </form>
  );
}