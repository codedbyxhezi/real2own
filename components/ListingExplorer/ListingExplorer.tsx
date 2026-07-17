"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon } from "@/components/Icon/Icon";
import type { ListingProperty } from "@/types/property";
import styles from "./ListingExplorer.module.css";

type ListingExplorerProps = {
  resultLabel: string;
  properties: ListingProperty[];
};

type SortOption =
  | "recommended"
  | "price-ascending"
  | "price-descending"
  | "area-descending";

function extractNumber(value: string) {
  const normalizedValue = value
    .replace(/\./g, "")
    .replace(/,/g, ".")
    .match(/\d+(?:\.\d+)?/);

  return normalizedValue ? Number(normalizedValue[0]) : 0;
}

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("de")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function ListingExplorer({
  resultLabel,
  properties,
}: ListingExplorerProps) {
  const searchParams = useSearchParams();

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [maximumPrice, setMaximumPrice] = useState("");
  const [minimumRooms, setMinimumRooms] = useState("");
  const [sort, setSort] = useState<SortOption>("recommended");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const locationParameter = searchParams.get("location");

    if (locationParameter) {
      setLocation(locationParameter);
    }
  }, [searchParams]);

  const propertyTypes = useMemo(
    () =>
      Array.from(
        new Set(properties.map((property) => property.type))
      ).sort((first, second) =>
        first.localeCompare(second, "de")
      ),
    [properties]
  );

  const filteredProperties = useMemo(() => {
    const normalizedLocation = normalizeText(location.trim());
    const maximumPriceNumber = extractNumber(maximumPrice);
    const minimumRoomsNumber = Number(minimumRooms);

    const filtered = properties.filter((property) => {
      const matchesLocation =
        !normalizedLocation ||
        normalizeText(property.location).includes(
          normalizedLocation
        ) ||
        normalizeText(property.title).includes(
          normalizedLocation
        );

      const matchesType =
        !propertyType || property.type === propertyType;

      const propertyPrice = extractNumber(property.price);

      const matchesPrice =
        !maximumPriceNumber ||
        propertyPrice <= maximumPriceNumber;

      const propertyRooms = extractNumber(property.rooms);

      const matchesRooms =
        !minimumRoomsNumber ||
        (propertyRooms > 0 &&
          propertyRooms >= minimumRoomsNumber);

      return (
        matchesLocation &&
        matchesType &&
        matchesPrice &&
        matchesRooms
      );
    });

    return [...filtered].sort((first, second) => {
      if (sort === "price-ascending") {
        return (
          extractNumber(first.price) -
          extractNumber(second.price)
        );
      }

      if (sort === "price-descending") {
        return (
          extractNumber(second.price) -
          extractNumber(first.price)
        );
      }

      if (sort === "area-descending") {
        return (
          extractNumber(second.area) -
          extractNumber(first.area)
        );
      }

      return 0;
    });
  }, [
    location,
    maximumPrice,
    minimumRooms,
    properties,
    propertyType,
    sort,
  ]);

  const visibleProperties = filteredProperties.slice(
    0,
    visibleCount
  );

  const hasActiveFilters =
    location ||
    propertyType ||
    maximumPrice ||
    minimumRooms ||
    sort !== "recommended";

  function resetFilters() {
    setLocation("");
    setPropertyType("");
    setMaximumPrice("");
    setMinimumRooms("");
    setSort("recommended");
    setVisibleCount(6);
  }

  function handleFilterChange() {
    setVisibleCount(6);
  }

  return (
    <>
      <section
        className={styles.searchSection}
        aria-label="Immobilien filtern"
      >
        <div className={`container ${styles.searchContainer}`}>
          <div className={styles.searchGrid}>
            <label className={styles.field}>
              <span>Standort</span>

              <input
                type="search"
                value={location}
                placeholder="Ort, Region oder Land"
                onChange={(event) => {
                  setLocation(event.target.value);
                  handleFilterChange();
                }}
              />
            </label>

            <label className={styles.field}>
              <span>Objektart</span>

              <select
                value={propertyType}
                onChange={(event) => {
                  setPropertyType(event.target.value);
                  handleFilterChange();
                }}
              >
                <option value="">Alle Objektarten</option>

                {propertyTypes.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.field}>
              <span>Maximaler Preis</span>

              <input
                type="text"
                value={maximumPrice}
                placeholder="z. B. 2.500.000"
                inputMode="numeric"
                onChange={(event) => {
                  setMaximumPrice(event.target.value);
                  handleFilterChange();
                }}
              />
            </label>

            <label className={styles.field}>
              <span>Zimmer ab</span>

              <select
                value={minimumRooms}
                onChange={(event) => {
                  setMinimumRooms(event.target.value);
                  handleFilterChange();
                }}
              >
                <option value="">Beliebig</option>
                <option value="1">1 Zimmer</option>
                <option value="2">2 Zimmer</option>
                <option value="3">3 Zimmer</option>
                <option value="4">4 Zimmer</option>
                <option value="5">5 Zimmer</option>
                <option value="6">6 Zimmer</option>
              </select>
            </label>
          </div>

          <div className={styles.searchFooter}>
            <p aria-live="polite">
              <strong>{filteredProperties.length}</strong>{" "}
              {filteredProperties.length === 1
                ? "Angebot gefunden"
                : "Angebote gefunden"}
            </p>

            {hasActiveFilters && (
              <button type="button" onClick={resetFilters}>
                Filter zurücksetzen
                <span aria-hidden="true">×</span>
              </button>
            )}
          </div>
        </div>
      </section>

      <section
        className={styles.results}
        aria-labelledby="listing-results-title"
      >
        <div className="container">
          <div className={styles.resultsHeader}>
            <div>
              <p className={styles.eyebrow}>
                Aktuelle Auswahl
              </p>

              <h2 id="listing-results-title">
                {resultLabel}
              </h2>
            </div>

            <label className={styles.sort}>
              <span>Sortieren</span>

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value as SortOption)
                }
              >
                <option value="recommended">
                  Empfohlen
                </option>

                <option value="price-ascending">
                  Preis aufsteigend
                </option>

                <option value="price-descending">
                  Preis absteigend
                </option>

                <option value="area-descending">
                  Größte Fläche
                </option>
              </select>
            </label>
          </div>

          {visibleProperties.length > 0 ? (
            <>
              <div className={styles.grid}>
                {visibleProperties.map((property) => (
                  <article
                    className={styles.card}
                    key={property.id}
                  >
                    <Link
                      className={styles.imageLink}
                      href={`/immobilien/${property.id}`}
                      aria-label={`${property.title} ansehen`}
                    >
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw"
                        className={styles.image}
                      />

                      <div className={styles.imageOverlay} />

                      {property.label && (
                        <span className={styles.label}>
                          {property.label}
                        </span>
                      )}

                      <span className={styles.cardArrow}>
                        <Icon name="arrow" size={16} />
                      </span>
                    </Link>

                    <div className={styles.cardContent}>
                      <div className={styles.cardLocation}>
                        {property.location}
                      </div>

                      <h3>
                        <Link href={`/immobilien/${property.id}`}>
                          {property.title}
                        </Link>
                      </h3>

                      <dl className={styles.cardFacts}>
                        <div>
                          <dt>Objektart</dt>
                          <dd>{property.type}</dd>
                        </div>

                        <div>
                          <dt>Fläche</dt>
                          <dd>{property.area}</dd>
                        </div>

                        <div>
                          <dt>Zimmer</dt>
                          <dd>{property.rooms}</dd>
                        </div>
                      </dl>

                      <div className={styles.cardFooter}>
                        <strong>{property.price}</strong>

                        <Link href={`/immobilien/${property.id}`}>
                          Details
                          <Icon name="arrow" size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {visibleCount < filteredProperties.length && (
                <div className={styles.loadMore}>
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((count) => count + 6)
                    }
                  >
                    Weitere Angebote laden
                    <span aria-hidden="true">+</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyNumber}>
                00
              </span>

              <div>
                <h3>Keine passenden Angebote gefunden.</h3>

                <p>
                  Ändere den Standort, den Preis oder die
                  Objektart, um weitere Ergebnisse zu sehen.
                </p>

                <button type="button" onClick={resetFilters}>
                  Alle Filter zurücksetzen
                  <Icon name="arrow" size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}