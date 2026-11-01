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
        primary: {
          DEFAULT: "#F4519A",
          hover: "#E03B86",
          dark: "#CF2573",
          light: "#FFF0F6",
          soft: "#FFE4EE",
          border: "#FCCEE2",
          subtle: "#FFF5F8",
        },
        dark: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(244, 81, 154, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'glow': '0 0 15px rgba(244, 81, 154, 0.35)',
      }
    },
  },
  plugins: [],
};
export default config;

