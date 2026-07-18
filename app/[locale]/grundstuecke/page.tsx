import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { getLandProperties } from "@/data/listingCollections";

type GrundstueckePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: GrundstueckePageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "LandPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function GrundstueckePage({
  params,
}: GrundstueckePageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "LandPage",
  });

  const properties = getLandProperties(locale);

  return (
    <>
      <Header />

      <main>
        <ListingPage
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          resultLabel={t("resultLabel")}
          properties={properties}
        />
      </main>

      <Footer />
    </>
  );
}