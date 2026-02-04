/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{vue,js,ts,scss}", "./nuxt.config.{js,ts}"],
  theme: {
    extend: {
      colors: {
        // ===== Base =====
        base: {
          black: "#0A0A0A",
          white: "#FAFAF9",
        },

        // ===== Palette A – Main Website =====
        main: {
          bg: "#0F172A",
          surface: "#111827",
          primary: "#1E3A5F",
          accent: "#2DD4BF",
          text: "#E5E7EB",
          muted: "#9AA5B1",
          border: "#1F2937",
        },

        // ===== Palette B – Dashboard =====
        dashboard: {
          bg: "#0B1220",
          surface: "#0F172A",
          primary: "#10B981",
          accent: "#34D399",
          text: "#E5E7EB",
          muted: "#94A3B8",
          border: "#1E293B",
        },

        // ===== Palette C – Premium =====
        premium: {
          bg: "#0A0A0A",
          surface: "#111111",
          primary: "#C6A85E",
          accent: "#E4C97A",
          text: "#FAFAF9",
          muted: "#A1A1AA",
          border: "#27272A",
        },

        // ===== Status =====
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#38BDF8",
      },
    },
  },
  plugins: [],
};
