/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],theme: {
    extend: {
      // custom widths
      width: {
        '503': '503px',
        '349': '349px',
        '451.41': '451.41px',
        '61.87': '61.87px',
      },
      // custom placeholder color
      placeholderColor: {
        'custom': '#004F30', // Replace with your desired color
      },
      // custom transform utilities
      transform: {
        translateX: '20px',
        translateY: '-20px',
        translateZ: '20px',
      },
      scale: {
        '-100': '-1',
    }
    },
  },
  plugins: [],
}