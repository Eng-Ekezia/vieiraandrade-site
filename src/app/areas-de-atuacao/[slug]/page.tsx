// src/app/areas-de-atuacao/[slug]/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'; // Importando o ícone

const areasData: { [key: string]: { title: string; content: string[] } } = {
  'direito-de-familia-e-sucessoes': {
    title: 'Direito de Família e Sucessões',
    content: [
      'Compreendemos que as questões familiares exigem uma abordagem técnica, mas também humana e sensível. Atuamos com total sigilo e dedicação para proteger seu patrimônio e garantir a harmonia nas relações familiares.',
      'Nossos serviços incluem: Divórcio Consensual e Litigioso; Pensão Alimentícia (fixação, revisão e exoneração); Guarda de Menores e Regulamentação de Visitas; Inventário e Partilha de Bens (judicial e extrajudicial); Planejamento Sucessório e Testamentos.'
    ],
  },
  'direito-tributario': {
    title: 'Direito Tributário',
    content: [
      'A complexa legislação tributária brasileira pode ser um grande desafio para pessoas físicas e jurídicas. Nossa atuação visa garantir a conformidade fiscal e otimizar a carga tributária de nossos clientes, oferecendo segurança para seus negócios.',
      'Oferecemos: Planejamento Tributário para redução legal de impostos; Defesa em Execuções Fiscais em âmbito administrativo e judicial; Recuperação de Créditos Tributários; Consultoria Fiscal e elaboração de pareceres estratégicos.'
    ],
  },
  'direito-do-consumidor': {
    title: 'Direito do Consumidor',
    content: [
      'O Código de Defesa do Consumidor é um instrumento fundamental para equilibrar as relações de consumo. Atuamos de forma firme para garantir que seus direitos como consumidor sejam respeitados, combatendo práticas abusivas e buscando a devida reparação.',
      'Atuamos em casos de: Problemas com Produtos ou Serviços (defeitos, vícios); Análise e anulação de Cláusulas Contratuais Abusivas; Cobranças Indevidas e negativação indevida em SPC/Serasa; Direito de Arrependimento e problemas em compras online.'
    ],
  },
};

export default async function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = areasData[params.slug];

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
        
        <h1 className="text-4xl font-bold mb-8">{area.title}</h1>
        <div className="prose lg:prose-xl max-w-none dark:prose-invert space-y-4">
          {area.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}