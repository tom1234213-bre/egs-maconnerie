import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { atCommune, communes, getCommune } from "@/lib/communes";
import { projects } from "@/lib/projects";
import { businessId } from "@/lib/schema";
import { services } from "@/lib/services";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return communes.map((c) => ({ commune: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/zones-intervention/[commune]">): Promise<Metadata> {
  const { commune } = await params;
  const c = getCommune(commune);
  if (!c) return {};
  const title = `Maçon ${atCommune(c.name)} (${c.postalCode})`;
  return {
    title,
    description: `Entreprise de maçonnerie ${atCommune(c.name)} : ${c.typical.join(", ").toLowerCase()}, gros œuvre et rénovation. EGS Maçonnerie, ${c.distance === "Notre base" ? "basée à Aix" : `à ${c.distance} d'Aix`}. Visite et devis gratuits.`,
    alternates: { canonical: `/zones-intervention/${c.slug}` },
  };
}

export default async function CommunePage({ params }: PageProps<"/zones-intervention/[commune]">) {
  const { commune } = await params;
  const c = getCommune(commune);
  if (!c) notFound();
  const local = projects.filter((p) => p.commune === c.name);
  const others = communes.filter((x) => x.slug !== c.slug);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Secteur", path: "/zones-intervention" },
          { name: c.name, path: `/zones-intervention/${c.slug}` },
        ]}
        kicker={`${c.postalCode}  ${c.distance === "Notre base" ? "Notre base" : `${c.distance} d'Aix`}`}
        title={`Maçon ${atCommune(c.name)}`}
        lead={c.text}
      >
        <div className="phero__actions" data-reveal="" style={{ "--d": 400 } as React.CSSProperties}>
          <Link href="/devis" className="btn">
            Devis gratuit {atCommune(c.name)} <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <a href={`tel:${site.phoneHref}`} className="btn btn--ghost">
            {site.phone}
          </a>
        </div>
      </PageHero>

      <section className="section--tight">
        <div className="wrap commune">
          <div data-reveal="">
            <h2 className="h3">Les chantiers fréquents {atCommune(c.name)}</h2>
            <ul role="list" className="chips">
              {c.typical.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {local.length ? (
              <p className="commune__proj">
                Voir aussi :{" "}
                {local.map((p) => (
                  <Link key={p.slug} href={`/realisations/${p.slug}`} className="link">
                    {p.title}
                  </Link>
                ))}
              </p>
            ) : null}
          </div>
          <div data-reveal="" style={{ "--d": 100 } as React.CSSProperties}>
            <h2 className="h3">Nos savoir-faire {atCommune(c.name)}</h2>
            <ul role="list" className="commune__svc">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/savoir-faire/${s.slug}`}>
                    <span>{s.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section--tight section--alt">
        <div className="wrap">
          <h2 className="detail__box-title">Nous intervenons aussi à</h2>
          <p className="related__communes">
            {others.map((o, i) => (
              <span key={o.slug}>
                <Link href={`/zones-intervention/${o.slug}`}>{o.name}</Link>
                {i < others.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Maçon ${atCommune(c.name)}`,
          url: absoluteUrl(`/zones-intervention/${c.slug}`),
          about: { "@id": businessId },
          spatialCoverage: {
            "@type": "City",
            name: c.name,
            geo: { "@type": "GeoCoordinates", latitude: c.geo.lat, longitude: c.geo.lng },
          },
        }}
      />
    </>
  );
}
