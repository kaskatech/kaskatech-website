import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Managed Security Services — Kaska',
  description:
    'Kaska Managed Security Services, delivered with MSSP and OEM partners: SOC / MDR, VAPT and red teaming, GRC and compliance (CERT-In, DPDP, RBI, ISO 27001), identity, data and application security, and a fixed-scope exposure assessment using Kaska EM.',
}

const SERVICES: [string, string][] = [
  ['SOC / MDR', 'Security monitoring, detection and response on the tools you already run, with escalation and response steps agreed with your team.'],
  ['VAPT & red teaming', 'Vulnerability assessment and penetration testing across applications, APIs, networks and cloud, and goal-based red team exercises.'],
  ['GRC & compliance', 'Gap assessments, policies, evidence and audit readiness for CERT-In directions, the DPDP Act, RBI cyber security guidelines and ISO 27001.'],
  ['Identity security', 'IAM, MFA and privileged access: design, implementation and access reviews.'],
  ['Data security', 'Data discovery and classification, DLP and data protection programmes.'],
  ['Application security', 'Secure SDLC, code and dependency review, application and API testing.'],
]

const ASSESSMENT: [string, string, string][] = [
  ['01', 'Scope', 'We agree the business units, assets and security tools in scope, and the regulators that apply to you.'],
  ['02', 'Connect', 'Kaska EM reads configuration and posture from your existing security tools. No agents to roll out for the assessment.'],
  ['03', 'Validate', 'Each control is checked against how it is actually configured, so you see which controls are not protecting the assets they are meant to.'],
  ['04', 'Report', 'Findings are mapped to CERT-In, DPDP, RBI and ISO 27001, prioritised, and summarised in a board-ready report.'],
]

const MSSP: [string, string][] = [
  ['White-label console', 'Run Kaska EM for your customers under your own brand.'],
  ['Multi-tenant', 'Manage every customer from one console, with each customer’s data kept separate.'],
  ['Revenue share', 'A partner commercial model, agreed per partnership.'],
  ['Partner-delivered', 'You own the customer relationship and the service; Kaska supports the platform.'],
]

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Managed Security Services"
        title={<>Security services, <em>delivered with partners</em>.</>}
        lede="Kaska Managed Security Services are delivered together with MSSP and OEM partners. Vendor-agnostic, scoped to your environment and the regulations that apply to you."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('managed-services')}>Talk to us<Arrow /></Link>
          <Link className="btn btn-q" href="#exposure-assessment">Exposure assessment</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Services</span>
          <h2 className="h2 mt-s">What we <em>deliver</em>.</h2>
          <div className="elist two mt-m">
            {SERVICES.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="s-dark sec" id="exposure-assessment">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Exposure assessment</span>
              <h2 className="h2 mt-s">Which of your controls are <em>not actually protecting you</em>?</h2>
            </div>
            <p className="lede">
              A fixed-scope engagement using Kaska EM. It shows where security controls you have paid for are
              misconfigured or not covering what matters, mapped to Indian regulators, with a board report at the end.
            </p>
          </div>
          <div className="cols4 mt-m">
            {ASSESSMENT.map(([n, t, d]) => <div key={n}><span className="n">{n}</span><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="ctas mt-m">
            <Link className="btn btn-go" href={demo('exposure-assessment')}>Request a briefing<Arrow /></Link>
            <Link className="btn btn-q" href="/kaska-em">About Kaska EM</Link>
          </div>
        </div>
      </section>

      <section className="s-white sec" id="for-mssps">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">For MSSPs</span>
              <h2 className="h2 mt-s">Offer Kaska EM <em>as your service</em>.</h2>
            </div>
            <p className="lede">For MSSPs and system integrators who want to add exposure management to their portfolio.</p>
          </div>
          <div className="cols4 mt-m">
            {MSSP.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="ctas mt-m">
            <Link className="btn btn-q" href="/partners">Partnering with Kaska</Link>
          </div>
        </div>
      </section>

      <Close
        kicker="Get started"
        title={<>Talk to us about your <em>security programme</em>.</>}
        text="Tell us about your environment and obligations. We'll come back with a scoped proposal."
        primary={{ href: demo('managed-services'), label: 'Talk to Kaska' }}
        secondary={{ href: '/partners', label: 'For partners' }}
      />
    </>
  )
}
