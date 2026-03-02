# 🌿 WEEDABLE — Cursor Project Context
> Leer este archivo COMPLETO antes de tocar cualquier línea de código.

---

## 🧠 QUÉ ES WEEDABLE

**Weedable** es una empresa argentina de desarrollo de software B2B especializada **exclusivamente en clubes cannábicos**. No es una agencia genérica — es el único software que nació para este nicho.

### El producto
Weedable construye sistemas completos **100% a medida** para cada club. El sistema lleva el nombre del club (no de Weedable). Ejemplo: "Albinas Portal de Socios", "Draynor Labs Portal de Socios". Weedable es invisible para el socio final.

### Dos portales por sistema:
- **Portal de Socios** — La experiencia digital del miembro del club
- **Dashboard Admin** — El panel de control del dueño/encargado

### Clientes actuales:
- **Albinas Club ONG** → `albinas.com.ar` — ✅ FINALIZADO y en producción
- **Draynor Labs Club ONG** → `draynorlabs.com` — 🔄 EN DESARROLLO

---

## 🎯 ESTRATEGIA DE NEGOCIO

| Item | Detalle |
|------|---------|
| **Cliente ideal** | Dueño/fundador de club cannábico argentino |
| **Pain points** | Opera todo por WhatsApp/Excel, sin métricas, socios sin experiencia digital |
| **Propuesta de valor** | Tu club, tu sistema, tu marca. El único software exclusivo para este nicho |
| **Precio** | USD 1.200 — 1.500 desarrollo (según funcionalidades). Mantenimiento incluido sutilmente |
| **Conversión** | Mini formulario → abre WhatsApp con mensaje pre-cargado |
| **Modelo** | Setup + mantenimiento mensual |

---

## 🎨 REFERENCIA VISUAL ABSOLUTA: VANTRA

**La web se basa 100% en `vantradigital.com`**, con verde `#00a701` en lugar del amarillo de Vantra.

### Sistema de diseño Vantra (replicar exacto):

**Tipografía:**
- Display/títulos: `Nunito` ExtraBold/Black (900) — rounded, bold, impacto
- Cuerpo: `DM Sans` — limpio, legible
- Importar desde Google Fonts

**Colores:**
```css
--bg:          #0a0a0a     /* negro profundo */
--surface:     rgba(255,255,255,0.035)
--border:      rgba(255,255,255,0.07)
--green:       #00a701     /* acento principal — reemplaza el amarillo de Vantra */
--green-glow:  rgba(0,167,1,0.28)
--text:        #f0f0f0
--text-muted:  rgba(255,255,255,0.45)
--text-dim:    rgba(255,255,255,0.25)
```

**Fondo:** Dot grid sutil:
```css
background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
background-size: 28px 28px;
```

**5 recursos visuales clave de Vantra a mantener siempre:**
1. **Nav pill flotante centrada** — no pegada a bordes, con blur
2. **Texto outline/hollow** en títulos — segunda línea con `-webkit-text-stroke`
3. **Selector interactivo** sidebar + panel — línea de color activa izquierda
4. **Browser mockups blurred** — screenshots reales con `blur(3-5px)` + overlay
5. **Accent line on hover** — línea de color en top de cards al hacer hover

---

## 🏗️ STACK TÉCNICO

```
Framework:    Next.js 14 (App Router)
Styling:      Tailwind CSS
Animations:   Framer Motion
Language:     TypeScript
Deploy:       Vercel (auto-deploy desde GitHub)
Repo:         GitHub
```

### Estructura de carpetas:
```
weedable/
├── app/
│   ├── layout.tsx        — metadata, fuentes, globals
│   ├── page.tsx          — ensambla todos los componentes
│   └── globals.css       — variables CSS, dot grid, cursor, scrollbar
├── components/
│   ├── Cursor.tsx        ✅ — cursor custom animado smooth
│   ├── Nav.tsx           ✅ — pill flotante centrada, logo Weedable
│   ├── Hero.tsx          ✅ — título { digitaliza }, outline, stats
│   ├── Problema.tsx      ✅ — pain points, outline title, cards
│   ├── Portales.tsx      ✅ — selector interactivo + mockups reales
│   ├── Clientes.tsx      ✅ — Albinas live, Draynor dev, próximo card
│   ├── Precios.tsx       ✅ — USD 1.200-1.500, checklist, CTA
│   ├── Proceso.tsx       ✅ — 4 pasos con número de fondo
│   ├── CTA.tsx           ✅ — formulario → WhatsApp pre-cargado
│   └── Footer.tsx        ✅ — logo, links, tagline
├── public/
│   ├── logo.png          — wordmark verde "weedable"
│   ├── isotipo.png       — ícono W con hoja
│   ├── mockup-socio.png  — screenshot real Portal de Socios (Albinas)
│   └── mockup-admin.png  — screenshot real Dashboard Admin (Albinas)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## ✅ ESTADO ACTUAL — LO QUE YA ESTÁ HECHO

| Componente | Estado | Notas |
|-----------|--------|-------|
| Cursor | ✅ | Dot verde + ring animado smooth |
| Nav | ✅ | Pill centrada, scroll effect, logo real |
| Hero | ✅ | `{ digitaliza }` en verde, outline "tu club.", 3 stats |
| Problema | ✅ | Título outline, 3 pain cards con hover accent |
| Portales | ✅ | Sidebar selector + mockup real con blur, AnimatePresence |
| Clientes | ✅ | 3 cards, status live/dev/next, tags, links |
| Precios | ✅ | USD 1.200—1.500, checklist, CTA verde |
| Proceso | ✅ | 4 cards, número de fondo hollow |
| CTA | ✅ | Form 3 campos → abre WhatsApp con texto pre-cargado |
| Footer | ✅ | Logo, 2 columnas links, copyright |

---

## 🔧 PENDIENTE / PRÓXIMAS MEJORAS

### Alta prioridad:
- [ ] **Reemplazar número WhatsApp** en `CTA.tsx` — buscar `549XXXXXXXXXX` y poner el real
- [ ] **Marquee / ticker** entre Hero y Problema — banda verde con features en loop (como Vantra)
- [ ] **Separadores entre secciones** — líneas sutiles o gradientes de transición
- [ ] **Mobile responsiveness** — revisar breakpoints, especialmente en Portales y Precios
- [ ] **SEO** — meta tags, OG image, sitemap

### Media prioridad:
- [ ] **Animaciones de entrada** — scroll reveal más fluido en todas las secciones
- [ ] **Hover states del cursor** — escala al pasar sobre links/botones
- [ ] **Smooth scroll** entre secciones via nav links
- [ ] **Loading/skeleton** para las imágenes de mockup

### Baja prioridad:
- [ ] **Página de error 404** custom
- [ ] **Analytics** — Vercel Analytics o Google Tag Manager
- [ ] **Formulario backend** — si se quiere guardar leads además de WhatsApp

---

## 📐 REGLAS DE DISEÑO (NO NEGOCIABLES)

### ✅ Siempre hacer:
- Usar `font-nunito font-black` para todos los títulos display
- Usar `useInView` de Framer Motion para animaciones de entrada en cada sección
- Mantener `border border-white/[0.07]` como borde base de todas las cards
- Usar `rounded-2xl` o `rounded-3xl` para cards y contenedores
- Hover con `hover:border-[#00a701]/25` en cards interactivas
- Accent line top en hover: `absolute top-0 h-px bg-[#00a701] opacity-0 group-hover:opacity-100`
- Botón primario: siempre `bg-[#00a701] text-black font-bold rounded-full`
- Labels de sección: `text-[#00a701] text-xs font-bold tracking-[3px] uppercase` con línea izquierda

### ❌ Nunca hacer:
- No usar `Inter`, `Roboto`, ni `Arial` como tipografía display
- No usar gradientes purple/blue — solo verde `#00a701` como acento
- No agregar botón flotante de WhatsApp en esquina inferior — solo el formulario
- No usar sombras de caja fuertes — máximo `shadow-[0_0_40px_rgba(0,167,1,0.4)]` solo en hover de CTA
- No centrar todo — los títulos de sección van alineados a la izquierda (excepto Precios y Hero)
- No usar más de 2 colores de acento — solo verde y blanco
- No copiar estilos genéricos de shadcn/ui sin adaptarlos al sistema de diseño

---

## 🧩 PATRÓN DE COMPONENTE (usar siempre esta estructura)

```tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function NombreSeccion() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="seccion-id" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#00a701]" />
            <span className="text-[#00a701] text-xs font-bold tracking-[3px] uppercase">Label</span>
          </div>

          {/* Título con outline en segunda línea */}
          <h2
            className="font-nunito font-black leading-[0.93] tracking-tight"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
          >
            <span className="text-white block">Primera línea sólida.</span>
            <span
              className="block"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Segunda línea outline.
            </span>
          </h2>
        </motion.div>

        {/* Contenido con stagger */}
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* contenido */}
          </motion.div>
        ))}

      </div>
    </section>
  )
}
```

---

## 🖼️ ASSETS DISPONIBLES

| Archivo | Uso |
|---------|-----|
| `public/logo.png` | Wordmark "weedable" en verde — usar en Nav y Footer |
| `public/isotipo.png` | Ícono W con hoja — usar junto al wordmark |
| `public/mockup-socio.png` | Screenshot real del Portal de Socios de Albinas — usar en sección Portales con blur |
| `public/mockup-admin.png` | Screenshot real del Dashboard Admin de Albinas — usar en sección Portales con blur |

---

## 💬 COPY CLAVE (no cambiar sin justificación)

| Sección | Headline |
|---------|----------|
| Hero | "Software que `{ digitaliza }` tu club." |
| Problema | "No más Excel. / No más WhatsApp." |
| Portales | "Ingeniería Digital Especializada." |
| Clientes | "Sistemas vivos. / En producción." |
| Precios | "Soluciones a tu medida." |
| Proceso | "Del brief / al sistema." |
| CTA | "Tu club se merece más." |

**Tagline:** "Software exclusivo para clubes cannábicos."
**Propuesta de valor:** "Tu nombre, tu marca, tu operación — 100% a medida."

---

## 🚀 SETUP LOCAL

```bash
# Clonar o descomprimir el proyecto
cd weedable

# Instalar dependencias
npm install

# Correr en local
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
```

## 🌐 DEPLOY EN VERCEL

El proyecto está conectado a GitHub. Cada `git push` a `main` triggeriza deploy automático.

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
# → Vercel despliega automáticamente
```

**Variable de entorno a setear en Vercel (cuando corresponda):**
- No hay variables de entorno actualmente. WhatsApp number está hardcodeado en `CTA.tsx` — cambiar `549XXXXXXXXXX` por el número real.

---

## 📋 PROMPT PARA NUEVAS SESIONES EN CURSOR

Cuando empieces una nueva sesión o necesites ayuda en este proyecto, usá este prompt:

> "Estoy trabajando en la landing de **Weedable**, una empresa de software para clubes cannábicos. El diseño está basado 100% en vantradigital.com pero con verde #00a701 en lugar del amarillo. El stack es Next.js 14 + Tailwind + Framer Motion. Lee el archivo `CURSOR_CONTEXT.md` en la raíz del proyecto antes de hacer cualquier cambio. La estructura de componentes, el sistema de diseño y las reglas están documentadas ahí."

---

*Última actualización: Marzo 2026 — Weedable v3*
