import type { Metadata } from 'next'
import RedirectTo from '@/components/k/RedirectTo'

export const metadata: Metadata = {
  title: 'Hire Professionals on kaskatech.com',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kaskatech.com/hire-professionals' },
}

export default function Page() {
  return <RedirectTo to="https://kaskatech.com/hire-professionals" label="Hire Professionals on kaskatech.com" />
}
