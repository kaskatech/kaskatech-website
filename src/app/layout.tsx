import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Kaska Technologies & Services — Cybersecurity Products & Services',
  description: 'Kaska Technologies and Services — cybersecurity products, GRC consulting, VAPT, managed security, and cybersecurity manpower. Home of SafeCyber and CyberSecHire.',
  keywords: 'cybersecurity, GRC, VAPT, penetration testing, SOC, manpower, staffing, SafeCyber, CyberSecHire, compliance, cloud security',
  openGraph: {
    title: 'Kaska Technologies & Services',
    description: 'Cybersecurity products and services for enterprises. Home of SafeCyber — Autonomous Cyber Resilience Platform.',
    type: 'website',
    url: 'https://kaskatech.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#0D1B3E] antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
