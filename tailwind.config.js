/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '85' : '300px'
      },
      colors: {
        tomato: '#C41E3A',
        charcoal: '#333333', 
        cream: '#FFF8E1',   
        basil: '#2ECC71',   
        gold: '#F1C40F',    
      },
      fontFamily:{
        body: ['Vazirmatn']
      }
    },
  },
  plugins: [],
}

