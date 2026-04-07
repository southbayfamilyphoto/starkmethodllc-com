import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_KEY ?? ''
    )
    const body = await request.json()
    const { email, contact_id: refContactId, site, page, referrer, utm_source, utm_medium, utm_campaign, device } = body

    let contact_id = refContactId ? parseInt(refContactId) : null
    if (!contact_id && email) {
      const { data } = await supabase
        .from('contacts')
        .select('id')
        .eq('email', email)
        .single()
      contact_id = data?.id ?? null
    }

    await supabase.from('visits').insert({
      contact_id,
      email: email || null,
      site: site || null,
      page,
      referrer: referrer || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      device: device || null,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false })
  }
}
