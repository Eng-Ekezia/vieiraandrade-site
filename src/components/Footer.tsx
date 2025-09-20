// src/components/Footer.tsx

import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Instagram, Linkedin, Facebook } from "lucide-react"; // Importa os ícones

// --- Tipos de Dados Atualizados ---
interface SocialLink {
  _key: string;
  platform: string;
  url: string;
}

interface FooterSettings {
  addressStreet: string;
  addressDistrict: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  openingHours: string;
  footerText: string; // <-- NOVO
  socialLinks: SocialLink[]; // <-- NOVO
}

// --- Query Atualizada ---
const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0] {
  addressStreet,
  addressDistrict,
  phone,
  phoneFormatted,
  email,
  openingHours,
  footerText,
  socialLinks
}`;

// --- Mapa de Ícones Sociais (NOVO) ---
const socialIconMap: { [key: string]: React.ReactNode } = {
  Instagram: <Instagram className="h-5 w-5" />,
  Facebook: <Facebook className="h-5 w-5" />,
  LinkedIn: <Linkedin className="h-5 w-5" />,
};

export async function Footer() {
  const settings: FooterSettings = await sanityClient.fetch(settingsQuery);

  return (
    <footer className="bg-muted text-foreground mt-auto">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre o Escritório */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg text-foreground">
              Vieira de Andrade Advocacia
            </h3>
            <p className="mt-4 text-muted-foreground text-sm">
              Assessoria jurídica pautada pela ética, compromisso e excelência.
              Buscamos soluções eficazes para a defesa dos seus direitos.
            </p>
          </div>

          {/* Coluna 2: Contato (Dinâmica) */}
          <div>
            <h3 className="font-bold text-lg text-foreground">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">
                {settings.addressStreet}, {settings.addressDistrict}
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                <a href={`tel:${settings.phone}`}>{settings.phoneFormatted}</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos e Redes Sociais */}
          <div>
            <h3 className="font-bold text-lg text-foreground">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-atuacao"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
            {/* --- SEÇÃO DE REDES SOCIAIS (NOVA) --- */}
            {settings.socialLinks && settings.socialLinks.length > 0 && (
              <div className="flex items-center space-x-4 mt-6">
                {settings.socialLinks.map((link) => (
                  <a
                    key={link._key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visite nosso perfil no ${link.platform}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {socialIconMap[link.platform] || (
                      <span>{link.platform}</span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Divisor e Copyright (DINÂMICO) */}
        <div className="mt-10 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{settings.footerText}</p>
        </div>
      </div>
    </footer>
  );
}
