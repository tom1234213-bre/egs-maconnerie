import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { MasonryGrid } from "@/components/MasonryGrid";
import { PlumbLine } from "@/components/PlumbLine";
import { SplitWords } from "@/components/SplitWords";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Faq } from "@/components/Faq";
import { communes } from "@/lib/communes";
import { commitments, faq, materials, steps } from "@/lib/content";
import { img } from "@/lib/images";
import { projects } from "@/lib/projects";
import { faqSchema } from "@/lib/schema";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// Le mur de l'ouverture : 7 assises en appareil croisé qui s'effacent de bas en
// haut pour révéler la photo, comme un mur qui se monte.
const COURSES = 7;
const PER_ROW = 6;

function HeroWall() {
  return (
    <div className="wall" aria-hidden="true">
      {Array.from({ length: COURSES }, (_, r) => {
        const fromBottom = COURSES - 1 - r;
        const offset = r % 2 === 1;
        const count = offset ? PER_ROW + 1 : PER_ROW;
        return (
          <div className={`wall__row${offset ? " wall__row--offset" : ""}`} key={r}>
            {Array.from({ length: count }, (_, c) => (
              <span
                key={c}
                className="wall__brick"
                style={{ animationDelay: `${60 + fromBottom * 80 + ((c * 37) % 5) * 18}ms` }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function HomePage() {
  const home = faq.slice(0, 6);
  const featured = projects.slice(0, 6).map((p) => ({
    href: `/realisations/${p.slug}`,
    title: p.title,
    meta: `${p.commune}, ${p.category.toLowerCase()}`,
    category: p.category,
    ...img(p.cover),
  }));

  return (
    <>
      {/* --- Ouverture ------------------------------------------------ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image
            src="/images/hero.jpg"
            alt="Village provençal en pierre calcaire dorée par le soleil couchant"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={80}
            className="hero__img"
          />
          <div className="hero__shade" />
          <HeroWall />
        </div>

        <div className="hero__content wrap">
          <h1 id="hero-title" className="hero__h1">
            <span className="hero__kicker">Maçon à Aix-en-Provence et dans le Pays d&apos;Aix</span>
            <SplitWords text="Bâtir d'aplomb." className="hero__title display" delay={420} stagger={90} />
          </h1>
          <div className="hero__bottom">
            <p className="hero__lead">
              Maçonnerie générale, gros œuvre et pierre. Des murs droits, des délais tenus, un seul interlocuteur de la
              première visite à la réception.
            </p>
            <div className="hero__actions">
              <Link href="/devis" className="btn btn--light">
                Demander un devis gratuit <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/realisations" className="btn btn--ghost-light">
                Voir les réalisations
              </Link>
            </div>
          </div>
          <ul className="hero__facts" role="list">
            <li>Visite et devis gratuits</li>
            <li>Devis sous 48 h</li>
            <li>Garantie décennale</li>
          </ul>
        </div>
        <PlumbLine className="hero__plumb" />
      </section>

      {/* --- Manifeste ------------------------------------------------- */}
      <section className="section intro" aria-labelledby="intro-title">
        <div className="wrap intro__grid">
          <div className="intro__text">
            <p className="kicker" data-reveal="">
              L&apos;entreprise
            </p>
            <SplitWords
              as="h2"
              id="intro-title"
              className="h2 intro__title"
              text="On ne refait pas un mur. On le fait bien la première fois."
              mutedFrom={6}
              stagger={40}
            />
            <div className="prose intro__prose" data-reveal="" style={{ "--d": 200 } as React.CSSProperties}>
              <p>
                EGS Maçonnerie est une entreprise de maçonnerie installée à Aix-en-Provence. On construit, on agrandit et
                on restaure : maisons neuves, extensions, murs en pierre, terrasses, ouvertures de murs porteurs.
              </p>
              <p>
                Notre façon de faire tient en peu de mots : venir voir avant de chiffrer, dire les choses franchement,
                tenir le planning et laisser un chantier propre. Le reste, c&apos;est du métier.
              </p>
            </div>
            <Link href="/entreprise" className="link" data-reveal="" style={{ "--d": 300 } as React.CSSProperties}>
              Découvrir l&apos;entreprise <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="intro__fig" data-reveal="" style={{ "--d": 150 } as React.CSSProperties}>
            <div className="media intro__media">
              <Image
                src="/images/hero-geste.jpg"
                alt="Maçon montant un mur en pierre sèche à la main"
                fill
                sizes="(min-width: 900px) 42vw, 92vw"
                quality={75}
              />
            </div>
            <figcaption>
              <span className="display">Geste</span>
              Chaque pierre choisie, posée, calée. À la main.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* --- Savoir-faire ---------------------------------------------- */}
      <section className="section section--alt svc" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker" data-reveal="">
              Savoir-faire
            </p>
            <SplitWords
              as="h2"
              id="svc-title"
              className="h2"
              text="Du gros œuvre à la pierre, tout ce qui tient une maison."
              mutedFrom={6}
              stagger={40}
            />
            <Link href="/savoir-faire" className="link sec-head__link" data-reveal="">
              Tous les savoir-faire <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="svc__grid" role="list">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal="" style={{ "--d": (i % 4) * 90 } as React.CSSProperties}>
                <SpotlightCard href={`/savoir-faire/${s.slug}`} className="svc__card">
                  <span className="svc__media media">
                    <Image src={`/images/${s.image}.jpg`} alt="" fill sizes="(min-width: 1100px) 24vw, (min-width: 640px) 46vw, 92vw" quality={70} />
                  </span>
                  <span className="svc__index">{s.index}</span>
                  <span className="svc__name">{s.title}</span>
                  <span className="svc__short">{s.short}</span>
                  <span className="svc__more" aria-hidden="true">
                    En savoir plus <span className="arrow">→</span>
                  </span>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- Engagements ----------------------------------------------- */}
      <section className="section section--nuit engage" aria-labelledby="engage-title">
        <div className="wrap">
          <div className="engage__head">
            <p className="kicker" data-reveal="">
              Nos engagements
            </p>
            <h2 id="engage-title" className="h2" data-reveal="">
              Des promesses simples, <span className="muted">tenues sur chaque chantier.</span>
            </h2>
          </div>
          <ul className="engage__grid" role="list">
            {commitments.map((c, i) => (
              <li key={c.label} data-reveal="" style={{ "--d": i * 110 } as React.CSSProperties}>
                <span className="engage__value display">
                  <CountUp to={c.value} suffix={c.suffix} />
                </span>
                <span className="engage__label">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- Méthode : un petit mur de cinq briques -------------------- */}
      <section className="section method" aria-labelledby="method-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker" data-reveal="">
              Méthode
            </p>
            <SplitWords
              as="h2"
              id="method-title"
              className="h2"
              text="Cinq étapes, posées l'une sur l'autre."
              mutedFrom={2}
              stagger={50}
            />
          </div>
          <ol className="method__wall" role="list">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`method__brick method__brick--${i + 1}`}
                data-reveal=""
                style={{ "--d": (i < 3 ? i : i + 1) * 140 } as React.CSSProperties}
              >
                <span className="method__n display">{s.n}</span>
                <h3 className="method__title">{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --- Réalisations ---------------------------------------------- */}
      <section className="section section--alt works" aria-labelledby="works-title">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker" data-reveal="">
              Réalisations
            </p>
            <SplitWords
              as="h2"
              id="works-title"
              className="h2"
              text="Des chantiers qui parlent pour nous."
              mutedFrom={2}
              stagger={50}
            />
            <Link href="/realisations" className="link sec-head__link" data-reveal="">
              Toutes les réalisations <span aria-hidden="true">→</span>
            </Link>
          </div>
          <MasonryGrid items={featured} />
        </div>
      </section>

      {/* --- Matières -------------------------------------------------- */}
      <section className="section matter" aria-labelledby="matter-title">
        <div className="wrap matter__grid">
          <div className="matter__text">
            <p className="kicker" data-reveal="">
              Matières
            </p>
            <h2 id="matter-title" className="h2" data-reveal="">
              La pierre d&apos;ici, <span className="muted">la chaux d&apos;hier, le béton d&apos;aujourd&apos;hui.</span>
            </h2>
            <p className="lead" data-reveal="" style={{ "--d": 150 } as React.CSSProperties}>
              Aix s&apos;est construite en pierre de Bibémus et de Rognes, liée à la chaux. On respecte ce bâti quand on le
              restaure, et on choisit le béton armé quand il faut porter lourd. Le bon matériau au bon endroit.
            </p>
          </div>
          <div className="matter__tiles" data-reveal="" style={{ "--d": 100 } as React.CSSProperties}>
            {[
              ["m-calcaire", "Calcaire du pays"],
              ["m-moellons", "Moellons et chaux"],
              ["m-enduit", "Enduit taloché"],
            ].map(([key, label]) => (
              <figure key={key} className="matter__tile">
                <div className="media">
                  <Image src={`/images/${key}.jpg`} alt="" fill sizes="(min-width: 900px) 18vw, 30vw" quality={70} />
                </div>
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <Marquee items={materials} label="Matériaux que nous travaillons" />
      </section>

      {/* --- Secteur --------------------------------------------------- */}
      <section className="zone" aria-labelledby="zone-title">
        <div className="zone__media">
          <Image
            src="/images/sainte-victoire.jpg"
            alt="La montagne Sainte-Victoire sous un ciel d'orage"
            fill
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="wrap zone__in">
          <div className="zone__card" data-reveal="">
            <p className="kicker">Secteur</p>
            <h2 id="zone-title" className="h2">
              Le Pays d&apos;Aix, <span className="muted">à moins de trente minutes.</span>
            </h2>
            <ul className="zone__list" role="list">
              {communes.map((c) => (
                <li key={c.slug}>
                  <Link href={`/zones-intervention/${c.slug}`}>
                    <span>{c.name}</span>
                    <span className="zone__dist">{c.distance}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Questions ------------------------------------------------- */}
      <section className="section faq-sec" aria-labelledby="faq-title">
        <div className="wrap faq-sec__grid">
          <div>
            <p className="kicker" data-reveal="">
              Questions
            </p>
            <h2 id="faq-title" className="h2" data-reveal="">
              Ce qu&apos;on nous demande <span className="muted">avant de commencer.</span>
            </h2>
            <p className="faq-sec__aside" data-reveal="">
              Une autre question ? Appelez le <a href={`tel:${site.phoneHref}`}>{site.phone}</a>, on répond
              directement.
            </p>
          </div>
          <Faq items={home} />
        </div>
      </section>

      <JsonLd data={faqSchema(home)} />
    </>
  );
}
