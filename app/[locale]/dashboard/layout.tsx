import type {
  ReactNode,
} from "react";
import { redirect } from "next/navigation";
import { getDemoSession } from "@/lib/demoAuth";

type DashboardLayoutProps = {
  children: ReactNode;

  params: Promise<{
    locale: string;
  }>;
};

export default async function DashboardLayout({
  children,
  params,
}: DashboardLayoutProps) {
  const { locale } = await params;

  const session =
    await getDemoSession();

  if (!session) {
    const localePrefix =
      locale === "de"
        ? ""
        : `/${locale}`;

    const returnTo =
      encodeURIComponent(
        "/dashboard"
      );

    redirect(
      `${localePrefix}/anmelden?returnTo=${returnTo}`
    );
  }

  return children;
}