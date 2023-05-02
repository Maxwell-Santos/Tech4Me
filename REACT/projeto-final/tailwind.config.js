/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Poppins, sans-serif'
      },
      backgroundColor: {
        primary: "#daf5ff",
        btn: "#f8ab3e",
        "btn-hover": "#f59d23",
        card: "#ffffff"
      },
      textColor: {
        "title-primary": "#ffffff",
        "btn-text": "#ffffff",
        "title-secondary": "#357ab3",
        "title-card": "#f8ab3e",
        "nav-link-hover": "#f8ab3e",
        "price-card": "#f8ab3e",
      },
      keyframes:{
        "enviar": {
          '10%': {transform: 'translateX(-10px)'},
          '100%': {transform: 'translateX(200px)'},
        }
      },
      animation:{
        "enviar-form": "enviar 1s ease"
      }
    },
  },
  plugins: [],
}

