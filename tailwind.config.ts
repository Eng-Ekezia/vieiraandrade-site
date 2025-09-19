// tailwind.config.ts

import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class", // 👈 força o dark mode baseado em classe
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
  // ATUALIZAÇÃO PRINCIPAL AQUI: Import ES modules ao invés de require
  plugins: [tailwindcssAnimate],
};

export default config;
