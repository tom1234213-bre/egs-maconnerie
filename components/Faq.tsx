// Questions en <details> natifs : accessibles au clavier et lisibles sans JS.
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((it, i) => (
        <details key={it.q} className="faq__item" data-reveal="" style={{ "--d": i * 60 } as React.CSSProperties}>
          <summary>
            <span>{it.q}</span>
            <span className="faq__icon" aria-hidden="true" />
          </summary>
          <div className="faq__a">
            <p>{it.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
