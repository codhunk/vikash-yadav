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
          DEFAULT: "#00478d",
          container: "#005eb8",
          fixed: "#d6e3ff",
        },
        secondary: {
          DEFAULT: "#006a6a",
          container: "#90efef",
          fixed: "#93f2f2",
        },
        tertiary: {
          DEFAULT: "#004885",
          container: "#0060ae",
        },
        surface: {
          DEFAULT: "#f7f9fb",
          container: {
            low: "#f2f4f6",
            lowest: "#ffffff",
            high: "#e6e8ea",
            higher: "#e0e3e5",
          },
          bright: "#f7f9fb",
          dim: "#d8dadc",
        },
        on: {
          primary: "#ffffff",
          secondary: "#ffffff",
          surface: "#191c1e",
          "surface-variant": "#424752",
        },
        outline: {
          DEFAULT: "#727783",
          variant: "#c2c6d4",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #00478d 0%, #005eb8 100%)",
      },
      boxShadow: {
        ambient: "0 8px 24px rgba(0, 71, 141, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
