import type { Metadata } from "next";
import { Suspense } from "react";
import { DevisForm } from "@/components/DevisForm";
import { PageHero } from "@/components/PageHero";
import { communes } from "@/lib/communes";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Devis gratuit de maçonnerie à Aix-en-Provence",
  description:
    "Demandez votre devis de maçonnerie gratuit en deux minutes : extension, gros œuvre, mur, terrasse, rénovation en pierre. Visite sur place et réponse sous 48 h dans le Pays d'Aix.",
  alternates: { canonical: "/devis" },
};

export default function DevisPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Devis gratuit", path: "/devis" }]}
        kicker="Devis gratuit"
        title="Parlez-nous de votre projet."
        mutedFrom={2}
        lead="Trois étapes, deux minutes. On vous rappelle pour fixer une visite sur place, puis vous recevez un devis détaillé sous 48 h."
      />
      <section className="section--tight devis">
        <div className="wrap devis__grid">
          <Suspense fallback={<div className="devis__form devis__form--loading" />}>
            <DevisForm
              services={services.map((s) => ({ slug: s.slug, title: s.title }))}
              communes={communes.map((c) => c.name)}
              email={site.email}
              phone={site.phone}
            />
          </Suspense>
          <aside className="devis__aside">
            <div className="devis__card">
              <p className="detail__box-title">Plutôt par téléphone ?</p>
              <a href={`tel:${site.phoneHref}`} className="devis__tel">
                {site.phone}
              </a>
              <p className="detail__small">{site.hours}</p>
            </div>
            <ul role="list" className="ticks">
              <li>Visite sur place gratuite</li>
              <li>Devis détaillé sous 48 h</li>
              <li>Sans engagement</li>
              <li>Vos données ne servent qu&apos;à vous répondre</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
