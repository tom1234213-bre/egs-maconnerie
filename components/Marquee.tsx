// Porté de React Bits « LogoLoop » : bandeau continu en CSS, pause au survol.
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className="marquee__row" role="list" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it}>
          <span>{it}</span>
          <svg viewBox="0 0 12 8" aria-hidden="true">
            <rect width="5" height="3.4" rx="0.4" />
            <rect x="6" width="5" height="3.4" rx="0.4" />
            <rect x="3" y="4.4" width="5" height="3.4" rx="0.4" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
