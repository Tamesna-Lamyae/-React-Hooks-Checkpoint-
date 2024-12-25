// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ajoutez ici les chemins vers vos fichiers où Tailwind sera utilisé
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customGray: '#F3F4F6',
        customGreen: '#10B981',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
