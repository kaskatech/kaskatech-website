import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileCheck, BookOpen, ClipboardList, Users, Shield, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Continuous Compliance — Kaska Cyber Security',
  description: 'GRC & Compliance Programme — framework alignment, continuous audits, TPRM, privacy management, and board-ready reporting.',
}

const capabilities = [
  {
    icon: FileCheck,
    title: 'GRC Platform Management',
    desc: 'End-to-end management of your GRC platform — deployment, policy libraries, risk registers, and ongoing operation so compliance is always current.',
    items: ['GRC platform deployment and configuration', 'Policy and control library management', 'Risk register management and review', 'Board and executive risk reporting'],
  },
  {
    icon: Shield,
    title: 'Compliance Automation',
    desc: 'Automated evidence collection, continuous control monitoring, and real-time compliance status — eliminating manual effort before every audit.',
    items: ['Automated evidence collection and framework mapping', 'Continuous control monitoring and status tracking', 'Cloud infrastructure integration (AWS, Azure, GCP)', 'Audit-ready reporting available at any time'],
  },
  {
    icon: ClipboardList,
    title: 'Continuous Security Audits',
    desc: 'Regular internal audit cycles replacing point-in-time assessments — findings addressed and evidenced on an ongoing basis, not scrambled before an audit.',
    items: ['Quarterly internal audit review cycles', 'Control effectiveness testing and scoring', 'Gap assessment against evolving regulations', 'Audit trail management and evidence packaging'],
  },
  {
    icon: BookOpen,
    title: 'Regulatory Framework Alignment',
    desc: 'Continuous alignment against major international and industry frameworks — maintained by dedicated GRC consultants who track every regulatory change.',
    items: ['ISO 27001:2022 — implementation and surveillance', 'SOC 2 Type II — continuous control monitoring', 'PCI-DSS v4.0, NIST CSF, NIST 800-53', 'GDPR, DPDPA 2023, CCPA, HIPAA, COBIT'],
  },
  {
    icon: Users,
    title: 'Third-Party Risk Management',
    desc: 'Continuous monitoring of your vendor and supply chain risk posture — beyond questionnaires at onboarding, with real signals and ongoing oversight.',
    items: ['Vendor risk assessment programme design', 'Continuous supplier monitoring and risk scoring', 'OSINT and signal-based risk intelligence', 'Vendor security questionnaire management'],
  },
  {
    icon: Database,
    title: 'Data Protection & Privacy',
    desc: 'End-to-end management of your data protection obligations — GDPR, DPDPA 2023, and CCPA — with continuous compliance monitoring and advisory.',
    items: ['GDPR and DPDPA 2023 readiness assessments', 'Data Protection Impact Assessments (DPIA)', 'Data flow mapping and RoPA management', 'Privacy policy, notice, and consent management'],
  },
]

const frameworks = [
  'ISO 27001:2022', 'SOC 2 Type II', 'PCI-DSS v4.0', 'GDPR',
  'NIST CSF', 'NIST 800-53', 'DPDPA 2023', 'HIPAA',
  'CIS Controls v8', 'COBIT', 'ISO 31000', 'CCPA',
]

export default function CompliancePage() {
  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="relative container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-amber-400">Pre-Breach · Continuous Compliance</span>
            </div>
            <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
              GRC & Compliance<br />
              <span className="gradient-gold">Programme.</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-10">
              Manage your compliance posture continuously — always audit-ready, always
              aligned, never scrambling. Six disciplines. One continuous programme.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Speak to a GRC Expert <ArrowRight className="w-4 h-4" />
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
            <div className="eyebrow justify-center">Programme Capabilities</div>
            <h2 className="display text-5xl text-[#0D0D14] mb-4">Compliance as a programme.</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Not a project with a start and end date. A continuously managed programme
              that keeps your organisation aligned as regulations evolve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {capabilities.map(c => {
              const Icon = c.icon
              return (
                <div key={c.title} className="card-premium border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-1 bg-amber-400" />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#0D0D14] text-base leading-snug">{c.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {c.items.map(it => (
                        <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
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

      {/* Frameworks + approach */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="relative container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-amber-400">Framework Coverage</div>
              <h2 className="display text-5xl text-white mb-6 leading-tight">
                Every major framework.<br />
                <span className="gradient-gold">Continuously managed.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Regulatory landscapes shift. New frameworks emerge. Requirements evolve.
                Our GRC team tracks every change and keeps your compliance programme
                current — so you are never caught off-guard by a new obligation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Framework gap analysis and implementation roadmap',
                  'Cross-framework harmonisation — reduce duplication',
                  'Regulator-ready evidence packages and audit support',
                  'Continuous monitoring against framework requirements',
                  'VM posture evidence mapped directly to framework controls',
                ].map(pt => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-5">Frameworks We Cover</div>
              <div className="flex flex-wrap gap-3">
                {frameworks.map(f => (
                  <span key={f} className="px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm font-semibold text-white">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-mist">
        <div className="container-sm text-center">
          <h2 className="display text-5xl text-[#0D0D14] mb-6">
            When was your last<br />
            <span className="gradient-brand">compliance review?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            If the answer is &quot;before the last audit,&quot; it&apos;s time to move
            to a continuously managed programme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Speak to a GRC Expert <ArrowRight className="w-4 h-4" />
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
