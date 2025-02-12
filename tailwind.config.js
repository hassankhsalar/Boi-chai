/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'custombg': "url('https://i.ibb.co.com/qs0741w/stockbg.png')",
        // Example: 'hero-pattern': "url('/images/hero-pattern.svg')",
      },
      colors: {
        text: '#0e110d',
        background: '#e9edec',
        primary: '#819275',
        secondary: '#afbbbf',
        accent: '#8d92a5',
        gradientStart: '#819275',
        gradientEnd: '#afbbbf',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ], // Include light and dark themes
  },
};
