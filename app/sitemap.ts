import type { MetadataRoute } from "next";
import { propertyCatalog } from "@/data/propertyCatalog";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://real2own.com";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: baseUrl,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${baseUrl}/immobilien/kaufen`,
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/immobilien/mieten`,
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/grundstuecke`,
    changeFrequency: "daily",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/neubauprojekte`,
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/international`,
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/baupartner`,
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    url: `${baseUrl}/immobilie-anbieten`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/projekt-praesentieren`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/partner-werden`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/ueber-uns`,
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    url: `${baseUrl}/kontakt`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/impressum`,
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    url: `${baseUrl}/datenschutz`,
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

const propertyRoutes: MetadataRoute.Sitemap =
  propertyCatalog.map((property) => ({
    url: `${baseUrl}/immobilien/${property.id}`,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...propertyRoutes];
}