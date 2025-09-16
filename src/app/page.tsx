// src/app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

// 1. Importar Sanity
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

// 2. Definir Tipos
interface PageHomeData {
  heroTitle: string;
  heroSubtitle: string;
  ctaTitle: string;
  ctaText: string;
}
interface AreaSummary {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
}

// 3. Definir as Queries (para a Página Home e para os Cards de Áreas)
const pageHomeQuery = groq`*[_type == "pageHome" && _id == "pageHome"][0]`;
const areasQuery = groq`*[_type == "areaDeAtuacao"] | order(title asc) {
  _id,
  title,
  description,
  slug
}`;

// 4. A Homepage (que já era um Server Component) agora é Assíncrona
export default async function Home() {
  
  // 5. Fazer fetch de AMBAS as queries em paralelo
  const [pageData, areas]: [PageHomeData, AreaSummary[]] = await Promise.all([
    sanityClient.fetch(pageHomeQuery),
    sanityClient.fetch(areasQuery)
  ]);
  
  // O array estático 'const areas = [...]' foi removido.

  return (
    <>
      {/* Seção Hero (Agora Dinâmica) */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          {pageData.heroTitle}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {pageData.heroSubtitle}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contato">Fale com um Especialista</Link>
          </Button>
        </div>
      </section>

      {/* Seção "Como Podemos Ajudar?" (Agora Dinâmica) */}
      <section className="py-20 bg-muted/40 border-t border-b">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Podemos Ajudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 6. Renderiza os cards buscados do CMS */}
            {areas.map((area) => (
              <Card key={area._id} className="flex flex-col text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow">{area.description}</CardDescription>
                  <Button asChild variant="link" className="mt-6">
                    <Link href={`/areas-de-atuacao/${area.slug.current}`}>
                      Saiba Mais
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Seção CTA "Compromisso e Confiança" (Agora Dinâmica) */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            {pageData.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {pageData.ctaText}
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/sobre">
                Conheça Nossa História
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

// 7. Adicionar Revalidação (ISR)
export const revalidate = 60;