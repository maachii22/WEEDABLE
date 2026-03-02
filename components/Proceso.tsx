'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pasos = [
  {
    num: '01',
    titulo: 'Diagnóstico',
    desc: 'Entendemos tu club, tu operativa y lo que necesitás. Nada genérico — todo a medida desde la primera charla.',
    icon: '🔍',
  },
  {
    num: '02',
    titulo: 'Diseño',
    desc: 'Diseñamos interfaces, flujos e identidad visual. Vos aprobás cada detalle antes de que escribamos una línea de código.',
    icon: '✏️',
  },
  {
    num: '03',
    titulo: 'Desarrollo',
    desc: 'Construimos el sistema con updates constantes. Tenés acceso a cada avance en tiempo real durante todo el proceso.',
    icon: '⚙️',
  },
  {
    num: '04',
    titulo: 'Lanzamiento',
    desc: 'Deploy, onboarding y soporte incluido. Tu sistema live, funcionando y escalando junto a tu club desde día uno.',
    icon: '🚀',
  },
]

export default function Proceso() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="proceso" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#00a701]" />
            <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">Cómo trabajamos</span>
          </div>
          <h2
            className="font-nunito font-black leading-[0.93] tracking-tight"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            <span className="text-white block">Del brief</span>
            <span
              className="block"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                WebkitTextFillColor: 'transparent',
              }}
            >
              al sistema.
            </span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pasos.map((paso, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl bg-white/[0.035] border border-white/[0.07] hover:bg-white/[0.06] hover:border-[#00a701]/25 transition-all duration-300 overflow-hidden"
            >
              {/* Big number background */}
              <div
                className="absolute -top-4 -right-2 font-nunito font-black text-[100px] leading-none text-white/[0.04] select-none pointer-events-none transition-colors duration-300 group-hover:text-[#00a701]/10"
              >
                {paso.num}
              </div>

              {/* Top accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-[#00a701] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="relative z-10">
                <div className="text-2xl mb-6">{paso.icon}</div>
                <div className="text-xs font-bold tracking-[2px] uppercase text-white/25 mb-2">{paso.num}</div>
                <h3 className="font-nunito font-black text-xl text-white mb-3 leading-tight">{paso.titulo}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{paso.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
