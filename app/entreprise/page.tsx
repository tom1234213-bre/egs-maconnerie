import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/CountUp";
import { PageHero } from "@/components/PageHero";
import { commitments, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "L'entreprise : un maçon du Pays d'Aix, exigeant et joignable",
  description:
    "EGS Maçonnerie, entreprise de maçonnerie à Aix-en-Provence. Nos valeurs, notre méthode de travail, nos garanties : visite et devis gratuits, planning tenu, chantier propre, garantie décennale.",
  alternates: { canonical: "/entreprise" },
};

const values = [
  {
    title: "Le travail bien fait",
    text: "Des murs droits, des niveaux justes, des joints propres. Ce qui se voit comme ce qui ne se voit plus une fois l'enduit posé.",
  },
  {
    title: "La parole tenue",
    text: "Un prix, une date, un planning. Si quelque chose change, vous le savez tout de suite, et par nous.",
  },
  {
    title: "Le respect des lieux",
    text: "Votre maison, votre jardin, vos voisins. Bâches, protections, nettoyage chaque soir : on travaille chez vous comme chez nous.",
  },
  {
    title: "Le bâti d'ici",
    text: "La pierre du pays, la chaux, les teintes de Provence. On restaure dans les règles de l'art et on construit en accord avec le paysage.",
  },
];

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "L'entreprise", path: "/entreprise" }]}
        kicker="L'entreprise"
        title="Un maçon du Pays d'Aix, exigeant et joignable."
        mutedFrom={5}
        lead="EGS Maçonnerie est une entreprise de maçonnerie générale et de gros œuvre basée à Aix-en-Provence. Une équipe resserrée, des chantiers suivis de près, et un interlocuteur qui décroche quand vous appelez."
        image={{ src: "/images/geste-taille.jpg", alt: "Maçon taillant une pierre à la main sur un chantier" }}
      />

      <section className="section">
        <div className="wrap values">
          <h2 className="h2 values__title" data-reveal="">
            Ce qui nous tient <span className="muted">debout.</span>
          </h2>
          <ol role="list" className="values__list">
            {values.map((v, i) => (
              <li key={v.title} data-reveal="" style={{ "--d": i * 90 } as React.CSSProperties}>
                <span className="values__n display">0{i + 1}</span>
                <h3 className="values__name">{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--nuit">
        <div className="wrap">
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

      <section className="section">
        <div className="wrap split2">
          <div className="media split2__media" data-reveal="">
            <Image src="/images/geste-outils.jpg" alt="Outils de maçon dans un seau sur un chantier" fill sizes="(min-width: 900px) 45vw, 92vw" quality={74} />
          </div>
          <div>
            <p className="kicker" data-reveal="">
              Méthode
            </p>
            <h2 className="h2 split2__title" data-reveal="">
              De la visite <span className="muted">à la réception.</span>
            </h2>
            <ol role="list" className="timeline">
              {steps.map((s) => (
                <li key={s.n} data-reveal="">
                  <span className="timeline__n display">{s.n}</span>
                  <div>
                    <h3 className="timeline__title">{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section--tight section--alt">
        <div className="wrap guarantees">
          <div data-reveal="">
            <h2 className="detail__box-title">Assurances</h2>
            <p>Garantie décennale et responsabilité civile professionnelle. Attestations jointes à chaque devis.</p>
          </div>
          <div data-reveal="" style={{ "--d": 90 } as React.CSSProperties}>
            <h2 className="detail__box-title">Pour qui</h2>
            <p>Particuliers, architectes, maîtres d&apos;œuvre, syndics de copropriété, agences immobilières.</p>
          </div>
          <div data-reveal="" style={{ "--d": 180 } as React.CSSProperties}>
            <h2 className="detail__box-title">Où</h2>
            <p>Aix-en-Provence et le Pays d&apos;Aix, dans un rayon d&apos;environ trente minutes.</p>
          </div>
        </div>
      </section>
    </>
  );
}
