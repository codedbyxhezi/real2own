import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { newDevelopmentProperties } from "@/data/listingCollections";

export const metadata: Metadata = {
  title: "Neubauprojekte",
  description:
    "Aktuelle Neubauprojekte, Projektentwicklungen und moderne Wohnkonzepte entdecken.",
};

export default function NeubauprojektePage() {
  return (
    <>
      <Header />

      <main>
        <ListingPage
          eyebrow="Neubauprojekte"
          title="Heute entdecken, was morgen entsteht."
          description="Ausgewählte Neubauprojekte und moderne Wohnkonzepte für Eigennutzer, Investoren und Projektpartner."
          resultLabel="Aktuelle Neubauprojekte"
          properties={newDevelopmentProperties}
        />
      </main>

      <Footer />
    </>
  );
}