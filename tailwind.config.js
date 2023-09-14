/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Dosis", "sans-serif"],
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [],
};
