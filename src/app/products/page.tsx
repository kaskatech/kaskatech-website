import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products — Kaska Technologies & Services',
  description: 'SafeCyber — Autonomous Cyber Resilience Platform™ and CyberSecHire — Cybersecurity talent marketplace. Built by Kaska Technologies.',
}

const pillars = [
  {
    label: 'Pre-Breach Risk Intelligence',
    color: 'green',
    items: ['Control Validation AI', 'Attack Path Analysis', 'CVE & Threat Intelligence', 'Financial Risk Quantification (FAIR)'],
  },
  {
    label: 'Real-Time Breach Intelligence',
    color: 'blue',
    items: ['Cross-Tool Correlation AI', 'SOC Analyst AI (8-phase)', 'Threat Prediction', 'Data Classification AI'],
  },
  {
    label: 'Post-Breach Resilience',
    color: 'red',
    items: ['Response Orchestration', 'Incident Command Centre', 'Resilience Scoring', 'Compliance Automation'],
  },
]

const safecyberFeatures = [
  'Pre-Breach: Surface root causes before the attack fires',
  'Real-Time: Correlate signals across every tool simultaneously',
  'Post-Breach: Quantify financial impact as the breach unfolds',
  'Works with SIEM, EDR, Firewall, IAM, Cloud — nothing replaced',
  'FAIR model — financial exposure per threat scenario for board reporting',
  'Major compliance frameworks built in: ISO 27001, NIST, PCI-DSS, GDPR and more',
]

const hireFeatures = [
  'Vetted cybersecurity professionals across all disciplines',
  'Contract, contract-to-hire, and permanent placements',
  'SOC analysts, pen testers, GRC consultants, CISOs',
  'Focused on specialised cyber roles that generalist platforms struggle to fill',
]

export default function ProductsPage() {
  return (
    <div className="bg-cream">

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue/10 rounded-full blur-[120px]" />
        <div className="relative container-sm text-center">
          <div className="eyebrow justify-center text-gold">Our Products</div>
          <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
            Two platforms.<br />
            <span className="gradient-gold">One mission.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            SafeCyber gives enterprises genuine cyber resilience.
            CyberSecHire gives them the talent to sustain it.
          </p>
        </div>
      </section>

      {/* SafeCyber */}
      <section className="section bg-stone">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="pill text-blue border-blue/20 bg-blue/5 mb-6">
                <Shield className="w-3 h-3" /> Flagship Product
              </div>
              <h2 className="display text-5xl text-navy mb-3">SafeCyber</h2>
              <p className="text-blue font-bold text-lg mb-6">Autonomous Cyber Resilience Platform™</p>
              <p className="text-slate-500 leading-relaxed mb-5">
                SafeCyber is the AI intelligence layer above your entire security stack.
                It connects signals from every tool your organisation already uses,
                finds the gaps each individual tool misses, and tells your CISO
                exactly what to fix — with a financial risk number attached to each gap.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Not a SIEM. Not a SOAR. Not another security tool. The platform above the stack.
              </p>

              <div className="space-y-3 mb-10">
                {safecyberFeatures.map(pt => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" />
                    <span className="text-navy text-sm font-medium">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer" className="btn-dark">
                  safecyber.io <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="btn-outline">Request a Demo</Link>
              </div>
            </div>

            <div className="space-y-4 lg:pt-2">
              {pillars.map(p => (
                <div key={p.label} className={`card-premium border p-6 ${
                  p.color === 'green' ? 'border-green/20' :
                  p.color === 'blue'  ? 'border-blue/20'  : 'border-red/20'
                }`}>
                  <div className={`flex items-center gap-2 mb-4`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      p.color === 'green' ? 'bg-green' :
                      p.color === 'blue'  ? 'bg-blue'  : 'bg-red'
                    }`} />
                    <h4 className={`font-bold text-sm ${
                      p.color === 'green' ? 'text-green' :
                      p.color === 'blue'  ? 'text-blue'  : 'text-red'
                    }`}>{p.label}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {p.items.map(it => (
                      <div key={it} className="text-xs text-slate-500 font-medium">{it}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CyberSecHire */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="card-dark p-10 lg:p-12 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'Cybersecurity Only', label: 'Specialisation' },
                  { value: 'Pre-Screened', label: 'All Candidates' },
                  { value: 'Placement Guarantee', label: 'Permanent Hires' },
                  { value: 'Global', label: 'Coverage' },
                ].map(s => (
                  <div key={s.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className="font-black text-white text-sm mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="pill text-gold border-gold/20 bg-gold/5 mb-6">Live & Operational</div>
              <h2 className="display text-5xl text-navy mb-3">CyberSecHire</h2>
              <p className="text-gold font-bold text-lg mb-6">Cybersecurity Talent Marketplace</p>
              <p className="text-slate-500 leading-relaxed mb-6">
                The dedicated platform for cybersecurity hiring. Connecting enterprises
                with vetted cybersecurity professionals — from SOC analysts and pen testers
                to CISOs and GRC consultants — across every major market.
              </p>
              <div className="space-y-3 mb-10">
                {hireFeatures.map(pt => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-navy text-sm font-medium">{pt}</span>
                  </div>
                ))}
              </div>
              <a href="https://cybersechire.com" target="_blank" rel="noopener noreferrer" className="btn-gold">
                cybersechire.com <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/10 rounded-full blur-[100px]" />
        <div className="relative container-sm text-center">
          <h2 className="display text-5xl text-white mb-6">
            Want to see SafeCyber<br />
            <span className="gradient-gold">in action?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Request a demo — we'll show you how it works across your existing stack.
          </p>
          <Link href="/contact" className="btn-gold">
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
