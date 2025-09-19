// src/app/not-found.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection variant="scaleIn" delay={0.1}>
            <div className="text-8xl sm:text-9xl font-bold text-primary/20 mb-8">
              404
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Página Não Encontrada
            </h1>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.3}>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              A página que você está procurando não existe ou foi movida.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fadeInUp" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Voltar ao Início
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link
                  href="/areas-de-atuacao"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Ver Áreas de Atuação
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
