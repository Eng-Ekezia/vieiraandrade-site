// src/app/page.tsx
import Link from 'next/link';

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
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
          Assessoria Jurídica Especializada para a Defesa dos Seus Direitos
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Atuamos com ética e determinação para garantir a melhor solução para
          suas necessidades em Direito de Família, Tributário e do Consumidor.
        </p>
        <div className="mt-8">
          <Link 
            href="/contato"
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Fale com um Especialista
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Como Podemos Ajudar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.title} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{area.title}</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{area.description}</p>
                <Link
                  href={area.link}
                  className="mt-6 inline-block text-blue-800 dark:text-blue-400 font-bold hover:underline"
                >
                  Saiba Mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Compromisso e Confiança
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Com uma carreira pautada pela ética e dedicação, Dr. Marcelo Vieira de Andrade oferece um atendimento personalizado, onde cada caso é tratado com a profundidade e a atenção que merece. A relação de confiança entre cliente e advogado é o nosso maior pilar.
          </p>
          <div className="mt-8">
            <Link 
              href="/sobre"
              className="border border-blue-800 text-blue-800 dark:text-blue-400 dark:border-blue-400 font-bold py-3 px-8 rounded-lg hover:bg-blue-800 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-300"
            >
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}