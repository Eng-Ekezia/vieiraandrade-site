// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Vieira de Andrade Advocacia - Direito de Família, Tributário e Consumidor",
    template: "%s | Vieira de Andrade Advocacia",
  },
  description:
    "Escritório de advocacia especializado em Direito de Família, Direito Tributário e Direito do Consumidor. Mais de 15 anos de experiência defendendo seus direitos.",
  keywords: [
    "advogado",
    "direito de família",
    "direito tributário",
    "direito do consumidor",
    "advocacia",
    "jurídico",
    "divórcio",
    "pensão alimentícia",
    "inventário",
    "imposto de renda",
    "defesa do consumidor",
  ],
  authors: [{ name: "Dr. Marcelo Vieira de Andrade" }],
  creator: "Dr. Marcelo Vieira de Andrade",
  publisher: "Vieira de Andrade Advocacia",
  category: "Legal Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vieiraandrade.com.br",
    title:
      "Vieira de Andrade Advocacia - Direito de Família, Tributário e Consumidor",
    description:
      "Escritório de advocacia com mais de 15 anos de experiência. Especialistas em Direito de Família, Tributário e do Consumidor.",
    siteName: "Vieira de Andrade Advocacia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieira de Andrade Advocacia",
    description:
      "Escritório especializado em Direito de Família, Tributário e do Consumidor.",
  },
  alternates: {
    canonical: "https://vieiraandrade.com.br",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
