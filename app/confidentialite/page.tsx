import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Comment ${site.name} traite les données envoyées par le formulaire de devis.`,
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Confidentialité", path: "/confidentialite" }]} kicker="Informations" title="Politique de confidentialité" />
      <section className="section--tight">
        <div className="wrap legal">
          <h2>Données collectées</h2>
          <p>
            Le formulaire de devis recueille votre nom, votre téléphone, votre e-mail, votre commune et la description de
            votre projet. Ces informations servent uniquement à vous recontacter et à préparer votre devis.
          </p>
          <h2>Durée de conservation</h2>
          <p>
            Les demandes sans suite sont supprimées au bout de trois ans après le dernier contact. Les devis acceptés sont
            conservés le temps nécessaire aux obligations comptables et à la garantie décennale.
          </p>
          <h2>Partage</h2>
          <p>Vos données ne sont ni vendues ni cédées. Elles ne sont transmises à aucun tiers à des fins commerciales.</p>
          <h2>Mesure d&apos;audience et cookies</h2>
          <p>
            Le site compte ses visites sans cookie, avec un outil hébergé par Oculot Studio, son prestataire web : pages vues,
            provenance, type d&apos;appareil, défilement, durée et clics. L&apos;adresse IP n&apos;est pas conservée et les
            saisies du formulaire ne sont jamais enregistrées. Ces données servent uniquement à des statistiques et sont
            conservées 25 mois au plus. Pour ne pas être compté, activez le signal de refus « Global Privacy Control » de
            votre navigateur.
          </p>
          <p>
            Avec votre accord seulement, le site utilise aussi Google Analytics (Google Ireland Limited) : pages consultées,
            durée des visites, provenance. Ses cookies (_ga, _ga_*) sont conservés treize mois au plus et les données peuvent
            être transférées aux États-Unis, dans le cadre du Data Privacy Framework. Sans votre accord, aucun cookie de mesure
            n&apos;est déposé. Votre choix est gardé treize mois si vous acceptez, six mois si vous refusez ; vous pouvez en
            changer à tout moment avec le lien « Cookies » en bas de chaque page. Aucun cookie publicitaire n&apos;est déposé.
          </p>
          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données en écrivant à{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. En cas de désaccord, vous pouvez saisir la CNIL.
          </p>
        </div>
      </section>
    </>
  );
}
