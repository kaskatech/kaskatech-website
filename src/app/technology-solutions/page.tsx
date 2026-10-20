import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Managed Security Services — Kaska',
  robots: { index: false, follow: true },
  alternates: { canonical: '/managed-services' },
}

export default function Page() {
  return <RedirectTo to="/managed-services" label="Managed Security Services" />
}
