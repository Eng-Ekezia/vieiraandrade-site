// src/app/areas-de-atuacao/page.tsx
import Link from 'next/link';

// Importações do Shadcn
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const areas = [
    {
      title: "Direito de Família e Sucessões",
      description: "Soluções para divórcio, pensão, inventário e planejamento sucessório com sensibilidade e técnica.",
      slug: "direito-de-familia-e-sucessoes",
    },
    {
      title: "Direito Tributário",
      description: "Defesa em execuções fiscais, planejamento e recuperação de créditos para sua segurança fiscal.",
      slug: "direito-tributario",
    },
    {
      title: "Direito do Consumidor",
      description: "Atuação firme contra práticas abusivas e na busca pela reparação dos seus direitos como consumidor.",
      slug: "direito-do-consumidor",
    }
  ];

export default function AreasPage() {
    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Áreas de Atuação</h1>
                <p className="text-lg text-muted-foreground"> 
                    Nossa expertise a serviço da defesa dos seus direitos. Conheça nossas especialidades.
                </p>
            </div>
            
            <div className="mt-12 max-w-4xl mx-auto space-y-8">
                {areas.map((area) => (
                    <Card key={area.slug} className="transition-shadow hover:shadow-lg">
                        
                        {/* * CORREÇÃO APLICADA AQUI:
                          * O CardDescription foi movido para dentro do CardHeader.
                        */}
                        <CardHeader>
                            <CardTitle>{area.title}</CardTitle>
                            <CardDescription className="pt-2">{area.description}</CardDescription>
                        </CardHeader>

                        {/* * Agora o CardContent contém APENAS UM filho (o Button), 
                          * o que resolve o erro.
                        */}
                        <CardContent>
                            <Button asChild variant="link" className="p-0 h-auto"> 
                                <Link href={`/areas-de-atuacao/${area.slug}`}>
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