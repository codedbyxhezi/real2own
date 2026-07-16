"use client";

import { type FormEvent, useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import styles from "./SearchPanel.module.css";

const tabs = ["Kaufen", "Mieten", "Grundstück", "Bauen"] as const;

type Tab = (typeof tabs)[number];

export function SearchPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("Kaufen");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Demo-Suche für „${activeTab}“ aktiviert – bereit für deine API.`);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs} role="tablist" aria-label="Art der Immobiliensuche">
        {tabs.map((tab) => (
          <button
            className={activeTab === tab ? styles.activeTab : ""}
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => {
              setActiveTab(tab);
              setMessage("");
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>Wo suchst du?</span>
          <span className={styles.inputWrap}>
            <Icon name="location" size={19} />
            <input
              name="property-location"
              placeholder="Stadt, Region oder Land"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </span>
        </label>

        <label className={styles.field}>
          <span>Immobilientyp</span>
          <span className={styles.inputWrap}>
            <Icon name="home" size={19} />
            <select name="type" defaultValue="all">
              <option value="all">Alle Immobilien</option>
              <option value="house">Haus</option>
              <option value="apartment">Wohnung</option>
              <option value="land">Grundstück</option>
              <option value="commercial">Gewerbe</option>
            </select>
          </span>
        </label>

        <label className={styles.field}>
          <span>Budget</span>
          <span className={styles.inputWrap}>
            <span className={styles.currency}>€</span>
            <select name="budget" defaultValue="any">
              <option value="any">Beliebiges Budget</option>
              <option value="250000">Bis 250.000</option>
              <option value="500000">Bis 500.000</option>
              <option value="1000000">Bis 1.000.000</option>
              <option value="luxury">Ab 1.000.000</option>
            </select>
          </span>
        </label>

        <button className={styles.submit} type="submit">
          <Icon name="search" size={20} />
          Suchen
        </button>
      </form>

      <div className={styles.metaRow}>
        <div className={styles.quickLinks}>
          <span>Beliebt:</span>
          <button type="button">Berlin</button>
          <button type="button">Dubai</button>
          <button type="button">Mallorca</button>
          <button type="button">Lissabon</button>
        </div>
        <p aria-live="polite">{message}</p>
      </div>
    </div>
  );
}
