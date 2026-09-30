import type { Metadata } from 'next'
import Link from 'next/link'
import BreachLoop from '@/components/k/BreachLoop'
import ProductConsole from '@/components/k/ProductConsole'
import ConfiguredInspector from '@/components/k/ConfiguredInspector'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'
import { CAPABILITIES, SPINE } from '@/components/k/content'

export const metadata: Metadata = {
  title: 'Kaska Exposure Management Platform™ — Kaska',
  description:
    'Kaska Exposure Management Platform™ — An Autonomous Cyber Risk & Resilience Platform. Kaska EM connects assets, exposure, control validation, risk, governed response and evidence, before, during and after a breach.',
}

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Kaska Exposure Management Platform™"
        title={<>Cyber risk and resilience, <em>connected</em>.</>}
        lede="Kaska EM sits above the security stack you already run. It connects every asset to its exposure, the controls protecting it, the resulting risk and the action that reduces it, with evidence behind each step."
      >
        <div className="hero-id mt-m">
          <b>An Autonomous Cyber Risk &amp; Resilience Platform</b>
          <i>AI at the Core. Resilience at the Edge.</i>
        </div>
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('em')}>Request a Demo<Arrow /></Link>
          <Link className="btn btn-q" href="/features">Platform capabilities</Link>
        </div>
      </PageHero>

      {/* THREE QUESTIONS */}
      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">What Kaska EM answers</span>
          <h2 className="h2 mt-s" style={{ maxWidth: '18ch' }}>Three questions every security leader is <em>asked</em>.</h2>
          <div className="cols3 mt-m">
            <div><span className="n">01</span><b>Are our controls working?</b><p>Controls are validated against their intended outcome, so a configured tool is not mistaken for an effective one.</p></div>
            <div><span className="n">02</span><b>What is exposed, and what matters most?</b><p>Exposure is attached to the assets it affects and prioritised by exploitability, control state and business criticality.</p></div>
            <div><span className="n">03</span><b>Can we respond, and prove it?</b><p>Priorities become cases with owners and governed actions, and every change is re-validated and recorded as evidence.</p></div>
          </div>
        </div>
      </section>

      {/* CONFIGURED ≠ PROTECTED */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Control validation</span>
              <h2 className="h2 mt-s">Configured doesn&apos;t mean <em>protected</em>.</h2>
            </div>
            <p className="lede">Select a control and follow it from what the tool reports, to what Kaska measures, to what it means.</p>
          </div>
          <div className="mt-m"><ConfiguredInspector /></div>
        </div>
      </section>

      {/* MODEL */}
      <section className="s-deep sec">
        <div className="wrap">
          <span className="kicker">The Cyber Risk &amp; Resilience model</span>
          <h2 className="h2 mt-s">One model, from asset to <em>resilience</em>.</h2>
          <div className="spine">
            {SPINE.map((s, i) => (
              <div key={s.t} className={`st ${s.cls ?? ''}`}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <b>{s.t}</b>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREACH INTELLIGENCE */}
      <section className="s-dark sec" id="breach-intelligence">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Breach Intelligence</span>
              <h2 className="h2 mt-s">Before. During. After. <em>One loop.</em></h2>
            </div>
            <p className="lede">
              Predict &amp; Prevent, Detect &amp; Respond, Recover &amp; Adapt: three doors into one
              intelligence loop. Context built before a breach is there during it; lessons learned after it
              flow back into prevention.
            </p>
          </div>
          <BreachLoop />
        </div>
      </section>

      {/* CONSOLE */}
      <section className="s-deep sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">The console</span>
              <h2 className="h2 mt-s">See the <em>evidence</em> behind every answer.</h2>
            </div>
            <p className="lede">Five views of one model. Open a finding to follow its evidence trail from source to conclusion.</p>
          </div>
          <div className="mt-m"><ProductConsole /></div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Capabilities</span>
              <h2 className="h2 mt-s">Ten capabilities, <em>one foundation</em>.</h2>
            </div>
            <p className="lede">Every capability reads and writes the same asset model, so each one makes the others more useful.</p>
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
          <Link className="more mt-m" href="/features">Capabilities and architecture in detail</Link>
        </div>
      </section>

      {/* EVALUATION */}
      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Evaluating Kaska EM</span>
          <h2 className="h2 mt-s" style={{ maxWidth: '20ch' }}>Start with your environment, <em>not a pitch</em>.</h2>
          <div className="cols4 mt-m">
            <div><span className="n">01</span><b>Scope</b><p>Agree the assets, control domains and questions that matter to you.</p></div>
            <div><span className="n">02</span><b>Connect</b><p>Confirm integration fit for the tools you already run, with least-privilege access.</p></div>
            <div><span className="n">03</span><b>Validate</b><p>See your controls measured, with the provenance of every result shown.</p></div>
            <div><span className="n">04</span><b>Review</b><p>Walk through priorities, gaps and evidence with your team and leadership.</p></div>
          </div>
          <p className="note mt-m">Deployment options and integration status are confirmed for your environment during evaluation.</p>
        </div>
      </section>

      <Close title={<>Know what is <em>actually</em> protected.</>} text="See Kaska EM on a sample environment: validated controls, prioritised risk and the evidence behind both." />
    </>
  )
}
