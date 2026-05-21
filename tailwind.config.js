/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        accent: {
          fire: 'var(--accent-fire)',
          gold: 'var(--accent-gold)',
        },
        text: {
          primary: 'var(--text-primary)',
          muted: 'var(--text-muted)',
        },
        border: {
          subtle: 'var(--border-subtle)',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        nunito: ['"Nunito"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-fire': 'linear-gradient(to bottom right, #f5820d, #d15600)',
      }
    },
  },
  plugins: [],
}
