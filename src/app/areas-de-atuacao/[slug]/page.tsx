// src/app/areas-de-atuacao/[slug]/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { notFound } from "next/navigation";

// Import dos componentes de animação
import { AnimatedSection } from "@/components/motion/AnimatedSection";

// Tipos de Dados
interface AreaDetail {
  title: string;
  content: PortableTextBlock[];
}

// Função para Gerar Rotas Estáticas
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = groq`*[_type == "areaDeAtuacao" && defined(slug.current)][] {
    "slug": slug.current
  }`;
  const slugs: { slug: string }[] = await sanityClient.fetch(query);
  return slugs.map(({ slug }) => ({ slug }));
}

// Função de Fetching de Dados
async function getAreaData(slug: string): Promise<AreaDetail | null> {
  const query = groq`*[_type == "areaDeAtuacao" && slug.current == $slug][0] {
    title,
    content
  }`;
  return sanityClient.fetch(query, { slug });
}

// Página
export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = await getAreaData(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      {/* Navigation Header */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fadeInLeft" delay={0.1}>
            <Button asChild variant="ghost" className="hover:bg-accent">
              <Link
                href="/areas-de-atuacao"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para Áreas de Atuação
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeInUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                {area.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.4}>
              <div className="w-24 h-1 bg-primary mb-12"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground">
                <PortableText value={area.content} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Precisa de Ajuda com {area.title}?
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Nossa equipe especializada está pronta para analisar seu caso e
                oferecer a melhor solução.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.5}>
              <Button asChild size="lg" className="text-lg px-8 py-4 h-auto">
                <Link href="/contato">Falar com Especialista</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
