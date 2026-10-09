import Link from "next/link";

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap">
        <p className="kicker">Erreur 404</p>
        <h1 className="h2 nf__title">
          Ce mur n&apos;existe pas <span className="muted">(encore).</span>
        </h1>
        <p className="lead">La page demandée a été déplacée ou n&apos;a jamais été construite.</p>
        <div className="phero__actions">
          <Link href="/" className="btn">
            Retour à l&apos;accueil
          </Link>
          <Link href="/devis" className="btn btn--ghost">
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
