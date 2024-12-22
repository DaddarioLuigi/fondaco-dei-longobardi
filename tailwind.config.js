/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#d8b74b',    // Main brand color
        'brand-secondary': '#2C3E50',  // Dark blue, now as secondary color
        'brand-accent': '#ECF0F1',     // Light gray, for background elements
        'brand-text': '#34495E',       // Grayish blue, for main text
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

