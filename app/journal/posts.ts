export interface Post {
  slug: string
  title: string
  date: string
  preview: string
  body: Section[]
}

export interface Section {
  type: 'p' | 'h2' | 'quote' | 'list'
  content: string | string[]
}

export const POSTS: Post[] = [
  {
    slug: 'what-the-hell-is-founder-leverage',
    title: 'What the Hell is Founder Leverage',
    date: 'March 31, 2026',
    preview: 'It is not a content strategy. It is not a brand refresh. It is the alignment between who you are and how you show up everywhere — and it is the single biggest driver of opportunity in your business.',
    body: [
      {
        type: 'p',
        content: 'Every founder I talk to has the same problem. They are good at what they do. Really good. But the world does not know it yet — or the world knows it but not at the scale it should. And they have tried things. Social media. A new website. A rebrand. A PR firm. Maybe even a video or two.',
      },
      {
        type: 'p',
        content: 'None of it quite stuck. Not because they did it wrong. But because they were solving the wrong problem.',
      },
      {
        type: 'h2',
        content: 'Founder Leverage is your style.',
      },
      {
        type: 'p',
        content: 'Not your logo. Not your color palette. Not your content calendar. Your style — the way your values, your talent, and your presence show up consistently across everything you do. Your social, your email, your website, the room you walk into, the call you jump on.',
      },
      {
        type: 'p',
        content: 'When those are in sync — when the online version of you matches the real version of you — something shifts. Conversations get easier. Deals close faster. The right people start finding you instead of the other way around.',
      },
      {
        type: 'quote',
        content: 'When your values, talent, and presence are in sync everywhere — online and off — the right people find you. And they say yes.',
      },
      {
        type: 'h2',
        content: 'Being in sync is the opportunity.',
      },
      {
        type: 'p',
        content: 'Most founders operate in pieces. Their Instagram looks one way. Their website says something slightly different. Their emails sound like a different person wrote them. The way they show up in a meeting does not match any of it.',
      },
      {
        type: 'p',
        content: 'That gap is where opportunity gets lost. Not because any one piece is bad — but because nothing adds up to a single clear picture of who you are and what you do.',
      },
      {
        type: 'p',
        content: 'Founder Leverage is about closing that gap. Your social, your email, your website — in sync. Your online presence matching your real presence. Your style showing up the same way everywhere, every time.',
      },
      {
        type: 'p',
        content: 'The more in sync you are, the more opportunities you create. You close more. You close bigger. B2B and B2C.',
      },
      {
        type: 'h2',
        content: 'The real power is who you can work with.',
      },
      {
        type: 'p',
        content: 'When your Founder Leverage is built — when your style is clear, your presence is consistent, and your market knows exactly who you are — something else happens.',
      },
      {
        type: 'p',
        content: 'The best people in the world start saying yes to you.',
      },
      {
        type: 'p',
        content: 'Not because you got lucky. Because people at that level do not work with strangers. They work with people they already know, already trust, already recognize. Founder Leverage is what builds that recognition — before you are ever in the same room.',
      },
      {
        type: 'h2',
        content: 'Humans and AI trust the same thing.',
      },
      {
        type: 'p',
        content: 'Here is something most founders do not know yet. The thing that builds trust with the right human buyer is the exact same thing that makes AI cite you as the authority in your space.',
      },
      {
        type: 'p',
        content: 'Consistency. Value. Showing up the same way every time.',
      },
      {
        type: 'p',
        content: 'AI Search is not SEO. You cannot game it. You can only earn it — by being consistent, valuable, and clear about who you are and what you stand for. The founder who is in sync builds trust with both humans and AI. At the same time. With the same work.',
      },
      {
        type: 'quote',
        content: 'SEO gets you found. AI Search gets you chosen. Founder Leverage builds both.',
      },
      {
        type: 'h2',
        content: 'SEO and social are the byproduct.',
      },
      {
        type: 'p',
        content: 'We do not manage your social. We do not do SEO. But when we build your Founder Leverage — when your style is in sync and your authority is established — SEO happens. Social grows. AI cites you. Referrals come in. Inbound leads find you.',
      },
      {
        type: 'p',
        content: 'None of those are things you chase. They are all things that happen when the foundation is right.',
      },
      {
        type: 'list',
        content: [
          'SEO — because you are consistent and authoritative',
          'Social growth — because you have something worth following',
          'AI citations — because you are worth citing',
          'Referrals — because your community trusts you',
          'Inbound leads — because the right people already know who you are',
        ],
      },
      {
        type: 'h2',
        content: 'This is what we build.',
      },
      {
        type: 'p',
        content: 'Stark Method exists to build Founder Leverage. Not a brand deck. Not a content strategy. Not another set of deliverables you have to manage.',
      },
      {
        type: 'p',
        content: 'We build the foundation. The sync. The style. The system that connects you to the market that needs you — and keeps you there.',
      },
      {
        type: 'p',
        content: 'When the foundation is built right, everything else follows.',
      },
      {
        type: 'quote',
        content: 'Your style is your leverage. We build the sync.',
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug)
}
