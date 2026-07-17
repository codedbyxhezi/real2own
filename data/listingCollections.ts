import type { ListingProperty } from "@/types/property";
import { propertyCatalog } from "@/data/propertyCatalog";

function selectProperties(
  ids: readonly number[],
  fallbackType: string
): ListingProperty[] {
  const propertiesById = new Map(
    propertyCatalog.map((property) => [property.id, property])
  );

  return ids.map((id) => {
    const property = propertiesById.get(id);

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
      type: fallbackType,
      area: property.area,
      rooms: property.rooms,
      image: property.image,
      label: property.label,
    };
  });
}

export const propertiesForSale = selectProperties(
  [101, 102, 103, 104, 105, 106],
  "Kaufimmobilie"
);

export const propertiesForRent = selectProperties(
  [201, 202, 203, 204, 205, 206],
  "Mietimmobilie"
);

export const landProperties = selectProperties(
  [301, 302, 303, 304, 305, 306],
  "Grundstück"
);

export const newDevelopmentProperties = selectProperties(
  [401, 402, 403, 404, 405, 406],
  "Neubauprojekt"
);