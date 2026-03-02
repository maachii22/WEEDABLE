import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Cursor from '@/components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        {/* Próximas secciones se agregarán acá */}
      </main>
    </>
  )
}
