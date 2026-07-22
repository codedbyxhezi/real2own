import { redirect } from "next/navigation";

type NewListingPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function NewListingPage({
  params,
}: NewListingPageProps) {
  const { locale } = await params;

  const localePrefix =
    locale === "de"
      ? ""
      : `/${locale}`;

  redirect(
    `${localePrefix}/dashboard`
  );
}