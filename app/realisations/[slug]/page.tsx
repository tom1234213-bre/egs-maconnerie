import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { atCommune, communes } from "@/lib/communes";
import { img } from "@/lib/images";
import { getProject, projects } from "@/lib/projects";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/realisations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title}, ${p.commune}`;
  return {
    title,
    description: `${p.summary} Un chantier d'EGS Maçonnerie ${atCommune(p.commune)}.`,
    alternates: { canonical: `/realisations/${p.slug}` },
    openGraph: { title, images: [{ url: `/images/${p.cover}.jpg` }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/realisations/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const service = getService(p.service);
  const commune = communes.find((c) => c.name === p.commune);
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Réalisations", path: "/realisations" },
          { name: p.title, path: `/realisations/${p.slug}` },
        ]}
        kicker={`${p.commune}  ${p.category}`}
        title={p.title}
        lead={p.summary}
      />
      <section className="section--tight">
        <div className="wrap project">
          <div className="project__gallery">
            {p.gallery.map((key, n) => {
              const im = img(key);
              return (
                <figure key={key} className={`project__fig project__fig--${n}`} data-reveal="" style={{ "--d": n * 120 } as React.CSSProperties}>
                  <div className="media">
                    <Image
                      src={im.src}
                      alt={n === 0 ? `${p.title} ${atCommune(p.commune)}` : ""}
                      fill
                      priority={n === 0}
                      sizes={n === 0 ? "(min-width: 1000px) 62vw, 96vw" : "(min-width: 1000px) 30vw, 48vw"}
                      quality={78}
                    />
                  </div>
                </figure>
              );
            })}
          </div>
          <div className="project__body">
            <div className="prose" data-reveal="">
              {p.story.map((t) => (
                <p key={t.slice(0, 20)}>{t}</p>
              ))}
            </div>
            <dl className="project__facts" data-reveal="">
              <div>
                <dt>Commune</dt>
                <dd>{commune ? <Link href={`/zones-intervention/${commune.slug}`}>{p.commune}</Link> : p.commune}</dd>
              </div>
              {p.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
              {service ? (
                <div>
                  <dt>Savoir-faire</dt>
                  <dd>
                    <Link href={`/savoir-faire/${service.slug}`}>{service.title}</Link>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
          <Link href={`/realisations/${next.slug}`} className="project__next" data-reveal="">
            <span className="kicker">Chantier suivant</span>
            <span className="project__next-title">{next.title}</span>
            <span className="project__next-meta">{next.commune}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
