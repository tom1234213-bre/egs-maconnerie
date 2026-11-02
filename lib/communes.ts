export type Commune = {
  slug: string;
  name: string;
  postalCode: string;
  distance: string;
  text: string;
  typical: string[];
  geo: { lat: number; lng: number };
};

// Textes propres à chaque commune : pas de page générique dupliquée.
export const communes: Commune[] = [
  {
    slug: "salon-de-provence",
    name: "Salon-de-Provence",
    postalCode: "13300",
    distance: "Notre base",
    text:
      "Centre ancien au pied du château de l'Empéri, maisons de ville en pierre, villas des années 70 à 90 et mas dans la plaine : à Salon, on passe d'un chantier à l'autre en quelques minutes. C'est notre base depuis 2020.",
    typical: ["Rénovation en pierre", "Extension", "Ouverture de mur porteur", "Murs de clôture"],
    geo: { lat: 43.6403, lng: 5.0973 },
  },
  {
    slug: "aix-en-provence",
    name: "Aix-en-Provence",
    postalCode: "13090",
    distance: "30 min",
    text:
      "Du centre ancien aux quartiers de Puyricard, Luynes ou Les Milles, Aix réunit tous les chantiers : hôtels particuliers en pierre, bastides dans les collines, villas des années 70 à agrandir. En secteur sauvegardé, on travaille avec les prescriptions de l'Architecte des Bâtiments de France.",
    typical: ["Rénovation en pierre", "Ouverture de mur porteur", "Extension", "Charpente"],
    geo: { lat: 43.5297, lng: 5.4474 },
  },
  {
    slug: "pelissanne",
    name: "Pélissanne",
    postalCode: "13330",
    distance: "10 min",
    text:
      "Village traversé par la Touloubre, maisons de village en pierre et quartiers plus récents sur les coteaux. On y restaure des façades à la chaux et on construit extensions, terrasses et piscines.",
    typical: ["Rénovation en pierre", "Extension", "Piscines"],
    geo: { lat: 43.6322, lng: 5.1508 },
  },
  {
    slug: "grans",
    name: "Grans",
    postalCode: "13450",
    distance: "10 min",
    text:
      "Entre Salon et la Crau, un village au bord de la Touloubre et des maisons familiales qui s'agrandissent : dalles, garages transformés, murs de clôture et terrasses.",
    typical: ["Dalles", "Extension", "Murs de clôture"],
    geo: { lat: 43.6083, lng: 5.0631 },
  },
  {
    slug: "lamanon",
    name: "Lamanon",
    postalCode: "13113",
    distance: "10 min",
    text:
      "Au pied des collines, le village des grottes de Calès. Terrains en pente et rocher qui affleure : murs de soutènement, enrochements et terrassements y sont des demandes fréquentes.",
    typical: ["Murs de soutènement", "Enrochements", "Terrassement"],
    geo: { lat: 43.6997, lng: 5.0886 },
  },
  {
    slug: "eyguieres",
    name: "Eyguières",
    postalCode: "13430",
    distance: "15 min",
    text:
      "Porte des Alpilles, vieux village en pierre et mas au milieu des oliviers. Murs anciens à restaurer, charpentes à reprendre, restanques à relever : des chantiers où le savoir-faire ancien compte.",
    typical: ["Restauration de mas", "Charpente", "Murs en pierre"],
    geo: { lat: 43.6947, lng: 5.0311 },
  },
  {
    slug: "lancon-provence",
    name: "Lançon-Provence",
    postalCode: "13680",
    distance: "15 min",
    text:
      "Village perché et coteaux de vignes. Les terrains en pente demandent des soutènements et des escaliers extérieurs solides ; les maisons récentes, des terrasses et des plages de piscine.",
    typical: ["Soutènement", "Escaliers extérieurs", "Terrasses"],
    geo: { lat: 43.5917, lng: 5.1283 },
  },
  {
    slug: "senas",
    name: "Sénas",
    postalCode: "13560",
    distance: "15 min",
    text:
      "Entre Durance et Alpilles, des maisons familiales et des bâtiments agricoles à transformer. Gros œuvre, extensions et charpentes neuves, avec des fondations adaptées aux terrains de plaine.",
    typical: ["Gros œuvre", "Extension", "Charpente"],
    geo: { lat: 43.7447, lng: 5.0789 },
  },
  {
    slug: "la-fare-les-oliviers",
    name: "La Fare-les-Oliviers",
    postalCode: "13580",
    distance: "20 min",
    text:
      "Des collines d'oliviers au-dessus de l'étang de Berre et des terrains souvent en pente. Murs de clôture, soutènements, terrasses et piscines pour profiter de la vue.",
    typical: ["Murs de clôture", "Soutènement", "Piscines"],
    geo: { lat: 43.5517, lng: 5.195 },
  },
];

export const getCommune = (slug: string) => communes.find((c) => c.slug === slug);

// « à Salon-de-Provence », mais « au Puy-Sainte-Réparade ».
export const atCommune = (name: string) =>
  name.startsWith("Le ") ? `au ${name.slice(3)}` : name.startsWith("Les ") ? `aux ${name.slice(4)}` : `à ${name}`;
