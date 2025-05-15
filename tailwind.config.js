/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        // Light theme
        light: {
          background: "#ffffff",
          backgroundAlt: "#f8f9fa",
          text: "#212529",
          textAlt: "#495057",
          accent: "#0466c8",
          accentAlt: "#0353a4",
          highlight: "#38b2ac",
          highlightAlt: "#4c51bf",
        },
        // Dark theme
        dark: {
          background: "#121212",
          backgroundAlt: "#1e1e1e",
          text: "#f8f9fa",
          textAlt: "#e9ecef",
          accent: "#4dabf7",
          accentAlt: "#228be6",
          highlight: "#9d4edd",
          highlightAlt: "#7209b7",
        },
        // Colorful theme
        colorful: {
          backgroundStart: "#6200ea",
          backgroundEnd: "#7c4dff",
          text: "#ffffff",
          textAlt: "#f8f9fa",
          accent: "#69f0ae",
          accentAlt: "#00e676",
          highlight: "#ffab40",
          highlightAlt: "#ff6e40",
        },
        // Cyberpunk theme
        cyberpunk: {
          background: "#0c0c14",
          backgroundAlt: "#15152e",
          text: "#eef3ff",
          textAlt: "#cad2ff",
          accent: "#fe00fe",
          accentAlt: "#cc00cc",
          highlight: "#00fefe",
          highlightAlt: "#66fcf1",
        },
        // Nature theme
        nature: {
          background: "#f0f7ee",
          backgroundAlt: "#e1edde",
          text: "#2c4129",
          textAlt: "#4b6043",
          accent: "#76a75e",
          accentAlt: "#5f8d4e",
          highlight: "#d1a568",
          highlightAlt: "#c2954a",
        },
        // Minimalist theme
        minimalist: {
          background: "#ffffff",
          backgroundAlt: "#f5f5f5",
          text: "#111111",
          textAlt: "#333333",
          accent: "#555555",
          accentAlt: "#777777",
          highlight: "#999999",
          highlightAlt: "#bbbbbb",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-left': 'slideLeft 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
} 