/* Compliance & regulatory assurance: the 17 frameworks in
   services/compliance-services/compliance-mapper/framework_library.py, grouped India / international. */

const INDIA: [string, string][] = [
  ['RBI Cyber Security Framework', 'Mandatory baseline and annex controls for financial entities'],
  ['SEBI CSCRF', 'Cybersecurity and Cyber Resilience Framework for regulated entities (Aug 2024)'],
  ['IRDAI Guidelines', 'Information and cyber security guidelines for insurers'],
  ['CERT-In Directions', '6-hour incident reporting, NTP time synchronisation and 180-day log retention'],
  ['DPDP Act 2023', 'Reasonable security safeguards and breach notification for data fiduciaries'],
  ['MeitY Guidelines', 'Secure application design, development and implementation, GIGW compliance, system hardening and cryptography'],
  ['CEA Regulations', 'Cyber security in the power sector, including IT/OT segregation and resilience'],
  ['NCIIPC Guidelines', 'Protection of Critical Information Infrastructure (CII)'],
  ['RBI FREE-AI', 'Responsible, ethical and explainable AI in financial systems'],
]

const GLOBAL: [string, string][] = [
  ['ISO/IEC 27001:2022', 'Information Security Management Systems (Annex A)'],
  ['NIST CSF 2.0', 'Govern, Identify, Protect, Detect, Respond and Recover'],
  ['PCI DSS v4.0', 'Cardholder data protection'],
  ['AICPA SOC 2 (Trust Services Criteria)', 'Security, availability and confidentiality'],
  ['CIS Controls v8', '18 critical security controls across Implementation Groups 1–3'],
  ['FISMA / NIST SP 800-53', 'Federal information security controls'],
  ['HIPAA Security Rule', 'Safeguards for electronic protected health information (ePHI)'],
  ['EU GDPR', 'Article 32/33 security of processing and supervisory notification'],
]

const CARDS: [string, string][] = [
  ['Test once, prove to many', 'Automated connectors evaluate endpoint, identity, cloud, network and backup controls. One passing technical check, such as admin MFA or backup immutability, satisfies equivalent clauses across RBI, SEBI, ISO 27001 and SOC 2 at the same time.'],
  ['True evidence states', 'Evidence is labelled Live, Derived, Provisional or Not assessed. Gaps come with clear technical remediation steps and an owner, not a checklist percentage.'],
  ['Auditor-grade evidence packs', 'Regulator-specific dossiers and gap reports (JSON / CSV), generated on demand for CERT-In, RBI inspections or independent audit teams.'],
  ['Cryptographic chain of custody', 'Every control run, gap closure and risk acceptance is recorded in a tamper-evident, append-only SHA-256 chained evidence ledger.'],
]

function Group({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <span className="kicker">{title}</span>
      <ul className="fw-list">
        {items.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
      </ul>
    </div>
  )
}

export function RegulatoryAssurance({ tone = 's-warm', id = 'compliance' }: { tone?: string; id?: string }) {
  return (
    <section className={`${tone} sec`} id={id}>
      <div className="wrap">
        <div className="split">
          <div>
            <span className="kicker">Continuous Regulatory Assurance &amp; Evidence Automation</span>
            <h2 className="h2 mt-s">Map validated technical controls to <em>17 Indian &amp; global</em> compliance frameworks.</h2>
          </div>
          <p className="lede">
            Validate technical controls once through continuous telemetry, and automatically map compliance posture
            across 17 regulatory and industry standards simultaneously. Unassessed clauses remain strictly Not
            assessed, never assumed compliant. Backed by a tamper-evident, append-only SHA-256 chained evidence ledger for
            zero-friction audits.
          </p>
        </div>
        <div className="fw-grid mt-m">
          <Group title="Indian regulatory frameworks · 9" items={INDIA} />
          <Group title="International standards & frameworks · 8" items={GLOBAL} />
        </div>
        <div className="cols4 mt-m">
          {CARDS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
        </div>
        <p className="note mt-s">Kaska maps your evidence to these frameworks. This is not a certification or regulatory approval; PCI DSS and HIPAA are mapped, not certified.</p>
      </div>
    </section>
  )
}

export function SovereignDeployment({ tone = 's-white' }: { tone?: string }) {
  return (
    <section className={`${tone} sec`} id="deployment">
      <div className="wrap">
        <div className="split">
          <div>
            <span className="kicker">Architecture &amp; trust</span>
            <h2 className="h2 mt-s">Built for regulated enterprises &amp; <em>sovereign infrastructure</em>.</h2>
          </div>
        </div>
        <div className="cols3 mt-m">
          <div><b>Flexible deployment</b><p>Dedicated Cloud SaaS, Hybrid, Private On-Premise (Air-Gapped &amp; Sovereign Datacenter ready).</p></div>
          <div><b>100% data sovereignty</b><p>All telemetry, asset inventories and evidence records remain strictly within Indian territorial boundaries in full compliance with DPDP Act 2023.</p></div>
          <div><b>Tamper-evident evidence</b><p>SHA-256 chained evidence ledger for audit-grade regulatory proof and forensic readiness.</p></div>
        </div>
      </div>
    </section>
  )
}
