import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const { createClient } = await import('@supabase/supabase-js')
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_KEY ?? ''
  )
  const { name, email, company, outcome, notes } = await req.json()

  const { error } = await supabase.from('contacts').insert([{
    name,
    email:      email || null,
    phone:      null,
    lane:       'Uncategorized',
    source:     `starkmethodllc.com — ${outcome || 'inquiry'}`,
    account:    'collin@starkmethodllc.com',
    notes:      [company ? `Company: ${company}` : '', notes || ''].filter(Boolean).join('\n'),
    vip:        false,
    buyer:      false,
    interaction: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }])

  if (error) {
    console.error('Supabase error:', error)
    // Don't fail visibly — form shows success either way
  }

  return NextResponse.json({ ok: true })
}
