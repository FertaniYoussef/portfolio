/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        roman: {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#faf8f8',
          300: '#f5f2f2',
          400: '#ede8e8',
          500: '#d6d0d0',
          600: '#b8b0b0',
          700: '#9a8f8f',
          800: '#7c6e6e',
          900: '#5e4d4d',
        }
      },
      animation: {
        'grow-height': 'growHeight 2s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'mode-transition': 'modeTransition 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'sunrise': 'sunrise 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'sunset': 'sunset 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        growHeight: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #64ffda, 0 0 10px #64ffda, 0 0 15px #64ffda' },
          '100%': { boxShadow: '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda' },
        },
        modeTransition: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0', transform: 'scale(1.5)' },
        },
        sunrise: {
          '0%': { 
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
            opacity: '1'
          },
          '100%': { 
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 100%)',
            opacity: '0'
          },
        },
        sunset: {
          '0%': { 
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
            opacity: '0'
          },
          '100%': { 
            background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
            opacity: '1'
          },
        },
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'roman': ['Playfair Display', 'Times New Roman', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(100, 255, 218, 0.3)',
        'glow-lg': '0 0 40px rgba(100, 255, 218, 0.4)',
        'roman': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'roman-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}