"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import styles from "./Header.module.css";
import Image from "next/image";

const navItems = [
  { label: "Kaufen", href: "#immobilien" },
  { label: "Mieten", href: "#immobilien" },
  { label: "Grundstücke", href: "#leistungen" },
  { label: "Baupartner", href: "#partner" },
  { label: "International", href: "#international" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top" aria-label="Real2Own Startseite">
          <Image
            src="/images/real2own-logo-transparent.png"
            alt="Real2Own Logo"
            width={128}
            height={128}
            sizes="(max-width: 480px) 48px, (max-width: 800px) 52px, 62px"
            className={styles.logoImage}
            priority
          />
        </a>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.language} type="button" aria-label="Sprache auswählen">
            <Icon name="globe" size={17} />
            DE
          </button>
          <a className={styles.login} href="#kontakt">
            Anmelden
          </a>
          <a className={styles.listingButton} href="#kontakt">
            Inserieren
          </a>
          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "x" : "menu"} size={23} />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        id="mobile-navigation"
      >
        <nav className="container" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label} onClick={() => setOpen(false)}>
              {item.label}
              <Icon name="chevron" size={18} />
            </a>
          ))}
          <a className={styles.mobileCta} href="#kontakt" onClick={() => setOpen(false)}>
            Inserieren
          </a>
        </nav>
      </div>
    </header>
  );
}
