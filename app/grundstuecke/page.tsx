import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { landProperties } from "@/data/listingCollections";

export const metadata: Metadata = {
  title: "Grundstücke",
  description:
    "Ausgewählte Baugrundstücke und Entwicklungsflächen in Deutschland und internationalen Regionen.",
};

export default function GrundstueckePage() {
  return (
    <>
      <Header />

      <main>
        <ListingPage
          eyebrow="Grundstücke"
          title="Der Anfang jeder großen Idee."
          description="Entdecke ausgewählte Grundstücke für private Bauvorhaben, Projektentwicklungen und langfristige Investitionen."
          resultLabel="Verfügbare Grundstücke"
          properties={landProperties}
        />
      </main>

      <Footer />
    </>
  );
}