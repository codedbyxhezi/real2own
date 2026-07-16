export type Property = {
  id: number;
  title: string;
  location: string;
  country: string;
  price: string;
  type: string;
  purpose: "Kaufen" | "Mieten" | "Investieren";
  image: string;
  badge?: string;
  beds: number;
  baths: number;
  area: number;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Cliffside Villa Aurora",
    location: "Calvià, Mallorca",
    country: "Spanien",
    price: "€ 2.450.000",
    type: "Villa",
    purpose: "Kaufen",
    image: "/images/modern-villa.png",
    badge: "Neu",
    beds: 4,
    baths: 3,
    area: 312,
  },
  {
    id: 2,
    title: "Skyline Residence 28",
    location: "Dubai Marina, Dubai",
    country: "VAE",
    price: "€ 8.900 / Monat",
    type: "Penthouse",
    purpose: "Mieten",
    image: "/images/villa-pool.png",
    badge: "Top Lage",
    beds: 3,
    baths: 3,
    area: 241,
  },
  {
    id: 3,
    title: "Green Courtyard House",
    location: "Potsdam, Brandenburg",
    country: "Deutschland",
    price: "€ 1.180.000",
    type: "Einfamilienhaus",
    purpose: "Kaufen",
    image: "/images/house-dusk.png",
    beds: 5,
    baths: 2,
    area: 228,
  },
  {
    id: 4,
    title: "Alfama Design Loft",
    location: "Lissabon, Lisboa",
    country: "Portugal",
    price: "€ 745.000",
    type: "Loft",
    purpose: "Investieren",
    image: "/images/old-town.png",
    badge: "Rendite 5,2 %",
    beds: 2,
    baths: 2,
    area: 126,
  },
  {
    id: 5,
    title: "Nordic Lake Retreat",
    location: "Stockholm Archipelago",
    country: "Schweden",
    price: "€ 1.620.000",
    type: "Ferienhaus",
    purpose: "Kaufen",
    image: "/images/coastal-house.png",
    beds: 4,
    baths: 2,
    area: 194,
  },
  {
    id: 6,
    title: "Urban Garden Apartment",
    location: "Berlin-Mitte, Berlin",
    country: "Deutschland",
    price: "€ 2.950 / Monat",
    type: "Wohnung",
    purpose: "Mieten",
    image: "/images/luxury-interior.png",
    badge: "Bezugsfertig",
    beds: 2,
    baths: 1,
    area: 98,
  },
];
