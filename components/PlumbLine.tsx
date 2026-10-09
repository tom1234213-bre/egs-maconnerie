// Le fil à plomb : il tombe, oscille, puis se stabilise. Signature du site.
export function PlumbLine({ className }: { className?: string }) {
  return (
    <div className={`plumb ${className ?? ""}`} aria-hidden="true">
      <span className="plumb__swing">
        <span className="plumb__line" />
        <svg className="plumb__bob" viewBox="0 0 20 34">
          <path d="M6 0h8v6l-1.2 1.2H7.2L6 6z" />
          <path d="M3 9h14l-7 25z" />
        </svg>
      </span>
    </div>
  );
}
