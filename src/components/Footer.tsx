// src/components/Footer.tsx

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre o Escritório */}
          <div>
            <h3 className="font-bold text-lg">Vieira de Andrade Advocacia</h3> {/* CORREÇÃO APLICADA AQUI */}
            <p className="mt-4 text-gray-400 text-sm">
              Assessoria jurídica pautada pela ética, compromisso e excelência.
              Buscamos soluções eficazes para a defesa dos seus direitos.
            </p>
          </div>
          
          {/* Coluna 2: Contato */}
          <div>
            <h3 className="font-bold text-lg">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-gray-400">
                Endereço: Rua dos Inconfidentes, 123, Sala 405, Funcionários, Belo Horizonte/MG
              </li>
              <li className="text-gray-400 hover:text-white">
                <a href="mailto:contato@vieiraandrade.com.br">contato@vieiraandrade.com.br</a>
              </li>
              <li className="text-gray-400 hover:text-white">
                <a href="tel:+5531999998888">(31) 99999-8888</a>
              </li>
              <li className="text-gray-400">
                Atendimento: Seg a Sex, das 9h às 18h
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white">Sobre</Link></li>
              <li><Link href="/areas-de-atuacao" className="text-gray-400 hover:text-white">Áreas de Atuação</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>OAB/MG 123.456</p>
          <p>© 2025 Vieira de Andrade Advocacia. Todos os direitos reservados.</p> {/* CORREÇÃO APLICADA AQUI */}
        </div>
      </div>
    </footer>
  );
}