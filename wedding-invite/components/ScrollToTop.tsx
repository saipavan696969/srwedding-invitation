"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full
        bg-maroon text-white shadow-lg
        flex items-center justify-center
        border border-gold/40
        hover:bg-maroon-light hover:scale-110
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
        transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #6D1628, #8B1E2D)",
      }}
    >
      <ChevronUp size={20} />
    </button>
  );
}
