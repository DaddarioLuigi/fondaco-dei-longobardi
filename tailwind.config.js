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
        'brand-primary': '#d8b74b',
        'brand-secondary': '#2C3E50',
        'brand-accent': '#ECF0F1',
        'brand-text': '#34495E',
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'serif'],
        'sans': ['var(--font-raleway)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

