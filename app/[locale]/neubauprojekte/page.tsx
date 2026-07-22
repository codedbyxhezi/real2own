import { redirect } from "next/navigation";

type NeubauprojektePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function NeubauprojektePage({
  params,
}: NeubauprojektePageProps) {
  const { locale } = await params;

  const prefix =
    locale === "de"
      ? ""
      : `/${locale}`;

  redirect(
    `${prefix}/immobilien?typ=neubau`
  );
}