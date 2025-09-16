// src/app/areas-de-atuacao/[slug]/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { notFound } from 'next/navigation';

// --- Tipos de Dados ---
interface AreaDetail {
  title: string;
  content: PortableTextBlock[];
}

// ✅ A SUA SOLUÇÃO APLICADA AQUI: Interface explícita para as props da página
interface PageProps {
  params: {
    slug: string;
  };
}

// --- Função para Gerar Rotas Estáticas ---
export async function generateStaticParams() {
  const query = groq`*[_type == "areaDeAtuacao" && defined(slug.current)][] {
    "slug": slug.current
  }`;
  const slugs: { slug: string }[] = await sanityClient.fetch(query);
  
  return slugs.map(({ slug }) => ({
    slug,
  }));
}

// --- Função de Fetching de Dados Dedicada ---
async function getAreaData(slug: string): Promise<AreaDetail | null> {
  const query = groq`*[_type == "areaDeAtuacao" && slug.current == $slug][0] {
    title,
    content
  }`;
  const area = await sanityClient.fetch<AreaDetail | null>(query, { slug });
  return area;
}

// --- Componente da Página com a Tipagem Correta ---
export default async function AreaDetailPage({ params }: PageProps) {
  const area = await getAreaData(params.slug);

  if (!area) {
    notFound();
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-4 text-muted-foreground">
          <Link href="/areas-de-atuacao">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Áreas de Atuação
          </Link>
        </Button>
        
        <h1 className="text-4xl font-bold mb-8">{area.title}</h1>
        
        <div className="prose lg:prose-xl max-w-none dark:prose-invert space-y-4">
          <PortableText value={area.content} />
        </div>
      </div>
    </section>
  );
}

export const revalidate = 60;