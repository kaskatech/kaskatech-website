import Link from 'next/link'
import AssetGraph3D from '@/components/AssetGraph3D'

// Early-access funnel: route to the contact form until app.kaskatech.com is live.
// When the self-serve app goes live, set this back to 'https://app.kaskatech.com/register'.
const REGISTER = '/contact'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero wrap">
        <span className="kicker rev">BUILT FROM THE ASHES OF REAL-WORLD BREACHES</span>
        <h1 className="rev">
          Know your risk before attackers do. Own your real-time <em className="em">resilience</em>.
        </h1>
        <p className="sub rev">
          <b>Intelligence Spine at work.</b> One live picture of your risk — exposure in financial
          terms, a Cyber Resilience Score, validated controls, and compliance you can prove to your
          regulators, board and insurers. Kaska responds and recovers at machine speed under human
          approval — prepared before, during and after a breach.
        </p>
        <div className="ctas rev">
          <a className="act" href={REGISTER}>
            Request early access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <Link className="ghost" href="/features">
            See how it works
          </Link>
        </div>

        {/* CENTERPIECE: Resilience Spine */}
        <div className="spine rev">
          <div className="spine-card">
            <div className="spine-head">
              <span className="lbl">Board Resilience Spine · Acme Corporation</span>
              <span className="live">
                <span className="dot"></span>LIVE POSTURE
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
                <div className="k">Controls enforced</div>
              </div>
              <div className="metric">
                <div className="v">$24K</div>
                <div className="k">Cost to close</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* INTELLIGENCE LIFECYCLE — enrichment sources feed the asset spine, then flow through 3 phases */}
      <section className="lifecycle">
        <div className="wrap">
          <div className="sec-head center rev">
            <span className="kicker">THE INTELLIGENCE LIFECYCLE</span>
            <h2 style={{ marginTop: 18 }}>
              Every signal on <span className="em">one asset spine</span>.
            </h2>
            <p className="lead">
              We enrich every asset from every source that matters — then carry that intelligence
              through the whole breach lifecycle. Nothing left on the table.
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
              <p>See the exploitable, reachable gap — and price it — before an attacker uses it.</p>
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
              <p>The instant something fires, take one governed, reversible move to contain it.</p>
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
              <p>Restore service, prove recovery, and hand the regulator evidence that holds.</p>
              <ul className="lc-steps">
                <li>Recovery orchestration</li>
                <li>Compliance &amp; evidence</li>
                <li>Board &amp; executive reporting</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PROBLEM -> UNIFICATION */}
      <section className="wrap tint">
        <div className="sec-head center rev">
          <span className="kicker">THE PROBLEM</span>
          <h2 style={{ marginTop: 18 }}>
            Your tools are many. Your risk is <span className="em">invisible</span>.
          </h2>
          <p className="lead">
            You have bought the stack. But no one can tell you what is actually protected, whether it
            truly works, or what a breach would cost.
          </p>
        </div>
        <div className="prob-grid">
          <div className="card rev">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7a10.6 10.6 0 0 1-5-1.2" />
                <path d="M4 4l16 16" />
              </svg>
            </div>
            <h3>Blind spots you can&apos;t see</h3>
            <p>Fragmented tools, each with its own console. No single picture of where you are exposed.</p>
          </div>
          <div className="card rev">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" />
                <path d="M9.5 12l2 2 3.5-4" />
                <path d="M15 6l-6 12" opacity=".55" />
              </svg>
            </div>
            <h3>No proof your controls work</h3>
            <p>Your EDR, firewall and MFA are assumed to be enforced — never actually verified against a standard.</p>
          </div>
          <div className="card rev">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V4M4 20h16" />
                <path d="M8 16v-4M12 16V8M16 16v-7" />
              </svg>
            </div>
            <h3>No number for the board</h3>
            <p>Risk arrives as red-amber-green — not as money. The board can&apos;t act on a colour.</p>
          </div>
        </div>

        <div className="resolve rev">
          <div>
            <span className="kicker">THE RESOLVE</span>
            <h3 style={{ marginTop: 16 }}>One platform, above your whole stack.</h3>
          </div>
          <div className="rp">
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </span>
              <span>
                <b>Proves every control is actually enforced</b> — evidence, not assumption.
              </span>
            </div>
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </span>
              <span>
                <b>One risk number — in financial terms</b> the board understands and can decide on.
              </span>
            </div>
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </span>
              <span>
                <b>Governed, reversible response</b> — one approved move to contain, fully evidenced.
              </span>
            </div>
            <div className="upoint">
              <span className="chk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </span>
              <span>
                <b>Vendor-agnostic</b> — nothing ripped out; Kaska reads the stack you already run.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="wrap" style={{ paddingBottom: 0 }}>
        <div className="sec-head center rev" style={{ marginBottom: 12 }}>
          <span className="kicker">KASKA EM · EXPOSURE MANAGEMENT</span>
          <h2 style={{ marginTop: 18 }}>
            Five things Kaska does — <span className="em">end to end</span>.
          </h2>
          <p className="lead">Kaska Exposure Management is the platform that does it all — proving your controls, pricing your risk, and containing what fires. <b>Modular by design</b> — license the capabilities you need today, switch on the rest when you&apos;re ready.</p>
        </div>

        {/* CAPABILITY 1 */}
        <div className="cap rev">
          <div className="cap-text">
            <span className="num">01 / 05</span>
            <span className="fname">Pre-Breach Risk Intelligence</span>
            <h3>See the gap before an attacker does.</h3>
            <p>Find the exploitable, reachable gaps across your estate and price each one — before it&apos;s used.</p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Attack Paths · reachable exposure</em></div>
              <img src="/platform/attack-paths.webp" alt="Kaska platform — Attack Paths, chained exposure to crown-jewel assets" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* CAPABILITY 2 */}
        <div className="cap flip rev">
          <div className="cap-text">
            <span className="num">02 / 05</span>
            <span className="fname">Control Validation</span>
            <h3>Prove every control is actually enforced.</h3>
            <p>~1,400 checks across 31 domains, mapped to CIS, RBI, ISO and NIST — proof, not assumption.</p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Control Validation · 30 domains</em></div>
              <img src="/platform/control-validation.webp" alt="Kaska platform — Control Validation posture across 30 control domains" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* CAPABILITY 3 */}
        <div className="cap rev">
          <div className="cap-text">
            <span className="num">03 / 05</span>
            <span className="fname">Cyber Risk Quantification</span>
            <h3>Put a financial number on your risk.</h3>
            <p>Annual loss and value-at-risk in financial terms, FAIR-style — the number your board understands.</p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Exposure & Risk · FAIR model</em></div>
              <img src="/platform/exposure-risk.webp" alt="Kaska platform — Exposure & Risk, FAIR financial quantification" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* CAPABILITY 4 */}
        <div className="cap flip rev">
          <div className="cap-text">
            <span className="num">04 / 05</span>
            <span className="fname">Real-Time Response</span>
            <h3>Stop it the moment it strikes — one governed move.</h3>
            <p>When something fires, one governed, reversible, human-approved action to contain it — fully evidenced.</p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Incident Command · real-time</em></div>
              <img src="/platform/command-center.webp" alt="Kaska platform — Incident Command Center" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>

        {/* STRIKE-MOMENT STORY */}
        <div className="strike rev">
          <div className="strike-in">
            <span className="kicker">THE DECISIVE MOMENT</span>
            <h3>
              The moment it strikes, Kaska makes <em className="em">one</em> move.
            </h3>
            <p>
              Kaska watches the picture form in real time. The instant something fires, it doesn&apos;t
              drown you in alerts — it takes ONE governed, reversible move to contain it: the action a
              human has pre-approved for that situation, executed at machine speed, every step
              evidenced. Autonomous intelligence, governed response — machine speed on the routine, a
              human gate on anything consequential.
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
              <span>Every move sealed to a tamper-proof evidence trail.</span>
            </div>
          </div>
        </div>

        {/* CAPABILITY 5 */}
        <div className="cap rev">
          <div className="cap-text">
            <span className="num">05 / 05</span>
            <span className="fname">Compliance & Evidence</span>
            <h3>Prove it to the board and the regulator.</h3>
            <p>17 frameworks incl. RBI, SEBI, CERT-In and DPDP; tamper-proof evidence and a CERT-In six-hour filing.</p>
          </div>
          <div className="cap-vis">
            <figure className="shotframe">
              <div className="sf-bar"><span></span><span></span><span></span><em>Compliance · frameworks & evidence</em></div>
              <img src="/platform/compliance.webp" alt="Kaska platform — Compliance frameworks and evidence" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>

      {/* ESTATE */}
      <section className="estate">
        <div className="wrap">
          <div className="sec-head center rev">
            <span className="kicker">COVERAGE</span>
            <h2 style={{ marginTop: 18 }}>
              Across your <span className="em">whole estate</span>.
            </h2>
            <p className="lead">One picture spanning every environment you run — not a silo per tool.</p>
          </div>
          <div className="est-grid">
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
              <p>Firewalls, EDR, servers and identity behind your perimeter, via a light collector.</p>
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
          </div>
          <p className="est-foot rev">
            Vendor-agnostic — <span className="em">Kaska reads the stack you already run.</span>
          </p>
          <div className="ctas rev" style={{ justifyContent: 'center', marginTop: 26 }}>
            <Link className="ghost" href="/integrations">
              150+ connectors across 20+ categories
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
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
          <a className="res rev" href="#">
            <div className="meta">
              <span className="dt">2026</span>WHITEPAPER
            </div>
            <h3>Kaska Technical Whitepaper</h3>
            <span className="read">
              Read{' '}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          <a className="res rev" href="#">
            <div className="meta">
              <span className="dt">2026</span>ONE-PAGER
            </div>
            <h3>Data Governance & Trust</h3>
            <span className="read">
              Read{' '}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          <a className="res rev" href="#">
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
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wrap final tint">
        <div className="rev">
          <span className="kicker">GET STARTED</span>
          <h2 style={{ marginTop: 18 }}>
            See your risk — <span className="em">in financial terms.</span>
          </h2>
          <div className="ctas">
            <a className="act" href={REGISTER}>
              Request early access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link className="ghost" href="/contact">
              Book a walkthrough
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
