// Chantiers présentés sur le site.
// Version de démonstration : photos d'illustration en attendant les photos
// des vrais chantiers de l'entreprise (à remplacer, voir README).

export type Project = {
  slug: string;
  title: string;
  commune: string;
  category: "Pierre" | "Gros œuvre" | "Extérieurs" | "Murs";
  service: string;
  cover: string;
  gallery: string[];
  summary: string;
  story: string[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "mas-restaure-trets",
    title: "Un mas rendu à la chaux",
    commune: "Trets",
    category: "Pierre",
    service: "renovation-pierre",
    cover: "p-mas",
    gallery: ["p-mas", "m-moellons", "geste-taille"],
    summary: "Façades de moellons dégarnies puis rejointoyées à la chaux, voûte d'entrée reprise pierre à pierre.",
    story: [
      "Les joints au ciment posés dans les années 80 retenaient l'humidité et faisaient éclater la pierre. On les a dégarnis à la main, sur toute la façade sud.",
      "Les pierres trop abîmées ont été remplacées par des moellons de récupération, puis l'ensemble a été rejointoyé avec un mortier de chaux naturelle teinté au sable de pays.",
    ],
    facts: [
      { label: "Durée", value: "6 semaines" },
      { label: "Matériaux", value: "Chaux NHL, moellons de récupération" },
      { label: "Surface", value: "180 m² de façade" },
    ],
  },
  {
    slug: "plage-piscine-venelles",
    title: "Une plage de piscine en pierre claire",
    commune: "Venelles",
    category: "Extérieurs",
    service: "terrasses-exterieurs",
    cover: "p-piscine",
    gallery: ["p-piscine", "p-bassin", "m-taille"],
    summary: "Dalle reprise avec pentes d'écoulement, margelles et dallage en pierre antidérapante autour du bassin.",
    story: [
      "L'ancienne plage en carrelage s'était soulevée par endroits. On a démoli, repris la dalle avec de vraies pentes vers l'extérieur et un joint de fractionnement tous les 15 m².",
      "Dallage et margelles en pierre claire, choisis pour rester frais sous les pieds en plein mois d'août.",
    ],
    facts: [
      { label: "Durée", value: "3 semaines" },
      { label: "Matériaux", value: "Pierre calcaire vieillie" },
      { label: "Surface", value: "65 m²" },
    ],
  },
  {
    slug: "restanques-le-tholonet",
    title: "Restanques sous la Sainte-Victoire",
    commune: "Le Tholonet",
    category: "Murs",
    service: "murs-pierre-seche",
    cover: "p-restanques",
    gallery: ["p-restanques", "m-seche", "hero-geste"],
    summary: "Trois niveaux de restanques relevés en pierre sèche, avec drainage repensé pour les pluies d'automne.",
    story: [
      "Les anciennes restanques s'étaient effondrées après plusieurs épisodes de pluie. On a trié les pierres sur place, réutilisées à plus de 80 %.",
      "Montées sans mortier, avec un fruit marqué et un remblai drainant à l'arrière : l'eau passe, le mur reste.",
    ],
    facts: [
      { label: "Durée", value: "5 semaines" },
      { label: "Matériaux", value: "Pierre sèche du terrain" },
      { label: "Longueur", value: "70 mètres linéaires" },
    ],
  },
  {
    slug: "escalier-jardin-eguilles",
    title: "Un escalier dans le jardin",
    commune: "Éguilles",
    category: "Extérieurs",
    service: "terrasses-exterieurs",
    cover: "p-escalier",
    gallery: ["p-escalier", "p-marches", "p-escalier-vegetal"],
    summary: "Escalier extérieur en pierre reliant la terrasse au potager, marches massives et murets d'accompagnement.",
    story: [
      "Le terrain descend de quatre mètres entre la maison et le potager. On a dessiné un escalier aux marches basses et profondes, agréables à monter les bras chargés.",
      "Les murets de part et d'autre retiennent la terre et accueillent les plantations.",
    ],
    facts: [
      { label: "Durée", value: "2 semaines" },
      { label: "Matériaux", value: "Pierre massive, béton armé" },
      { label: "Dénivelé", value: "4 mètres" },
    ],
  },
  {
    slug: "facade-maison-village-rognes",
    title: "Une maison de village rejointoyée",
    commune: "Rognes",
    category: "Pierre",
    service: "renovation-pierre",
    cover: "p-facade",
    gallery: ["p-facade", "m-calcaire", "m-plate"],
    summary: "Façade en pierre de Rognes nettoyée, joints repris à pierre vue, encadrements restaurés.",
    story: [
      "La façade avait été enduite au ciment dans sa partie basse. On a tout retiré pour retrouver la pierre de Rognes d'origine.",
      "Rejointoiement à pierre vue, à la chaux, dans une teinte proche des joints anciens encore sains.",
    ],
    facts: [
      { label: "Durée", value: "3 semaines" },
      { label: "Matériaux", value: "Pierre de Rognes, chaux" },
      { label: "Surface", value: "90 m²" },
    ],
  },
  {
    slug: "cuisine-ete-meyreuil",
    title: "Une cuisine d'été sous la tonnelle",
    commune: "Meyreuil",
    category: "Extérieurs",
    service: "terrasses-exterieurs",
    cover: "p-tonnelle",
    gallery: ["p-tonnelle", "m-moellons", "geste-outils"],
    summary: "Mur en pierre maçonnée, plan de travail et banc intégrés, sous une treille existante.",
    story: [
      "Le client voulait cuisiner dehors sans tourner le dos à ses invités. On a monté un mur en pierre qui protège du mistral et intègre plan de travail et banc.",
      "Dalle légèrement inclinée pour l'écoulement, sol en pierre posé à joints serrés.",
    ],
    facts: [
      { label: "Durée", value: "10 jours" },
      { label: "Matériaux", value: "Moellons calcaires, chaux" },
      { label: "Surface", value: "25 m²" },
    ],
  },
  {
    slug: "maison-bouc-bel-air",
    title: "Le gros œuvre d'une maison neuve",
    commune: "Bouc-Bel-Air",
    category: "Gros œuvre",
    service: "construction-maison",
    cover: "p-dalle",
    gallery: ["p-dalle", "chantier-ombres", "chantier-coulage"],
    summary: "Fondations, vide sanitaire, élévation et plancher d'une maison de 140 m² sur terrain en pente.",
    story: [
      "Terrain en pente et sol argileux : l'étude de sol a conduit à des fondations renforcées. On a travaillé main dans la main avec le bureau d'études.",
      "Chaque étape cachée (fondations, ferraillage, réseaux) a été photographiée et transmise au client et à l'architecte.",
    ],
    facts: [
      { label: "Durée", value: "11 semaines" },
      { label: "Système", value: "Bloc béton, plancher hourdis" },
      { label: "Surface", value: "140 m²" },
    ],
  },
  {
    slug: "coupole-aix",
    title: "Une coupole reprise à l'ancienne",
    commune: "Aix-en-Provence",
    category: "Pierre",
    service: "renovation-pierre",
    cover: "p-coupole",
    gallery: ["p-coupole", "geste-taille", "m-taille"],
    summary: "Reprise d'une maçonnerie de pierre en coupole, pierre par pierre, avec un mortier de chaux adapté.",
    story: [
      "Un ouvrage où chaque pierre compte. On a démonté les parties instables en numérotant les pierres pour les reposer à leur place.",
      "Échafaudage sur mesure et travail à la main du début à la fin.",
    ],
    facts: [
      { label: "Durée", value: "4 semaines" },
      { label: "Matériaux", value: "Pierre calcaire, chaux" },
      { label: "Technique", value: "Démontage et remontage" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectCategories = ["Tous", "Pierre", "Gros œuvre", "Murs", "Extérieurs"] as const;
