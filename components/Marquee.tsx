'use client'

const items = [
  { text: 'Portal de Socios' },
  { text: 'Dashboard Admin' },
  { text: 'Sistema de Puntos' },
  { text: 'IA Integrada' },
  { text: 'Stock en Tiempo Real' },
  { text: 'Métricas 360°' },
  { text: 'Tienda Integrada' },
  { text: 'Identidad Propia' },
]

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-5 mx-3">
      <span className="font-display text-sm tracking-[2px] uppercase text-white/55 whitespace-nowrap">
        {text}
      </span>
      <span className="w-1 h-1 rounded-full bg-[#00a701] flex-shrink-0" />
    </span>
  )
}

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative py-5 overflow-hidden border-y border-white/[0.06]"
      style={{ background: 'rgba(10,10,11,0.7)', backdropFilter: 'blur(12px)' }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} />

      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <MarqueeItem key={i} text={item.text} />
        ))}
      </div>
    </section>
  )
}
