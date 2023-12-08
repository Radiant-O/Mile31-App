/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainRed: '#DB2D2D',
        secondRed: '#e44848',
        inputBox: '#622828',
        whiteBtnBg: '#FFF2F9',
        infoBox: '#f1dfe1',
        bgBox: '#f0efef',
        borderLine: '#ddb9b9',
        borderBg: '#fff9f9'
      }
    },
  },
  plugins: [],
}