export default function Page() {
  return (
    <>
      {/* HERO */}
      <header className="hero wrap">
        <span className="kicker rev">THE PLATFORM · KASKA EM</span>
        <h1 className="rev">Everything the platform does — and <span className="em">why</span> it matters.</h1>
        <p className="sub rev">Kaska sits above the security tools you already own — proving your controls work, pricing your risk in financial terms, and containing what fires, all on one asset-centric spine.</p>
        <div className="ctas rev">
          <a className="act" href="https://app.kaskatech.com/register">Request early access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="ghost" href="/contact">Book a walkthrough</a>
        </div>

        {/* CENTERPIECE: above-the-stack emblem (CSS/SVG only) */}
        <div className="emblem rev">
          <div className="emblem-card">
            <div className="emblem-head">
              <span className="lbl">Where Kaska sits</span>
              <span className="live"><span className="dot"></span>ABOVE THE STACK</span>
            </div>
            <div className="stackfig">
              {/* board */}
              <div className="sf-tier">
                <div className="sf-lbl"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 16v-3M12 16V8M16 16v-6" /></svg></span>Board &amp; executive view</div>
                <div className="sf-row">
                  <div className="sf-chip">Risk in financial terms</div>
                  <div className="sf-chip">Resilience score</div>
                  <div className="sf-chip">Compliance standing</div>
                </div>
              </div>

              <div className="sf-flow"><svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M6 16l6 6 6-6" /></svg></div>

              {/* kaska */}
              <div className="sf-tier sf-kaska">
                <div className="sf-lbl"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M12 2 L21 6 V13 C21 18.5 17 22 12 23 C7 22 3 18.5 3 13 V6 Z" /><path d="M8.5 12.5 L11 15 L16 9.5" strokeLinecap="round" /></svg></span>Kaska intelligence — above the stack</div>
                <div className="sf-row">
                  <div className="sf-chip">Pre-breach</div>
                  <div className="sf-chip">Real-time</div>
                  <div className="sf-chip">Post-breach</div>
                </div>
                <div className="sf-spine"><span className="ln"></span>Asset graph spine<span className="ln"></span></div>
              </div>

              <div className="sf-flow"><svg viewBox="0 0 24 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M6 16l6 6 6-6" /></svg></div>

              {/* tools */}
              <div className="sf-tier">
                <div className="sf-lbl"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1.4" /><rect x="3" y="15" width="18" height="5" rx="1.4" /><path d="M7 6.5h.01M7 17.5h.01" /></svg></span>Your existing tools — read-only</div>
                <div className="sf-row">
                  <div className="sf-chip">SIEM / XDR</div>
                  <div className="sf-chip">EDR</div>
                  <div className="sf-chip">Cloud</div>
                  <div className="sf-chip">Identity</div>
                  <div className="sf-chip">OT</div>
                </div>
              </div>
            </div>
            <div className="sf-cap"><b>Nothing ripped out.</b> Kaska reads the stack you already run and turns it into one picture.</div>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="wrap" style={{ paddingTop: '20px' }}>
        <div className="prob">
          <div className="ptext rev">
            <span className="kicker">THE PROBLEM</span>
            <h2 style={{ marginTop: '18px' }}>Most security is <span className="em">assumed</span>, not proven.</h2>
            <p>Every tool on your floor reports green while real gaps stay open — an EDR left in detection-only mode, a flat finance network, a standing admin no one revoked. The dashboards look calm right up to the moment they don't.</p>
            <p>Meanwhile the board hears red-amber-green, never a number they can act on. And when something finally fires, no one can prove what happened, what contained it, or that the controls were ever enforced at all.</p>
          </div>
          <div className="prob-ill rev">
            <div className="vis-k">What the console says vs. what's true</div>
            <div className="gsline"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9.5 12l2 2 3.5-4" /></svg></span><span className="lt">EDR deployed on every endpoint</span><span className="st green">Reported: OK</span></div>
            <div className="gsline bad"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg></span><span className="lt">…but running in detection-only mode</span><span className="st hidden">Actual: gap</span></div>
            <div className="gsline"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9.5 12l2 2 3.5-4" /></svg></span><span className="lt">Network segmentation in place</span><span className="st green">Reported: OK</span></div>
            <div className="gsline bad"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg></span><span className="lt">…finance VLAN reachable, flat</span><span className="st hidden">Actual: gap</span></div>
            <div className="gsline bad"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg></span><span className="lt">Domain admin on an AP user account</span><span className="st hidden">Actual: gap</span></div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head center rev">
          <span className="kicker">KEY FEATURES</span>
          <h2 style={{ marginTop: '18px' }}>One platform. Every capability <span className="em">that matters</span>.</h2>
          <p className="lead">Sixteen capabilities across the full lifecycle — before a breach, the moment it strikes, and after — each tied to the same asset spine.</p>
        </div>
        <div className="feat-grid">

          {/* PRE-BREACH */}
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9 12l2 2 4-4.5" /></svg></span><span className="grp pre">Pre-breach</span></div>
            <h3>Control Validation</h3>
            <p>Proves controls are actually enforced — ~1,399 checks across 31 domains.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-7" /><circle cx="16" cy="9" r="1.4" fill="currentColor" stroke="none" /></svg></span><span className="grp pre">Pre-breach</span></div>
            <h3>Cyber Risk Quantification</h3>
            <p>Every gap priced in financial terms, FAIR-style, for the board.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="6" r="2.2" /><circle cx="19" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.4" /><path d="M7 6.6 10.5 16M17 6.6 13.5 16M7.2 6H16.8" /></svg></span><span className="grp pre">Pre-breach</span></div>
            <h3>Attack Path Analysis</h3>
            <p>The routes to your crown-jewel assets — mapped, and cut.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.4" /><circle cx="4" cy="6" r="1.8" /><circle cx="20" cy="6" r="1.8" /><circle cx="4" cy="18" r="1.8" /><circle cx="20" cy="18" r="1.8" /><path d="M5.6 6.7 10 11M18.4 6.7 14 11M5.6 17.3 10 13M18.4 17.3 14 13" /></svg></span><span className="grp pre">Pre-breach</span></div>
            <h3>Asset Intelligence</h3>
            <p>One asset spine; every signal ties to an asset and its exposure.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6.5 7 .7-5.2 4.7 1.5 6.9L12 17.8 5.7 21.5l1.5-6.9L2 9.9l7-.7z" /></svg></span><span className="grp pre">Pre-breach</span></div>
            <h3>Asset Criticality</h3>
            <p>Ranks what matters most by business impact (C/I/A).</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" /><path d="M11 8v3l2 1.5" /></svg></span><span className="grp pre">Pre-breach</span></div>
            <h3>Exposure &amp; Threat Intelligence</h3>
            <p>Live CVE, EPSS and KEV — what's exploitable and reachable now.</p>
          </div>

          {/* REAL-TIME */}
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l2.5 7 5-15L18 12h4" /></svg></span><span className="grp rt">Real-time</span></div>
            <h3>Detection Intelligence</h3>
            <p>Correlated incidents from your SIEM/XDR, traced to the failed control.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M12 8v4M12 15h.01" /></svg></span><span className="grp rt">Real-time</span></div>
            <h3>Governed Response</h3>
            <p>One reversible, human-approved move to contain — fully evidenced.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H7l-3 3z" /><path d="M8 10l2 2 4-4" /></svg></span><span className="grp rt">Real-time</span></div>
            <h3>Cases &amp; Approvals</h3>
            <p>Every action reviewed, approved and recorded — a governed loop.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" /></svg></span><span className="grp rt">Real-time</span></div>
            <h3>SOC Analyst AI</h3>
            <p>Autonomous investigation that explains the root cause in plain language.</p>
          </div>

          {/* POST-BREACH */}
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 1 3 6.7" /><path d="M3 20v-5h5" /><path d="M12 8v4l3 2" /></svg></span><span className="grp post">Post-breach</span></div>
            <h3>Recovery Orchestration</h3>
            <p>A guided runbook to restore service and prove recovery.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l5 5v13H7z" transform="translate(-1 0)" /><path d="M13 3v5h5" transform="translate(-1 0)" /><path d="M8 13l2 2 4-4" /></svg></span><span className="grp post">Post-breach</span></div>
            <h3>Evidence &amp; Reporting</h3>
            <p>Tamper-proof, hash-sealed evidence and a CERT-In six-hour filing.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V5z" /><path d="M9 12l2 2 4-4" /></svg></span><span className="grp post">Post-breach</span></div>
            <h3>Compliance</h3>
            <p>17 frameworks — RBI, SEBI, CERT-In, DPDP, ISO, NIST — from one control test.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="1.6" /><path d="M7 14l3-3 2 2 4-5" /><path d="M9 21h6" /></svg></span><span className="grp post">Post-breach</span></div>
            <h3>Board &amp; Executive Reporting</h3>
            <p>The board-risk story your board and regulator accept.</p>
          </div>

          {/* PLATFORM */}
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6l-5 6 5 6M16 6l5 6-5 6" /><path d="M13 4l-2 16" /></svg></span><span className="grp plat">Platform</span></div>
            <h3>Connectors</h3>
            <p>Reads your existing tools via API and keeps only the minimum — data stays put.</p>
          </div>
          <div className="fcard rev">
            <div className="top"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg></span><span className="grp plat">Platform</span></div>
            <h3>Deployment &amp; Data Residency</h3>
            <p>SaaS, private cloud, on-premise or air-gapped — hosted in India.</p>
          </div>

        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM */}
      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head center rev">
          <span className="kicker">ARCHITECTURE</span>
          <h2 style={{ marginTop: '18px' }}>How it fits — <span className="em">above</span> your stack.</h2>
          <p className="lead">One asset-centric layer between the board and the tools — reading them read-only, and turning every signal into a decision.</p>
        </div>

        <div className="arch-scroll rev">
          <div className="arch">

            {/* TOP: board */}
            <div className="arow abox a-board">
              <div className="albl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="1.5" /><path d="M7 14l3-3 2 2 4-5" /><path d="M9 21h6" /></svg>Board &amp; executive view</div>
              <div className="achips">
                <span className="achip">Risk in financial terms</span>
                <span className="achip">Resilience score</span>
                <span className="achip">Compliance standing</span>
              </div>
            </div>

            <div className="aflow fl-brass"><svg viewBox="0 0 24 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v28M6 24l6 6 6-6" opacity=".7" /></svg></div>

            {/* KASKA intelligence */}
            <div className="arow abox a-kaska">
              <div className="albl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M12 2 L21 6 V13 C21 18.5 17 22 12 23 C7 22 3 18.5 3 13 V6 Z" /><path d="M8.5 12.5 L11 15 L16 9.5" strokeLinecap="round" /></svg>Kaska intelligence — above the stack<span className="tinychip">vendor-agnostic</span></div>
              <div className="a-cols">
                <div className="a-col pre">
                  <div className="ct">Pre-breach</div>
                  <ul><li>Control Validation</li><li>Attack Paths</li><li>Cyber Risk Quantification</li><li>Exposure Intelligence</li></ul>
                </div>
                <div className="a-col rt">
                  <div className="ct">Real-time</div>
                  <ul><li>Detection</li><li>Governed Response</li><li>Cases &amp; Approvals</li><li>SOC Analyst</li></ul>
                </div>
                <div className="a-col post">
                  <div className="ct">Post-breach</div>
                  <ul><li>Recovery</li><li>Evidence</li><li>Compliance</li></ul>
                </div>
              </div>
            </div>

            <div className="aflow fl-money"><svg viewBox="0 0 24 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v28M6 24l6 6 6-6" opacity=".7" /></svg></div>

            {/* SPINE */}
            <div className="arow abox a-spine">
              <span className="sp-t">Asset graph spine</span>
              <div className="sp-items">
                <span className="achip">Assets</span>
                <span className="achip">Identities</span>
                <span className="achip">Controls</span>
                <span className="achip">Exposures</span>
              </div>
            </div>

            <div className="aflow fl-faint"><svg viewBox="0 0 24 34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 32V4M6 10l6-6 6 6" opacity=".6" /></svg></div>

            {/* TOOLS */}
            <div className="arow abox a-tools">
              <div className="albl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1.4" /><rect x="3" y="15" width="18" height="5" rx="1.4" /><path d="M7 6.5h.01M7 17.5h.01" /></svg>Your existing tools — read-only, data stays put</div>
              <div className="achips">
                <span className="achip">SIEM / XDR</span>
                <span className="achip">EDR</span>
                <span className="achip">Cloud / CSPM</span>
                <span className="achip">Identity</span>
                <span className="achip">Vulnerability</span>
                <span className="achip">OT</span>
                <span className="achip">Email</span>
              </div>
            </div>

            <div className="arch-cap"><b>Kaska sits above the tools you already own</b> — nothing ripped out.</div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="ben">
          <div className="ben-panel rev">
            <span className="kicker">THE OUTCOME</span>
            <h2>Prove it. Price it. <span className="em">Prevent it.</span></h2>
            <p>The same asset spine that finds the gap prices it, contains what fires, and proves it to a regulator — one loop, one number, one source of truth.</p>
          </div>
          <div className="ben-list rev">
            <div className="upoint">
              <span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>
              <div><b>Cut real risk, not noise</b><span className="d">Fix the few gaps that carry the exposure — ranked by the financial impact behind them, not alert volume.</span></div>
            </div>
            <div className="upoint">
              <span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>
              <div><b>A number your board can act on</b><span className="d">Risk in financial terms, quarter on quarter — a trend line, not a colour that never changes.</span></div>
            </div>
            <div className="upoint">
              <span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>
              <div><b>Regulator-ready</b><span className="d">Evidence a CERT-In or RBI audit will accept — hash-sealed, on demand, without a fire drill.</span></div>
            </div>
            <div className="upoint">
              <span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>
              <div><b>Stronger insurance position</b><span className="d">Provable, enforced control is the case underwriters look for at renewal.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="wrap" style={{ paddingTop: 0 }}>
        <div className="sec-head rev">
          <span className="kicker">RESOURCES</span>
          <h2 style={{ marginTop: '18px' }}>Go <span className="em">deeper</span>.</h2>
        </div>
        <div className="res-grid">
          <a className="res rev" href="#">
            <div className="meta"><span className="dt">2026</span>WHITEPAPER</div>
            <h3>Kaska Technical Whitepaper</h3>
            <span className="read">Read <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
          </a>
          <a className="res rev" href="#">
            <div className="meta"><span className="dt">2026</span>ONE-PAGER</div>
            <h3>Data Governance &amp; Trust</h3>
            <span className="read">Read <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
          </a>
          <a className="res rev" href="#">
            <div className="meta"><span className="dt">2026</span>EXPLAINER</div>
            <h3>Cyber Risk, Quantified</h3>
            <span className="read">Read <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
          </a>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="band">
        <div className="wrap inner rev">
          <span className="kicker">SEE KASKA IN ACTION</span>
          <h2 style={{ marginTop: '18px' }}>See it on your <span className="em">own stack.</span></h2>
          <div className="ctas">
            <a className="act" href="https://app.kaskatech.com/register">Request early access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="ghost" href="/contact">Talk to us</a>
          </div>
        </div>
      </section>
    </>
  );
}
