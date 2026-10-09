export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  includes: string[];
  factors: string[];
  faq: { q: string; a: string }[];
  image: string;
  detail: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "maconnerie-generale",
    index: "01",
    title: "Maçonnerie générale",
    short: "Murs, dalles, fondations, chapes : le cœur du métier, fait proprement et dans les règles.",
    metaTitle: "Maçonnerie générale à Aix-en-Provence",
    metaDescription:
      "Maçon à Aix-en-Provence pour vos travaux de maçonnerie générale : fondations, dalles, murs en parpaing, brique ou pierre, chapes et reprises. Devis gratuit sous 48 h.",
    h1: "Maçonnerie générale dans le Pays d'Aix",
    lead:
      "Fondations, dalles, murs, chapes, reprises : la maçonnerie générale, c'est tout ce qui porte une maison. On la traite comme telle, avec des matériaux choisis et des contrôles à chaque étape.",
    body: [
      "Un mur de travers ne se rattrape pas à l'enduit. Une dalle mal ferraillée finit toujours par fissurer. C'est pour ça qu'on prend le temps d'implanter, de vérifier les niveaux et de respecter les temps de séchage, même quand le planning presse.",
      "Nous intervenons sur les chantiers neufs comme sur l'existant : création de dalle pour un abri ou un garage, reprise d'un mur fissuré, coulage d'une chape avant carrelage, pose de linteaux, chaînages et poteaux. Les petits travaux sont les bienvenus : ils méritent le même soin que les grands.",
    ],
    includes: [
      "Fondations, semelles filantes et longrines",
      "Dalles béton armé, sur terre-plein ou vide sanitaire",
      "Murs en parpaing, brique, béton cellulaire ou pierre",
      "Chaînages, linteaux, poteaux et poutres",
      "Chapes traditionnelles et ragréages",
      "Reprises de fissures et de maçonneries anciennes",
    ],
    factors: [
      "Accès au chantier (camion, toupie, pompe à béton)",
      "Nature du sol et besoin d'une étude géotechnique",
      "Matériau choisi et finition attendue",
      "Volume de béton et quantité d'acier",
    ],
    faq: [
      {
        q: "Faites-vous les petits chantiers de maçonnerie ?",
        a: "Oui. Une dalle de 10 m², un muret ou la reprise d'un seuil sont traités avec la même rigueur qu'une maison. On vous dit franchement si le déplacement se justifie et on regroupe parfois les petites interventions pour limiter les coûts.",
      },
      {
        q: "Qui fournit les matériaux ?",
        a: "Nous, en général. On travaille avec des négoces du Pays d'Aix et on connaît la qualité de ce qu'on commande. Si vous tenez à un matériau précis, on l'intègre au devis.",
      },
    ],
    image: "svc-generale",
    detail: "Implantation, niveaux, ferraillage contrôlés avant chaque coulage.",
    related: ["construction-maison", "ouverture-mur-porteur", "extension-surelevation"],
  },
  {
    slug: "construction-maison",
    index: "02",
    title: "Gros œuvre de maison",
    short: "De la fouille à la dalle haute : le gros œuvre complet de votre maison individuelle.",
    metaTitle: "Gros œuvre et construction de maison à Aix-en-Provence",
    metaDescription:
      "Gros œuvre de maison individuelle dans le Pays d'Aix : fondations, élévation des murs, planchers, réseaux enterrés. Un seul interlocuteur, un planning tenu. Devis gratuit.",
    h1: "Le gros œuvre de votre maison, de la fouille à la dalle haute",
    lead:
      "Le gros œuvre représente une grande partie du budget d'une maison et toute sa solidité. On le prend en charge du premier coup de pelle jusqu'au plancher haut, avec un interlocuteur unique.",
    body: [
      "Vous avez un permis accordé et des plans d'architecte ou de maître d'œuvre ? On chiffre le lot gros œuvre au plus juste, poste par poste, pour que vous puissiez comparer sans mauvaise surprise. Si vous partez de zéro, on vous oriente vers des architectes et bureaux d'études du secteur avec qui on a l'habitude de travailler.",
      "Sur le chantier, vous savez toujours où on en est : un point chaque semaine, des photos aux étapes clés (fondations, ferraillage, élévation, plancher) et un planning mis à jour. Les étapes qui ne se voient plus après coup sont justement celles qu'on documente le plus.",
    ],
    includes: [
      "Implantation et terrassement en lien avec le terrassier",
      "Fondations et soubassements",
      "Vide sanitaire ou dallage sur terre-plein",
      "Élévation des murs et des refends",
      "Planchers poutrelles hourdis ou dalles pleines",
      "Réseaux enterrés et regards",
    ],
    factors: [
      "Surface, nombre de niveaux et complexité des plans",
      "Étude de sol (G2) et type de fondations retenu",
      "Choix du système constructif (bloc béton, brique, monomur)",
      "Terrain en pente ou accès difficile",
    ],
    faq: [
      {
        q: "Travaillez-vous avec mon architecte ?",
        a: "Oui, c'est même la configuration la plus courante. On suit les plans d'exécution, on participe aux réunions de chantier et on remonte tout de suite les points qui posent question.",
      },
      {
        q: "Combien de temps dure le gros œuvre d'une maison ?",
        a: "Pour une maison de plain-pied d'environ 100 m², comptez souvent deux à trois mois de gros œuvre, selon la météo, le terrain et les délais de livraison. On vous donne un planning précis avec le devis.",
      },
    ],
    image: "svc-maison",
    detail: "Un point chaque semaine, des photos à chaque étape cachée.",
    related: ["maconnerie-generale", "enduits-facades", "terrasses-exterieurs"],
  },
  {
    slug: "extension-surelevation",
    index: "03",
    title: "Extension et surélévation",
    short: "Gagner des mètres carrés sans déménager, avec une extension qui se fond dans l'existant.",
    metaTitle: "Extension de maison et surélévation à Aix-en-Provence",
    metaDescription:
      "Extension de maison, garage transformé, surélévation dans le Pays d'Aix : fondations, murs, raccord à l'existant et ouverture. Maçon expérimenté, devis gratuit sous 48 h.",
    h1: "Agrandir votre maison, sans que ça se voie",
    lead:
      "Une bonne extension donne l'impression d'avoir toujours été là. Tout se joue au raccord avec l'existant : fondations, niveaux, appuis, étanchéité et finition des façades.",
    body: [
      "Avant de chiffrer, on vient voir la maison. La nature des fondations existantes, l'état des murs et l'emplacement des réseaux changent tout. On vous explique ce qui est simple, ce qui l'est moins, et pourquoi.",
      "On réalise le gros œuvre de l'extension, l'ouverture dans le mur existant avec sa reprise en sous-œuvre si besoin, et on coordonne les autres corps de métier quand vous le souhaitez. Pour une surélévation, l'étude de structure est indispensable : on travaille avec un bureau d'études qui vérifie que la maison peut porter un étage de plus.",
    ],
    includes: [
      "Visite technique et relevé de l'existant",
      "Fondations et dalle de l'extension",
      "Élévation des murs, chaînages, linteaux",
      "Ouverture et liaison avec la maison existante",
      "Surélévation après étude de structure",
      "Enduit assorti à la façade d'origine",
    ],
    factors: [
      "Surface créée et nombre de niveaux",
      "État et type des fondations existantes",
      "Ouverture à créer dans un mur porteur",
      "Finition de façade à raccorder",
    ],
    faq: [
      {
        q: "Faut-il un permis de construire pour une extension ?",
        a: "En zone urbaine couverte par un PLU, une déclaration préalable suffit jusqu'à 40 m² d'emprise, sauf si la surface totale dépasse 150 m². Au-delà, il faut un permis. On vous aide à y voir clair, et la mairie reste l'interlocuteur de référence.",
      },
      {
        q: "Peut-on rester dans la maison pendant les travaux ?",
        a: "Dans la grande majorité des cas, oui. On ouvre le mur existant le plus tard possible, une fois l'extension hors d'eau, et on protège les pièces habitées.",
      },
    ],
    image: "svc-extension",
    detail: "On ouvre l'existant le plus tard possible, une fois hors d'eau.",
    related: ["ouverture-mur-porteur", "construction-maison", "enduits-facades"],
  },
  {
    slug: "ouverture-mur-porteur",
    index: "04",
    title: "Ouverture de mur porteur",
    short: "Créer une baie, ouvrir une cuisine : on soutient, on ouvre, on pose la poutre. En sécurité.",
    metaTitle: "Ouverture de mur porteur à Aix-en-Provence",
    metaDescription:
      "Création d'ouverture dans un mur porteur à Aix-en-Provence et alentours : étaiement, pose d'IPN ou de linteau béton, note de calcul. Travail propre et sécurisé, devis gratuit.",
    h1: "Ouvrir un mur porteur, en toute sécurité",
    lead:
      "Ouvrir une cuisine sur le séjour ou créer une grande baie change une maison. C'est aussi une opération de structure qui ne s'improvise pas.",
    body: [
      "On commence par identifier ce que porte le mur : plancher, charpente, étage. Selon la portée, un bureau d'études dimensionne la poutre (IPN, HEB ou linteau béton armé). On étaie, on ouvre, on pose la poutre sur des appuis solides, puis on reprend les tableaux pour une finition nette.",
      "Le chantier est protégé et la poussière contenue. Dans une maison habitée, on s'organise pour que les pièces restent utilisables le plus longtemps possible.",
    ],
    includes: [
      "Diagnostic du mur et de ce qu'il supporte",
      "Note de calcul par un bureau d'études si nécessaire",
      "Étaiement provisoire",
      "Sciage ou démolition contrôlée",
      "Pose de poutre métallique ou linteau béton",
      "Reprise des appuis, des tableaux et des enduits",
    ],
    factors: [
      "Largeur de l'ouverture et nature du mur",
      "Charges reprises (étage, charpente, plancher)",
      "Type de poutre et besoin d'un habillage",
      "Accès et protection des pièces habitées",
    ],
    faq: [
      {
        q: "En copropriété, puis-je ouvrir un mur porteur ?",
        a: "Les murs porteurs sont des parties communes : il faut l'accord de l'assemblée générale avant les travaux. On fournit les éléments techniques utiles au syndic.",
      },
      {
        q: "Combien de temps dure une ouverture ?",
        a: "Souvent deux à cinq jours sur place, finitions comprises, une fois la note de calcul et la poutre prêtes.",
      },
    ],
    image: "svc-ouverture",
    detail: "Étaiement, sciage, poutre sur appuis : chaque étape vérifiée.",
    related: ["maconnerie-generale", "extension-surelevation", "renovation-pierre"],
  },
  {
    slug: "renovation-pierre",
    index: "05",
    title: "Rénovation en pierre",
    short: "Bastides, mas et maisons de village : rejointoiement à la chaux, reprises, restauration.",
    metaTitle: "Rénovation de murs en pierre et maçonnerie ancienne, Pays d'Aix",
    metaDescription:
      "Rénovation de maçonnerie ancienne et de murs en pierre à Aix-en-Provence : rejointoiement à la chaux, reprises de pierre, restauration de bastides et maisons de village. Devis gratuit.",
    h1: "La pierre ancienne, restaurée avec les bons gestes",
    lead:
      "Un mur en pierre a besoin de respirer. Le ciment l'étouffe et le fait souffrir. On restaure les maçonneries anciennes à la chaux, avec des pierres du pays, comme elles ont été bâties.",
    body: [
      "Dans le Pays d'Aix, les bastides, les mas et les maisons de village sont souvent montés en moellons de calcaire liés à la chaux. Les réparer au ciment, c'est piéger l'humidité dans le mur. On dégarnit les joints abîmés, on remplace les pierres éclatées et on rejointoie avec un mortier de chaux naturelle dont la teinte s'accorde au bâti.",
      "On sait aussi reprendre une voûte, un arc, un encadrement ou un seuil en pierre de taille. Quand une pièce ne peut pas être sauvée, on cherche une pierre de récupération ou de carrière locale qui vieillira de la même façon.",
    ],
    includes: [
      "Dégarnissage et rejointoiement à la chaux",
      "Remplacement de pierres abîmées",
      "Reprise d'arcs, de voûtes et d'encadrements",
      "Murs en pierre apparente ou à pierre vue",
      "Traitement des remontées d'humidité",
      "Réouverture de baies anciennes",
    ],
    factors: [
      "État du mur et profondeur des joints à reprendre",
      "Pierre à remplacer : récupération ou carrière",
      "Hauteur et besoin d'échafaudage",
      "Finition souhaitée (joint beurré, à pierre vue, brossé)",
    ],
    faq: [
      {
        q: "Pourquoi ne pas rejointoyer au ciment ?",
        a: "Le ciment est plus dur et moins perméable que la pierre. L'humidité reste prisonnière, la pierre gèle et éclate. La chaux laisse le mur respirer et reste réparable.",
      },
      {
        q: "Travaillez-vous en secteur protégé ?",
        a: "Oui. Dans le centre ancien d'Aix ou près d'un monument historique, l'avis de l'Architecte des Bâtiments de France s'applique. On adapte matériaux et teintes à ses prescriptions.",
      },
    ],
    image: "svc-pierre",
    detail: "Chaux naturelle, pierre du pays, joints dans la teinte d'origine.",
    related: ["murs-pierre-seche", "enduits-facades", "ouverture-mur-porteur"],
  },
  {
    slug: "murs-pierre-seche",
    index: "06",
    title: "Murs et clôtures",
    short: "Murs de clôture, de soutènement, restanques en pierre sèche : des murs qui tiennent le terrain.",
    metaTitle: "Murs de clôture, soutènement et pierre sèche, Aix-en-Provence",
    metaDescription:
      "Construction de murs de clôture, murs de soutènement et restanques en pierre sèche dans le Pays d'Aix. Fondations dimensionnées, drainage, finitions soignées. Devis gratuit.",
    h1: "Des murs qui tiennent le terrain",
    lead:
      "Un mur de clôture fixe l'allure d'une maison. Un mur de soutènement, lui, retient des tonnes de terre. Dans les deux cas, ce qu'on ne voit pas compte autant que ce qu'on voit.",
    body: [
      "Pour un soutènement, tout commence par la fondation et le drainage : barbacanes, géotextile, remblai drainant. Sans eux, la pression de l'eau finit par pousser le mur. On dimensionne chaque ouvrage selon la hauteur et le terrain, avec une étude quand c'est nécessaire.",
      "Pour les clôtures, on réalise des murs en blocs enduits, en pierre maçonnée ou en pierre sèche, avec piliers, chaperons et portails intégrés. Les restanques en pierre sèche, typiques de nos collines, sont montées sans mortier selon la technique traditionnelle.",
    ],
    includes: [
      "Murs de clôture en blocs enduits ou en pierre",
      "Murs de soutènement en béton armé ou en pierre",
      "Restanques et murets en pierre sèche",
      "Piliers de portail et chaperons",
      "Drainage, barbacanes et remblai",
      "Couvertines et finitions",
    ],
    factors: [
      "Hauteur et longueur du mur",
      "Poussée des terres et type de sol",
      "Matériau et finition (enduit, pierre vue, pierre sèche)",
      "Accès des engins et évacuation des déblais",
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour un mur de clôture ?",
        a: "Cela dépend de la commune : beaucoup imposent une déclaration préalable et fixent une hauteur maximale ou un aspect. On vérifie le PLU avec vous avant de chiffrer.",
      },
      {
        q: "Pourquoi mon mur de soutènement penche-t-il ?",
        a: "Le plus souvent, c'est l'eau qui pousse faute de drainage, ou une fondation trop faible. On vient constater, on vous explique la cause et on propose une reprise ou une reconstruction.",
      },
    ],
    image: "svc-murs",
    detail: "Drainage et fondation dimensionnés avant la première pierre.",
    related: ["terrasses-exterieurs", "renovation-pierre", "maconnerie-generale"],
  },
  {
    slug: "terrasses-exterieurs",
    index: "07",
    title: "Terrasses et extérieurs",
    short: "Terrasses, plages de piscine, escaliers, allées : prolonger la maison dehors.",
    metaTitle: "Terrasse, plage de piscine et escalier extérieur, Pays d'Aix",
    metaDescription:
      "Création de terrasses maçonnées, plages de piscine, escaliers et allées en pierre dans le Pays d'Aix. Dallage pierre, béton désactivé, margelles. Devis gratuit sous 48 h.",
    h1: "Prolonger la maison dehors",
    lead:
      "En Provence, on vit dehors une bonne partie de l'année. Une terrasse bien faite, c'est une pièce en plus : de niveau, drainée, agréable pieds nus et durable.",
    body: [
      "On réalise la dalle avec ses pentes d'écoulement, puis le revêtement de votre choix : dallage en pierre naturelle, béton désactivé, pierre reconstituée ou support prêt à carreler. Autour des piscines, on pose les margelles et les plages avec des matériaux antidérapants qui restent frais au soleil.",
      "Escaliers extérieurs, allées, bordures, barbecues maçonnés, murets d'assise : on dessine avec vous les extérieurs qui vont avec la maison et le terrain.",
    ],
    includes: [
      "Dalles de terrasse avec pentes d'écoulement",
      "Plages et margelles de piscine",
      "Dallage en pierre naturelle ou reconstituée",
      "Béton désactivé et allées carrossables",
      "Escaliers extérieurs et emmarchements",
      "Murets d'assise, barbecues et cuisines d'été",
    ],
    factors: [
      "Surface et dénivelé du terrain",
      "Revêtement choisi",
      "Gestion des eaux pluviales",
      "Accès pour le béton et les matériaux",
    ],
    faq: [
      {
        q: "Quel revêtement autour d'une piscine ?",
        a: "On conseille une pierre claire et antidérapante, qui chauffe peu au soleil. La pierre de Bourgogne vieillie ou les dalles en pierre reconstituée claire sont de bons choix. On vous montre des échantillons.",
      },
      {
        q: "Quand faire une terrasse ?",
        a: "Le printemps et l'automne sont idéaux : le béton sèche dans de bonnes conditions. En plein été, on coule tôt le matin et on protège la dalle.",
      },
    ],
    image: "svc-terrasse",
    detail: "Pentes d'écoulement réglées au millimètre, dallage posé droit.",
    related: ["murs-pierre-seche", "maconnerie-generale", "enduits-facades"],
  },
  {
    slug: "enduits-facades",
    index: "08",
    title: "Enduits et façades",
    short: "Enduits à la chaux, finitions frotassées ou grattées, ravalement : la façade fait l'allure.",
    metaTitle: "Enduit de façade à la chaux et ravalement, Aix-en-Provence",
    metaDescription:
      "Enduits de façade à la chaux, enduits monocouches et ravalement à Aix-en-Provence. Teintes provençales, finitions frotassée, grattée ou talochée. Devis gratuit sous 48 h.",
    h1: "La façade, c'est la première impression",
    lead:
      "Un enduit protège les murs autant qu'il les habille. On choisit avec vous la composition, la teinte et la finition qui conviennent au mur et au paysage.",
    body: [
      "Sur les murs anciens, on applique des enduits à la chaux en trois couches, qui laissent respirer la maçonnerie et prennent avec le temps cette patine si particulière aux maisons d'ici. Sur le neuf, on propose aussi des enduits monocouches, rapides et durables.",
      "Les teintes provençales ne s'improvisent pas : ocre, sable, pierre, rosé. On réalise des échantillons sur le mur pour que vous voyiez la couleur à la vraie lumière avant de valider.",
    ],
    includes: [
      "Diagnostic du support et préparation",
      "Enduits à la chaux en trois couches",
      "Enduits monocouches sur bâti neuf",
      "Finitions frotassée, grattée, talochée, lissée",
      "Échantillons de teintes sur le mur",
      "Ravalement et reprises de fissures",
    ],
    factors: [
      "Surface et hauteur des façades",
      "État du support et nombre de couches",
      "Finition et teinte choisies",
      "Échafaudage et protections",
    ],
    faq: [
      {
        q: "Combien de temps dure un enduit à la chaux ?",
        a: "Bien appliqué sur un support sain, il dure plusieurs dizaines d'années et se répare localement sans tout refaire.",
      },
      {
        q: "Faut-il une autorisation pour refaire sa façade ?",
        a: "Un ravalement qui change l'aspect extérieur demande souvent une déclaration préalable, et la mairie peut imposer un nuancier. On vérifie avant de commencer.",
      },
    ],
    image: "svc-enduit",
    detail: "Échantillons de teinte sur le mur, à la vraie lumière.",
    related: ["renovation-pierre", "extension-surelevation", "construction-maison"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
