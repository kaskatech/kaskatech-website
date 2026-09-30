import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Technology Solutions — Kaska',
  description:
    'Kaska technology solutions and services: managed security, SOC / MDR, VAPT, GRC, identity, data, application, network, cloud and OT security, incident response, architecture, advisory, implementation and managed device support.',
}

const SOLUTIONS: [string, string][] = [
  ['Managed Security Services', 'Ongoing operation and monitoring of your security technologies, to agreed service levels.'],
  ['SOC / MDR', 'Security monitoring, detection and response, designed and run together with your team.'],
  ['VAPT', 'Vulnerability assessment and penetration testing across applications, networks and cloud.'],
  ['GRC', 'Governance, risk and compliance programmes, framework alignment and audit readiness.'],
  ['IAM / PAM', 'Identity, MFA and privileged access: design, implementation and access-policy hardening.'],
  ['Data Security', 'Data classification, DLP and data security posture programmes.'],
  ['Application Security', 'Secure SDLC, application and API testing, and DevSecOps.'],
  ['Network Security', 'Firewalls, segmentation, network access control and secure remote access.'],
  ['Cloud Security', 'Cloud posture, secure landing zones and workload protection.'],
  ['OT Security', 'OT asset visibility, ICS network security and IT/OT convergence.'],
  ['Incident Response & Recovery', 'Incident readiness, response support and recovery planning.'],
  ['Security Architecture', 'Target architectures and zero-trust roadmaps.'],
  ['Advisory', 'Strategy, maturity assessments and board-level risk reporting.'],
  ['Implementation', 'Deployment, migration, tuning and hardening of security technologies.'],
  ['Managed Device Support', 'Ongoing support for the security devices and appliances in your estate.'],
]

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Technology Solutions"
        title={<>Security programmes, <em>delivered</em>.</>}
        lede="Alongside its products, Kaska designs, implements, operates and supports the security technologies organisations depend on. Vendor-agnostic, and selected for each environment, risk profile and regulatory obligation."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('solutions')}>Talk about your programme<Arrow /></Link>
          <Link className="btn btn-q" href="/exposure-management">See our products</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Solutions &amp; services</span>
          <h2 className="h2 mt-s">One accountable team, <em>across the estate</em>.</h2>
          <div className="elist two mt-m">
            {SOLUTIONS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="s-dark sec">
        <div className="wrap">
          <span className="kicker">How we deliver</span>
          <h2 className="h2 mt-s">Four ways to <em>engage</em>.</h2>
          <div className="cols4 mt-m">
            <div><span className="n">01</span><b>Advisory</b><p>Strategy, gap assessments and roadmaps.</p></div>
            <div><span className="n">02</span><b>Implementation</b><p>Deployment, migration, tuning and hardening.</p></div>
            <div><span className="n">03</span><b>Assurance</b><p>Validation that controls hold after they go live.</p></div>
            <div><span className="n">04</span><b>Managed &amp; support</b><p>Ongoing operation and support, to agreed service levels.</p></div>
          </div>
        </div>
      </section>

      <section className="s-white sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Products and solutions</span>
            <h2 className="h3 mt-s">The same evidence-first discipline in both.</h2>
          </div>
          <p className="body">
            Where it fits a programme, Kaska&apos;s own products can be part of the solution: <Link className="more" href="/exposure-management">Kaska EM</Link> to
            measure whether controls are effective, and <Link className="more" href="/email-security">Kaska Email Security</Link> for post-delivery email protection.
          </p>
        </div>
      </section>

      <Close
        kicker="Get started"
        title={<>Talk to us about your <em>programme</em>.</>}
        text="Tell us about your environment and priorities. We'll come back with a focused conversation."
        primary={{ href: demo('solutions'), label: 'Talk to Kaska' }}
        secondary={null}
      />
    </>
  )
}
