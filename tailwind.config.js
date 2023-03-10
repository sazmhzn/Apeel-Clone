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
      colors: {
        "offWhite": "#faf3e6", 
        "my-green": "#154726", 
        "banana": "#fce8bd",
        "banana-400": "#ffd550",
        "cilantro": "#266b47"
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  plugins: [],
};
