const { drop } = require("lodash");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        title: "var(--color-txt-title)",
        subtitle: "var(--color-txt-subtitle)",
        primary: "var(--color-txt-primary)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        section: "var(--color-bg-section)",
        secondary: "var(--color-bg-secondary)",
        "dropdown-active": "var(--color-bg-dropdown-active)",
      },
      borderColor: {
        error: "var(--color-bd-error)",
      },
    },
  },
  plugins: [],
};
