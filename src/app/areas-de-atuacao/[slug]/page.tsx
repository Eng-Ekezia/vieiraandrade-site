// src/app/areas-de-atuacao/[slug]/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { notFound } from 'next/navigation'; // Importar a função notFound

// --- Tipos de Dados ---
interface AreaDetail {
  title: string;
  content: PortableTextBlock[];
}

// --- Função para Gerar Rotas Estáticas (ESSENCIAL PARA O BUILD) ---
// Esta função informa ao Next.js quais páginas de slug ele precisa construir.
export async function generateStaticParams() {
  const query = groq`*[_type == "areaDeAtuacao" && defined(slug.current)][] {
    "slug": slug.current
  }`;
  const slugs: { slug: string }[] = await sanityClient.fetch(query);
  
  // Retornamos um array de objetos, onde cada objeto tem a chave 'slug'
  return slugs.map(({ slug }) => ({
    slug,
  }));
}


// --- Função de Fetching de Dados Dedicada ---
// Isolamos a lógica de buscar os dados do CMS em sua própria função.
async function getAreaData(slug: string): Promise<AreaDetail | null> {
  const query = groq`*[_type == "areaDeAtuacao" && slug.current == $slug][0] {
    title,
    content
  }`;
  const area = await sanityClient.fetch<AreaDetail | null>(query, { slug });
  return area;
}


// --- Componente da Página (Agora mais simples) ---
export default async function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = await getAreaData(params.slug);

  // Se a área não for encontrada, renderiza a página 404.
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