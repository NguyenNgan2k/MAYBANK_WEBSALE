const { drop } = require("lodash");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        title: "var(--color-txt-title)",
        subtitle: "var(--color-txt-subtitle)",
        primary: "var(--color-txt-primary)",
        white: "var(--color-txt-white)",
        green: "var(--color-txt-green)",
        violet: "var(--color-txt-violet)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        section: "var(--color-bg-section)",
        secondary: "var(--color-bg-secondary)",
        "dropdown-active": "var(--color-bg-dropdown-active)",
        table: "var(--color-bg-table)",
      },
      borderColor: {
        error: "var(--color-bd-error)",
        td: "var(--color-bd-td)",
      },
    },
  },
  plugins: [],
};
