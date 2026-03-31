import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, POSTS } from '../posts'

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <div style={{ backgroundColor: 'var(--ink)', minHeight: '100vh', color: 'var(--cream)' }}>

      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(196,168,130,0.15)', padding: '32px 48px' }}>
        <Link href="/journal" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(245,240,235,0.4)', letterSpacing: '0.08em', textDecoration: 'none' }}>
          ← Journal
        </Link>
      </div>

      <article style={{ maxWidth: 680, margin: '0 auto', padding: '80px 48px 120px' }}>

        {/* Meta */}
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(196,168,130,0.5)', marginBottom: 24 }}>
          {post.date}
        </p>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 48 }}>
          {post.title}
        </h1>

        {/* Red line */}
        <div style={{ width: 48, height: 2, backgroundColor: '#8B1A1A', marginBottom: 48 }} />

        {/* Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {post.body.map((section, i) => {
            if (section.type === 'h2') return (
              <h2 key={i} style={{ fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif", fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.2, marginTop: 16 }}>
                {section.content as string}
              </h2>
            )
            if (section.type === 'quote') return (
              <blockquote key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 24, margin: '8px 0' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1.5, fontStyle: 'italic' }}>
                  {section.content as string}
                </p>
              </blockquote>
            )
            if (section.type === 'list') return (
              <ul key={i} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {(section.content as string[]).map((item, j) => (
                  <li key={j} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: 'rgba(245,240,235,0.7)', lineHeight: 1.6, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            )
            return (
              <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,235,0.7)' }}>
                {section.content as string}
              </p>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div style={{ marginTop: 80, paddingTop: 48, borderTop: '1px solid rgba(196,168,130,0.15)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 300, color: 'rgba(245,240,235,0.6)', marginBottom: 32 }}>
            Ready to build your leverage?
          </p>
          <a
            href="/#outcomes"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '14px 36px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.2s ease' }}
          >
            Start the Conversation
          </a>
        </div>

      </article>
    </div>
  )
}
