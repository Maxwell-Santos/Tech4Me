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
        primary: "#00b7ff45",
        btn: "#ffb95a",
        card: "#ffffff"
      },
      textColor: {
        "title-primary": "#ffffff",
        "btn-text": "#ffffff",
        "title-secondary": "#357ab3",
        "title-card": "#f8ab3e"
      }
    },
  },
  plugins: [],
}

