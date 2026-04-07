'use client'

import { useEffect } from 'react'

export default function Tracker() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const ref = params.get('ref')
    if (ref) localStorage.setItem('sm_contact_id', ref)

    const payload = {
      email: localStorage.getItem('sm_email') || undefined,
      contact_id: ref || localStorage.getItem('sm_contact_id') || undefined,
      site: 'starkmethodllc.com',
      page: window.location.pathname,
      referrer: document.referrer || undefined,
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    }

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {})
  }, [])

  return null
}
