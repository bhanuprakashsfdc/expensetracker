// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-orb': 'moveOrb 15s alternate linear infinite',
      },
      keyframes: {
        moveOrb: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(var(--orb-width), calc(var(--orb-height) / 2))' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
