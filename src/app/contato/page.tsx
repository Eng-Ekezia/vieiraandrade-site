// src/app/contato/page.tsx

export default function ContatoPage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h1>
        <p className="text-lg text-gray-600">
          Estamos à disposição para esclarecer suas dúvidas. Envie uma mensagem ou entre em contato pelos nossos canais.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna de Informações */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Endereço</h3>
            <p className="text-gray-600 mt-2">
              Rua Joaquim Barbosa, 220, Sala A<br/>
              Jardim Regina, Araguari/MG<br/>
              CEP: 38440-153
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Telefone & WhatsApp</h3>
            <a href="tel:+5531999998888" className="text-gray-600 hover:text-blue-800 mt-2 block">(31) 99999-8888</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <a href="mailto:contato@vieiradeandrade.com.br" className="text-gray-600 hover:text-blue-800 mt-2 block">contato@vieiradeandrade.com.br</a>
          </div>
           <div>
            <h3 className="text-xl font-semibold text-gray-800">Horário de Atendimento</h3>
            <p className="text-gray-600 mt-2">Segunda a Sexta-feira, das 9h às 18h.</p>
          </div>
        </div>

        {/* Coluna do Formulário */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
             <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
            </div>
             <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
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