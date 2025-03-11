/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'prometheus-bg': '#244855',        // Dark Blue
        'prometheus-text': '#FBE9D0',      // Beige
        'prometheus-accent': '#E64833',    // Orange
        'prometheus-accent-darker': '#874F41', // Brown
        'prometheus-light-blue': '#90AEAD', //Light Blue
        // Light theme alternatives
        'light-bg': '#f8f9fa',
        'light-text': '#333333',
        'light-card': '#ffffff',
        'light-accent': '#E64833',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 12s linear infinite reverse',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
