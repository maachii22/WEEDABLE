'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const sectionIds = ['portales', 'funciones', 'clientes', 'precios'] as const
const linkLabels: Record<(typeof sectionIds)[number], string> = {
  portales: 'Portales',
  funciones: 'Funciones',
  clientes: 'Clientes',
  precios: 'Precios',
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (els.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id)
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
      <nav
        className={`
          flex items-center gap-2 rounded-full border border-white/[0.08]
          transition-all duration-300
          ${scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,167,1,0.08)] px-5 py-2.5'
            : 'bg-[#111]/80 backdrop-blur-xl px-6 py-3'
          }
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 mr-4">
          <Image src="/isotipo.png" alt="Weedable" width={28} height={28} className="w-7 h-7 object-contain" />
          <Image src="/logo.png" alt="weedable" width={100} height={24} className="h-5 w-auto object-contain" />
        </a>

        {/* Divider */}
        <span className="w-px h-4 bg-white/10 mr-4" />

        {/* Links */}
        <div className="hidden md:flex items-center gap-7">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                activeSection === id ? 'text-[#00a701]' : 'text-white/50 hover:text-white'
              }`}
            >
              {linkLabels[id]}
            </a>
          ))}
        </div>

        {/* Divider */}
        <span className="hidden md:block w-px h-4 bg-white/10 mx-4" />

        {/* CTA */}
        <a
          href="#contacto"
          className="
            flex items-center gap-2 px-5 py-2 rounded-full
            bg-[#00a701] text-black text-sm font-bold tracking-wide
            hover:bg-[#00c201] transition-all duration-200
            hover:shadow-[0_0_20px_rgba(0,167,1,0.4)]
          "
        >
          Empezar <span className="text-base leading-none">→</span>
        </a>
      </nav>
    </header>
  )
}
