import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { propertiesForSale } from "@/data/listingCollections";

export const metadata: Metadata = {
  title: "Immobilien kaufen",
  description:
    "Ausgewählte Immobilien zum Kauf in Deutschland und internationalen Märkten entdecken.",
};

export default function KaufenPage() {
  return (
    <>
      <Header />

      <main>
        <ListingPage
          eyebrow="Immobilien kaufen"
          title="Räume für neue Perspektiven."
          description="Entdecke ausgewählte Wohnungen, Häuser und Villen in Deutschland, Europa und internationalen Märkten."
          resultLabel="Immobilien zum Kauf"
          properties={propertiesForSale}
        />
      </main>

      <Footer />
    </>
  );
}