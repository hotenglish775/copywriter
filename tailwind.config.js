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
          light: '#FFFFFF',
          grey: '#F8FAFC',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
          950: '#0A1929',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
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
          body: '#334155',
          heading: '#0F172A',
          light: '#64748B',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #0D9488 0%, #2563EB 100%)',
        'gradient-navy': 'linear-gradient(135deg, #243B53 0%, #102A43 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
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
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.3), 0 0 40px rgba(20, 184, 166, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(20, 184, 166, 0.5), 0 0 60px rgba(20, 184, 166, 0.2)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(15, 23, 42, 0.08)',
        'soft-lg': '0 8px 30px rgba(15, 23, 42, 0.12)',
        'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-lg': '0 0 40px rgba(20, 184, 166, 0.4)',
      }
    },
  },
  plugins: [],
};