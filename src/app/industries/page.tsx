import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Industries on kaskatech.com',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kaskatech.com/industries' },
}

export default function Page() {
  return <RedirectTo to="https://kaskatech.com/industries" label="Industries on kaskatech.com" />
}
