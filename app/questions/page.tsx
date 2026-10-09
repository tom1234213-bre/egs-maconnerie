import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faq } from "@/lib/content";
import { faqSchema } from "@/lib/schema";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Questions fréquentes sur vos travaux de maçonnerie",
  description:
    "Devis, délais, assurances, autorisations, pierre ancienne, murs porteurs : les réponses d'EGS Maçonnerie aux questions qu'on nous pose le plus souvent avant un chantier.",
  alternates: { canonical: "/questions" },
};

export default function QuestionsPage() {
  const groups = [
    { title: "Avant de commencer", items: faq },
    ...services.map((s) => ({ title: s.title, items: s.faq })),
  ];
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Questions", path: "/questions" }]}
        kicker="Questions fréquentes"
        title="Les bonnes questions avant un chantier."
        mutedFrom={3}
        lead="Devis, délais, autorisations, assurances, choix des matériaux : voici ce qu'on nous demande le plus souvent. Pour tout le reste, un appel suffit."
      />
      <section className="section--tight">
        <div className="wrap qgroups">
          {groups.map((g) => (
            <div key={g.title} className="qgroup">
              <h2 className="qgroup__title" data-reveal="">
                {g.title}
              </h2>
              <Faq items={g.items} />
            </div>
          ))}
        </div>
      </section>
      <JsonLd data={faqSchema(all)} />
    </>
  );
}
