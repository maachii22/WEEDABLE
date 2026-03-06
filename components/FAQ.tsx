'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: '¿Cuánto tiempo lleva el desarrollo?',
    answer: 'Entrega estimada: 4 a 8 semanas según funcionalidades.',
  },
  {
    question: '¿Puedo pedir funcionalidades específicas de mi club?',
    answer: 'Sí, todo es a medida. Cada sistema se construye según las necesidades de tu club.',
  },
  {
    question: '¿Qué pasa si quiero cambiar algo después del lanzamiento?',
    answer: 'Incluye soporte y actualizaciones. Podés pedir cambios y mejoras cuando lo necesites.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)

  return (
    <section ref={ref} id="faq" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-6 h-px bg-[#00a701]" />
          <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">Preguntas frecuentes</span>
        </div>
        <h2
          className="font-display leading-[0.9] tracking-tight text-white mb-16"
          style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
        >
          Lo que todo dueño pregunta.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors duration-200"
              >
                <span className="font-display text-base lg:text-lg text-white">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5l3 3 3-3" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-white/50 text-sm leading-relaxed pl-0">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
