import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Kaska EM integrations — Kaska',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://em.kaskatech.com/integrations' },
}

export default function Page() {
  return <RedirectTo to="https://em.kaskatech.com/integrations" label="Kaska EM integrations" />
}
