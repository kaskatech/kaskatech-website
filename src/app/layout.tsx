import type { Metadata } from 'next'
import { Fraunces, Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-fraunces', display: 'swap' })
const archivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-archivo', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Kaska — Launching shortly',
  description: 'Kaska — the Autonomous Cyber Risk & Resilience Platform. Launching shortly.',
  openGraph: { title: 'Kaska — Launching shortly', description: 'The Autonomous Cyber Risk & Resilience Platform. Launching shortly.', type: 'website', url: 'https://kaskatech.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`} style={{ '--serif': 'var(--font-fraunces), Georgia, serif', '--sans': 'var(--font-archivo), system-ui, sans-serif', '--mono': 'var(--font-plex-mono), monospace' } as React.CSSProperties}>
        {children}
      </body>
    </html>
  )
}
