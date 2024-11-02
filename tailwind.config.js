/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "500px",
        footer: "850px",
        newMd: "970px",
        xm: "1200px",
        newLg: "1520px",
        xxl: "2000px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
