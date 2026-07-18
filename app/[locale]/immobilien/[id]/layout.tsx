import type { Metadata } from "next";
import type { ReactNode } from "react";
import { propertyCatalog } from "@/data/propertyCatalog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://real2own.com";

type PropertyLayoutProps = {
  children: ReactNode;
  params: Promise<{
    id: string;
  }>;
};

function findProperty(id: string) {
  const numericId = Number(id);

  if (!Number.isInteger(numericId)) {
    return undefined;
  }

  return propertyCatalog.find(
    (property) => property.id === numericId
  );
}

export async function generateMetadata({
  params,
}: Omit<PropertyLayoutProps, "children">): Promise<Metadata> {
  const { id } = await params;
  const property = findProperty(id);

  if (!property) {
    return {
      title: "Immobilie nicht gefunden",
      description:
        "Das angeforderte Immobilienangebot ist nicht verfügbar.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${siteUrl}/immobilien/${property.id}`;
  const imageUrl = new URL(property.image, siteUrl).toString();

  const description =
    `${property.title} in ${property.location}. ` +
    `${property.price}. Jetzt weitere Informationen bei Real2Own entdecken.`;

  return {
    title: property.title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${property.title} | Real2Own`,
      description,
      url: canonicalUrl,
      siteName: "Real2Own",
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: property.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${property.title} | Real2Own`,
      description,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PropertyLayout({
  children,
}: PropertyLayoutProps) {
  return children;
}