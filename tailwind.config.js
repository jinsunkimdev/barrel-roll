module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0B0D17",
        "pure-white": "#FFCC98",
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
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};
