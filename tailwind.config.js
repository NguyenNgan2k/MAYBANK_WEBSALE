/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      textColor: {
        subtitle: "var(--color-txt-subtitle)",
      },
      backgroundColor: {},
      borderColor: {},
    },
  },
  plugins: [],
};
