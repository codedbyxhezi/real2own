import type { Metadata, Viewport } from "next";
import { getLocale } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://real2own.com"),

  title: {
    default: "Real2Own – Internationale Immobilienplattform",
    template: "%s | Real2Own",
  },

  description:
    "Immobilien kaufen oder mieten, Grundstücke entdecken und geprüfte Bau- und Projektpartner finden – international mit Real2Own.",

  applicationName: "Real2Own",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://real2own.com",
    siteName: "Real2Own",
    title: "Real2Own – Internationale Immobilienplattform",
    description:
      "Immobilien, Grundstücke und geprüfte Baupartner auf einer internationalen Plattform.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11130f",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}