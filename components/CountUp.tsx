"use client";

import { useEffect, useRef } from "react";

// Porté de React Bits « CountUp » : le chiffre monte une fois, à l'apparition.
// Le rendu serveur affiche la valeur finale ; l'animation écrit directement dans le DOM.
export function CountUp({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || to === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.textContent = `0${suffix}`;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          el.textContent = `${Math.round((1 - Math.pow(1 - t, 4)) * to)}${suffix}`;
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = `${to}${suffix}`;
    };
  }, [to, suffix, duration]);

  return (
    <span className="countup">
      <span ref={ref} aria-hidden="true">
        {to}
        {suffix}
      </span>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
    </span>
  );
}
