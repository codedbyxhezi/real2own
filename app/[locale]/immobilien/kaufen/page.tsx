import { redirect } from "next/navigation";

type KaufenPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function KaufenPage({
  params,
}: KaufenPageProps) {
  const { locale } = await params;

  const prefix =
    locale === "de"
      ? ""
      : `/${locale}`;

  redirect(
    `${prefix}/immobilien?angebot=kaufen`
  );
}