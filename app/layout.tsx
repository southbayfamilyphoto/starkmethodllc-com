import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond, Bebas_Neue, Bodoni_Moda } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
})

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
})

export const metadata: Metadata = {
  title: 'Stark Method — Founder Brand Architecture',
  description: 'We build founder-led systems. The creative is the fuel. The tracking proves the ROI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} ${bebasNeue.variable} ${bodoniModa.variable}`}>
        {children}
      </body>
    </html>
  )
}
