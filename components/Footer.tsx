import Image from 'next/image'

const links = {
  Producto: [
    { label: 'Portales', href: '#portales' },
    { label: 'Funciones', href: '#funciones' },
    { label: 'Precios', href: '#precios' },
    { label: 'Proceso', href: '#proceso' },
  ],
  Clientes: [
    { label: 'Albinas →', href: 'https://albinas.com.ar' },
    { label: 'Draynor Labs →', href: 'https://draynorlabs.com' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/isotipo.png" alt="Weedable" width={28} height={28} className="w-7 h-7 object-contain" />
              <Image src="/logo.png" alt="weedable" width={100} height={24} className="h-5 w-auto object-contain" />
            </div>
            <p className="text-white/35 text-sm leading-relaxed">
              Software exclusivo para clubes cannábicos. Tu nombre, tu marca, tu operación.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <p className="text-white/25 text-xs font-bold tracking-[2px] uppercase mb-5">{group}</p>
                <ul className="space-y-3">
                  {items.map((item) => (
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
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs tracking-wide">
            © 2025 <span className="text-[#00a701]">Weedable</span>. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs tracking-wide">
            Hecho en Argentina 🇦🇷
          </p>
        </div>
      </div>
    </footer>
  )
}
