// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { ThemeToggler } from "./ThemeToggler";
import LogoIcon from "./LogoIcon";

// Componentes Shadcn
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Áreas de Atuação", path: "/areas-de-atuacao" },
  { name: "Contato", path: "/contato" },
];

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          "block py-3 text-lg font-medium transition-colors",
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
}

function WhatsAppButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        asChild
        className="bg-green-600 hover:bg-green-700 text-white font-medium"
      >
        <a
          href="https://wa.me/+5534988617989"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.49" />
          </svg>
          WhatsApp
        </a>
      </Button>
    </motion.div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito de scroll para alterar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "bg-card/80 backdrop-blur-md shadow-md"
          : "bg-card shadow-md"
      )}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Animado - Mantendo estrutura original */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/"
              aria-label="Página Inicial - Vieira de Andrade Advocacia"
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogoIcon className="h-10 w-auto" />
              </motion.div>

              {/* Imagem do logo original com animação */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo-text-dark.png"
                  alt="Vieira de Andrade Advocacia"
                  width={80}
                  height={20}
                  priority
                  className="hidden md:block dark:invert"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Menu Desktop - Mantendo estrutura original */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex flex-1 justify-center items-center"
          >
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.path}
                          className={cn(navigationMenuTriggerStyle(), {
                            "bg-muted": pathname === item.path,
                          })}
                        >
                          <motion.span
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </motion.div>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          {/* Botões Desktop */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center space-x-2"
          >
            <WhatsAppButton />
            <ThemeToggler />
          </motion.div>

          {/* Menu Mobile */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:hidden flex items-center space-x-2"
          >
            <ThemeToggler />

            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="outline" size="icon" aria-label="Abrir menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>

              {/* Drawer da direita com fade-in suave */}
              <SheetContent side="right">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
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
                </motion.div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
