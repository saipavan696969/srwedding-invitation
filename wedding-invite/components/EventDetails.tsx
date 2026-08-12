"use client";

import { motion } from "framer-motion";
import { Sun, Flower, Music, Heart, Star, Calendar, Clock, MapPin } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { weddingData, type WeddingEvent } from "@/data/wedding";

const ICON_MAP: Record<string, React.ReactNode> = {
  sun: <Sun size={20} />,
  flower: <Flower size={20} />,
  music: <Music size={20} />,
  heart: <Heart size={20} />,
  star: <Star size={20} />,
};

function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFFDF8 0%, #FFF9F0 100%)",
        border: "1px solid rgba(198,154,59,0.25)",
        boxShadow: "0 4px 24px rgba(109,22,40,0.06)",
      }}
      aria-label={`${event.name} on ${event.date}`}
    >
      {/* Top accent bar */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(90deg, #6D1628, #C69A3B, #1F4A3D)",
        }}
        aria-hidden="true"
      />

      <div className="p-6">
        {/* Icon + name */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-gold"
            style={{
              background: "linear-gradient(135deg, rgba(198,154,59,0.15), rgba(198,154,59,0.06))",
              border: "1px solid rgba(198,154,59,0.3)",
            }}
            aria-hidden="true"
          >
            {ICON_MAP[event.icon] ?? <Star size={20} />}
          </div>
          <div>
            <h3 className="font-heading text-maroon text-xl leading-tight">
              {event.name}
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2.5 text-temple-muted">
            <Calendar size={14} className="flex-shrink-0 text-gold/70" aria-hidden="true" />
            <span className="font-body text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-temple-muted">
            <Clock size={14} className="flex-shrink-0 text-gold/70" aria-hidden="true" />
            <span className="font-body text-sm">{event.time}</span>
          </div>
          <div className="flex items-start gap-2.5 text-temple-muted">
            <MapPin size={14} className="flex-shrink-0 text-gold/70 mt-0.5" aria-hidden="true" />
            <span className="font-body text-sm">{event.venue}</span>
          </div>
        </div>

        <div className="h-px bg-gold/15 mb-4" aria-hidden="true" />

        <p className="font-body text-temple-text/65 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function EventDetails() {
  const { events } = weddingData;

  return (
    <section
      id="events"
      className="section-pad bg-temple-ivory relative"
      aria-labelledby="events-heading"
    >
      {/* Faint toran decoration at top */}
      <div
        className="absolute top-0 inset-x-0 h-16 opacity-30 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='64' viewBox='0 0 80 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='40' cy='20' rx='8' ry='18' fill='none' stroke='%23C69A3B' strokeWidth='0.75' strokeOpacity='0.6'/%3E%3Ccircle cx='40' cy='10' r='4' fill='%23C69A3B' fillOpacity='0.4'/%3E%3Ccircle cx='0' cy='8' r='3' fill='%23C69A3B' fillOpacity='0.3'/%3E%3Ccircle cx='80' cy='8' r='3' fill='%23C69A3B' fillOpacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "80px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Wedding Programme
          </p>
          <h2
            id="events-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic"
          >
            Celebrations
          </h2>
          <SectionDivider variant="ornate" />
          <p className="font-body text-temple-muted text-base max-w-xl mx-auto">
            Join us across these joyful ceremonies as two families unite in celebration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
