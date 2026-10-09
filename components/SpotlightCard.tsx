"use client";

import Link from "next/link";
import type { ReactNode } from "react";

// Porté de React Bits « SpotlightCard » : un halo de lumière suit le pointeur,
// comme une lampe de chantier rasante sur un mur.
export function SpotlightCard({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`spot ${className ?? ""}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </Link>
  );
}
