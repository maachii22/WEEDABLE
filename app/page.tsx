import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import Portales from '@/components/Portales'
import Clientes from '@/components/Clientes'
import Precios from '@/components/Precios'
import Proceso from '@/components/Proceso'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
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
        <Clientes />
        <Precios />
        <Proceso />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
