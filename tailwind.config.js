/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Lora', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: {
          light: '#0A1929',
          grey: '#102A43',
        },
        navy: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0087FF',
          600: '#006FCC',
          700: '#005799',
          800: '#003F66',
          900: '#102A43',
          950: '#0A1929',
        },
        teal: {
          50: '#E6FFFA',
          100: '#B3FFF5',
          200: '#80FFEF',
          300: '#4DFFE9',
          400: '#1AFFE3',
          500: '#00E6CC',
          600: '#00B3A0',
          700: '#008073',
          800: '#004D47',
          900: '#001A1A',
        },
        blue: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0087FF',
          600: '#006FCC',
          700: '#005799',
          800: '#003F66',
          900: '#002A44',
        },
        cyan: {
          50: '#E6FFFF',
          100: '#B3FFFF',
          200: '#80FFFF',
          300: '#4DFFFF',
          400: '#1AFFFF',
          500: '#00E6E6',
          600: '#00B3B3',
          700: '#008080',
          800: '#004D4D',
          900: '#001A1A',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        text: {
          body: '#CBD5E1',
          heading: '#FFFFFF',
          light: '#94A3B8',
          accent: '#00E6CC',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00E6CC 0%, #0087FF 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #00B3A0 0%, #006FCC 100%)',
        'gradient-navy': 'linear-gradient(135deg, #102A43 0%, #0A1929 100%)',
        'gradient-teal': 'linear-gradient(135deg, #00E6CC 0%, #00B3A0 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #0A1929 0%, #102A43 50%, #0A1929 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(0, 230, 204, 0.1) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'cyber-flicker': 'cyberFlicker 0.1s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 230, 204, 0.3), 0 0 40px rgba(0, 230, 204, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 230, 204, 0.5), 0 0 60px rgba(0, 230, 204, 0.2)' 
          }
        },
        pulseGlow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 135, 255, 0.4), inset 0 0 20px rgba(0, 135, 255, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(0, 135, 255, 0.6), inset 0 0 30px rgba(0, 135, 255, 0.2)' 
          }
        },
        cyberFlicker: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.95' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(0, 230, 204, 0.4), 0 0 40px rgba(0, 230, 204, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 230, 204, 0.5), 0 0 80px rgba(0, 230, 204, 0.3)',
        'glow-blue': '0 0 20px rgba(0, 135, 255, 0.4), 0 0 40px rgba(0, 135, 255, 0.2)',
        'glow-blue-lg': '0 0 40px rgba(0, 135, 255, 0.5), 0 0 80px rgba(0, 135, 255, 0.3)',
        'cyber': '0 0 10px rgba(0, 230, 204, 0.5), inset 0 0 10px rgba(0, 230, 204, 0.1)',
        'cyber-lg': '0 0 20px rgba(0, 230, 204, 0.6), inset 0 0 20px rgba(0, 230, 204, 0.2)',
      },
      backdropBlur: {
        'cyber': '12px',
      }
    },
  },
  plugins: [],
};