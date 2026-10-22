import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Kaska Technologies',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kaskatech.com/company' },
}

export default function Page() {
  return <RedirectTo to="https://kaskatech.com/company" label="Kaska Technologies" />
}
