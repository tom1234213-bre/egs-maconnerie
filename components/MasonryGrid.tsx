"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export type MasonryItem = {
  href: string;
  title: string;
  meta: string;
  category: string;
  src: string;
  width: number;
  height: number;
};

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Porté de React Bits « Masonry » : chaque photo se place dans la colonne la
// plus courte, arrive par le bas en cascade, et la grille se recompose quand on
// filtre. Sans JavaScript, une grille en colonnes CSS prend le relais.
export function MasonryGrid({ items, filters }: { items: MasonryItem[]; filters?: readonly string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [filter, setFilter] = useState(filters?.[0] ?? "Tous");
  const [entered, setEntered] = useState(false);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setEntered(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const visible = useMemo(
    () => items.filter((it) => !filters || filter === filters[0] || it.category === filter),
    [items, filter, filters],
  );

  const layout = useMemo(() => {
    if (!width) return null;
    const cols = width >= 1000 ? 3 : width >= 560 ? 2 : 1;
    const gap = width >= 560 ? 20 : 14;
    const colW = (width - gap * (cols - 1)) / cols;
    const heights = Array(cols).fill(0);
    const pos = new Map<string, { x: number; y: number; w: number; h: number; order: number }>();
    visible.forEach((it, order) => {
      const c = heights.indexOf(Math.min(...heights));
      // Ratios bornés : pas de photo trop haute ni trop plate dans la grille.
      const ratio = Math.min(1.25, Math.max(0.7, it.height / it.width));
      const h = Math.round(colW * ratio);
      pos.set(it.href, { x: c * (colW + gap), y: heights[c], w: colW, h, order });
      heights[c] += h + gap;
    });
    return { pos, height: Math.max(...heights) - gap };
  }, [width, visible]);

  return (
    <div className="masonry-wrap">
      {filters ? (
        <div className="masonry-filters" role="group" aria-label="Filtrer les réalisations">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      ) : null}
      <div
        ref={ref}
        className={`masonry${layout ? " masonry--js" : ""}${entered ? " is-in" : ""}`}
        style={layout ? { height: layout.height } : undefined}
      >
        {items.map((it) => {
          const p = layout?.pos.get(it.href);
          const hidden = !visible.includes(it);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`masonry__item${hidden ? " is-hidden" : ""}`}
              aria-hidden={hidden || undefined}
              tabIndex={hidden ? -1 : undefined}
              style={
                p
                  ? ({
                      width: p.w,
                      height: p.h,
                      transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
                      "--o": p.order,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <span className="masonry__media">
                <Image
                  src={it.src}
                  alt=""
                  width={it.width}
                  height={it.height}
                  sizes="(min-width: 1000px) 30vw, (min-width: 560px) 46vw, 92vw"
                  quality={75}
                />
              </span>
              <span className="masonry__cap">
                <span className="masonry__title">{it.title}</span>
                <span className="masonry__meta">{it.meta}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
