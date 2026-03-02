'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { icon: '🌿', value: '2+', label: 'Clubes activos' },
  { icon: '⚡', value: '100%', label: 'A medida' },
  { icon: '🔄', value: '360°', label: 'Gestión total' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden dot-grid pb-0">
      
      {/* Background radial glow — verde arriba derecha como Vantra */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,167,1,0.12) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,167,1,0.05) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center">

        {/* Título principal — estilo Vantra exacto */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-nunito font-black leading-[0.92] tracking-tight text-white mb-8"
          style={{ fontSize: 'clamp(64px, 10.5vw, 148px)' }}
        >
          <span className="block">Software que</span>

          {/* Línea con { palabra } — igual que Vantra */}
          <span className="block">
            <span className="text-[#00a701]/40 font-black">{`{ `}</span>
            <em
              className="not-italic font-black"
              style={{ color: '#00a701' }}
            >
              digitaliza
            </em>
            <span className="text-[#00a701]/40 font-black">{` /}`}</span>
          </span>

          {/* Última línea en outline/hollow — igual que Vantra */}
          <span
            className="block"
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.2)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            tu club.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/55 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          Construimos el sistema de tu club con{' '}
          <strong className="text-white/80 font-medium">tu nombre, tu marca</strong> y{' '}
          <strong className="text-white/80 font-medium">tu operación</strong> — 100% a medida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <a
            href="#contacto"
            className="
              flex items-center gap-3 px-8 py-4 rounded-full
              bg-[#00a701] text-black font-bold text-sm tracking-widest uppercase
              hover:bg-[#00c201] hover:shadow-[0_0_40px_rgba(0,167,1,0.45)]
              transition-all duration-300
            "
          >
            CONFIGURAR MI SISTEMA →
          </a>
          <a
            href="#portales"
            className="
              flex items-center gap-3 px-8 py-4 rounded-full
              bg-white/6 border border-white/10 text-white/70
              font-bold text-sm tracking-widest uppercase
              hover:bg-white/10 hover:text-white
              transition-all duration-300
            "
          >
            VER PORTALES
          </a>
        </motion.div>

        {/* Stats cards — igual que Vantra, 3 cards dark redondeadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                flex-1 flex items-center gap-4 px-6 py-5
                bg-white/[0.04] border border-white/[0.07] rounded-2xl
                hover:bg-white/[0.07] hover:border-[#00a701]/30
                transition-all duration-300
              "
            >
              <span className="text-2xl">{stat.icon}</span>
              <div className="text-left">
                <div className="font-nunito font-black text-2xl text-white leading-none mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
