import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Hire Professionals — Kaska',
  robots: { index: false, follow: true },
  alternates: { canonical: '/hire-professionals' },
}

export default function Page() {
  return <RedirectTo to="/hire-professionals" label="Hire Professionals" />
}
