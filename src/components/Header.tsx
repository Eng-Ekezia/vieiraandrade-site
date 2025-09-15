// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler'; // 1. Importe o componente

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Vieira de Andrade Advocacia
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/+5535998297811" // Use o número de WhatsApp real aqui
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              WhatsApp
            </a>
            <ThemeToggler /> {/* 2. Adicione o Toggler aqui */}
          </div>

          {/* Controles Mobile */}
          <div className="md:hidden flex items-center">
             <ThemeToggler /> {/* E adicione o Toggler aqui também */}
             <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-800 dark:text-white focus:outline-none ml-4"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Links do Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.path} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}