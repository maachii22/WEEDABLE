'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const incluye = [
  'Portal de Socios con identidad de tu club',
  'Dashboard Admin 360°',
  'Sistema de puntos y tienda integrada',
  'Stock en tiempo real',
  'Reseñas de genéticas',
  'Aviso de paso para socios',
  'Cotización del dólar live',
  'Asistente IA integrado',
  'Soporte y actualizaciones incluidas',
]

export default function Precios() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="precios" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#00a701]" />
            <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">Precios</span>
            <span className="w-6 h-px bg-[#00a701]" />
          </div>
          <h2
            className="font-nunito font-black leading-[0.93] tracking-tight text-white"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            Soluciones{' '}
            <span className="text-[#00a701]">a tu medida.</span>
          </h2>
          <p className="text-white/45 text-lg mt-4 max-w-md mx-auto">
            Precios transparentes. Sin sorpresas. Cada sistema es único porque cada club es único.
          </p>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">

            {/* Top bar */}
            <div className="px-10 py-5 border-b border-white/[0.07] flex items-center justify-between">
              <span className="text-xs font-bold tracking-[2.5px] uppercase text-white/30">DESARROLLO A MEDIDA</span>
              <span className="flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-[#00a701]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a701] animate-pulse" />
                Incluye soporte
              </span>
            </div>

            <div className="p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-14">

              {/* Left — price + CTA */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-white/40 text-sm mb-3">Inversión inicial</p>
                  <div className="font-nunito font-black leading-none mb-2" style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}>
                    <span className="text-white/25 text-3xl align-top mt-4 mr-1 inline-block font-bold">USD</span>
                    <span className="text-white">1.200</span>
                    <span className="text-white/25 text-4xl"> — 1.500</span>
                  </div>
                  <p className="text-white/30 text-sm mt-3 mb-10">
                    Según cantidad de funcionalidades y complejidad del desarrollo.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="#contacto"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-[#00a701] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#00c201] hover:shadow-[0_0_40px_rgba(0,167,1,0.4)] transition-all duration-300"
                  >
                    COTIZAR MI SISTEMA →
                  </a>
                  <p className="text-center text-white/25 text-xs tracking-wide">
                    Sin costo. Sin compromiso. Respondemos en &lt;24hs.
                  </p>
                </div>
              </div>

              {/* Right — features */}
              <div>
                <p className="text-white/40 text-xs font-bold tracking-[2px] uppercase mb-6">Todo incluido</p>
                <ul className="space-y-3">
                  {incluye.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                      className="flex items-start gap-3 text-sm text-white/60"
                    >
                      <span className="text-[#00a701] mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
