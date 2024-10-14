/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        newMd: "970px",
        newLg: "1520px",
      },
    },
  },
  plugins: [],
};
