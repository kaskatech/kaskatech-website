import Link from 'next/link'
import Image from 'next/image'
import { Shield, Mail, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D14] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/kaska-logo.png"
                alt="Kaska Cyber Security"
                width={140}
                height={38}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              A boutique managed cybersecurity services firm — combining expert practitioners
              with leading security platforms to deliver continuous, risk-proof protection.
            </p>
            <div className="space-y-2.5 mb-6">
              <a href="mailto:info@kaskatech.com" className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-slate-600" /> info@kaskatech.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-slate-600" /> Global
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter,  href: 'https://twitter.com' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand flex items-center justify-center transition-colors border border-white/8">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Cyber Resilience Services', href: '/services' },
                { label: 'Continuous Assessment',     href: '/services/assessment' },
                { label: 'Continuous Monitoring',     href: '/services/monitoring' },
                { label: 'Continuous Compliance',     href: '/services/compliance' },
                { label: 'Cyber & Digital Forensics', href: '/services/forensics' },
                { label: 'Manpower & Staffing',       href: '/services/manpower' },
              ].map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-500 hover:text-white transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-5">Products</h4>
            <div className="space-y-4">
              {[
                { name: 'SafeCyber',    sub: 'Cyber Resilience Platform', href: 'https://safecyber.io',     dot: 'bg-brand-light' },
                { name: 'CyberSecHire', sub: 'Talent Marketplace',        href: 'https://cybersechire.com', dot: 'bg-gold' },
              ].map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 group">
                  <div className={`w-2 h-2 rounded-full ${p.dot} flex-shrink-0 mt-1.5`} />
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-brand-light transition-colors">
                      {p.name} ↗
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">{p.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us',        href: '/about' },
                { label: 'Contact Us',      href: '/contact' },
                { label: 'Privacy Policy',  href: '/privacy' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-500 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-2xl bg-white/4 border border-white/8">
              <div className="text-[10px] font-bold tracking-widest uppercase text-brand-light mb-1">SafeCyber</div>
              <p className="text-xs text-slate-500 mb-2">AI-powered cyber resilience platform — now open for enterprise pilots.</p>
              <a href="mailto:hello@safecyber.io" className="text-xs font-semibold text-brand-light hover:text-white transition-colors">hello@safecyber.io →</a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">© 2026 Kaska Technologies and Services Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-600">Flagship product:</span>
            <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold text-brand-light hover:text-white transition-colors">
              <Shield className="w-3 h-3" /> safecyber.io ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
