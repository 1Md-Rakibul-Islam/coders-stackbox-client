/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001419",
        secondary: "#40DB6C",
        accent: "#47B5FF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGreen: "rgb(66, 226, 111, 0.2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
