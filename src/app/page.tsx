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
  CAPABILITIES, CONDITIONS, ECOSYSTEM, FRAMEWORKS, INTEL_INPUTS, NEXT_STEPS, SECTORS, SOLUTIONS,
  STACK_IN, STACK_OUT, STACK_VERBS,
} from '@/components/k/content'

export const metadata: Metadata = {
  title: 'Kaska — Know what is actually protected',
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
              <span className="kicker">Kaska Exposure Management Platform&trade;</span>
              <h1 className="h1">Know what is <em>actually</em> protected.</h1>
            </div>
            <div className="hero-b">
              <p className="say">
                Kaska is the intelligence layer above your security stack. It connects what your tools
                already know into one picture of exposure, risk and resilience, so you can act on what
                matters before a breach, and show whether the risk has reduced.
              </p>
              <div className="ctas">
                <Link className="btn btn-go" href={demo('em')}>Request a Demo<Arrow /></Link>
                <Link className="btn btn-q" href="#intelligence-layer">See how it works</Link>
              </div>
              <div className="hero-id">
                <b>Kaska EM</b>
                <span>An Autonomous Cyber Risk &amp; Resilience Platform, above the security stack you already run.</span>
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
                  <path key={y} d={`M4 ${y} C 60 ${y}, 60 130, 112 130`} fill="none" stroke="#BDB9AC" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
                ))}
                <circle cx="112" cy="130" r="4" fill="#C9A44C" />
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

      {/* 4 · FROM SIGNAL TO INTELLIGENCE */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">From signal to intelligence</span>
              <h2 className="h2 mt-s">Intelligence is <em>the product</em>.</h2>
            </div>
            <p className="lede">
              One connected intelligence foundation. Kaska connects separate facts around the asset they
              belong to, so they become one picture of cyber risk rather than another list of findings.
            </p>
          </div>
          <div className="cols4 mt-m">
            {INTEL_INPUTS.map((x) => <div key={x.t}><b>{x.t}</b><p>{x.d}</p></div>)}
          </div>
          <div className="flow-down" aria-hidden="true">Connected around the asset</div>
          <div className="arch" style={{ marginTop: 0 }} aria-label="Kaska intelligence">
            <div className="lyr core">
              <div className="ln">Kaska intelligence<b>One connected intelligence foundation</b></div>
              <div className="lv">{STACK_VERBS.map((v) => <span key={v}>{v}</span>)}</div>
            </div>
          </div>
          <p className="note mt-s">Out of it: one picture of exposure, risk and resilience, for the CISO, the security team, the board and the regulator.</p>
        </div>
      </section>

      {/* 5 · BEFORE A BREACH — PREDICT & PREVENT */}
      <section className="s-deep sec" id="before-a-breach">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Before a breach · Predict &amp; Prevent</span>
              <h2 className="h2 mt-s">What could <em>happen next?</em></h2>
            </div>
            <p className="lede">
              Kaska connects individual signals into the conditions that make an exposure matter. One finding
              rarely tells the story; the combination does. Kaska helps you find it, understand its business
              significance and act before it is exploited.
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
            <svg viewBox="0 0 520 24" aria-hidden="true"><path d="M516 4 V14 H8" fill="none" stroke="#C9A44C" strokeWidth="1.2" /><path d="M14 8 L8 14 L14 20" fill="none" stroke="#C9A44C" strokeWidth="1.2" /></svg>
            <span>Illustrative example. Threat-informed prioritisation of connected conditions, not a guarantee of what will happen.</span>
          </div>
        </div>
      </section>

      {/* 6 · HOW KASKA KNOWS — CONTROL VALIDATION */}
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
          <div className="mt-m"><ConfiguredInspector /></div>
        </div>
      </section>

      {/* 7 · HOW KASKA KNOWS — EVIDENCE & PROVENANCE */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="ev-grid">
            <div>
              <span className="kicker">How Kaska knows · Evidence &amp; provenance</span>
              <h2 className="h2 mt-s">Trust the intelligence. <em>See where it came from.</em></h2>
              <p className="lede mt-s">
                Every figure in Kaska carries its source and its state, so you always know whether you are
                looking at a measurement, a calculation or an estimate.
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
          <div className="unm mt-l">
            <p className="l">Unmeasured is <em>not</em> passing.</p>
            <div className="pair">
              <div><b className="d">03</b><span>Outcomes for every control<small>Validated, gap, or not assessed. Never a silent green.</small></span></div>
              <div><b>01</b><span>Evidence trail behind every verdict<small>Each result shows where it came from.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 · PRIORITISE & ACT */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Prioritise &amp; act</span>
              <h2 className="h2 mt-s">What matters most, <em>and what to do about it</em>.</h2>
            </div>
            <p className="lede">
              Not another long list of findings. Exposure, attack paths where supported, asset criticality
              and business context bring the few risks that matter to the top. Each becomes a case and an
              action, and Kaska re-validates to confirm the exposure actually reduced.
            </p>
          </div>
          <div className="mt-m"><JourneyTable /></div>
        </div>
      </section>

      {/* 9 · BREACH INTELLIGENCE — BEFORE, DURING & AFTER */}
      <section className="s-deep sec" id="breach-intelligence">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Breach Intelligence</span>
              <h2 className="h2 mt-s">Three doors. <em>One intelligence loop.</em></h2>
            </div>
            <p className="lede">
              Before a breach, Kaska helps predict and prevent. During one, it brings context to your existing
              detection. After, it carries what was learned back into the same model.
            </p>
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

      {/* 10 · PROOF — THE PRODUCT */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Proof · The product</span>
              <h2 className="h2 mt-s">Every answer opens to its <em>evidence</em>.</h2>
            </div>
            <p className="lede">
              Exposure, risk, control validation, evidence and reporting: five views of one model. Open any
              finding to see where each part of it came from.
            </p>
          </div>
          <div className="mt-m"><ProductConsole initialView="exp" /></div>
        </div>
      </section>

      {/* 10b · TECHNOLOGY ECOSYSTEM — how Kaska gets the intelligence */}
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
              <path key={x} d={`M${x} 0 C ${x} 40, 500 24, 500 64`} fill="none" stroke="#C9A44C" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
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

      {/* 11 · CAPABILITIES & COMPLIANCE */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Capabilities &amp; compliance</span>
              <h2 className="h2 mt-s">One intelligence foundation. <em>Ten capabilities.</em></h2>
            </div>
            <p className="lede">
              Each capability is designed to stand on its own, and to become stronger because it shares one
              asset foundation, one analytics core and one evidence trail with the rest.
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
          <p className="note mt-s">Capability availability is confirmed for your environment during evaluation.</p>
          <div className="mt-l">
            <div className="xlabel"><span>Compliance, as an output of the same evidence</span><i /></div>
            <p className="body mt-s">
              Control evidence is mapped to the frameworks you report against. Requirements without evidence
              are reported as not assessed, never counted as met.
            </p>
            <p className="h3 mt-s">{FRAMEWORKS.join(' · ')}</p>
            <p className="note mt-s">Framework names indicate the regulatory context Kaska maps to. They do not imply certification or regulatory approval.</p>
          </div>
          <Link className="more mt-m" href="/features">Explore the capabilities</Link>
        </div>
      </section>

      {/* 12 · BREADTH & TRUST — INDUSTRIES */}
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
                <b><Link href={`/industries#${s.id}`}>{s.t}</Link></b>
                <p>{s.d}</p>
                <span>{s.ctx}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 · BREADTH & TRUST — EMAIL SECURITY */}
      <section className="s-dark sec">
        <div className="wrap split even">
          <div>
            <span className="kicker">Kaska Email Security</span>
            <h2 className="h2 mt-s">API-first email security. <em>No MX change.</em></h2>
            <p className="lede mt-s">
              A separate Kaska product: AI-powered email threat detection and response for Microsoft 365 and
              Google Workspace, working after delivery against phishing, business email compromise and
              impersonation.
            </p>
            <div className="ctas mt-m">
              <Link className="btn btn-go" href="/email-security">Explore Email Security<Arrow /></Link>
              <Link className="btn btn-q" href={demo('email-security')}>Request a Demo</Link>
            </div>
          </div>
          <div className="mail" aria-label="Illustrative business email compromise example">
            <div className="mail-h">
              <div><b>From</b>Accounts · Meridian Supplies &lt;accounts@meridian-supp1ies.com&gt;</div>
              <div><b>Subject</b>RE: Invoice MS-4471 — updated bank details</div>
            </div>
            <div className="mail-b">Hi, please note our bank account has changed. Kindly process invoice MS-4471 to the new account below before Friday&apos;s payment run.</div>
            <div className="mail-s">
              <span className="h">Signals behind the verdict</span>
              <div className="sg"><i className="w" />Lookalike sender domain</div>
              <div className="sg"><i className="w" />Bank-account change request</div>
              <div className="sg"><i />Reply inside an existing invoice thread</div>
              <div className="vd"><span>Likely BEC · high risk</span><span>Evidence retained</span></div>
            </div>
          </div>
        </div>
        <p className="wrap note mt-s">Illustrative example · fictional organisation and message.</p>
      </section>

      {/* 12 · BREADTH & TRUST — TECHNOLOGY SOLUTIONS (compact) */}
      <section className="s-white sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">Technology Solutions</span>
            <h2 className="h3 mt-s">Security programmes, delivered around your environment.</h2>
            <p className="body mt-s">
              Alongside its products, Kaska designs, implements and supports the security technologies
              organisations depend on: vendor-agnostic, and selected for each environment.
            </p>
            <Link className="more mt-s" href="/technology-solutions">Explore Technology Solutions</Link>
          </div>
          <p className="body" style={{ fontFamily: 'var(--display)', fontSize: 19, lineHeight: 1.7, color: '#3D3C37' }}>
            {SOLUTIONS.join(' · ')}
          </p>
        </div>
      </section>

      {/* 12 · BREADTH & TRUST — COMPANY */}
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
          <Link className="more mt-m" href="/company">About Kaska</Link>
        </div>
      </section>

      {/* 13 · CLOSE */}
      <Close
        title={<>Know what is <em>actually</em> protected.</>}
        text="A focused walkthrough of your exposure, the risks that matter most, and the evidence behind every answer."
      />
    </>
  )
}
