import type {
  Metadata,
} from "next";
import type {
  ReactNode,
} from "react";

import {
  hasLocale,
  NextIntlClientProvider,
} from "next-intl";

import {
  setRequestLocale,
} from "next-intl/server";

import {
  notFound,
} from "next/navigation";

import {
  routing,
} from "@/i18n/routing";

import {
  ScrollToTop,
} from "@/components/ScrollToTop/ScrollToTop";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const metadataByLocale = {
  de: {
    title:
      "Real2Own – Internationale Immobilienplattform",

    description:
      "Immobilien kaufen oder mieten, Grundstücke entdecken und geprüfte Bau- und Projektpartner finden – international mit Real2Own.",

    openGraphLocale:
      "de_DE",
  },

  en: {
    title:
      "Real2Own – International Real Estate Platform",

    description:
      "Buy or rent real estate, discover land and find selected construction and project partners internationally with Real2Own.",

    openGraphLocale:
      "en_US",
  },

  es: {
    title:
      "Real2Own – Plataforma inmobiliaria internacional",

    description:
      "Compra o alquila inmuebles, descubre terrenos y encuentra socios seleccionados para construcción y proyectos internacionales con Real2Own.",

    openGraphLocale:
      "es_ES",
  },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const {
    locale,
  } = await params;

  if (
    !hasLocale(
      routing.locales,
      locale
    )
  ) {
    notFound();
  }

  const metadata =
    metadataByLocale[
      locale as keyof typeof metadataByLocale
    ];

  return {
    title: {
      default:
        metadata.title,

      template:
        "%s | Real2Own",
    },

    description:
      metadata.description,

    openGraph: {
      type:
        "website",

      siteName:
        "Real2Own",

      locale:
        metadata.openGraphLocale,

      title:
        metadata.title,

      description:
        metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const {
    locale,
  } = await params;

  if (
    !hasLocale(
      routing.locales,
      locale
    )
  ) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      {children}

      <ScrollToTop />
    </NextIntlClientProvider>
  );
}