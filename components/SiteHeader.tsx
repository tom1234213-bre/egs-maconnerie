"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Le menu mobile se referme à chaque changement de page.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`hdr${overHero ? " hdr--over" : ""}${scrolled ? " hdr--solid" : ""}${open ? " hdr--open" : ""}`}>
      <div className="hdr__in wrap">
        <Link href="/" className="hdr__logo">
          <Logo tone={overHero ? "light" : "ink"} />
        </Link>

        <nav className="hdr__nav" aria-label="Navigation principale">
          <ul role="list">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hdr__cta">
          <a className="hdr__tel" href={`tel:${site.phoneHref}`}>
            {site.phone}
          </a>
          <Link href="/devis" className={`btn ${overHero ? "btn--light" : ""}`}>
            Devis gratuit
          </Link>
        </div>

        <button
          type="button"
          className="hdr__burger"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="hdr__bar" />
          <span className="hdr__bar" />
        </button>
      </div>

      <div id="menu-mobile" className="mnav" hidden={!open}>
        <nav aria-label="Navigation mobile" className="wrap">
          <ul role="list">
            <li style={{ "--i": 0 } as React.CSSProperties}>
              <Link href="/">Accueil</Link>
            </li>
            {nav.map((item, i) => (
              <li key={item.href} style={{ "--i": i + 1 } as React.CSSProperties}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mnav__foot">
            <Link href="/devis" className="btn">
              Demander un devis gratuit
            </Link>
            <a href={`tel:${site.phoneHref}`} className="btn btn--ghost">
              Appeler le {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
