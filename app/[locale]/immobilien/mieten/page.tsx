import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { getPropertiesForRent } from "@/data/listingCollections";

type MietenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: MietenPageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "RentPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function MietenPage({
  params,
}: MietenPageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "RentPage",
  });

  const properties = getPropertiesForRent(locale);

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