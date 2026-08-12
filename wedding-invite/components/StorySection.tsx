"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Star, Flower } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { weddingData, type StoryMilestone } from "@/data/wedding";

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <Sparkles size={16} />,
  heart: <Heart size={16} />,
  star: <Star size={16} />,
  flower: <Flower size={16} />,
};

function TimelineMarker({ icon, isActive }: { icon: string; isActive?: boolean }) {
  return (
    <div className="relative flex-shrink-0 z-10">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md"
        style={{
          background: isActive
            ? "linear-gradient(135deg, #6D1628, #8B1E2D)"
            : "linear-gradient(135deg, #C69A3B, #A07820)",
          border: "2px solid rgba(198,154,59,0.5)",
          boxShadow: "0 0 0 4px rgba(198,154,59,0.1)",
        }}
        aria-hidden="true"
      >
        {ICON_MAP[icon] ?? <Heart size={16} />}
      </div>
    </div>
  );
}

function StoryItem({
  milestone,
  index,
}: {
  milestone: StoryMilestone;
  index: number;
}) {
  const isRight = index % 2 === 0;
  const isLast = index === weddingData.story.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-0 items-start"
    >
      {/* Desktop: alternating layout */}
      <div className="hidden md:flex w-full items-start gap-0">
        {/* Left content (even indices) */}
        <div className={`flex-1 ${isRight ? "pr-8 text-right" : ""}`}>
          {isRight && (
            <div className="rounded-xl p-5 inline-block text-right max-w-sm ml-auto"
              style={{
                background: "linear-gradient(135deg, #FFFDF8, #FFF9F0)",
                border: "1px solid rgba(198,154,59,0.25)",
                boxShadow: "0 4px 20px rgba(109,22,40,0.06)",
              }}
            >
              <p className="font-display text-gold text-xs tracking-[0.3em] uppercase mb-1">
                {milestone.date}
              </p>
              <h3 className="font-heading text-maroon text-2xl mb-2">
                {milestone.title}
              </h3>
              <p className="font-body text-temple-text/70 text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          )}
        </div>

        {/* Center: marker + line */}
        <div className="flex flex-col items-center">
          <TimelineMarker icon={milestone.icon} isActive={isLast} />
          {!isLast && (
            <div className="timeline-line w-0.5 flex-1 min-h-16 mt-1" aria-hidden="true" />
          )}
        </div>

        {/* Right content (odd indices) */}
        <div className={`flex-1 ${!isRight ? "pl-8" : ""}`}>
          {!isRight && (
            <div className="rounded-xl p-5 inline-block max-w-sm"
              style={{
                background: "linear-gradient(135deg, #FFFDF8, #FFF9F0)",
                border: "1px solid rgba(198,154,59,0.25)",
                boxShadow: "0 4px 20px rgba(109,22,40,0.06)",
              }}
            >
              <p className="font-display text-gold text-xs tracking-[0.3em] uppercase mb-1">
                {milestone.date}
              </p>
              <h3 className="font-heading text-maroon text-2xl mb-2">
                {milestone.title}
              </h3>
              <p className="font-body text-temple-text/70 text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden gap-4 w-full">
        <div className="flex flex-col items-center">
          <TimelineMarker icon={milestone.icon} isActive={isLast} />
          {!isLast && (
            <div className="timeline-line w-0.5 flex-1 min-h-12 mt-1" aria-hidden="true" />
          )}
        </div>
        <div
          className="flex-1 rounded-xl p-4 mb-6"
          style={{
            background: "linear-gradient(135deg, #FFFDF8, #FFF9F0)",
            border: "1px solid rgba(198,154,59,0.25)",
          }}
        >
          <p className="font-display text-gold text-[10px] tracking-[0.3em] uppercase mb-1">
            {milestone.date}
          </p>
          <h3 className="font-heading text-maroon text-xl mb-1.5">
            {milestone.title}
          </h3>
          <p className="font-body text-temple-text/70 text-sm leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function StorySection() {
  const { story } = weddingData;

  return (
    <section
      id="story"
      className="section-pad bg-temple-cream relative overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic"
          >
            The Journey to Forever
          </h2>
          <SectionDivider variant="ornate" />
        </motion.div>

        <div className="relative">
          {story.map((milestone, i) => (
            <StoryItem key={milestone.id} milestone={milestone} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
