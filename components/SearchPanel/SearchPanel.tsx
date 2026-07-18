"use client";

import {
  type FormEvent,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@/components/Icon/Icon";
import styles from "./SearchPanel.module.css";

const tabs = [
  "buy",
  "rent",
  "land",
  "build",
] as const;

type Tab = (typeof tabs)[number];

const tabRoutes: Record<Tab, string> = {
  buy: "/immobilien/kaufen",
  rent: "/immobilien/mieten",
  land: "/grundstuecke",
  build: "/neubauprojekte",
};

const popularLocations = [
  "Berlin",
  "Dubai",
  "Mallorca",
  "Lissabon",
] as const;

export function SearchPanel() {
  const t = useTranslations("SearchPanel");
  const router = useRouter();

  const [activeTab, setActiveTab] =
    useState<Tab>("buy");

  const [location, setLocation] =
    useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const type = String(
      formData.get("type") ?? ""
    );

    const budget = String(
      formData.get("budget") ?? ""
    );

    const searchParams =
      new URLSearchParams();

    if (location.trim()) {
      searchParams.set(
        "location",
        location.trim()
      );
    }

    if (type && type !== "all") {
      searchParams.set("type", type);
    }

    if (budget && budget !== "any") {
      searchParams.set(
        "budget",
        budget
      );
    }

    const query =
      searchParams.toString();

    const destination = `${
      tabRoutes[activeTab]
    }${query ? `?${query}` : ""}`;

    router.push(destination);
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label={t("tabsAria")}
      >
        {tabs.map((tab) => (
          <button
            className={
              activeTab === tab
                ? styles.activeTab
                : ""
            }
            key={tab}
            type="button"
            role="tab"
            aria-selected={
              activeTab === tab
            }
            onClick={() =>
              setActiveTab(tab)
            }
          >
            {t(`tabs.${tab}`)}
          </button>
        ))}
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <label className={styles.field}>
          <span>
            {t("locationLabel")}
          </span>

          <span
            className={styles.inputWrap}
          >
            <Icon
              name="location"
              size={19}
            />

            <input
              name="property-location"
              value={location}
              placeholder={t(
                "locationPlaceholder"
              )}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              onChange={(event) =>
                setLocation(
                  event.target.value
                )
              }
            />
          </span>
        </label>

        <label className={styles.field}>
          <span>
            {t("propertyTypeLabel")}
          </span>

          <span
            className={styles.inputWrap}
          >
            <Icon
              name="home"
              size={19}
            />

            <select
              name="type"
              defaultValue="all"
            >
              <option value="all">
                {t(
                  "propertyTypes.all"
                )}
              </option>

              <option value="house">
                {t(
                  "propertyTypes.house"
                )}
              </option>

              <option value="apartment">
                {t(
                  "propertyTypes.apartment"
                )}
              </option>

              <option value="land">
                {t(
                  "propertyTypes.land"
                )}
              </option>

              <option value="commercial">
                {t(
                  "propertyTypes.commercial"
                )}
              </option>
            </select>
          </span>
        </label>

        <label className={styles.field}>
          <span>
            {t("budgetLabel")}
          </span>

          <span
            className={styles.inputWrap}
          >
            <span
              className={styles.currency}
            >
              €
            </span>

            <select
              name="budget"
              defaultValue="any"
            >
              <option value="any">
                {t("budgets.any")}
              </option>

              <option value="250000">
                {t("budgets.upTo250")}
              </option>

              <option value="500000">
                {t("budgets.upTo500")}
              </option>

              <option value="1000000">
                {t(
                  "budgets.upToMillion"
                )}
              </option>

              <option value="luxury">
                {t(
                  "budgets.fromMillion"
                )}
              </option>
            </select>
          </span>
        </label>

        <button
          className={styles.submit}
          type="submit"
        >
          <Icon
            name="search"
            size={20}
          />

          {t("search")}
        </button>
      </form>

      <div className={styles.metaRow}>
        <div
          className={styles.quickLinks}
        >
          <span>
            {t("popular")}
          </span>

          {popularLocations.map(
            (popularLocation) => (
              <button
                type="button"
                key={popularLocation}
                onClick={() =>
                  setLocation(
                    popularLocation
                  )
                }
              >
                {popularLocation}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}