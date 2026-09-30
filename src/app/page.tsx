import type { Metadata } from 'next'
import Link from 'next/link'
import KaskaGate from '@/components/k/KaskaGate'
import ConfiguredInspector from '@/components/k/ConfiguredInspector'
import BreachLoop from '@/components/k/BreachLoop'
import JourneyTable from '@/components/k/JourneyTable'
import ProductConsole from '@/components/k/ProductConsole'
import { Arrow, Close, StackDiagram, demo } from '@/components/k/ui'
import { ARCH, CAPABILITIES, FRAMEWORKS, SECTORS, SOLUTIONS, SPINE } from '@/components/k/content'

export const metadata: Metadata = {
  title: 'Kaska — Know what is actually protected',
  description:
    'Kaska Exposure Management Platform™ connects assets, exposure, control validation, risk, response and evidence, so organisations can see which controls are effective, what to fix first, and prove it.',
}

const TOOLS: [string, string][] = [
  ['Endpoint protection', 'agent health'],
  ['Vulnerability scanner', 'CVE list'],
  ['Identity directory', 'users & roles'],
  ['SIEM', 'alerts'],
  ['Cloud posture', 'misconfigurations'],
  ['GRC', 'spreadsheets'],
]

export default function Page() {
  return (
    <>
      {/* 1 · HERO + KASKA GATE */}
      <section className="s-dark">
        <div className="wrap">
          <div className="hero-a">
            <div>
              <span className="kicker">Kaska Exposure Management Platform&trade;</span>
              <h1 className="h1">Know what is <em>actually</em> protected.</h1>
            </div>
            <div className="hero-b">
              <p className="say">
                Your tools report that controls are configured. Kaska helps you see which are effective,
                where the gaps are and what to fix first, with the evidence behind every answer.
              </p>
              <div className="ctas">
                <Link className="btn btn-go" href={demo('em')}>Request a Demo<Arrow /></Link>
                <Link className="btn btn-q" href="#breach-intelligence">See how it works</Link>
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

      {/* 2 · CONFIGURED ≠ PROTECTED */}
      <section className="s-warm sec" id="configured">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Configured → Validated → Effective</span>
              <h2 className="h2 mt-s">Configured doesn&apos;t mean <em>protected</em>.</h2>
            </div>
            <p className="lede">
              A console can report every agent deployed and every policy assigned while the control
              underneath is failing. Kaska measures each control against the outcome it is meant to
              deliver.
            </p>
          </div>
          <div className="mt-m"><ConfiguredInspector /></div>
          <div className="unm mt-l">
            <p className="l">Unmeasured is <em>not</em> passing.</p>
            <div className="pair">
              <div><b className="d">03</b><span>Outcomes for every control<small>Validated, gap, or not assessed. Never a silent green.</small></span></div>
              <div><b>01</b><span>Evidence trail behind every verdict<small>Each result shows where it came from.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · THE PROBLEM */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">The problem</span>
              <h2 className="h2 mt-s">Tools create data. Organisations need <em>connected understanding</em>.</h2>
            </div>
            <p className="lede">
              Every security tool answers its own question well. None of them answers the one leadership
              asks: which of our important assets are exposed, and is anything actually stopping an attack?
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
        </div>
      </section>

      {/* 4 · CYBER RISK & RESILIENCE MODEL */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">The Cyber Risk &amp; Resilience model</span>
              <h2 className="h2 mt-s">From asset to <em>resilience</em>, in one model.</h2>
            </div>
            <p className="lede">
              Every risk follows the same path, so every figure traces back to a specific asset, a specific
              control and the action taken on it.
            </p>
          </div>
          <div className="spine">
            {SPINE.map((s, i) => (
              <div key={s.t} className={`st ${s.cls ?? ''}`}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <b>{s.t}</b>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="spine-back">
            <svg viewBox="0 0 520 24" aria-hidden="true"><path d="M516 4 V14 H8" fill="none" stroke="#C9A44C" strokeWidth="1.2" /><path d="M14 8 L8 14 L14 20" fill="none" stroke="#C9A44C" strokeWidth="1.2" /></svg>
            <span>Resilience feeds the next assessment. It is a loop, not a report.</span>
          </div>
        </div>
      </section>

      {/* 5 · BREACH INTELLIGENCE */}
      <section className="s-deep sec" id="breach-intelligence">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Breach Intelligence</span>
              <h2 className="h2 mt-s">Three doors. <em>One intelligence loop.</em></h2>
            </div>
            <p className="lede">
              Before, during and after a breach, Kaska works from the same assets, the same exposure and
              the same control evidence, so what one team learns is never lost to the next.
            </p>
          </div>
          <BreachLoop />
          <div className="bl-foot">
            <div><b>Before informs during</b>The exposure and control context is already there when a signal arrives.</div>
            <div><b>During informs after</b>Every response action is recorded as evidence for recovery and reporting.</div>
            <div><b>After informs before</b>Every incident informs reassessment; every gap becomes a validation target.</div>
            <div><b>Governed throughout</b>Actions follow policy, with human approval where it matters.</div>
          </div>
        </div>
      </section>

      {/* 6 · EVIDENCE / PROVENANCE */}
      <section className="s-warm sec">
        <div className="wrap ev-grid">
          <div>
            <span className="kicker">Evidence &amp; provenance</span>
            <h2 className="h2 mt-s">No claim without <em>evidence</em>.</h2>
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
      </section>

      {/* 7 · JOURNEY */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">How it works</span>
              <h2 className="h2 mt-s">Discover to report, in <em>one view</em>.</h2>
            </div>
            <p className="lede">
              Watch one product view build itself: assets gain context, controls are validated, and at
              Prioritise the few risks that matter rise to the top.
            </p>
          </div>
          <div className="mt-m"><JourneyTable /></div>
        </div>
      </section>

      {/* 8 · CAPABILITY MODEL */}
      <section className="s-deep sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Capability model</span>
              <h2 className="h2 mt-s">Ten capabilities. <em>One platform.</em></h2>
            </div>
            <p className="lede">
              Each capability is designed to stand on its own, and to become stronger because it shares one
              asset foundation, one analytics core and one evidence trail with the rest.
            </p>
          </div>
          <div className="arch" aria-label="Kaska architecture, top to bottom">
            {ARCH.map((l) => (
              <div key={l.t} className={`lyr ${l.k}`}>
                <div className="ln">{l.n}<b>{l.t}</b></div>
                <div className="lv">{l.v.map((v) => <span key={v}>{v}</span>)}</div>
              </div>
            ))}
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
          <Link className="more mt-m" href="/features">Explore the capabilities</Link>
        </div>
      </section>

      {/* 9 · PRODUCT CONSOLE */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">The product</span>
              <h2 className="h2 mt-s">Every answer opens to its <em>evidence</em>.</h2>
            </div>
            <p className="lede">
              Five views of one model. Open any finding to see where each part of it came from.
            </p>
          </div>
          <div className="mt-m"><ProductConsole /></div>
        </div>
      </section>

      {/* 10 · ABOVE THE STACK */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Above the stack</span>
              <h2 className="h2 mt-s">Works with what you <em>already run</em>.</h2>
            </div>
            <p className="lede">
              Kaska doesn&apos;t replace your security tools. It sits above them, reading their signals,
              checking their controls and connecting it all around the asset.
            </p>
          </div>
          <StackDiagram />
          <Link className="more mt-m" href="/integrations">How Kaska connects</Link>
        </div>
      </section>

      {/* 11 · COMPLIANCE & CONTROL VALIDATION */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Compliance &amp; control validation</span>
              <h2 className="h2 mt-s">Evidence mapped to the frameworks <em>you report against</em>.</h2>
            </div>
            <p className="lede">
              Compliance built on validated controls, not questionnaires.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><span className="n">01</span><b>Validated, not attested</b><p>Control checks read configuration and state from your tools rather than relying on self-assessment.</p></div>
            <div><span className="n">02</span><b>Mapped once, reused</b><p>The same control evidence supports every framework it applies to, so audits stop repeating work.</p></div>
            <div><span className="n">03</span><b>Gaps stay visible</b><p>Requirements without evidence are reported as not assessed, never counted as met.</p></div>
          </div>
          <div className="mt-m">
            <div className="xlabel"><span>Mapping context includes</span><i /></div>
            <p className="h3 mt-s" style={{ color: '#CFCDC5' }}>{FRAMEWORKS.join(' · ')}</p>
            <p className="note mt-s">Framework names indicate the regulatory context Kaska maps to. They do not imply certification or regulatory approval.</p>
          </div>
        </div>
      </section>

      {/* 12 · INDUSTRIES */}
      <section className="s-warm sec">
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

      {/* 13 · EMAIL SECURITY */}
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

      {/* 14 · TECHNOLOGY SOLUTIONS (compact) */}
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

      {/* 15 · TRUST / COMPANY */}
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

      {/* 16 · CLOSE */}
      <Close
        title={<>Know what is <em>actually</em> protected.</>}
        text="A focused walkthrough of your controls, the evidence behind them and what to fix first."
      />
    </>
  )
}
