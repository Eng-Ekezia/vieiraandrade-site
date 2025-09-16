// src/app/sobre/page.tsx
import { sanityClient } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
// 1. Importar o tipo PortableTextBlock
import type { PortableTextBlock } from '@portabletext/types';

// 2. Definir o tipo de dados com o tipo correto
interface PageSobreData {
  title: string;
  content: PortableTextBlock[]; // Substituir 'any' por 'PortableTextBlock[]'
}

const query = groq`*[_type == "pageSobre" && _id == "pageSobre"][0]`;

export default async function SobrePage() {
  const data: PageSobreData = await sanityClient.fetch(query);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          {data.title}
        </h1>
        <div className="prose lg:prose-xl max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert">
          <PortableText value={data.content} />
        </div>
      </div>
    </section>
  );
}

export const revalidate = 60;