"use client";

import type { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "./ContactForm.module.css";

const topics = [
  "buy",
  "rent",
  "sell",
  "let",
  "land",
  "development",
  "buildingPartner",
  "becomePartner",
  "general",
] as const;

const contactPreferences = [
  "email",
  "phone",
  "none",
] as const;

export function ContactForm() {
  const t = useTranslations("ContactForm");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const topicKey =
      String(
        formData.get("topic") || "general"
      );

    const contactPreferenceKey =
      String(
        formData.get(
          "contactPreference"
        ) || "none"
      );

    const topic = t(
      `topics.${topicKey}`
    );

    const contactPreference = t(
      `contactPreferences.${contactPreferenceKey}`
    );

    const name =
      String(formData.get("name") || "") ||
      t("mail.noInformation");

    const email =
      String(formData.get("email") || "") ||
      t("mail.noInformation");

    const phone =
      String(formData.get("phone") || "") ||
      t("mail.noInformation");

    const message =
      String(formData.get("message") || "") ||
      t("mail.noMessage");

    const subject = t("mail.subject", {
      topic,
    });

    const body = [
      t("mail.heading"),
      "",
      `${t("mail.topic")}: ${topic}`,
      `${t("mail.name")}: ${name}`,
      `${t("mail.email")}: ${email}`,
      `${t("mail.phone")}: ${phone}`,
      `${t(
        "mail.contactPreference"
      )}: ${contactPreference}`,
      "",
      `${t("mail.message")}:`,
      message,
    ].join("\n");

    window.location.href =
      `mailto:info@real2own.com?subject=${encodeURIComponent(
        subject
      )}` +
      `&body=${encodeURIComponent(
        body
      )}`;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>
          <span>01</span>
          {t("requestSection")}
        </legend>

        <label className={styles.field}>
          <span>
            {t("topicLabel")} *
          </span>

          <select
            name="topic"
            defaultValue=""
            required
          >
            <option
              value=""
              disabled
            >
              {t("selectPlaceholder")}
            </option>

            {topics.map((topic) => (
              <option
                value={topic}
                key={topic}
              >
                {t(`topics.${topic}`)}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset>
        <legend>
          <span>02</span>
          {t("contactSection")}
        </legend>

        <div className={styles.grid}>
          <label className={styles.field}>
            <span>
              {t("nameLabel")} *
            </span>

            <input
              type="text"
              name="name"
              placeholder={t(
                "namePlaceholder"
              )}
              autoComplete="name"
              required
            />
          </label>

          <label className={styles.field}>
            <span>
              {t("emailLabel")} *
            </span>

            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              autoComplete="email"
              required
            />
          </label>

          <label className={styles.field}>
            <span>
              {t("phoneLabel")}
            </span>

            <input
              type="tel"
              name="phone"
              placeholder="+49 ..."
              autoComplete="tel"
            />
          </label>

          <label className={styles.field}>
            <span>
              {t(
                "contactPreferenceLabel"
              )}
            </span>

            <select
              name="contactPreference"
              defaultValue="email"
            >
              {contactPreferences.map(
                (preference) => (
                  <option
                    value={preference}
                    key={preference}
                  >
                    {t(
                      `contactPreferences.${preference}`
                    )}
                  </option>
                )
              )}
            </select>
          </label>

          <label
            className={`${styles.field} ${styles.fullWidth}`}
          >
            <span>
              {t("messageLabel")} *
            </span>

            <textarea
              name="message"
              rows={8}
              placeholder={t(
                "messagePlaceholder"
              )}
              required
            />
          </label>
        </div>
      </fieldset>

      <div className={styles.footer}>
        <label className={styles.consent}>
          <input
            type="checkbox"
            required
          />

          <span>
            {t("privacyBefore")}{" "}

            <Link
              href="/datenschutz"
              target="_blank"
              rel="noreferrer"
            >
              {t("privacyLink")}
            </Link>{" "}

            {t("privacyAfter")}
          </span>
        </label>

        <button type="submit">
          {t("submit")}

          <Icon
            name="arrow"
            size={17}
          />
        </button>
      </div>

      <p className={styles.note}>
        {t("note")}
      </p>
    </form>
  );
}