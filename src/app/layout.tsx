import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ImageGuard from '@/components/ImageGuard'

// Fonts are self-hosted (src/fonts) so the build never depends on fetching Google Fonts.
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

// Parent-brand palette for every route. Brand colours appear only on the home door cards.
// Default = granite (light). Preview override: ?palette=granite|stone|forest&mode=light|dark
const PALETTE_SCRIPT = `(function(){try{var d=document.documentElement,p=location.pathname;
function set(){var x=location.pathname.split('.html')[0];var q=new URLSearchParams(location.search),pl=q.get('palette'),m=q.get('mode');
if(!/^(granite|stone|forest|midnight)$/.test(pl||''))pl='granite';if(!/^(light|dark)$/.test(m||''))m='light';
d.setAttribute('data-palette',pl);d.setAttribute('data-mode',m)}
set();var ps=history.pushState;history.pushState=function(){ps.apply(this,arguments);set()};addEventListener('popstate',set)}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PALETTE_SCRIPT }} />
      </head>
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
