'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './LanguageProvider'

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
