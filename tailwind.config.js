/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sanskrit': ['Noto Sans Devanagari', 'serif'],
      },
      animation: {
        'bounce-delayed': 'bounce 1s infinite 0.1s',
        'bounce-more-delayed': 'bounce 1s infinite 0.2s',
      },
    },
  },
  plugins: [],
};