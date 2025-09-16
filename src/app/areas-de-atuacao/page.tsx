// src/app/areas-de-atuacao/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

// 1. Importar o nosso cliente Sanity
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

// 2. Definir o tipo de dados que esperamos do CMS
interface AreaSummary {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
}

// 3. Definir a consulta GROQ para buscar apenas os dados necessários para os cards
const query = groq`*[_type == "areaDeAtuacao"] | order(title asc) {
  _id,
  title,
  description,
  slug
}`;

// 4. Transformar a página num Async Component para permitir o fetch de dados
export default async function AreasPage() {
    
    // 5. Buscar os dados diretamente do Sanity (isto acontece no servidor)
    const areas: AreaSummary[] = await sanityClient.fetch(query);
    
    // O array estático 'const areas = [...]' foi removido.

    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Áreas de Atuação</h1>
                <p className="text-lg text-muted-foreground"> 
                    Nossa expertise a serviço da defesa dos seus direitos. Conheça nossas especialidades.
                </p>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto space-y-8">
                {/* 6. O map agora usa os dados dinâmicos do CMS */}
                {areas.map((area) => (
                    <Card key={area._id} className="transition-shadow hover:shadow-lg">
                        
                        <CardHeader>
                            <CardTitle>{area.title}</CardTitle>
                            <CardDescription className="pt-2">{area.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Button asChild variant="link" className="p-0 h-auto"> 
                                {/* 7. Linkar usando o slug.current do CMS */}
                                <Link href={`/areas-de-atuacao/${area.slug.current}`}>
                                    Ver Detalhes
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}

// 8. Adicionar Revalidação (ISR) - Opcional, mas recomendado.
// Isto fará o Next.js verificar se há novo conteúdo no CMS a cada 60 segundos.
export const revalidate = 60;