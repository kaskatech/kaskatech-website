import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Kaska EM & Cyber Resilience platform capabilities — Kaska',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://em.kaskatech.com/features' },
}

export default function Page() {
  return <RedirectTo to="https://em.kaskatech.com/features" label="Kaska EM & Cyber Resilience platform capabilities" />
}
