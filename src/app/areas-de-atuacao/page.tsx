// src/app/areas-de-atuacao/page.tsx
import Link from 'next/link';

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
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Áreas de Atuação</h1>
                <p className="text-lg text-gray-600">
                    Nossa expertise a serviço da defesa dos seus direitos. Conheça nossas especialidades.
                </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto space-y-8">
                {areas.map((area) => (
                    <div key={area.slug} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-gray-800">{area.title}</h2>
                        <p className="mt-4 text-gray-600">{area.description}</p>
                        <Link href={`/areas-de-atuacao/${area.slug}`} className="mt-6 inline-block text-blue-800 font-bold hover:underline">
                            Ver Detalhes
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}