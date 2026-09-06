import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2ECE1",
        paper: "#FBF8F2",
        ink: "#37332C",
        "ink-soft": "#5C574C",
        dust: {
          DEFAULT: "#A7B7C3",
          light: "#CBD7DE",
          dark: "#7C93A2",
        },
        clay: {
          DEFAULT: "#BD7E56",
          light: "#D9AE85",
          dark: "#93613D",
        },
        sand: "#D9C6A3",
        sage: "#96A184",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        soft: "1.75rem",
        pot: "2.5rem 2.5rem 0.5rem 0.5rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
