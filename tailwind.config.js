/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFF",
        "black": "000",
        "yellow": {
          55: "#FFD11A",
          60: "#FFD633",
          70: "#FFE066",
          80: "#FFEB99",
          90: "FFF5CC",
          95: "FFFAE5",
          97: "#FFFCF0",
          99: "#FBFBFE"
        },
        "dark": {
          8: "#141414",
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          25: "#404040",
          30: "#4D4D4D",
          35: "#595959",
          40: "#666666"
        },
        "gray": {
          50: "#7E7E81",
          60: "#98989A",
          70: "#B3B3B3",
          80: "#CCCCCC",
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
      },
      backgroundImage: {
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))'
      },
      fontFamily: {
        "kumbh": ['Kumbh Sans', 'sans-serif'],
        "inter": ['Inter', "sans-serif"]
      }
    },
  },
  plugins: [],
}

