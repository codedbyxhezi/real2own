"use client";

import type { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "./PartnerApplicationForm.module.css";

const categories = [
  "constructionCompany",
  "architectureFirm",
  "projectDeveloper",
  "generalContractor",
  "realEstateAgent",
  "financeSpecialist",
  "other",
] as const;

const companySizes = [
  "size1to5",
  "size6to20",
  "size21to50",
  "size51to100",
  "sizeOver100",
] as const;

export function PartnerApplicationForm() {
  const t = useTranslations("PartnerApplicationForm");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const noInformation = t(
      "mail.noInformation"
    );

    const company =
      String(
        formData.get("company") || ""
      ) || noInformation;

    const categoryKey = String(
      formData.get("category") || ""
    );

    const category = categoryKey
      ? t(`categories.${categoryKey}`)
      : noInformation;

    const website =
      String(
        formData.get("website") || ""
      ) || noInformation;

    const location =
      String(
        formData.get("location") || ""
      ) || noInformation;

    const markets =
      String(
        formData.get("markets") || ""
      ) || noInformation;

    const companySizeKey = String(
      formData.get("companySize") || ""
    );

    const companySize = companySizeKey
      ? t(`companySizes.${companySizeKey}`)
      : noInformation;

    const name =
      String(
        formData.get("name") || ""
      ) || noInformation;

    const email =
      String(
        formData.get("email") || ""
      ) || noInformation;

    const phone =
      String(
        formData.get("phone") || ""
      ) || noInformation;

    const message =
      String(
        formData.get("message") || ""
      ) || t("mail.noFurtherInformation");

    const subject = t(
      "mail.subject"
    );

    const body = [
      t("mail.heading"),
      "",
      `${t("mail.company")}: ${company}`,
      `${t("mail.category")}: ${category}`,
      `${t("mail.website")}: ${website}`,
      `${t("mail.location")}: ${location}`,
      `${t("mail.markets")}: ${markets}`,
      `${t("mail.companySize")}: ${companySize}`,
      "",
      `${t("mail.contactPerson")}: ${name}`,
      `${t("mail.email")}: ${email}`,
      `${t("mail.phone")}: ${phone}`,
      "",
      `${t("mail.services")}:`,
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
          {t("companySection")}
        </legend>

        <div className={styles.grid}>
          <label>
            <span>
              {t("companyNameLabel")} *
            </span>

            <input
              type="text"
              name="company"
              autoComplete="organization"
              required
            />
          </label>

          <label>
            <span>
              {t("categoryLabel")} *
            </span>

            <select
              name="category"
              defaultValue=""
              required
            >
              <option
                value=""
                disabled
              >
                {t("selectPlaceholder")}
              </option>

              {categories.map(
                (category) => (
                  <option
                    value={category}
                    key={category}
                  >
                    {t(
                      `categories.${category}`
                    )}
                  </option>
                )
              )}
            </select>
          </label>

          <label>
            <span>
              {t("websiteLabel")}
            </span>

            <input
              type="url"
              name="website"
              placeholder="https://"
              autoComplete="url"
            />
          </label>

          <label>
            <span>
              {t("locationLabel")} *
            </span>

            <input
              type="text"
              name="location"
              placeholder={t(
                "locationPlaceholder"
              )}
              required
            />
          </label>

          <label>
            <span>
              {t("marketsLabel")}
            </span>

            <input
              type="text"
              name="markets"
              placeholder={t(
                "marketsPlaceholder"
              )}
            />
          </label>

          <label>
            <span>
              {t("companySizeLabel")}
            </span>

            <select
              name="companySize"
              defaultValue=""
            >
              <option value="">
                {t("noInformation")}
              </option>

              {companySizes.map(
                (size) => (
                  <option
                    value={size}
                    key={size}
                  >
                    {t(
                      `companySizes.${size}`
                    )}
                  </option>
                )
              )}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <span>02</span>
          {t("contactSection")}
        </legend>

        <div className={styles.grid}>
          <label>
            <span>
              {t("contactPersonLabel")} *
            </span>

            <input
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>

          <label>
            <span>
              {t("emailLabel")} *
            </span>

            <input
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>

          <label>
            <span>
              {t("phoneLabel")}
            </span>

            <input
              type="tel"
              name="phone"
              autoComplete="tel"
            />
          </label>

          <label
            className={
              styles.fullWidth
            }
          >
            <span>
              {t("servicesLabel")} *
            </span>

            <textarea
              name="message"
              rows={7}
              placeholder={t(
                "servicesPlaceholder"
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