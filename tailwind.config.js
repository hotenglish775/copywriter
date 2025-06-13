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
          light: '#FAFAFA',
          grey: '#F5F5F5',
        },
        bronze: {
          50: '#FDF8F3',
          100: '#F9EFE1',
          200: '#F2DCC4',
          300: '#E8C4A0',
          400: '#DBA876',
          500: '#CDA274',
          600: '#A67C52',
          700: '#8B6B47',
          800: '#6B5238',
          900: '#4A3728',
        },
        slate: {
          50: '#F8F8F8',
          100: '#F1F1F1',
          200: '#E4E4E4',
          300: '#D1D1D1',
          400: '#B4B4B4',
          500: '#9A9A9A',
          600: '#818181',
          700: '#6A6A6A',
          800: '#5A5A5A',
          900: '#2D2D2D',
        },
        text: {
          body: '#1A1A1A',
          heading: '#000000',
        }
      },
      backgroundImage: {
        'gradient-bronze': 'linear-gradient(135deg, #CDA274 0%, #A67C52 100%)',
        'gradient-bronze-hover': 'linear-gradient(135deg, #DBA876 0%, #CDA274 100%)',
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
            boxShadow: '0 0 20px rgba(205, 162, 116, 0.3), 0 0 40px rgba(205, 162, 116, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(205, 162, 116, 0.5), 0 0 60px rgba(205, 162, 116, 0.2)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(205, 162, 116, 0.3)',
        'glow-lg': '0 0 40px rgba(205, 162, 116, 0.4)',
      }
    },
  },
  plugins: [],
};