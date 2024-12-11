/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513',
          50: '#FCF5E5',
          100: '#F8E6CC',
          200: '#ECC699',
          300: '#DFA666',
          400: '#CD8033',
          500: '#8B4513',
          600: '#703810',
          700: '#552A0C',
          800: '#3A1C08',
          900: '#1F0E04',
        },
        amber: {
          DEFAULT: '#FFA500',
          50: '#FFF8E6',
          100: '#FFE5B2',
          200: '#FFD27F',
          300: '#FFBF4C',
          400: '#FFAC19',
          500: '#FFA500',
          600: '#CC8400',
          700: '#996300',
          800: '#664200',
          900: '#332100',
        },
        brown: {
          DEFAULT: '#795548',
          50: '#EFEBE9',
          100: '#D7CCC8',
          200: '#BCAAA4',
          300: '#A1887F',
          400: '#8D6E63',
          500: '#795548',
          600: '#6D4C41',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        },
        neutral: {
          DEFAULT: '#F5F5F5',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(139, 69, 19, 0.1)',
      },
    },
  },
  plugins: [],
};