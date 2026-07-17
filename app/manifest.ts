import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Real2Own",
    short_name: "Real2Own",
    description:
      "Internationale Immobilien, Grundstücke, Neubauprojekte und Baupartner.",
    start_url: "/",
    display: "standalone",
    background_color: "#ebe8df",
    theme_color: "#1d231c",
    orientation: "portrait-primary",
    categories: [
      "business",
      "lifestyle",
      "real-estate",
    ],
    lang: "de",
  };
}