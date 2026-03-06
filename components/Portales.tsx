'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Set to '/portal-demo.mp4' or '/portal-demo.gif' when screen recording is ready (Loom/QuickTime)
const VIDEO_DEMO_PATH = ''

const portales = [
  {
    id: 'socio',
    categoria: 'EXPERIENCIA DEL SOCIO',
    nombre: 'Portal de Socios',
    desc: 'La experiencia digital completa para cada miembro. Stock del día, genéticas, puntos, tienda y perfil — todo con la identidad de tu club.',
    features: [
      'Stock de genéticas al minuto — ningún socio llega con cuota cero',
      'Reseñas de genéticas con rating',
      'Sistema de puntos acumulables',
      'Tienda para canjear puntos',
      'Perfil personal del socio',
      'Aviso de paso / notificaciones',
      'Cotización del dólar live',
    ],
    mockup: '/mockup-socio.png',
    icon: '👤',
  },
  {
    id: 'admin',
    categoria: 'GESTIÓN OPERATIVA',
    nombre: 'Dashboard Admin',
    desc: 'Control total de tu club desde un solo panel. Métricas en tiempo real, alertas inteligentes, aprobación de socios y asistente IA.',
    features: [
      'Métricas 360° del club',
      'Alertas de stock y socios',
      'Aprobación y gestión de socios',
      'Control de stock y catálogo de genéticas',
      'Asistente IA integrado',
      'Configurador 360° del local',
      'Reportes y analytics',
    ],
    mockup: '/mockup-admin.png',
    icon: '🖥️',
  },
]

export default function Portales() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const current = portales[active]

  return (
    <section ref={ref} id="portales" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.05]">

      {/* Section header — centered like Vantra */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#00a701]" />
            <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">El producto</span>
            <span className="w-6 h-px bg-[#00a701]" />
          </div>
          <h2
            className="font-display leading-[0.9] tracking-tight text-white"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            Ingeniería Digital{' '}
            <span className="text-[#00a701]">Especializada.</span>
          </h2>
          <p className="text-white/45 text-lg mt-4 max-w-lg mx-auto">
            Dos portales que trabajan juntos. Tu operación completa, digitalizada.
          </p>
        </motion.div>

        {/* Main interactive block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02]"
        >
          {/* SELECTOR — tabs on mobile, sidebar on desktop */}
          <div className="flex flex-row lg:flex-col lg:w-80 flex-shrink-0 border-b border-white/[0.07]">
            {portales.map((portal, i) => (
              <button
                key={portal.id}
                onClick={() => setActive(i)}
                className={`
                  flex-1 lg:flex-none w-full text-center lg:text-left px-4 lg:px-8 py-5 lg:py-7 transition-all duration-300
                  relative group
                  ${i === 0 ? '' : 'lg:border-t border-white/[0.06]'}
                  ${active === i
                    ? 'bg-white/[0.04]'
                    : 'hover:bg-white/[0.025]'
                  }
                `}
              >
                {/* Active indicator — bottom on mobile, left on desktop */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-[3px] lg:bottom-auto lg:top-0 lg:right-auto lg:left-0 lg:w-[3px] lg:h-full rounded-t-full lg:rounded-r-full
                  transition-all duration-300
                  ${active === i ? 'bg-[#00a701]' : 'bg-transparent'}
                `} />

                <div className={`
                  hidden lg:block text-[10px] font-bold tracking-[2.5px] uppercase mb-2 transition-colors duration-200
                  ${active === i ? 'text-[#00a701]' : 'text-white/30'}
                `}>
                  {portal.categoria}
                </div>
                <div className={`
                  font-nunito font-black text-sm lg:text-xl leading-tight transition-colors duration-200
                  ${active === i ? 'text-white' : 'text-white/50'}
                `}>
                  {portal.nombre}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL — content */}
          <div className="flex-1 p-10 lg:p-12 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full"
              >
                {/* Title */}
                <h3 className="font-display text-4xl lg:text-5xl text-white mb-4 leading-tight">
                  {current.nombre}
                </h3>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
                  {current.desc}
                </p>

                {/* Feature tags — like Vantra's checkmark tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {current.features.map((f, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 text-sm hover:border-[#00a701]/40 hover:text-white/80 transition-all duration-200"
                    >
                      <span className="text-[#00a701] text-xs">✓</span>
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mb-10">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#00a701] text-black font-bold text-sm tracking-wide hover:bg-[#00c201] hover:shadow-[0_0_30px_rgba(0,167,1,0.4)] transition-all duration-300"
                  >
                    Cotizar sistema →
                  </a>
                </div>

                {/* Browser mockup — blurred, like Vantra */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111]">
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <div className="flex-1 ml-3 bg-white/[0.05] rounded-md h-5 max-w-48" />
                  </div>
                  {/* Screenshot or video demo */}
                  <div className="relative overflow-hidden" style={{ maxHeight: '340px' }}>
                    {VIDEO_DEMO_PATH ? (
                      <video
                        src={VIDEO_DEMO_PATH}
                        poster={current.mockup}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full object-cover object-top"
                      />
                    ) : (
                      <Image
                        src={current.mockup}
                        alt={current.nombre}
                        width={900}
                        height={500}
                        className="w-full object-cover object-top blur-[2px] md:blur-[3px] scale-[1.02]"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQADAP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUA/9k="
                      />
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80" />
                    {/* Center CTA over mockup — like Vantra */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a
                        href="#contacto"
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#00a701] text-black font-bold text-sm tracking-wide shadow-[0_0_40px_rgba(0,167,1,0.5)] hover:bg-[#00c201] transition-all duration-300"
                      >
                        VER DEMO →
                      </a>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
