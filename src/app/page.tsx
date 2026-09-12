export default function Page() {
  return (
    <div className="hp-root">
      <style>{`
        .hp-root{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:90px 22px;position:relative;z-index:1}
        .hp-top{position:fixed;top:0;left:0;right:0;height:72px;display:flex;align-items:center;padding:0 clamp(20px,5vw,54px);z-index:3}
        .hp-brand{display:flex;align-items:center;gap:11px}
        .hp-brand svg{width:24px;height:26px;color:var(--brass)}
        .hp-wm{font-family:var(--serif);font-weight:600;font-size:21px;color:var(--ink)}
        .hp-div{width:1px;height:20px;background:var(--hair)}
        .hp-desc{font-family:var(--mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
        .hp-kick{font-family:var(--mono);font-size:11.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);display:inline-flex;align-items:center;gap:12px;margin-bottom:26px;flex-wrap:wrap;justify-content:center}
        .hp-kick .ln{width:26px;height:1px;background:var(--brass)}
        .hp-h1{font-family:var(--serif);font-weight:400;font-size:clamp(46px,9vw,104px);line-height:1;letter-spacing:-.02em;color:var(--ink);margin:0}
        .hp-h1 em{font-style:italic;font-weight:500;background:linear-gradient(94deg,var(--brass-hi),var(--brass) 55%,#9c7a34);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
        .hp-sub{margin:30px auto 0;max-width:60ch;color:var(--muted);font-size:clamp(15px,2.2vw,18px);line-height:1.65}
        .hp-sub b{color:var(--ink);font-weight:600}
        .hp-cta{margin-top:38px;display:flex;gap:16px;align-items:center;justify-content:center;flex-wrap:wrap}
        .hp-act{display:inline-flex;align-items:center;gap:9px;font-family:var(--sans);font-weight:600;font-size:14.5px;color:#12100A;background:linear-gradient(180deg,var(--brass-hi),var(--brass));padding:13px 22px;border-radius:9px;text-decoration:none;box-shadow:0 8px 26px rgba(200,155,69,.25)}
        .hp-mail{color:var(--muted);font-family:var(--mono);font-size:13px;text-decoration:none}
        .hp-foot{position:fixed;bottom:20px;left:0;right:0;text-align:center;color:var(--faint);font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;z-index:3}
      `}</style>
      <div className="hp-top"><div className="hp-brand">
        <svg viewBox="0 0 26 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M13 2 L23 6 V14 C23 20 18.5 24.5 13 26 C7.5 24.5 3 20 3 14 V6 Z"/><path d="M8.5 13.5 L11.5 16.5 L17.5 10" strokeLinecap="round"/></svg>
        <span className="hp-wm">Kaska</span><span className="hp-div"></span><span className="hp-desc">Exposure Management</span>
      </div></div>
      <span className="hp-kick"><span className="ln"></span>The Autonomous Cyber Risk &amp; Resilience Platform</span>
      <h1 className="hp-h1">Launching <em>shortly</em>.</h1>
      <p className="hp-sub">Kaska helps you <b>know your risk before attackers do</b> &mdash; and own your real-time resilience. Built from the ashes of real-world breaches. We&rsquo;re putting the finishing touches on it.</p>
      <div className="hp-cta"><a className="hp-act" href="https://app.kaskatech.com/register">Request early access &rarr;</a><a className="hp-mail" href="mailto:hello@kaskatech.com">hello@kaskatech.com</a></div>
      <div className="hp-foot">&copy; 2026 Kaska Technologies &middot; kaskatech.com</div>
    </div>
  )
}
