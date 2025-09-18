// src/components/motion/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/animations/useScrollAnimation";
import { useReducedMotion } from "@/hooks/animations/useReducedMotion";

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  delay?: number;
  className?: string;
}

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

// Versão simplificada para usuários que preferem movimento reduzido
const reducedMotionVariants = {
  fadeInUp: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeInLeft: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeInRight: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export function AnimatedSection({
  children,
  variant = "fadeInUp",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation();
  const prefersReducedMotion = useReducedMotion();

  const selectedVariants = prefersReducedMotion
    ? reducedMotionVariants
    : variants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariants[variant]}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 0.6,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
