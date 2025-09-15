// src/app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  // A linha abaixo é a única que muda
  return <ThemeProvider attribute="class" defaultTheme="light">{children}</ThemeProvider>
}