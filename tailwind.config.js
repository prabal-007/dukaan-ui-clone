/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#146eb4",
          700: "#0e4f82"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif", "system-ui"]
      }
    },
  },
  plugins: [],
}
