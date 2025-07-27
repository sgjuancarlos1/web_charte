import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chart-e | Transforma tu Odoo con Inteligencia Artificial',
  description: 'Especialistas en implementación de Odoo con IA - Logra Altas Ventas y MENOS Costos con la ruta crítica diaria exacta para resultados y márgenes totalmente a tu favor',
  keywords: 'Odoo, Inteligencia Artificial, ERP, DeepAgent, Speech-to-Speech, Implementación Odoo, IA empresarial',
  authors: [{ name: 'Chart-e' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Chart-e | Odoo + Inteligencia Artificial',
    description: 'Transforma tu negocio con Odoo e IA: Altas Ventas y MENOS Costos',
    url: 'https://chart-e.com',
    siteName: 'Chart-e',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}