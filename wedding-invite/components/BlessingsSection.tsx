"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BlessingsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Lightweight parallax — only moves by 30px
  const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="blessings-heading"
      style={{
        background: "linear-gradient(160deg, #6D1628 0%, #8B1E2D 40%, #4A0E1A 100%)",
      }}
    >
      {/* Decorative flower pattern background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C69A3B' fillOpacity='1'%3E%3Cellipse cx='40' cy='20' rx='5' ry='12' /%3E%3Cellipse cx='40' cy='20' rx='5' ry='12' transform='rotate(60 40 40)'/%3E%3Cellipse cx='40' cy='20' rx='5' ry='12' transform='rotate(120 40 40)'/%3E%3Cellipse cx='40' cy='20' rx='5' ry='12' transform='rotate(180 40 40)'/%3E%3Cellipse cx='40' cy='20' rx='5' ry='12' transform='rotate(240 40 40)'/%3E%3Cellipse cx='40' cy='20' rx='5' ry='12' transform='rotate(300 40 40)'/%3E%3Ccircle cx='40' cy='40' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Parallax content wrapper */}
      <motion.div
        style={{ y }}
        className="relative section-pad max-w-3xl mx-auto px-6 text-center"
      >
        {/* Opening quote mark */}
        <div className="quote-mark mb-0 leading-none select-none" aria-hidden="true">
          &ldquo;
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2
            id="blessings-heading"
            className="font-heading italic text-white text-3xl sm:text-4xl md:text-5xl leading-snug mb-6"
          >
            Two hearts, two families,
            <br />
            one beautiful journey.
          </h2>

          <div
            className="flex items-center justify-center gap-4 mb-8"
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="h-px w-16 bg-gold/40" />
          </div>

          <p className="font-body text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            As you take these sacred steps together, may your home be filled
            with laughter, your hearts with love, and your days with the grace
            of Lord Ganesha&apos;s eternal blessings.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 inline-block"
          >
            <p className="font-heading italic text-gold text-2xl sm:text-3xl">
              ॥ शुभ विवाह ॥
            </p>
            <p className="mt-1 font-body text-gold/50 text-xs tracking-[0.3em] uppercase">
              Auspicious Wedding
            </p>
          </motion.div>
        </motion.div>

        {/* Closing quote mark (mirrored) */}
        <div
          className="quote-mark mt-0 leading-none select-none scale-y-[-1] scale-x-[-1] inline-block"
          aria-hidden="true"
        >
          &ldquo;
        </div>
      </motion.div>
    </section>
  );
}
