'use client'

import { useEffect, useState } from 'react'

/* Kaska EM as a product object: five views and an evidence drawer that shows the provenance of a finding.
   Illustrative data. */

type ViewKey = 'val' | 'exp' | 'risk' | 'evi' | 'rep'
const NAV: [ViewKey, string][] = [
  ['val', 'Control validation'],
  ['exp', 'Exposure'],
  ['risk', 'Risk & resilience'],
  ['evi', 'Evidence'],
  ['rep', 'Reporting'],
]
const NOTES: Record<ViewKey, [string, string][]> = {
  val: [['Enforced, not just configured', 'Each control is measured against its intended outcome.'], ['Gaps are specific', 'A finding names the failing check and the asset it affects.'], ['Open a finding', 'Every finding opens to its evidence trail.']],
  exp: [['Exploitability in context', 'Findings are matched to vulnerabilities attackers are known to use.'], ['The software you run', 'Components from your SBOM, with a CERT-In guidelines scorecard.'], ['Attached where it applies', 'Exposure is linked to the assets and controls it affects.']],
  risk: [['One resilience view', 'The console and the board report read the same view, so they never disagree.'], ['Risk in context', 'Exposure, control effectiveness and business criticality, together.'], ['Calibrated before quoted', 'Financial estimates appear once the model is calibrated with your data.']],
  evi: [['Live', 'Read directly from your systems.'], ['Derived · Provisional', 'Calculated from measured data, or awaiting calibration.'], ['Not assessed', 'No evidence yet, and never shown as a pass.']],
  rep: [['Plain language', 'Written for the board, not the SOC.'], ['Same source of truth', 'Built from the same evidence as the console.'], ['Gaps stay visible', 'Areas without evidence are reported, not hidden.']],
}
type Trail = ['l' | 'd' | 'p' | 'n', string, string, string][]
const FINDINGS: { t: string; v: string; trail: Trail }[] = [
  { t: 'Workforce MFA coverage below policy', v: '50%', trail: [['l', 'User and MFA records', 'Identity directory', 'Live'], ['d', 'Coverage calculation', 'Kaska EM', 'Derived'], ['p', 'Risk estimate', 'Risk model, before calibration', 'Provisional'], ['n', 'Legacy authentication', 'No connected source', 'Not assessed']] },
  { t: 'Privileged-account ratio above target', v: '25%', trail: [['l', 'Role assignments', 'Identity directory', 'Live'], ['d', 'Ratio calculation', 'Kaska EM', 'Derived'], ['p', 'Risk estimate', 'Risk model, before calibration', 'Provisional']] },
  { t: 'Endpoint prevention policy', v: '—', trail: [['n', 'Prevention policy', 'No connected source', 'Not assessed'], ['n', 'Critical server coverage', 'No connected source', 'Not assessed']] },
]
const CL = { l: 'live', d: 'der', p: 'prov', n: 'na' } as const

export default function ProductConsole() {
  const [v, setV] = useState<ViewKey>('val')
  const [f, setF] = useState<number | null>(null)
  useEffect(() => { if (window.innerWidth > 900) setF(0) }, [])
  const choose = (k: ViewKey) => { setV(k); setF(null) }

  return (
    <div className="prod">
      <div className="behind" aria-hidden="true"><span className="h">Board report · this quarter</span><b>Identity is the priority this quarter.</b></div>
      <div className="console win">
        <div className="wbar"><i></i><i></i><i></i><span>Kaska EM · sample organisation</span></div>
        <div className="cb">
          <div className="side" role="tablist" aria-label="Kaska EM views">
            <span className="gh">Kaska EM</span>
            {NAV.map(([k, t]) => (
              <button key={k} role="tab" aria-selected={v === k} onClick={() => choose(k)}>{t}</button>
            ))}
            <span className="gh">Also in the platform</span>
            <span className="dim">Assets</span><span className="dim">Cases</span><span className="dim">Software (xBOM)</span><span className="dim">Compliance</span>
          </div>
          <div className="cmain">
            <div className="fadein" key={v}>
              {v === 'val' && (<>
                <div className="vh"><b>Control validation</b><span>Enforced, not configured</span></div>
                <div className="g2">
                  <div className="pn"><div className="ph"><span>Domains</span><span className="chip der">Derived</span></div>
                    <div className="dl">
                      <div><span>Identity &amp; access</span><span className="chip gap">Gap</span></div>
                      <div><span>Email security</span><span className="chip ok">Validated</span></div>
                      <div><span>Cloud posture</span><span className="chip gap">Gap</span></div>
                      <div><span>Backup &amp; recovery</span><span className="chip ok">Validated</span></div>
                      <div><span>Endpoint</span><span className="chip na">Not assessed</span></div>
                    </div></div>
                  <div className="pn"><div className="ph"><span>Needs attention first</span><span className="chip der">Derived</span></div><div className="bv">3</div><div className="sb">Gaps on exposed, high-criticality assets, ranked by exposure and control state.</div></div>
                </div>
                <div className="ft">
                  <div className="tr th"><span>Finding</span><span className="m">Measured</span><span></span></div>
                  {FINDINGS.map((x, i) => (
                    <button className="tr" key={x.t} onClick={() => setF(i)}><span>{x.t}</span><span className="m mono">{i === 0 ? '50% of users' : i === 1 ? '25% of users' : '—'}</span><span className="open">Evidence →</span></button>
                  ))}
                </div>
              </>)}
              {v === 'exp' && (<>
                <div className="vh"><b>Exposure</b><span>Threat and software context</span></div>
                <div className="g3">
                  <div className="pn"><div className="ph"><span>Known exploited</span><span className="chip live">Live</span></div><div className="bv">KEV</div><div className="sb">CISA Known Exploited Vulnerabilities, kept current.</div></div>
                  <div className="pn"><div className="ph"><span>Attack techniques</span><span className="chip live">Live</span></div><div className="bv">ATT&amp;CK</div><div className="sb">MITRE ATT&amp;CK: Enterprise, ICS and ATLAS.</div></div>
                  <div className="pn"><div className="ph"><span>Software</span><span className="chip live">Live</span></div><div className="bv">xBOM</div><div className="sb">Components from your SBOM, with a CERT-In guidelines scorecard.</div></div>
                </div>
                <div className="ft">
                  <div className="tr th"><span>Asset</span><span className="m">Exposure</span><span></span></div>
                  <div className="tr"><span>Payments API</span><span className="m">Known-exploited flaw</span><span className="chip gap">Gap</span></div>
                  <div className="tr"><span>Cloud storage</span><span className="m">Publicly readable</span><span className="chip gap">Gap</span></div>
                  <div className="tr"><span>Plant network</span><span className="m">—</span><span className="chip na">Not assessed</span></div>
                </div>
              </>)}
              {v === 'risk' && (<>
                <div className="vh"><b>Risk &amp; resilience</b><span>Built only from evidence</span></div>
                <div className="g2">
                  <div className="pn"><div className="ph"><span>Resilience view</span><span className="chip der">Derived</span></div>
                    <div className="dl"><div><span>Identity</span><span className="chip gap">Weakest</span></div><div><span>Email</span><span className="chip ok">Strong</span></div><div><span>Recovery</span><span className="chip ok">Strong</span></div><div><span>Endpoint</span><span className="chip na">Not assessed</span></div></div></div>
                  <div className="pn prov"><div className="ph"><span>Risk model (FAIR)</span><span className="chip prov">Provisional</span></div><div className="bv na">—</div><div className="sb" style={{ color: '#D6B465' }}>Financial estimates appear once the model is calibrated with your organisation&apos;s data.</div></div>
                </div>
                <div className="ft">
                  <div className="tr th"><span>Priority</span><span className="m">Why</span><span></span></div>
                  <div className="tr"><span>1 · Payments API</span><span className="m">Exposed + MFA gap</span><span className="chip gap">High</span></div>
                  <div className="tr"><span>2 · Finance endpoints</span><span className="m">Detect-only</span><span className="chip gap">High</span></div>
                  <div className="tr"><span>3 · Cloud storage</span><span className="m">Publicly readable</span><span className="chip gap">Medium</span></div>
                </div>
              </>)}
              {v === 'evi' && (<>
                <div className="vh"><b>Evidence</b><span>Every insight has a source</span></div>
                <div className="ft" style={{ marginTop: 0 }}>
                  <div className="tr th"><span>Evidence item</span><span className="m">Source</span><span>Type</span></div>
                  <div className="tr"><span>User and MFA registration records</span><span className="m">Identity directory</span><span className="chip live">Live</span></div>
                  <div className="tr"><span>MFA coverage calculation</span><span className="m">Kaska EM</span><span className="chip der">Derived</span></div>
                  <div className="tr"><span>Risk estimate</span><span className="m">Risk model</span><span className="chip prov">Provisional</span></div>
                  <div className="tr"><span>Onboarding walkthrough data</span><span className="m">Kaska EM</span><span className="chip smp">Sample</span></div>
                  <div className="tr"><span>Endpoint prevention policy</span><span className="m">No connected source</span><span className="chip na">Not assessed</span></div>
                </div>
              </>)}
              {v === 'rep' && (<>
                <div className="vh"><b>Reporting</b><span>For leadership and the board</span></div>
                <div className="pn rep">
                  <div className="ph"><span>Board report · summary</span><span className="chip der">Derived</span></div>
                  <p className="hl">Identity is the priority this quarter. Two gaps are being remediated. Endpoint evidence is still missing.</p>
                  <div className="row"><span>Validated controls</span><span className="chip live">Live</span></div>
                  <div className="row"><span>Open gaps, ranked by priority</span><span className="chip der">Derived</span></div>
                  <div className="row"><span>Areas without evidence</span><span className="chip na">Shown</span></div>
                  <div className="row"><span>Regulatory mapping: RBI · SEBI CSCRF · CERT-In · DPDP · ISO 27001</span><span className="chip der">Mapped</span></div>
                </div>
              </>)}
            </div>
            <aside className={`edrawer${f !== null ? ' open' : ''}`} aria-label="Finding evidence" aria-hidden={f === null}>
              {f !== null && (<>
                <button className="x" onClick={() => setF(null)} aria-label="Close evidence">✕</button>
                <span className="dh">Finding · evidence trail</span>
                <b className="t">{FINDINGS[f].t}</b>
                <span className="val" style={FINDINGS[f].v === '—' ? { color: '#6B6A64' } : undefined}>{FINDINGS[f].v}</span>
                <div className="etrail">
                  {FINDINGS[f].trail.map(([k, a, b, c]) => (
                    <div className={`tn ${k}`} key={a}><i></i><div><b>{a}</b><small>{b}</small></div><span className={`chip ${CL[k]}`}>{c}</span></div>
                  ))}
                </div>
                <span className="chip smp" style={{ justifySelf: 'start' }}>Every step shows its source</span>
              </>)}
            </aside>
          </div>
        </div>
      </div>
      <div className="cnotes">{NOTES[v].map(([b, s]) => <div key={b}><b>{b}</b><span>{s}</span></div>)}</div>
      <p className="note" style={{ marginTop: 22 }}>Product interface shown with illustrative data. Select a view, or open a finding.</p>
    </div>
  )
}
