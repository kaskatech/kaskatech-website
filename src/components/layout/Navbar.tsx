'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X, Shield, ArrowRight } from 'lucide-react'

const services = [
  { label: 'Continuous Assessment',    href: '/services/assessment',  desc: 'Exposure & Validation — VM, BAS, CART, CTEM, PTaaS, ASM' },
  { label: 'Continuous Monitoring',    href: '/services/monitoring',  desc: 'Cyber Defense Center — 24×7 SOC, SIEM, EDR, SOAR, TI' },
  { label: 'Continuous Compliance',    href: '/services/compliance',  desc: 'GRC & Compliance Programme — frameworks, audits, TPRM' },
  { label: 'Cyber & Digital Forensics',href: '/services/forensics',   desc: 'DFIR retainer, malware analysis, forensic readiness' },
  { label: 'Manpower & Staffing',      href: '/services/manpower',    desc: 'Cybersecurity talent acquisition and executive search' },
]

const products = [
  { label: 'SafeCyber',    href: 'https://safecyber.io',     desc: 'Autonomous Cyber Resilience Platform™' },
  { label: 'CyberSecHire', href: 'https://cybersechire.com', desc: 'Cybersecurity talent marketplace' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [svcOpen, setSvcOpen]   = useState(false)
  const [prdOpen, setPrdOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const svcTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prdTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openSvc  = () => { if (svcTimer.current) clearTimeout(svcTimer.current); setSvcOpen(true) }
  const closeSvc = () => { svcTimer.current = setTimeout(() => setSvcOpen(false), 150) }
  const openPrd  = () => { if (prdTimer.current) clearTimeout(prdTimer.current); setPrdOpen(true) }
  const closePrd = () => { prdTimer.current = setTimeout(() => setPrdOpen(false), 150) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-black/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/kaska-logo.png"
            alt="Kaska Cyber Security"
            width={160}
            height={44}
            className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-brand rounded-xl hover:bg-brand/5 transition-all">Home</Link>
          <Link href="/about" className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-brand rounded-xl hover:bg-brand/5 transition-all">About</Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={openSvc} onMouseLeave={closeSvc}>
            <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-brand rounded-xl hover:bg-brand/5 transition-all">
              Services <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${svcOpen ? 'rotate-180' : ''}`} />
            </button>
            {svcOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl border border-black/5 p-3 z-50"
                style={{ marginTop: 0, paddingTop: '8px', width: '400px' }}
                onMouseEnter={openSvc}
                onMouseLeave={closeSvc}
              >
                <Link href="/services" onClick={() => setSvcOpen(false)}
                  className="flex items-center justify-between px-3 py-2 mb-1 rounded-xl bg-brand/4 hover:bg-brand/8 transition-colors group">
                  <div>
                    <span className="text-[11px] font-black tracking-widest uppercase text-brand block">Cyber Resilience Services</span>
                    <span className="text-[11px] text-slate-400">View all packages — Silver, Gold, Platinum</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                </Link>
                <div className="border-t border-black/5 my-2" />
                <div className="text-[9px] font-bold tracking-widest uppercase text-slate-400 px-3 pb-1">Service Programmes</div>
                {services.map(s => (
                  <Link key={s.href} href={s.href} onClick={() => setSvcOpen(false)}
                    className="flex flex-col px-3 py-2 rounded-xl hover:bg-mist transition-colors group">
                    <span className="text-[13px] font-semibold text-[#0D0D14] group-hover:text-brand transition-colors">{s.label}</span>
                    <span className="text-[11px] text-slate-400 mt-0.5">{s.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products dropdown */}
          <div className="relative" onMouseEnter={openPrd} onMouseLeave={closePrd}>
            <button className="flex items-center gap-1 px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-brand rounded-xl hover:bg-brand/5 transition-all">
              Products <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${prdOpen ? 'rotate-180' : ''}`} />
            </button>
            {prdOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-premium border border-black/5 p-3 z-50"
                style={{ marginTop: 0, paddingTop: '8px' }}
                onMouseEnter={openPrd}
                onMouseLeave={closePrd}
              >
                <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 px-3 py-2">Our Products</div>
                {products.map(p => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                    onClick={() => setPrdOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-mist transition-colors group">
                    <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                    <div>
                      <span className="text-[13px] font-semibold text-[#0D0D14] group-hover:text-brand transition-colors block">{p.label} ↗</span>
                      <span className="text-[11px] text-slate-400">{p.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-brand rounded-xl hover:bg-brand/5 transition-all">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-brand rounded-xl hover:bg-brand/5 transition-colors">
            <Shield className="w-3.5 h-3.5" /> SafeCyber ↗
          </a>
          <Link href="/contact" className="btn-brand text-[13px] px-5 py-2.5 rounded-xl">
            Get in Touch <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 rounded-xl hover:bg-black/5 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5 text-[#0D0D14]" /> : <Menu className="w-5 h-5 text-[#0D0D14]" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-black/5 px-6 py-5 space-y-1 shadow-xl">
          {[
            { label: 'Home',                      href: '/' },
            { label: 'About',                     href: '/about' },
            { label: 'Cyber Resilience Services', href: '/services' },
            { label: 'Continuous Assessment',     href: '/services/assessment' },
            { label: 'Continuous Monitoring',     href: '/services/monitoring' },
            { label: 'Continuous Compliance',     href: '/services/compliance' },
            { label: 'Cyber & Digital Forensics', href: '/services/forensics' },
            { label: 'Manpower & Staffing',       href: '/services/manpower' },
            { label: 'Contact',                   href: '/contact' },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand hover:bg-mist rounded-xl transition-colors">
              {item.label}
            </Link>
          ))}
          <div className="pt-3 flex gap-2">
            <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-3 text-sm font-semibold text-brand border border-brand/30 rounded-xl hover:bg-brand/5 transition-colors">SafeCyber ↗</a>
            <Link href="/contact" onClick={() => setOpen(false)}
              className="flex-1 text-center py-3 text-sm font-semibold text-white bg-brand rounded-xl">Get in Touch</Link>
          </div>
        </div>
      )}
    </header>
  )
}
