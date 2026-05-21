/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFC107',
        neutral: {
          light: '#F5F5F5',
          soft: '#FAFAF8',
          medium: '#9E9E9E',
          dark: '#424242',
          ink: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'luxury': '0.625rem',
      },
      boxShadow: {
        'editorial': '0 1px 3px rgba(0,0,0,0.04), 0 20px 56px rgba(0,0,0,0.06)',
        'editorial-lg': '0 1px 4px rgba(0,0,0,0.06), 0 30px 80px rgba(0,0,0,0.1)',
        'editorial-hover': '0 2px 6px rgba(0,0,0,0.08), 0 36px 90px rgba(0,0,0,0.13)',
        'gold': '0 4px 14px rgba(255,193,7,0.2)',
        'gold-lg': '0 8px 28px rgba(255,193,7,0.3)',
      },
    },
  },
  plugins: [],
}
