/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        card: '#1A1A1A',
        accent: '#6C63FF',
        accentAlt: '#00D4FF',
        textPrimary: '#FFFFFF',
        textSecondary: '#A0A0A0',
        border: '#2A2A2A',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #6C63FF, 0 0 10px #6C63FF' },
          '100%': { boxShadow: '0 0 20px #6C63FF, 0 0 40px #6C63FF' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 50% 50%, #6C63FF15 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
