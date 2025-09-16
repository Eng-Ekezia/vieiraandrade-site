// src/app/areas-de-atuacao/[slug]/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

interface AreaDetail {
  title: string;
  content: PortableTextBlock[];
}

const query = groq`*[_type == "areaDeAtuacao" && slug.current == $slug][0] {
  title,
  content
}`;

// Definindo o tipo explicitamente para resolver o erro local do TypeScript
export default async function AreaDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  const area: AreaDetail = await sanityClient.fetch(query, { slug });

  if (!area) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Área de Atuação Não Encontrada</h1>
        <p className="mt-4 text-muted-foreground">O conteúdo que você procura não foi localizado.</p>
        <Button asChild className="mt-6">
          <Link href="/areas-de-atuacao">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ver todas as áreas
          </Link>
        </Button>
      </div>
    );
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