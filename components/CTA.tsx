'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Reemplazar con el número real de WhatsApp (ej: 54911XXXXXXXX sin + ni espacios)
const WHATSAPP_NUMBER = '549XXXXXXXXXX'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ club: '', nombre: '', whatsapp: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (!form.nombre || !form.whatsapp) return
    const msg = encodeURIComponent(
      `Hola! Soy *${form.nombre}*${form.club ? ` del club *${form.club}*` : ''} y quiero conocer más sobre Weedable. Mi WhatsApp: ${form.whatsapp}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section ref={ref} id="contacto" className="relative py-32 px-6 overflow-hidden border-t border-white/[0.05]">

      {/* Green glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,167,1,0.1) 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-6 h-px bg-[#00a701]" />
            <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">Empezá hoy</span>
            <span className="w-6 h-px bg-[#00a701]" />
          </div>

          <h2
            className="font-nunito font-black leading-[0.93] tracking-tight text-white mb-6"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
          >
            Tu club se merece{' '}
            <span className="text-[#00a701]">más.</span>
          </h2>

          <p className="text-white/45 text-lg leading-relaxed mb-12">
            Contanos sobre tu club y te respondemos en menos de 24hs.
          </p>
        </motion.div>

        {/* Form */}
        {!sent ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Nombre de tu club"
              value={form.club}
              onChange={e => setForm({ ...form, club: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 text-sm outline-none focus:border-[#00a701]/50 focus:bg-white/[0.07] transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Tu nombre *"
              value={form.nombre}
              onChange={e => setForm({ ...form, nombre: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 text-sm outline-none focus:border-[#00a701]/50 focus:bg-white/[0.07] transition-all duration-200"
            />
            <input
              type="tel"
              placeholder="Tu WhatsApp * (+54 9 ...)"
              value={form.whatsapp}
              onChange={e => setForm({ ...form, whatsapp: e.target.value })}
              className="w-full px-5 py-4 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/25 text-sm outline-none focus:border-[#00a701]/50 focus:bg-white/[0.07] transition-all duration-200"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-full bg-[#00a701] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#00c201] hover:shadow-[0_0_40px_rgba(0,167,1,0.45)] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.848L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.359-.214-3.762.898.957-3.665-.234-.376A9.818 9.818 0 1112 21.818z"/>
              </svg>
              HABLAR POR WHATSAPP
            </button>
            <p className="text-white/20 text-xs tracking-wide">Sin costo · Sin compromiso</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-[#00a701]/30 bg-[#00a701]/5 p-12 text-center"
          >
            <div className="text-4xl mb-4">🌿</div>
            <p className="font-nunito font-black text-2xl text-white mb-2">¡Listo!</p>
            <p className="text-white/50">Te abrimos WhatsApp. Si no se abrió, escribinos directamente.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
