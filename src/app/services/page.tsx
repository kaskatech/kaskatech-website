import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Eye, FileCheck, Search, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cyber Resilience Services — Kaska Cyber Security',
  description: 'Three continuous service programmes — Assessment, Monitoring, Compliance, and Forensics — delivered as Silver, Gold, and Platinum engagements.',
}

const pillars = [
  {
    icon: Search,
    label: 'Continuous Assessment',
    sub: 'Exposure & Validation',
    desc: 'Continuously discover, validate, and reduce your attack exposure before adversaries find it.',
    href: '/services/assessment',
    badge: 'Pre-Breach',
    badgeColor: 'text-emerald-600 bg-emerald-50',
    accent: 'bg-brand',
  },
  {
    icon: Eye,
    label: 'Continuous Monitoring',
    sub: 'Cyber Defense Center',
    desc: '24×7 analyst-led detection, response, and threat intelligence — always on.',
    href: '/services/monitoring',
    badge: 'Pre & Post-Breach',
    badgeColor: 'text-blue-600 bg-blue-50',
    accent: 'bg-brand-light',
  },
  {
    icon: FileCheck,
    label: 'Continuous Compliance',
    sub: 'GRC & Compliance Program',
    desc: 'Framework alignment, continuous audit cycles, and board-ready risk reporting.',
    href: '/services/compliance',
    badge: 'Pre-Breach',
    badgeColor: 'text-amber-600 bg-amber-50',
    accent: 'bg-amber-400',
  },
  {
    icon: Shield,
    label: 'Cyber & Digital Forensics',
    sub: 'Response & Investigation',
    desc: 'DFIR retainer, malware analysis, forensic readiness, and court-ready investigation.',
    href: '/services/forensics',
    badge: 'Post-Breach',
    badgeColor: 'text-red-600 bg-red-50',
    accent: 'bg-red-500',
  },
]

const packages = [
  {
    name: 'Silver',
    badge: 'Foundation',
    tagline: 'Essential cyber resilience for growing organisations.',
    bar: 'bg-slate-400',
    badgeCls: 'bg-slate-100 text-slate-600',
    border: 'border-slate-200',
    labelCls: 'text-slate-400',
    dotCls: 'bg-slate-400',
    btnCls: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
    buckets: [
      {
        label: 'Assessment',
        items: [
          'Vulnerability management — continuous scanning',
          'Quarterly penetration test (external + web application)',
          'Attack surface discovery (snapshot)',
          'Risk-based remediation advisory',
        ],
      },
      {
        label: 'Monitoring',
        items: [
          '24×7 SOC — L1 + L2 analyst coverage',
          'SIEM management (up to 15 log sources)',
          'Vulnerability intelligence feed (CVE / NVD / EPSS)',
          'Monthly threat briefing report',
        ],
      },
      {
        label: 'Compliance',
        items: [
          'Single framework implementation (ISO 27001, SOC 2, or PCI-DSS)',
          'Policy and control library development',
          'VM evidence mapped to framework controls',
          'Basic third-party risk management (up to 10 vendors)',
        ],
      },
      {
        label: 'Forensics',
        items: [
          'Incident response plan development',
          'Forensic readiness assessment',
          'Log retention strategy advisory',
          'Annual tabletop exercise',
        ],
      },
    ],
  },
  {
    name: 'Gold',
    badge: 'Recommended',
    tagline: 'Comprehensive protection for established enterprises.',
    bar: 'bg-amber-400',
    badgeCls: 'bg-amber-100 text-amber-700',
    border: 'border-amber-200',
    labelCls: 'text-amber-600',
    dotCls: 'bg-amber-400',
    btnCls: 'bg-amber-400 text-white hover:bg-amber-500',
    popular: true,
    buckets: [
      {
        label: 'Assessment',
        items: [
          'Daily VM scanning with SLA-based remediation tracking',
          'Breach & Attack Simulation — quarterly',
          'Attack Surface Management — continuous',
          'API and mobile application testing (annually)',
          'Dedicated assessment analyst',
          'Executive exposure dashboard',
        ],
      },
      {
        label: 'Monitoring',
        items: [
          '24×7 SOC — L1, L2, and L3 analyst access',
          'SIEM — unlimited log sources + custom detection rules',
          'EDR platform management',
          'SOAR automated playbook response',
          'Threat intelligence feeds + IOC integration',
          'Quarterly CISO posture review',
        ],
      },
      {
        label: 'Compliance',
        items: [
          'Multi-framework alignment (up to 3 frameworks)',
          'Continuous compliance monitoring + automated evidence',
          'Internal audit cycles — quarterly',
          'TPRM continuous monitoring (up to 25 vendors)',
          'Board-ready compliance dashboard',
        ],
      },
      {
        label: 'Forensics',
        items: [
          'DFIR retainer — remote response with defined SLA',
          'Disk, memory, and network forensics',
          'Malware analysis',
          'Quarterly tabletop exercise',
        ],
      },
    ],
  },
  {
    name: 'Platinum',
    badge: 'Enterprise',
    tagline: 'Full-spectrum resilience for high-risk, regulated organisations.',
    bar: 'bg-brand',
    badgeCls: 'bg-brand/10 text-brand',
    border: 'border-brand/20',
    labelCls: 'text-brand',
    dotCls: 'bg-brand',
    btnCls: 'bg-brand text-white hover:bg-brand-dark',
    buckets: [
      {
        label: 'Assessment',
        items: [
          'Continuous Automated Red Team (CART)',
          'CTEM — full programme lifecycle',
          'Social engineering simulation — quarterly',
          'OT / ICS security assessment',
          'Zero-day threat hunting',
          'SLA-backed remediation validation',
        ],
      },
      {
        label: 'Monitoring',
        items: [
          'Named dedicated threat hunter',
          'UEBA + Network Detection & Response',
          'Dark web and adversary actor tracking',
          'On-site incident response capability',
          'Real-time executive security dashboard',
          'Monthly CISO advisory sessions',
        ],
      },
      {
        label: 'Compliance',
        items: [
          'Unlimited framework coverage',
          'Full GRC platform management',
          'Privacy compliance — GDPR, DPDPA, CCPA',
          'Named dedicated GRC lead',
          'Board and regulatory presentations',
          'Regulatory liaison and external audit support',
        ],
      },
      {
        label: 'Forensics',
        items: [
          'Named DFIR lead + on-site response',
          'Mobile and cloud forensics',
          'Reverse engineering and threat attribution',
          'E-discovery and court-ready reporting',
        ],
      },
    ],
  },
]

const techPartners = [
  {
    category: 'Vulnerability & Assessment',
    partners: ['Tenable', 'Qualys', 'Rapid7', 'SafeBreach', 'AttackIQ', 'XM Cyber', 'Pentera', 'Censys', 'Picus Security'],
  },
  {
    category: 'Security Operations (SOC / SIEM)',
    partners: ['Google SecOps', 'Microsoft Sentinel', 'Splunk', 'IBM QRadar', 'CrowdStrike Falcon', 'SentinelOne'],
  },
  {
    category: 'Detection & Response',
    partners: ['Palo Alto XSOAR', 'Splunk SOAR', 'Recorded Future', 'Mandiant', 'Darktrace', 'Vectra AI', 'Exabeam'],
  },
  {
    category: 'GRC & Compliance',
    partners: ['RSA Archer', 'ServiceNow GRC', 'IBM OpenPages', 'Vanta', 'Drata', 'OneTrust', 'BigID'],
  },
  {
    category: 'Forensics & Incident Response',
    partners: ['Magnet AXIOM', 'OpenText EnCase', 'Cellebrite', 'CrowdStrike Services', 'Palo Alto Unit 42'],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-brand/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-brand-light/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <div className="relative container-sm text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/6 border border-white/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-light animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-300">Pre-Breach · Post-Breach · Continuous</span>
          </div>
          <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
            Cyber Resilience<br />
            <span className="gradient-brand-light">Services.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Four continuous service programmes — Assessment, Monitoring, Compliance, and Forensics —
            delivered by expert practitioners and leading platforms as a single unified engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-brand">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#packages" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-16 px-6 bg-white border-b border-black/5">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map(p => {
              const Icon = p.icon
              return (
                <Link key={p.href} href={p.href}
                  className="group card-premium border border-black/5 p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <div className={`h-0.5 w-8 ${p.accent} rounded-full mb-6`} />
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${p.badgeColor} mb-4 inline-block`}>
                    {p.badge}
                  </span>
                  <Icon className="w-6 h-6 text-[#0D0D14] mb-4" />
                  <h3 className="font-black text-[#0D0D14] text-sm mb-0.5">{p.label}</h3>
                  <p className="text-[11px] font-semibold text-brand mb-3">{p.sub}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section bg-smoke">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">Service Packages</div>
            <h2 className="display text-5xl text-[#0D0D14] mb-4">One programme. Three tiers.</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Each tier delivers across all four service disciplines simultaneously — Assessment, Monitoring,
              Compliance, and Forensics. You choose the depth. We deliver everything.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {packages.map(pkg => (
              <div key={pkg.name}
                className={`card-premium border ${pkg.border} overflow-hidden ${pkg.popular ? 'ring-1 ring-amber-300 shadow-xl' : ''}`}>

                {/* Top accent */}
                <div className={`h-1 ${pkg.bar}`} />

                {/* Header */}
                <div className="p-8 pb-6">
                  {pkg.popular && (
                    <div className="text-[10px] font-black tracking-widest uppercase text-amber-600 mb-3">★ Most Selected</div>
                  )}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="display text-3xl text-[#0D0D14]">{pkg.name}</h3>
                    <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full ${pkg.badgeCls}`}>
                      {pkg.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{pkg.tagline}</p>
                </div>

                {/* Divider */}
                <div className="mx-8 border-t border-black/5" />

                {/* Bucket deliverables */}
                <div className="p-8 pt-6 space-y-7">
                  {pkg.buckets.map(bucket => (
                    <div key={bucket.label}>
                      <div className={`text-[9px] font-black tracking-widest uppercase ${pkg.labelCls} mb-3`}>
                        {bucket.label}
                      </div>
                      <ul className="space-y-2">
                        {bucket.items.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-[13px] text-slate-600 leading-snug">
                            <div className={`w-1.5 h-1.5 rounded-full ${pkg.dotCls} flex-shrink-0 mt-1.5`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <Link href="/contact"
                    className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-colors ${pkg.btnCls}`}>
                    Request Proposal →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            All packages are tailored engagements. Scope, duration, and pricing discussed during a no-obligation discovery call.
          </p>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-brand/8 rounded-full blur-[120px]" />
        <div className="relative container">
          <div className="text-center mb-14">
            <div className="eyebrow text-brand-light justify-center">Technology Partners</div>
            <h2 className="display text-4xl text-white mb-4">Best-in-class platforms. Expert-led delivery.</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              We operate whichever platform is already in your environment — or recommend
              the right fit. You are never locked into a single vendor.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {techPartners.map(tp => (
              <div key={tp.category} className="grid lg:grid-cols-12 gap-4 items-center py-5 border-b border-white/6">
                <div className="lg:col-span-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">{tp.category}</span>
                </div>
                <div className="lg:col-span-9 flex flex-wrap gap-2">
                  {tp.partners.map(p => (
                    <span key={p} className="px-3.5 py-1.5 rounded-lg bg-white/6 border border-white/8 text-sm font-medium text-slate-300 hover:bg-white/10 transition-colors cursor-default">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kaska */}
      <section className="section bg-mist">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow">The Kaska Model</div>
              <h2 className="display text-5xl text-[#0D0D14] mb-6 leading-tight">
                Expert practitioners.<br />
                <span className="gradient-brand">Leading platforms.</span><br />
                Continuous delivery.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Most managed security services separate technology from expertise — you get the platform or
                you get the consultant. Kaska delivers both as a single continuous engagement, so your
                posture improves every month, not just after an annual assessment.
              </p>
              <Link href="/contact" className="btn-brand">
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Platform-Agnostic', desc: 'We operate your existing stack or recommend the right fit — no vendor lock-in.' },
                { title: 'Pre & Post-Breach', desc: 'Continuous coverage across the full attack lifecycle, not just one phase.' },
                { title: 'Named Practitioners', desc: 'Dedicated analysts and consultants — not anonymous offshore teams.' },
                { title: 'Outcome-Driven', desc: 'Deliverables and SLAs defined upfront — you know exactly what you get.' },
              ].map(f => (
                <div key={f.title} className="card-premium border border-black/5 p-6">
                  <CheckCircle className="w-4 h-4 text-brand mb-3" />
                  <div className="font-black text-[#0D0D14] text-sm mb-2">{f.title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0D0D14] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[600px] h-[600px] border border-white rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-white rounded-full" />
          <div className="absolute w-[200px] h-[200px] border border-white rounded-full" />
        </div>
        <div className="relative container-sm text-center">
          <h2 className="display text-5xl text-white mb-6">
            Ready to build<br />
            <span className="gradient-brand-light">lasting resilience?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Tell us where you are. We&apos;ll scope the right programme and respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-brand">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
              About Kaska
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
