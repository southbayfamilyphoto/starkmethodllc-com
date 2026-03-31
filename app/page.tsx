'use client'

import { useEffect, useState } from 'react'

// ─── Block 1: Animated Intro ─────────────────────────────────────────────────

const TITLE = 'Stark Method'
const TAGLINE = 'We build founder brand architecture for AI search.'

const LETTER_DELAYS: Record<number, number> = {}
TITLE.split('').forEach((_, i) => {
  LETTER_DELAYS[i] = 0.1 + i * 0.07
})

function IntroBlock() {
  const [showTagline, setShowTagline] = useState(false)
  const [showLine, setShowLine]       = useState(false)
  const [showProps, setShowProps]     = useState(false)
  const [showOutcome, setShowOutcome] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 1200)
    const t2 = setTimeout(() => setShowLine(true),    2000)
    const t3 = setTimeout(() => setShowProps(true),   2600)
    const t4 = setTimeout(() => setShowOutcome(true), 3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px 48px',
      maxWidth: 960,
      margin: '0 auto',
    }}>

      {/* Title */}
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(52px, 8vw, 96px)',
        fontWeight: 300,
        letterSpacing: '-0.02em',
        color: 'var(--cream)',
        lineHeight: 1,
        marginBottom: 32,
      }}>
        {TITLE.split('').map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{ animationDelay: `${LETTER_DELAYS[i]}s`, animationDuration: '0.6s' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>

      {/* Tagline */}
      {showTagline && (
        <div style={{ marginBottom: 32 }}>
          <span
            className="typewriter-text"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'rgba(245,240,235,0.7)',
              letterSpacing: '0.01em',
              animationDuration: '2s',
              animationDelay: '0s',
            }}
          >
            {TAGLINE}
          </span>
        </div>
      )}

      {/* Gold line */}
      {showLine && (
        <span
          className="accent-line"
          style={{ marginBottom: 32, animationDelay: '0s', animationDuration: '0.8s' }}
        />
      )}

      {/* Value props */}
      {showProps && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { delay: '0s',    text: 'The creative is the fuel.' },
            { delay: '0.3s',  text: 'The tracking is the proof.' },
          ].map(({ delay, text }) => (
            <p
              key={text}
              className="fade-up"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                animationDelay: delay,
                animationDuration: '0.7s',
              }}
            >
              {text}
            </p>
          ))}
        </div>
      )}

      {/* Scroll cue */}
      {showOutcome && (
        <div
          className="fade-up"
          style={{
            marginTop: 64,
            animationDelay: '0s',
            animationDuration: '0.7s',
          }}
        >
          <a
            href="#outcomes"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.35)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              transition: 'color 0.2s ease',
            }}
          >
            Choose your outcome
            <span style={{ fontSize: 16, lineHeight: 1 }}>↓</span>
          </a>
        </div>
      )}
    </section>
  )
}

// ─── Block 2: Outcome Selector ────────────────────────────────────────────────

const OUTCOMES = [
  {
    id: 'reach',
    label: 'Reach',
    headline: 'Build an audience that compounds.',
    sub: 'Most founders are invisible to the people who would buy from them. We fix that.',
    items: [
      'Content system tied to your category',
      'AI-indexed presence across search + social',
      'Weekly output with zero burnout',
      'Distribution that reaches buyers, not followers',
    ],
    note: 'Best for: founders with something to say who haven\'t built the system to say it consistently.',
  },
  {
    id: 'authority',
    label: 'Authority',
    headline: 'Become the obvious choice in your category.',
    sub: 'The founder who owns the conversation owns the category. We build that position.',
    items: [
      'Category definition and ownership',
      'Thought leadership architecture',
      'Press, podcast, and media strategy',
      'AI citation and search dominance',
    ],
    note: 'Best for: founders ready to move from "one of many" to "the one."',
  },
  {
    id: 'leads',
    label: 'Leads',
    headline: 'Turn content into a lead machine.',
    sub: 'Traffic without conversion is a hobby. We build the system that turns attention into pipeline.',
    items: [
      'Lead capture and nurture architecture',
      'Email sequences that convert',
      'CRM and follow-up automation',
      'Tracking that shows what\'s working',
    ],
    note: 'Best for: founders who have audience but aren\'t converting it into revenue.',
  },
  {
    id: 'transform',
    label: 'Transform',
    headline: 'Rebuild your brand from the foundation.',
    sub: 'Sometimes the brand needs to match the business you\'ve become. We rebuild it right.',
    items: [
      'Brand architecture and positioning',
      'Visual identity and messaging system',
      'Website and digital presence rebuild',
      'Full creative and strategic direction',
    ],
    note: 'Best for: founders whose brand no longer reflects the quality of the work.',
  },
  {
    id: 'community',
    label: 'Community',
    headline: 'Build the room people want to be in.',
    sub: 'The highest-leverage marketing is a community that recruits itself. We architect that.',
    items: [
      'Community platform and structure',
      'Membership and onboarding system',
      'Content and event programming',
      'Referral loops built into the experience',
    ],
    note: 'Best for: founders who want leverage — one-to-many instead of one-to-one.',
  },
]

function OutcomeBlock() {
  const [active, setActive]         = useState<string | null>(null)
  const [name, setName]             = useState('')
  const [email, setEmail]           = useState('')
  const [company, setCompany]       = useState('')
  const [notes, setNotes]           = useState('')
  const [submitted, setSubmitted]   = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const current = OUTCOMES.find(o => o.id === active)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email) return
    setSubmitting(true)
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, outcome: active, notes }),
      })
    } catch {}
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section
      id="outcomes"
      style={{
        minHeight: '100vh',
        padding: '80px 48px',
        maxWidth: 960,
        margin: '0 auto',
      }}
    >
      {/* Section label */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: 24,
      }}>
        Choose Your Outcome
      </p>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(32px, 5vw, 52px)',
        fontWeight: 300,
        color: 'var(--cream)',
        lineHeight: 1.15,
        marginBottom: 48,
        maxWidth: 640,
      }}>
        What does your business need most right now?
      </h2>

      {/* Outcome buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
        {OUTCOMES.map(o => (
          <button
            key={o.id}
            className={`outcome-btn ${active === o.id ? 'active' : ''}`}
            onClick={() => setActive(active === o.id ? null : o.id)}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Outcome detail */}
      {current && (
        <div
          style={{
            borderLeft: '1px solid rgba(196,168,130,0.3)',
            paddingLeft: 32,
            marginBottom: 64,
          }}
        >
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: 12,
          }}>
            {current.headline}
          </h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            color: 'rgba(245,240,235,0.6)',
            lineHeight: 1.7,
            marginBottom: 24,
            maxWidth: 560,
          }}>
            {current.sub}
          </p>

          <ul style={{ listStyle: 'none', marginBottom: 24 }}>
            {current.items.map((item, i) => (
              <li key={i} style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: 'rgba(245,240,235,0.75)',
                padding: '6px 0',
                paddingLeft: 20,
                position: 'relative',
                lineHeight: 1.5,
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--accent)',
                }}>—</span>
                {item}
              </li>
            ))}
          </ul>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.08em',
            color: 'rgba(196,168,130,0.6)',
            fontStyle: 'italic',
          }}>
            {current.note}
          </p>
        </div>
      )}

      {/* Contact form — always visible */}
      <div style={{
        borderTop: '1px solid rgba(196,168,130,0.15)',
        paddingTop: 48,
        maxWidth: 480,
      }}>
        {submitted ? (
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 300,
              color: 'var(--cream)',
              marginBottom: 12,
            }}>
              We&apos;ll be in touch.
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: 'rgba(245,240,235,0.5)',
            }}>
              Collin will reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,235,0.4)',
              marginBottom: 28,
            }}>
              {active
                ? `Let's talk about ${OUTCOMES.find(o => o.id === active)?.label.toLowerCase()}`
                : 'Start the conversation'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 32 }}>
              <input
                className="form-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                className="form-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <input
                className="form-input"
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
              <textarea
                className="form-textarea"
                placeholder="What are you building? What's the problem you're trying to solve?"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={3}
              />
            </div>

            <button
              className="submit-btn"
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Start the conversation'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Block 3: Client Proof Grid ──────────────────────────────────────────────

// type: 'photo' = dark cell, fills naturally
// type: 'logo'  = cream cell, padded, square-ish
const BASE = '/clients/Stark Method Website Visuals/'

const GRID_ITEMS: { src: string; alt: string; type: 'photo' | 'logo' }[] = [
  { src: `${BASE}00003.JPG`,  alt: 'Editorial portrait',         type: 'photo' },
  { src: `${BASE}00002.PNG`,  alt: 'Madison',                    type: 'logo'  },
  { src: `${BASE}00000.JPG`,  alt: 'Kevin Hart',                 type: 'photo' },
  { src: `${BASE}00032.PNG`,  alt: 'Vogue',                      type: 'logo'  },
  { src: `${BASE}00027.JPEG`, alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00028.PNG`,  alt: 'Puma',                       type: 'logo'  },
  { src: `${BASE}00001.JPG`,  alt: 'Vogue editorial',            type: 'photo' },
  { src: `${BASE}00005.JPG`,  alt: 'Barrentine Group',           type: 'logo'  },
  { src: `${BASE}00029.JPG`,  alt: 'Omar Epps — From Fatherless to Fatherhood', type: 'photo' },
  { src: `${BASE}00019.PNG`,  alt: 'Samantha Sung',              type: 'logo'  },
  { src: `${BASE}00004.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00014.PNG`,  alt: "Bingham's Bourbon",          type: 'logo'  },
  { src: `${BASE}00006.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00022.PNG`,  alt: 'Fenty',                      type: 'logo'  },
  { src: `${BASE}00015.JPG`,  alt: 'Status Magazine — Ian Somerhalder', type: 'photo' },
  { src: `${BASE}00012.JPG`,  alt: 'Athreya',                    type: 'logo'  },
  { src: `${BASE}00020.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00007.PNG`,  alt: 'Ed Hardy',                   type: 'logo'  },
  { src: `${BASE}00021.JPEG`, alt: 'Aaron Paul',                 type: 'photo' },
  { src: `${BASE}00030.PNG`,  alt: 'Pyrrha',                     type: 'logo'  },
  { src: `${BASE}00031.PNG`,  alt: 'Taller Slimmer Younger — Lauren Roxburgh', type: 'photo' },
  { src: `${BASE}00026.PNG`,  alt: 'Indochino',                  type: 'logo'  },
  { src: `${BASE}00013.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00025.JPG`,  alt: 'Billboard',                  type: 'logo'  },
  { src: `${BASE}00008.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00024.PNG`,  alt: 'Seventeen',                  type: 'logo'  },
  { src: `${BASE}00017.JPEG`, alt: 'Omar Epps',                  type: 'photo' },
  { src: `${BASE}00016.JPG`,  alt: 'Fenty x Puma',              type: 'logo'  },
  { src: `${BASE}00009.JPG`,  alt: 'The Courage to Rise — Liz Arch', type: 'photo' },
  { src: `${BASE}00011.JPG`,  alt: 'Athreya',                    type: 'photo' },
  { src: `${BASE}00018.JPG`,  alt: 'Billboard — Kobalt',         type: 'photo' },
  { src: `${BASE}00010.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00023.JPG`,  alt: 'Portrait',                   type: 'photo' },
]

function ClientGrid() {
  return (
    <section style={{
      padding: '100px 0 0',
      borderTop: '1px solid rgba(196,168,130,0.1)',
    }}>
      {/* Header */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 48px 56px' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
        }}>
          Clients &amp; Work
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 300,
          color: 'var(--cream)',
          lineHeight: 1.2,
          maxWidth: 560,
        }}>
          The work spans brands, talent, editorial, and founders.
        </h2>
      </div>

      {/* Masonry grid — full width */}
      <div style={{
        columns: '4 160px',
        columnGap: 3,
        padding: '0 3px',
      }}>
        {GRID_ITEMS.map((item, i) => (
          <div
            key={i}
            style={{
              breakInside: 'avoid',
              marginBottom: 3,
              backgroundColor: item.type === 'logo' ? 'var(--cream)' : '#0a0a0a',
              padding: item.type === 'logo' ? '28px 24px' : 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: item.type === 'logo' ? 100 : 'auto',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: '100%',
                height: item.type === 'logo' ? 'auto' : 'auto',
                maxHeight: item.type === 'logo' ? 60 : 'none',
                objectFit: item.type === 'logo' ? 'contain' : 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11,
        color: 'rgba(245,240,235,0.2)',
        letterSpacing: '0.08em',
        textAlign: 'right',
        padding: '16px 24px 0',
      }}>
        Partial list — 23 years of work.
      </p>
    </section>
  )
}

// ─── Block 4: Process / Services ─────────────────────────────────────────────

const PROCESS = [
  {
    number: '01',
    title: 'Market Authority Audit',
    body: 'We perform a deep dive diagnostic of your existing content, messaging, and data. Our goal is to identify the DNA of your expertise — locating exactly where your brand\'s leverage exists and where authority is being lost in your market.',
  },
  {
    number: '02',
    title: 'The Branding System',
    body: 'We build your Identity Architecture — a comprehensive system of verbal and visual standards. This isn\'t a one-off project; it\'s a living framework that ensures you show up online with the same caliber and authenticity as you do in person, across every touchpoint.',
  },
  {
    number: '03',
    title: 'Marketing Machine → Collect & Compound',
    body: 'Strategic narrative video and written authority power your entire ecosystem — social, AI search, email, and SEO. This is your Authority Pipeline: a system that extracts your expertise once to build compounding credibility and community over time.',
  },
  {
    number: '04',
    title: 'Authenticity Powered by AI',
    body: 'Your brand\'s attention flows into a single, permanent system. Custom landing pages and CRM architecture connect digital visibility to real human relationships. We track, measure, and optimize your ecosystem continuously so your community, credibility, and ROI compound while you stay focused on your vision.',
  },
]

function ProcessBlock() {
  return (
    <section style={{
      padding: '100px 48px',
      borderTop: '1px solid rgba(196,168,130,0.1)',
      backgroundColor: 'rgba(196,168,130,0.03)',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
        }}>
          How It Works
        </p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 300,
          color: 'var(--cream)',
          lineHeight: 1.2,
          marginBottom: 72,
          maxWidth: 520,
        }}>
          Four phases. One compounding system.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {PROCESS.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 40,
                padding: '48px 0',
                borderTop: i === 0 ? '1px solid rgba(196,168,130,0.15)' : '1px solid rgba(196,168,130,0.1)',
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 48,
                fontWeight: 300,
                color: 'rgba(196,168,130,0.25)',
                lineHeight: 1,
                paddingTop: 4,
              }}>
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 400,
                  color: 'var(--cream)',
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: 'rgba(245,240,235,0.55)',
                  maxWidth: 560,
                }}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 72,
          paddingTop: 48,
          borderTop: '1px solid rgba(196,168,130,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: 40,
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 300,
            color: 'var(--cream)',
            lineHeight: 1.3,
            maxWidth: 400,
          }}>
            Ready to build the system that compounds?
          </p>
          <a
            href="#outcomes"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              textDecoration: 'none',
              border: '1px solid rgba(196,168,130,0.4)',
              padding: '14px 32px',
              borderRadius: 2,
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            Choose your outcome
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Block 5: About ──────────────────────────────────────────────────────────

function AboutBlock() {
  return (
    <section style={{
      padding: '120px 48px',
      backgroundColor: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: 680,
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>

        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          marginBottom: 48,
        }}>
          About Us
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            'Stark Method is a strategy-first system built for founders who understand the value of consistency over time. Our perspective was forged in Los Angeles since the early 2000s inside industries where reputation, taste, and proximity are the only currencies that matter.',
            'We believe growth comes from clarity, discipline, and repetition — not from chasing fleeting tactics. While attention can be bought, respect is earned. And when respect compounds, momentum follows.',
            'Being close to culture and creative pressure has reinforced a simple truth: The brands that last are the ones that know what they stand for and show up that way consistently. Stark Method exists to help you build your narrative, run the machine, and let your brand compound in your market.',
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(14px, 1.6vw, 16px)',
                lineHeight: 1.8,
                color: 'rgba(26,26,26,0.72)',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Block 6: Strategy Session Form + Footer ─────────────────────────────────

function StrategyBlock() {
  const [form, setForm]         = useState({ firstName: '', lastName: '', email: '', website: '', bizIg: '', personalIg: '', phone: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving]     = useState(false)

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    `${form.firstName} ${form.lastName}`.trim(),
          email:   form.email,
          outcome: 'strategy-session',
          notes:   [
            form.website     ? `Website: ${form.website}`         : '',
            form.bizIg       ? `Biz IG: ${form.bizIg}`            : '',
            form.personalIg  ? `Personal IG: ${form.personalIg}`  : '',
            form.phone       ? `Phone: ${form.phone}`             : '',
            form.notes       ? `Notes: ${form.notes}`             : '',
          ].filter(Boolean).join('\n'),
        }),
      })
    } catch {}
    setSubmitted(true)
    setSaving(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(196,168,130,0.3)',
    padding: '12px 0',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: 'var(--cream)',
    outline: 'none',
  }

  return (
    <>
      {/* Form section */}
      <section style={{
        padding: '100px 48px 80px',
        backgroundColor: 'var(--ink)',
        borderTop: '1px solid rgba(196,168,130,0.1)',
      }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 16,
            textAlign: 'center',
          }}>
            Let&apos;s Work Together
          </p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 300,
            color: 'var(--cream)',
            textAlign: 'center',
            marginBottom: 56,
            lineHeight: 1.2,
          }}>
            Start with a strategy session.
          </h2>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 300,
                color: 'var(--cream)',
                marginBottom: 12,
              }}>
                We&apos;ll be in touch.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: 'rgba(245,240,235,0.4)',
              }}>
                Collin will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <input style={inputStyle} type="text"  placeholder="First name *"  value={form.firstName}  onChange={e => set('firstName',  e.target.value)} required />
                <input style={inputStyle} type="text"  placeholder="Last name"      value={form.lastName}   onChange={e => set('lastName',   e.target.value)} />
              </div>
              <input style={inputStyle} type="email" placeholder="Email *"                       value={form.email}      onChange={e => set('email',      e.target.value)} required />
              <input style={inputStyle} type="text"  placeholder="Business website"              value={form.website}    onChange={e => set('website',    e.target.value)} />
              <input style={inputStyle} type="text"  placeholder="Business Instagram handle"     value={form.bizIg}      onChange={e => set('bizIg',      e.target.value)} />
              <input style={inputStyle} type="text"  placeholder="Personal Instagram handle"     value={form.personalIg} onChange={e => set('personalIg', e.target.value)} />
              <input style={inputStyle} type="tel"   placeholder="Phone number"                  value={form.phone}      onChange={e => set('phone',      e.target.value)} />
              <input style={inputStyle} type="text"  placeholder="Anything you want us to know"  value={form.notes}      onChange={e => set('notes',      e.target.value)} />

              <div style={{ marginTop: 8 }}>
                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid var(--accent)',
                    color: 'var(--accent)',
                    borderRadius: 2,
                    padding: '16px 32px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    opacity: saving ? 0.6 : 1,
                    transition: 'all 0.25s ease',
                  }}
                >
                  {saving ? 'Sending…' : 'Book Your Strategy Session'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#3a3d42',
        padding: '40px 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 800,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: '#fff',
          lineHeight: 1,
          opacity: 0.9,
        }}>
          Stark Method
        </span>

        <a
          href="mailto:collin@starkmethodLLC.com"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(13px, 1.5vw, 16px)',
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
          }}
        >
          collin@starkmethodLLC.com
        </a>

        <a
          href="tel:+13104300551"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(13px, 1.5vw, 16px)',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
          }}
        >
          phone: (310) 430 0551
        </a>
      </footer>
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <IntroBlock />
      <OutcomeBlock />
      <ClientGrid />
      <ProcessBlock />
      <AboutBlock />
      <StrategyBlock />
    </main>
  )
}
