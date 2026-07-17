import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { propertiesForRent } from "@/data/listingCollections";

export const metadata: Metadata = {
  title: "Immobilien mieten",
  description:
    "Ausgewählte Wohnungen, Häuser und internationale Immobilien zur Miete entdecken.",
};

export default function MietenPage() {
  return (
    <>
      <Header />

      <main>
        <ListingPage
          eyebrow="Immobilien mieten"
          title="Ankommen, ohne sich festzulegen."
          description="Finde hochwertige Mietwohnungen, Häuser und besondere Wohnangebote an ausgewählten Standorten."
          resultLabel="Immobilien zur Miete"
          properties={propertiesForRent}
        />
      </main>

      <Footer />
    </>
  );
}