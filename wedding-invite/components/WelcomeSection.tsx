"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import { weddingData } from "@/data/wedding";

function DipaLamp() {
  return (
    <svg
      width="72"
      height="80"
      viewBox="0 0 72 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="mx-auto"
    >
      {/* Flame */}
      <ellipse cx="36" cy="12" rx="6" ry="10" fill="#F4A233" fillOpacity="0.9" />
      <ellipse cx="36" cy="14" rx="3.5" ry="7" fill="#F9D06F" fillOpacity="0.9" />
      <ellipse cx="36" cy="16" rx="1.5" ry="4" fill="white" fillOpacity="0.8" />
      {/* Glow */}
      <ellipse cx="36" cy="14" rx="10" ry="12" fill="#F4A233" fillOpacity="0.12" />

      {/* Wick */}
      <line x1="36" y1="22" x2="36" y2="26" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />

      {/* Oil dish */}
      <path
        d="M22 38 Q22 28 36 26 Q50 28 50 38 Q50 44 36 46 Q22 44 22 38 Z"
        fill="#C69A3B"
        fillOpacity="0.8"
      />
      <ellipse cx="36" cy="46" rx="14" ry="4" fill="#A07820" fillOpacity="0.7" />

      {/* Stand */}
      <path d="M34 46 L30 64 L42 64 L38 46 Z" fill="#C69A3B" fillOpacity="0.6" />
      <ellipse cx="36" cy="64" rx="16" ry="4" fill="#C69A3B" fillOpacity="0.5" />
      <rect x="20" y="66" width="32" height="3" rx="1.5" fill="#A07820" fillOpacity="0.6" />

      {/* Decorative dots */}
      <circle cx="24" cy="38" r="1.5" fill="#D4AF6B" fillOpacity="0.7" />
      <circle cx="48" cy="38" r="1.5" fill="#D4AF6B" fillOpacity="0.7" />
    </svg>
  );
}

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="section-pad bg-temple-ivory relative overflow-hidden"
      aria-labelledby="welcome-heading"
    >
      {/* Faint mandala background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #C69A3B 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, transparent 40px, #C69A3B 41px, transparent 42px),
            radial-gradient(circle at 50% 50%, transparent 80px, #C69A3B 81px, transparent 82px)
          `,
          backgroundSize: "200px 200px",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <DipaLamp />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Welcome
          </p>
          <h2
            id="welcome-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic leading-snug mb-6"
          >
            Our Story
          </h2>
        </motion.div>

        <SectionDivider variant="ornate" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-temple-text/80 text-lg leading-relaxed wedding-prose"
        >
          {weddingData.welcomeMessage}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 font-heading italic text-maroon/70 text-xl"
        >
          &ldquo; {weddingData.footerInvitation} &rdquo;
        </motion.p>
      </div>
    </section>
  );
}
