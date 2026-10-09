import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SplitWords } from "./SplitWords";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { name: string; path: string };

type Props = {
  crumbs: Crumb[];
  kicker: string;
  title: string;
  mutedFrom?: number;
  lead?: string;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

export function PageHero({ crumbs, kicker, title, mutedFrom, lead, image, children }: Props) {
  return (
    <section className={`phero${image ? " phero--img" : ""}`}>
      <div className="wrap">
        <nav aria-label="Fil d'Ariane" className="crumbs">
          <ol role="list">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.path}>
                {i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="phero__grid">
          <div className="phero__text">
            <p className="kicker phero__kicker">{kicker}</p>
            <SplitWords as="h1" text={title} className="phero__title" mutedFrom={mutedFrom} stagger={45} delay={80} />
            {lead ? (
              <p className="lead phero__lead" data-reveal="" style={{ "--d": 300 } as React.CSSProperties}>
                {lead}
              </p>
            ) : null}
            {children}
          </div>
        </div>
      </div>
      {image ? (
        <div className="phero__media wrap">
          <div className="media phero__frame">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1440px) 1360px, 96vw" quality={78} />
          </div>
        </div>
      ) : null}
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </section>
  );
}
