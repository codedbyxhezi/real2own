import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ListingPage } from "@/components/ListingPage/ListingPage";
import { getNewDevelopmentProperties } from "@/data/listingCollections";

type NeubauprojektePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: NeubauprojektePageProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "NewDevelopmentsPage",
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function NeubauprojektePage({
  params,
}: NeubauprojektePageProps) {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "NewDevelopmentsPage",
  });

  const properties =
    getNewDevelopmentProperties(locale);

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