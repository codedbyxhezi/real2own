"use client";

import type { FormEvent } from "react";
import { Icon } from "@/components/Icon/Icon";
import styles from "./PartnerApplicationForm.module.css";

export function PartnerApplicationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const subject = "Partneranfrage für das Real2Own-Netzwerk";

    const body = [
      "Neue Partneranfrage über real2own.com",
      "",
      `Unternehmen: ${formData.get("company") || "Keine Angabe"}`,
      `Partnerkategorie: ${formData.get("category") || "Keine Angabe"}`,
      `Website: ${formData.get("website") || "Keine Angabe"}`,
      `Standort: ${formData.get("location") || "Keine Angabe"}`,
      `Tätigkeitsregionen: ${formData.get("markets") || "Keine Angabe"}`,
      `Unternehmensgröße: ${formData.get("companySize") || "Keine Angabe"}`,
      "",
      `Ansprechperson: ${formData.get("name") || "Keine Angabe"}`,
      `E-Mail: ${formData.get("email") || "Keine Angabe"}`,
      `Telefon: ${formData.get("phone") || "Keine Angabe"}`,
      "",
      "Leistungen und Referenzen:",
      `${formData.get("message") || "Keine weiteren Angaben"}`,
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
          Unternehmen
        </legend>

        <div className={styles.grid}>
          <label>
            <span>Unternehmensname *</span>
            <input
              type="text"
              name="company"
              autoComplete="organization"
              required
            />
          </label>

          <label>
            <span>Partnerkategorie *</span>
            <select name="category" defaultValue="" required>
              <option value="" disabled>
                Bitte auswählen
              </option>
              <option>Bauunternehmen</option>
              <option>Architekturbüro</option>
              <option>Projektentwickler</option>
              <option>Generalunternehmer</option>
              <option>Immobilienmakler</option>
              <option>Finanzierungs- oder Fachpartner</option>
              <option>Sonstiges</option>
            </select>
          </label>

          <label>
            <span>Website</span>
            <input
              type="url"
              name="website"
              placeholder="https://"
              autoComplete="url"
            />
          </label>

          <label>
            <span>Unternehmensstandort *</span>
            <input
              type="text"
              name="location"
              placeholder="Ort, Land"
              required
            />
          </label>

          <label>
            <span>Tätigkeitsregionen</span>
            <input
              type="text"
              name="markets"
              placeholder="z. B. München, Mallorca, Dubai"
            />
          </label>

          <label>
            <span>Unternehmensgröße</span>
            <select name="companySize" defaultValue="">
              <option value="">Keine Angabe</option>
              <option>1–5 Mitarbeitende</option>
              <option>6–20 Mitarbeitende</option>
              <option>21–50 Mitarbeitende</option>
              <option>51–100 Mitarbeitende</option>
              <option>Mehr als 100 Mitarbeitende</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <span>02</span>
          Kontakt und Leistungen
        </legend>

        <div className={styles.grid}>
          <label>
            <span>Ansprechperson *</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>

          <label>
            <span>E-Mail-Adresse *</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>

          <label>
            <span>Telefonnummer</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
            />
          </label>

          <label className={styles.fullWidth}>
            <span>Leistungen und ausgewählte Referenzen *</span>
            <textarea
              name="message"
              rows={7}
              placeholder="Beschreibe deine Leistungen, Spezialisierungen und ausgewählte Projekte ..."
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
            <a href="/datenschutz" target="_blank" rel="noreferrer">
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung
            der Partneranfrage zu.
          </span>
        </label>

        <button type="submit">
          Partneranfrage vorbereiten
          <Icon name="arrow" size={17} />
        </button>
      </div>

      <p className={styles.note}>
        Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer
        vorbereiteten Nachricht.
      </p>
    </form>
  );
}