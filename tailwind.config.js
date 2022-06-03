module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}"
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@themesberg/flowbite/plugin')
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require("tailwind-scrollbar-variants"),
],
variants: {
  scrollbar: ['rounded','dark']
},
important: true,
}