"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#couple", label: "Couple" },
  { href: "#events", label: "Events" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#venue", label: "Venue" },
  { href: "#rsvp", label: "RSVP" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-temple-ivory/90 backdrop-blur-md shadow-sm border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / monogram */}
          <button
            onClick={() => handleNav("#home")}
            className="font-display text-lg tracking-widest focus-visible:outline-none"
            aria-label="Go to top"
            style={{ color: scrolled ? "#6D1628" : "#D4AF6B" }}
          >
            R&nbsp;✦&nbsp;S
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`text-sm tracking-wider font-body transition-colors duration-200 focus-visible:outline-none focus-visible:underline ${
                    scrolled
                      ? "text-temple-text hover:text-maroon"
                      : "text-gold-light hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`md:hidden p-2 rounded transition-colors ${
              scrolled ? "text-maroon" : "text-gold-light"
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-16 inset-x-0 z-35 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ zIndex: 39 }}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-4 rounded-2xl overflow-hidden shadow-2xl border border-gold/30"
          style={{
            background:
              "linear-gradient(160deg, #FFFDF8 0%, #FFF9F0 100%)",
          }}
        >
          <ul className="py-3" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-6 py-3.5 text-temple-text hover:text-maroon hover:bg-gold/10
                    font-body text-base tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
