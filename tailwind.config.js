/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'black':"#191d29",
      'green':"#9dfe00",
      "light":"#14d9e5",
      "white":"#ffffff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
