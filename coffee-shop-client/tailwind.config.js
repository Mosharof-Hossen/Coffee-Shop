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
      backgroundImage: {
        'nav-c': "url('./src/assets/more/15.jpg')",
        'banner-bg': "url('./src/assets/more/3.png')"
      },
      colors: {
        'primary-c': "#242222",
        'primary-b-c': "#D2B48C",
        'primary-t-c': "#374151"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}

