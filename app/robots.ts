import type { MetadataRoute } from "next";

const baseUrl = "https://real2own.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/konto",
          "/anmelden",
          "/registrieren",
          "/passwort-vergessen",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}