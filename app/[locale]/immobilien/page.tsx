import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PropertyMarketplace } from "@/components/PropertyMarketplace/PropertyMarketplace";
import { getPropertyCatalog } from "@/data/propertyCatalog";
import type { ListingProperty } from "@/types/property";

type ImmobilienPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ImmobilienPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PropertiesPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function ImmobilienPage({
  params,
}: ImmobilienPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "PropertiesPage",
  });

  const properties: ListingProperty[] =
    getPropertyCatalog(locale).map((property) => ({
      id: property.id,
      title: property.title,
      location: property.location,
      price: property.price,
      type: property.propertyType,
      area: property.area,
      rooms: property.rooms,
      image: property.image,
      label: property.label,
      categoryKey: property.categoryKey,
    }));

  return (
    <>
      <Header />

      <main>
        <PropertyMarketplace
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          resultTitle={t("resultTitle")}
          properties={properties}
        />
      </main>

      <Footer />
    </>
  );
}