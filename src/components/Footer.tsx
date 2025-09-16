// src/components/Footer.tsx
import Link from 'next/link';
// 1. Importar o cliente Sanity e GROQ
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

// 2. Definir o tipo de dados (podemos reutilizar ou redefinir, vamos redefinir para manter o componente isolado)
interface FooterSettings {
  addressStreet: string;
  addressDistrict: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  openingHours: string;
}

// 3. Definir a query (é seguro repetir, o Next.js fará o cache da busca)
const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0] {
  addressStreet,
  addressDistrict,
  phone,
  phoneFormatted,
  email,
  openingHours
}`;

// 4. Transformar o Footer num Server Component Assíncrono
export async function Footer() {
  
  // 5. Buscar os dados
  const settings: FooterSettings = await sanityClient.fetch(settingsQuery);

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
          
          {/* Coluna 2: Contato (Agora Dinâmica) */}
          <div>
            <h3 className="font-bold text-lg text-foreground">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">
                Endereço: {settings.addressStreet}, {settings.addressDistrict}
              </li>
              <li className="text-muted-foreground hover:text-primary">
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </li>
              <li className="text-muted-foreground hover:text-primary">
                <a href={`tel:${settings.phone}`}>{settings.phoneFormatted}</a>
              </li>
              <li className="text-muted-foreground">
                Atendimento: {settings.openingHours}
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