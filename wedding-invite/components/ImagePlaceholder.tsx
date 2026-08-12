interface ImagePlaceholderProps {
  from: string;
  to: string;
  label?: string;
  className?: string;
  icon?: "bride" | "groom" | "couple" | "venue" | "default";
}

const ICONS = {
  bride: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="20" r="12" fill="white" fillOpacity="0.25" />
      <path d="M10 56 C10 40 22 34 32 34 C42 34 54 40 54 56" fill="white" fillOpacity="0.2" />
      <path d="M20 10 Q32 4 44 10 L44 16 Q38 12 32 14 Q26 12 20 16 Z" fill="white" fillOpacity="0.4" />
      {/* Floral accent */}
      <circle cx="32" cy="8" r="3" fill="white" fillOpacity="0.5" />
      <circle cx="26" cy="10" r="2" fill="white" fillOpacity="0.4" />
      <circle cx="38" cy="10" r="2" fill="white" fillOpacity="0.4" />
    </svg>
  ),
  groom: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="20" r="12" fill="white" fillOpacity="0.25" />
      <path d="M10 56 C10 40 22 34 32 34 C42 34 54 40 54 56" fill="white" fillOpacity="0.2" />
      <rect x="26" y="6" width="12" height="8" rx="2" fill="white" fillOpacity="0.4" />
      <path d="M26 14 L32 20 L38 14" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  couple: (
    <svg width="72" height="48" viewBox="0 0 72 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="16" r="10" fill="white" fillOpacity="0.25" />
      <path d="M6 44 C6 32 14 28 24 28 C30 28 35 30 38 34" fill="white" fillOpacity="0.2" />
      <circle cx="48" cy="16" r="10" fill="white" fillOpacity="0.25" />
      <path d="M38 34 C41 30 46 28 52 28 C62 28 70 32 70 44" fill="white" fillOpacity="0.2" />
      <path d="M36 24 C33 20 33 14 36 11 C39 14 39 20 36 24 Z" fill="white" fillOpacity="0.5" />
    </svg>
  ),
  venue: (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect x="12" y="28" width="40" height="28" fill="white" fillOpacity="0.2" />
      <path d="M8 30 L32 8 L56 30 Z" fill="white" fillOpacity="0.3" />
      <rect x="28" y="40" width="8" height="16" fill="white" fillOpacity="0.3" />
      <rect x="16" y="34" width="8" height="8" fill="white" fillOpacity="0.25" />
      <rect x="40" y="34" width="8" height="8" fill="white" fillOpacity="0.25" />
      <circle cx="32" cy="18" r="4" fill="white" fillOpacity="0.5" />
    </svg>
  ),
  default: (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="28"
          cy="14"
          rx="4"
          ry="9"
          fill="white"
          fillOpacity="0.3"
          transform={`rotate(${deg} 28 28)`}
        />
      ))}
      <circle cx="28" cy="28" r="6" fill="white" fillOpacity="0.5" />
    </svg>
  ),
};

export default function ImagePlaceholder({
  from,
  to,
  label,
  className = "",
  icon = "default",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
      aria-label={label ?? "Placeholder image"}
    >
      <div className="opacity-60">{ICONS[icon]}</div>
      {label && (
        <p
          className="mt-3 text-white/70 text-sm font-body tracking-widest uppercase"
          aria-hidden="true"
        >
          {label}
        </p>
      )}
      {/* Subtle overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
