type Props = { className?: string; tone?: "ink" | "light" };

// Le signe : trois assises en appareil croisé, comme un mur vu de face.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 30 24" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x="0" y="0" width="14" height="6.4" rx="0.6" />
        <rect x="16" y="0" width="14" height="6.4" rx="0.6" />
        <rect x="0" y="8.8" width="6" height="6.4" rx="0.6" />
        <rect x="8" y="8.8" width="14" height="6.4" rx="0.6" />
        <rect x="24" y="8.8" width="6" height="6.4" rx="0.6" />
        <rect x="0" y="17.6" width="14" height="6.4" rx="0.6" />
        <rect x="16" y="17.6" width="14" height="6.4" rx="0.6" opacity="0.45" />
      </g>
    </svg>
  );
}

export function Logo({ className, tone = "ink" }: Props) {
  return (
    <span className={`logo logo--${tone} ${className ?? ""}`}>
      <LogoMark className="logo__mark" />
      <span className="logo__type">
        <span className="logo__name">EGS</span>
        <span className="logo__sub">Maçonnerie</span>
      </span>
    </span>
  );
}
