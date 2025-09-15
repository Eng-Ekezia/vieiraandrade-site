// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header'; // Importando nosso Header
import { Footer } from '@/components/Footer'; // 1. Importe o Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vieira de Andrade Advocacia',
  description: 'Escritório de advocacia especializado em Direito de Família, Tributário e do Consumidor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header /> {/* Nosso Header aqui */}
        <main className="container mx-auto px-6 py-8">
          {children} {/* O conteúdo de cada página será renderizado aqui */}
        </main>
        <Footer /> {/* 2. Adicione o Footer aqui */}
      </body>
    </html>
  );
}