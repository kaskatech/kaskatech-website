import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Shield, CheckCircle, Activity, FileCheck, Search } from 'lucide-react'

const buckets = [
  {
    icon: Search,
    label: 'Continuous Assessment',
    href: '/services/assessment',
    theme: 'Pre-Breach',
    color: 'brand',
    desc: 'Ongoing vulnerability management, penetration testing, and attack surface monitoring — so you know your exposure before attackers do.',
    oems: ['Tenable', 'Qualys', 'Rapid7'],
  },
  {
    icon: Activity,
    label: 'Continuous Monitoring',
    href: '/services/monitoring',
    theme: 'Pre & Post-Breach',
    color: 'brand-light',
    desc: '24×7 SOC operations, SIEM management, and threat intelligence — expert analysts and leading platforms working as one.',
    oems: ['Google SecOps', 'Microsoft Sentinel', 'Splunk'],
  },
  {
    icon: FileCheck,
    label: 'Continuous Compliance',
    href: '/services/compliance',
    theme: 'Pre-Breach',
    color: 'gold',
    desc: 'Perpetual audit readiness across regulatory frameworks — GRC platforms and expert consultants maintaining your compliance posture.',
    oems: ['RSA Archer', 'ServiceNow GRC', 'OneTrust'],
  },
]

const model = [
  {
    title: 'Expert Practitioners',
    desc: 'Every engagement is led by a certified practitioner — not a project manager. Domain specialists with hands-on enterprise experience.',
  },
  {
    title: 'Leading OEM Platforms',
    desc: 'We deploy and manage the industry\'s top-tier security platforms. You get the tool AND the expertise to extract full value from it.',
  },
  {
    title: 'Continuous Delivery',
    desc: 'Security is not a project — it\'s an ongoing service. Our model is built around continuous operation, not point-in-time assessments.',
  },
  {
    title: 'Risk-Proof Outcomes',
    desc: 'Every service maps to a measurable risk reduction. We report on posture improvement, not just activity.',
  },
]

export default function HomePage() {
  return (
    <div className="bg-smoke">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0D14] dot-bg">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-brand/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-glow/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl">
            <div className="eyebrow text-brand-light">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
              Managed Cybersecurity Services
            </div>

            <h1 className="display text-white text-6xl lg:text-[82px] mb-8 leading-[1.0]">
              Risk-Proof.<br />
              <span className="gradient-brand-light">Continuous.</span><br />
              Expert-Led.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-6 max-w-2xl font-light">
              Kaska delivers managed cybersecurity as a continuous service —
              combining certified practitioners with the world's leading security platforms
              to protect enterprises before and after a breach.
            </p>

            <div className="flex items-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm text-slate-400 font-medium">Pre-Breach Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-light" />
                <span className="text-sm text-slate-400 font-medium">Post-Breach Response</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-brand">
                Speak to an Expert <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-outline-white">
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ─────────────────────────────────────────────── */}
      <section className="section bg-smoke">
        <div className="container">
          <div className="text-center mb-16">
            <div className="eyebrow justify-center">Our Service Model</div>
            <h2 className="display text-5xl text-[#0D0D14] mb-5">
              Three pillars.<br />
              <span className="gradient-brand">One continuous shield.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Every Kaska engagement operates continuously — assessment, monitoring, and compliance
              running in parallel, not sequentially.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {buckets.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="card-premium border border-black/5 overflow-hidden group">
                  <div className={`h-1 ${b.color === 'brand' ? 'bg-brand' : b.color === 'brand-light' ? 'bg-brand-light' : 'bg-gold'}`} />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        b.color === 'brand' ? 'bg-brand/10' : b.color === 'brand-light' ? 'bg-brand-light/10' : 'bg-gold/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          b.color === 'brand' ? 'text-brand' : b.color === 'brand-light' ? 'text-brand-light' : 'text-gold'
                        }`} />
                      </div>
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        b.color === 'gold' ? 'text-gold bg-gold/10 border border-gold/20' : 'text-brand bg-brand/8 border border-brand/15'
                      }`}>{b.theme}</span>
                    </div>

                    <h3 className="font-black text-[#0D0D14] text-xl mb-3 group-hover:text-brand transition-colors">{b.label}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{b.desc}</p>

                    <div className="border-t border-black/5 pt-5">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">OEM Partners</div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {b.oems.map(o => (
                          <span key={o} className="px-3 py-1 rounded-full bg-mist text-xs font-semibold text-slate-600 border border-brand/10">{o}</span>
                        ))}
                      </div>
                      <Link href={b.href}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                          b.color === 'gold' ? 'text-gold hover:text-yellow-600' : 'text-brand hover:text-brand-dark'
                        }`}>
                        Explore service <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PRE / POST BREACH ─────────────────────────────────────────── */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]" />
        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-5">

            {/* Pre-Breach */}
            <div className="rounded-3xl border border-white/8 bg-white/4 p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-green-400">Pre-Breach</span>
              </div>
              <h3 className="display text-4xl text-white mb-4">Stop threats before they materialise.</h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                Our continuous assessment and compliance services identify exploitable gaps
                before attackers reach them. Ongoing vulnerability management, compliance monitoring,
                and attack surface assessment — closing the window of exposure.
              </p>
              <ul className="space-y-3">
                {[
                  'Continuous vulnerability discovery and prioritisation',
                  'Attack surface management and external exposure monitoring',
                  'Control gap identification against major frameworks',
                  'Regular penetration testing and red team exercises',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-Breach */}
            <div className="rounded-3xl border border-brand/25 bg-brand/8 p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-brand-light" />
                <span className="text-xs font-bold tracking-widest uppercase text-brand-light">Post-Breach</span>
              </div>
              <h3 className="display text-4xl text-white mb-4">Detect, contain, and recover — fast.</h3>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                When a breach occurs, our 24×7 SOC team is already watching. Continuous monitoring
                means detection happens in minutes — not days. Expert-led response limits damage
                and restores operations with minimal disruption.
              </p>
              <ul className="space-y-3">
                {[
                  '24×7 SOC with dedicated analyst coverage',
                  'Real-time SIEM correlation across all threat signals',
                  'Rapid incident containment and forensic investigation',
                  'Executive-ready incident reporting and recovery planning',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERT + OEM MODEL ────────────────────────────────────────── */}
      <section className="section bg-mist">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow">How We Deliver</div>
              <h2 className="display text-5xl text-[#0D0D14] mb-6 leading-tight">
                Expert practitioners.<br />
                <span className="gradient-brand">Leading platforms.</span><br />
                Combined.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Most organisations deploy enterprise security tools and then struggle to
                extract value from them. Kaska resolves this — we bring both the platform
                and the people who know how to run it at enterprise scale.
              </p>
              <div className="space-y-4">
                {model.map(m => (
                  <div key={m.title} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-bold text-[#0D0D14] text-sm mb-1">{m.title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  service: 'SOC & Threat Monitoring',
                  label: 'Continuous Monitoring',
                  platforms: ['Google SecOps', 'Microsoft Sentinel', 'Splunk', 'IBM QRadar'],
                  experts: 'SOC Analysts · Threat Hunters · Incident Responders',
                  color: 'brand',
                },
                {
                  service: 'GRC & Compliance Management',
                  label: 'Continuous Compliance',
                  platforms: ['RSA Archer', 'ServiceNow GRC', 'OneTrust', 'Vanta'],
                  experts: 'GRC Consultants · Auditors · Compliance Specialists',
                  color: 'gold',
                },
                {
                  service: 'Vulnerability & Attack Surface',
                  label: 'Continuous Assessment',
                  platforms: ['Tenable', 'Qualys', 'Rapid7', 'CrowdStrike'],
                  experts: 'Security Engineers · Pen Testers · Red Team',
                  color: 'brand-light',
                },
              ].map(s => (
                <div key={s.service} className="card-premium border border-black/5 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${
                        s.color === 'brand' ? 'text-brand' : s.color === 'gold' ? 'text-gold' : 'text-brand-light'
                      }`}>{s.label}</div>
                      <div className="font-bold text-[#0D0D14] text-sm">{s.service}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {s.platforms.map(p => (
                      <span key={p} className="px-2.5 py-1 rounded-full bg-mist text-[11px] font-semibold text-slate-600 border border-brand/8">{p}</span>
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">+ {s.experts}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS (secondary) ─────────────────────────────────────── */}
      <section className="section bg-smoke border-t border-black/5">
        <div className="container">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center">Beyond Services</div>
            <h2 className="display text-4xl text-[#0D0D14]">We also build products.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <div className="card-dark p-8">
              <div className="pill text-brand-light border-brand-light/30 bg-brand-light/10 mb-5">Platform</div>
              <h3 className="display text-3xl text-white mb-3">SafeCyber</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The Autonomous Cyber Resilience Platform™ — an AI layer above your entire
                security stack, giving CxOs pre-breach and post-breach intelligence.
              </p>
              <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white transition-colors">
                safecyber.io <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="card-premium border border-black/5 p-8">
              <div className="pill text-gold border-gold/30 bg-gold/8 mb-5">Marketplace</div>
              <h3 className="display text-3xl text-[#0D0D14] mb-3">CyberSecHire</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                A dedicated platform for cybersecurity talent acquisition — connecting enterprises
                with vetted cybersecurity professionals across all disciplines.
              </p>
              <a href="https://cybersechire.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
                cybersechire.com <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="section bg-mist border-t border-brand/8">
        <div className="container">
          <div className="text-center mb-12">
            <div className="eyebrow justify-center">Who We Serve</div>
            <h2 className="display text-4xl text-[#0D0D14]">Sector-agnostic. Security-focused.</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Financial Services', 'Banking & Capital Markets', 'Insurance',
              'Government & Public Sector', 'Defence & Intelligence',
              'Healthcare & Life Sciences', 'Manufacturing & OT',
              'Retail & E-Commerce', 'Technology & SaaS', 'Energy & Utilities',
              'Legal & Professional Services', 'Education',
            ].map(c => (
              <span key={c}
                className="px-5 py-2.5 rounded-full bg-white border border-brand/10 text-sm font-medium text-slate-600
                           hover:border-brand hover:text-brand hover:bg-brand/5 transition-all cursor-default shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0D0D14] py-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/15 rounded-full blur-[120px]" />
        <div className="relative container-sm text-center">
          <h2 className="display text-5xl lg:text-6xl text-white mb-6">
            Ready to make your
            <span className="block gradient-brand-light">security risk-proof?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Talk to a Kaska expert — we'll assess your current posture and outline
            where continuous coverage will have the most immediate impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-brand text-base px-8 py-4">
              Speak to an Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-outline-white">
              About Kaska
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
