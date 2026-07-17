export type PropertyCategory =
  | "Kauf"
  | "Miete"
  | "Grundstück"
  | "Neubauprojekt";

export type PropertyDetail = {
  id: number;
  title: string;
  location: string;
  price: string;
  propertyType: string;
  area: string;
  rooms: string;
  image: string;
  gallery: string[];
  label?: string;
  category: PropertyCategory;
  description: string;
  features: string[];
};

type RawProperty = [
  id: number,
  title: string,
  location: string,
  price: string,
  propertyType: string,
  area: string,
  rooms: string,
  image: string,
  label: string | undefined,
  category: PropertyCategory,
];

const rawProperties: RawProperty[] = [
  [
    101,
    "Villa mit Panoramablick über die Bucht",
    "Mallorca, Spanien",
    "3.950.000 €",
    "Villa",
    "340 m²",
    "6 Zimmer",
    "/images/hero/hero-01.webp",
    "Exklusiv",
    "Kauf",
  ],
  [
    102,
    "Penthouse mit privater Dachterrasse",
    "München, Deutschland",
    "2.480.000 €",
    "Penthouse",
    "198 m²",
    "4 Zimmer",
    "/images/hero/hero-02.webp",
    "Neu",
    "Kauf",
  ],
  [
    103,
    "Residenz mit Blick auf die Skyline",
    "Dubai, Vereinigte Arabische Emirate",
    "1.890.000 €",
    "Apartment",
    "176 m²",
    "4 Zimmer",
    "/images/hero/hero-03.webp",
    undefined,
    "Kauf",
  ],
  [
    104,
    "Stadthaus zwischen Altstadt und Fluss",
    "Lissabon, Portugal",
    "1.320.000 €",
    "Townhouse",
    "210 m²",
    "5 Zimmer",
    "/images/hero/hero-04.webp",
    undefined,
    "Kauf",
  ],
  [
    105,
    "Architektenvilla in ruhiger Wohnlage",
    "Berlin, Deutschland",
    "2.150.000 €",
    "Villa",
    "265 m²",
    "6 Zimmer",
    "/images/hero/hero-02.webp",
    undefined,
    "Kauf",
  ],
  [
    106,
    "Moderne Villa zwischen Meer und Bergen",
    "Marbella, Spanien",
    "4.600.000 €",
    "Villa",
    "410 m²",
    "7 Zimmer",
    "/images/hero/hero-01.webp",
    "Off Market",
    "Kauf",
  ],

  [
    201,
    "Penthouse mit Dachterrasse und Stadtblick",
    "München, Deutschland",
    "4.850 € / Monat",
    "Penthouse",
    "168 m²",
    "4 Zimmer",
    "/images/hero/hero-02.webp",
    "Neu",
    "Miete",
  ],
  [
    202,
    "Moderne Villa nahe der Küste",
    "Mallorca, Spanien",
    "7.900 € / Monat",
    "Villa",
    "284 m²",
    "6 Zimmer",
    "/images/hero/hero-01.webp",
    "Möbliert",
    "Miete",
  ],
  [
    203,
    "Design-Apartment mit Blick auf die Marina",
    "Dubai, Vereinigte Arabische Emirate",
    "6.400 € / Monat",
    "Apartment",
    "142 m²",
    "3 Zimmer",
    "/images/hero/hero-03.webp",
    undefined,
    "Miete",
  ],
  [
    204,
    "Townhouse mit privatem Innenhof",
    "Lissabon, Portugal",
    "3.750 € / Monat",
    "Townhouse",
    "196 m²",
    "5 Zimmer",
    "/images/hero/hero-04.webp",
    undefined,
    "Miete",
  ],
  [
    205,
    "Loftwohnung in historischem Gebäude",
    "Berlin, Deutschland",
    "2.950 € / Monat",
    "Loft",
    "128 m²",
    "3 Zimmer",
    "/images/hero/hero-02.webp",
    undefined,
    "Miete",
  ],
  [
    206,
    "Exklusive Villa mit Pool und Meerblick",
    "Marbella, Spanien",
    "9.500 € / Monat",
    "Villa",
    "340 m²",
    "7 Zimmer",
    "/images/hero/hero-01.webp",
    "Langzeitmiete",
    "Miete",
  ],

  [
    301,
    "Baugrundstück mit freiem Blick auf das Meer",
    "Mallorca, Spanien",
    "1.250.000 €",
    "Baugrundstück",
    "1.480 m²",
    "Bebaubar",
    "/images/grundstuecke/grundstueck-01.jpg",
    "Neu",
    "Grundstück",
  ],
  [
    302,
    "Küstengrundstück für ein exklusives Wohnprojekt",
    "Algarve, Portugal",
    "1.890.000 €",
    "Entwicklungsfläche",
    "2.850 m²",
    "Meernähe",
    "/images/grundstuecke/grundstueck-02.jpg",
    "Exklusiv",
    "Grundstück",
  ],
  [
    303,
    "Weitläufiges Grundstück mit Bergpanorama",
    "Tirol, Österreich",
    "980.000 €",
    "Baugrundstück",
    "2.240 m²",
    "Erschlossen",
    "/images/grundstuecke/grundstueck-03.jpg",
    undefined,
    "Grundstück",
  ],
  [
    304,
    "Entwicklungsfläche für ein neues Wohnquartier",
    "Berlin, Deutschland",
    "3.400.000 €",
    "Projektgrundstück",
    "5.600 m²",
    "Wohnbebauung",
    "/images/grundstuecke/grundstueck-04.jpg",
    "Projekt",
    "Grundstück",
  ],
  [
    305,
    "Vermessenes Grundstück für ein privates Bauvorhaben",
    "München, Deutschland",
    "1.680.000 €",
    "Baugrundstück",
    "1.130 m²",
    "Vermessen",
    "/images/grundstuecke/grundstueck-05.jpg",
    undefined,
    "Grundstück",
  ],
  [
    306,
    "Große Entwicklungsfläche in strategischer Lage",
    "Dubai, Vereinigte Arabische Emirate",
    "2.950.000 €",
    "Entwicklungsfläche",
    "8.400 m²",
    "Off Market",
    "/images/grundstuecke/grundstueck-06.jpg",
    "Off Market",
    "Grundstück",
  ],

  [
    401,
    "Exklusive Neubauresidenzen nahe der Küste",
    "Mallorca, Spanien",
    "Ab 1.480.000 €",
    "Wohnprojekt",
    "135–280 m²",
    "3–6 Zimmer",
    "/images/hero/hero-01.webp",
    "Verkaufsstart",
    "Neubauprojekt",
  ],
  [
    402,
    "Urbanes Wohnensemble mit privaten Dachterrassen",
    "München, Deutschland",
    "Ab 895.000 €",
    "Neubauwohnungen",
    "82–184 m²",
    "2–5 Zimmer",
    "/images/hero/hero-02.webp",
    "Im Bau",
    "Neubauprojekt",
  ],
  [
    403,
    "Moderne Villen in einer privaten Wohnanlage",
    "Dubai, Vereinigte Arabische Emirate",
    "Ab 2.350.000 €",
    "Villenprojekt",
    "290–520 m²",
    "5–8 Zimmer",
    "/images/hero/hero-03.webp",
    "Neu",
    "Neubauprojekt",
  ],
  [
    404,
    "Nachhaltiges Quartier mit urbanem Wohnkonzept",
    "Berlin, Deutschland",
    "Ab 640.000 €",
    "Wohnquartier",
    "64–156 m²",
    "2–4 Zimmer",
    "/images/grundstuecke/grundstueck-04.jpg",
    "Projekt",
    "Neubauprojekt",
  ],
  [
    405,
    "Design-Apartments mit Blick über die Stadt",
    "Lissabon, Portugal",
    "Ab 720.000 €",
    "Apartments",
    "76–168 m²",
    "2–4 Zimmer",
    "/images/hero/hero-04.webp",
    undefined,
    "Neubauprojekt",
  ],
  [
    406,
    "Zeitgenössische Residenzen zwischen Meer und Bergen",
    "Marbella, Spanien",
    "Ab 1.950.000 €",
    "Residenzen",
    "210–390 m²",
    "4–7 Zimmer",
    "/images/baupartner/baupartner-hero.jpg",
    "Exklusiv",
    "Neubauprojekt",
  ],
];

const standardGallery = [
  "/images/hero/hero-01.webp",
  "/images/hero/hero-02.webp",
  "/images/hero/hero-03.webp",
  "/images/hero/hero-04.webp",
];

const plotGallery = [
  "/images/grundstuecke/grundstueck-01.jpg",
  "/images/grundstuecke/grundstueck-02.jpg",
  "/images/grundstuecke/grundstueck-03.jpg",
  "/images/grundstuecke/grundstueck-04.jpg",
  "/images/grundstuecke/grundstueck-05.jpg",
  "/images/grundstuecke/grundstueck-06.jpg",
];

const descriptions: Record<PropertyCategory, string> = {
  Kauf:
    "Diese ausgewählte Immobilie verbindet eine hochwertige Lage mit klarer Architektur und großzügigen Wohnbereichen. Weitere Informationen, Unterlagen und Besichtigungstermine stellen wir auf persönliche Anfrage bereit.",

  Miete:
    "Dieses Mietangebot richtet sich an Interessenten, die Wert auf Lage, Komfort und einen hochwertigen Wohnstandard legen. Mietbeginn, Ausstattung und weitere Vertragsdetails werden individuell abgestimmt.",

  Grundstück:
    "Die Fläche bietet eine interessante Grundlage für ein privates oder professionelles Bauvorhaben. Angaben zur Bebaubarkeit, Erschließung und Planung werden im Rahmen einer persönlichen Anfrage geprüft.",

  Neubauprojekt:
    "Das Projekt verbindet moderne Architektur mit einem zeitgemäßen Wohnkonzept. Verfügbare Einheiten, Grundrisse, Baufortschritt und Ausstattungsvarianten stellen wir auf Anfrage bereit.",
};

const features: Record<PropertyCategory, string[]> = {
  Kauf: [
    "Ausgewählte Lage",
    "Hochwertige Architektur",
    "Großzügige Wohnbereiche",
    "Persönliche Besichtigung",
    "Unterlagen auf Anfrage",
    "Internationale Vermarktung",
  ],

  Miete: [
    "Langfristige Vermietung",
    "Hochwertiger Wohnstandard",
    "Flexible Terminabstimmung",
    "Persönliche Besichtigung",
    "Unterlagen auf Anfrage",
    "Direkter Ansprechpartner",
  ],

  Grundstück: [
    "Prüfung der Bebaubarkeit",
    "Standortbezogene Beratung",
    "Planungsunterlagen auf Anfrage",
    "Entwicklungspotenzial",
    "Direkter Eigentümerkontakt",
    "Unterstützung bei Partnern",
  ],

  Neubauprojekt: [
    "Moderne Planung",
    "Unterschiedliche Einheiten",
    "Grundrisse auf Anfrage",
    "Projektunterlagen verfügbar",
    "Persönliche Beratung",
    "Aktuelle Verfügbarkeiten",
  ],
};

function createGallery(image: string, category: PropertyCategory) {
  const source =
    category === "Grundstück" ? plotGallery : standardGallery;

  return [
    image,
    ...source.filter((galleryImage) => galleryImage !== image),
  ].slice(0, 4);
}

export const propertyCatalog: PropertyDetail[] = rawProperties.map(
  ([
    id,
    title,
    location,
    price,
    propertyType,
    area,
    rooms,
    image,
    label,
    category,
  ]) => ({
    id,
    title,
    location,
    price,
    propertyType,
    area,
    rooms,
    image,
    label,
    category,
    gallery: createGallery(image, category),
    description: descriptions[category],
    features: features[category],
  })
);

export function getPropertyById(id: string | number) {
  return propertyCatalog.find(
    (property) => property.id === Number(id)
  );
}