/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        noir:  '#0D0D0D',
        gold:  '#C9A66B',
        rose:  '#D79E9E',
        marble:'#EFEAE6'
      }
    }
  },
  plugins: [],
} 