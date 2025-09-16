// src/app/areas-de-atuacao/[slug]/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { sanityClient } from '@/lib/sanity.client'; // 1. Importar o cliente
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react'; // 2. Importar o Renderizador

// 3. Definir o tipo de dados para a página de detalhe
interface AreaDetail {
  title: string;
  content: any; // O Portable Text é um tipo complexo, 'any' é seguro aqui.
}

// 4. Definir a consulta GROQ para buscar UMA área específica pelo slug
const query = groq`*[_type == "areaDeAtuacao" && slug.current == $slug][0] {
  title,
  content
}`;

// 5. Remover completamente o objeto estático 'const areasData = {...}'

// 6. Definir o tipo dos parâmetros que a página recebe
type PageProps = {
  params: {
    slug: string;
  }
}

// 7. A página agora é 'async' e recebe 'params'
export default async function AreaDetailPage({ params }: PageProps) {
  const { slug } = params;
  
  // 8. Buscar os dados específicos desta página no CMS
  const area: AreaDetail = await sanityClient.fetch(query, { slug });

  // Bloco "Não Encontrado" (Atualizado para Shadcn Button)
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

  // Bloco Principal (Atualizado com botão Voltar)
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* BOTÃO VOLTAR ADICIONADO AQUI */}
        <Button asChild variant="ghost" className="mb-4 text-muted-foreground">
          <Link href="/areas-de-atuacao">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Áreas de Atuação
          </Link>
        </Button>
        
        {/* 9. Renderizar o título vindo do CMS */}
        <h1 className="text-4xl font-bold mb-8">{area.title}</h1>
        
        {/* 10. Usar o componente PortableText para renderizar o conteúdo do CMS */}
        <div className="prose lg:prose-xl max-w-none dark:prose-invert space-y-4">
          <PortableText value={area.content} />
        </div>
      </div>
    </section>
  );
}

// 11. Adicionar Revalidação (ISR)
export const revalidate = 60;