import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Partners on kaskatech.com',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kaskatech.com/partners' },
}

export default function Page() {
  return <RedirectTo to="https://kaskatech.com/partners" label="Partners on kaskatech.com" />
}
