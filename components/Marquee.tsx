'use client'

const items = [
  'Portal de Socios',
  'Dashboard Admin',
  'Sistema de Puntos',
  'IA Integrada',
  'Stock en Tiempo Real',
  'Métricas 360°',
  'Tienda Integrada',
]

const text = items.join(' · ') + ' · '

export default function Marquee() {
  return (
    <section className="relative py-4 overflow-hidden bg-[#00a701]" aria-hidden>
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="mx-6 font-nunito font-bold text-base text-black tracking-wide">
          {text}
        </span>
        <span className="mx-6 font-nunito font-bold text-base text-black tracking-wide">
          {text}
        </span>
      </div>
    </section>
  )
}
