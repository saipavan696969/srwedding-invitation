"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/data/wedding";

function LotusIcon() {
  return (
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Lotus petals */}
      <ellipse cx="24" cy="16" rx="5" ry="10" fill="#C69A3B" fillOpacity="0.5" />
      <ellipse cx="24" cy="16" rx="5" ry="10" fill="#C69A3B" fillOpacity="0.4" transform="rotate(45 24 18)" />
      <ellipse cx="24" cy="16" rx="5" ry="10" fill="#C69A3B" fillOpacity="0.4" transform="rotate(-45 24 18)" />
      <ellipse cx="24" cy="16" rx="5" ry="10" fill="#C69A3B" fillOpacity="0.3" transform="rotate(90 24 18)" />
      <ellipse cx="24" cy="16" rx="5" ry="10" fill="#C69A3B" fillOpacity="0.3" transform="rotate(-90 24 18)" />
      {/* Center */}
      <circle cx="24" cy="18" r="5" fill="#C69A3B" fillOpacity="0.7" />
      <circle cx="24" cy="18" r="2.5" fill="#D4AF6B" fillOpacity="0.9" />
      {/* Water line */}
      <path d="M4 30 Q24 25 44 30" stroke="#C69A3B" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      {/* Stem */}
      <line x1="24" y1="23" x2="24" y2="30" stroke="#C69A3B" strokeOpacity="0.4" strokeWidth="1.5" />
    </svg>
  );
}

export default function Footer() {
  const { bride, groom, displayDate, footerInvitation } = weddingData;

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #2e0a12 0%, #6D1628 50%, #3a0915 100%)",
      }}
      aria-label="Wedding invitation footer"
    >
      {/* Faint dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(198,154,59,0.8) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top decorative border */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(90deg, transparent, #C69A3B, #D4AF6B, #C69A3B, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative section-pad max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Lotus icon */}
          <LotusIcon />

          {/* Names */}
          <h2 className="font-heading italic text-white mt-4 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)" }}
          >
            {groom.name}
            <span className="text-gold/70 mx-3">&amp;</span>
            {bride.name}
          </h2>

          <p className="font-display text-gold/60 text-xs tracking-[0.4em] uppercase mt-2 mb-6">
            {displayDate}
          </p>

          {/* Gold divider */}
          <div
            className="flex items-center justify-center gap-3 mb-8"
            aria-hidden="true"
          >
            <div className="h-px w-20 bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="h-px w-20 bg-gold/30" />
          </div>

          {/* Invitation */}
          <p className="font-heading italic text-white/80 text-xl sm:text-2xl leading-relaxed mb-4 max-w-xl mx-auto">
            &ldquo; {footerInvitation} &rdquo;
          </p>
          <p className="font-body text-white/50 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            Your presence and blessings mean everything to us.
          </p>

          {/* Family names */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(198,154,59,0.07)",
                border: "1px solid rgba(198,154,59,0.2)",
              }}
            >
              <p className="font-body text-gold/50 text-xs tracking-[0.25em] uppercase mb-1">
                Groom&apos;s Family
              </p>
              <p className="font-heading text-white/80 text-lg">
                {groom.parents}
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{
                background: "rgba(198,154,59,0.07)",
                border: "1px solid rgba(198,154,59,0.2)",
              }}
            >
              <p className="font-body text-gold/50 text-xs tracking-[0.25em] uppercase mb-1">
                Bride&apos;s Family
              </p>
              <p className="font-heading text-white/80 text-lg">
                {bride.parents}
              </p>
            </div>
          </div>

          {/* Made with love */}
          <div className="border-t border-gold/15 pt-6 flex items-center justify-center gap-2">
            <p className="font-body text-white/30 text-xs tracking-wide">
              Made with
            </p>
            <Heart
              size={12}
              className="text-maroon-light fill-maroon-light"
              aria-hidden="true"
            />
            <p className="font-body text-white/30 text-xs tracking-wide">
              for our special day
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
