"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: 0 | 1 | 2;
  opacity: number;
}

const PETAL_COLORS = ["#FFFDF8", "#E8A8A8", "#F5C05A"] as const;

function JasminePetal({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="6"
          rx="2.5"
          ry="5.5"
          fill={color}
          opacity="0.88"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2" fill="#F4D03F" opacity="0.9" />
    </svg>
  );
}

function RosePetal({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="7"
          rx="3.5"
          ry="6"
          fill={color}
          opacity="0.82"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2.5" fill={color} opacity="0.6" />
    </svg>
  );
}

function MarigoldPetal({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="6"
          rx="2"
          ry="5"
          fill={color}
          opacity="0.85"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="2" fill="#C69A3B" opacity="0.9" />
    </svg>
  );
}

function Petal({ petal }: { petal: Petal }) {
  const color = PETAL_COLORS[petal.type];
  const style: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: `${petal.x}vw`,
    animation: `petalFall ${petal.duration}s linear ${petal.delay}s infinite`,
    willChange: "transform",
    pointerEvents: "none",
    zIndex: 5,
  };

  return (
    <div style={style} aria-hidden="true">
      {petal.type === 0 && <JasminePetal size={petal.size} color={color} />}
      {petal.type === 1 && <RosePetal size={petal.size} color={color} />}
      {petal.type === 2 && <MarigoldPetal size={petal.size} color={color} />}
    </div>
  );
}

export default function FlowerPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 10 : 20;

    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i / count) * 100 + (Math.random() * 8 - 4),
      size: 10 + (i % 5) * 2,
      duration: 10 + (i % 7) * 2,
      delay: (i % 10) * 1.5,
      type: (i % 3) as 0 | 1 | 2,
      opacity: 0.7 + (i % 3) * 0.1,
    }));

    setPetals(generated);
  }, []);

  if (!petals.length) return null;

  return (
    <div
      className="petal-container"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      {petals.map((p) => (
        <Petal key={p.id} petal={p} />
      ))}
    </div>
  );
}
