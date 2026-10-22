import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Vantmail',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://vantmail.ai' },
}

export default function Page() {
  return <RedirectTo to="https://vantmail.ai" label="Vantmail" />
}
