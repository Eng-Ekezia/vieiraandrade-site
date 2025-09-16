// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importa usePathname para links ativos
import { Menu, Zap } from 'lucide-react'; // Importa ícone do menu mobile
import { ThemeToggler } from './ThemeToggler'; // O componente atualizado da Etapa 1

// Componentes Shadcn que instalamos
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose // Importa SheetClose para fechar o menu ao clicar
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils'; // Utilitário de classe do Shadcn

// Define os itens do menu em um array para reutilização (DRY)
const menuItems = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
  { name: 'Contato', path: '/contato' },
];

// Componente de link reutilizável para o menu mobile
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <SheetClose asChild>
      <Link href={href} className="block py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </SheetClose>
  );
}

// Componente do Botão WhatsApp estilizado com Shadcn
function WhatsAppButton() {
  return (
    <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-medium">
      <a
        href="https://wa.me/+5531999998888" // Seu número de WhatsApp (do arquivo original)
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {/* SVG original do WhatsApp (mantido do seu arquivo anterior) */}
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49"/>
        </svg>
        WhatsApp
      </a>
    </Button>
  );
}

// Componente Header Principal
export function Header() {
  const pathname = usePathname(); // Hook para verificar a rota ativa

  return (
    <header className="bg-card shadow-md sticky top-0 z-50 border-b">
      <nav className="container mx-auto px-6 py-3"> {/* Padding vertical reduzido */}
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/">
              Vieira de Andrade Advocacia
            </Link>
          </div>

          {/* Menu Desktop (shadcn/ui NavigationMenu) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link href={item.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), {
                          "bg-muted": pathname === item.path, // Destaca o link ativo
                        })}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Controles Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <WhatsAppButton />
            <ThemeToggler />
          </div>

          {/* Controles Mobile (shadcn/ui Sheet) */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggler />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Abrir menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navegação</SheetTitle>
                  <SheetDescription>
                    Vieira de Andrade Advocacia
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <MobileNavLink key={item.name} href={item.path}>
                      {item.name}
                    </MobileNavLink>
                  ))}
                  <div className="pt-4 border-t">
                     <WhatsAppButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}