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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <IntroBlock />
      <OutcomeBlock />
    </main>
  )
}
