import type { AppLocale } from "@/i18n/routing";

export type PropertyCategory =
  | "Kauf"
  | "Miete"
  | "Grundstück"
  | "Neubauprojekt";

export type PropertyCategoryKey =
  | "buy"
  | "rent"
  | "land"
  | "development";

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
  categoryKey: PropertyCategoryKey;
  description: string;
  features: string[];
};

type CountryKey =
  | "germany"
  | "spain"
  | "uae"
  | "portugal"
  | "austria";

type CityKey =
  | "mallorca"
  | "munich"
  | "dubai"
  | "lisbon"
  | "berlin"
  | "marbella"
  | "algarve"
  | "tyrol";

type PropertyTypeKey =
  | "villa"
  | "penthouse"
  | "apartment"
  | "townhouse"
  | "loft"
  | "buildingPlot"
  | "developmentSite"
  | "projectSite"
  | "residentialProject"
  | "newBuildApartments"
  | "villaProject"
  | "residentialQuarter"
  | "apartments"
  | "residences";

type PropertyLabelKey =
  | "exclusive"
  | "new"
  | "offMarket"
  | "furnished"
  | "longTermRental"
  | "project"
  | "salesLaunch"
  | "underConstruction";

type PropertyStatusKey =
  | "buildable"
  | "nearSea"
  | "developed"
  | "residentialDevelopment"
  | "surveyed"
  | "offMarket";

type LocalizedText = Record<AppLocale, string>;

type PropertyDetailValue =
  | {
      kind: "rooms";
      min: number;
      max?: number;
    }
  | {
      kind: "status";
      key: PropertyStatusKey;
    };

type RawProperty = {
  id: number;
  title: LocalizedText;
  city: CityKey;
  country: CountryKey;
  price: {
    amount: number;
    from?: boolean;
    period?: "month";
  };
  propertyType: PropertyTypeKey;
  area: {
    min: number;
    max?: number;
  };
  detail: PropertyDetailValue;
  image: string;
  label?: PropertyLabelKey;
  category: PropertyCategoryKey;
};

const rawProperties: RawProperty[] = [
  {
    id: 101,
    title: {
      de: "Villa mit Panoramablick über die Bucht",
      en: "Villa with panoramic views over the bay",
      es: "Villa con vistas panorámicas a la bahía",
    },
    city: "mallorca",
    country: "spain",
    price: {
      amount: 3950000,
    },
    propertyType: "villa",
    area: {
      min: 340,
    },
    detail: {
      kind: "rooms",
      min: 6,
    },
    image: "/images/hero/hero-01.webp",
    label: "exclusive",
    category: "buy",
  },
  {
    id: 102,
    title: {
      de: "Penthouse mit privater Dachterrasse",
      en: "Penthouse with private roof terrace",
      es: "Ático con terraza privada en la azotea",
    },
    city: "munich",
    country: "germany",
    price: {
      amount: 2480000,
    },
    propertyType: "penthouse",
    area: {
      min: 198,
    },
    detail: {
      kind: "rooms",
      min: 4,
    },
    image: "/images/hero/hero-02.webp",
    label: "new",
    category: "buy",
  },
  {
    id: 103,
    title: {
      de: "Residenz mit Blick auf die Skyline",
      en: "Residence with skyline views",
      es: "Residencia con vistas al skyline",
    },
    city: "dubai",
    country: "uae",
    price: {
      amount: 1890000,
    },
    propertyType: "apartment",
    area: {
      min: 176,
    },
    detail: {
      kind: "rooms",
      min: 4,
    },
    image: "/images/hero/hero-03.webp",
    category: "buy",
  },
  {
    id: 104,
    title: {
      de: "Stadthaus zwischen Altstadt und Fluss",
      en: "Townhouse between the old town and the river",
      es: "Casa urbana entre el casco histórico y el río",
    },
    city: "lisbon",
    country: "portugal",
    price: {
      amount: 1320000,
    },
    propertyType: "townhouse",
    area: {
      min: 210,
    },
    detail: {
      kind: "rooms",
      min: 5,
    },
    image: "/images/hero/hero-04.webp",
    category: "buy",
  },
  {
    id: 105,
    title: {
      de: "Architektenvilla in ruhiger Wohnlage",
      en: "Architect-designed villa in a quiet residential area",
      es: "Villa de arquitectura singular en una tranquila zona residencial",
    },
    city: "berlin",
    country: "germany",
    price: {
      amount: 2150000,
    },
    propertyType: "villa",
    area: {
      min: 265,
    },
    detail: {
      kind: "rooms",
      min: 6,
    },
    image: "/images/hero/hero-02.webp",
    category: "buy",
  },
  {
    id: 106,
    title: {
      de: "Moderne Villa zwischen Meer und Bergen",
      en: "Modern villa between the sea and the mountains",
      es: "Villa moderna entre el mar y la montaña",
    },
    city: "marbella",
    country: "spain",
    price: {
      amount: 4600000,
    },
    propertyType: "villa",
    area: {
      min: 410,
    },
    detail: {
      kind: "rooms",
      min: 7,
    },
    image: "/images/hero/hero-01.webp",
    label: "offMarket",
    category: "buy",
  },

  {
    id: 201,
    title: {
      de: "Penthouse mit Dachterrasse und Stadtblick",
      en: "Penthouse with roof terrace and city views",
      es: "Ático con terraza y vistas a la ciudad",
    },
    city: "munich",
    country: "germany",
    price: {
      amount: 4850,
      period: "month",
    },
    propertyType: "penthouse",
    area: {
      min: 168,
    },
    detail: {
      kind: "rooms",
      min: 4,
    },
    image: "/images/hero/hero-02.webp",
    label: "new",
    category: "rent",
  },
  {
    id: 202,
    title: {
      de: "Moderne Villa nahe der Küste",
      en: "Modern villa near the coast",
      es: "Villa moderna cerca de la costa",
    },
    city: "mallorca",
    country: "spain",
    price: {
      amount: 7900,
      period: "month",
    },
    propertyType: "villa",
    area: {
      min: 284,
    },
    detail: {
      kind: "rooms",
      min: 6,
    },
    image: "/images/hero/hero-01.webp",
    label: "furnished",
    category: "rent",
  },
  {
    id: 203,
    title: {
      de: "Design-Apartment mit Blick auf die Marina",
      en: "Design apartment overlooking the marina",
      es: "Apartamento de diseño con vistas al puerto deportivo",
    },
    city: "dubai",
    country: "uae",
    price: {
      amount: 6400,
      period: "month",
    },
    propertyType: "apartment",
    area: {
      min: 142,
    },
    detail: {
      kind: "rooms",
      min: 3,
    },
    image: "/images/hero/hero-03.webp",
    category: "rent",
  },
  {
    id: 204,
    title: {
      de: "Townhouse mit privatem Innenhof",
      en: "Townhouse with private courtyard",
      es: "Casa urbana con patio privado",
    },
    city: "lisbon",
    country: "portugal",
    price: {
      amount: 3750,
      period: "month",
    },
    propertyType: "townhouse",
    area: {
      min: 196,
    },
    detail: {
      kind: "rooms",
      min: 5,
    },
    image: "/images/hero/hero-04.webp",
    category: "rent",
  },
  {
    id: 205,
    title: {
      de: "Loftwohnung in historischem Gebäude",
      en: "Loft apartment in a historic building",
      es: "Loft en un edificio histórico",
    },
    city: "berlin",
    country: "germany",
    price: {
      amount: 2950,
      period: "month",
    },
    propertyType: "loft",
    area: {
      min: 128,
    },
    detail: {
      kind: "rooms",
      min: 3,
    },
    image: "/images/hero/hero-02.webp",
    category: "rent",
  },
  {
    id: 206,
    title: {
      de: "Exklusive Villa mit Pool und Meerblick",
      en: "Exclusive villa with pool and sea views",
      es: "Villa exclusiva con piscina y vistas al mar",
    },
    city: "marbella",
    country: "spain",
    price: {
      amount: 9500,
      period: "month",
    },
    propertyType: "villa",
    area: {
      min: 340,
    },
    detail: {
      kind: "rooms",
      min: 7,
    },
    image: "/images/hero/hero-01.webp",
    label: "longTermRental",
    category: "rent",
  },

  {
    id: 301,
    title: {
      de: "Baugrundstück mit freiem Blick auf das Meer",
      en: "Building plot with unobstructed sea views",
      es: "Parcela edificable con vistas despejadas al mar",
    },
    city: "mallorca",
    country: "spain",
    price: {
      amount: 1250000,
    },
    propertyType: "buildingPlot",
    area: {
      min: 1480,
    },
    detail: {
      kind: "status",
      key: "buildable",
    },
    image: "/images/grundstuecke/grundstueck-01.jpg",
    label: "new",
    category: "land",
  },
  {
    id: 302,
    title: {
      de: "Küstengrundstück für ein exklusives Wohnprojekt",
      en: "Coastal plot for an exclusive residential project",
      es: "Terreno costero para un exclusivo proyecto residencial",
    },
    city: "algarve",
    country: "portugal",
    price: {
      amount: 1890000,
    },
    propertyType: "developmentSite",
    area: {
      min: 2850,
    },
    detail: {
      kind: "status",
      key: "nearSea",
    },
    image: "/images/grundstuecke/grundstueck-02.jpg",
    label: "exclusive",
    category: "land",
  },
  {
    id: 303,
    title: {
      de: "Weitläufiges Grundstück mit Bergpanorama",
      en: "Spacious plot with panoramic mountain views",
      es: "Amplio terreno con vistas panorámicas a las montañas",
    },
    city: "tyrol",
    country: "austria",
    price: {
      amount: 980000,
    },
    propertyType: "buildingPlot",
    area: {
      min: 2240,
    },
    detail: {
      kind: "status",
      key: "developed",
    },
    image: "/images/grundstuecke/grundstueck-03.jpg",
    category: "land",
  },
  {
    id: 304,
    title: {
      de: "Entwicklungsfläche für ein neues Wohnquartier",
      en: "Development site for a new residential district",
      es: "Terreno de desarrollo para un nuevo barrio residencial",
    },
    city: "berlin",
    country: "germany",
    price: {
      amount: 3400000,
    },
    propertyType: "projectSite",
    area: {
      min: 5600,
    },
    detail: {
      kind: "status",
      key: "residentialDevelopment",
    },
    image: "/images/grundstuecke/grundstueck-04.jpg",
    label: "project",
    category: "land",
  },
  {
    id: 305,
    title: {
      de: "Vermessenes Grundstück für ein privates Bauvorhaben",
      en: "Surveyed plot for a private building project",
      es: "Terreno medido para un proyecto de construcción privado",
    },
    city: "munich",
    country: "germany",
    price: {
      amount: 1680000,
    },
    propertyType: "buildingPlot",
    area: {
      min: 1130,
    },
    detail: {
      kind: "status",
      key: "surveyed",
    },
    image: "/images/grundstuecke/grundstueck-05.jpg",
    category: "land",
  },
  {
    id: 306,
    title: {
      de: "Große Entwicklungsfläche in strategischer Lage",
      en: "Large development site in a strategic location",
      es: "Gran terreno de desarrollo en una ubicación estratégica",
    },
    city: "dubai",
    country: "uae",
    price: {
      amount: 2950000,
    },
    propertyType: "developmentSite",
    area: {
      min: 8400,
    },
    detail: {
      kind: "status",
      key: "offMarket",
    },
    image: "/images/grundstuecke/grundstueck-06.jpg",
    label: "offMarket",
    category: "land",
  },

  {
    id: 401,
    title: {
      de: "Exklusive Neubauresidenzen nahe der Küste",
      en: "Exclusive new-build residences near the coast",
      es: "Residencias exclusivas de obra nueva cerca de la costa",
    },
    city: "mallorca",
    country: "spain",
    price: {
      amount: 1480000,
      from: true,
    },
    propertyType: "residentialProject",
    area: {
      min: 135,
      max: 280,
    },
    detail: {
      kind: "rooms",
      min: 3,
      max: 6,
    },
    image: "/images/hero/hero-01.webp",
    label: "salesLaunch",
    category: "development",
  },
  {
    id: 402,
    title: {
      de: "Urbanes Wohnensemble mit privaten Dachterrassen",
      en: "Urban residential ensemble with private roof terraces",
      es: "Conjunto residencial urbano con terrazas privadas",
    },
    city: "munich",
    country: "germany",
    price: {
      amount: 895000,
      from: true,
    },
    propertyType: "newBuildApartments",
    area: {
      min: 82,
      max: 184,
    },
    detail: {
      kind: "rooms",
      min: 2,
      max: 5,
    },
    image: "/images/hero/hero-02.webp",
    label: "underConstruction",
    category: "development",
  },
  {
    id: 403,
    title: {
      de: "Moderne Villen in einer privaten Wohnanlage",
      en: "Modern villas in a private residential community",
      es: "Villas modernas en una urbanización privada",
    },
    city: "dubai",
    country: "uae",
    price: {
      amount: 2350000,
      from: true,
    },
    propertyType: "villaProject",
    area: {
      min: 290,
      max: 520,
    },
    detail: {
      kind: "rooms",
      min: 5,
      max: 8,
    },
    image: "/images/hero/hero-03.webp",
    label: "new",
    category: "development",
  },
  {
    id: 404,
    title: {
      de: "Nachhaltiges Quartier mit urbanem Wohnkonzept",
      en: "Sustainable district with an urban living concept",
      es: "Barrio sostenible con un concepto residencial urbano",
    },
    city: "berlin",
    country: "germany",
    price: {
      amount: 640000,
      from: true,
    },
    propertyType: "residentialQuarter",
    area: {
      min: 64,
      max: 156,
    },
    detail: {
      kind: "rooms",
      min: 2,
      max: 4,
    },
    image: "/images/grundstuecke/grundstueck-04.jpg",
    label: "project",
    category: "development",
  },
  {
    id: 405,
    title: {
      de: "Design-Apartments mit Blick über die Stadt",
      en: "Designer apartments with views over the city",
      es: "Apartamentos de diseño con vistas a la ciudad",
    },
    city: "lisbon",
    country: "portugal",
    price: {
      amount: 720000,
      from: true,
    },
    propertyType: "apartments",
    area: {
      min: 76,
      max: 168,
    },
    detail: {
      kind: "rooms",
      min: 2,
      max: 4,
    },
    image: "/images/hero/hero-04.webp",
    category: "development",
  },
  {
    id: 406,
    title: {
      de: "Zeitgenössische Residenzen zwischen Meer und Bergen",
      en: "Contemporary residences between sea and mountains",
      es: "Residencias contemporáneas entre el mar y la montaña",
    },
    city: "marbella",
    country: "spain",
    price: {
      amount: 1950000,
      from: true,
    },
    propertyType: "residences",
    area: {
      min: 210,
      max: 390,
    },
    detail: {
      kind: "rooms",
      min: 4,
      max: 7,
    },
    image: "/images/baupartner/baupartner-hero.jpg",
    label: "exclusive",
    category: "development",
  },
];

const cityNames: Record<CityKey, LocalizedText> = {
  mallorca: {
    de: "Mallorca",
    en: "Mallorca",
    es: "Mallorca",
  },
  munich: {
    de: "München",
    en: "Munich",
    es: "Múnich",
  },
  dubai: {
    de: "Dubai",
    en: "Dubai",
    es: "Dubái",
  },
  lisbon: {
    de: "Lissabon",
    en: "Lisbon",
    es: "Lisboa",
  },
  berlin: {
    de: "Berlin",
    en: "Berlin",
    es: "Berlín",
  },
  marbella: {
    de: "Marbella",
    en: "Marbella",
    es: "Marbella",
  },
  algarve: {
    de: "Algarve",
    en: "Algarve",
    es: "Algarve",
  },
  tyrol: {
    de: "Tirol",
    en: "Tyrol",
    es: "Tirol",
  },
};

const countryNames: Record<CountryKey, LocalizedText> = {
  germany: {
    de: "Deutschland",
    en: "Germany",
    es: "Alemania",
  },
  spain: {
    de: "Spanien",
    en: "Spain",
    es: "España",
  },
  uae: {
    de: "Vereinigte Arabische Emirate",
    en: "United Arab Emirates",
    es: "Emiratos Árabes Unidos",
  },
  portugal: {
    de: "Portugal",
    en: "Portugal",
    es: "Portugal",
  },
  austria: {
    de: "Österreich",
    en: "Austria",
    es: "Austria",
  },
};

const propertyTypeNames: Record<
  PropertyTypeKey,
  LocalizedText
> = {
  villa: {
    de: "Villa",
    en: "Villa",
    es: "Villa",
  },
  penthouse: {
    de: "Penthouse",
    en: "Penthouse",
    es: "Ático",
  },
  apartment: {
    de: "Apartment",
    en: "Apartment",
    es: "Apartamento",
  },
  townhouse: {
    de: "Townhouse",
    en: "Townhouse",
    es: "Casa urbana",
  },
  loft: {
    de: "Loft",
    en: "Loft",
    es: "Loft",
  },
  buildingPlot: {
    de: "Baugrundstück",
    en: "Building plot",
    es: "Parcela edificable",
  },
  developmentSite: {
    de: "Entwicklungsfläche",
    en: "Development site",
    es: "Terreno de desarrollo",
  },
  projectSite: {
    de: "Projektgrundstück",
    en: "Project site",
    es: "Terreno para proyecto",
  },
  residentialProject: {
    de: "Wohnprojekt",
    en: "Residential project",
    es: "Proyecto residencial",
  },
  newBuildApartments: {
    de: "Neubauwohnungen",
    en: "New-build apartments",
    es: "Viviendas de obra nueva",
  },
  villaProject: {
    de: "Villenprojekt",
    en: "Villa development",
    es: "Proyecto de villas",
  },
  residentialQuarter: {
    de: "Wohnquartier",
    en: "Residential district",
    es: "Barrio residencial",
  },
  apartments: {
    de: "Apartments",
    en: "Apartments",
    es: "Apartamentos",
  },
  residences: {
    de: "Residenzen",
    en: "Residences",
    es: "Residencias",
  },
};

const labelNames: Record<
  PropertyLabelKey,
  LocalizedText
> = {
  exclusive: {
    de: "Exklusiv",
    en: "Exclusive",
    es: "Exclusivo",
  },
  new: {
    de: "Neu",
    en: "New",
    es: "Nuevo",
  },
  offMarket: {
    de: "Off Market",
    en: "Off Market",
    es: "Off Market",
  },
  furnished: {
    de: "Möbliert",
    en: "Furnished",
    es: "Amueblado",
  },
  longTermRental: {
    de: "Langzeitmiete",
    en: "Long-term rental",
    es: "Alquiler de larga duración",
  },
  project: {
    de: "Projekt",
    en: "Project",
    es: "Proyecto",
  },
  salesLaunch: {
    de: "Verkaufsstart",
    en: "Sales launch",
    es: "Inicio de ventas",
  },
  underConstruction: {
    de: "Im Bau",
    en: "Under construction",
    es: "En construcción",
  },
};

const statusNames: Record<
  PropertyStatusKey,
  LocalizedText
> = {
  buildable: {
    de: "Bebaubar",
    en: "Buildable",
    es: "Edificable",
  },
  nearSea: {
    de: "Meernähe",
    en: "Near the sea",
    es: "Cerca del mar",
  },
  developed: {
    de: "Erschlossen",
    en: "Serviced",
    es: "Urbanizado",
  },
  residentialDevelopment: {
    de: "Wohnbebauung",
    en: "Residential development",
    es: "Desarrollo residencial",
  },
  surveyed: {
    de: "Vermessen",
    en: "Surveyed",
    es: "Medido",
  },
  offMarket: {
    de: "Off Market",
    en: "Off Market",
    es: "Off Market",
  },
};

const categoryNames: Record<
  PropertyCategoryKey,
  PropertyCategory
> = {
  buy: "Kauf",
  rent: "Miete",
  land: "Grundstück",
  development: "Neubauprojekt",
};

const descriptions: Record<
  PropertyCategoryKey,
  LocalizedText
> = {
  buy: {
    de: "Diese ausgewählte Immobilie verbindet eine hochwertige Lage mit klarer Architektur und großzügigen Wohnbereichen. Weitere Informationen, Unterlagen und Besichtigungstermine stellen wir auf persönliche Anfrage bereit.",
    en: "This selected property combines a high-quality location with distinctive architecture and generous living spaces. Further information, documents and viewing appointments are available on personal request.",
    es: "Este inmueble seleccionado combina una ubicación de alta calidad con una arquitectura cuidada y amplias zonas de vivienda. Facilitamos más información, documentación y citas para visitas previa solicitud personal.",
  },
  rent: {
    de: "Dieses Mietangebot richtet sich an Interessenten, die Wert auf Lage, Komfort und einen hochwertigen Wohnstandard legen. Mietbeginn, Ausstattung und weitere Vertragsdetails werden individuell abgestimmt.",
    en: "This rental property is aimed at tenants who value location, comfort and a high standard of living. The rental start date, furnishings and further contractual details are agreed individually.",
    es: "Esta oferta de alquiler está dirigida a personas que valoran la ubicación, el confort y un alto nivel residencial. La fecha de inicio, el equipamiento y los demás detalles contractuales se acuerdan individualmente.",
  },
  land: {
    de: "Die Fläche bietet eine interessante Grundlage für ein privates oder professionelles Bauvorhaben. Angaben zur Bebaubarkeit, Erschließung und Planung werden im Rahmen einer persönlichen Anfrage geprüft.",
    en: "The site offers an attractive basis for a private or professional construction project. Information regarding building potential, infrastructure and planning will be reviewed as part of a personal enquiry.",
    es: "El terreno ofrece una base interesante para un proyecto de construcción privado o profesional. La edificabilidad, la urbanización y los aspectos de planificación se revisarán en el marco de una consulta personal.",
  },
  development: {
    de: "Das Projekt verbindet moderne Architektur mit einem zeitgemäßen Wohnkonzept. Verfügbare Einheiten, Grundrisse, Baufortschritt und Ausstattungsvarianten stellen wir auf Anfrage bereit.",
    en: "The development combines modern architecture with a contemporary residential concept. Available units, floor plans, construction progress and specification options are available on request.",
    es: "El proyecto combina arquitectura moderna con un concepto residencial contemporáneo. Las unidades disponibles, planos, estado de construcción y opciones de equipamiento están disponibles previa solicitud.",
  },
};

const features: Record<
  PropertyCategoryKey,
  Record<AppLocale, string[]>
> = {
  buy: {
    de: [
      "Ausgewählte Lage",
      "Hochwertige Architektur",
      "Großzügige Wohnbereiche",
      "Persönliche Besichtigung",
      "Unterlagen auf Anfrage",
      "Internationale Vermarktung",
    ],
    en: [
      "Selected location",
      "High-quality architecture",
      "Generous living spaces",
      "Personal viewing",
      "Documents on request",
      "International marketing",
    ],
    es: [
      "Ubicación seleccionada",
      "Arquitectura de alta calidad",
      "Amplias zonas de vivienda",
      "Visita personalizada",
      "Documentación bajo solicitud",
      "Comercialización internacional",
    ],
  },

  rent: {
    de: [
      "Langfristige Vermietung",
      "Hochwertiger Wohnstandard",
      "Flexible Terminabstimmung",
      "Persönliche Besichtigung",
      "Unterlagen auf Anfrage",
      "Direkter Ansprechpartner",
    ],
    en: [
      "Long-term rental",
      "High standard of living",
      "Flexible appointment scheduling",
      "Personal viewing",
      "Documents on request",
      "Direct contact person",
    ],
    es: [
      "Alquiler de larga duración",
      "Alto nivel residencial",
      "Coordinación flexible de citas",
      "Visita personalizada",
      "Documentación bajo solicitud",
      "Contacto directo",
    ],
  },

  land: {
    de: [
      "Prüfung der Bebaubarkeit",
      "Standortbezogene Beratung",
      "Planungsunterlagen auf Anfrage",
      "Entwicklungspotenzial",
      "Direkter Eigentümerkontakt",
      "Unterstützung bei Partnern",
    ],
    en: [
      "Review of building potential",
      "Location-specific consultation",
      "Planning documents on request",
      "Development potential",
      "Direct owner contact",
      "Support in finding partners",
    ],
    es: [
      "Revisión de la edificabilidad",
      "Asesoramiento específico sobre la ubicación",
      "Documentación de planificación bajo solicitud",
      "Potencial de desarrollo",
      "Contacto directo con el propietario",
      "Apoyo en la búsqueda de socios",
    ],
  },

  development: {
    de: [
      "Moderne Planung",
      "Unterschiedliche Einheiten",
      "Grundrisse auf Anfrage",
      "Projektunterlagen verfügbar",
      "Persönliche Beratung",
      "Aktuelle Verfügbarkeiten",
    ],
    en: [
      "Modern planning",
      "Different unit types",
      "Floor plans on request",
      "Project documents available",
      "Personal consultation",
      "Current availability",
    ],
    es: [
      "Planificación moderna",
      "Diferentes tipos de unidades",
      "Planos bajo solicitud",
      "Documentación del proyecto disponible",
      "Asesoramiento personalizado",
      "Disponibilidad actual",
    ],
  },
};

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

function normalizeLocale(
  locale?: string
): AppLocale {
  if (locale === "en" || locale === "es") {
    return locale;
  }

  return "de";
}

function createGallery(
  image: string,
  category: PropertyCategoryKey
) {
  const source =
    category === "land"
      ? plotGallery
      : standardGallery;

  return [
    image,
    ...source.filter(
      (galleryImage) =>
        galleryImage !== image
    ),
  ].slice(0, 4);
}

function formatNumber(
  value: number,
  locale: AppLocale
) {
  return new Intl.NumberFormat(
    locale
  ).format(value);
}

function formatCurrency(
  amount: number,
  locale: AppLocale
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatPrice(
  property: RawProperty,
  locale: AppLocale
) {
  const price = formatCurrency(
    property.price.amount,
    locale
  );

  if (property.price.period === "month") {
    const month = {
      de: "Monat",
      en: "month",
      es: "mes",
    }[locale];

    return `${price} / ${month}`;
  }

  if (property.price.from) {
    const prefix = {
      de: "Ab",
      en: "From",
      es: "Desde",
    }[locale];

    return `${prefix} ${price}`;
  }

  return price;
}

function formatArea(
  area: RawProperty["area"],
  locale: AppLocale
) {
  if (area.max) {
    return `${formatNumber(
      area.min,
      locale
    )}–${formatNumber(
      area.max,
      locale
    )} m²`;
  }

  return `${formatNumber(
    area.min,
    locale
  )} m²`;
}

function formatDetail(
  detail: PropertyDetailValue,
  locale: AppLocale
) {
  if (detail.kind === "status") {
    return statusNames[detail.key][locale];
  }

  const roomLabel = {
    de: "Zimmer",
    en: detail.max
      ? "rooms"
      : detail.min === 1
        ? "room"
        : "rooms",
    es: detail.max
      ? "habitaciones"
      : detail.min === 1
        ? "habitación"
        : "habitaciones",
  }[locale];

  if (detail.max) {
    return `${detail.min}–${detail.max} ${roomLabel}`;
  }

  return `${detail.min} ${roomLabel}`;
}

function localizeProperty(
  property: RawProperty,
  locale: AppLocale
): PropertyDetail {
  return {
    id: property.id,
    title: property.title[locale],
    location: `${cityNames[property.city][locale]}, ${
      countryNames[property.country][locale]
    }`,
    price: formatPrice(
      property,
      locale
    ),
    propertyType:
      propertyTypeNames[
        property.propertyType
      ][locale],
    area: formatArea(
      property.area,
      locale
    ),
    rooms: formatDetail(
      property.detail,
      locale
    ),
    image: property.image,
    gallery: createGallery(
      property.image,
      property.category
    ),
    label: property.label
      ? labelNames[property.label][locale]
      : undefined,
    category:
      categoryNames[property.category],
    categoryKey: property.category,
    description:
      descriptions[property.category][locale],
    features:
      features[property.category][locale],
  };
}

export function getPropertyCatalog(
  locale?: string
): PropertyDetail[] {
  const resolvedLocale =
    normalizeLocale(locale);

  return rawProperties.map((property) =>
    localizeProperty(
      property,
      resolvedLocale
    )
  );
}

/**
 * Deutscher Fallback für bestehende Komponenten.
 * Neue locale-abhängige Seiten sollten
 * getPropertyCatalog(locale) verwenden.
 */
export const propertyCatalog =
  getPropertyCatalog("de");

export function getPropertyById(
  id: string | number,
  locale?: string
) {
  const property =
    rawProperties.find(
      (item) =>
        item.id === Number(id)
    );

  if (!property) {
    return undefined;
  }

  return localizeProperty(
    property,
    normalizeLocale(locale)
  );
}