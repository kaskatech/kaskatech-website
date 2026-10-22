import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ImageGuard from '@/components/ImageGuard'

const interTight = localFont({
  src: [
    { path: '../fonts/inter-tight-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/inter-tight-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/inter-tight-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter-tight',
  display: 'swap',
})
const inter = localFont({
  src: [
    { path: '../fonts/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
})
const plexMono = localFont({
  src: [
    { path: '../fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://em.kaskatech.com'),
  title: { default: 'Kaska Exposure Management (Kaska EM)', template: '%s · Kaska EM' },
  description:
    'Kaska Exposure Management Platform™ connects assets, exposures, controls, risk, cases and evidence into one intelligence layer above your existing security stack.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kaska Exposure Management (Kaska EM)',
    description:
      'Kaska Exposure Management Platform™ connects exposure, control validation, risk, detection & response, cases and evidence — before, during and after a breach.',
    type: 'website',
    url: 'https://em.kaskatech.com',
    siteName: 'Kaska Exposure Management',
  },
}

// em.kaskatech.com uses the original Kaska EM visual language (black, gold, lime).
// The kaskatech.com parent-brand palette script is deliberately not applied here.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
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
