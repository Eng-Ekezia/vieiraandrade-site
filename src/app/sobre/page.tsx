// src/app/sobre/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sanityClient, urlFor } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import type { Image as SanityImage } from "sanity";
// --- ÍCONES NOVOS IMPORTADOS ABAIXO ---
import {
  Scale,
  Users,
  Award,
  BookOpenCheck, // Trocado de BookOpen para BookOpenCheck
  Heart,
  CheckCircle,
  HeartHandshake, // Ícone novo
} from "lucide-react";

// Import dos componentes de animação
import { AnimatedSection } from "@/components/motion/AnimatedSection";

// --- Tipos de Dados (sem alteração) ---
interface Value {
  _key: string;
  icon: string;
  title: string;
  description: string;
}

interface Achievement {
  _key: string;
  number: string;
  text: string;
}

interface PageSobreData {
  title: string;
  mainImage: {
    alt: string;
    asset: SanityImage;
  };
  content: PortableTextBlock[];
  qualifications: string[];
  achievements: Achievement[];
  values: Value[];
  mission: {
    title: string;
    text: string;
  };
}

// --- Componente de Ícones Dinâmicos ATUALIZADO ---
// Mapeia o nome do ícone (string do Sanity) para o componente React
const iconMap: { [key: string]: React.ReactNode } = {
  Scale: <Scale className="h-8 w-8 text-primary" />,
  Users: <Users className="h-8 w-8 text-primary" />,
  Award: <Award className="h-8 w-8 text-primary" />,
  BookOpenCheck: <BookOpenCheck className="h-8 w-8 text-primary" />, // Atualizado
  HeartHandshake: <HeartHandshake className="h-8 w-8 text-primary" />, // Adicionado
  Heart: <Heart className="h-8 w-8 text-primary" />,
};

// --- Query (sem alteração) ---
const query = groq`*[_type == "pageSobre" && _id == "pageSobre"][0]{
  title,
  mainImage {
    alt,
    asset
  },
  content,
  qualifications,
  achievements,
  values,
  mission
}`;

export default async function SobrePage() {
  const data: PageSobreData = await sanityClient.fetch(query);

  // O resto do componente continua igual...
  return (
    <>
      {/* Hero Section com conteúdo do Sanity */}
      <section className="relative bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {data.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.3}>
              <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section - Dr. Vieira + Conteúdo do Sanity */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Foto do Dr. Vieira - DINÂMICA */}
            <AnimatedSection variant="fadeInLeft" delay={0.2}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {data.mainImage?.asset ? (
                    <Image
                      src={urlFor(data.mainImage.asset)
                        .width(1400)
                        .height(1800)
                        .quality(90)
                        .url()}
                      alt={data.mainImage.alt}
                      width={1400}
                      height={1800}
                      quality={90}
                      className="object-cover w-full h-[500px] lg:h-[600px] object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-[500px] lg:h-[600px] bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Imagem não disponível
                      </p>
                    </div>
                  )}
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary/10 rounded-full -z-10"></div>
              </div>
            </AnimatedSection>

            {/* Conteúdo do Sanity */}
            <div className="space-y-6">
              <AnimatedSection variant="fadeInRight" delay={0.3}>
                <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground dark:prose-invert">
                  <PortableText value={data.content} />
                </div>
              </AnimatedSection>

              {/* Qualificações - DINÂMICAS */}
              <AnimatedSection variant="fadeInRight" delay={0.5}>
                <div className="flex flex-wrap gap-4 pt-6">
                  {data.qualifications?.map((qualification) => (
                    <div
                      key={qualification}
                      className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full"
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">
                        {qualification}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - DINÂMICA */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Números que Falam por Si
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Resultados que demonstram nossa dedicação e competência
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {data.achievements?.map((achievement, index) => (
                <AnimatedSection
                  key={achievement._key || achievement.text}
                  variant="scaleIn"
                  delay={0.2 + index * 0.1}
                >
                  <div className="text-center p-6 bg-card rounded-lg border border-border/50 hover:shadow-md transition-all duration-300">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm lg:text-base font-medium text-muted-foreground">
                      {achievement.text}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - DINÂMICA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Nossos Valores
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Os princípios que norteiam nossa atuação e definem nosso
                  compromisso com a excelência
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {data.values?.map((value, index) => (
                <AnimatedSection
                  key={value._key || value.title}
                  variant="fadeInUp"
                  delay={0.2 + index * 0.1}
                >
                  <div className="p-8 bg-card rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300 group hover:border-primary/30">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        {iconMap[value.icon] || (
                          <Heart className="h-8 w-8 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - DINÂMICA */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {data.mission?.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {data.mission?.text}
              </p>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.5}>
              <Button asChild size="lg" className="text-lg px-8 py-4 h-auto">
                <Link href="/contato">Fale Conosco</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
