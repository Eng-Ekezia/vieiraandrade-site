// src/app/sobre/page.tsx
// 1. Importar Cliente, PortableText e GROQ
import { sanityClient } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';

// 2. Definir o tipo de dados
interface PageSobreData {
  title: string;
  content: any; // Tipo para o Portable Text
}

// 3. Query para buscar o documento único 'pageSobre'
const query = groq`*[_type == "pageSobre" && _id == "pageSobre"][0]`;

// 4. Transformar a página num Server Component Assíncrono
export default async function SobrePage() {
  
  // 5. Buscar os dados do CMS
  const data: PageSobreData = await sanityClient.fetch(query);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        {/* 6. Renderizar o Título Dinâmico */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          {data.title}
        </h1>
        {/* 7. Renderizar o Conteúdo Dinâmico (Portable Text) */}
        <div className="prose lg:prose-xl max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert">
          <PortableText value={data.content} />
        </div>
      </div>
    </section>
  );
}

// 8. Adicionar Revalidação (ISR)
export const revalidate = 60;