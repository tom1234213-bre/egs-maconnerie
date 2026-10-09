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
    slug: "aix-en-provence",
    name: "Aix-en-Provence",
    postalCode: "13090",
    distance: "Notre base",
    text:
      "Du centre ancien aux quartiers de Puyricard, Luynes, Les Milles ou Celony, Aix réunit tous les chantiers : hôtels particuliers en pierre de Bibémus, bastides dans les collines, villas des années 70 à agrandir. En secteur sauvegardé, on travaille avec les prescriptions de l'Architecte des Bâtiments de France.",
    typical: ["Rénovation en pierre", "Ouverture de mur porteur", "Extension", "Murs de clôture"],
    geo: { lat: 43.5297, lng: 5.4474 },
  },
  {
    slug: "le-tholonet",
    name: "Le Tholonet",
    postalCode: "13100",
    distance: "10 min",
    text:
      "Au pied de la Sainte-Victoire, les terrains en pente demandent des murs de soutènement solides et des restanques bien drainées. On y construit aussi des terrasses qui regardent la montagne, en pierre claire.",
    typical: ["Murs de soutènement", "Restanques", "Terrasses"],
    geo: { lat: 43.5216, lng: 5.5115 },
  },
  {
    slug: "venelles",
    name: "Venelles",
    postalCode: "13770",
    distance: "15 min",
    text:
      "Beaucoup de maisons des années 70 à 90 qui s'agrandissent : extensions de plain-pied, garages transformés en pièces de vie, piscines à entourer. Le plateau est exposé au mistral : on soigne les enduits et les chaperons.",
    typical: ["Extension", "Plage de piscine", "Enduits"],
    geo: { lat: 43.5986, lng: 5.4831 },
  },
  {
    slug: "eguilles",
    name: "Éguilles",
    postalCode: "13510",
    distance: "15 min",
    text:
      "Village perché aux ruelles de pierre et lotissements récents sur les coteaux. On y rejointoie des façades anciennes à la chaux et on bâtit des murs de clôture en pierre qui s'accordent avec le vieux village.",
    typical: ["Rénovation en pierre", "Murs en pierre", "Gros œuvre"],
    geo: { lat: 43.5694, lng: 5.3556 },
  },
  {
    slug: "meyreuil",
    name: "Meyreuil",
    postalCode: "13590",
    distance: "15 min",
    text:
      "Entre Arc et Sainte-Victoire, des terrains variés et des maisons familiales qui évoluent. Dalles, extensions, terrasses couvertes : des chantiers de taille raisonnable, menés vite et proprement.",
    typical: ["Dalles", "Extension", "Terrasses"],
    geo: { lat: 43.4877, lng: 5.4964 },
  },
  {
    slug: "bouc-bel-air",
    name: "Bouc-Bel-Air",
    postalCode: "13320",
    distance: "20 min",
    text:
      "Des collines boisées et des terrains souvent en pente : soutènements, escaliers extérieurs et allées carrossables y sont des demandes fréquentes, comme les clôtures maçonnées avec piliers de portail.",
    typical: ["Soutènement", "Escaliers extérieurs", "Clôtures"],
    geo: { lat: 43.4537, lng: 5.4136 },
  },
  {
    slug: "gardanne",
    name: "Gardanne",
    postalCode: "13120",
    distance: "20 min",
    text:
      "Maisons de ville, anciennes maisons de mineurs et constructions neuves : on intervient autant sur la reprise de maçonneries anciennes que sur le gros œuvre de maisons individuelles.",
    typical: ["Gros œuvre", "Reprises", "Ouverture de mur"],
    geo: { lat: 43.4547, lng: 5.4689 },
  },
  {
    slug: "rognes",
    name: "Rognes",
    postalCode: "13840",
    distance: "25 min",
    text:
      "Rognes a donné son nom à une pierre calcaire dorée qui habille une bonne partie d'Aix. On aime y travailler la pierre locale, en restauration comme en neuf, pour des murs qui gardent l'accent du pays.",
    typical: ["Pierre de Rognes", "Rénovation", "Murs en pierre"],
    geo: { lat: 43.6631, lng: 5.3478 },
  },
  {
    slug: "trets",
    name: "Trets",
    postalCode: "13530",
    distance: "25 min",
    text:
      "Bourg médiéval et campagne viticole au sud de la Sainte-Victoire. Mas à restaurer, bâtiments agricoles à transformer, murs de pierre à relever : des chantiers où le savoir-faire ancien compte.",
    typical: ["Restauration de mas", "Murs en pierre", "Enduits à la chaux"],
    geo: { lat: 43.4479, lng: 5.6847 },
  },
  {
    slug: "pertuis",
    name: "Pertuis",
    postalCode: "84120",
    distance: "30 min",
    text:
      "Porte du Luberon, de l'autre côté de la Durance. Bastides, maisons de village et constructions neuves : on y réalise extensions, façades et extérieurs avec les teintes et la pierre du Sud Luberon.",
    typical: ["Extension", "Façades", "Extérieurs"],
    geo: { lat: 43.6942, lng: 5.5017 },
  },
];

export const getCommune = (slug: string) => communes.find((c) => c.slug === slug);

// « à Aix-en-Provence », mais « au Tholonet ».
export const atCommune = (name: string) =>
  name.startsWith("Le ") ? `au ${name.slice(3)}` : name.startsWith("Les ") ? `aux ${name.slice(4)}` : `à ${name}`;
