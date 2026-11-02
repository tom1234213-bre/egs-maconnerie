// Coordonnées et réglages de l'entreprise.
// Sources : ancien site Wix (egsabdelguenniche.wixsite.com/egsentreprise13),
// annuaire maconnerieinfo.com et registre des entreprises (voir `legal`).

export const site = {
  name: "EGS Maçonnerie",
  shortName: "EGS",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://egs-maconnerie.vercel.app").replace(/\/$/, ""),
  baseline: "Bâtir d'aplomb",
  description:
    "Maçonnerie, charpente et rénovation à Salon-de-Provence et Aix-en-Provence : maisons, extensions, murs, piscines, pierre. Devis gratuit sous 48 h.",

  owner: "Abdel Guenniche",
  // Même numéro que Concept Rénovation (conceptrenovation.eu), partenaire.
  phone: "07 89 41 46 26",
  phoneHref: "+33789414626",
  email: "egs.entreprise13@gmail.com",
  city: "Salon-de-Provence",
  postalCode: "13300",
  region: "Provence-Alpes-Côte d'Azur",
  department: "Bouches-du-Rhône",
  geo: { lat: 43.6403, lng: 5.0973 },
  hours: "Du lundi au vendredi, de 7 h 30 à 18 h",
  openingHours: ["Mo-Fr 07:30-18:00"],
  // Identité légale : registre des entreprises (recherche-entreprises.api.gouv.fr),
  // consulté le 12 octobre 2026. L'entreprise individuelle d'origine (SIREN 881 746 275)
  // est fermée depuis le 31 janvier 2025 ; c'est la SAS ci-dessous qui exerce.
  // Capital social et greffe d'immatriculation : absents du registre public, à confirmer.
  legal: {
    denomination: "EGS",
    forme: "société par actions simplifiée (SAS)",
    president: "Abdelkaioum Guenniche",
    siege: "Résidence Villa Dolia, villa 11, 581 petite route de Carpentras, 84210 Pernes-les-Fontaines",
    siren: "940 794 522",
    siret: "940 794 522 00018",
    tva: "FR89940794522",
    ape: "41.20A, construction de maisons individuelles",
    creation: "21 janvier 2025",
    capital: undefined as string | undefined,
    rcs: undefined as string | undefined,
  },
  partner: {
    name: "Concept Rénovation",
    href: "https://www.conceptrenovation.eu",
    label: "conceptrenovation.eu",
  },
  socials: [{ label: "Facebook", href: "https://www.facebook.com/egsguenniche/" }],
} as const;

export const nav = [
  { href: "/savoir-faire", label: "Savoir-faire" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/entreprise", label: "L'entreprise" },
  { href: "/zones-intervention", label: "Secteur" },
  { href: "/questions", label: "Questions" },
];

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;
