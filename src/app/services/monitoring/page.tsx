import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Activity, Eye, Radio, Zap, Shield, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Continuous Monitoring — Kaska Cyber Security',
  description: 'Cyber Defense Center — 24×7 SOC, SIEM, EDR, SOAR, threat intelligence, and UEBA delivered by expert analysts.',
}

const capabilities = [
  {
    icon: Activity,
    title: '24×7 SOC Operations',
    desc: 'Round-the-clock Security Operations Centre staffed by experienced L1, L2, and L3 analysts — monitoring, detecting, and responding at any hour.',
    items: ['L1, L2, and L3 analyst coverage across all time zones', 'Threat triage and escalation management', 'Incident investigation and root cause analysis', 'Executive and board-level incident reporting'],
  },
  {
    icon: Eye,
    title: 'SIEM Platform Management',
    desc: 'Full lifecycle management of your SIEM — deployment, log source integration, detection engineering, and continuous tuning to minimise noise.',
    items: ['SIEM deployment and log source normalisation', 'Custom detection rule and use case development', 'Continuous tuning to reduce false positives', 'Vulnerability-aware alert prioritisation'],
  },
  {
    icon: Radio,
    title: 'EDR & Endpoint Monitoring',
    desc: 'Managed endpoint detection and response — deploying and operating EDR/XDR platforms across your estate with full analyst oversight.',
    items: ['EDR/XDR platform deployment and management', 'Endpoint threat hunting and anomaly detection', 'Malware containment and isolation workflows', 'Endpoint health and compliance monitoring'],
  },
  {
    icon: Zap,
    title: 'SOAR & Automated Response',
    desc: 'Automated, playbook-driven response to security events — compressing mean time to respond and eliminating repetitive manual analyst tasks.',
    items: ['Playbook development and automation engineering', 'Alert triage and enrichment workflows', 'Automated containment and response actions', 'Case management and SLA tracking'],
  },
  {
    icon: Shield,
    title: 'Threat Intelligence',
    desc: 'Operationalised threat intelligence — curated feeds, adversary tracking, and IOC/TTP integration directly into your detection stack.',
    items: ['Strategic and tactical threat intelligence feeds', 'Industry-specific threat actor monitoring', 'IOC and TTP integration into SIEM and EDR', 'Regular threat briefings for security leadership'],
  },
  {
    icon: Database,
    title: 'UEBA & Network Detection',
    desc: 'Behavioural analytics and network-level detection — identifying insider threats, compromised accounts, and lateral movement that signatures miss.',
    items: ['User and entity behaviour analytics', 'Network traffic analysis and anomaly detection', 'Insider threat detection and investigation', 'Command and control traffic identification'],
  },
]

const tiers = [
  { tier: 'L1 — Alert Monitoring', desc: 'Continuous alert triage, initial investigation, and escalation. First line of detection and response.' },
  { tier: 'L2 — Incident Analysis', desc: 'Deep investigation of escalated incidents, threat correlation, malware analysis, and containment guidance.' },
  { tier: 'L3 — Threat Hunting', desc: 'Proactive hunting for advanced persistent threats and sophisticated adversary behaviour not caught by automated detection.' },
]

export default function MonitoringPage() {
  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-light/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/4 rounded-full" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/4 rounded-full" />

        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-light animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-light">Pre & Post-Breach · Continuous Monitoring</span>
            </div>
            <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
              Cyber Defense<br />
              <span className="gradient-brand-light">Center.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
              A fully managed, analyst-led Cyber Defense Center — 24×7 detection, response,
              and intelligence across your entire environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-brand">
                Talk to Our SOC Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services#packages" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-smoke">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">CDC Capabilities</div>
            <h2 className="display text-5xl text-[#0D0D14] mb-4">Always watching. Always ready.</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Every capability within the Cyber Defense Center runs continuously —
              our analysts are monitoring your environment right now.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {capabilities.map(c => {
              const Icon = c.icon
              return (
                <div key={c.title} className="card-premium border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-1 bg-brand-light" />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-brand-light/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-light" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#0D0D14] text-base leading-snug">{c.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {c.items.map(it => (
                        <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-light flex-shrink-0 mt-1.5" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SOC model */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px]" />
        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-brand-light">Our SOC Model</div>
              <h2 className="display text-5xl text-white mb-6 leading-tight">
                An extension of<br />
                <span className="gradient-brand-light">your security team.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We operate as a transparent, collaborative extension of your security team —
                not a black-box service you hear from once a month. Direct analyst access,
                full visibility, and a programme that integrates with your environment from day one.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Onboarding completed in days — not months',
                  'Direct analyst access — not ticketing queues',
                  'Platform-agnostic — we operate your existing stack',
                  'Monthly posture reviews with your CISO or IT leadership',
                  '24×7 across all tiers — scope differs, not hours',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {tiers.map(t => (
                <div key={t.tier} className="rounded-2xl border border-white/10 bg-white/4 p-6">
                  <div className="font-bold text-white text-sm mb-2">{t.tier}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{t.desc}</div>
                </div>
              ))}
              <div className="rounded-2xl border border-brand-light/20 bg-brand-light/5 p-6">
                <div className="font-bold text-brand-light text-sm mb-2">24×7 — All Packages</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  Monitoring never stops. The difference between Silver, Gold, and Platinum is depth of
                  coverage and analyst seniority — not operating hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-mist">
        <div className="container-sm text-center">
          <h2 className="display text-5xl text-[#0D0D14] mb-6">
            Is your organisation<br />
            <span className="gradient-brand">being watched right now?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Most breaches go undetected for weeks. Continuous monitoring changes that.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-brand">
              Speak to Our SOC Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services#packages" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0D0D14] border border-black/15 rounded-xl hover:bg-white transition-colors">
              View Service Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
