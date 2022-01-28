module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0B0D17",
        "pure-white": "#FFFFFF",
        "nav-font": "#FF914D",
        "comfort-green": "#153C34",
        "comfort-white": "#fbe9b7",
        "comfort-pink": "#E6BDAF",
        "comfort-yellow": "#FCE153",
        "comfort-orange": "#F59F51",
      },
      fontFamily: {
        paladise: ["Paladise", "sans-serif"],
        paladise2: ["Paladise-Bonus", "sans-serif"],
        burtons: ["Burtons"],
        burtons2: ["Burtons-Script"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
