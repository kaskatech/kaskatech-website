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

// Parent-brand palette for every route except /kaska-em (which keeps black / gold / lime).
// Default = granite (light). Preview override: ?palette=granite|stone|forest&mode=light|dark
const PALETTE_SCRIPT = `(function(){try{var d=document.documentElement,p=location.pathname;
function set(){var x=location.pathname.split('.html')[0];if(x.indexOf('/kaska-em')===0&&(x.length===9||x.charAt(9)==='/')){d.removeAttribute('data-palette');d.removeAttribute('data-mode');return}
var q=new URLSearchParams(location.search),pl=q.get('palette'),m=q.get('mode');
if(!/^(granite|stone|forest)$/.test(pl||''))pl='granite';if(!/^(light|dark)$/.test(m||''))m='light';
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
