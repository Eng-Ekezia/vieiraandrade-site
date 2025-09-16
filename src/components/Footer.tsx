// src/components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    // Classes de fundo e texto atualizadas para variáveis semânticas
    <footer className="bg-muted text-foreground mt-auto">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre o Escritório */}
          <div>
            {/* Título atualizado para text-foreground */}
            <h3 className="font-bold text-lg text-foreground">Vieira de Andrade Advocacia</h3>
            {/* Texto do parágrafo atualizado para text-muted-foreground */}
            <p className="mt-4 text-muted-foreground text-sm">
              Assessoria jurídica pautada pela ética, compromisso e excelência.
              Buscamos soluções eficazes para a defesa dos seus direitos.
            </p>
          </div>
          
          {/* Coluna 2: Contato */}
          <div>
            <h3 className="font-bold text-lg text-foreground">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {/* Todos os textos de lista atualizados para text-muted-foreground */}
              <li className="text-muted-foreground">
                Endereço: Rua Joaquim Barbosa, 220, Sala A, Jardim Regina, Araguari/MG
              </li>
              {/* Hover do link atualizado para hover:text-primary */}
              <li className="text-muted-foreground hover:text-primary">
                <a href="mailto:contato@vieiraandrade.com.br">contato@vieiraandrade.com.br</a>
              </li>
              <li className="text-muted-foreground hover:text-primary">
                <a href="tel:+5534988617989">(34) 98861-7989</a>
              </li>
              <li className="text-muted-foreground">
                Atendimento: Seg a Sex, das 9h às 18h
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {/* Links atualizados para text-muted-foreground e hover:text-primary */}
              <li><Link href="/sobre" className="text-muted-foreground hover:text-primary">Sobre</Link></li>
              <li><Link href="/areas-de-atuacao" className="text-muted-foreground hover:text-primary">Áreas de Atuação</Link></li>
              <li><Link href="/contato" className="text-muted-foreground hover:text-primary">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Divisor e Copyright atualizados */}
        <div className="mt-10 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>OAB/MG 123.456</p>
          <p>© 2025 Vieira de Andrade Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}