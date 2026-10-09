import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { credits } from "@/lib/credits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name}.`,
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Mentions légales", path: "/mentions-legales" }]} kicker="Informations" title="Mentions légales" />
      <section className="section--tight">
        <div className="wrap legal">
          <h2>Éditeur du site</h2>
          <p>
            {site.name}
            <br />
            {site.city} ({site.postalCode}), {site.department}
            <br />
            SIRET : {site.siret}
            <br />
            Téléphone : {site.phone}
            <br />
            E-mail : {site.email}
          </p>
          <h2>Assurance professionnelle</h2>
          <p>Garantie décennale souscrite auprès de : {site.insurer}.</p>
          <h2>Hébergement</h2>
          <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, la charte graphique et le logo de ce site sont la propriété de {site.name}. Toute reproduction
            sans autorisation est interdite.
          </p>
          <h2 id="credits">Crédits photo</h2>
          <p>Photographies sous licence Unsplash. Merci à leurs auteurs :</p>
          <ul className="legal__credits">
            {credits.map((c) => (
              <li key={c.url}>
                <a href={c.url} rel="noopener" target="_blank">
                  {c.photographer}
                </a>
              </li>
            ))}
          </ul>
          <p>Typographies : Novecento Sans et Creato Display, sous licences libres.</p>
        </div>
      </section>
    </>
  );
}
