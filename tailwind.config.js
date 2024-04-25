/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        encode: ["Encode Sans", "sans-serif"],
        source: ["Source Sans Pro", "monospace"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
