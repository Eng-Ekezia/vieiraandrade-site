// src/app/contato/page.tsx
export default function ContatoPage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Entre em Contato</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Estamos à disposição para esclarecer suas dúvidas. Envie uma mensagem ou entre em contato pelos nossos canais.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-800 dark:text-white">
          <div>
            <h3 className="text-xl font-semibold">Endereço</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Rua dos Inconfidentes, 123, Sala 405<br/>
              Bairro Funcionários, Belo Horizonte/MG<br/>
              CEP: 30140-120
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Telefone & WhatsApp</h3>
            <a href="tel:+5531999998888" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mt-2 block">(31) 99999-8888</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a href="mailto:contato@vieiradeandrade.com.br" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mt-2 block">contato@vieiradeandrade.com.br</a>
          </div>
           <div>
            <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Segunda a Sexta-feira, das 9h às 18h.</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Envie sua Mensagem</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
             <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
             <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-900 transition-colors duration-300">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}