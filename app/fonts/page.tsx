import { Cinzel, Bodoni_Moda, Bebas_Neue, Syne } from 'next/font/google'

const cinzel     = Cinzel({ subsets: ['latin'], weight: ['400', '700'] })
const bodoni     = Bodoni_Moda({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'] })
const bebas      = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })
const syne       = Syne({ subsets: ['latin'], weight: ['400', '700', '800'] })

const OPTIONS = [
  { name: 'Cinzel',       font: cinzel,  note: 'Roman letterforms — architectural, authoritative' },
  { name: 'Bodoni Moda',  font: bodoni,  note: 'Ultra high-contrast — luxury, editorial, fashion prestige' },
  { name: 'Bebas Neue',   font: bebas,   note: 'Condensed bold — strong brand presence, impactful' },
  { name: 'Syne',         font: syne,    note: 'Geometric, distinctive — modern founder energy' },
]

export default function FontsPage() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '80px 48px' }}>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#C4A882',
        marginBottom: 64,
      }}>
        Font Preview — Stark Method
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {OPTIONS.map((o, i) => (
          <div
            key={o.name}
            style={{
              padding: '56px 0',
              borderTop: i === 0 ? '1px solid rgba(196,168,130,0.15)' : '1px solid rgba(196,168,130,0.1)',
              display: 'grid',
              gridTemplateColumns: '1fr 280px',
              alignItems: 'center',
              gap: 48,
            }}
          >
            <h1
              className={o.font.className}
              style={{
                fontSize: 'clamp(52px, 8vw, 96px)',
                fontWeight: o.name === 'Bebas Neue' ? 400 : 300,
                color: '#F5F0EB',
                lineHeight: 1,
                letterSpacing: o.name === 'Bebas Neue' ? '0.04em' : '-0.02em',
              }}
            >
              Stark Method
            </h1>
            <div>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                color: '#C4A882',
                marginBottom: 6,
                letterSpacing: '0.06em',
              }}>
                {o.name}
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: 'rgba(245,240,235,0.4)',
                lineHeight: 1.5,
              }}>
                {o.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 12,
        color: 'rgba(245,240,235,0.2)',
        marginTop: 64,
        letterSpacing: '0.08em',
      }}>
        Tell Claude which one — it goes live immediately.
      </p>
    </div>
  )
}
