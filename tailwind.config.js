/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'neon-pink': '#db2777',
        'neon-cyan': '#22d3ee',
        'neon-purple': '#a855f7',
      },
    },
  },
  plugins: [],
}

