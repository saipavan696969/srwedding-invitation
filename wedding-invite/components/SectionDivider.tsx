interface SectionDividerProps {
  variant?: "lotus" | "simple" | "ornate";
  className?: string;
}

export default function SectionDivider({
  variant = "lotus",
  className = "",
}: SectionDividerProps) {
  if (variant === "simple") {
    return (
      <div className={`flex items-center gap-4 my-8 ${className}`} aria-hidden="true">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className={`flex items-center justify-center gap-3 my-10 ${className}`} aria-hidden="true">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-gold/50" />
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
          <line x1="0" y1="12" x2="35" y2="12" stroke="#C69A3B" strokeOpacity="0.5" strokeWidth="0.75" />
          <circle cx="40" cy="12" r="2" fill="#C69A3B" fillOpacity="0.6" />
          <circle cx="48" cy="12" r="3" fill="#C69A3B" fillOpacity="0.5" />
          {/* Central lotus */}
          <ellipse cx="60" cy="9" rx="4" ry="6" fill="#C69A3B" fillOpacity="0.5" />
          <ellipse cx="60" cy="9" rx="4" ry="6" fill="#C69A3B" fillOpacity="0.5" transform="rotate(60 60 12)" />
          <ellipse cx="60" cy="9" rx="4" ry="6" fill="#C69A3B" fillOpacity="0.5" transform="rotate(120 60 12)" />
          <ellipse cx="60" cy="9" rx="4" ry="6" fill="#C69A3B" fillOpacity="0.5" transform="rotate(180 60 12)" />
          <ellipse cx="60" cy="9" rx="4" ry="6" fill="#C69A3B" fillOpacity="0.5" transform="rotate(240 60 12)" />
          <ellipse cx="60" cy="9" rx="4" ry="6" fill="#C69A3B" fillOpacity="0.5" transform="rotate(300 60 12)" />
          <circle cx="60" cy="12" r="3" fill="#C69A3B" fillOpacity="0.8" />
          <circle cx="72" cy="12" r="3" fill="#C69A3B" fillOpacity="0.5" />
          <circle cx="80" cy="12" r="2" fill="#C69A3B" fillOpacity="0.6" />
          <line x1="85" y1="12" x2="120" y2="12" stroke="#C69A3B" strokeOpacity="0.5" strokeWidth="0.75" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/30 to-gold/50" />
      </div>
    );
  }

  // Default lotus
  return (
    <div className={`flex items-center justify-center gap-4 my-8 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
      <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
        {/* Lotus petals */}
        <ellipse cx="24" cy="15" rx="4" ry="8" fill="#C69A3B" fillOpacity="0.55" />
        <ellipse cx="24" cy="15" rx="4" ry="8" fill="#C69A3B" fillOpacity="0.45" transform="rotate(45 24 18)" />
        <ellipse cx="24" cy="15" rx="4" ry="8" fill="#C69A3B" fillOpacity="0.45" transform="rotate(-45 24 18)" />
        <ellipse cx="24" cy="15" rx="4" ry="8" fill="#C69A3B" fillOpacity="0.35" transform="rotate(90 24 18)" />
        <ellipse cx="24" cy="15" rx="4" ry="8" fill="#C69A3B" fillOpacity="0.35" transform="rotate(-90 24 18)" />
        <circle cx="24" cy="18" r="4" fill="#C69A3B" fillOpacity="0.75" />
        <circle cx="24" cy="18" r="2" fill="#D4AF6B" fillOpacity="0.9" />
        {/* Stem */}
        <path d="M24 22 Q22 25 20 27" stroke="#C69A3B" strokeOpacity="0.5" strokeWidth="1" fill="none" />
        <path d="M24 22 Q26 25 28 27" stroke="#C69A3B" strokeOpacity="0.5" strokeWidth="1" fill="none" />
        {/* Dots */}
        <circle cx="8" cy="18" r="1.5" fill="#C69A3B" fillOpacity="0.5" />
        <circle cx="40" cy="18" r="1.5" fill="#C69A3B" fillOpacity="0.5" />
        <circle cx="15" cy="18" r="1" fill="#C69A3B" fillOpacity="0.4" />
        <circle cx="33" cy="18" r="1" fill="#C69A3B" fillOpacity="0.4" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
