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
    extend: {},
  },
  plugins: [],
};
