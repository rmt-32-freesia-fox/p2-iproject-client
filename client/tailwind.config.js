/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {  
    extend: {
    fontFamily: {
      // 'poppins': ['"Poppins"', 'sans serif'],
      'raleway': ['"Raleway"', 'sans serif'],
    },
  },   
  },
  // darkMode:'class',
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      // addVariant('child-hover', '& > *:hover');
    },
    require('flowbite/plugin'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light"],
  },
}

 
