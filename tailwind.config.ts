import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts,mjs}",
    "./.nuxt/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        base: {
          black: "#0A0A0A",
          white: "#FAFAF9",
        },

        // Palette A – Main Website
        main: {
          bg: "#0F172A",
          surface: "#111827",
          primary: "#1E3A5F",
          accent: "#2DD4BF",
          text: "#E5E7EB",
          muted: "#9AA5B1",
          border: "#1F2937",
        },

        // Palette B – Dashboard
        dashboard: {
          bg: "#0B1220",
          surface: "#0F172A",
          primary: "#10B981",
          accent: "#34D399",
          text: "#E5E7EB",
          muted: "#94A3B8",
          border: "#1E293B",
        },

        // Palette C – Premium
        premium: {
          bg: "#0A0A0A",
          surface: "#111111",
          primary: "#C6A85E",
          accent: "#E4C97A",
          text: "#FAFAF9",
          muted: "#A1A1AA",
          border: "#27272A",
        },

        // Status
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#38BDF8",

        // Convenience aliases (map to main palette by default)
        background: "#0F172A",
        foreground: "#E5E7EB",
        primary: {
          DEFAULT: "#1E3A5F",
          foreground: "#FAFAF9",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          foreground: "#0A0A0A",
        },
        muted: {
          DEFAULT: "#9AA5B1",
          foreground: "#9AA5B1",
        },
        border: "#1F2937",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
} as Config;

export default config;
