import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const title = 'Weedable — Software para Clubes Cannábicos'
const description = 'El único sistema hecho exclusivamente para clubes cannábicos. Portal Socios, Portal Admin, IA integrada. 100% a medida.'
const url = 'https://weedable.com.ar'

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['clubes cannábicos', 'software cannabis', 'portal de socios', 'gestión club', 'Argentina'],
  openGraph: {
    title,
    description,
    url,
    siteName: 'Weedable',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: '/isotipo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="dot-grid">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
