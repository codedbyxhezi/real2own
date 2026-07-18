import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { getPropertiesForSale } from "@/data/listingCollections";

type KaufenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: KaufenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "BuyPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function KaufenPage({
  params,
}: KaufenPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "BuyPage",
  });

  const properties = getPropertiesForSale(locale);

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