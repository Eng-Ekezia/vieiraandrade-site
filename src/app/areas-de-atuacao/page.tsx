// src/app/areas-de-atuacao/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Imports do Sanity
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

// Import dos componentes de animação
import { AnimatedSection } from "@/components/motion/AnimatedSection";

// Tipos
interface AreaSummary {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
}

// Query
const query = groq`*[_type == "areaDeAtuacao"] | order(title asc) {
  _id,
  title,
  description,
  slug
}`;

export default async function AreasPage() {
  const areas: AreaSummary[] = await sanityClient.fetch(query);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título Principal */}
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Áreas de Atuação
              </h1>
            </AnimatedSection>

            {/* Subtítulo */}
            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <p className="text-xl sm:text-2xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
                Nossa expertise a serviço da defesa dos seus direitos. Conheça
                nossas especialidades.
              </p>
            </AnimatedSection>

            {/* Divisor Visual */}
            <AnimatedSection variant="scaleIn" delay={0.5}>
              <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Seção de Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Grid de Cards das Áreas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {areas.map((area, index) => (
              <AnimatedSection
                key={area._id}
                variant="fadeInUp"
                delay={0.2 + index * 0.1}
                className="group"
              >
                <Link href={`/areas-de-atuacao/${area.slug.current}`}>
                  <Card
                    className="h-full border border-border/50 shadow-md hover:shadow-lg transition-all duration-300 bg-card
                    hover:bg-accent/5 hover:border-primary/30
                    md:hover:scale-105
                    cursor-pointer group-hover:shadow-xl
                  "
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors flex-1 pr-2">
                          {area.title}
                        </CardTitle>
                        <div className="flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                          <ArrowRight className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors mb-6">
                        {area.description}
                      </CardDescription>

                      {/* Indicador Visual */}
                      <div className="mt-6 pt-4 border-t border-border/30">
                        <div className="flex items-center text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                          <span>Ver detalhes</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Precisa de Ajuda Jurídica?
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Nossa equipe está pronta para analisar seu caso e oferecer a
                melhor solução jurídica.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.5}>
              <Button asChild size="lg" className="text-lg px-8 py-4 h-auto">
                <Link href="/contato">Agendar Consulta</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
