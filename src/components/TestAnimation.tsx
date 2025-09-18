"use client";

import { AnimatedSection } from "./motion/AnimatedSection";

export function TestAnimation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Teste 1: Fade In Up */}
        <AnimatedSection
          variant="fadeInUp"
          className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ✅ Teste 1: Fade In Up
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Se você consegue ver este texto com uma animação suave vindo de
            baixo para cima, o Framer Motion está funcionando perfeitamente!
          </p>
        </AnimatedSection>

        {/* Teste 2: Fade In Left */}
        <AnimatedSection
          variant="fadeInLeft"
          delay={0.2}
          className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300 mb-4">
            ✅ Teste 2: Fade In Left
          </h2>
          <p className="text-blue-700 dark:text-blue-400">
            Esta seção deve animar da esquerda para a direita com um pequeno
            delay.
          </p>
        </AnimatedSection>

        {/* Teste 3: Scale In */}
        <AnimatedSection
          variant="scaleIn"
          delay={0.4}
          className="p-8 bg-green-50 dark:bg-green-900/20 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-green-900 dark:text-green-300 mb-4">
            ✅ Teste 3: Scale In
          </h2>
          <p className="text-green-700 dark:text-green-400">
            Esta seção deve aparecer com um efeito de escala (zoom) suave.
          </p>
        </AnimatedSection>

        {/* Instruções */}
        <div className="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
            📋 Como Testar
          </h3>
          <p className="text-yellow-800 dark:text-yellow-400">
            Role a página para cima e para baixo várias vezes.
            <br />
            Você deve ver as animações acontecendo quando cada seção entra na
            tela.
          </p>
        </div>
      </div>
    </div>
  );
}
