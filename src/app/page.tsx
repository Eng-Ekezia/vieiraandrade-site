// src/app/page.tsx
import Link from 'next/link';

// Importações atualizadas do Shadcn
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

export default function Home() {
  const areas = [
    {
      title: "Direito de Família e Sucessões",
      description: "Soluções para divórcio, pensão, inventário e planejamento sucessório com sensibilidade e técnica.",
      link: "/areas-de-atuacao/direito-de-familia-e-sucessoes",
    },
    {
      title: "Direito Tributário",
      description: "Defesa em execuções fiscais, planejamento e recuperação de créditos para sua segurança fiscal.",
      link: "/areas-de-atuacao/direito-tributario",
    },
    {
      title: "Direito do Consumidor",
      description: "Atuação firme contra práticas abusivas e na busca pela reparação dos seus direitos como consumidor.",
      link: "/areas-de-atuacao/direito-do-consumidor",
    }
  ];

  return (
    <>
      {/* Seção Hero */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Assessoria Jurídica Especializada para a Defesa dos Seus Direitos
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Atuamos com ética e determinação para garantir a melhor solução para
          suas necessidades em Direito de Família, Tributário e do Consumidor.
        </p>
        <div className="mt-8">
          {/* Botão (Link) atualizado para Shadcn */}
          <Button asChild size="lg">
            <Link href="/contato">Fale com um Especialista</Link>
          </Button>
        </div>
      </section>

      {/* Seção "Como Podemos Ajudar?" atualizada com Cards */}
      <section className="py-20 bg-muted/40 border-t border-b"> {/* Estilo de fundo e borda do Shadcn */}
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Podemos Ajudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area) => (
              // Div customizada substituída pelo Card
              <Card key={area.title} className="flex flex-col text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="flex-grow">{area.description}</CardDescription>
                  <Button asChild variant="link" className="mt-6">
                    <Link href={area.link}>
                      Saiba Mais
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Seção CTA "Compromisso e Confiança" */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Compromisso e Confiança
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Com uma carreira pautada pela ética e dedicação, Dr. Marcelo Vieira de Andrade oferece um atendimento personalizado, onde cada caso é tratado com a profundidade e a atenção que merece. A relação de confiança entre cliente e advogado é o nosso maior pilar.
          </p>
          <div className="mt-8">
            {/* Botão (Link) atualizado para a variante "outline" do Shadcn */}
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