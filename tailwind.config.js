/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        footer: "850px",
        newMd: "970px",
        newLg: "1520px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
