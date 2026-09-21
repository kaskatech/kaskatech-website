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

      {/* LIFECYCLE RIBBON */}
      <section className="ribbon">
        <div className="wrap rev">
          <span className="kicker rib-k">THE INTELLIGENCE LIFECYCLE</span>
          <div className="rib-flow">
            <div className="phase p1">
              <div className="marker">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="2.6" />
                </svg>
              </div>
              <div className="ph-k">
                Pre-Breach
                <br />
                Intelligence
              </div>
              <div className="steps">
                <span className="step">
                  <span className="dt"></span>Unified visibility
                </span>
                <span className="step">
                  <span className="dt"></span>Risk in financial terms
                </span>
                <span className="step">
                  <span className="dt"></span>Control validation
                </span>
              </div>
            </div>

            <div className="rib-conn">
              <svg viewBox="0 0 56 16" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="rc1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#C89B45" />
                    <stop offset="1" stopColor="#4FC9A3" />
                  </linearGradient>
                </defs>
                <path d="M2 8h46M42 3l6 5-6 5" stroke="url(#rc1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="phase p2">
              <div className="marker">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h8l-1 8 10-12h-8z" />
                </svg>
              </div>
              <div className="ph-k">
                Real-Time Breach
                <br />
                Intelligence
              </div>
              <div className="steps">
                <span className="step">
                  <span className="dt"></span>Detection
                </span>
                <span className="step">
                  <span className="dt"></span>Governed response
                </span>
              </div>
            </div>

            <div className="rib-conn">
              <svg viewBox="0 0 56 16" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="rc2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#C89B45" />
                    <stop offset="1" stopColor="#4FC9A3" />
                  </linearGradient>
                </defs>
                <path d="M2 8h46M42 3l6 5-6 5" stroke="url(#rc2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="phase p3">
              <div className="marker">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="ph-k">
                Post-Breach
                <br />
                Resilience
              </div>
              <div className="steps">
                <span className="step">
                  <span className="dt"></span>Compliance &amp; evidence
                </span>
                <span className="step">
                  <span className="dt"></span>Recovery
                </span>
              </div>
            </div>
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
          <span className="kicker">THE PLATFORM</span>
          <h2 style={{ marginTop: 18 }}>
            Five things Kaska does — <span className="em">end to end</span>.
          </h2>
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
            <div className="vis-k">Reachable exposure map</div>
            <div className="gapmap">
              <svg viewBox="0 0 400 240" preserveAspectRatio="none">
                <line x1="70" y1="70" x2="200" y2="130" stroke="#232C3B" strokeWidth="1.5" />
                <line x1="200" y1="130" x2="320" y2="70" stroke="#232C3B" strokeWidth="1.5" />
                <line x1="200" y1="130" x2="130" y2="200" stroke="#E0554E" strokeWidth="1.5" strokeDasharray="4 4" opacity=".7" />
                <line x1="130" y1="200" x2="300" y2="190" stroke="#232C3B" strokeWidth="1.5" />
              </svg>
              <div className="pin ok" style={{ left: '17.5%', top: '29%' }}>
                <div className="b"></div>
                <div className="t">Edge FW</div>
              </div>
              <div className="pin warn" style={{ left: '50%', top: '54%' }}>
                <div className="b"></div>
                <div className="t">DMZ host</div>
              </div>
              <div className="pin ok" style={{ left: '80%', top: '29%' }}>
                <div className="b"></div>
                <div className="t">Identity</div>
              </div>
              <div className="pin crit" style={{ left: '32.5%', top: '83%' }}>
                <div className="b"></div>
                <div className="t">Finance VLAN</div>
              </div>
              <div className="pin warn" style={{ left: '75%', top: '79%' }}>
                <div className="b"></div>
                <div className="t">Backup</div>
              </div>
            </div>
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
            <div className="vis-k">Control checks · EDR domain</div>
            <div className="checks">
              <div className="chk-row">
                <span className="st pass">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </span>
                <span className="nm">Real-time protection enabled</span>
                <span className="fw">CIS 10.1</span>
              </div>
              <div className="chk-row">
                <span className="st fail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                <span className="nm">EDR in detection-only mode</span>
                <span className="fw">RBI 6.4</span>
              </div>
              <div className="chk-row">
                <span className="st pass">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </span>
                <span className="nm">Tamper protection on</span>
                <span className="fw">ISO A.8.7</span>
              </div>
              <div className="chk-row">
                <span className="st pass">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </span>
                <span className="nm">Signatures &lt; 24h old</span>
                <span className="fw">NIST DE.CM</span>
              </div>
              <div className="barwrap">
                <div className="bar">
                  <i></i>
                </div>
                <div className="barlbl">
                  <span>Coverage across 31 domains</span>
                  <span>1,314 / 1,399 enforced</span>
                </div>
              </div>
            </div>
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
            <div className="vis-k">Board risk view · FAIR model</div>
            <div className="crq">
              <div className="big">$8.7M</div>
              <div className="biglbl">Value at risk (annual)</div>
              <div className="rows">
                <div className="cr">
                  <span>Annual loss expectancy</span>
                  <b className="money">$3.5M</b>
                </div>
                <div className="cr">
                  <span>Inherent exposure</span>
                  <b>$11.6M</b>
                </div>
                <div className="cr">
                  <span>Reduction if gaps closed</span>
                  <b className="money">−$6.2M</b>
                </div>
              </div>
            </div>
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
            <div className="vis-k">Governed response · ransomware execution</div>
            <div className="resp">
              <div className="rstep done">
                <div className="rn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </div>
                <div>
                  <div className="rt">Threat detected on host FIN-04</div>
                  <div className="rd">Correlated across EDR + identity signals</div>
                </div>
              </div>
              <div className="rstep done">
                <div className="rn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l5 5L20 6" />
                  </svg>
                </div>
                <div>
                  <div className="rt">Isolate host — one action proposed</div>
                  <div className="rd">Reversible; blast radius scoped</div>
                </div>
              </div>
              <div className="rstep">
                <div className="rn">3</div>
                <div>
                  <div className="rt">Human approval</div>
                  <div className="rd">Analyst approves the single move</div>
                  <span className="rtag">AWAITING · 1 CLICK</span>
                </div>
              </div>
              <div className="rstep">
                <div className="rn">4</div>
                <div>
                  <div className="rt">Contained &amp; evidenced</div>
                  <div className="rd">Tamper-proof record written automatically</div>
                </div>
              </div>
            </div>
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
            <div className="vis-k">Framework coverage</div>
            <div className="frm">
              <div className="frm-grid">
                <div className="fchip lit">RBI</div>
                <div className="fchip lit">SEBI</div>
                <div className="fchip lit">CERT-In</div>
                <div className="fchip lit">DPDP</div>
                <div className="fchip">ISO 27001</div>
                <div className="fchip">NIST CSF</div>
                <div className="fchip">CIS v8</div>
                <div className="fchip">PCI-DSS</div>
                <div className="fchip">SOC 2</div>
                <div className="fchip">IRDAI</div>
                <div className="fchip">NCIIPC</div>
                <div className="fchip">MeitY</div>
              </div>
              <div className="frm-foot">
                <div className="seal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="ft">
                  <b>Tamper-proof evidence chain</b> — CERT-In six-hour report generated on demand.
                </div>
              </div>
            </div>
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
