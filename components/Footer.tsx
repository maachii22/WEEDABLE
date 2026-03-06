import Image from 'next/image'

const PRODUCT_LINKS = [
  { label: 'Portales',  href: '#portales' },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Precios',   href: '#precios' },
  { label: 'Proceso',   href: '#proceso' },
]

const CLIENT_LINKS = [
  { label: 'Albinas',      href: 'https://albinas.com.ar' },
  { label: 'Draynor Labs', href: 'https://draynorlabs.com' },
]

const SOCIAL_LINKS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5491130395470',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.848L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.359-.214-3.762.898.957-3.665-.234-.376A9.818 9.818 0 1112 21.818z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/weedable',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">

      {/* Subtle glow al fondo */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,167,1,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10">

        {/* ── BLOQUE PRINCIPAL ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">

          {/* Columna izquierda — Brand + tagline + CTA */}
          <div className="max-w-sm">
            <a href="#" aria-label="Weedable — inicio" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Weedable"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </a>

            <p className="font-display text-2xl text-white leading-tight mb-3">
              Construimos el sistema<br />digital de tu club.
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8">
              Tu nombre, tu marca, tu operación.<br />
              Weedable nunca aparece.
            </p>

            {/* CTA footer */}
            <a
              href="#contacto"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl
                border border-white/[0.1] bg-white/[0.04]
                text-white/70 text-sm font-medium tracking-wide
                hover:bg-white/[0.08] hover:text-white hover:border-white/20
                transition-all duration-300
              "
            >
              ¿Tenés un proyecto?
              <span className="text-[#00a701] font-bold">Escríbenos →</span>
            </a>
          </div>

          {/* Columnas derecha — Links */}
          <div className="flex flex-wrap gap-12 lg:gap-16">

            {/* Producto */}
            <div>
              <p className="text-white/25 text-[10px] font-bold tracking-[3px] uppercase mb-5 font-display">
                Producto
              </p>
              <ul className="space-y-3">
                {PRODUCT_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clientes */}
            <div>
              <p className="text-white/25 text-[10px] font-bold tracking-[3px] uppercase mb-5 font-display">
                Clientes
              </p>
              <ul className="space-y-3">
                {CLIENT_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/45 text-sm hover:text-[#00a701] transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      {item.label}
                      <span className="text-white/20 text-xs">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <p className="text-white/25 text-[10px] font-bold tracking-[3px] uppercase mb-5 font-display">
                Contacto
              </p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/45 text-sm hover:text-white transition-colors duration-200"
                    >
                      <span className="text-white/30">{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-wide">
            © 2025 <span className="text-[#00a701]">Weedable</span>. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs tracking-wide">
            Buenos Aires, Argentina 🇦🇷
          </p>
        </div>

      </div>
    </footer>
  )
}
