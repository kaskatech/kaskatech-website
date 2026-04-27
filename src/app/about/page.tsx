import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Kaska Cyber Security',
  description: 'Kaska is a boutique managed cybersecurity services firm — combining expert practitioners with leading security platforms to deliver continuous, risk-proof protection.',
}

const values = [
  { n: '01', title: 'Continuous over periodic', desc: 'Security posture degrades the moment a point-in-time assessment is complete. We build everything as a continuous service — always running, always current.' },
  { n: '02', title: 'Practitioners, not project managers', desc: 'Every engagement is led by a domain expert. Our people have operated in the environments they now protect. That experience is non-negotiable.' },
  { n: '03', title: 'Platforms AND people', desc: 'The best security platforms without expert operators are just expensive dashboards. We bring both — and make sure organisations get the full value of their investment.' },
  { n: '04', title: 'Risk outcomes, not activity reports', desc: 'Our clients measure us on posture improvement, audit readiness, and breach prevention — not the number of scans run or reports delivered.' },
]

const buckets = [
  {
    label: 'Continuous Assessment',
    href: '/services/assessment',
    desc: 'Vulnerability management, penetration testing, attack surface monitoring.',
    color: 'brand',
  },
  {
    label: 'Continuous Monitoring',
    href: '/services/monitoring',
    desc: '24×7 SOC, SIEM management, EDR, threat intelligence.',
    color: 'brand-light',
  },
  {
    label: 'Continuous Compliance',
    href: '/services/compliance',
    desc: 'GRC platform management, audit readiness, framework alignment.',
    color: 'gold',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px]" />
        <div className="relative container-sm">
          <div className="eyebrow text-brand-light justify-center">About Kaska</div>
          <h1 className="display text-6xl lg:text-7xl text-white text-center leading-tight mb-8">
            Built for the<br />
            <span className="gradient-brand-light">practitioners.</span>
          </h1>
          <p className="text-lg text-slate-300 text-center leading-relaxed max-w-2xl mx-auto">
            Kaska is a boutique managed cybersecurity services firm. We exist because
            enterprises deserve security partners who have lived the problem — not just
            studied it — and who operate continuously, not periodically.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-mist">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="eyebrow">Our Mission</div>
              <h2 className="display text-5xl text-[#0D0D14] mb-8 leading-tight">
                Make enterprises genuinely resilient —<br />
                <span className="gradient-brand">not just compliant.</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Compliance frameworks tell you what to do. They don't tell you whether it's
                actually working. Most breaches happen inside organisations that have passed
                their annual audits. The problem is not the standard — it's that security
                is still treated as periodic rather than continuous.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                Kaska was built to change that. We deliver cybersecurity as a continuous
                managed service — assessment, monitoring, and compliance running in parallel,
                permanently, backed by the right platforms and the right people.
              </p>
              <Link href="/contact" className="btn-brand">
                Work with us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4 lg:pt-4">
              {buckets.map(b => (
                <Link key={b.label} href={b.href}
                  className="card-premium border border-black/5 p-7 flex items-start gap-5 group block">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
                    b.color === 'brand' ? 'bg-brand' : b.color === 'brand-light' ? 'bg-brand-light' : 'bg-gold'
                  }`} />
                  <div>
                    <div className={`font-bold text-base mb-1 group-hover:transition-colors ${
                      b.color === 'brand' ? 'text-[#0D0D14] group-hover:text-brand' :
                      b.color === 'brand-light' ? 'text-[#0D0D14] group-hover:text-brand-light' :
                      'text-[#0D0D14] group-hover:text-gold'
                    }`}>{b.label}</div>
                    <div className="text-sm text-slate-500">{b.desc}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand ml-auto mt-1 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative container">
          <div className="eyebrow text-brand-light">How We Work</div>
          <h2 className="display text-5xl text-white mb-14">Four principles.<br />Zero compromise.</h2>
          <div className="grid lg:grid-cols-2 gap-5">
            {values.map(v => (
              <div key={v.n} className="p-8 rounded-3xl border border-white/10 bg-white/4 hover:bg-white/7 transition-colors">
                <div className="display text-5xl font-black text-white/10 mb-4">{v.n}</div>
                <h4 className="font-bold text-white text-lg mb-3">{v.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="section bg-smoke">
        <div className="container">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center">Beyond Services</div>
            <h2 className="display text-4xl text-[#0D0D14]">We also build products.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-dark p-10">
              <div className="pill text-brand-light border-brand-light/30 bg-brand-light/10 mb-6">Platform</div>
              <h3 className="display text-4xl text-white mb-4">SafeCyber</h3>
              <p className="text-slate-400 mb-8 leading-relaxed text-[15px]">
                The AI layer above your entire security stack. Pre-breach and post-breach
                intelligence for CxOs.
              </p>
              <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white transition-colors">
                safecyber.io ↗
              </a>
            </div>
            <div className="card-premium border border-black/5 p-10">
              <div className="pill text-gold border-gold/30 bg-gold/8 mb-6">Marketplace</div>
              <h3 className="display text-4xl text-[#0D0D14] mb-4">CyberSecHire</h3>
              <p className="text-slate-500 mb-8 leading-relaxed text-[15px]">
                A dedicated platform for cybersecurity talent acquisition — vetted professionals
                across all disciplines.
              </p>
              <a href="https://cybersechire.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
                cybersechire.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
