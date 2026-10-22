import type { Metadata } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'
import KaskaGate from '@/components/k/KaskaGate'
import ConfiguredInspector from '@/components/k/ConfiguredInspector'
import BreachLoop from '@/components/k/BreachLoop'
import JourneyTable from '@/components/k/JourneyTable'
import ProductConsole from '@/components/k/ProductConsole'
import { Arrow, Close, StackDiagram, demo } from '@/components/k/ui'
import {
  CAPABILITIES, CONDITIONS, ECOSYSTEM, FRAMEWORKS, NEXT_STEPS, SECTORS, SOLUTIONS,
  STACK_IN, STACK_OUT, STACK_VERBS,
} from '@/components/k/content'

export const metadata: Metadata = {
  title: { absolute: 'Kaska Exposure Management (Kaska EM)' },
  alternates: { canonical: '/' },
  description:
    'Kaska is the intelligence layer above your security stack. Kaska Exposure Management Platform™ connects what your tools already know into one picture of exposure, risk and resilience, so you can prioritise, act before a breach and show whether risk has reduced.',
}

const TOOLS: [string, string][] = [
  ['SIEM / XDR', 'alerts'],
  ['Endpoint (EDR)', 'agent health'],
  ['Identity & PAM', 'users & roles'],
  ['Vulnerability scanner', 'CVE list'],
  ['Cloud posture', 'misconfigurations'],
  ['GRC', 'spreadsheets'],
]

const QUESTIONS = [
  'How exposed are we, really?',
  'What could an attacker do next?',
  'Which weaknesses actually matter?',
  'Are our controls protecting what matters?',
  'What should we fix first?',
  'Has the risk actually reduced?',
]

export default function Page() {
  return (
    <>
      {/* 1 · HERO — THE OUTCOME */}
      <section className="s-dark">
        <div className="wrap">
          <div className="hero-a">
            <div>
              <span className="kicker">Built from the ashes of real-world breaches</span>
              <h1 className="h1">Know your risk before attackers do. Own your resilience, <em>with evidence</em>.</h1>
            </div>
            <div className="hero-b">
              <p className="say">
                One evidenced picture of your risk: what is exposed, which controls hold, and where you stand
                before, during and after a breach. Response actions follow your policy, with named approval
                and a record of every step.
              </p>
              <div className="ctas">
                <Link className="btn btn-go" href={demo('em')}>Request a briefing<Arrow /></Link>
                <Link className="btn btn-q" href="#intelligence-layer">See how it works</Link>
              </div>
              <div className="hero-id">
                <b>Kaska Exposure Management Platform™</b>
                <span>Above the security stack you already run.</span>
                <i>AI at the Core. Resilience at the Edge.</i>
              </div>
            </div>
          </div>
          <KaskaGate />
        </div>
      </section>

      {/* 2 · THE FRAGMENTED SECURITY STACK */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">The fragmented security stack</span>
              <h2 className="h2 mt-s">Many excellent tools. <em>No connected answer.</em></h2>
            </div>
            <p className="lede">
              SIEM and XDR, endpoint, identity and privileged access, cloud, vulnerability, network, email,
              data and GRC each do their job well. The problem is not the tools. It is that their
              intelligence stays in separate places.
            </p>
          </div>
          <div className="frag">
            <div className="col">
              <span className="lbl">Today</span>
              <h3>Each tool reports on itself.</h3>
              <div className="tools">
                {TOOLS.map(([t, s]) => <div key={t}>{t}<span>{s}</span></div>)}
              </div>
            </div>
            <div className="mid" aria-hidden="true">
              <svg viewBox="0 0 120 260" preserveAspectRatio="none">
                {[30, 70, 110, 150, 190, 230].map((y) => (
                  <path key={y} d={`M4 ${y} C 60 ${y}, 60 130, 112 130`} fill="none" stroke="var(--ln2)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
                ))}
                <circle cx="112" cy="130" r="4" fill="var(--gold)" />
              </svg>
            </div>
            <div className="col">
              <span className="lbl">With Kaska</span>
              <h3>One connected security picture.</h3>
              <div className="conn">
                <span className="lbl">Connected context</span>
                <div className="ch"><span>Asset</span><span>Exposure</span><span>Control</span><span>Risk</span><span>Action</span></div>
                <p>
                  Signals from the tools you already run are connected to the asset they affect, so a gap
                  reads as a business risk with an owner, not as one more alert.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-l">
            <div className="xlabel"><span>The questions no single tool answers</span><i /></div>
            <div className="cols3 mt-s">
              {QUESTIONS.map((q) => <div key={q}><b>{q}</b></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 3 · KASKA — THE INTELLIGENCE LAYER */}
      <section className="s-warm sec" id="intelligence-layer">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Kaska — the intelligence layer</span>
              <h2 className="h2 mt-s">Above the stack. <em>Not instead of it.</em></h2>
            </div>
            <p className="lede">
              Kaska doesn&apos;t replace your security investments. It connects what they already know into
              one decision model, for the people accountable for security.
            </p>
          </div>
          <StackDiagram
            inputs={STACK_IN}
            verbs={STACK_VERBS}
            outputs={STACK_OUT}
            title={['The intelligence', 'layer']}
            inLabel="Your existing security stack"
            outLabel="One connected picture for"
          />
          <Link className="more mt-m" href="/integrations">How Kaska connects</Link>
        </div>
      </section>

      {/* 3b · DUAL-PATH DATA INGESTION */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Dual-path data ingestion</span>
              <h2 className="h2 mt-s">Two kinds of data. <em>Only one comes from your SIEM.</em></h2>
            </div>
            <p className="lede">
              Your SIEM and XDR already do the hard work of turning events into incidents. Kaska takes
              that result and does not repeat it. But an incident tells you what happened — it cannot
              tell you whether the control that should have stopped it was actually enforced. That answer
              sits inside each security tool, and the only way to get it is to ask the tool directly.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Event data</b><p>Already-correlated incidents and events, taken from SIEM and XDR platforms. Kaska does not re-do the correlation your SIEM has already performed.</p></div>
            <div><b>Control and OEM intelligence</b><p>Control validation, misconfigurations, vulnerabilities, findings, alerts and posture, read through direct connections to the tools you already run.</p></div>
            <div><b>Alongside both</b><p>External attack surface and OSINT, public vulnerability and exploit intelligence (NVD, CISA KEV, EPSS), asset and software bill-of-materials intelligence, and the probabilistic engine.</p></div>
          </div>
          <p className="lede mt-m">Both are required. Only one is available from an aggregator. That is why Kaska connects to your security tools as well as to your SIEM.</p>
        </div>
      </section>

      {/* 3c · ONE FOUNDATION — MODULE GROUPS (merges "From signal to intelligence" and the old capabilities list) */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">One intelligence foundation</span>
              <h2 className="h2 mt-s">One foundation. <em>Every lens connected.</em></h2>
            </div>
            <p className="lede">
              Assets, identities, exposures, controls, threats and evidence are connected around the asset they
              belong to. Each module group reads and writes that one record, so a finding in one lens is
              context in every other.
            </p>
          </div>
          <div className="capx">
            {CAPABILITIES.map((c, i) => (
              <div className="cap" key={c.t}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <span className="stg">{c.layer}</span>
              </div>
            ))}
          </div>
          <p className="note mt-s">Module availability is confirmed for your environment during evaluation.</p>
          <Link className="more mt-m" href="/features">Explore the capabilities</Link>
        </div>
      </section>

      {/* 4 · THREE VIEWS, ONE RISK POSITION */}
      <section className="s-white sec" id="three-views">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Risk Command Center</span>
              <h2 className="h2 mt-s">Three views, <em>one risk position</em>.</h2>
            </div>
            <p className="lede">
              Executive, CISO and Operations views read the same model. The risk position is described against
              your stated appetite, and organised before, during and after a breach.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Executive</b><p>Where you stand against appetite, in plain language, and what is changing.</p></div>
            <div><b>CISO</b><p>Control gaps, top fixes and owners, with the evidence behind each.</p></div>
            <div><b>Operations</b><p>The work queue: findings, cases and approvals waiting on a person.</p></div>
          </div>
        </div>
      </section>

      {/* 5 · FIX ONCE, CLOSE MANY (merges "Prioritise & act") */}
      <section className="s-dark sec" id="fix-once">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Exposure Register · Top fixes</span>
              <h2 className="h2 mt-s">Fix once, <em>close many</em>.</h2>
            </div>
            <p className="lede">
              The Exposure Register tracks every finding from first seen to closed. Top fixes show the one change
              that closes the most findings, and Kaska re-validates to confirm it held.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>First seen to closed</b><p>Every finding keeps its history, owner and current state.</p></div>
            <div><b>Stale or unowned, flagged</b><p>Items with no owner or no movement are surfaced, not buried.</p></div>
            <div><b>Tickets in sync</b><p>Work syncs to ServiceNow, so the fix happens where your teams already work.</p></div>
          </div>
          <div className="mt-m"><JourneyTable /></div>
        </div>
      </section>

      {/* 6 · ATTACK PATHS + TESTED, NOT ASSUMED (merges the old Before a breach section) */}
      <section className="s-deep sec" id="before-a-breach">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Attack paths · Before a breach</span>
              <h2 className="h2 mt-s">Every attack-path link <em>shows its evidence</em>.</h2>
            </div>
            <p className="lede">
              One finding rarely tells the story; the combination does. Each step on a path is marked confirmed,
              partly evidenced or unconfirmed, and identity and federation trust paths are included.
            </p>
          </div>
          <div className="cond" aria-label="Example of connected conditions">
            {CONDITIONS.map((c, i) => (
              <Fragment key={c.t}>
                {i > 0 && <i aria-hidden="true">+</i>}
                <div><small>{c.t}</small><b>{c.e}</b></div>
              </Fragment>
            ))}
          </div>
          <div className="flow-down" aria-hidden="true">Connected risk</div>
          <div className="spine s4">
            {NEXT_STEPS.map((s, i) => (
              <div key={s.t} className={`st ${s.cls ?? ''}`}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <b>{s.t}</b>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="spine-back">
            <svg viewBox="0 0 520 24" aria-hidden="true"><path d="M516 4 V14 H8" fill="none" stroke="var(--gold)" strokeWidth="1.2" /><path d="M14 8 L8 14 L14 20" fill="none" stroke="var(--gold)" strokeWidth="1.2" /></svg>
            <span>Illustrative example. Threat-informed prioritisation of connected conditions, not a guarantee of what will happen.</span>
          </div>
          <div className="split mt-l">
            <div>
              <span className="kicker">Simulation · MITRE ATT&amp;CK</span>
              <h3 className="h3 mt-s">Tested, <em>not assumed</em>.</h3>
            </div>
            <p className="lede">
              Simulation runs only on a two-person-approved request. Results import from Picus, SafeBreach and
              AttackIQ. MITRE coverage shows each technique as detected, tested or estimated, with analyst
              confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* 7 · CONTROL VALIDATION — UNMEASURED IS NEVER PASSING */}
      <section className="s-warm sec" id="configured">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">How Kaska knows · One of Kaska&apos;s intelligence lenses</span>
              <h2 className="h2 mt-s">Configured doesn&apos;t mean <em>protected</em>.</h2>
            </div>
            <p className="lede">
              Kaska doesn&apos;t assume a control is protecting you because a console says it is configured.
              It measures each control against the outcome it should deliver, Configured → Validated →
              Effective, and feeds that into exposure, risk, priorities, action and verification.
            </p>
          </div>
          <div className="unm mt-m">
            <p className="l">Unmeasured is <em>never</em> passing.</p>
            <div className="pair">
              <div><b className="d">31</b><span>Control domains<small>Scoped by environment, with a Partial status where a control only partly holds.</small></span></div>
              <div><b>1,066</b><span>Versioned checks in the library<small>No data reads Not assessed, never green.</small></span></div>
            </div>
          </div>
          <div className="mt-m"><ConfiguredInspector /></div>
        </div>
      </section>

      {/* 8 · EVIDENCE & PROVENANCE */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="ev-grid">
            <div>
              <span className="kicker">How Kaska knows · Evidence &amp; provenance</span>
              <h2 className="h2 mt-s">Every answer opens to <em>its evidence</em>.</h2>
              <p className="lede mt-s">
                Every figure in Kaska carries its source and its state, so you always know whether you are
                looking at a measurement, a calculation or an estimate. Every case event, including approvals and
                actions, is recorded in a tamper-evident hash chain.
              </p>
              <div className="legend5">
                <div><b>LIVE</b><span>Read directly from your systems.</span></div>
                <div><b>DERIVED</b><span>Calculated by Kaska from measured data.</span></div>
                <div><b>PROVISIONAL</b><span>An estimate awaiting calibration with your data.</span></div>
                <div><b>SAMPLE</b><span>Illustrative data, always labelled as such.</span></div>
                <div><b>NOT ASSESSED</b><span>No evidence yet, and never shown as a pass.</span></div>
              </div>
            </div>
            <div className="trail-card" aria-label="Example evidence trail">
              <div className="tc-h">
                <span>Finding · Identity</span>
                <b>Workforce MFA coverage below policy</b>
                <div className="val">50%<small>of users registered for MFA</small></div>
              </div>
              <div className="nodes">
                <div className="node l"><span className="dot" /><div><b>User and MFA records</b><span className="sm">Identity directory</span></div><span className="chip live">Live</span></div>
                <div className="node d"><span className="dot" /><div><b>Coverage calculation</b><span className="sm">Kaska EM</span></div><span className="chip der">Derived</span></div>
                <div className="node p"><span className="dot" /><div><b>Risk estimate</b><span className="sm">Risk model, before calibration</span></div><span className="chip prov">Provisional</span></div>
                <div className="node s"><span className="dot" /><div><b>Walkthrough example</b><span className="sm">This page</span></div><span className="chip smp">Sample</span></div>
                <div className="node n"><span className="dot" /><div><b>Legacy authentication</b><span className="sm">No connected source</span></div><span className="chip na">Not assessed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 · RISK QUANTIFICATION — LOSS RANGES */}
      <section className="s-deep sec" id="risk-quantification">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Risk quantification</span>
              <h2 className="h2 mt-s">Loss ranges, <em>not a single number</em>.</h2>
            </div>
            <p className="lede">
              Loss ranges by Monte Carlo, from sourced defaults calibrated to your data. Shown at portfolio level,
              not per control or framework, with the calibration state beside every range.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>FAIR-based method</b><p>The method is visible, so a range can be argued in a budget meeting and defended in an audit.</p></div>
            <div><b>Driven by validated controls</b><p>Control state comes from validation, not a questionnaire.</p></div>
            <div><b>Provisional until calibrated</b><p>Before your data is applied, every range is labelled provisional.</p></div>
          </div>
        </div>
      </section>

      {/* 10 · REGULATOR-READY, NOT CERTIFIED */}
      <section className="s-warm sec" id="compliance">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Compliance</span>
              <h2 className="h2 mt-s">Regulator-ready, <em>not certified</em>.</h2>
            </div>
            <p className="lede">
              17 frameworks, each requirement rated Met, Partly met, Not met or Not assessed, with its evidence
              date and owner. DPDP is assessed system by system, with attestation.
            </p>
          </div>
          <p className="h3 mt-m">{FRAMEWORKS.map((f) => f.replace(/ /g, ' ')).join(' · ')}</p>
          <p className="note mt-s">Kaska maps your evidence to these frameworks. This is not a certification or regulatory approval; PCI-DSS and HIPAA are mapped, not certified.</p>
        </div>
      </section>

      {/* 11 · EXTERNAL SURFACE */}
      <section className="s-white sec" id="external-surface">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">External attack surface</span>
              <h2 className="h2 mt-s">Your external surface, <em>once ownership is proven</em>.</h2>
            </div>
            <p className="lede">
              Discovery runs only after DNS ownership proof. Then Kaska checks what an outsider can see and
              reach.
            </p>
          </div>
          <div className="cols4 mt-m">
            <div><b>Takeover</b><p>Dangling records that could be claimed.</p></div>
            <div><b>Delegation</b><p>Name-server and delegation weaknesses.</p></div>
            <div><b>Lookalike domains</b><p>Domains imitating yours.</p></div>
            <div><b>Open ports</b><p>Safe, non-intrusive port checks.</p></div>
          </div>
        </div>
      </section>

      {/* 12 · WIDER REGISTERS */}
      <section className="s-dark sec" id="registers">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Registers</span>
              <h2 className="h2 mt-s">Wider registers, <em>one record</em>.</h2>
            </div>
            <p className="lede">The same asset model carries the registers your regulators and auditors ask for.</p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Vendors, AI applications, data stores</b><p>Vendor risk, the AI applications in use and where sensitive data sits.</p></div>
            <div><b>Zero Trust targets</b><p>Target states per pillar, measured against current posture.</p></div>
            <div><b>NIST CSF, including Govern</b><p>Recovery exercises and lessons learned recorded against the framework.</p></div>
          </div>
        </div>
      </section>

      {/* 13 · CLOSE INCIDENTS PROPERLY — THE BREACH LOOP */}
      <section className="s-deep sec" id="breach-intelligence">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Before · During · After a breach</span>
              <h2 className="h2 mt-s">Close incidents <em>properly</em>.</h2>
            </div>
            <p className="lede">
              An incident closes only when closure checks pass. Threat hunting runs real queries against your
              tools, and Intelligence Search finds the record behind any answer across 7 record types.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Closure checks</b><p>Containment, evidence and control revalidation confirmed before close.</p></div>
            <div><b>Threat hunting</b><p>Hunts run real queries, and results attach to the case.</p></div>
            <div><b>Intelligence Search</b><p>One search across 7 record types, with provenance.</p></div>
          </div>
          <BreachLoop initial={1} />
          <div className="bl-foot">
            <div><b>Before informs during</b>The exposure and control context is already there when a signal arrives.</div>
            <div><b>During informs after</b>Every response action is recorded as evidence for recovery and reporting.</div>
            <div><b>After informs before</b>The same class of attack should not succeed twice: every incident informs reassessment.</div>
            <div><b>Governed throughout</b>Actions follow policy, with human approval where it matters.</div>
          </div>
        </div>
      </section>

      {/* 14 · PRODUCT PROOF CONSOLE */}
      <section className="s-deep sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Proof · The product</span>
              <h2 className="h2 mt-s">Five views. <em>One model.</em></h2>
            </div>
            <p className="lede">
              Exposure, risk, control validation, evidence and reporting: five views of one model. Open any
              finding to see where each part of it came from. Every case event, including approvals
              and actions, is recorded in a tamper-evident hash chain, so the record of what was done can be
              checked rather than taken on trust.
            </p>
          </div>
          <div className="mt-m"><ProductConsole initialView="exp" /></div>
        </div>
      </section>

      {/* 15 · INTEGRATIONS */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Integrations</span>
              <h2 className="h2 mt-s">Connect the security stack <em>you already have</em>.</h2>
            </div>
            <p className="lede">
              Your security stack already knows a lot. Kaska brings signals from the technologies already
              deployed across your environment into one connected view of exposure, risk and resilience,
              instead of adding another isolated console.
            </p>
          </div>
          <div className="cols4 mt-m">
            {ECOSYSTEM.map(([cat, vendors]) => (
              <div key={cat}>
                <span className="n">{cat.toUpperCase()}</span>
                <div className="eco-v">{vendors.map((v) => <span key={v}>{v}</span>)}</div>
              </div>
            ))}
          </div>
          <svg className="eco-feed" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
            {[125, 375, 625, 875].map((x) => (
              <path key={x} d={`M${x} 0 C ${x} 40, 500 24, 500 64`} fill="none" stroke="var(--gold)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
          <div className="eco-bar">
            <b>KASKA INTELLIGENCE</b>
            <span>One connected view of exposure, risk and resilience</span>
          </div>
          <p className="note mt-s">Representative vendors with Kaska connectors. Connector availability and validation vary by environment, and are confirmed during evaluation.</p>
          <Link className="more mt-m" href="/integrations">Explore integrations</Link>
        </div>
      </section>

      {/* 16 · START WITH AN EXPOSURE ASSESSMENT */}
      <section className="s-dark sec" id="exposure-assessment">
        <div className="wrap split top">
          <div>
            <span className="kicker">Exposure Assessment</span>
            <h2 className="h2 mt-s">Start with an <em>Exposure Assessment</em>.</h2>
          </div>
          <div>
            <p className="lede">
              A paid, fixed-scope assessment of your exposure, control gaps and top fixes, delivered by Kaska or
              a partner MSSP.
            </p>
            <div className="ctas mt-m">
              <Link className="btn btn-go" href={demo('em')}>Request a briefing<Arrow /></Link>
              <Link className="btn btn-q" href="https://kaskatech.com/managed-services#exposure-assessment">About the assessment</Link>
            </div>
            <p className="note mt-m">Managed Services alongside: {SOLUTIONS.join(' · ')}.</p>
          </div>
        </div>
      </section>

      {/* 17 · INDUSTRIES (BFSI first) */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Industries</span>
              <h2 className="h2 mt-s">Built for <em>regulated</em> environments.</h2>
            </div>
            <p className="lede">For organisations that answer to regulators and boards for their security, not just to auditors.</p>
          </div>
          <div className="elist mt-m">
            {SECTORS.map((s) => (
              <div key={s.id}>
                <b><Link href={`https://kaskatech.com/industries#${s.id}`}>{s.t}</Link></b>
                <p>{s.d}</p>
                <span>{s.ctx}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18 · COMPANY */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Company</span>
              <h2 className="h2 mt-s">Built in India, to prove security <em>works</em>.</h2>
            </div>
            <p className="lede">
              Kaska Technologies &amp; Services Pvt Ltd builds cybersecurity products for organisations that
              need evidence, not assurances.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>Prove it, don&apos;t assume it</b><p>Verdicts carry their evidence. Protection you can show, not take on faith.</p></div>
            <div><b>Honest about gaps</b><p>Where a control can&apos;t be verified, we say so. An honest gap is worth more than a false green.</p></div>
            <div><b>Nothing ripped out</b><p>Vendor-agnostic by principle. Kaska works alongside the stack you already run.</p></div>
          </div>
          <Link className="more mt-m" href="https://kaskatech.com/company">About Kaska</Link>
        </div>
      </section>

      {/* 19 · CLOSE */}
      <Close
        title={<>Know what is <em>actually</em> protected.</>}
        text="A focused walkthrough of your exposure, the risks that matter most, and the evidence behind every answer."
      />
    </>
  )
}
