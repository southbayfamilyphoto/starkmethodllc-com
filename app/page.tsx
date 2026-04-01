'use client'

import React, { useEffect, useState, useRef } from 'react'

// ─── Block 1: Animated Intro ─────────────────────────────────────────────────

const TITLE = 'Stark Method'
const TAGLINE = 'Done for you founder leverage.'

const LETTER_DELAYS: Record<number, number> = {}
TITLE.split('').forEach((_, i) => {
  LETTER_DELAYS[i] = 0.1 + i * 0.07
})

function IntroBlock() {
  const [showTagline, setShowTagline] = useState(false)
  const [showLine, setShowLine]       = useState(false)
  const [showProps, setShowProps]     = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowTagline(true), 1200)
    const t2 = setTimeout(() => setShowLine(true),    2000)
    const t3 = setTimeout(() => setShowProps(true),   2600)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '80px 48px 0px',
      maxWidth: 960,
      margin: '0 auto',
    }}>

      {/* Title */}
      <h1 style={{
        fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif",
        fontSize: 'clamp(52px, 8vw, 100px)',
        fontWeight: 400,
        letterSpacing: '-0.01em',
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
        <p
          className="fade-up"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'rgba(245,240,235,0.7)',
            letterSpacing: '0.01em',
            marginBottom: 32,
            animationDuration: '0.8s',
            animationDelay: '0s',
          }}
        >
          {TAGLINE}
        </p>
      )}

      {/* Gold line */}
      {showLine && (
        <span
          className="accent-line"
          style={{ marginBottom: 32, animationDelay: '0s', animationDuration: '0.8s', background: '#8B1A1A', height: 2 }}
        />
      )}


    </section>
  )
}

// ─── Block 2: Outcome Selector ────────────────────────────────────────────────

const OUTCOMES = [
  {
    id: 'founder-leverage',
    label: 'Founder Leverage',
    headline: 'Build the brand that works while you do.',
    sub: 'Your name, your story, your positioning — turned into a system that generates leverage at scale.',
    items: [
      'Brand architecture and positioning',
      'Visual identity and messaging system',
      'Website and digital presence rebuild',
      'Full creative and strategic direction',
    ],
    note: 'Best for: founders whose brand no longer reflects the quality of the work.',
  },
  {
    id: 'market-authority',
    label: 'Market Authority',
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
    id: 'community-growth',
    label: 'Community Growth',
    headline: 'Build the room people want to be in.',
    sub: 'The highest-leverage marketing is a community that recruits itself. We architect that.',
    items: [
      'Community platform and structure',
      'Membership and onboarding system',
      'Content and event programming',
      'Referral loops built into the experience',
    ],
    note: 'Best for: founders who want leverage. One to many instead of one to one.',
  },
  {
    id: 'ai-search',
    label: 'AI Search',
    headline: 'Become the answer AI gives.',
    sub: 'When someone asks an AI who to hire, you want your name to come up. Consistency across every platform is how that happens. We build it.',
    items: [
      'Brand consistency across all platforms',
      'AI citation and authority architecture',
      'Structured content for AI indexing',
      'Schema, signals, and search dominance',
    ],
    note: 'Best for: founders who understand that AI search is the next category war and want to win it.',
  },
]

function OutcomeBlock() {
  const [active, setActive] = useState<string | null>('founder-leverage')

  const current = OUTCOMES.find(o => o.id === active)

  return (
    <section
      id="outcomes"
      style={{
        padding: '24px 48px 80px',
        maxWidth: 960,
        margin: '0 auto',
      }}
    >
      {/* Section label */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(32px, 5vw, 52px)',
        fontWeight: 300,
        letterSpacing: '0.04em',
        color: 'var(--accent)',
        marginBottom: 0,
        textAlign: 'center',
      }}>
        One system
      </p>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(32px, 5vw, 52px)',
        fontWeight: 300,
        color: 'rgba(245,240,235,0.55)',
        lineHeight: 1.15,
        marginBottom: 48,
        maxWidth: 800,
        textAlign: 'center',
        margin: '0 auto 48px',
      }}>
        Four outcomes
      </h2>

      {/* Outcome buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-2 mb-12">
        {OUTCOMES.map(o => (
          <button
            key={o.id}
            className={`outcome-btn ${active === o.id ? 'active' : ''} max-w-[48%] md:max-w-none [white-space:normal] md:[white-space:nowrap] text-center`}
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
            marginBottom: 64,
            textAlign: 'center',
          }}
        >
          <h3 className="text-[32px] md:text-[clamp(24px,3.5vw,36px)]" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            color: 'var(--cream)',
            marginBottom: 12,
            textWrap: 'balance',
          }}>
            {current.headline}
          </h3>
          <p className="text-sm md:text-[17px]" style={{
            fontFamily: "'DM Sans', sans-serif",
            color: 'rgba(245,240,235,0.65)',
            lineHeight: 1.5,
            maxWidth: 560,
            margin: '0 auto 28px',
          }}>
            {current.sub}
          </p>

          <ul style={{ listStyle: 'none', marginBottom: 28, textAlign: 'center' }}>
            {current.items.map((item, i) => (
              <li key={i} className="text-sm md:text-base" style={{
                fontFamily: "'DM Sans', sans-serif",
                color: 'rgba(245,240,235,0.8)',
                padding: '6px 0',
                lineHeight: 1.5,
              }}>
                {item}
              </li>
            ))}
          </ul>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            letterSpacing: '0.06em',
            color: 'rgba(196,168,130,0.7)',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
            {current.note}
          </p>
        </div>
      )}

      <div style={{
        borderTop: '1px solid rgba(196,168,130,0.15)',
        paddingTop: 40,
        textAlign: 'center',
      }}>
        <a
          href="#conversation"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            textDecoration: 'none',
            border: '1px solid rgba(196,168,130,0.4)',
            padding: '14px 40px',
            borderRadius: 2,
            display: 'inline-block',
            transition: 'all 0.2s ease',
          }}
        >
          Start the Conversation
        </a>
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
  { src: `${BASE}00029.PNG`,  alt: 'Omar Epps — From Fatherless to Fatherhood', type: 'photo' },
  { src: `${BASE}00019.PNG`,  alt: 'Samantha Sung',              type: 'logo'  },
  { src: `${BASE}00004.JPG`,  alt: 'Portrait',                   type: 'photo' },
  { src: `${BASE}00014.JPG`,  alt: "Bingham's Bourbon",          type: 'logo'  },
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
  const [showAll, setShowAll]   = useState(false)
  const [visible2, setVisible2] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const visible = showAll ? GRID_ITEMS : GRID_ITEMS.slice(0, 12)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible2(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section style={{
      padding: '100px 0 60px',
      backgroundColor: '#F2EDE4',
    }}>
      {/* Header */}
      <div ref={ref} style={{ maxWidth: 960, margin: '0 auto', padding: '0 48px 48px', textAlign: 'center' }}>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 300,
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          margin: '0 auto 32px',
          color: 'rgba(26,26,26,0.85)',
          opacity: visible2 ? 1 : 0,
          transform: visible2 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          Who we&apos;ve built with.
        </h2>

      </div>

      {/* Grid with animated border frame */}
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 48px',
        position: 'relative',
      }}>
        {/* Top line sweeps across */}
        <div style={{ overflow: 'hidden', marginBottom: 0 }}>
          <div style={{
            height: 1,
            backgroundColor: 'rgba(196,168,130,0.35)',
            width: visible2 ? '100%' : '0%',
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
          }} />
        </div>

        {/* Left border animates down */}
        <div style={{
          position: 'absolute',
          left: 48,
          top: 1,
          width: 1,
          backgroundColor: 'rgba(196,168,130,0.35)',
          height: visible2 ? 'calc(100% - 1px)' : '0%',
          transition: 'height 1s cubic-bezier(0.4, 0, 0.2, 1) 1.6s',
        }} />

        {/* Right border animates down */}
        <div style={{
          position: 'absolute',
          right: 48,
          top: 1,
          width: 1,
          backgroundColor: 'rgba(196,168,130,0.35)',
          height: visible2 ? 'calc(100% - 1px)' : '0%',
          transition: 'height 1s cubic-bezier(0.4, 0, 0.2, 1) 1.6s',
        }} />

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: 1,
            backgroundColor: visible2 ? 'rgba(196,168,130,0.35)' : 'transparent',
            transition: 'background-color 0.6s ease 2.6s',
          }}
        >
          {visible.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#F2EDE4',
                height: 220,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: item.type === 'logo' ? '24px 28px' : '8px',
                overflow: 'hidden',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 48px' }}>
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            width: '100%',
            padding: '20px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(196,168,130,0.4)',
            fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif",
            fontSize: 16,
            letterSpacing: '0.08em',
            color: 'rgba(26,26,26,0.6)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginTop: 1,
          }}
        >
          {showAll ? 'Show Less' : 'Load More'}
        </button>
      </div>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11,
        color: 'rgba(26,26,26,0.25)',
        letterSpacing: '0.08em',
        textAlign: 'center',
        paddingTop: 24,
      }}>
        Partial list. 23 years of work.
      </p>
    </section>
  )
}

// ─── Block 4: Process / Services ─────────────────────────────────────────────

const PROCESS = [
  {
    number: '01',
    title: 'The Leverage Audit',
    body: 'We start by finding where your leverage already exists and where it\'s being lost. Deep diagnostic of your content, positioning, and market presence so we build on what\'s real, not what sounds good.',
  },
  {
    number: '02',
    title: 'The Identity System',
    body: 'We build your brand architecture — the verbal and visual standards that make you unmistakable. Consistent across every platform. Built once, maintained as a living system. This is how AI learns who the authority is.',
  },
  {
    number: '03',
    title: 'The Leverage Machine',
    body: 'Video, content, and narrative strategy that powers your entire ecosystem — social, email, AI search, and SEO. Your story, extracted once and compounded everywhere. You stay focused on your business. We run the machine.',
  },
  {
    number: '04',
    title: 'Track. Prove. Scale.',
    body: 'Every piece of attention flows into a single system. CRM, landing pages, and tracking that connects visibility to real relationships and real revenue. We measure what works and scale it. The ROI is the proof.',
  },
]

function ProcessBlock() {
  return (
    <section style={{
      padding: '100px 48px',
      borderTop: '1px solid rgba(196,168,130,0.1)',
      backgroundColor: '#3a3d42',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
          textAlign: 'center',
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
          textAlign: 'center',
          margin: '0 auto 72px',
        }}>
          Four phases. One system. Compounding leverage.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 680, margin: '0 auto' }}>
          {PROCESS.map((step, i) => (
            <div
              key={step.number}
              style={{
                padding: '48px 0',
                borderTop: i === 0 ? '1px solid rgba(196,168,130,0.15)' : '1px solid rgba(196,168,130,0.1)',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 300,
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: 16,
              }}>
                {step.number}
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 400,
                color: 'var(--cream)',
                marginBottom: 16,
                lineHeight: 1.2,
                textWrap: 'balance',
              }}>
                {step.title}
              </h3>
              <p className="text-sm md:text-[15px]" style={{
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.5,
                color: 'rgba(245,240,235,0.55)',
                maxWidth: 520,
                margin: '0 auto',
              }}>
                {step.body}
              </p>
            </div>
          ))}
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
      backgroundColor: '#E8DDD0',
    }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Main headline */}
        <h2 style={{
          fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif",
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 400,
          color: 'rgba(26,26,26,0.85)',
          lineHeight: 1.1,
          textAlign: 'center',
          margin: '0 auto 64px',
        }}>
          About Us
        </h2>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{
          gap: 48,
          borderTop: '1px solid rgba(26,26,26,0.12)',
          paddingTop: 48,
        }}>
          {[
            {
              label: 'The Foundation',
              body: '23 years in Hollywood. Working inside the rooms where taste is the only currency — with celebrities, directors, major brands, and the people who shape culture. Style at that level is not aesthetic. It is identity, authority, and trust operating in perfect sync. That is what we bring to founders.',
            },
            {
              label: 'The Belief',
              body: 'The founders who win are the ones who show up the same way everywhere — in the room, on the feed, in the inbox, in the AI result. Consistency is no longer just branding. It is how trust is built with humans and how authority is recognized by AI. We build that sync for you.',
            },
            {
              label: 'The Work',
              body: 'We are not an agency. We are not a vendor. We are your partner — peer-level, in the room, building alongside you. We build your leverage like it is ours. Done for you, built to last, until the system works without you in every seat.',
            },
          ].map((col) => (
            <div key={col.label}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: col.label === 'The Foundation' ? 16 : 13,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: col.label === 'The Foundation' ? '#8B1A1A' : 'rgba(196,168,130,0.9)',
                marginBottom: 16,
              }}>
                {col.label}
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 17,
                lineHeight: 1.8,
                color: 'rgba(26,26,26,0.65)',
              }}>
                {col.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Block 6: Strategy Session Form + Footer ─────────────────────────────────

function StrategyBlock() {
  const [form, setForm]           = useState({ name: '', email: '', building: '' })
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving]       = useState(false)

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSaving(true)
    try {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          outcome: 'strategy-session',
          notes:   form.building ? `What they're building: ${form.building}` : '',
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
    fontSize: 15,
    color: 'var(--cream)',
    outline: 'none',
  }

  const btnStyle: React.CSSProperties = {
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
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    marginTop: 8,
  }

  return (
    <>
      {/* Form section */}
      <section
        id="conversation"
        style={{
          padding: '100px 48px 80px',
          backgroundColor: 'var(--ink)',
          borderTop: '1px solid rgba(196,168,130,0.1)',
        }}
      >
        <div style={{ maxWidth: 480, margin: '0 auto' }}>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 300,
            color: 'var(--cream)',
            marginBottom: 56,
            lineHeight: 1.2,
            textAlign: 'center',
          }}>
            Start the Conversation.
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
                Check your email.
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: 'rgba(245,240,235,0.45)',
                marginBottom: 40,
              }}>
                Collin will reach out within 24 hours.
              </p>
              <a
                href="https://cal.com/collinstark/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...btnStyle, display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
              >
                Or book your time now
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <input style={inputStyle} type="text"  placeholder="Your name *"           value={form.name}     onChange={e => set('name',     e.target.value)} required />
              <input style={inputStyle} type="email" placeholder="Email *"               value={form.email}    onChange={e => set('email',    e.target.value)} required />
              <textarea
                placeholder="What are you building?"
                value={form.building}
                onChange={e => set('building', e.target.value)}
                rows={3}
                style={{
                  ...inputStyle,
                  borderBottom: 'none',
                  border: '1px solid rgba(196,168,130,0.3)',
                  padding: '12px 16px',
                  resize: 'none',
                  borderRadius: 2,
                }}
              />
              <button type="submit" style={{ ...btnStyle, opacity: saving ? 0.6 : 1, cursor: saving ? 'not-allowed' : 'pointer' }} disabled={saving}>
                {saving ? 'Sending…' : 'Submit Information'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#3a3d42',
        padding: '60px 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}>
        <span style={{
          fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif",
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: 400,
          letterSpacing: '0.02em',
          color: '#fff',
          lineHeight: 1,
          opacity: 0.9,
          whiteSpace: 'nowrap',
        }}>
          Stark Method
        </span>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 32,
        }}>
          <a
            href="/journal"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Journal
          </a>

          <a
            href="mailto:collin@starkmethodLLC.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            collin@starkmethodLLC.com
          </a>

          <a
            href="tel:+13104300551"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(12px, 1.2vw, 14px)',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            (310) 430-0551
          </a>
        </div>
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
