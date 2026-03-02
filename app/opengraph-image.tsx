import { ImageResponse } from 'next/og'

export const alt = 'Weedable — Software para Clubes Cannábicos'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#00a701',
              letterSpacing: '-2px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Weedable
          </div>
          <div
            style={{
              width: 120,
              height: 4,
              background: '#00a701',
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              maxWidth: 560,
              lineHeight: 1.4,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Software exclusivo para clubes cannábicos.
          </div>
          <div
            style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Tu nombre, tu marca, tu operación — 100% a medida.
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
