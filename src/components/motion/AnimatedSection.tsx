"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/animations/useScrollAnimation";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
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

export function AnimatedSection({
  children,
  variant = "fadeInUp",
  delay = 0,
  className,
  ...motionProps
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
