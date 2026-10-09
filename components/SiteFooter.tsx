import Link from "next/link";
import { communes } from "@/lib/communes";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { LogoMark } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__pitch">
            <p className="ftr__title">
              Un projet ? <span className="muted">Parlons-en sur place.</span>
            </p>
            <div className="ftr__actions">
              <Link href="/devis" className="btn btn--light">
                Demander un devis gratuit <span className="arrow" aria-hidden="true">→</span>
              </Link>
              <a href={`tel:${site.phoneHref}`} className="btn btn--ghost-light">
                {site.phone}
              </a>
            </div>
          </div>
          <address className="ftr__contact">
            <span className="ftr__label">Contact</span>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>
              {site.city}, {site.department}
            </span>
            <span>{site.hours}</span>
          </address>
        </div>

        <div className="ftr__cols">
          <nav aria-label="Savoir-faire">
            <span className="ftr__label">Savoir-faire</span>
            <ul role="list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/savoir-faire/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Secteur d'intervention">
            <span className="ftr__label">Maçon à</span>
            <ul role="list">
              {communes.map((c) => (
                <li key={c.slug}>
                  <Link href={`/zones-intervention/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Entreprise">
            <span className="ftr__label">EGS</span>
            <ul role="list">
              <li><Link href="/entreprise">L&apos;entreprise</Link></li>
              <li><Link href="/realisations">Réalisations</Link></li>
              <li><Link href="/questions">Questions fréquentes</Link></li>
              <li><Link href="/devis">Devis gratuit</Link></li>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/confidentialite">Confidentialité</Link></li>
            </ul>
          </nav>
        </div>

        <div className="ftr__mark" aria-hidden="true">
          <LogoMark className="ftr__sign" />
          <span>EGS</span>
        </div>

        <div className="ftr__base">
          <span>© {new Date().getFullYear()} {site.name}. Maçonnerie générale et gros œuvre dans le Pays d&apos;Aix.</span>
          <Link href="/mentions-legales#credits">Crédits photo</Link>
        </div>
      </div>
    </footer>
  );
}
