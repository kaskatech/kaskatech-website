import type { Metadata } from 'next'
import { Inter, Inter_Tight, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ImageGuard from '@/components/ImageGuard'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kaska — Autonomous Cyber Risk & Resilience Platform™',
  description:
    'Kaska Exposure Management Platform™ connects assets, exposures, controls, risk, cases and evidence into one intelligence layer above your existing security stack.',
  openGraph: {
    title: 'Kaska — Autonomous Cyber Risk & Resilience Platform™',
    description:
      'Kaska Exposure Management Platform™ connects exposure, control validation, risk, detection & response, cases and evidence — before, during and after a breach.',
    type: 'website',
    url: 'https://kaskatech.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ImageGuard />
      </body>
    </html>
  )
}
