import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#060a08",
          panel: "#0b1410",
          green: "#39ff6a",
          greendim: "#1c8f3c",
          cyan: "#4af2ff",
          amber: "#ffb000",
          red: "#ff3b3b",
        },
      },
      fontFamily: {
        mono: ["var(--font-jbmono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 8px rgba(57,255,106,0.55), 0 0 24px rgba(57,255,106,0.25)",
        glowCyan: "0 0 8px rgba(74,242,255,0.55), 0 0 24px rgba(74,242,255,0.25)",
        glowRed: "0 0 8px rgba(255,59,59,0.6), 0 0 24px rgba(255,59,59,0.3)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.85" },
          "50%": { opacity: "0.4" },
          "55%": { opacity: "0.9" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        flicker: "flicker 3.5s infinite",
        blink: "blink 1s step-start infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
