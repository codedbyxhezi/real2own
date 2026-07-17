"use client";

import type { FormEvent } from "react";
import { Icon } from "@/components/Icon/Icon";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const subject = `Kontaktanfrage: ${
      formData.get("topic") || "Allgemeine Anfrage"
    }`;

    const body = [
      "Neue Kontaktanfrage über real2own.com",
      "",
      `Thema: ${formData.get("topic") || "Allgemeine Anfrage"}`,
      `Name: ${formData.get("name") || "Keine Angabe"}`,
      `E-Mail: ${formData.get("email") || "Keine Angabe"}`,
      `Telefon: ${formData.get("phone") || "Keine Angabe"}`,
      `Bevorzugte Kontaktart: ${
        formData.get("contactPreference") || "Keine Angabe"
      }`,
      "",
      "Nachricht:",
      `${formData.get("message") || "Keine Nachricht"}`,
    ].join("\n");

    window.location.href =
      `mailto:info@real2own.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          <span>01</span>
          Dein Anliegen
        </legend>

        <label className={styles.field}>
          <span>Thema *</span>

          <select name="topic" defaultValue="" required>
            <option value="" disabled>
              Bitte auswählen
            </option>

            <option value="Immobilie kaufen">
              Immobilie kaufen
            </option>

            <option value="Immobilie mieten">
              Immobilie mieten
            </option>

            <option value="Immobilie verkaufen">
              Immobilie verkaufen
            </option>

            <option value="Immobilie vermieten">
              Immobilie vermieten
            </option>

            <option value="Grundstück">
              Grundstück
            </option>

            <option value="Neubauprojekt">
              Neubauprojekt
            </option>

            <option value="Baupartner">
              Baupartner
            </option>

            <option value="Partner werden">
              Partner werden
            </option>

            <option value="Allgemeine Anfrage">
              Allgemeine Anfrage
            </option>
          </select>
        </label>
      </fieldset>

      <fieldset>
        <legend>
          <span>02</span>
          Kontaktdaten
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

          <label className={styles.field}>
            <span>Bevorzugte Kontaktart</span>

            <select
              name="contactPreference"
              defaultValue="E-Mail"
            >
              <option value="E-Mail">E-Mail</option>
              <option value="Telefon">Telefon</option>
              <option value="Keine Präferenz">
                Keine Präferenz
              </option>
            </select>
          </label>

          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Nachricht *</span>

            <textarea
              name="message"
              rows={8}
              placeholder="Beschreibe dein Anliegen, den gewünschten Standort, dein Budget oder weitere wichtige Informationen ..."
              required
            />
          </label>
        </div>
      </fieldset>

      <div className={styles.footer}>
        <label className={styles.consent}>
          <input type="checkbox" required />

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
          Nachricht vorbereiten
          <Icon name="arrow" size={17} />
        </button>
      </div>

      <p className={styles.note}>
        Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer
        vorbereiteten Nachricht. Die Angaben werden nicht automatisch auf
        dieser Website gespeichert.
      </p>
    </form>
  );
}