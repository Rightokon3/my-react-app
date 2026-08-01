/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1583C7", // primary blue
          dark: "#0E5F94",    // secondary/darker blue
          light: "#4FA8DE",   // light blue
        },
        surface: {
          blue: "#EAF5FC",    // very light blue section bg
        },
        ink: {
          DEFAULT: "#1F2937", // dark text
          soft: "#5B6472",    // secondary text
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 60, 90, 0.18)",
      },
    },
  },
  plugins: [],
};
