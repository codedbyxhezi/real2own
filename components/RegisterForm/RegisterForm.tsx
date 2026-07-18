"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./RegisterForm.module.css";

export function RegisterForm() {
  const t = useTranslations("RegisterForm");

  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={styles.nameGrid}>
        <label className={styles.field}>
          <span>{t("firstNameLabel")}</span>

          <input
            type="text"
            name="firstName"
            placeholder={t("firstNamePlaceholder")}
            autoComplete="given-name"
            required
          />
        </label>

        <label className={styles.field}>
          <span>{t("lastNameLabel")}</span>

          <input
            type="text"
            name="lastName"
            placeholder={t("lastNamePlaceholder")}
            autoComplete="family-name"
            required
          />
        </label>
      </div>

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
          autoComplete="new-password"
          minLength={8}
          required
        />
      </label>

      <label className={styles.field}>
        <span>{t("passwordConfirmationLabel")}</span>

        <input
          type="password"
          name="passwordConfirmation"
          placeholder={t("passwordConfirmationPlaceholder")}
          autoComplete="new-password"
          minLength={8}
          required
        />
      </label>

      <label className={styles.consent}>
        <input
          type="checkbox"
          name="privacy"
          required
        />

        <span>
          {t("privacyBefore")}{" "}

          <Link href="/datenschutz">
            {t("privacyLink")}
          </Link>{" "}

          {t("privacyAfter")}
        </span>
      </label>

      <button
        className={styles.submit}
        type="submit"
        disabled
        aria-describedby="registration-status"
      >
        {t("submit")}

        <span aria-hidden="true">
          →
        </span>
      </button>

      <p
        className={styles.status}
        id="registration-status"
      >
        {t("status")}
      </p>

      <div className={styles.login}>
        <span>
          {t("alreadyRegistered")}
        </span>

        <Link href="/anmelden">
          {t("login")}
        </Link>
      </div>
    </form>
  );
}