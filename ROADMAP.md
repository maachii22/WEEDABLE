# 🗺️ Weedable — Roadmap

## Estado actual: v3 — Landing completa base

---

## 🔴 URGENTE (antes del primer deploy real)

- [ ] **Número de WhatsApp real** → `CTA.tsx` línea ~30, reemplazar `549XXXXXXXXXX`
- [ ] **Dominio** → Conectar `weedable.com.ar` en Vercel (DNS settings)
- [ ] **Test mobile** → Revisar en iPhone/Android real, especialmente sección Portales

---

## 🟡 ALTA PRIORIDAD (v4)

### Visual
- [ ] **Marquee/ticker** — Banda verde entre Hero y Problema con features en loop infinito
  - Texto: `Portal de Socios · Dashboard Admin · Sistema de Puntos · IA Integrada · Stock en Tiempo Real · Métricas 360° · Tienda Integrada ·`
  - Fondo: `#00a701`, texto negro, fuente Nunito bold
  - Animación CSS: `animation: marquee 20s linear infinite`

- [ ] **Separadores de sección** — Líneas `border-t border-white/[0.05]` entre cada sección

- [ ] **Refinamiento Portales** — Asegurarse que el mockup se vea bien en todos los tamaños
  - Mobile: el selector pasa arriba, el panel abajo
  - El blur del mockup puede reducirse a `blur(2px)` para más impacto

### Funcional
- [ ] **Smooth scroll** — Los links del nav deben scrollear suavemente a cada sección
- [ ] **Active state nav** — El link activo se resalta según la sección visible (IntersectionObserver)

---

## 🟢 MEDIA PRIORIDAD (v5)

- [ ] **OG Image** — Imagen para compartir en redes sociales (1200x630)
  - Fondo negro, logo Weedable, tagline, color verde
  - Crear en `/app/opengraph-image.tsx` (Next.js 14 nativo)

- [ ] **Favicon** — Usar el isotipo como favicon
  - Agregar en `/app/layout.tsx` → `<link rel="icon">`

- [ ] **SEO mejorado** — En `layout.tsx`:
  ```tsx
  export const metadata = {
    title: 'Weedable — Software para Clubes Cannábicos',
    description: 'El único sistema hecho exclusivamente para clubes cannábicos...',
    openGraph: { ... },
    twitter: { ... }
  }
  ```

- [ ] **Vercel Analytics** — Agregar `@vercel/analytics` para ver visitas
  ```bash
  npm install @vercel/analytics
  ```
  En `layout.tsx`:
  ```tsx
  import { Analytics } from '@vercel/analytics/react'
  // En el body: <Analytics />
  ```

---

## 🔵 BAJA PRIORIDAD (v6+)

- [ ] **Sección "Nuestro equipo"** — Si se quiere humanizar la marca
- [ ] **Blog/Recursos** — Contenido SEO sobre gestión de clubes
- [ ] **Página individual por portal** — `/portales/socio` y `/portales/admin`
- [ ] **Formulario con backend** — Guardar leads en base de datos (Supabase, PlanetScale)
- [ ] **Animación de partículas o Three.js** en el hero — Para más impacto visual
- [ ] **Dark/Light mode toggle** — Probablemente innecesario para este target

---

## 📊 MÉTRICAS A TRACKEAR (post-deploy)

- Tasa de conversión del formulario CTA
- Scroll depth (¿llegan hasta Precios?)
- Click en botón WhatsApp
- Sección con más tiempo de permanencia
- Dispositivos: mobile vs desktop

---

## 🐛 BUGS CONOCIDOS

- El cursor custom no funciona en mobile (normal — en mobile no hay cursor)
  - Fix: `@media (pointer: coarse) { .cursor-dot, .cursor-ring { display: none; } }`

---

*Actualizado: Marzo 2026*
