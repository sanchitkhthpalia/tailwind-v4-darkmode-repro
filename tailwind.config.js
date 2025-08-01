/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  darkMode: "class", // we want to reproduce the issue with custom dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
