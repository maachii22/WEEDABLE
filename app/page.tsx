import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import Portales from '@/components/Portales'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Portales />
        {/* Próximas secciones: Clientes, Precios, Proceso, CTA, Footer */}
      </main>
    </>
  )
}
