/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Orange: 'hsl(25, 97%, 53%)',
        lightGrey: "hsl(217, 12%, 63%)",
        lighterGrey: "hsla(217, 12%, 63%, 0.1)",
        darkBlue: 'hsl(213, 19%, 18%)',
        varyDarkBlue: 'hsl(216, 12%, 8%)'
      },
      fontFamily: {
        'Overpass': "Overpass"
      },
      spacing: {
        '27': '27rem'
      }
    },
  },
  plugins: [],
}

