import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Kaska EM & Cyber Resilience — Kaska',
  robots: { index: false, follow: true },
  alternates: { canonical: '/kaska-em' },
}

export default function Page() {
  return <RedirectTo to="/kaska-em" label="Kaska EM & Cyber Resilience" />
}
