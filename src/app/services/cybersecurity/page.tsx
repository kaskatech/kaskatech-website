import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, Search, Cloud, Code, Lock, Database, Users, AlertTriangle, Server, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cybersecurity Services — Kaska Technologies & Services',
  description: 'GRC, TPRM, Cloud Security, Application Security, VAPT, Data Protection, Incident Response, Security Architecture, Managed Security. Practitioner-led, enterprise-grade.',
}

const services = [
  {
    icon: Shield,
    title: 'Governance, Risk & Compliance (GRC)',
    color: 'blue',
    objective: 'Establish, assess, and enhance your organisation\'s governance and risk management framework.',
    items: [
      'Information Security Governance Framework Design (ISO 27001, NIST CSF, COBIT)',
      'Risk Management Framework Development (NIST RMF, ISO 31000)',
      'Security Policy, Standard, and Procedure Development',
      'Compliance Gap Assessments — ISO 27001:2022, NIST 800-53/CSF, GDPR, PCI-DSS, SOC 2 Type II',
      'Control Mapping & Harmonisation (crosswalks between frameworks)',
      'Security Maturity Assessments & Roadmap Development',
    ],
  },
  {
    icon: Users,
    title: 'Third-Party Risk Management (TPRM)',
    color: 'teal',
    objective: 'Reduce vendor-related risks through due diligence, ongoing monitoring, and automation.',
    items: [
      'Vendor Risk Assessment Programs — Design & Implementation',
      'Hybrid TPRM: Questionnaire-based + OSINT signal integration',
      'Vendor Security Questionnaire Development',
      'Third-Party Continuous Monitoring',
      'Cloud Vendor Assessments (AWS, Azure, GCP)',
      'TPRM Automation using No-Code Platforms',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud Security Consulting',
    color: 'sky',
    objective: 'Secure cloud infrastructure, applications, and data against misconfigurations and threats.',
    items: [
      'Cloud Security Posture Assessments (CSPM)',
      'Cloud Security Architecture Review (AWS, Azure, GCP)',
      'Identity and Access Management (IAM) Design',
      'Data Protection and Encryption Strategy',
      'Shared Responsibility Model Advisory',
      'Cloud Compliance Alignment — ISO 27017, CSA CCM, CIS Benchmarks',
    ],
  },
  {
    icon: Code,
    title: 'Application & Product Security',
    color: 'purple',
    objective: 'Integrate security throughout the software development lifecycle (SDLC).',
    items: [
      'Secure SDLC Framework Implementation',
      'Threat Modelling Workshops',
      'Application Security Assessments (Web, Mobile, API)',
      'Static and Dynamic Code Analysis Advisory (SAST/DAST)',
      'DevSecOps Integration — CI/CD pipeline security',
      'Open Source Dependency & SBOM Review',
    ],
  },
  {
    icon: Search,
    title: 'Security Assessments & Testing (VAPT)',
    color: 'red',
    objective: 'Identify and remediate vulnerabilities through ethical hacking and structured testing.',
    items: [
      'External and Internal Penetration Testing',
      'Web and Mobile Application Penetration Testing',
      'API Security Testing',
      'Wireless and Network Infrastructure Testing',
      'Red Team / Purple Team Exercises',
      'Vulnerability Assessment & Remediation Planning',
    ],
  },
  {
    icon: Database,
    title: 'Data Protection & Privacy',
    color: 'green',
    objective: 'Ensure compliance with data protection laws and build privacy by design.',
    items: [
      'GDPR / DPDPA 2023 Readiness Assessments',
      'Data Protection Impact Assessments (DPIA)',
      'Privacy Policy & Notice Development',
      'Data Flow Mapping and Records of Processing Activities (RoPA)',
      'Cross-border Data Transfer Assessments',
      'Privacy by Design & Default Advisory',
    ],
  },
  {
    icon: Users,
    title: 'Security Awareness & Training',
    color: 'gold',
    objective: 'Build a strong security culture and reduce human risk across your organisation.',
    items: [
      'Information Security Awareness Programs',
      'Phishing Simulation Campaigns',
      'Role-based Security Training (Developers, IT Admins, HR)',
      'Executive Cybersecurity Workshops',
      'Incident Response Tabletop Exercises',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response & Business Continuity',
    color: 'orange',
    objective: 'Enhance resilience and ensure rapid recovery during cyber incidents.',
    items: [
      'Incident Response Plan (IRP) Development',
      'Crisis Management Playbook Creation',
      'Tabletop Exercises & Simulation Drills',
      'Business Continuity & Disaster Recovery (BC/DR) Planning',
      'Post-Incident Review & Forensic Readiness',
    ],
  },
  {
    icon: Server,
    title: 'Security Architecture & Engineering',
    color: 'navy',
    objective: 'Design secure infrastructure and reduce attack surface across your environment.',
    items: [
      'Network and Infrastructure Security Design',
      'Zero Trust Architecture Implementation',
      'Secure Configuration Baseline (CIS, NCSC)',
      'Endpoint Detection and Response (EDR/XDR) Advisory',
      'Identity Federation & SSO Implementation',
      'Security Technology Selection and Implementation Support',
    ],
  },
  {
    icon: Eye,
    title: 'Managed Security & Advisory Services',
    color: 'indigo',
    objective: 'Provide continuous expert support and oversight for evolving threats.',
    items: [
      'Virtual CISO (vCISO) Services',
      'Continuous Security Posture Monitoring',
      'Regulatory Reporting and Board Dashboards',
      'Monthly Threat Briefings and Security Posture Reviews',
      'SIEM Use Case Development & Tuning',
    ],
  },
]

type ColorKey = 'blue' | 'teal' | 'sky' | 'purple' | 'red' | 'green' | 'gold' | 'orange' | 'navy' | 'indigo'

const colorMap: Record<ColorKey, { icon: string; dot: string; bar: string }> = {
  blue:   { icon: 'text-blue',         dot: 'bg-blue',         bar: 'bg-blue' },
  teal:   { icon: 'text-teal',         dot: 'bg-teal',         bar: 'bg-teal' },
  sky:    { icon: 'text-sky-500',      dot: 'bg-sky-400',      bar: 'bg-sky-400' },
  purple: { icon: 'text-purple-500',   dot: 'bg-purple-400',   bar: 'bg-purple-400' },
  red:    { icon: 'text-red',          dot: 'bg-red',          bar: 'bg-red' },
  green:  { icon: 'text-green',        dot: 'bg-green',        bar: 'bg-green' },
  gold:   { icon: 'text-gold',         dot: 'bg-gold',         bar: 'bg-gold' },
  orange: { icon: 'text-orange-500',   dot: 'bg-orange-400',   bar: 'bg-orange-400' },
  navy:   { icon: 'text-navy',         dot: 'bg-navy',         bar: 'bg-navy' },
  indigo: { icon: 'text-indigo-500',   dot: 'bg-indigo-400',   bar: 'bg-indigo-400' },
}

const process = [
  { step: '01', title: 'Assess', desc: 'Understand current posture, regulatory obligations, and risk appetite.' },
  { step: '02', title: 'Design', desc: 'Prioritised remediation plan with financial impact per gap — not a generic checklist.' },
  { step: '03', title: 'Implement', desc: 'Hands-on implementation support — not just a report to act on alone.' },
  { step: '04', title: 'Validate', desc: 'Measure, report, and prove the improvement to board and regulators.' },
]

export default function CybersecurityServicesPage() {
  return (
    <div className="bg-cream">

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue/10 rounded-full blur-[100px]" />
        <div className="relative container text-center">
          <div className="eyebrow justify-center text-blue/80">Cybersecurity Services</div>
          <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
            End-to-end security.<br />
            <span className="gradient-gold">Practitioner-led.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            From governance and compliance to penetration testing, cloud security, and managed advisory —
            delivered by practitioners with deep enterprise cybersecurity experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GRC', 'TPRM', 'Cloud Security', 'VAPT', 'Data Protection', 'vCISO', 'Incident Response', 'AppSec'].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-white/8 text-white text-xs font-semibold border border-white/12 tracking-wide">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Service catalogue */}
      <section className="section bg-stone">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">Service Catalogue</div>
            <h2 className="display text-5xl text-navy mb-4">What we cover.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Each service line is delivered by domain experts — not generalists. Practitioner
              depth with full-service coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              const c = colorMap[s.color as ColorKey]
              return (
                <div key={s.title} className="card-premium border border-black/5 overflow-hidden group">
                  <div className={`h-1 ${c.bar}`} />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-stone flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${c.icon}`} />
                      </div>
                      <div>
                        <h3 className="font-black text-navy text-base leading-snug">{s.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{s.objective}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {s.items.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                          {item}
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

      {/* Powered by SafeCyber */}
      <section className="section bg-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="card-dark p-10 lg:p-14">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <Shield className="w-10 h-10 text-blue mb-5" />
                  <h3 className="display text-4xl text-white mb-4">Services Powered by SafeCyber</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Our GRC and managed security services are backed by SafeCyber — the
                    Autonomous Cyber Resilience Platform. AI-assisted investigation, automated
                    evidence collection, and board-ready financial risk numbers at every stage.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    'Faster SOC investigation through AI correlation',
                    'Automated compliance evidence collection',
                    'Financial risk quantification per control gap',
                    'Board-ready reporting — not just technical findings',
                  ].map(pt => (
                    <div key={pt} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue flex-shrink-0" />
                      <span className="text-sm text-slate-300">{pt}</span>
                    </div>
                  ))}
                  <a href="https://safecyber.io" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 btn-gold">
                    Learn about SafeCyber <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section bg-stone">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center">How We Work</div>
            <h2 className="display text-5xl text-navy">Our Engagement Model</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="card-premium border border-black/5 p-8">
                <div className="display text-5xl font-black text-navy/10 mb-4">{p.step}</div>
                <h4 className="font-black text-navy text-lg mb-3">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative container-sm text-center">
          <h2 className="display text-5xl text-white mb-6">
            Ready to strengthen<br />
            <span className="gradient-gold">your security posture?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Tell us what you need — we'll scope it and respond within 24 hours.
          </p>
          <Link href="/contact" className="btn-gold">
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
