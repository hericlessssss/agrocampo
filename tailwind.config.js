/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#025C3F',    // Darker forest green
        secondary: '#014B33',  // Even darker shade for depth
        accent: '#FFD700',     // Gold for contrast
        'footer-bg': '#012821', // Darker than secondary for footer
        'footer-text': '#F8F9FA', // Light text for footer
        'footer-hover': '#4ADE80', // Bright green for hover states
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'accent': '0 4px 14px 0 rgba(255, 215, 0, 0.25)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};