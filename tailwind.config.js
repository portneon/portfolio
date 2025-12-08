/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // I recommend using Inter (sans) and JetBrains Mono (mono) from Google Fonts
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      // If you want specific custom colors, add them here, 
      // but the code above uses standard Tailwind Slate/Indigo palette
    },
  },
  plugins: [],
}