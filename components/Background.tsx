'use client'

/**
 * Background global con 5 capas apiladas (inspirado en Vantra Digital)
 * Se monta fixed z-[-1] para que todas las secciones floten encima.
 *
 * Capas (de atrás hacia adelante):
 *   1. Color base #0a0a0a
 *   2. Radial glow verde en esquinas (brand)
 *   3. Dot grid estático (opacidad 0.028)
 *   4. Dot grid animado con scan light (opacidad 0.22)
 *   5. Noise texture overlay (opacidad 0.018, mix-blend: overlay)
 */
export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">

      {/* Capa 1 — color base */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Capa 2 — radial glow verde top-right */}
      <div
        className="absolute -top-32 -right-32 w-[900px] h-[900px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,167,1,0.09) 0%, transparent 60%)' }}
      />
      {/* Glow verde bottom-left más sutil */}
      <div
        className="absolute -bottom-48 -left-24 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,167,1,0.045) 0%, transparent 65%)' }}
      />

      {/* Capa 3 — dot grid estático */}
      <div className="dot-grid-base" />

      {/* Capa 4 — dot grid con scan light */}
      <div className="dot-grid-scan" />

      {/* Capa 5 — noise texture */}
      <div className="noise-overlay" />

    </div>
  )
}
