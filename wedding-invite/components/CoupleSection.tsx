"use client";

import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionDivider from "./SectionDivider";
import { weddingData } from "@/data/wedding";

function ProfileCard({
  name,
  fullName,
  parents,
  intro,
  image,
  side,
  gradientFrom,
  gradientTo,
  iconType,
}: {
  name: string;
  fullName: string;
  parents: string;
  intro: string;
  image: string;
  side: "left" | "right";
  gradientFrom: string;
  gradientTo: string;
  iconType: "bride" | "groom";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      {/* Image frame */}
      <div className="relative w-64 h-80 sm:w-72 sm:h-88 mb-8">
        {/* Outer decorative border */}
        <div
          className="absolute -inset-3 rounded-[2rem] border border-gold/30"
          aria-hidden="true"
        />
        {/* Corner ornaments */}
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} w-6 h-6`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
              <circle cx="12" cy="12" r="3" fill="#C69A3B" fillOpacity="0.6" />
              <line x1="12" y1="0" x2="12" y2="9" stroke="#C69A3B" strokeOpacity="0.4" strokeWidth="0.75" />
              <line x1="15" y1="24" x2="12" y2="15" stroke="#C69A3B" strokeOpacity="0.4" strokeWidth="0.75" />
              <line x1="0" y1="12" x2="9" y2="12" stroke="#C69A3B" strokeOpacity="0.4" strokeWidth="0.75" />
              <line x1="24" y1="12" x2="15" y2="12" stroke="#C69A3B" strokeOpacity="0.4" strokeWidth="0.75" />
            </svg>
          </div>
        ))}
        {/* Gold border frame */}
        <div className="absolute inset-0 rounded-[1.5rem] border-2 border-gold/50 overflow-hidden z-10" />
        {/* Image / placeholder */}
        <ImagePlaceholder
          from={gradientFrom}
          to={gradientTo}
          icon={iconType}
          label={name}
          className="absolute inset-0 rounded-[1.4rem]"
        />
        {/* Inner glow overlay */}
        <div
          className="absolute inset-0 rounded-[1.4rem] z-20"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        {/* Name overlay */}
        <div className="absolute bottom-4 inset-x-0 z-30 text-center">
          <span className="font-heading text-white text-2xl italic">{name}</span>
        </div>
      </div>

      {/* Text info */}
      <h3 className="font-heading text-maroon text-3xl sm:text-4xl mb-2">
        {fullName}
      </h3>
      <p className="font-body text-temple-muted text-sm tracking-wide mb-4 max-w-xs">
        {parents}
      </p>
      <div className="h-px w-16 bg-gold/40 mx-auto mb-4" aria-hidden="true" />
      <p className="font-body text-temple-text/75 leading-relaxed max-w-xs text-base">
        {intro}
      </p>
    </motion.article>
  );
}

function DividerAmpersand() {
  return (
    <div
      className="hidden md:flex flex-col items-center justify-center gap-4 py-8"
      aria-hidden="true"
    >
      <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <span className="font-heading italic text-gold text-6xl leading-none">&amp;</span>
      <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
    </div>
  );
}

export default function CoupleSection() {
  const { bride, groom } = weddingData;

  return (
    <section
      id="couple"
      className="section-pad bg-temple-cream relative"
      aria-labelledby="couple-heading"
    >
      {/* Subtle leaf pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='30' cy='15' rx='6' ry='14' fill='%23C69A3B' transform='rotate(30 30 30)'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            The Couple
          </p>
          <h2
            id="couple-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic"
          >
            Two Hearts, One Journey
          </h2>
          <SectionDivider variant="ornate" />
        </motion.div>

        {/* Mobile: stacked; Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-0">
          <div className="flex-1 flex justify-center md:justify-end md:pr-8">
            <ProfileCard
              {...bride}
              side="left"
              gradientFrom="#C69A3B"
              gradientTo="#6D1628"
              iconType="bride"
            />
          </div>

          <DividerAmpersand />

          <div className="flex-1 flex justify-center md:justify-start md:pl-8">
            <ProfileCard
              {...groom}
              side="right"
              gradientFrom="#1F4A3D"
              gradientTo="#0a1f19"
              iconType="groom"
            />
          </div>
        </div>

        {/* Mobile ampersand */}
        <div className="md:hidden text-center my-2" aria-hidden="true">
          <span className="font-heading italic text-gold text-5xl">&amp;</span>
        </div>
      </div>
    </section>
  );
}
