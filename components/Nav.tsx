'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { id: 'portales',  label: 'Portales' },
  { id: 'funciones', label: 'Funciones' },
  { id: 'clientes',  label: 'Clientes' },
  { id: 'precios',   label: 'Precios' },
] as const

export default function Nav() {
  const [scrolled, setScrolled]         = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [menuOpen, setMenuOpen]         = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id)
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ── DESKTOP / TABLET NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-[9999] flex justify-center pt-5 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            flex items-center gap-1 rounded-full
            border border-white/[0.08]
            transition-all duration-500
            ${scrolled
              ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-4 py-2'
              : 'bg-[#0d0d0d]/75 backdrop-blur-xl px-5 py-2.5'
            }
          `}
        >
          {/* Logo — solo logo.png, un único archivo */}
          <a
            href="#"
            className="flex items-center mr-3 active:scale-95 transition-transform"
            aria-label="Weedable — inicio"
          >
            <Image
              src="/logo.png"
              alt="Weedable"
              width={120}
              height={28}
              className="h-6 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
              priority
            />
          </a>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-white/10 mx-3" />

          {/* Links — desktop */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`
                  relative px-3 py-1.5 rounded-full text-sm font-medium tracking-wide
                  transition-all duration-200
                  ${activeSection === id
                    ? 'text-white bg-white/[0.07]'
                    : 'text-white/45 hover:text-white/80 hover:bg-white/[0.04]'
                  }
                `}
              >
                {label}
                {/* Active dot */}
                {activeSection === id && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00a701]" />
                )}
              </a>
            ))}
          </div>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-white/10 mx-3" />

          {/* CTA desktop */}
          <a
            href="#contacto"
            className="
              hidden md:inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-[#00a701] text-black text-sm font-bold tracking-wide
              transition-all duration-200
              shadow-[0_0_16px_rgba(0,167,1,0.25)]
              hover:shadow-[0_0_28px_rgba(0,167,1,0.5)]
              hover:scale-[1.03] active:scale-95
            "
          >
            Empezar <span className="text-base leading-none">→</span>
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ml-1"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </nav>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9998] md:hidden"
            onClick={closeMenu}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0a0a0a]/97 backdrop-blur-2xl" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-24 left-6 right-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo en mobile menu */}
              <div className="mb-8 pb-6 border-b border-white/[0.07]">
                <Image src="/logo.png" alt="Weedable" width={120} height={28} className="h-7 w-auto object-contain" />
              </div>

              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map(({ id, label }, i) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className={`
                      flex items-center justify-between
                      py-4 px-4 rounded-2xl text-lg font-medium
                      transition-colors duration-200
                      ${activeSection === id
                        ? 'text-[#00a701] bg-[#00a701]/[0.07]'
                        : 'text-white/65 hover:text-white hover:bg-white/[0.04]'
                      }
                    `}
                  >
                    {label}
                    <span className="text-white/20 text-base">→</span>
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#contacto"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="
                  mt-6 flex items-center justify-center gap-3
                  py-4 px-6 rounded-2xl
                  bg-[#00a701] text-black text-base font-bold tracking-widest uppercase
                  shadow-[0_0_24px_rgba(0,167,1,0.35)]
                  transition-all duration-200 active:scale-95
                "
              >
                Empezar →
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
