export default function Page() {
  return (
    <>
      {/* HERO */}
      <header className="hero wrap">
        <span className="kicker rev">TECHNOLOGY SOLUTIONS</span>
        <h1 className="rev">The security tools that protect you — <span className="em">deployed and run</span> for you.</h1>
        <p className="sub rev">Alongside our own platform, Kaska delivers best-of-breed security tools — selected for your stack and your regulator, licensed, implemented and managed through Kaska.</p>
        <div className="ctas rev">
          <a className="act" href="/contact">Talk to us about your stack
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="ghost" href="/">See the platform</a>
        </div>

        {/* HERO VISUAL */}
        <div className="tsvis rev">
          <div className="tsvis-card">
            <div className="tsvis-head">
              <span className="lbl">Your stack · selected, implemented, managed</span>
              <span className="live"><span className="dot"></span>MANAGED BY KASKA</span>
            </div>
            <div className="ts-row">
              <div className="ts-col">
                <span className="cap">Selected for you</span>
                <span className="ts-chip"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 12l2 2 4-4" /></svg></span>Endpoint &amp; MDR</span>
                <span className="ts-chip"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-7" /></svg></span>Managed SOC</span>
                <span className="ts-chip"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /></svg></span>PAM &amp; OT</span>
              </div>
              <span className="ts-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              <div className="ts-col">
                <span className="cap">Licensed &amp; implemented</span>
                <span className="ts-chip"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h10" /></svg></span>Tuned to your regulator</span>
                <span className="ts-chip"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg></span>Deployed to your estate</span>
                <span className="ts-chip"><span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M6 9l6-6 6 6" /></svg></span>Rolled out with your team</span>
              </div>
              <span className="ts-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              <div className="ts-col">
                <span className="cap">Run &amp; optimised</span>
                <div className="ts-run">
                  <span className="runrow"><span className="st"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>Watched around the clock</span>
                  <span className="runrow"><span className="st"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>Proven enforced, not shelved</span>
                  <span className="runrow"><span className="st"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span>One partner accountable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <section className="wrap tint">
        <div className="sec-head center rev">
          <span className="kicker">THE PROBLEM</span>
          <h2 style={{ marginTop: '18px' }}>Buying tools is easy. Making them <span className="em">work</span> is not.</h2>
        </div>
        <div className="twopara">
          <p className="rev">Most organisations already own capable security tools. But a licence is not protection. Tools get bought in a hurry, half-configured, then left in default mode or barely used — and <b>no one can prove they are actually enforced</b>. The gap the attacker walks through was paid for years ago.</p>
          <p className="rev">And running these tools properly is a job in itself. The skills to tune, monitor and respond on them <b>24×7 are scarce and expensive</b> — so consoles go unwatched, alerts pile up, and the value you paid for quietly leaks away. The problem is rarely the tool. It is that no one is making it work.</p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">WHAT WE DELIVER</span>
          <h2 style={{ marginTop: '18px' }}>Best-of-breed tools, <span className="em">selected and managed</span>.</h2>
          <p className="lead">Chosen for your environment and your regulator — implemented and run through Kaska.</p>
        </div>
        <div className="cat-grid">
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 12l2 2 4-4" /></svg></div>
            <span className="ck">Endpoint &amp; MDR</span>
            <p>Stops attacks at the device, watched around the clock.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-7" /></svg></div>
            <span className="ck">Managed SOC (SIEM)</span>
            <p>Round-the-clock monitoring and response on your logs.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" /><path d="M11 8v6M8 11h6" /></svg></div>
            <span className="ck">Vulnerability &amp; VAPT</span>
            <p>Find and fix the holes attackers scan for.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" /></svg></div>
            <span className="ck">Privileged Access (PAM)</span>
            <p>Locks down admin access — an RBI must-have.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg></div>
            <span className="ck">OT Security</span>
            <p>Protects plant and grid systems under CEA 2025.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 8.2 4 4 0 0 1 18 16H7z" /><path d="M12 11l-2 3h4l-2 3" /></svg></div>
            <span className="ck">Cloud &amp; Email Security</span>
            <p>Closes the two routes attackers use most.</p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="wrap tint">
        <div className="sec-head center rev">
          <span className="kicker">HOW WE WORK</span>
          <h2 style={{ marginTop: '18px' }}>Three steps, <span className="em">one partner</span>.</h2>
        </div>
        <div className="steps">
          <div className="step rev">
            <span className="sn">01 / 03</span>
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" /></svg></div>
            <h3>Assess your stack</h3>
            <p>We map what you already own, where it is enforced, and where the real gaps are.</p>
          </div>
          <div className="step rev">
            <span className="sn">02 / 03</span>
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9.5 12l2 2 3.5-4" /></svg></div>
            <h3>License &amp; implement</h3>
            <p>We license the right tools and deploy them, tuned to your environment and regulator.</p>
          </div>
          <div className="step rev">
            <span className="sn">03 / 03</span>
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0-8-8" /><path d="M12 8v4l3 2" /><path d="M4 12l-2-2M4 12l2-2" /></svg></div>
            <h3>Run &amp; optimise</h3>
            <p>We operate and continuously tune the tools so they keep protecting you — day after day.</p>
          </div>
        </div>
        <p className="notice rev">Named platforms shown once each partnership is in place. Available direct and through our MSSP partners.</p>
      </section>

      {/* BENEFITS */}
      <section className="wrap">
        <div className="resolve rev">
          <div>
            <span className="kicker">THE OUTCOME</span>
            <h3 style={{ marginTop: '16px' }}>Protection you can prove — not a shelf of licences.</h3>
          </div>
          <div className="rp">
            <div className="upoint"><span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span><span><b>The outcome, not a shelf of licences.</b> You buy protection that works, not software that sits idle.</span></div>
            <div className="upoint"><span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span><span><b>One partner accountable for the whole stack.</b> A single team owns selection, roll-out and day-to-day operation.</span></div>
            <div className="upoint"><span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span><span><b>A natural on-ramp to the Kaska platform.</b> The same tools feed the platform that proves your controls and prices your risk.</span></div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wrap final tint">
        <div className="rev">
          <span className="kicker">GET STARTED</span>
          <h2 style={{ marginTop: '18px' }}>Talk to us about <span className="em">your stack.</span></h2>
          <div className="ctas">
            <a className="act" href="/contact">Talk to us about your stack
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="ghost" href="/">See the platform</a>
          </div>
        </div>
      </section>
    </>
  );
}
