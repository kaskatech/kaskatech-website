import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Kaska EM',
  robots: { index: false, follow: true },
  alternates: { canonical: '/' },
}

export default function Page() {
  return <RedirectTo to="/" label="Kaska EM" />
}
