/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'likeAnimation': 'likeKeyframe 1s linear',
      },
      keyframes: {
        likeKeyframe: {
          '0%': {scale: 0, opacity: 1,},
          '100%': {scale: 1, opacity: 0,}
        },
      },
    },
  },
  plugins: [],
}
