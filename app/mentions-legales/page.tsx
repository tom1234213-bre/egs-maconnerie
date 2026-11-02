import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { credits } from "@/lib/credits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name} : éditeur, SIRET, coordonnées, hébergement et crédits photo.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Mentions légales", path: "/mentions-legales" }]} kicker="Informations" title="Mentions légales" />
      <section className="section--tight">
        <div className="wrap legal">
          <h2>Éditeur du site</h2>
          <p>
            Le site {site.name} est édité par la société {site.legal.denomination}, {site.legal.forme}
            {site.legal.capital ? <> au capital de {site.legal.capital}</> : null}.
            <br />
            Siège social : {site.legal.siege}
            <br />
            SIREN : {site.legal.siren}{site.legal.rcs ? <> RCS {site.legal.rcs}</> : null}
            <br />
            SIRET : {site.legal.siret}
            <br />
            TVA intracommunautaire : {site.legal.tva}
            <br />
            Code APE : {site.legal.ape}
            <br />
            Président : {site.legal.president}
            <br />
            Téléphone : {site.phone}
            <br />
            E-mail : {site.email}
          </p>
          <h2>Directeur de la publication</h2>
          <p>{site.legal.president}, président.</p>
          <h2>Hébergement</h2>
          <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, la charte graphique et le logo de ce site sont la propriété de {site.name}. Toute reproduction
            sans autorisation est interdite.
          </p>
          <h2 id="credits">Crédits photo</h2>
          <p>Photos de chantier et portrait : EGS Maçonnerie.</p>
          <p>Photos d&apos;illustration sous licence Unsplash. Merci à leurs auteurs :</p>
          <ul className="legal__credits">
            {credits.map((c) => (
              <li key={c.url}>
                <a href={c.url} rel="noopener" target="_blank">
                  {c.photographer}
                </a>
              </li>
            ))}
          </ul>
          <p>
            Photo de charpente : National Park Service (domaine public), via{" "}
            <a href="https://commons.wikimedia.org/wiki/File:12._Roof_and_Porch_Construction._(d29dbcf9-302d-4aea-b877-1f8c8a33f339).jpg" rel="noopener" target="_blank">
              Wikimedia Commons
            </a>
            .
          </p>
          <p>Typographies : Novecento Sans et Creato Display, sous licences libres.</p>
        </div>
      </section>
    </>
  );
}
