// Coordonnées et réglages de l'entreprise.
// Tout ce qui est marqué « À CONFIRMER » est provisoire : l'entreprise n'a pas
// encore de présence en ligne, il faut remplacer ces valeurs par les vraies.

export const site = {
  name: "EGS Maçonnerie",
  shortName: "EGS",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://egs-maconnerie.vercel.app").replace(/\/$/, ""),
  baseline: "Bâtir d'aplomb",
  description:
    "EGS Maçonnerie, entreprise de maçonnerie générale et de gros œuvre à Aix-en-Provence et dans tout le Pays d'Aix : construction de maisons, extensions, rénovation en pierre, murs, terrasses et ouvertures de murs porteurs. Devis gratuit sous 48 h.",

  // À CONFIRMER
  phone: "06 00 00 00 00",
  phoneHref: "+33600000000",
  email: "contact@egs-maconnerie.fr",
  city: "Aix-en-Provence",
  postalCode: "13090",
  region: "Provence-Alpes-Côte d'Azur",
  department: "Bouches-du-Rhône",
  geo: { lat: 43.5297, lng: 5.4474 },
  hours: "Du lundi au vendredi, de 7 h 30 à 18 h",
  openingHours: ["Mo-Fr 07:30-18:00"],
  siret: "À compléter",
  insurer: "À compléter",
  founded: undefined as number | undefined,
  socials: [] as { label: string; href: string }[],
} as const;

export const nav = [
  { href: "/savoir-faire", label: "Savoir-faire" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/entreprise", label: "L'entreprise" },
  { href: "/zones-intervention", label: "Secteur" },
  { href: "/questions", label: "Questions" },
];

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
