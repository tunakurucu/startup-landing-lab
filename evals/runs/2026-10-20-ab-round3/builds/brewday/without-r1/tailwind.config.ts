import type { Config } from "tailwindcss";

// Grainline brand tokens. Use these names in components instead of raw hex values.
const config: Config = {
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
      borderRadius: {
        btn: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
