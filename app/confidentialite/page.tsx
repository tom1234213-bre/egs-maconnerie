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
          <p>Ce site ne dépose aucun cookie publicitaire ni traceur tiers.</p>
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
