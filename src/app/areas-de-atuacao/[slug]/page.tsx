// src/app/areas-de-atuacao/[slug]/page.tsx
import Link from 'next/link';

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

export default function AreaDetailPage({ params }: { params: { slug: string } }) {
  const area = areasData[params.slug];

  if (!area) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold dark:text-white">Área de Atuação Não Encontrada</h1>
        <p className="mt-4 dark:text-gray-300">O conteúdo que você procura não foi localizado.</p>
        <Link href="/areas-de-atuacao" className="mt-6 inline-block text-blue-800 dark:text-blue-400 font-bold hover:underline">
          Ver todas as áreas
        </Link>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">{area.title}</h1>
        <div className="prose lg:prose-xl max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert space-y-4">
          {area.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}