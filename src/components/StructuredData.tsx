// src/components/StructuredData.tsx

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://vieiraandrade.com.br/#organization",
        name: "Vieira de Andrade Advocacia",
        description:
          "Escritório de advocacia especializado em Direito de Família, Direito Tributário e Direito do Consumidor",
        url: "https://vieiraandrade.com.br",
        logo: {
          "@type": "ImageObject",
          url: "https://vieiraandrade.com.br/logo-text-dark.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-34-98861-7989",
          contactType: "customer service",
          availableLanguage: "Portuguese",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
          addressLocality: "Cidade",
          addressRegion: "Estado",
        },
        founder: {
          "@type": "Person",
          name: "Dr. Vieira de Andrade",
          jobTitle: "Advogado",
        },
        areaServed: {
          "@type": "Country",
          name: "Brazil",
        },
        knowsAbout: [
          "Direito de Família",
          "Direito Tributário",
          "Direito do Consumidor",
          "Divórcio",
          "Pensão Alimentícia",
          "Inventário",
          "Defesa do Consumidor",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://vieiraandrade.com.br/#website",
        url: "https://vieiraandrade.com.br",
        name: "Vieira de Andrade Advocacia",
        publisher: {
          "@id": "https://vieiraandrade.com.br/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://vieiraandrade.com.br/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
