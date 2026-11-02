import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { communes } from "@/lib/communes";

export const metadata: Metadata = {
  title: "Secteur : maçon de Salon à Aix-en-Provence",
  description:
    "EGS intervient à Salon-de-Provence, Aix-en-Provence, Pélissanne, Grans, Lamanon, Eyguières, Lançon, Sénas et La Fare-les-Oliviers. Devis gratuit.",
  alternates: { canonical: "/zones-intervention" },
};

export default function ZonesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Secteur", path: "/zones-intervention" }]}
        kicker="Secteur d'intervention"
        title="De Salon à Aix, à moins de trente minutes."
        mutedFrom={4}
        lead="Être proche, c'est être réactif : venir voir vite, passer en fin de journée vérifier un coulage, revenir lever une réserve. On travaille donc autour de notre base de Salon-de-Provence."
      />
      <section className="section--tight">
        <div className="wrap zones">
          <ul role="list" className="zones__list">
            {communes.map((c, i) => (
              <li key={c.slug} data-reveal="" style={{ "--d": (i % 3) * 80 } as React.CSSProperties}>
                <Link href={`/zones-intervention/${c.slug}`} className="zones__item">
                  <span className="zones__name">{c.name}</span>
                  <span className="zones__meta">
                    {c.postalCode}, {c.distance === "Notre base" ? "notre base" : `${c.distance} de Salon`}
                  </span>
                  <span className="zones__typ">{c.typical.join(", ")}</span>
                  <span className="zones__arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="zones__media media" data-reveal="">
            <Image src="/images/r-gordes.jpg" alt="Maisons de pierre étagées dans un village provençal" fill sizes="(min-width: 1000px) 38vw, 92vw" quality={74} />
          </div>
        </div>
        <p className="wrap zones__more" data-reveal="">
          Votre commune n&apos;est pas dans la liste ? On intervient dans toutes les Bouches-du-Rhône et les départements
          limitrophes : appelez-nous, si on peut venir dans de bonnes conditions, on vient.
        </p>
      </section>
    </>
  );
}
