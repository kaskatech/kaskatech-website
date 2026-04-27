import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Briefcase, Clock, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manpower & Staffing — Kaska Technologies & Services',
  description: 'Cybersecurity talent acquisition — permanent placement, contract staffing, executive search. Backed by CyberSecHire.',
}

const offerings = [
  {
    icon: Briefcase,
    title: 'Permanent Placement',
    desc: 'Full-time cybersecurity hires — from SOC analysts to CISOs. We source, screen, and present only qualified, vetted candidates.',
    roles: ['CISO / vCISO', 'SOC Analyst (L1 / L2 / L3)', 'Threat Intelligence Analyst', 'GRC & Compliance Manager', 'Security Architect', 'Cloud Security Engineer'],
  },
  {
    icon: Clock,
    title: 'Contract Staffing',
    desc: 'Project-based or extended contract cybersecurity professionals. Deployed within days, not weeks.',
    roles: ['Penetration Testers', 'Incident Response Specialists', 'Forensic Analysts', 'Security Auditors', 'VAPT Engineers', 'ISO 27001 Lead Auditors'],
  },
  {
    icon: Target,
    title: 'Contract-to-Hire',
    desc: 'Try before you commit. Candidates work on contract first — convert to permanent when the fit is confirmed.',
    roles: ['All cybersecurity disciplines', 'Evaluation period: 3–6 months', 'Seamless conversion process'],
  },
  {
    icon: Award,
    title: 'Executive Search',
    desc: 'CISO-level and Board-level cybersecurity leadership search. Confidential, network-driven, thorough.',
    roles: ['CISO / Group CISO', 'Head of Cyber Risk', 'VP / Director Information Security', 'DPO (Data Protection Officer)'],
  },
]

const whyUs = [
  'Access to CyberSecHire — dedicated cybersecurity talent marketplace',
  'Pre-screened candidates — technical and behavioural assessment done',
  'Domain expertise — we understand what good looks like in every cyber role',
  'Focused on specialised roles that generalist recruiters struggle to fill',
  'Extensive network — passive candidates others cannot reach',
  'Post-placement support and guarantee on permanent placements',
]

export default function ManpowerPage() {
  return (
    <div className="bg-cream">

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[100px]" />
        <div className="relative container-sm">
          <div className="eyebrow text-gold justify-center">Manpower & Staffing</div>
          <h1 className="display text-6xl lg:text-7xl text-white text-center leading-tight mb-6">
            The right cybersecurity<br />
            <span className="gradient-gold">talent. Fast.</span>
          </h1>
          <p className="text-lg text-slate-300 text-center max-w-xl mx-auto">
            Permanent placement, contract staffing, and executive search for cybersecurity roles.
            Backed by CyberSecHire.
          </p>
        </div>
      </section>

      {/* Offerings grid */}
      <section className="section bg-stone">
        <div className="container">
          <div className="eyebrow justify-center">What We Offer</div>
          <h2 className="display text-5xl text-navy text-center mb-14">
            Staffing for every<br />cybersecurity need.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {offerings.map(o => {
              const Icon = o.icon
              return (
                <div key={o.title} className="card-premium border border-black/5 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-black text-navy text-lg mb-2">{o.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{o.desc}</p>
                  <ul className="space-y-2">
                    {o.roles.map(r => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CyberSecHire section */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow text-gold">Powered by CyberSecHire</div>
              <h2 className="display text-5xl text-navy mb-6 leading-tight">
                Cybersecurity talent,<br />
                <span className="gradient-gold">curated.</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our staffing services are backed by CyberSecHire — a dedicated platform
                for cybersecurity hiring that Kaska built and operates. Access to a
                curated, vetted pool of cybersecurity professionals you won't find on
                generic job portals.
              </p>
              <ul className="space-y-3 mb-10">
                {whyUs.map(w => (
                  <li key={w} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                    <span className="text-navy text-sm font-medium">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-dark">
                  Submit a Requirement <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://cybersechire.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  CyberSecHire ↗
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'Cybersecurity Only', label: 'Specialisation' },
                { value: 'Pre-Screened', label: 'All Candidates' },
                { value: 'Placement Guarantee', label: 'Permanent Hires' },
                { value: 'Global', label: 'Coverage' },
              ].map(s => (
                <div key={s.label} className="card-premium border border-black/5 p-7 text-center">
                  <div className="font-black text-navy text-sm mb-2">{s.value}</div>
                  <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative container-sm text-center">
          <h2 className="display text-5xl text-white mb-6">
            Need a cybersecurity<br />
            <span className="gradient-gold">professional?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Tell us the role and timeline — we'll move quickly to find the right fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Submit a Requirement <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://cybersechire.com" target="_blank" rel="noopener noreferrer"
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy">
              Visit CyberSecHire <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
