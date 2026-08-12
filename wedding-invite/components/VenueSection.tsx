"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, User, ExternalLink } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { weddingData } from "@/data/wedding";

function MapPlaceholder() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1F4A3D 0%, #0a2e24 100%)",
      }}
      aria-label="Map of Sri Kalyana Mahal, Jubilee Hills, Hyderabad"
    >
      {/* Grid lines for map feel */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 300"
        aria-hidden="true"
      >
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#C69A3B" strokeWidth="0.5" />
        ))}
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="#C69A3B" strokeWidth="0.5" />
        ))}
        {/* Roads */}
        <path d="M0 150 Q100 130 200 150 Q300 170 400 150" stroke="#C69A3B" strokeWidth="3" fill="none" strokeOpacity="0.3" />
        <path d="M180 0 Q200 80 190 150 Q180 220 200 300" stroke="#C69A3B" strokeWidth="3" fill="none" strokeOpacity="0.25" />
        {/* Park area */}
        <rect x="240" y="80" width="80" height="60" fill="#2C6354" fillOpacity="0.4" rx="4" />
        {/* Building blocks */}
        <rect x="60" y="100" width="40" height="30" fill="#4A2010" fillOpacity="0.4" rx="2" />
        <rect x="110" y="110" width="30" height="25" fill="#4A2010" fillOpacity="0.3" rx="2" />
        <rect x="300" y="170" width="50" height="35" fill="#4A2010" fillOpacity="0.35" rx="2" />
      </svg>

      {/* Pin */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center animate-float shadow-xl"
          style={{
            background: "linear-gradient(135deg, #6D1628, #8B1E2D)",
            border: "2px solid rgba(198,154,59,0.6)",
          }}
          aria-hidden="true"
        >
          <MapPin size={24} className="text-gold" />
        </div>
        <div
          className="w-3 h-3 mt-[-4px] rounded-full"
          style={{ background: "rgba(109,22,40,0.6)" }}
          aria-hidden="true"
        />
        <div
          className="mt-3 px-4 py-2 rounded-lg text-center"
          style={{
            background: "rgba(255,253,248,0.95)",
            border: "1px solid rgba(198,154,59,0.4)",
          }}
        >
          <p className="font-heading text-maroon text-sm font-semibold">
            Sri Kalyana Mahal
          </p>
          <p className="font-body text-temple-muted text-xs">
            Jubilee Hills, Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VenueSection() {
  const { venue, contact, events } = weddingData;
  const muhurthamEvent = events.find((e) => e.id === "muhurtham");

  return (
    <section
      id="venue"
      className="section-pad bg-temple-cream relative"
      aria-labelledby="venue-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Location
          </p>
          <h2
            id="venue-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic"
          >
            The Venue
          </h2>
          <SectionDivider variant="ornate" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden h-72 md:h-80 border border-gold/25"
            style={{ boxShadow: "0 8px 32px rgba(109,22,40,0.1)" }}
          >
            <MapPlaceholder />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "linear-gradient(135deg, #FFFDF8, #FFF9F0)",
                border: "1px solid rgba(198,154,59,0.25)",
                boxShadow: "0 4px 24px rgba(109,22,40,0.07)",
              }}
            >
              <h3 className="font-heading text-maroon text-3xl mb-1">
                {venue.name}
              </h3>
              <p className="font-display text-gold text-[10px] tracking-[0.3em] uppercase mb-5">
                Wedding Venue
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-body text-temple-muted text-xs tracking-wide uppercase mb-0.5">
                      Address
                    </p>
                    <address className="font-body text-temple-text text-sm not-italic leading-snug">
                      {venue.address}
                    </address>
                  </div>
                </div>

                {muhurthamEvent && (
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-body text-temple-muted text-xs tracking-wide uppercase mb-0.5">
                        Muhurtham Time
                      </p>
                      <p className="font-body text-temple-text text-sm">
                        {muhurthamEvent.time}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <User size={16} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-body text-temple-muted text-xs tracking-wide uppercase mb-0.5">
                      Contact
                    </p>
                    <p className="font-body text-temple-text text-sm">
                      {contact.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-body text-temple-muted text-xs tracking-wide uppercase mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="font-body text-maroon text-sm hover:text-maroon-light transition-colors underline underline-offset-2"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-body text-sm
                  tracking-wide text-white transition-all duration-300
                  hover:opacity-90 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                style={{
                  background: "linear-gradient(135deg, #6D1628, #8B1E2D)",
                  boxShadow: "0 4px 16px rgba(109,22,40,0.3)",
                }}
              >
                <MapPin size={15} aria-hidden="true" />
                Open in Google Maps
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
