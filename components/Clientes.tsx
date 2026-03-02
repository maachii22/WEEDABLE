'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clientes = [
  {
    status: 'live',
    statusLabel: 'En producción',
    nombre: 'Albinas',
    subtitulo: 'Club ONG',
    desc: 'Sistema completo con Portal de Socios, gestión de genéticas, stock diario, sistema de puntos y perfil personal. Funcionando.',
    url: 'albinas.com.ar',
    href: 'https://albinas.com.ar',
    features: ['Portal Socios', 'Tienda', 'Genéticas', 'Puntos', 'Aviso de paso'],
  },
  {
    status: 'dev',
    statusLabel: 'En desarrollo',
    nombre: 'Draynor Labs',
    subtitulo: 'Club ONG',
    desc: 'Portal completo en construcción. Asistente IA, métricas avanzadas, configurador 360° y gestión de socios en tiempo real.',
    url: 'draynorlabs.com',
    href: 'https://draynorlabs.com',
    features: ['Portal Socios', 'Dashboard Admin', 'IA integrada', 'Métricas 360°'],
  },
  {
    status: 'next',
    statusLabel: 'Tu club',
    nombre: 'Próximo',
    subtitulo: '',
    desc: 'Tu sistema, con tu nombre, tu identidad y tus funcionalidades. 100% personalizado para tu club.',
    url: null,
    href: '#contacto',
    features: [],
  },
]

export default function Clientes() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="clientes" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#00a701]" />
            <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">Clientes</span>
          </div>
          <h2
            className="font-nunito font-black leading-[0.93] tracking-tight"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            <span className="text-white block">Sistemas vivos.</span>
            <span
              className="block"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              En producción.
            </span>
          </h2>
          <p className="text-white/45 text-lg mt-5 max-w-md leading-relaxed">
            No vendemos promesas. Mostramos sistemas reales, funcionando, con el nombre de cada club.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clientes.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`
                group relative flex flex-col p-8 rounded-2xl border transition-all duration-300
                ${c.status === 'next'
                  ? 'bg-white/[0.02] border-dashed border-white/[0.1] hover:border-[#00a701]/30'
                  : 'bg-white/[0.035] border-white/[0.07] hover:bg-white/[0.06] hover:border-[#00a701]/25'
                }
              `}
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-[#00a701] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              {/* Status badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`
                  w-2 h-2 rounded-full flex-shrink-0
                  ${c.status === 'live' ? 'bg-[#00a701] animate-pulse' : ''}
                  ${c.status === 'dev' ? 'bg-yellow-400 animate-pulse' : ''}
                  ${c.status === 'next' ? 'bg-white/20' : ''}
                `} />
                <span className={`
                  text-xs font-bold tracking-[2px] uppercase
                  ${c.status === 'live' ? 'text-[#00a701]' : ''}
                  ${c.status === 'dev' ? 'text-yellow-400' : ''}
                  ${c.status === 'next' ? 'text-white/30' : ''}
                `}>
                  {c.statusLabel}
                </span>
              </div>

              {/* Club name */}
              <div className="mb-1">
                <div className={`
                  font-nunito font-black text-3xl leading-tight
                  ${c.status === 'next' ? 'text-white/25' : 'text-white'}
                `}>
                  {c.nombre}
                </div>
                {c.subtitulo && (
                  <div className="text-white/30 text-sm mt-0.5">{c.subtitulo}</div>
                )}
              </div>

              {/* Desc */}
              <p className="text-white/45 text-sm leading-relaxed mt-4 mb-6 flex-1">
                {c.desc}
              </p>

              {/* Feature tags */}
              {c.features.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.features.map((f, j) => (
                    <span key={j} className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40">
                      {f}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              <a
                href={c.href}
                target={c.url ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-colors duration-200
                  ${c.status === 'next'
                    ? 'text-[#00a701]/60 hover:text-[#00a701]'
                    : 'text-white/40 hover:text-white'
                  }
                `}
              >
                {c.url ? `${c.url} →` : 'Hablemos →'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
