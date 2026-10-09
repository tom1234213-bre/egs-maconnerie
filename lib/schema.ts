import { communes } from "./communes";
import { absoluteUrl, site } from "./site";

export const businessId = `${site.url}/#entreprise`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: site.shortName,
    slogan: site.baseline,
    description: site.description,
    url: site.url,
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      postalCode: site.postalCode,
      addressRegion: site.region,
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: site.openingHours,
    areaServed: communes.map((c) => ({ "@type": "City", name: c.name })),
    knowsAbout: [
      "Maçonnerie générale",
      "Gros œuvre",
      "Extension de maison",
      "Ouverture de mur porteur",
      "Rénovation de murs en pierre",
      "Enduit à la chaux",
      "Mur de soutènement",
      "Pierre sèche",
      "Terrasse maçonnée",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#site`,
    url: site.url,
    name: site.name,
    inLanguage: "fr-FR",
    publisher: { "@id": businessId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function serviceSchema(s: { title: string; metaDescription: string; slug: string }, area?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.metaDescription,
    url: absoluteUrl(`/savoir-faire/${s.slug}`),
    provider: { "@id": businessId },
    areaServed: area ? { "@type": "City", name: area } : communes.map((c) => ({ "@type": "City", name: c.name })),
  };
}
