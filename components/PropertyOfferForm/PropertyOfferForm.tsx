"use client";

import type { FormEvent } from "react";
import { Icon } from "@/components/Icon/Icon";
import styles from "./PropertyOfferForm.module.css";

type PropertyOfferFormProps = {
  defaultTransaction?: "Verkaufen" | "Vermieten" | "Projekt präsentieren";
};

export function PropertyOfferForm({
  defaultTransaction = "Verkaufen",
}: PropertyOfferFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const subject =
      defaultTransaction === "Projekt präsentieren"
        ? "Projekt bei Real2Own präsentieren"
        : "Immobilie bei Real2Own anbieten";

    const body = [
      "Neue Anfrage über real2own.com",
      "",
      `Vorhaben: ${formData.get("transaction") || "Keine Angabe"}`,
      `Objektart: ${formData.get("propertyType") || "Keine Angabe"}`,
      `Standort: ${formData.get("location") || "Keine Angabe"}`,
      `Wohn-/Nutzfläche: ${formData.get("area") || "Keine Angabe"}`,
      `Grundstücksfläche: ${formData.get("plotArea") || "Keine Angabe"}`,
      `Zimmer: ${formData.get("rooms") || "Keine Angabe"}`,
      `Preisvorstellung: ${formData.get("price") || "Keine Angabe"}`,
      "",
      `Name: ${formData.get("name") || "Keine Angabe"}`,
      `E-Mail: ${formData.get("email") || "Keine Angabe"}`,
      `Telefon: ${formData.get("phone") || "Keine Angabe"}`,
      "",
      "Weitere Informationen:",
      `${formData.get("message") || "Keine weiteren Angaben"}`,
    ].join("\n");

    const mailtoUrl =
      `mailto:info@real2own.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset className={styles.fieldset}>
        <legend>
          <span>01</span>
          Objekt und Vorhaben
        </legend>

        <div className={styles.choiceGroup}>
          <label>
            <input
              type="radio"
              name="transaction"
              value="Verkaufen"
              defaultChecked={defaultTransaction === "Verkaufen"}
            />

            <span>Verkaufen</span>
          </label>

          <label>
            <input
              type="radio"
              name="transaction"
              value="Vermieten"
              defaultChecked={defaultTransaction === "Vermieten"}
            />

            <span>Vermieten</span>
          </label>

          <label>
            <input
              type="radio"
              name="transaction"
              value="Projekt präsentieren"
              defaultChecked={defaultTransaction === "Projekt präsentieren"}
            />

            <span>Projekt präsentieren</span>
          </label>
        </div>

        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Objektart *</span>

            <select
              name="propertyType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Bitte auswählen
              </option>
              <option value="Wohnung">Wohnung</option>
              <option value="Haus">Haus</option>
              <option value="Villa">Villa</option>
              <option value="Mehrfamilienhaus">
                Mehrfamilienhaus
              </option>
              <option value="Grundstück">Grundstück</option>
              <option value="Neubauprojekt">
                Neubauprojekt
              </option>
              <option value="Gewerbeimmobilie">
                Gewerbeimmobilie
              </option>
              <option value="Sonstiges">Sonstiges</option>
            </select>
          </label>

          <label className={styles.field}>
            <span>Standort *</span>

            <input
              type="text"
              name="location"
              placeholder="Ort, Region oder Land"
              autoComplete="street-address"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Wohn- oder Nutzfläche</span>

            <input
              type="text"
              name="area"
              placeholder="z. B. 180 m²"
            />
          </label>

          <label className={styles.field}>
            <span>Grundstücksfläche</span>

            <input
              type="text"
              name="plotArea"
              placeholder="z. B. 1.200 m²"
            />
          </label>

          <label className={styles.field}>
            <span>Zimmer</span>

            <input
              type="text"
              name="rooms"
              placeholder="z. B. 5"
              inputMode="decimal"
            />
          </label>

          <label className={styles.field}>
            <span>Preisvorstellung</span>

            <input
              type="text"
              name="price"
              placeholder="z. B. 1.250.000 €"
              inputMode="decimal"
            />
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend>
          <span>02</span>
          Persönliche Angaben
        </legend>

        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Name *</span>

            <input
              type="text"
              name="name"
              placeholder="Vor- und Nachname"
              autoComplete="name"
              required
            />
          </label>

          <label className={styles.field}>
            <span>E-Mail-Adresse *</span>

            <input
              type="email"
              name="email"
              placeholder="name@beispiel.de"
              autoComplete="email"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Telefonnummer</span>

            <input
              type="tel"
              name="phone"
              placeholder="+49 ..."
              autoComplete="tel"
            />
          </label>

          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Weitere Informationen</span>

            <textarea
              name="message"
              rows={6}
              placeholder="Besonderheiten, Zustand, gewünschter Zeitraum oder weitere Informationen zum Objekt ..."
            />
          </label>
        </div>
      </fieldset>

      <div className={styles.formFooter}>
        <label className={styles.consent}>
          <input
            type="checkbox"
            name="privacy"
            required
          />

          <span>
            Ich habe die{" "}
            <a
              href="/datenschutz"
              target="_blank"
              rel="noreferrer"
            >
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur
            Bearbeitung der Anfrage zu.
          </span>
        </label>

        <button type="submit">
          <span>E-Mail-Anfrage vorbereiten</span>
          <Icon name="arrow" size={17} />
        </button>
      </div>

      <p className={styles.note}>
        Nach dem Absenden wird dein E-Mail-Programm mit einer vorbereiteten
        Nachricht geöffnet. Die Angaben werden nicht automatisch auf dieser
        Website gespeichert.
      </p>
    </form>
  );
}