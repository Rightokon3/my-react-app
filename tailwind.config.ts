import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary brand blue (deep, trustworthy)
        brand: {
          50: "#eef6fb",
          100: "#d9ecf5",
          200: "#b3d9eb",
          300: "#7fbedb",
          400: "#4aa2c9",
          500: "#2988b3",
          600: "#1c6c92",
          700: "#175877",
          800: "#144860",
          900: "#0f3547",
        },
        // Secondary sky blue (used for tinted section backgrounds & accents)
        sky: {
          50: "#f2fafe",
          100: "#e3f5fd",
          200: "#c3e9fb",
          300: "#8fd6f6",
          400: "#59bfec",
          500: "#33a7db",
        },
        ink: {
          900: "#141b23",
          700: "#33404b",
          500: "#5c6b76",
          300: "#94a3ab",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(15, 53, 71, 0.18)",
        soft: "0 4px 16px -4px rgba(15, 53, 71, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
