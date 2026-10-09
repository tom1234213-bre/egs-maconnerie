"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Ajoute .is-in aux éléments [data-reveal] et [data-split] quand ils entrent
// dans l'écran. Une seule fois : rien n'est piloté par le défilement.
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.remove("no-js");
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in), [data-split]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
