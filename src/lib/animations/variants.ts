// Variantes de animação reutilizáveis
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Animações de hover para botões e links
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const cardHover = {
  y: -8,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  transition: { duration: 0.3, ease: "easeOut" },
};
