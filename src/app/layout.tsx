import type { Metadata } from 'next'
import { Fraunces, Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import RevealInit from '@/components/RevealInit'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kaska — Autonomous Cyber Risk & Resilience Platform',
  description:
    'One live picture of your risk — exposure in financial terms, a Cyber Resilience Score, validated controls, and compliance you can prove. Kaska responds and recovers at machine speed under human approval.',
  openGraph: {
    title: 'Kaska — Autonomous Cyber Risk & Resilience Platform',
    description:
      'Know your risk before attackers do. Own your real-time resilience — before, during and after a breach.',
    type: 'website',
    url: 'https://kaskatech.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}
        style={
          {
            '--serif': 'var(--font-fraunces), Georgia, serif',
            '--sans': 'var(--font-archivo), system-ui, sans-serif',
            '--mono': 'var(--font-plex-mono), monospace',
          } as React.CSSProperties
        }
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealInit />
      </body>
    </html>
  )
}
