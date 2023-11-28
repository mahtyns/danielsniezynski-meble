/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" ,"./meble.html", "./tarasy.html",
    "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        'main-white': '#f9f9f9',
        'main-black': '#171717',
        'special-green': '#17372e',
        'special-green-hover': '#2c6d5a',
        'cream': '#ecece8'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        crimson: ['Crimson Text', 'serif']
      },
      height: {
        lg: '900px',
        md: '550px',
        sm: '450px',
        xs: '250px'
      }
    },
  },
  plugins: [],
}

