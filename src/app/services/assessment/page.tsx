import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Target, Zap, Search, Globe, Shield, BarChart2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Continuous Assessment — Kaska Cyber Security',
  description: 'Exposure & Validation Programme — VM, BAS, CART, CTEM, PTaaS, and ASM delivered continuously by expert practitioners.',
}

const capabilities = [
  {
    icon: Target,
    title: 'Vulnerability Management',
    desc: 'Continuous discovery and risk-based prioritisation of vulnerabilities across your entire estate — infrastructure, cloud, and endpoints.',
    items: ['Continuous scanning and asset discovery', 'CVSS + EPSS-based risk prioritisation', 'Patch advisory and SLA-tracked remediation', 'Monthly executive exposure report'],
  },
  {
    icon: Zap,
    title: 'Breach & Attack Simulation',
    desc: 'Automated simulation of real-world attack techniques — validating whether your controls actually prevent the attacks they claim to prevent.',
    items: ['MITRE ATT&CK-aligned simulations', 'Control gap identification and scoring', 'Lateral movement and escalation testing', 'Continuous threat readiness benchmarking'],
  },
  {
    icon: Search,
    title: 'Penetration Testing as a Service',
    desc: 'Structured, expert-led testing — external, internal, web, mobile, and API — on a continuous schedule rather than a one-off annual engagement.',
    items: ['External and internal network penetration testing', 'Web and mobile application security testing', 'API security and business logic testing', 'Social engineering and phishing simulation'],
  },
  {
    icon: Globe,
    title: 'Attack Surface Management',
    desc: 'Continuous monitoring of your external digital footprint — discovering exposed assets, misconfigured services, and shadow IT before attackers do.',
    items: ['External asset discovery and inventory', 'Continuous misconfiguration monitoring', 'Third-party and supply chain risk exposure', 'Dark web and credential exposure monitoring'],
  },
  {
    icon: Shield,
    title: 'Continuous Automated Red Team',
    desc: 'Persistent automated adversary emulation that discovers exploitable attack paths and validates remediation — running continuously, not annually.',
    items: ['Autonomous attack path discovery', 'Credential and privilege escalation testing', 'Fix-and-verify remediation workflows', 'Adversarial validation reporting'],
  },
  {
    icon: BarChart2,
    title: 'Continuous Threat Exposure Management',
    desc: 'Operationalising the full CTEM lifecycle — scoping, discovering, prioritising, validating, and mobilising remediation of your real exposures.',
    items: ['Full CTEM programme management', 'Exposure prioritisation by exploitability and impact', 'Stakeholder mobilisation and remediation tracking', 'Board-ready exposure reporting'],
  },
]

export default function AssessmentPage() {
  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-emerald-500/8 rounded-full blur-[100px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/4 rounded-full" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-white/4 rounded-full" />

        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">Pre-Breach · Continuous Assessment</span>
            </div>
            <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
              Exposure & Validation<br />
              <span className="gradient-brand-light">Programme.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
              Continuously discover, validate, and reduce your attack exposure — before
              adversaries find it. Six disciplines. One continuous programme.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-brand">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services#packages" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What this covers */}
      <section className="section bg-smoke">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">Programme Capabilities</div>
            <h2 className="display text-5xl text-[#0D0D14] mb-4">Six disciplines. Always running.</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Traditional assessment is a snapshot. Our programme is continuous — exposure is
              tracked, validated, and reduced every week, not once a year.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {capabilities.map(c => {
              const Icon = c.icon
              return (
                <div key={c.title} className="card-premium border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-1 bg-brand" />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-brand/8 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#0D0D14] text-base leading-snug">{c.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {c.items.map(it => (
                        <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />
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

      {/* Engagement model */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />
        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-brand-light">How We Engage</div>
              <h2 className="display text-5xl text-white mb-6 leading-tight">
                Continuous — not<br />
                <span className="gradient-brand-light">point-in-time.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                A penetration test report delivered once a year starts becoming outdated the moment it lands.
                Kaska operates your assessment programme on a continuous cadence — findings are always
                current, remediation is always tracked, posture always improves.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Platform-agnostic — we operate your existing tools',
                  'Findings integrated into your risk register in real time',
                  'Direct analyst access — no ticketing queues',
                  'Monthly posture reviews with your security leadership',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-light flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { n: '01', title: 'Scope & Baseline', desc: 'Asset inventory, threat model, and current exposure baseline established in week one.' },
                { n: '02', title: 'Deploy & Configure', desc: 'Right platforms selected and tuned for your environment — cloud, on-prem, or hybrid.' },
                { n: '03', title: 'Continuous Operation', desc: 'Scanning, testing, and monitoring running continuously — new exposures flagged as they emerge.' },
                { n: '04', title: 'Report & Validate', desc: 'Risk-prioritised findings with remediation guidance — closure validated before items are closed.' },
              ].map(p => (
                <div key={p.n} className="rounded-2xl border border-white/10 bg-white/4 p-6 flex gap-5">
                  <div className="display text-4xl font-black text-white/10 leading-none flex-shrink-0 w-12">{p.n}</div>
                  <div>
                    <div className="font-bold text-white mb-1">{p.title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-mist">
        <div className="container-sm text-center">
          <h2 className="display text-5xl text-[#0D0D14] mb-6">
            What&apos;s your current<br />
            <span className="gradient-brand">exposure?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Talk to our assessment team — we&apos;ll identify your highest-priority gaps and
            recommend the right programme tier within days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-brand">
              Start a Conversation <ArrowRight className="w-4 h-4" />
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
