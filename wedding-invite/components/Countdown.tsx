"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: string): TimeLeft | null {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountCard({
  value,
  label,
  index,
}: {
  value: number | null;
  label: string;
  index: number;
}) {
  const display = value === null ? "--" : String(value).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(198,154,59,0.12) 0%, rgba(198,154,59,0.06) 100%)",
          border: "1px solid rgba(198,154,59,0.35)",
          boxShadow: "0 4px 20px rgba(198,154,59,0.1), inset 0 1px 0 rgba(198,154,59,0.2)",
        }}
      >
        <span
          className="font-heading text-gold text-4xl sm:text-5xl font-light tabular-nums leading-none"
          aria-label={`${display} ${label}`}
        >
          {display}
        </span>
      </div>
      <p className="mt-2.5 font-display text-gold/60 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(
    undefined
  );

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(weddingData.weddingDate));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const weddingPassed = timeLeft === null;
  const loading = timeLeft === undefined;

  return (
    <section
      className="section-pad bg-temple-cream"
      aria-labelledby="countdown-heading"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Counting Down
          </p>
          <h2
            id="countdown-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic mb-2"
          >
            The Big Day
          </h2>
          <p className="font-body text-temple-muted text-base mb-10">
            {weddingData.displayDate}
          </p>
        </motion.div>

        {weddingPassed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="py-10"
          >
            <div
              className="inline-block rounded-2xl px-10 py-8 border border-gold/30"
              style={{
                background: "linear-gradient(135deg, rgba(198,154,59,0.08), rgba(109,22,40,0.06))",
              }}
            >
              <p className="font-heading italic text-maroon text-2xl sm:text-3xl">
                Our new journey has begun.
              </p>
              <p className="mt-3 font-body text-temple-muted text-sm">
                Thank you for your blessings and love. 🌸
              </p>
            </div>
          </motion.div>
        ) : (
          <div
            className="flex items-center justify-center gap-3 sm:gap-6"
            aria-live="polite"
            aria-atomic="true"
            role="timer"
          >
            <CountCard
              value={loading ? null : (timeLeft?.days ?? null)}
              label="Days"
              index={0}
            />
            <span
              className="font-heading text-gold/50 text-3xl sm:text-4xl pb-6 leading-none"
              aria-hidden="true"
            >
              :
            </span>
            <CountCard
              value={loading ? null : (timeLeft?.hours ?? null)}
              label="Hours"
              index={1}
            />
            <span
              className="font-heading text-gold/50 text-3xl sm:text-4xl pb-6 leading-none"
              aria-hidden="true"
            >
              :
            </span>
            <CountCard
              value={loading ? null : (timeLeft?.minutes ?? null)}
              label="Minutes"
              index={2}
            />
            <span
              className="font-heading text-gold/50 text-3xl sm:text-4xl pb-6 leading-none"
              aria-hidden="true"
            >
              :
            </span>
            <CountCard
              value={loading ? null : (timeLeft?.seconds ?? null)}
              label="Seconds"
              index={3}
            />
          </div>
        )}
      </div>
    </section>
  );
}
