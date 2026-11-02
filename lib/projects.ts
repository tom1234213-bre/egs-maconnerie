// Chantiers présentés sur le site : vrais chantiers d'EGS, photos reprises de
// l'ancien site (galerie Wix). La commune n'y figurait pas : elle reste vide
// tant que l'entreprise ne l'a pas précisée.

export type Project = {
  slug: string;
  title: string;
  commune?: string;
  category: "Gros œuvre" | "Extérieurs" | "Murs";
  service: string;
  cover: string;
  gallery: string[];
  summary: string;
  story: string[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "maison-a-etage",
    title: "Une maison à étage, des fondations au toit",
    category: "Gros œuvre",
    service: "construction-maison",
    cover: "c-maison-2",
    gallery: ["c-maison-2", "c-maison-1"],
    summary: "Gros œuvre complet d'une maison à étage : soubassement, murs en brique, planchers, puis charpente et couverture en tuiles.",
    story: [
      "Le soubassement est monté en blocs béton, puis les murs en brique s'élèvent jusqu'à l'étage, avec chaînages et linteaux coulés en place. Le porche d'entrée, sur poteaux, est maçonné en même temps que la maison.",
      "La charpente et la couverture sont posées dans la foulée, par la même entreprise : pas d'attente entre les corps de métier, le chantier avance d'un seul tenant.",
    ],
    facts: [
      { label: "Travaux", value: "Gros œuvre, charpente, couverture" },
      { label: "Matériaux", value: "Brique, bloc béton, béton armé, tuiles" },
    ],
  },
  {
    slug: "piscine-maconnee",
    title: "Une piscine maçonnée",
    category: "Extérieurs",
    service: "terrasses-exterieurs",
    cover: "c-piscine-1",
    gallery: ["c-piscine-1", "c-piscine-2", "c-piscine-3"],
    summary: "Terrassement, radier en béton armé et parois maçonnées : une piscine construite dans les règles, avant la pose du revêtement.",
    story: [
      "Une fois le terrassement fait, le radier est ferraillé puis coulé, avec les attentes qui relient le fond du bassin à ses parois.",
      "Les murs du bassin sont ensuite montés et chaînés. C'est cette structure, invisible une fois la piscine en eau, qui fait qu'elle tient dans le temps.",
    ],
    facts: [
      { label: "Travaux", value: "Terrassement, radier, parois" },
      { label: "Matériaux", value: "Béton armé, blocs" },
    ],
  },
  {
    slug: "escalier-murs-soutenement",
    title: "Un escalier entre deux murs de soutènement",
    category: "Murs",
    service: "murs-pierre-seche",
    cover: "c-escalier-1",
    gallery: ["c-escalier-1", "c-escalier-2", "c-escalier-3"],
    summary: "Un terrain en pente devant la maison : terrassement, murs de soutènement et escalier en béton pour relier les niveaux.",
    story: [
      "Le talus est d'abord repris à la mini-pelle. On monte ensuite les murs de soutènement qui tiennent les terres de part et d'autre, puis l'escalier qui descend de la maison vers le jardin.",
      "Une fois les terres remises en place et les massifs replantés, l'ouvrage se fond dans le jardin.",
    ],
    facts: [
      { label: "Travaux", value: "Terrassement, soutènement, escalier" },
      { label: "Matériaux", value: "Béton armé, blocs enduits" },
    ],
  },
  {
    slug: "allee-carrossable",
    title: "Une allée carrossable jusqu'au garage",
    category: "Extérieurs",
    service: "terrasses-exterieurs",
    cover: "c-allee-1",
    gallery: ["c-allee-1", "c-allee-2"],
    summary: "Une allée tenue par des bordures béton, avec un muret le long du talus et des piliers à l'entrée.",
    story: [
      "Le terrain est décaissé et nivelé, puis les bordures sont posées au cordeau de chaque côté. Elles tiennent le gravier et dessinent l'allée jusqu'au garage.",
      "Le long du talus, un muret retient la terre ; à l'entrée, deux piliers maçonnés préparent la pose du portail.",
    ],
    facts: [
      { label: "Travaux", value: "Terrassement, bordures, muret, piliers" },
      { label: "Matériaux", value: "Béton, gravier" },
    ],
  },
  {
    slug: "maison-plain-pied",
    title: "Une maison de plain-pied en brique",
    category: "Gros œuvre",
    service: "construction-maison",
    cover: "c-plainpied-1",
    gallery: ["c-plainpied-1", "c-plainpied-2"],
    summary: "Élévation des murs en brique sur un soubassement en blocs béton, avec poteaux et linteaux coulés en place.",
    story: [
      "Sur le soubassement, les murs en brique montent assise par assise. Les poteaux et linteaux en béton armé encadrent les grandes ouvertures côté jardin.",
    ],
    facts: [
      { label: "Travaux", value: "Gros œuvre" },
      { label: "Matériaux", value: "Brique, bloc béton, béton armé" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectCategories = ["Tous", "Gros œuvre", "Murs", "Extérieurs"] as const;
