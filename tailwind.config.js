/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/register.html"],
  theme: {
    extend: {
      colors: {
        primary: "#a5f3fc",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
