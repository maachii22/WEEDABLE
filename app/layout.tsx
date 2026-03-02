import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Weedable — Software para Clubes Cannábicos',
  description: 'El único sistema hecho exclusivamente para clubes cannábicos. Portal Socios, Portal Admin, IA integrada. 100% a medida.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
