import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Savoir-faire : maçonnerie, charpente, extérieurs",
  description:
    "Gros œuvre, extension, mur porteur, pierre, murs, terrasses et piscines, enduits, charpente bois : les neuf métiers d'EGS Maçonnerie.",
  alternates: { canonical: "/savoir-faire" },
};

export default function SavoirFairePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Savoir-faire", path: "/savoir-faire" }]}
        kicker="Savoir-faire"
        title="Neuf métiers, une seule exigence."
        mutedFrom={2}
        lead="Du terrassement à la charpente, on maîtrise toute la chaîne du gros œuvre. Chaque savoir-faire a sa page : ce qu'on fait, comment on le fait, ce qui fait varier le prix."
      />
      <section className="section--tight svc-list">
        <div className="wrap">
          <ol role="list" className="svc-rows">
            {services.map((s) => (
              <li key={s.slug} data-reveal="">
                <Link href={`/savoir-faire/${s.slug}`} className="svc-row">
                  <span className="svc-row__index display">{s.index}</span>
                  <span className="svc-row__body">
                    <span className="svc-row__title">{s.title}</span>
                    <span className="svc-row__short">{s.short}</span>
                  </span>
                  <span className="svc-row__media media">
                    <Image src={`/images/${s.image}.jpg`} alt="" fill sizes="(min-width: 900px) 280px, 40vw" quality={70} />
                  </span>
                  <span className="svc-row__arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
