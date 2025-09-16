// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 força o dark mode baseado em classe
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      // Vamos adicionar animações de keyframes para o fade-in que usaremos depois
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  // ATUALIZAÇÃO PRINCIPAL AQUI: Carregando o plugin de animação do shadcn
  plugins: [require("tailwindcss-animate")],
};