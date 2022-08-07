const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "summit": "#DADDF6",
        "fields": "#F1F0D7",
        "waterfall": "#D9EEFF",
        "meadows": "#E7FFE0",
        "farmland": "#FFDAE4",
        "offshore": "#FFEBD9",
        "skyline": "#FBE8FF"
      }
    },
  },
  plugins: [],
}

/*
#4d7c0f
#5E5E2F
#38bdf8
#075985
#f472b6
#fb923c
#cffafe
*/