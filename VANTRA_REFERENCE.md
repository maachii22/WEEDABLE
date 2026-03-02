# 🔬 Referencia Visual — Vantra Digital

> Este documento describe en detalle el sistema de diseño de vantradigital.com
> para replicarlo fielmente en Weedable con verde #00a701.

---

## NAV

**Tipo:** Pill flotante centrada — NO pegada a los bordes de la pantalla.

```
Posición: fixed, top: 20px, centrada horizontalmente
Background: rgba(17,17,17,0.82) + backdrop-blur(24px)
Border: 1px solid rgba(255,255,255,0.08)
Border-radius: 9999px (pill completa)
Padding: 12px 24px
```

**Contenido izq → der:**
- Logo + divider vertical + links de navegación + divider + CTA pill verde

**Al hacer scroll:**
- Background más opaco
- Padding se reduce levemente
- Sombra sutil de color

**CTA button:**
- Pill redondeada, fondo verde/acento, texto negro
- Hover: color más brillante + glow

---

## HERO

**Layout:** Full screen, contenido centrado verticalmente y horizontalmente.

**Fondo:**
- Negro puro `#090909`
- Dot grid: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)` cada 28px
- Gradiente radial de color en esquina superior derecha (sutil, 10-13% opacidad)

**Título:**
```
Font: Nunito Black 900
Size: ~10-11vw (clamp 60px → 148px)
Line-height: 0.92-0.93
Letter-spacing: -2px

Línea 1: blanco sólido
Línea 2: { palabra_clave } — llaves en acento/40% opacidad, palabra en acento italic
Línea 3: OUTLINE — webkit-text-stroke: 2px rgba(255,255,255,0.2), fill transparent
```

**Subtítulo:**
- `text-white/55`, max-width 500px, centered
- Keywords importantes en `text-white/80 font-medium`

**CTAs:**
- Primario: pill verde/acento, texto negro, uppercase, tracking-widest
- Secundario: pill dark `bg-white/6 border border-white/10`, texto apagado

**Stats (3 cards):**
- Cards dark redondeadas `rounded-2xl`
- `bg-white/[0.04] border border-white/[0.07]`
- Ícono + número bold + label uppercase pequeño
- Hover: `bg-white/[0.07] border-[acento]/30`

---

## SECCIÓN "QUÉ HACEMOS" (Servicios)

**Header:**
- Label: línea vertical izquierda de color + texto uppercase
- Título línea 1: blanco sólido bold
- Título línea 2: **OUTLINE/HOLLOW** — recurso signature de Vantra
- Subtítulo muted

**Cards de servicios:**
- Dark, rounded-2xl, border sutil
- Esquina: badge de categoría (pill de color acento)
- Ícono en caja cuadrada oscura
- Título bold
- Descripción muted
- Tags: bordes redondeados, fondo oscuro, texto muted

---

## SECCIÓN "ECOSISTEMA" (Selector interactivo — EL MÁS IMPORTANTE)

**Layout:** Split 40/60. Izquierda selector, derecha contenido.

**Sidebar izquierda:**
```
Cada item tiene:
- Categoría: texto uppercase muy pequeño, color muted
- Nombre: font bold, grande

Item activo:
- Línea vertical izquierda de 3px, color acento, rounded
- Fondo levemente más claro
- Texto blanco sólido

Item inactivo:
- Sin línea
- Texto apagado (50% opacidad)
- Hover: background levemente más claro
```

**Panel derecho (cambia al clickear):**
```
- Título grande (40-50px) del item seleccionado
- Descripción (2-3 líneas)
- Feature tags con ✓ y borde
- Botón CTA de color acento
- Browser mockup debajo: frame de browser + screenshot real con blur
- Botón "VER/EXPLORAR" superpuesto sobre el mockup
```

**Transición entre items:** `AnimatePresence` de Framer Motion, slide x + fade.

---

## BROWSER MOCKUP

**Estructura HTML:**
```
div.rounded-2xl.border.overflow-hidden
  div.browser-chrome (3 dots rojo/amarillo/verde + URL bar fake)
  div.screenshot-container
    img (screenshot real, filter: blur(3-5px), scale(1.02))
    div.overlay-gradient (fade bottom to bg color)
    button.cta-overlay (centrado sobre mockup)
```

**El blur es clave** — muestra el producto sin revelar todo. Genera curiosidad.
**El botón "VER DEMO" sobre el blur** invita a la acción.

---

## CARDS GENERALES — Sistema consistente

```css
/* Base */
bg-white/[0.035]
border border-white/[0.07]
rounded-2xl
padding: 32px

/* Hover */
bg-white/[0.06]
border-[acento]/25
transition-all duration-300

/* Accent line top (hover) */
position: absolute
top: 0, left: 24px, right: 24px
height: 1px
background: acento
opacity: 0 → 1 on hover
border-radius: full
```

---

## SECCIÓN PRECIOS (referencia: InnovaSolutions)

**Layout:** Card grande centrada, max-width 900px.

**Card:**
- Border top label de categoría
- Precio en tipografía gigante: `USD 1.200 — 1.500`
- Grid 2 columnas: precio+CTA izq, checklist der
- CTA verde full-width en columna izquierda

**Checklist:**
- Items con `✓` en verde
- Texto muted
- Animación de entrada staggered

---

## SECCIÓN CTA FINAL

**Layout:** Centrado, max-width 640px.
**Fondo:** Glow radial central de color (ellipse, 10% opacidad).
**Título:** Grande, con palabra clave en color acento.
**Formulario:**
- Inputs dark, border sutil, focus → border acento
- Botón full-width verde con ícono WhatsApp
- Al submit: abre `wa.me/NUMERO?text=MENSAJE_PRECARGADO`
- NO botón flotante permanente

---

## FOOTER

**Layout:** Max-width 6xl, 2 columnas: brand izq, links der.
**Brand:** Logo + tagline corto (2 líneas máx).
**Links:** 2-3 columnas temáticas.
**Bottom:** Copyright + "Hecho en Argentina".
**Separador:** `border-t border-white/[0.06]`.

---

## CURSOR CUSTOM

```javascript
// Dot: 10px, verde, position fixed, mix-blend-mode difference
// Ring: 38px, border 1.5px verde, position fixed, 50% opacity
// Ring sigue al dot con lerp (lag visual elegante)
// rx += (mx - rx) * 0.12 — suavizado

// Al hover de links/buttons:
// dot escala 2x
// ring escala 1.5x
```

---

## SCROLLBAR

```css
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #0a0a0a; }
::-webkit-scrollbar-thumb { background: #00a701; border-radius: 2px; }
```

---

## ANIMACIONES DE ENTRADA

**Patrón base:**
```tsx
const ref = useRef(null)
const inView = useInView(ref, { once: true, margin: '-80px' })

initial={{ opacity: 0, y: 32 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
```

**Stagger para grids:**
```tsx
delay: 0.1 + i * 0.1  // cada item 100ms después del anterior
```

**Para el selector interactivo:**
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeIndex}
    initial={{ opacity: 0, x: 16 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -16 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    {/* contenido activo */}
  </motion.div>
</AnimatePresence>
```

---

*Referencia creada en base a análisis visual de vantradigital.com — Marzo 2026*
