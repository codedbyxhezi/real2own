import type { MetadataRoute } from "next";
import { propertyCatalog } from "@/data/propertyCatalog";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://real2own.com"
).replace(/\/$/, "");

const locales = ["de", "en", "es"] as const;

type Locale = (typeof locales)[number];

type ChangeFrequency =
  NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;

type RouteDefinition = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const staticRoutes: RouteDefinition[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/immobilien/kaufen",
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    path: "/immobilien/mieten",
    changeFrequency: "daily",
    priority: 0.9,
  },
  {
    path: "/grundstuecke",
    changeFrequency: "daily",
    priority: 0.85,
  },
  {
    path: "/neubauprojekte",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/international",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/baupartner",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/immobilie-anbieten",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projekt-praesentieren",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/partner-werden",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/ueber-uns",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    path: "/kontakt",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/impressum",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/datenschutz",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

function getLocalizedUrl(
  path: string,
  locale: Locale
) {
  const normalizedPath =
    path === "/" ? "" : path;

  // Deutsch ist die Standardsprache:
  // /kontakt statt /de/kontakt
  if (locale === "de") {
    return `${baseUrl}${normalizedPath}`;
  }

  return `${baseUrl}/${locale}${normalizedPath}`;
}

function getAlternates(path: string) {
  return {
    de: getLocalizedUrl(path, "de"),
    en: getLocalizedUrl(path, "en"),
    es: getLocalizedUrl(path, "es"),

    // Standardversion ohne Sprachpräferenz
    "x-default": getLocalizedUrl(path, "de"),
  };
}

function createLocalizedEntries(
  route: RouteDefinition
): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: getLocalizedUrl(
      route.path,
      locale
    ),

    changeFrequency:
      route.changeFrequency,

    priority:
      route.priority,

    alternates: {
      languages:
        getAlternates(route.path),
    },
  }));
}

export default function sitemap():
  MetadataRoute.Sitemap {
  const localizedStaticRoutes =
    staticRoutes.flatMap(
      createLocalizedEntries
    );

  const localizedPropertyRoutes =
    propertyCatalog.flatMap(
      (property) =>
        createLocalizedEntries({
          path:
            `/immobilien/${property.id}`,

          changeFrequency:
            "weekly",

          priority:
            0.75,
        })
    );

  return [
    ...localizedStaticRoutes,
    ...localizedPropertyRoutes,
  ];
}