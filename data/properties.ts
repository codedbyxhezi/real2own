export type PropertyPurpose =
  | "buy"
  | "rent"
  | "invest";

export type PropertyType =
  | "villa"
  | "penthouse"
  | "house"
  | "loft"
  | "holidayHome"
  | "apartment";

export type PropertyCountry =
  | "spain"
  | "uae"
  | "germany"
  | "portugal"
  | "sweden";

export type PropertyBadge =
  | "new"
  | "primeLocation"
  | "yield52"
  | "readyToMoveIn";

export type Property = {
  id: number;
  title: string;
  location: string;
  country: PropertyCountry;
  price: number;
  pricePeriod?: "month";
  type: PropertyType;
  purpose: PropertyPurpose;
  image: string;
  badge?: PropertyBadge;
  beds: number;
  baths: number;
  area: number;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Cliffside Villa Aurora",
    location: "Calvià, Mallorca",
    country: "spain",
    price: 2450000,
    type: "villa",
    purpose: "buy",
    image: "/images/modern-villa.png",
    badge: "new",
    beds: 4,
    baths: 3,
    area: 312,
  },
  {
    id: 2,
    title: "Skyline Residence 28",
    location: "Dubai Marina, Dubai",
    country: "uae",
    price: 8900,
    pricePeriod: "month",
    type: "penthouse",
    purpose: "rent",
    image: "/images/villa-pool.png",
    badge: "primeLocation",
    beds: 3,
    baths: 3,
    area: 241,
  },
  {
    id: 3,
    title: "Green Courtyard House",
    location: "Potsdam, Brandenburg",
    country: "germany",
    price: 1180000,
    type: "house",
    purpose: "buy",
    image: "/images/house-dusk.png",
    beds: 5,
    baths: 2,
    area: 228,
  },
  {
    id: 4,
    title: "Alfama Design Loft",
    location: "Lissabon, Lisboa",
    country: "portugal",
    price: 745000,
    type: "loft",
    purpose: "invest",
    image: "/images/old-town.png",
    badge: "yield52",
    beds: 2,
    baths: 2,
    area: 126,
  },
  {
    id: 5,
    title: "Nordic Lake Retreat",
    location: "Stockholm Archipelago",
    country: "sweden",
    price: 1620000,
    type: "holidayHome",
    purpose: "buy",
    image: "/images/coastal-house.png",
    beds: 4,
    baths: 2,
    area: 194,
  },
  {
    id: 6,
    title: "Urban Garden Apartment",
    location: "Berlin-Mitte, Berlin",
    country: "germany",
    price: 2950,
    pricePeriod: "month",
    type: "apartment",
    purpose: "rent",
    image: "/images/luxury-interior.png",
    badge: "readyToMoveIn",
    beds: 2,
    baths: 1,
    area: 98,
  },
];