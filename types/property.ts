export type ListingCategoryKey =
  | "buy"
  | "rent"
  | "land"
  | "development";

export type ListingProperty = {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  area: string;
  rooms: string;
  image: string;
  label?: string;
  categoryKey?: ListingCategoryKey;
};