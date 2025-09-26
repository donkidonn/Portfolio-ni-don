/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sifonn: ["sifonn", "sans-serif"],
        neauebold: ["neauebold", "sans-serif"],
        neauereg: ["neauereg", "sans-serif"],
      },
    },
  },
  plugins: [],
};
