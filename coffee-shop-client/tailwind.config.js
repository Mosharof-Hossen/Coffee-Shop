/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "raleway-c": '"Raleway", sans-serif',
        'rancho-c': '"Rancho", cursive'
      },
      backgroundImage:{
        'nav-c' : "url('./src/assets/more/15.jpg')"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}

