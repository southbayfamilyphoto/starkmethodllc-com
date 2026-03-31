'use client'

import Link from 'next/link'
import { POSTS } from './posts'

export default function JournalPage() {
  return (
    <div style={{ backgroundColor: 'var(--ink)', minHeight: '100vh', color: 'var(--cream)' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(196,168,130,0.15)', padding: '32px 48px' }}>
        <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(245,240,235,0.4)', letterSpacing: '0.08em', textDecoration: 'none' }}>
          ← Stark Method
        </Link>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 48px' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          Journal
        </p>
        <h1 style={{ fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif", fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: 'var(--cream)', marginBottom: 64, lineHeight: 1.1 }}>
          Thinking out loud.
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              style={{ textDecoration: 'none', display: 'block', padding: '40px 0', borderTop: '1px solid rgba(196,168,130,0.12)' }}
            >
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(196,168,130,0.5)', marginBottom: 12 }}>
                {post.date}
              </p>
              <h2 style={{ fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif", fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 400, color: 'var(--cream)', marginBottom: 16, lineHeight: 1.2 }}>
                {post.title}
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.7, color: 'rgba(245,240,235,0.5)', maxWidth: 560 }}>
                {post.preview}
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 20 }}>
                Read →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
