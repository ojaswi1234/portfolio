/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        merienda: ['"Merienda"', 'cursive'],
        n: ['Impact', 'fantasy'],
        m:['Jazz LET', 'fantasy'],
      },
      boxShadow: {
        a: ['0 0 44px rgba(0,0,0,2)']
      },
    },
  },
  plugins: [],
};
