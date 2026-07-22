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

type PropertyType =
  | "all"
  | "house"
  | "apartment"
  | "land"
  | "commercial";

type MaximumPrice =
  | "any"
  | "250000"
  | "500000"
  | "1000000";

const tabCategories: Record<
  Tab,
  "buy" | "rent" | "land" | "development"
> = {
  buy: "buy",
  rent: "rent",
  land: "land",
  build: "development",
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

  const [
    propertyType,
    setPropertyType,
  ] = useState<PropertyType>("all");

  const [
    maximumPrice,
    setMaximumPrice,
  ] = useState<MaximumPrice>("any");

  function handleTabChange(
    tab: Tab
  ) {
    setActiveTab(tab);

    if (tab === "land") {
      setPropertyType("land");
      return;
    }

    if (
      activeTab === "land" &&
      propertyType === "land"
    ) {
      setPropertyType("all");
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const searchParams =
      new URLSearchParams();

    searchParams.set(
      "category",
      tabCategories[activeTab]
    );

    if (location.trim()) {
      searchParams.set(
        "location",
        location.trim()
      );
    }

    if (propertyType !== "all") {
      searchParams.set(
        "type",
        propertyType
      );
    }

    if (maximumPrice !== "any") {
      searchParams.set(
        "maxPrice",
        maximumPrice
      );
    }

    const query =
      searchParams.toString();

    router.push(
      `/immobilien?${query}`
    );
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label={t("tabsAria")}
      >
        {tabs.map((tab) => {
          const active =
            activeTab === tab;

          return (
            <button
              className={
                active
                  ? styles.activeTab
                  : ""
              }
              key={tab}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() =>
                handleTabChange(tab)
              }
            >
              {t(`tabs.${tab}`)}
            </button>
          );
        })}
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
              name="location"
              type="search"
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
              value={propertyType}
              onChange={(event) =>
                setPropertyType(
                  event.target
                    .value as PropertyType
                )
              }
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
              aria-hidden="true"
            >
              €
            </span>

            <select
              name="maxPrice"
              value={maximumPrice}
              onChange={(event) =>
                setMaximumPrice(
                  event.target
                    .value as MaximumPrice
                )
              }
            >
              <option value="any">
                {t("budgets.any")}
              </option>

              <option value="250000">
                {t(
                  "budgets.upTo250"
                )}
              </option>

              <option value="500000">
                {t(
                  "budgets.upTo500"
                )}
              </option>

              <option value="1000000">
                {t(
                  "budgets.upToMillion"
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