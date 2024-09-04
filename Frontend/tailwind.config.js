/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs':'350px',
        'xs': '450px',
        'sm':'600px',
        'md':'768px',
        'lg':'956px',
        'xlg':"1024px",
        'xl':'1256px', 
        'xxl': '1440px' 
      }
    }
  },
  plugins: [],
}
