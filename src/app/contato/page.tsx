// src/app/contato/page.tsx

import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { ContactForm } from "./contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Import dos componentes de animação
import { AnimatedSection } from "@/components/motion/AnimatedSection";

// --- Tipos de Dados Atualizados ---
interface Settings {
  addressStreet: string;
  addressDistrict: string;
  addressCep: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  openingHours: string;
}

interface PageContatoData {
  whatsappCta: {
    title: string;
    text: string;
  };
}

// --- Queries ---
const settingsQuery = groq`*[_type == "settings" && _id == "settings"][0]`;
const pageContatoQuery = groq`*[_type == "pageContato" && _id == "pageContato"][0]{
  whatsappCta
}`;

export default async function ContatoPage() {
  // --- Fetch dos dados em paralelo ---
  const [settings, pageData]: [Settings, PageContatoData] = await Promise.all([
    sanityClient.fetch(settingsQuery),
    sanityClient.fetch(pageContatoQuery),
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título Principal */}
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Entre em Contato
              </h1>
            </AnimatedSection>

            {/* Subtítulo */}
            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <p className="text-xl sm:text-2xl text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
                Estamos à disposição para esclarecer as suas dúvidas. Envie uma
                mensagem ou entre em contato pelos nossos canais.
              </p>
            </AnimatedSection>

            {/* Divisor Visual */}
            <AnimatedSection variant="scaleIn" delay={0.5}>
              <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Coluna de Informações */}
            <div className="space-y-8">
              <AnimatedSection variant="fadeInLeft" delay={0.2}>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Informações de Contato
                </h2>
              </AnimatedSection>

              {/* Endereço */}
              <AnimatedSection variant="fadeInLeft" delay={0.3}>
                <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {settings.addressStreet}
                      <br />
                      {settings.addressDistrict}
                      <br />
                      CEP: {settings.addressCep}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Telefone */}
              <AnimatedSection variant="fadeInLeft" delay={0.4}>
                <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">
                      <a
                        href={`tel:${settings.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {settings.phoneFormatted}
                      </a>
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* E-mail */}
              <AnimatedSection variant="fadeInLeft" delay={0.5}>
                <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground">
                      <a
                        href={`mailto:${settings.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {settings.email}
                      </a>
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Horário */}
              <AnimatedSection variant="fadeInLeft" delay={0.6}>
                <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Horário de Atendimento
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {settings.openingHours}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Coluna do Formulário */}
            <div>
              <AnimatedSection variant="fadeInRight" delay={0.2}>
                <div className="bg-card border border-border/50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Envie a sua Mensagem
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Preencha o formulário abaixo e entraremos em contato em
                    breve.
                  </p>

                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - DINÂMICA */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection variant="fadeInUp" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {pageData.whatsappCta?.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fadeInUp" delay={0.3}>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                {pageData.whatsappCta?.text}
              </p>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.5}>
              <a
                href={`https://wa.me/${settings.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-8 py-4 rounded-md transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
                </svg>
                Falar no WhatsApp
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

export const revalidate = 60;
