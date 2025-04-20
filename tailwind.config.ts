import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'horizon-green': '#28A745', // Green for buttons and headings
        'horizon-green-hover': '#218838', // Hover state
        'horizon-gray': '#333333', // Dark gray for text
        'horizon-light-gray': '#F5F5F5', // Light gray for form background
      },
      fontFamily: {
        'horizon': ['Roboto', 'sans-serif'], // Match the font style
      },
    },
  },
  plugins: [],
};

export default config;