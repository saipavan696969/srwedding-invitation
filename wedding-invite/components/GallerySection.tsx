"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionDivider from "./SectionDivider";
import { weddingData, type GalleryImage } from "@/data/wedding";

function GalleryCard({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      onClick={() => onClick(index)}
      className="relative group rounded-2xl overflow-hidden aspect-[3/4] w-full
        border border-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      style={{ boxShadow: "0 4px 20px rgba(109,22,40,0.08)" }}
      aria-label={`View ${image.alt}`}
    >
      <ImagePlaceholder
        from={image.gradientFrom}
        to={image.gradientTo}
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
        aria-label={image.alt}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {image.caption && (
            <p className="text-white font-body text-sm font-medium">
              {image.caption}
            </p>
          )}
        </div>
      </div>
      {/* Gold frame corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/50 rounded-tl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/50 rounded-tr pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/50 rounded-bl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/50 rounded-br pointer-events-none" aria-hidden="true" />
    </motion.button>
  );
}

function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const image = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Image: ${image.alt}`}
      >
        {/* Content — stop propagation so clicking it doesn't close */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-lg w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="rounded-2xl overflow-hidden aspect-[3/4] border border-gold/30"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          >
            <ImagePlaceholder
              from={image.gradientFrom}
              to={image.gradientTo}
              label={image.caption}
              className="w-full h-full"
              aria-label={image.alt}
            />
          </div>

          {image.caption && (
            <p className="mt-3 text-center text-white/70 font-body text-sm">
              {image.caption}
            </p>
          )}

          <p className="mt-1 text-center text-white/30 font-body text-xs">
            {activeIndex + 1} / {images.length}
          </p>
        </motion.div>

        {/* Navigation */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
            bg-white/10 border border-white/20 flex items-center justify-center text-white
            hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
            bg-white/10 border border-white/20 flex items-center justify-center text-white
            hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full
            bg-white/10 border border-white/20 flex items-center justify-center text-white
            hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Close gallery"
        >
          <X size={20} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const { gallery } = weddingData;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setActiveIndex(index), []);
  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % gallery.length));
  }, [gallery.length]);

  return (
    <section
      id="gallery"
      className="section-pad bg-temple-ivory"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Moments
          </p>
          <h2
            id="gallery-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic"
          >
            A Glimpse of Us
          </h2>
          <SectionDivider variant="ornate" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((image, i) => (
            <GalleryCard
              key={image.id}
              image={image}
              index={i}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={gallery}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
