/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app.vue", "pages/**", "components/**", "layouts/**"],
  theme: {
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    screens: {
      sm: "460px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "rgb(var(--background) / <alpha-value>)",
      text: "rgb(var(--text) / <alpha-value>)",
      accent: "#43a4ff",
    },
    extend: {},
  },
  plugins: [],
};
