import type { Metadata } from "next";
import { MasonryGrid } from "@/components/MasonryGrid";
import { PageHero } from "@/components/PageHero";
import { img } from "@/lib/images";
import { projectCategories, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Réalisations : chantiers de maçonnerie dans le Pays d'Aix",
  description:
    "Restauration de mas à la chaux, plages de piscine, restanques en pierre sèche, escaliers, gros œuvre de maisons : quelques chantiers d'EGS Maçonnerie autour d'Aix-en-Provence.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  const items = projects.map((p) => ({
    href: `/realisations/${p.slug}`,
    title: p.title,
    meta: `${p.commune}, ${p.category.toLowerCase()}`,
    category: p.category,
    ...img(p.cover),
  }));
  return (
    <>
      <PageHero
        crumbs={[{ name: "Réalisations", path: "/realisations" }]}
        kicker="Réalisations"
        title="Des chantiers qui parlent pour nous."
        mutedFrom={2}
        lead="Pierre, gros œuvre, murs et extérieurs : une sélection de chantiers menés dans le Pays d'Aix. Filtrez par type de travaux, ouvrez une fiche pour voir le détail."
      />
      <section className="section--tight">
        <div className="wrap">
          <MasonryGrid items={items} filters={projectCategories} />
          <p className="note-illu">Photos d&apos;illustration, en attendant les photos des chantiers de l&apos;entreprise.</p>
        </div>
      </section>
    </>
  );
}
