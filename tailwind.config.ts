import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        primary: "var(--primary)",
        "primary-soft": "var(--primary-soft)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)"
      },
      boxShadow: {
        crisp: "0 4px 8px oklch(0.18 0.025 270 / 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
