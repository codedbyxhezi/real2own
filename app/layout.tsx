import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real2Own – Immobilien. Grundstücke. Baupartner.",
  description:
    "Die internationale All-in-one-Plattform für Immobilien, Grundstücke, Miete und geprüfte Baupartner.",
  keywords: [
    "Immobilien",
    "Grundstück kaufen",
    "Haus kaufen",
    "Wohnung mieten",
    "Baufirmen",
    "international",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
