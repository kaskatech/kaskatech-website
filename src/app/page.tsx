import Link from 'next/link'
import AssetGraph3D from '@/components/AssetGraph3D'

// Demo funnel: route to the contact form until app.kaskatech.com is live.
// When the self-serve app goes live, set this back to 'https://app.kaskatech.com/register'.
const REGISTER = '/contact'

export default function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <header className="hero wrap">
        <span className="kicker rev">KASKA EXPOSURE MANAGEMENT PLATFORM&trade;</span>
        <p className="hero-desc rev">An Autonomous Cyber Risk &amp; Resilience Platform</p>
        <h1 className="rev">
          Know your risk before attackers do. Own your real-time <em className="em">resilience</em>.
        </h1>
        <p className="sub rev">
          Kaska connects your security stack into one asset-centric intelligence layer —
          continuously discovering exposure, validating controls, quantifying risk and driving
          governed remediation.
        </p>
        <div className="ctas rev">
          <a className="act" href={REGISTER}>
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <Link className="ghost" href="/features">
            Explore the Platform
          </Link>
        </div>
        <p className="hero-tag rev">AI at the Core. Resilience at the Edge.</p>

        {/* CENTERPIECE: Resilience Spine */}
        <div className="spine rev">
          <div className="spine-card">
            <div className="spine-head">
              <span className="lbl">Board Resilience Spine · Acme Corporation</span>
              <span className="live">
                <span className="dot"></span>ILLUSTRATIVE RISK POSTURE
              </span>
            </div>
            <AssetGraph3D />
            <div className="spine-foot">
              <div className="metric">
                <div className="v crit">$8.7M</div>
                <div className="k">Exposure at risk</div>
              </div>
              <div className="metric">
                <div className="v brass">4</div>
                <div className="k">Open control gaps</div>
              </div>
              <div className="metric">
                <div className="v money">94%</div>
                <div className="k">Controls validated</div>
              </div>
              <div className="metric">
                <div className="v">$24K</div>
                <div className="k">Cost to close</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 02 — PRODUCT VISUAL */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">THE PLATFORM</span>
          <h2 style={{ marginTop: 18 }}>
            One platform. One view of your <span className="em">exposure</span>.
          </h2>
          <p className="lead">
            Kaska brings assets, exposures, controls, threats and business context together on one
            asset-centric intelligence layer.
          </p>
        </div>
        <div className="achips center rev" style={{ marginTop: 34 }}>
          <span className="achip">Know what you have</span>
          <span className="achip">Know what is exposed</span>
          <span className="achip">Know what is actually protected</span>
          <span className="achip">Know what matters most</span>
          <span className="achip">Know what to do next</span>
        </div>
        <figure className="shotframe rev" style={{ marginTop: 40 }}>
          <div className="sf-bar"><span></span><span></span><span></span><em>Executive view · one risk picture</em></div>
          <img src="/platform/board.webp" alt="Kaska platform — executive view of exposure, risk and control posture" loading="lazy" decoding="async" />
        </figure>
      </section>

      {/* 03 — ASSET SPINE (intelligence lifecycle) */}
      <section className="lifecycle">
        <div className="wrap">
          <div className="sec-head center rev">
            <span className="kicker">THE INTELLIGENCE LIFECYCLE</span>
            <h2 style={{ marginTop: 18 }}>
              Every signal on <span className="em">one asset spine</span>.
            </h2>
            <p className="lead">
              Kaska connects assets, exposures, controls, threats and business context through one
              asset-centric intelligence layer — then carries that intelligence through the whole
              breach lifecycle.
            </p>
          </div>

          {/* ENRICHMENT SOURCES */}
          <div className="lc-sources rev">
            <span className="lc-cap">ENRICHED FROM</span>
            <div className="src-row">
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5 21 21" /><path d="M11 8v3l2 1.4" /></svg>Threat Intelligence</span>
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>External Attack Surface</span>
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8z" /></svg>Breach &amp; Attack Simulation</span>
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" /></svg>Continuous Red Teaming</span>
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M12 8v4M12 15h.01" /></svg>Vulnerability Management</span>
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 3v18M4 7.5l8 4.5 8-4.5" /></svg>xBOM · SBOM / AIBOM</span>
              <span className="src"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1.4" /><rect x="3" y="15" width="18" height="5" rx="1.4" /><path d="M7 6.5h.01M7 17.5h.01" /></svg>Security Controls &amp; Devices</span>
            </div>
          </div>

          {/* CONVERGE INTO SPINE */}
          <div className="lc-converge rev" aria-hidden="true">
            <svg viewBox="0 0 240 44" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lcg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#C89B45" stopOpacity=".7" />
                  <stop offset="1" stopColor="#4FC9A3" stopOpacity=".7" />
                </linearGradient>
              </defs>
              <path d="M20 2 C20 26 120 18 120 42 M120 2 C120 26 120 18 120 42 M220 2 C220 26 120 18 120 42" stroke="url(#lcg)" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="120" cy="42" r="3" fill="#4FC9A3" />
            </svg>
            <span className="lc-spinepill"><span className="dot"></span>Asset graph spine</span>
          </div>

          {/* THREE PHASES */}
          <div className="lc-flow rev">
            <article className="lc-phase pre">
              <div className="lc-top"><span className="lc-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="2.6" /></svg></span><span className="lc-num">01</span></div>
              <h3>Pre-Breach Intelligence</h3>
              <p>Identify the exploitable, reachable gap — and quantify it — before an attacker uses it.</p>
              <ul className="lc-steps">
                <li>Asset &amp; xBOM inventory</li>
                <li>Threat &amp; exposure intel</li>
                <li>Attack-path analysis</li>
                <li>Control validation</li>
                <li>Risk in financial terms</li>
              </ul>
            </article>

            <div className="lc-arrow" aria-hidden="true"><svg viewBox="0 0 40 16" fill="none"><path d="M2 8h32M28 3l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></div>

            <article className="lc-phase rt">
              <div className="lc-top"><span className="lc-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8z" /></svg></span><span className="lc-num">02</span></div>
              <h3>Real-Time Breach Intelligence</h3>
              <p>When something fires, connect the context needed for one governed, reversible move.</p>
              <ul className="lc-steps">
                <li>Detection &amp; Response</li>
                <li>Governed, human-approved action</li>
                <li>Autonomous response</li>
                <li>Cases &amp; approvals</li>
              </ul>
            </article>

            <div className="lc-arrow" aria-hidden="true"><svg viewBox="0 0 40 16" fill="none"><path d="M2 8h32M28 3l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></div>

            <article className="lc-phase post">
              <div className="lc-top"><span className="lc-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg></span><span className="lc-num">03</span></div>
              <h3>Post-Breach Resilience</h3>
              <p>Restore service, reconstruct what happened, and capture the evidence that supports it.</p>
              <ul className="lc-steps">
                <li>Recovery orchestration</li>
                <li>Compliance &amp; evidence</li>
                <li>Board &amp; executive reporting</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 04 — OPERATING MODEL */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">THE OPERATING MODEL</span>
          <h2 style={{ marginTop: 18 }}>
            From exposure to <span className="em">resilience</span>.
          </h2>
          <p className="lead">
            Kaska continuously turns fragmented security signals into an actionable cyber risk loop.
          </p>
        </div>

        <div className="spine rev" style={{ maxWidth: 1120, marginTop: 52 }}>
          <div className="spine-card">
            <div className="stage-row five">
              <div className="flow-line" aria-hidden="true"></div>

              <div className="stage">
                <div className="node s1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5 21 21" /></svg>
                </div>
                <div className="st-k">01</div>
                <div className="st-t">Discover</div>
                <div className="st-d">Build a continuously updated picture of the environment.</div>
              </div>

              <div className="stage">
                <div className="node s2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9.5 12l2 2 3.5-4" /></svg>
                </div>
                <div className="st-k">02</div>
                <div className="st-t">Validate</div>
                <div className="st-d">Determine whether security controls are actually in place and functioning as expected.</div>
              </div>

              <div className="stage">
                <div className="node s3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-7" /></svg>
                </div>
                <div className="st-k">03</div>
                <div className="st-t">Prioritise</div>
                <div className="st-d">Connect exposure, asset criticality, attack paths and business impact.</div>
              </div>

              <div className="stage">
                <div className="node s4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8z" /></svg>
                </div>
                <div className="st-k">04</div>
                <div className="st-t">Act</div>
                <div className="st-d">Drive governed remediation and response.</div>
              </div>

              <div className="stage">
                <div className="node s5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 1 3 6.7" /><path d="M3 20v-5h5" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
                <div className="st-k">05</div>
                <div className="st-t">Verify</div>
                <div className="st-d">Measure whether risk was reduced and capture evidence for continuous improvement.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — FIVE GAPS */}
      <section className="wrap tint">
        <div className="sec-head center rev">
          <span className="kicker">THE PROBLEM</span>
          <h2 style={{ marginTop: 18 }}>
            Five gaps Kaska <span className="em">closes</span>.
          </h2>
          <p className="lead">
            You have bought the stack. The gaps that remain are the ones between the tools.
          </p>
        </div>
        <div className="prob-grid five">
          <div className="card rev">
            <span className="ck">01</span>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7a10.6 10.6 0 0 1-5-1.2" />
                <path d="M4 4l16 16" />
              </svg>
            </div>
            <h3>Unknown exposure</h3>
            <p>You cannot protect what you cannot see.</p>
          </div>
          <div className="card rev">
            <span className="ck">02</span>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" />
                <path d="M9.5 12l2 2 3.5-4" />
                <path d="M15 6l-6 12" opacity=".55" />
              </svg>
            </div>
            <h3>Control uncertainty</h3>
            <p>Configured does not always mean protected.</p>
          </div>
          <div className="card rev">
            <span className="ck">03</span>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V4M4 20h16" />
                <path d="M8 16v-4M12 16V8M16 16v-7" />
              </svg>
            </div>
            <h3>Risk fragmentation</h3>
            <p>Security signals do not automatically become business risk.</p>
          </div>
          <div className="card rev">
            <span className="ck">04</span>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h12M3 18h7" />
                <path d="M17 15l3 3 4-5" />
              </svg>
            </div>
            <h3>Remediation friction</h3>
            <p>Knowing about a vulnerability is not the same as knowing what to fix first.</p>
          </div>
          <div className="card rev">
            <span className="ck">05</span>
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 1 3 6.7" />
                <path d="M3 20v-5h5" />
              </svg>
            </div>
            <h3>Resilience blind spots</h3>
            <p>Incident response is only one part of resilience. Recovery and learning matter too.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES 06 — 12 */}
      <section className="wrap" style={{ paddingBottom: 0 }}>
        <div className="sec-head center rev" style={{ marginBottom: 12 }}>
          <span className="kicker">KASKA EM · EXPOSURE MANAGEMENT</span>
          <h2 style={{ marginTop: 18 }}>
            What the platform does — <span className="em">end to end</span>.
          </h2>
          <p className="lead">
            One asset-centric layer across exposure, control validation, risk, response and recovery.{' '}
            <b>Modular by design</b> — license the capabilities you need today, switch on the rest
            when you&apos;re ready.
          </p>
        </div>

        {/* 06 — EXPOSURE */}
        <div className="cap rev">
          <div className="cap-text">
            <span className="num">01 / 07</span>
            <span className="fname">Exposure Management</span>
            <h3>See the gap before your attacker does.</h3>
            <p>
              Continuously identify assets, vulnerabilities, misconfigurations, attack paths and
              security control gaps across your environment.
            </p>
            <p>
              Kaska turns fragmented findings into an asset-centric view of exposure — helping
              security teams focus on what matters most.
            </p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Attack Paths · reachable exposure</em></div>
              <img src="/platform/attack-paths.webp" alt="Kaska platform — Attack Paths, chained exposure to critical assets" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* 07 — CONTROL VALIDATION */}
        <div className="cap flip rev">
          <div className="cap-text">
            <span className="num">02 / 07</span>
            <span className="fname">Control Validation</span>
            <h3>Configured doesn&apos;t mean protected.</h3>
            <p>
              Kaska continuously validates available security control state and evidence across your
              environment — helping distinguish what is configured from what is actually enforced.
            </p>
            <div className="achips" style={{ marginTop: 22 }}>
              <span className="achip">Configured</span>
              <span className="achip">Validated</span>
              <span className="achip">Evidenced</span>
              <span className="achip">Improved</span>
            </div>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Control Validation · posture by domain</em></div>
              <img src="/platform/control-validation.webp" alt="Kaska platform — Control Validation posture across control domains" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* 08 — RISK */}
        <div className="cap rev">
          <div className="cap-text">
            <span className="num">03 / 07</span>
            <span className="fname">Cyber Risk Quantification</span>
            <h3>Put it together. Quantify your risk.</h3>
            <p>
              Kaska connects exposure, control effectiveness, asset criticality, attack paths and
              business impact to provide a continuously updated view of cyber risk.
            </p>
            <p>
              The objective is not another vulnerability score. It is context — what matters, why it
              matters, what it could impact, and what to address first.
            </p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Exposure &amp; Risk · FAIR model</em></div>
              <img src="/platform/exposure-risk.webp" alt="Kaska platform — Exposure and Risk, FAIR-aligned financial quantification" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* 09 — ACTION */}
        <div className="cap flip rev">
          <div className="cap-text">
            <span className="num">04 / 07</span>
            <span className="fname">Governed Remediation</span>
            <h3>Move from finding to governed action.</h3>
            <p>
              When a high-risk exposure or incident is identified, Kaska connects the affected asset,
              control state, exposure and threat context to support governed remediation and
              response.
            </p>
          </div>
          <div className="cap-vis">
            <div className="vis-k">Governed remediation</div>
            <div className="resp">
              <div className="rstep done">
                <span className="rn">1</span>
                <div>
                  <div className="rt">Prioritise</div>
                  <div className="rd">Ranked by risk, asset criticality and business context.</div>
                </div>
              </div>
              <div className="rstep done">
                <span className="rn">2</span>
                <div>
                  <div className="rt">Assign</div>
                  <div className="rd">Routed to the owner as a case with full context attached.</div>
                </div>
              </div>
              <div className="rstep">
                <span className="rn">3</span>
                <div>
                  <div className="rt">Remediate</div>
                  <div className="rd">Approved workflows executed across connected tools.</div>
                </div>
              </div>
              <div className="rstep">
                <span className="rn">4</span>
                <div>
                  <div className="rt">Validate</div>
                  <div className="rd">Control and exposure state re-checked after the change.</div>
                </div>
              </div>
              <div className="rstep">
                <span className="rn">5</span>
                <div>
                  <div className="rt">Capture evidence</div>
                  <div className="rd">Actions, approvals and outcomes retained for review.</div>
                  <span className="rtag">EVIDENCE CAPTURED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 — INCIDENT */}
        <div className="cap rev">
          <div className="cap-text">
            <span className="num">05 / 07</span>
            <span className="fname">Detection &amp; Response</span>
            <h3>Autonomous intelligence. Governed response.</h3>
            <p>
              When an incident occurs, security teams need more than alerts. Kaska connects the
              affected asset, identity, exposure, control state, threat context and available
              evidence to accelerate investigation and support governed response.
            </p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Incident Command · real-time</em></div>
              <img src="/platform/command-center.webp" alt="Kaska platform — Incident Command Center" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* INCIDENT — supporting band */}
        <div className="strike rev">
          <div className="strike-in">
            <span className="kicker">THE DECISIVE MOMENT</span>
            <h3>
              The moment it strikes, Kaska makes context <em className="em">move</em>.
            </h3>
            <p>
              Kaska watches the picture form in real time. When something fires, it doesn&apos;t drown
              you in alerts — it assembles the context and surfaces the action a human has
              pre-approved for that situation, executed at machine speed, every step recorded.
              Autonomous intelligence, governed response — machine speed on the routine, a human gate
              on anything consequential.
            </p>
          </div>
          <div className="strike-pts">
            <div className="spt">
              <span className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
                </svg>
              </span>
              <span>One decisive action, not an alert storm.</span>
            </div>
            <div className="spt">
              <span className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 1 3 6.7" />
                  <path d="M3 20v-5h5" />
                </svg>
              </span>
              <span>Reversible and human-approved — never a black box.</span>
            </div>
            <div className="spt">
              <span className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V5z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span>Every move sealed to a tamper-evident trail.</span>
            </div>
          </div>
        </div>

        {/* 12 — COMPLIANCE & EVIDENCE */}
        <div className="cap flip rev">
          <div className="cap-text">
            <span className="num">06 / 07</span>
            <span className="fname">Compliance &amp; Evidence</span>
            <h3>Prove what you protect.</h3>
            <p>
              Continuous technical evidence mapped to supported security and regulatory requirements
              — helping security teams demonstrate control posture, readiness and remediation to
              leadership, auditors and relevant regulatory stakeholders.
            </p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Compliance · frameworks &amp; evidence</em></div>
              <img src="/platform/compliance.webp" alt="Kaska platform — Compliance frameworks and evidence" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>

      {/* 11 — RECOVERY */}
      <section className="wrap">
        <div className="resolve rev">
          <div>
            <span className="kicker">POST-BREACH RESILIENCE</span>
            <h3 style={{ marginTop: 16 }}>Recover from the breach. Learn from it.</h3>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginTop: 18, lineHeight: 1.7 }}>
              Resilience does not end when an incident is contained.
            </p>
          </div>
          <div className="rp">
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
              </span>
              <span><b>Reconstruct what happened</b> — the timeline, the assets and the path taken.</span>
            </div>
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
              </span>
              <span><b>Identify the control gaps</b> that allowed exposure to become impact.</span>
            </div>
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
              </span>
              <span><b>Capture evidence</b> for leadership, auditors and post-incident review.</span>
            </div>
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
              </span>
              <span><b>Feed lessons back into the risk model</b> — strengthening resilience over time.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13 — WHOLE ESTATE */}
      <section className="estate">
        <div className="wrap">
          <div className="sec-head center rev">
            <span className="kicker">COVERAGE</span>
            <h2 style={{ marginTop: 18 }}>
              Across your <span className="em">whole estate</span>.
            </h2>
            <p className="lead">One picture across every environment you run — not a silo per tool.</p>
          </div>
          <div className="est-grid wide">
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 8.2 4 4 0 0 1 18 16H7z" />
                </svg>
              </div>
              <h3>Cloud</h3>
              <p>AWS, Azure and GCP posture read continuously through native security APIs.</p>
            </div>
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="6" rx="1.5" />
                  <rect x="3" y="14" width="18" height="6" rx="1.5" />
                  <path d="M7 7h.01M7 17h.01" />
                </svg>
              </div>
              <h3>On-premise</h3>
              <p>Servers, workloads and infrastructure behind your perimeter, via a light collector.</p>
            </div>
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
                </svg>
              </div>
              <h3>OT / Industrial</h3>
              <p>Plant and control networks mapped to IEC 62443 and CEA 2025 for critical infrastructure.</p>
            </div>
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <h3>Identity</h3>
              <p>Active Directory, Entra ID and Okta — privilege, MFA and access enforcement.</p>
            </div>
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
                </svg>
              </div>
              <h3>Applications</h3>
              <p>Application and API surface, including software composition through xBOM.</p>
            </div>
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="8" ry="3" />
                  <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
                  <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                </svg>
              </div>
              <h3>Data</h3>
              <p>Sensitive data classification and exposure, aligned to DPDP and privacy obligations.</p>
            </div>
            <div className="est rev">
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2.5" />
                  <circle cx="4" cy="6" r="2" />
                  <circle cx="20" cy="6" r="2" />
                  <circle cx="4" cy="18" r="2" />
                  <circle cx="20" cy="18" r="2" />
                  <path d="M6 7l4 3.5M18 7l-4 3.5M6 17l4-3.5M18 17l-4-3.5" />
                </svg>
              </div>
              <h3>Network / Infrastructure</h3>
              <p>Segmentation, firewall and network control state across the connected estate.</p>
            </div>
          </div>
          <p className="est-foot rev">
            Vendor-agnostic — <span className="em">Kaska reads the stack you already run.</span>
          </p>
          <div className="ctas rev" style={{ justifyContent: 'center', marginTop: 26 }}>
            <Link className="ghost" href="/integrations">
              Explore the integration architecture
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 14 — BUILT ON YOUR EXISTING SECURITY INVESTMENT */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">ABOVE THE STACK</span>
          <h2 style={{ marginTop: 18 }}>
            Built on your existing <span className="em">security investment</span>.
          </h2>
          <p className="lead">
            Kaska is designed to work above and across your existing security stack. No
            rip-and-replace.
          </p>
        </div>

        <div className="emblem rev" style={{ marginTop: 48 }}>
          <div className="emblem-card">
            <div className="emblem-head">
              <span className="lbl">Where Kaska sits</span>
              <span className="live"><span className="dot"></span>ABOVE THE STACK</span>
            </div>
            <div className="stackfig">
              {/* OUTCOMES */}
              <div className="sf-tier">
                <div className="sf-lbl"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 16v-3M12 16V8M16 16v-6" /></svg></span>What you get out</div>
                <div className="sf-row">
                  <div className="sf-chip">Exposure Intelligence</div>
                  <div className="sf-chip">Control Validation</div>
                  <div className="sf-chip">Risk Quantification</div>
                  <div className="sf-chip">Governed Remediation</div>
                  <div className="sf-chip">Resilience</div>
                </div>
              </div>

              <div className="sf-flow"><svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 24V2M6 8l6-6 6 6" /></svg></div>

              {/* KASKA */}
              <div className="sf-tier sf-kaska">
                <div className="sf-lbl"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 2 L21 6 V13 C21 18.5 17 22 12 23 C7 22 3 18.5 3 13 V6 Z" /><path d="M8.5 12.5 L11 15 L16 9.5" strokeLinecap="round" /></svg></span>Kaska — one asset-centric intelligence layer</div>
                <div className="sf-row">
                  <div className="sf-chip">Pre-breach</div>
                  <div className="sf-chip">Real-time</div>
                  <div className="sf-chip">Post-breach</div>
                </div>
                <div className="sf-spine"><span className="ln"></span>Asset graph spine<span className="ln"></span></div>
              </div>

              <div className="sf-flow"><svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 24V2M6 8l6-6 6 6" /></svg></div>

              {/* TOOLS */}
              <div className="sf-tier">
                <div className="sf-lbl"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1.4" /><rect x="3" y="15" width="18" height="5" rx="1.4" /><path d="M7 6.5h.01M7 17.5h.01" /></svg></span>The tools you already own — read-only</div>
                <div className="sf-row">
                  <div className="sf-chip">SIEM / XDR</div>
                  <div className="sf-chip">EDR</div>
                  <div className="sf-chip">IAM</div>
                  <div className="sf-chip">PAM</div>
                  <div className="sf-chip">Firewall</div>
                  <div className="sf-chip">Cloud</div>
                  <div className="sf-chip">Vulnerability Management</div>
                  <div className="sf-chip">GRC</div>
                  <div className="sf-chip">DLP</div>
                  <div className="sf-chip">OT</div>
                  <div className="sf-chip">Backup</div>
                  <div className="sf-chip">Application Security</div>
                </div>
              </div>
            </div>
            <div className="sf-cap">
              <b>Nothing ripped out.</b> Connect the tools you already use. Unify their signals.
              Validate what they actually enforce. Turn fragmented data into a continuously updated
              view of cyber risk.
            </div>
          </div>
        </div>
      </section>

      {/* 15 — ORIGIN STORY */}
      <section className="band">
        <div className="wrap">
          <div className="inner rev" style={{ padding: '56px 0' }}>
            <span className="kicker">BUILT FROM THE LESSONS OF REAL-WORLD BREACHES</span>
            <h2 style={{ marginTop: 20 }}>
              Because resilience is <span className="em">learned the hard way</span>.
            </h2>
            <p className="lead" style={{ maxWidth: '68ch', margin: '22px auto 0' }}>
              Kaska was shaped by the lessons of real-world cyber incidents — where fragmented tools,
              unvalidated controls and disconnected security data can turn exposure into business
              impact.
            </p>
            <p className="lead" style={{ maxWidth: '68ch', margin: '16px auto 0' }}>
              We built Kaska to help organisations understand what is exposed, validate what is
              actually protected, prioritise what matters and continuously strengthen their
              resilience.
            </p>
          </div>
        </div>
      </section>

      {/* 16 — PLATFORM VISION */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">THE PLATFORM VISION</span>
          <h2 style={{ marginTop: 18 }}>
            Exposure management is where we start. Cyber <span className="em">resilience</span> is
            where we take you.
          </h2>
          <p className="lead">
            Kaska continuously connects exposure intelligence, control validation, risk
            quantification, response and recovery into one cyber risk and resilience operating model.
          </p>
        </div>

        <div className="achips center rev" style={{ marginTop: 36 }}>
          <span className="achip">It understands them</span>
          <span className="achip">Prioritises them</span>
          <span className="achip">Acts on them</span>
          <span className="achip">Verifies the outcome</span>
          <span className="achip">Learns from incidents</span>
        </div>

        <div className="lockup rev">
          <span className="lk-name">KASKA</span>
          <span className="lk-product">Kaska Exposure Management Platform&trade;</span>
          <span className="lk-desc">An Autonomous Cyber Risk &amp; Resilience Platform</span>
          <span className="lk-tag">AI at the Core. Resilience at the Edge.</span>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="wrap">
        <div className="sec-head rev">
          <span className="kicker">RESOURCES</span>
          <h2 style={{ marginTop: 18 }}>
            Go <span className="em">deeper</span>.
          </h2>
        </div>
        <div className="res-grid">
          <a className="res rev" href="/docs/Kaska_EM_Technical_Whitepaper.pdf" target="_blank" rel="noopener noreferrer">
            <div className="meta">
              <span className="dt">2026</span>WHITEPAPER
            </div>
            <h3>Kaska EM Technical Whitepaper</h3>
            <span className="read">
              Read{' '}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          <a className="res rev" href="/docs/Kaska_EM_Product_Datasheet.pdf" target="_blank" rel="noopener noreferrer">
            <div className="meta">
              <span className="dt">2026</span>DATASHEET
            </div>
            <h3>Kaska EM Product Datasheet</h3>
            <span className="read">
              Read{' '}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          <Link className="res rev" href="/features">
            <div className="meta">
              <span className="dt">2026</span>EXPLAINER
            </div>
            <h3>Cyber Risk, Quantified</h3>
            <span className="read">
              Read{' '}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* 17 — FINAL CTA */}
      <section className="wrap final tint">
        <div className="rev">
          <span className="kicker">GET STARTED</span>
          <h2 style={{ marginTop: 18 }}>
            See your cyber risk — <span className="em">in financial terms.</span>
          </h2>
          <p className="lead" style={{ maxWidth: '46ch', margin: '22px auto 0' }}>
            See what matters. Understand what it could cost. Know where to act.
          </p>
          <div className="ctas">
            <a className="act" href={REGISTER}>
              Request a Kaska Risk Assessment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link className="ghost" href="/contact">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
