// src/components/Header.tsx

'use client'; // Necessário para usar hooks como o useState

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Vieira de Andrade Advocacia
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path} className="text-gray-600 hover:text-blue-800 transition-colors duration-300">
                {item.name}
              </Link>
            ))}
             <a 
              href="https://wa.me/5531999998888" // Use o número de WhatsApp real aqui
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Botão Sanduíche (Menu Mobile) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-800 focus:outline-none"
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
                <Link key={item.name} href={item.path} className="text-gray-600 hover:text-blue-800 py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/5531999998888" // Use o número de WhatsApp real aqui
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}