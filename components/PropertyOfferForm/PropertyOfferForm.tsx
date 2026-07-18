"use client";

import type { FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "./PropertyOfferForm.module.css";

type Transaction =
  | "sell"
  | "rent"
  | "presentProject";

type LegacyTransaction =
  | "Verkaufen"
  | "Vermieten"
  | "Projekt präsentieren";

type PropertyOfferFormProps = {
  defaultTransaction?:
    | Transaction
    | LegacyTransaction;
};

const transactions: Transaction[] = [
  "sell",
  "rent",
  "presentProject",
];

const propertyTypes = [
  "apartment",
  "house",
  "villa",
  "multiFamilyHouse",
  "land",
  "development",
  "commercial",
  "other",
] as const;

function normalizeTransaction(
  transaction:
    | Transaction
    | LegacyTransaction
): Transaction {
  switch (transaction) {
    case "Verkaufen":
      return "sell";

    case "Vermieten":
      return "rent";

    case "Projekt präsentieren":
      return "presentProject";

    default:
      return transaction;
  }
}

export function PropertyOfferForm({
  defaultTransaction = "sell",
}: PropertyOfferFormProps) {
  const t = useTranslations(
    "PropertyOfferForm"
  );

  const normalizedDefaultTransaction =
    normalizeTransaction(
      defaultTransaction
    );

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

    const transactionKey = String(
      formData.get("transaction") ||
        normalizedDefaultTransaction
    );

    const propertyTypeKey = String(
      formData.get("propertyType") || ""
    );

    const transaction = t(
      `transactions.${transactionKey}`
    );

    const propertyType =
      propertyTypeKey
        ? t(
            `propertyTypes.${propertyTypeKey}`
          )
        : noInformation;

    const location =
      String(
        formData.get("location") || ""
      ) || noInformation;

    const area =
      String(
        formData.get("area") || ""
      ) || noInformation;

    const plotArea =
      String(
        formData.get("plotArea") || ""
      ) || noInformation;

    const rooms =
      String(
        formData.get("rooms") || ""
      ) || noInformation;

    const price =
      String(
        formData.get("price") || ""
      ) || noInformation;

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
      ) ||
      t(
        "mail.noFurtherInformation"
      );

    const subject =
      transactionKey ===
      "presentProject"
        ? t(
            "mail.projectSubject"
          )
        : t(
            "mail.propertySubject"
          );

    const body = [
      t("mail.heading"),
      "",
      `${t(
        "mail.transaction"
      )}: ${transaction}`,
      `${t(
        "mail.propertyType"
      )}: ${propertyType}`,
      `${t(
        "mail.location"
      )}: ${location}`,
      `${t("mail.area")}: ${area}`,
      `${t(
        "mail.plotArea"
      )}: ${plotArea}`,
      `${t("mail.rooms")}: ${rooms}`,
      `${t("mail.price")}: ${price}`,
      "",
      `${t("mail.name")}: ${name}`,
      `${t("mail.email")}: ${email}`,
      `${t("mail.phone")}: ${phone}`,
      "",
      `${t(
        "mail.additionalInformation"
      )}:`,
      message,
    ].join("\n");

    const mailtoUrl =
      `mailto:info@real2own.com?subject=${encodeURIComponent(
        subject
      )}` +
      `&body=${encodeURIComponent(
        body
      )}`;

    window.location.href =
      mailtoUrl;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset
        className={
          styles.fieldset
        }
      >
        <legend>
          <span>01</span>
          {t("propertySection")}
        </legend>

        <div
          className={
            styles.choiceGroup
          }
        >
          {transactions.map(
            (transaction) => (
              <label
                key={
                  transaction
                }
              >
                <input
                  type="radio"
                  name="transaction"
                  value={
                    transaction
                  }
                  defaultChecked={
                    normalizedDefaultTransaction ===
                    transaction
                  }
                />

                <span>
                  {t(
                    `transactions.${transaction}`
                  )}
                </span>
              </label>
            )
          )}
        </div>

        <div
          className={styles.grid}
        >
          <label
            className={styles.field}
          >
            <span>
              {t(
                "propertyTypeLabel"
              )}{" "}
              *
            </span>

            <select
              name="propertyType"
              defaultValue=""
              required
            >
              <option
                value=""
                disabled
              >
                {t(
                  "selectPlaceholder"
                )}
              </option>

              {propertyTypes.map(
                (propertyType) => (
                  <option
                    value={
                      propertyType
                    }
                    key={
                      propertyType
                    }
                  >
                    {t(
                      `propertyTypes.${propertyType}`
                    )}
                  </option>
                )
              )}
            </select>
          </label>

          <label
            className={styles.field}
          >
            <span>
              {t(
                "locationLabel"
              )}{" "}
              *
            </span>

            <input
              type="text"
              name="location"
              placeholder={t(
                "locationPlaceholder"
              )}
              autoComplete="street-address"
              required
            />
          </label>

          <label
            className={styles.field}
          >
            <span>
              {t("areaLabel")}
            </span>

            <input
              type="text"
              name="area"
              placeholder={t(
                "areaPlaceholder"
              )}
            />
          </label>

          <label
            className={styles.field}
          >
            <span>
              {t(
                "plotAreaLabel"
              )}
            </span>

            <input
              type="text"
              name="plotArea"
              placeholder={t(
                "plotAreaPlaceholder"
              )}
            />
          </label>

          <label
            className={styles.field}
          >
            <span>
              {t("roomsLabel")}
            </span>

            <input
              type="text"
              name="rooms"
              placeholder={t(
                "roomsPlaceholder"
              )}
              inputMode="decimal"
            />
          </label>

          <label
            className={styles.field}
          >
            <span>
              {t("priceLabel")}
            </span>

            <input
              type="text"
              name="price"
              placeholder={t(
                "pricePlaceholder"
              )}
              inputMode="decimal"
            />
          </label>
        </div>
      </fieldset>

      <fieldset
        className={
          styles.fieldset
        }
      >
        <legend>
          <span>02</span>
          {t("personalSection")}
        </legend>

        <div
          className={styles.grid}
        >
          <label
            className={styles.field}
          >
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

          <label
            className={styles.field}
          >
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

          <label
            className={styles.field}
          >
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

          <label
            className={`${styles.field} ${styles.fullWidth}`}
          >
            <span>
              {t(
                "additionalInformationLabel"
              )}
            </span>

            <textarea
              name="message"
              rows={6}
              placeholder={t(
                "additionalInformationPlaceholder"
              )}
            />
          </label>
        </div>
      </fieldset>

      <div
        className={
          styles.formFooter
        }
      >
        <label
          className={
            styles.consent
          }
        >
          <input
            type="checkbox"
            name="privacy"
            required
          />

          <span>
            {t(
              "privacyBefore"
            )}{" "}

            <Link
              href="/datenschutz"
              target="_blank"
              rel="noreferrer"
            >
              {t(
                "privacyLink"
              )}
            </Link>{" "}

            {t(
              "privacyAfter"
            )}
          </span>
        </label>

        <button type="submit">
          <span>
            {t("submit")}
          </span>

          <Icon
            name="arrow"
            size={17}
          />
        </button>
      </div>

      <p
        className={styles.note}
      >
        {t("note")}
      </p>
    </form>
  );
}