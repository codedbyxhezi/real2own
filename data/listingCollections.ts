import type { ListingProperty } from "@/types/property";
import {
  getPropertyCatalog,
  type PropertyCategoryKey,
} from "@/data/propertyCatalog";

const collectionIds: Record<
  PropertyCategoryKey,
  readonly number[]
> = {
  buy: [101, 102, 103, 104, 105, 106],
  rent: [201, 202, 203, 204, 205, 206],
  land: [301, 302, 303, 304, 305, 306],
  development: [401, 402, 403, 404, 405, 406],
};

function selectProperties(
  ids: readonly number[],
  locale?: string
): ListingProperty[] {
  const catalog = getPropertyCatalog(locale);

  const propertiesById = new Map(
    catalog.map((property) => [
      property.id,
      property,
    ])
  );

  return ids.map((id) => {
    const property =
      propertiesById.get(id);

    if (!property) {
      throw new Error(
        `Immobilie mit der ID ${id} fehlt in data/propertyCatalog.ts`
      );
    }

    return {
      id: property.id,
      title: property.title,
      location: property.location,
      price: property.price,
      type: property.propertyType,
      area: property.area,
      rooms: property.rooms,
      image: property.image,
      label: property.label,
    };
  });
}

export function getPropertiesForSale(
  locale?: string
): ListingProperty[] {
  return selectProperties(
    collectionIds.buy,
    locale
  );
}

export function getPropertiesForRent(
  locale?: string
): ListingProperty[] {
  return selectProperties(
    collectionIds.rent,
    locale
  );
}

export function getLandProperties(
  locale?: string
): ListingProperty[] {
  return selectProperties(
    collectionIds.land,
    locale
  );
}

export function getNewDevelopmentProperties(
  locale?: string
): ListingProperty[] {
  return selectProperties(
    collectionIds.development,
    locale
  );
}

/**
 * Deutsche Fallback-Daten für bestehende Komponenten.
 *
 * Locale-abhängige Seiten sollten stattdessen
 * die get...()-Funktionen verwenden.
 */
export const propertiesForSale =
  getPropertiesForSale("de");

export const propertiesForRent =
  getPropertiesForRent("de");

export const landProperties =
  getLandProperties("de");

export const newDevelopmentProperties =
  getNewDevelopmentProperties("de");