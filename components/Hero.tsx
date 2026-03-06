'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROTATING_WORDS = ['digitaliza', 'automatiza', 'escala', 'moderniza']

const stats = [
  { value: '300+', label: 'Socios gestionados' },
  { value: '100%', label: 'A medida' },
  { value: '360°', label: 'Gestión total' },
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pb-0">

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center">

        {/* Badge overline — pill glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="
            flex items-center gap-2.5 mb-10
            px-4 py-2 rounded-full
            border border-white/[0.08] bg-white/[0.03]
            backdrop-blur-sm
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a701] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00a701]" />
          </span>
          <span className="text-white/60 text-xs font-bold tracking-[3px] uppercase font-display">
            Software Exclusivo para Clubes
          </span>
        </motion.div>

        {/* ── H1 ── */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="
            font-display leading-[0.9] text-white mb-8 w-full
            drop-shadow-2xl
          "
          style={{
            fontSize: 'clamp(56px, 10.5vw, 120px)',
            letterSpacing: '-2.8px',
          }}
        >
          {/* Línea 1 — blanco puro */}
          <span className="block">Software que</span>

          {/* Línea 2 — { palabra rotatoria con gradiente } */}
          <span className="block">
            {/* Bracket izquierdo — liviano y sutil */}
            <span
              className="font-display"
              style={{
                color: 'rgba(0,167,1,0.3)',
                fontWeight: 300,
                fontSize: '0.82em',
              }}
            >
              {'{  '}
            </span>

            {/* Contenedor fijo para que el layout no salte */}
            <span
              className="relative inline-flex justify-center"
              style={{ minWidth: 'clamp(240px, 38vw, 580px)' }}
            >
              <AnimatePresence mode="wait">
                <motion.em
                  key={wordIndex}
                  className="not-italic font-display"
                  style={{
                    /* Gradiente blanco → verde — igual que Vantra */
                    background: 'linear-gradient(180deg, #ffffff 0%, #00a701 60%, #00a701 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    /* Glow verde sutil sobre el texto */
                    filter: 'drop-shadow(0 0 28px rgba(0,167,1,0.45))',
                  }}
                  initial={{ opacity: 0, y: 16, filter: 'drop-shadow(0 0 0px rgba(0,167,1,0))' }}
                  animate={{ opacity: 1, y: 0,  filter: 'drop-shadow(0 0 28px rgba(0,167,1,0.45))' }}
                  exit={{   opacity: 0, y: -16, filter: 'drop-shadow(0 0 0px rgba(0,167,1,0))' }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  {ROTATING_WORDS[wordIndex]}
                </motion.em>
              </AnimatePresence>
            </span>

            {/* Bracket derecho */}
            <span
              className="font-display"
              style={{
                color: 'rgba(0,167,1,0.3)',
                fontWeight: 300,
                fontSize: '0.82em',
              }}
            >
              {'  }'}
            </span>
          </span>

          {/* Línea 3 — outline hollow */}
          <span
            className="block font-display"
            style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.15)',
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
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/45 text-lg md:text-xl max-w-lg leading-relaxed mb-2"
        >
          Construimos el sistema de tu club con{' '}
          <span className="text-white/80 font-medium">tu nombre, tu marca</span> y{' '}
          <span className="text-white/80 font-medium">tu operación</span> — 100% a medida.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/25 text-sm mb-12 tracking-wide"
        >
          Tu sistema. Tu nombre. Tu identidad. — Weedable nunca aparece.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          {/* Primario */}
          <a
            href="#contacto"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-[#00a701] text-black font-bold text-sm tracking-widest uppercase
              transition-all duration-300
              shadow-[0_0_20px_rgba(0,167,1,0.3)]
              hover:shadow-[0_0_44px_rgba(0,167,1,0.6)]
              hover:-translate-y-1 hover:scale-[1.03]
              active:scale-95
            "
          >
            CONFIGURAR MI SISTEMA →
          </a>

          {/* Secundario */}
          <a
            href="#portales"
            className="
              inline-flex items-center gap-3 px-8 py-4 rounded-xl
              bg-white/[0.04] border border-white/[0.09] text-white/55
              font-bold text-sm tracking-widest uppercase
              hover:bg-white/[0.08] hover:text-white/85 hover:border-white/18
              transition-all duration-300
            "
          >
            VER PORTALES
          </a>
        </motion.div>

        {/* Stats — glassmorphism cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-lg"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                flex-1 flex flex-col items-center justify-center px-6 py-5
                rounded-2xl
                bg-[rgba(10,10,11,0.5)] border border-white/[0.07]
                backdrop-blur-xl
                hover:border-[#00a701]/20
                transition-all duration-300
              "
            >
              <div
                className="font-display text-[1.6rem] leading-none mb-1"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="text-[10px] text-white/35 uppercase tracking-[2.5px] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
