import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { communes } from "@/lib/communes";
import { projects } from "@/lib/projects";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getService, services } from "@/lib/services";
import { img } from "@/lib/images";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/savoir-faire/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/savoir-faire/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, images: [{ url: `/images/${s.image}.jpg` }] },
  };
}

export default async function ServicePage({ params }: PageProps<"/savoir-faire/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const related = s.related.map((r) => services.find((x) => x.slug === r)!).filter(Boolean);
  const linked = projects.filter((p) => p.service === s.slug).slice(0, 2);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Savoir-faire", path: "/savoir-faire" },
          { name: s.title, path: `/savoir-faire/${s.slug}` },
        ]}
        kicker={`${s.index}  ${s.title}`}
        title={s.h1}
        lead={s.lead}
        image={{ src: `/images/${s.image}.jpg`, alt: s.title }}
      >
        <div className="phero__actions" data-reveal="" style={{ "--d": 400 } as React.CSSProperties}>
          <Link href={`/devis?projet=${s.slug}`} className="btn">
            Demander un devis <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </PageHero>

      <section className="section detail">
        <div className="wrap detail__grid">
          <div className="detail__main">
            <h2 className="h3" data-reveal="">
              Notre approche
            </h2>
            <div className="prose" data-reveal="">
              {s.body.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <p className="detail__note" data-reveal="">
              <span className="display">Sur le chantier</span>
              {s.detail}
            </p>
          </div>
          <aside className="detail__aside">
            <div className="detail__box" data-reveal="">
              <h2 className="detail__box-title">Ce que nous réalisons</h2>
              <ul role="list" className="ticks">
                {s.includes.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="detail__box detail__box--soft" data-reveal="">
              <h2 className="detail__box-title">Ce qui fait varier le prix</h2>
              <ul role="list" className="ticks ticks--dash">
                {s.factors.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <p className="detail__small">Chaque chantier est différent : le devis se fait après une visite gratuite.</p>
            </div>
          </aside>
        </div>
      </section>

      {linked.length ? (
        <section className="section--tight">
          <div className="wrap">
            <h2 className="h3 detail__sub" data-reveal="">
              Exemples de chantiers
            </h2>
            <div className="cards-2">
              {linked.map((p) => {
                const im = img(p.cover);
                return (
                  <Link key={p.slug} href={`/realisations/${p.slug}`} className="pcard" data-reveal="">
                    <span className="media pcard__media">
                      <Image src={im.src} alt="" fill sizes="(min-width: 800px) 45vw, 92vw" quality={72} />
                    </span>
                    <span className="pcard__meta">{p.commune}</span>
                    <span className="pcard__title">{p.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--alt">
        <div className="wrap faq-sec__grid">
          <div>
            <p className="kicker" data-reveal="">
              Questions
            </p>
            <h2 className="h2" data-reveal="">
              {s.title} : <span className="muted">vos questions.</span>
            </h2>
          </div>
          <Faq items={s.faq} />
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap related">
          <div>
            <h2 className="detail__box-title">Dans le Pays d&apos;Aix</h2>
            <p className="related__communes">
              Nous réalisons ces travaux à{" "}
              {communes.map((c, i) => (
                <span key={c.slug}>
                  <Link href={`/zones-intervention/${c.slug}`}>{c.name}</Link>
                  {i < communes.length - 2 ? ", " : i === communes.length - 2 ? " et " : "."}
                </span>
              ))}
            </p>
          </div>
          <div>
            <h2 className="detail__box-title">Savoir-faire liés</h2>
            <ul role="list" className="related__list">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/savoir-faire/${r.slug}`} className="link">
                    {r.title} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faq)]} />
    </>
  );
}
