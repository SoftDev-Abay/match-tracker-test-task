/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading1-bold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading1-semibold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading2-semibold": [
        "30px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading4-medium": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "heading4-semibold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "body-normal": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "body1-bold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "base-regular": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-semibold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "base1-semibold": [
        "16px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "small-regular": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "small-semibold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "subtle-medium": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "subtle-semibold": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "600",
        },
      ],
      "tiny-medium": [
        "10px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "x-small-semibold": [
        "7px",
        {
          lineHeight: "9.318px",
          fontWeight: "600",
        },
      ],
    },
    extend: {
      colors: {
        white: "var(--color-white)",
        success: "var(--color-success)",
        muted: "var(--color-muted)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        "danger-muted": "var(--color-danger-muted)",
        "danger-disabled": "var(--color-danger-disabled)",
        "custom-gray": "var(--color-custom-gray)",
      },
      backgroundImage: {
        "card-primary": "linear-gradient(90deg, #0F1318 0%, #0A0E12 100%)",
        "card-secondary":
          "linear-gradient(90deg, #0B0F13 0%, #0F1318 52.4%, #0A0E12 100%)",
        "card-muted": "linear-gradient(90deg, #0A0E12 0%, #0F1318 100%)",
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "tactic-sans": ["Tactic Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
