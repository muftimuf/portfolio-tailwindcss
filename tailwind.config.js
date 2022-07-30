/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "3vw",
    },
    extend: {
      colors: {
        primary: "#fd5d2c",
        primary50: "#ffe7e0",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
