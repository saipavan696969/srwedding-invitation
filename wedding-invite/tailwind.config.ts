import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#6D1628",
          light: "#8B1E2D",
          dark: "#4A0E1A",
          50: "#fdf2f4",
          100: "#fce7ea",
          900: "#3a0915",
        },
        gold: {
          DEFAULT: "#C69A3B",
          light: "#D4AF6B",
          dark: "#A07820",
          50: "#fdf8ee",
          100: "#faefd4",
          200: "#f5dfa9",
        },
        temple: {
          green: "#1F4A3D",
          greenlight: "#2C6354",
          ivory: "#FFFDF8",
          cream: "#FFF9F0",
          sand: "#F5E6CC",
          text: "#3D2924",
          muted: "#7A5C54",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        display: ["Cinzel Decorative", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6", filter: "blur(0px)" },
          "50%": { opacity: "1", filter: "blur(1px)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C69A3B 0%, #D4AF6B 50%, #A07820 100%)",
        "maroon-gradient":
          "linear-gradient(135deg, #6D1628 0%, #8B1E2D 50%, #4A0E1A 100%)",
        "hero-gradient":
          "linear-gradient(160deg, #3a0915 0%, #6D1628 30%, #1F4A3D 70%, #0a1f19 100%)",
        "muhurtham-gradient":
          "linear-gradient(160deg, #1F4A3D 0%, #0d2e24 50%, #0a1f19 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
