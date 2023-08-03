/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       width: {
        '503': '503px',
        '349': '349px',
        '451.41': '451.41px',
        '61.87': '61.87px',

    },
    },
  },
  plugins: [],
}
