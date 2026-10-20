import type { Config } from "tailwindcss";

// Grainline brand tokens. Use these names in components instead of raw hex values.
const config: Config = {
  // hover: styles only on devices that can hover, so touch screens never keep a stuck hover state.
  future: { hoverOnlyWhenSupported: true },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F1A14",
        wort: "#9A4A1C",
        "wort-dark": "#7A3912",
        foam: "#F6F1E7",
        barley: "#E3B04B",
        hop: "#4B5E2E",
        steel: "#6B5E4E",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      // Type roles. Fluid sizes keep a rem term so text still scales with the visitor's settings;
      // every max is under 2.5× its min.
      fontSize: {
        display: ["clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "800" }],
        h2: ["clamp(1.875rem, 1.3rem + 2vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "700" }],
        h3: ["1.375rem", { lineHeight: "1.25", fontWeight: "700" }],
        lead: ["clamp(1.125rem, 1rem + 0.5vw, 1.375rem)", { lineHeight: "1.45" }],
        body: ["1.0625rem", { lineHeight: "1.55" }],
        reading: ["clamp(2.5rem, 2rem + 2vw, 3.5rem)", { lineHeight: "1", fontWeight: "600" }],
      },
      maxWidth: {
        page: "82.5rem", // 1320px content width
        measure: "36rem", // about 60 characters of body text
      },
      spacing: {
        section: "clamp(4rem, 2.5rem + 6vw, 8rem)", // 64px on phones, 128px on desktop
      },
      borderRadius: {
        btn: "0.5rem",
        key: "0.75rem",
        tablet: "1.5rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.2,.7,.2,1)",
      },
      transitionDuration: {
        swap: "180ms",
        enter: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
