"use client";

import { motion } from "framer-motion";
import { Clock, Star, MapPin, Shirt } from "lucide-react";
import { weddingData } from "@/data/wedding";

function BananaLeafDecor() {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M60 10 Q20 60 10 120 Q20 160 60 190 Q100 160 110 120 Q100 60 60 10 Z"
        fill="#2C6354"
        fillOpacity="0.4"
      />
      <path
        d="M60 10 Q40 60 35 120 Q40 160 60 190"
        stroke="#1F4A3D"
        strokeOpacity="0.6"
        strokeWidth="1"
        fill="none"
      />
      {[30, 50, 70, 90, 110, 130, 150].map((y, i) => (
        <line
          key={i}
          x1={60 - (i % 2 ? 20 : 18)}
          y1={y}
          x2={60 + (i % 2 ? 22 : 20)}
          y2={y + 4}
          stroke="#2C6354"
          strokeOpacity="0.5"
          strokeWidth="0.75"
        />
      ))}
    </svg>
  );
}

function BellDecor() {
  return (
    <svg
      width="32"
      height="40"
      viewBox="0 0 32 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 4 Q8 4 8 14 L6 28 Q6 32 16 32 Q26 32 26 28 L24 14 Q24 4 16 4 Z"
        fill="#C69A3B"
        fillOpacity="0.7"
      />
      <circle cx="16" cy="36" r="3" fill="#C69A3B" fillOpacity="0.8" />
      <ellipse cx="16" cy="6" rx="4" ry="2" fill="#D4AF6B" fillOpacity="0.6" />
      <line x1="16" y1="2" x2="16" y2="0" stroke="#C69A3B" strokeWidth="2" />
    </svg>
  );
}

export default function MuhurthamSection() {
  const { muhurtham, venue } = weddingData;

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="muhurtham-heading"
      style={{
        background:
          "linear-gradient(160deg, #1F4A3D 0%, #0e2e24 40%, #1a0810 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at center, rgba(198,154,59,0.3) 0%, transparent 60%),
            radial-gradient(circle at 2px 2px, rgba(198,154,59,0.5) 1px, transparent 0)
          `,
          backgroundSize: "100% 100%, 40px 40px",
        }}
      />

      {/* Left banana leaf */}
      <div
        className="absolute left-0 top-0 w-28 h-full opacity-20 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <BananaLeafDecor />
      </div>

      {/* Right banana leaf (mirrored) */}
      <div
        className="absolute right-0 top-0 w-28 h-full opacity-20 pointer-events-none hidden md:block scale-x-[-1]"
        aria-hidden="true"
      >
        <BananaLeafDecor />
      </div>

      <div className="relative section-pad max-w-3xl mx-auto px-6 text-center">
        {/* Bells row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-8 mb-10"
          aria-hidden="true"
        >
          <BellDecor />
          <div className="h-px w-16 bg-gold/40" />
          <Star size={20} className="text-gold/60" />
          <div className="h-px w-16 bg-gold/40" />
          <BellDecor />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-display text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
            The Sacred Ceremony
          </p>
          <h2
            id="muhurtham-heading"
            className="font-heading text-white text-5xl sm:text-6xl italic leading-tight mb-2"
          >
            Muhurtham
          </h2>
          <p className="font-heading italic text-gold text-2xl mb-8">
            {muhurtham.date}
          </p>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-10"
          aria-hidden="true"
        >
          <div className="h-px flex-1 bg-gold/30" />
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`rounded-full bg-gold ${i === 2 ? "w-2.5 h-2.5" : "w-1.5 h-1.5"}`}
                style={{ opacity: i === 2 ? 0.8 : 0.4 }}
              />
            ))}
          </div>
          <div className="h-px flex-1 bg-gold/30" />
        </motion.div>

        {/* Details grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 text-left"
        >
          {[
            {
              icon: <Clock size={18} className="text-gold/70" />,
              label: "Auspicious Time",
              value: muhurtham.time,
            },
            {
              icon: <Star size={18} className="text-gold/70" />,
              label: "Nakshatra",
              value: muhurtham.nakshatra,
            },
            {
              icon: <Star size={18} className="text-gold/70" />,
              label: "Tithi",
              value: muhurtham.tithi,
            },
            {
              icon: <MapPin size={18} className="text-gold/70" />,
              label: "Venue",
              value: venue.name,
            },
            {
              icon: <Shirt size={18} className="text-gold/70" />,
              label: "Dress Suggestion",
              value: muhurtham.dressSuggestion,
              full: true,
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-xl p-4 ${item.full ? "sm:col-span-2" : ""}`}
              style={{
                background: "rgba(198,154,59,0.07)",
                border: "1px solid rgba(198,154,59,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5" aria-hidden="true">
                {item.icon}
                <span className="font-display text-gold/60 text-[10px] tracking-[0.25em] uppercase">
                  {item.label}
                </span>
              </div>
              <p className="font-body text-white/85 text-sm leading-snug">
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Sanskrit quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl p-8"
          style={{
            background: "rgba(198,154,59,0.08)",
            border: "1px solid rgba(198,154,59,0.25)",
          }}
        >
          <p
            className="font-heading italic text-gold text-3xl sm:text-4xl mb-3"
            lang="sa"
          >
            {muhurtham.quote}
          </p>
          <p className="font-body text-white/60 text-sm tracking-wide">
            &ldquo;{muhurtham.quoteTranslation}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
