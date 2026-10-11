/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b2545',
          dark: '#061527',
          light: '#133b6b',
        },
        teal: {
          accent: '#0d9488',
          light: '#14b8a6',
          muted: '#f0fdfa',
        },
        rose: {
          accent: '#e11d48',
          light: '#f43f5e',
          muted: '#fff1f2',
        },
        gold: {
          accent: '#d97706',
          muted: '#fef3c7',
        },
        dark: {
          slate: '#0f172a',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f1f5f9',
          page: '#f8fafc',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '20px',
        'xl': '28px',
      },
      boxShadow: {
        'card': '0 4px 16px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 35px -10px rgba(15, 23, 42, 0.12)',
        'glow-teal': '0 10px 25px -5px rgba(13, 148, 136, 0.3)',
        'glow-rose': '0 10px 25px -5px rgba(225, 29, 72, 0.3)',
      }
    },
  },
  plugins: [],
}
