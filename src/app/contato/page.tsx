// src/app/contato/page.tsx
import { sanityClient } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { ContactForm } from './contact-form'; // 1. Importar o Client Component

// 2. Definir o tipo de dados para as Configurações
interface Settings {
  addressStreet: string;
  addressDistrict: string;
  addressCep: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  openingHours: string;
}

// 3. Query para buscar o documento único 'settings'
const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0]`;

// 4. A página de contato agora é um Server Component assíncrono
export default async function ContatoPage() {
  
  // 5. Buscar os dados das configurações do CMS
  const settings: Settings = await sanityClient.fetch(settingsQuery);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-lg text-muted-foreground">
          Estamos à disposição para esclarecer suas dúvidas. Envie uma mensagem ou entre em contato pelos nossos canais.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna de Informações (Agora dinâmica a partir do CMS) */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Endereço</h3>
            <p className="text-muted-foreground mt-2">
              {settings.addressStreet}<br/>
              {settings.addressDistrict}<br/>
              CEP: {settings.addressCep}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Telefone & WhatsApp</h3>
            <a href={`tel:${settings.phone}`} className="text-muted-foreground hover:text-primary mt-2 block">
              {settings.phoneFormatted}
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <a href={`mailto:${settings.email}`} className="text-muted-foreground hover:text-primary mt-2 block">
              {settings.email}
            </a>
          </div>
           <div>
            <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
            <p className="text-muted-foreground mt-2">{settings.openingHours}</p>
          </div>
        </div>

        {/* Coluna do Formulário (Renderiza o Client Component) */}
        <ContactForm />
      </div>
    </section>
  );
}

// Ativar revalidação (ISR) para os dados das Configurações
export const revalidate = 60;