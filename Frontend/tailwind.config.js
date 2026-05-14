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
          DEFAULT: "#00a651", // Premium Emerald Green
          light: "#10b981",
          dark: "#059669",
        },
        secondary: {
          DEFAULT: "#f9fafb", // Very light gray for sections
          dark: "#f3f4f6",
        },
        accent: {
          gold: "#fbbf24",
          blue: "#3b82f6",
        },
        'rich-dark': {
          DEFAULT: "#1a1a1a",
          soft: "#4a4a4a",
          lighter: "#9ca3af",
        },
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
        'premium-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.06), 0 8px 20px -4px rgba(0, 0, 0, 0.03)',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'glow-pulse': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(188, 19, 254, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(188, 19, 254, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
