import { redirect } from "next/navigation";

type MietenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function MietenPage({
  params,
}: MietenPageProps) {
  const { locale } = await params;

  const prefix =
    locale === "de"
      ? ""
      : `/${locale}`;

  redirect(
    `${prefix}/immobilien?angebot=mieten`
  );
}