import type { Metadata } from "next";
import { MasonryGrid } from "@/components/MasonryGrid";
import { PageHero } from "@/components/PageHero";
import { img } from "@/lib/images";
import { projectCategories, projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Réalisations : les chantiers d'EGS Maçonnerie",
  description:
    "Maisons neuves, piscine maçonnée, murs de soutènement, escalier et allée : de vrais chantiers d'EGS Maçonnerie, en photos.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  const items = projects.map((p) => ({
    href: `/realisations/${p.slug}`,
    title: p.title,
    meta: p.commune ? `${p.commune}, ${p.category.toLowerCase()}` : p.category,
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
        lead="Maisons, piscine, murs et extérieurs : de vrais chantiers d'EGS, photographiés sur place. Filtrez par type de travaux, ouvrez une fiche pour voir le détail."
      />
      <section className="section--tight">
        <div className="wrap">
          <MasonryGrid items={items} filters={projectCategories} />
        </div>
      </section>
    </>
  );
}
