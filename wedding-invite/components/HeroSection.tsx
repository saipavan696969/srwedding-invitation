"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

function TempleArch() {
  return (
    <svg
      viewBox="0 0 400 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Outer arch frame */}
      <path
        d="M40 520 L40 200 Q40 40 200 40 Q360 40 360 200 L360 520"
        stroke="#C69A3B"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        fill="none"
      />
      {/* Inner arch */}
      <path
        d="M65 520 L65 210 Q65 80 200 80 Q335 80 335 210 L335 520"
        stroke="#C69A3B"
        strokeWidth="0.75"
        strokeOpacity="0.4"
        fill="none"
      />

      {/* Left pillar decoration */}
      <rect x="30" y="200" width="30" height="320" fill="none" stroke="#C69A3B" strokeOpacity="0.3" strokeWidth="0.5" />
      <rect x="35" y="205" width="20" height="310" fill="none" stroke="#C69A3B" strokeOpacity="0.2" strokeWidth="0.5" />

      {/* Right pillar decoration */}
      <rect x="340" y="200" width="30" height="320" fill="none" stroke="#C69A3B" strokeOpacity="0.3" strokeWidth="0.5" />
      <rect x="345" y="205" width="20" height="310" fill="none" stroke="#C69A3B" strokeOpacity="0.2" strokeWidth="0.5" />

      {/* Top arch ornament - kalash */}
      <ellipse cx="200" cy="30" rx="14" ry="8" fill="#C69A3B" fillOpacity="0.5" />
      <rect x="196" y="8" width="8" height="24" fill="#C69A3B" fillOpacity="0.4" rx="2" />
      <ellipse cx="200" cy="8" rx="10" ry="4" fill="#C69A3B" fillOpacity="0.5" />
      <line x1="194" y1="4" x2="194" y2="0" stroke="#C69A3B" strokeOpacity="0.6" strokeWidth="1" />
      <line x1="200" y1="2" x2="200" y2="0" stroke="#C69A3B" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="206" y1="4" x2="206" y2="0" stroke="#C69A3B" strokeOpacity="0.6" strokeWidth="1" />

      {/* Corner lotus - top left of arch */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx="40"
          cy="195"
          rx="3"
          ry="7"
          fill="#C69A3B"
          fillOpacity="0.35"
          transform={`rotate(${deg} 40 195)`}
        />
      ))}
      <circle cx="40" cy="195" r="3.5" fill="#C69A3B" fillOpacity="0.55" />

      {/* Corner lotus - top right */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse
          key={i}
          cx="360"
          cy="195"
          rx="3"
          ry="7"
          fill="#C69A3B"
          fillOpacity="0.35"
          transform={`rotate(${deg} 360 195)`}
        />
      ))}
      <circle cx="360" cy="195" r="3.5" fill="#C69A3B" fillOpacity="0.55" />

      {/* Decorative dots along arch */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const angle = -180 + (i * 30);
        const rad = (angle * Math.PI) / 180;
        const r = 162;
        const cx = 200 + r * Math.cos(rad + Math.PI / 2);
        const cy = 200 + r * Math.sin(rad + Math.PI / 2) - 10;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 3 ? 3 : 1.5}
            fill="#C69A3B"
            fillOpacity={i === 3 ? 0.7 : 0.4}
          />
        );
      })}

      {/* Bottom cross-beam ornament */}
      <line x1="30" y1="440" x2="370" y2="440" stroke="#C69A3B" strokeOpacity="0.25" strokeWidth="0.75" />
      <line x1="30" y1="444" x2="370" y2="444" stroke="#C69A3B" strokeOpacity="0.15" strokeWidth="0.5" />
      {/* Center medallion on beam */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <ellipse
          key={i}
          cx="200"
          cy="442"
          rx="2"
          ry="5"
          fill="#C69A3B"
          fillOpacity="0.3"
          transform={`rotate(${deg} 200 442)`}
        />
      ))}
      <circle cx="200" cy="442" r="3" fill="#C69A3B" fillOpacity="0.5" />
    </svg>
  );
}

function GaneshSymbol() {
  return (
    <div className="text-center mb-6">
      <p className="font-display text-gold text-xs tracking-[0.35em] uppercase mb-0.5">
        ॥ श्री गणेशाय नमः ॥
      </p>
      <p className="font-display text-gold text-xs tracking-[0.35em] uppercase mb-1">
        ॥ శ్రీ గణేశాయ నమః ॥
      </p>
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-16 bg-gold/40" />
        <span className="text-gold text-lg" aria-hidden="true">✦</span>
        <div className="h-px w-16 bg-gold/40" />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const archVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: "easeOut" } },
};

export default function HeroSection() {
  const { bride, groom, displayDate } = weddingData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Wedding invitation hero"
      style={{ background: "linear-gradient(160deg, #2e0a12 0%, #6D1628 30%, #1F4A3D 65%, #0a1f19 100%)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(198,154,59,0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 animate-glow pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #C69A3B 0%, transparent 70%)" }}
      />

      {/* Arch frame */}
      <motion.div
        variants={archVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-full max-h-[600px] mx-auto">
          <TempleArch />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <GaneshSymbol />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body text-gold-light/80 text-sm md:text-base tracking-[0.2em] uppercase mb-8"
        >
          {weddingData.heroInviteLine}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-white leading-none mb-3"
          style={{ fontSize: "clamp(3.5rem, 12vw, 6rem)" }}
        >
          {groom.name}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 my-4"
          aria-hidden="true"
        >
          <div className="h-px w-12 sm:w-20 bg-gold/50" />
          <span className="font-heading italic text-gold text-4xl sm:text-5xl leading-none">&amp;</span>
          <div className="h-px w-12 sm:w-20 bg-gold/50" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-white leading-none mb-8"
          style={{ fontSize: "clamp(3.5rem, 12vw, 6rem)" }}
        >
          {bride.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-gold-light/70 text-sm tracking-[0.15em] uppercase mb-6"
        >
          invite you to celebrate our wedding
        </motion.p>


        <motion.div
          variants={itemVariants}
          className="inline-block border border-gold/40 rounded px-8 py-4"
          style={{ background: "rgba(198,154,59,0.08)" }}
        >
          <time
            dateTime="2026-08-18"
            className="font-heading text-gold text-2xl sm:text-3xl tracking-wide"
          >
            {displayDate}
          </time>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-6 font-body text-gold-light/60 text-sm tracking-widest"
        >
          {weddingData.venue.name}, Hyderabad
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-2"
          aria-label="Scroll down to explore"
        >
          <p className="font-body text-gold/50 text-xs tracking-[0.3em] uppercase">
            Scroll to celebrate
          </p>
          <div
            className="w-5 h-8 rounded-full border border-gold/40 flex items-start justify-center pt-1.5 animate-scroll-bounce"
            aria-hidden="true"
          >
            <div className="w-1 h-2 rounded-full bg-gold/60" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
