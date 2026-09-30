import type { Metadata } from 'next'
import Link from 'next/link'
import JourneyTable from '@/components/k/JourneyTable'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'
import { ARCH, CAPABILITIES } from '@/components/k/content'

export const metadata: Metadata = {
  title: 'Platform capabilities — Kaska',
  description:
    'The capabilities and architecture of Kaska Exposure Management Platform™: asset intelligence, exposure management, control validation, risk quantification, compliance, detection and response, case management, governed response and resilience reporting.',
}

const DETAIL: Record<string, string[]> = {
  'Asset Intelligence': ['Assets assembled and de-duplicated from connected sources', 'Criticality and ownership on every asset', 'Coverage gaps shown where no source reports'],
  'Asset Graph & xBOM': ['Relationships between assets, identities and software', 'SBOM-based software inventory', 'CERT-In SBOM guidelines scorecard'],
  'Exposure Management': ['Known-exploited vulnerabilities prioritised (CISA KEV)', 'Exploit likelihood context (EPSS)', 'Public exposure attached to the asset'],
  'Control Validation': ['Checks across identity, endpoint, network, cloud, email, data, backup, OT and more', 'Every finding carries its evidence', 'No data means not assessed, never a pass'],
  'Cyber Risk Quantification': ['FAIR-based risk model', 'Estimates driven by validated control state', 'Calibration state shown with every figure'],
  'Compliance & Evidence': ['Control evidence mapped to regulatory frameworks', 'One piece of evidence, many requirements', 'Unassessed requirements stay visible'],
  'Detection & Response': ['Incidents ingested from your SIEM or XDR', 'Asset, exposure and control context attached', 'Blast radius and business impact, where available'],
  'Investigation & Case Management': ['Cases with owners, timelines and evidence', 'AI-assisted investigation support', 'Closed only when verified'],
  'Governed Response & Orchestration': ['Playbooks and response actions by policy', 'Human approval where it matters', 'Every action on the audit trail'],
  'Resilience & Reporting': ['A resilience view built from evidence', 'Plain-language board reporting', 'Areas without evidence reported, not hidden'],
}

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Kaska EM · Platform capabilities"
        title={<>Ten capabilities. <em>One platform.</em></>}
        lede="From asset intelligence to resilience reporting, each capability is designed to be strong on its own and stronger together, because all of them share one asset foundation and one evidence trail."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('em')}>Request a Demo<Arrow /></Link>
          <Link className="btn btn-q" href="/exposure-management">About Kaska EM</Link>
        </div>
      </PageHero>

      {/* ARCHITECTURE */}
      <section className="s-deep sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Architecture</span>
              <h2 className="h2 mt-s">Five layers, <em>one direction</em>.</h2>
            </div>
            <p className="lede">Signals come in at the bottom. Understanding, decisions and evidence come out at the top. Nothing is scanned or enforced by Kaska itself; it works through the tools you already run.</p>
          </div>
          <div className="arch">
            {ARCH.map((l) => (
              <div key={l.t} className={`lyr ${l.k}`}>
                <div className="ln">{l.n}<b>{l.t}</b></div>
                <div className="lv">{l.v.map((v) => <span key={v}>{v}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES IN DETAIL */}
      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Capabilities</span>
          <h2 className="h2 mt-s">What each capability <em>does</em>.</h2>
          <div className="capx">
            {CAPABILITIES.map((c, i) => (
              <div className="cap" key={c.t} id={c.t.toLowerCase().replace(/[^a-z]+/g, '-')}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.t}</h3>
                <div>
                  <p>{c.d}</p>
                  <ul style={{ marginTop: 12, display: 'grid', gap: 6 }}>
                    {DETAIL[c.t].map((d) => <li key={d} className="note" style={{ color: '#3D3C37' }}>— {d}</li>)}
                  </ul>
                </div>
                <span className="stg">{c.layer}</span>
              </div>
            ))}
          </div>
          <p className="note mt-s">Capability availability is confirmed for your environment during evaluation.</p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">In operation</span>
              <h2 className="h2 mt-s">How the capabilities <em>work together</em>.</h2>
            </div>
            <p className="lede">Discover, understand, validate, prioritise, remediate, verify, report: one product view, built step by step.</p>
          </div>
          <div className="mt-m"><JourneyTable /></div>
        </div>
      </section>

      <Close title={<>See the capabilities on <em>your</em> questions.</>} text="Tell us what you need to prove, to leadership or to a regulator. We'll show you how Kaska EM approaches it." />
    </>
  )
}
