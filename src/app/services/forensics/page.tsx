import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Search, FileText, AlertTriangle, Database, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cyber & Digital Forensics — Kaska Cyber Security',
  description: 'DFIR retainer, malware analysis, forensic readiness, e-discovery, and court-ready investigation — expert-led post-breach response.',
}

const capabilities = [
  {
    icon: AlertTriangle,
    title: 'Incident Response & DFIR',
    desc: 'Structured, rapid response to active cyber incidents — containment, eradication, and recovery guided by experienced DFIR practitioners.',
    items: [
      'Incident declaration and triage',
      'Containment and threat eradication',
      'Root cause analysis and attack timeline reconstruction',
      'Recovery advisory and post-incident hardening',
    ],
  },
  {
    icon: Search,
    title: 'Digital Forensics Investigation',
    desc: 'Forensically sound investigation of compromised systems — preserving evidence integrity for internal review, litigation, or regulatory reporting.',
    items: [
      'Disk, memory, and volatile data forensics',
      'Network traffic and log forensics',
      'Cloud environment forensics (AWS, Azure, GCP)',
      'Mobile device forensics',
    ],
  },
  {
    icon: Shield,
    title: 'Malware Analysis & Reverse Engineering',
    desc: 'Deep technical analysis of malicious code — understanding attacker tools, techniques, and objectives to inform detection and response.',
    items: [
      'Static and dynamic malware analysis',
      'Reverse engineering of custom implants',
      'Threat attribution and actor profiling',
      'IOC extraction and SIEM integration',
    ],
  },
  {
    icon: Database,
    title: 'Forensic Readiness Programme',
    desc: 'Building the capability to investigate before an incident happens — log strategy, evidence preservation, and chain of custody frameworks.',
    items: [
      'Forensic readiness assessment and gap analysis',
      'Log retention architecture and strategy',
      'Evidence preservation and chain of custody procedures',
      'Forensic tooling deployment and configuration',
    ],
  },
  {
    icon: FileText,
    title: 'E-Discovery & Legal Support',
    desc: 'Forensically credible evidence collection and reporting for regulatory investigations, litigation, and breach notification obligations.',
    items: [
      'Court-ready forensic reports',
      'Regulatory breach notification support',
      'Expert witness preparation and testimony support',
      'Data subject access request (DSAR) forensic support',
    ],
  },
  {
    icon: Lock,
    title: 'Tabletop Exercises & IR Planning',
    desc: 'Stress-test your incident response capability before a real event — structured simulations led by practitioners who have managed real breaches.',
    items: [
      'Incident response plan development and review',
      'Executive and technical tabletop exercises',
      'Breach scenario simulation (ransomware, insider, APT)',
      'Post-exercise remediation roadmap',
    ],
  },
]

const retainerBenefits = [
  { title: 'Defined SLA', desc: 'Response time commitments agreed upfront — not negotiated mid-crisis.' },
  { title: 'Pre-engaged Practitioners', desc: 'Our team already knows your environment before an incident occurs.' },
  { title: 'Priority Access', desc: 'Retainer clients take precedence over ad-hoc engagements.' },
  { title: 'Unused Hours Rollover', desc: 'Unused retainer hours applied to proactive forensic readiness work.' },
]

export default function ForensicsPage() {
  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-red-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-brand/8 rounded-full blur-[100px]" />
        {/* Concentric rings */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/4 rounded-full" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-white/4 rounded-full" />
        <div className="absolute right-40 top-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-red-500/10 rounded-full" />

        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-red-400">Post-Breach · Cyber & Digital Forensics</span>
            </div>
            <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
              When it matters<br />
              <span className="text-red-400">most.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
              A DFIR retainer and forensic investigations practice — combining expert practitioners
              with leading forensic platforms to respond, investigate, and recover with precision.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-brand">
                Engage a DFIR Retainer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services#packages" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                View Service Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DFIR Retainer strip */}
      <section className="py-10 px-6 bg-white border-b border-black/5">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-red-500 mb-1">DFIR Retainer</div>
              <p className="text-sm font-semibold text-[#0D0D14]">Response capability agreed and in place before you need it.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              {retainerBenefits.map(b => (
                <div key={b.title} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-[#0D0D14]">{b.title}</div>
                    <div className="text-[11px] text-slate-400">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-smoke">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">Forensics Capabilities</div>
            <h2 className="display text-5xl text-[#0D0D14] mb-4">What we investigate.</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              From the moment an incident is declared to the final court-ready report — we cover
              the full forensic lifecycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {capabilities.map(c => {
              const Icon = c.icon
              return (
                <div key={c.title} className="card-premium border border-black/5 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="h-1 bg-red-500" />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-red-500/8 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#0D0D14] text-base leading-snug">{c.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {c.items.map(it => (
                        <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
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

      {/* Platforms */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-red-500/8 rounded-full blur-[120px]" />
        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-red-400">Forensic Platforms</div>
              <h2 className="display text-5xl text-white mb-6 leading-tight">
                Industry-standard tools.<br />
                <span className="text-red-400">Practitioner expertise.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Forensic investigations are only as credible as the tools and chain of custody behind them.
                We operate the same platforms used by law enforcement and global incident response firms —
                ensuring your evidence holds up to regulatory and legal scrutiny.
              </p>
              <ul className="space-y-3">
                {[
                  'Forensically sound evidence acquisition and preservation',
                  'Full chain of custody documentation',
                  'Compliant with ISO 27037 (digital evidence guidelines)',
                  'Reports suitable for regulators, courts, and insurers',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Magnet AXIOM', desc: 'Digital forensics & investigation platform' },
                { name: 'OpenText EnCase', desc: 'Enterprise forensic investigation suite' },
                { name: 'Cellebrite', desc: 'Mobile device forensics and extraction' },
                { name: 'Volatility', desc: 'Memory forensics framework' },
                { name: 'CrowdStrike Services', desc: 'DFIR and threat intelligence services' },
                { name: 'Palo Alto Unit 42', desc: 'Threat intelligence and incident response' },
              ].map(p => (
                <div key={p.name} className="rounded-2xl border border-white/8 bg-white/4 p-5">
                  <div className="w-2 h-2 rounded-full bg-red-400 mb-3" />
                  <div className="font-bold text-white text-sm mb-1">{p.name}</div>
                  <div className="text-[11px] text-slate-500 leading-relaxed">{p.desc}</div>
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
            Don&apos;t wait for an incident<br />
            <span className="gradient-brand">to build the capability.</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            A DFIR retainer means your response team is already briefed, your evidence
            strategy is in place, and your SLA is defined — before the call comes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-brand">
              Engage a Retainer <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services#packages" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0D0D14] border border-black/15 rounded-xl hover:bg-white transition-colors">
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
