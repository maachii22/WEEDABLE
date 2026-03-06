'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pains = [
  {
    icon: '📱',
    title: 'Todo por WhatsApp',
    desc: 'Stock, avisos, consultas de socios — todo mezclado en un chat. Información que se pierde, errores que cuestan plata.',
  },
  {
    icon: '📊',
    title: 'Sin métricas reales',
    desc: 'No sabés cuántos socios activos tenés, qué genética rota más, ni qué días movés más. Operás a ciegas.',
  },
  {
    icon: '❌',
    title: 'Socios sin experiencia digital',
    desc: 'Tus socios merecen un portal propio con tu marca. Hoy no tienen nada — y eso se nota.',
  },
]

export default function Problema() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="funciones" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.05]">

      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-6 h-px bg-[#00a701]" />
          <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">El problema</span>
        </motion.div>

        {/* Title — Vantra style: primera línea normal, segunda en outline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: 'clamp(52px, 7.5vw, 108px)' }}
        >
          <span className="block text-white">No más Excel.</span>
          <span
            className="block"
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.2)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            No más WhatsApp.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-white/45 text-lg max-w-lg leading-relaxed mb-20"
        >
          Dejá de perder socios, información y plata.
        </motion.p>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="
                group relative p-8 rounded-2xl
                bg-[rgba(10,10,11,0.5)] border border-white/[0.07]
                backdrop-blur-xl
                hover:bg-white/[0.06] hover:border-[#00a701]/25
                transition-all duration-300
              "
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-6 right-6 h-px bg-[#00a701] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div className="text-3xl mb-5">{pain.icon}</div>
              <h3 className="font-display text-xl text-white mb-3 leading-tight">
                {pain.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
