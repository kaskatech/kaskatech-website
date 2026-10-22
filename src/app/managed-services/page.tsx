import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Managed Services on kaskatech.com',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kaskatech.com/managed-services' },
}

export default function Page() {
  return <RedirectTo to="https://kaskatech.com/managed-services" label="Managed Services on kaskatech.com" />
}
