const SOLUTIONS = [
  {
    t: 'Identity and Zero Trust Security',
    d: 'IAM, MFA, PAM, ZTNA, access-policy design and micro-segmentation workflows.',
    icon: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" /></>,
  },
  {
    t: 'Endpoint, Network and Infrastructure Security',
    d: 'EDR/XDR protection, NGFW deployment, network detection and response, infrastructure hardening, and architecture modernization.',
    icon: <><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9.5 12l2 2 3.5-4" /></>,
  },
  {
    t: 'Cloud and Workload Security',
    d: 'Cloud posture management, CSPM/CNAPP deployment, secure landing zones, container security, and cloud incident readiness.',
    icon: <><path d="M6.5 18a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 8.2 4 4 0 0 1 18 16H7z" /><path d="M9.5 13l2 2 3-3.5" /></>,
  },
  {
    t: 'Security Operations and Managed Detection',
    d: 'SIEM optimization, SOC transformation, managed threat hunting, detection engineering, and forensics support.',
    icon: <><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-7" /></>,
  },
  {
    t: 'Exposure, Validation and Security Assurance',
    d: 'Vulnerability management, External Attack Surface Management (EASM), VAPT, breach simulation, and cyber risk quantification.',
    icon: <><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" /><path d="M11 8v6M8 11h6" /></>,
  },
  {
    t: 'Application, API and DevSecOps Security',
    d: 'SAST/DAST/SCA analytics, API protection, secure SDLC tracking, and AI application security assessments.',
    icon: <><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" /></>,
  },
  {
    t: 'Data Security, Privacy and AI Governance',
    d: 'Data classification, DLP, DSPM frameworks, shadow-AI discovery, and privacy protection advisory.',
    icon: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></>,
  },
  {
    t: 'OT, ICS and Critical Infrastructure Security',
    d: 'OT asset discovery, ICS network visibility, secure remote access, IT/OT convergence, and sector resilience assessments.',
    icon: <><path d="M3 20h18M5 20V10l5 3V10l5 3V6l4 2v12" /><path d="M8 20v-3M15 20v-3" /></>,
  },
  {
    t: 'Governance, Risk, Compliance and Resilience',
    d: 'Maturity gap reviews, NIST framework alignment, ISO 27001 implementation, and board-level risk reporting.',
    icon: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
  },
]

const PILLARS = [
  {
    t: 'Advisory and Consulting',
    d: 'Strategy blueprints, gap assessments, and zero-trust roadmap designs.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></>,
  },
  {
    t: 'Implementation and Integration',
    d: 'Technology migration, tool tuning, and policy and configuration hardening.',
    icon: <><path d="M14 6a3.5 3.5 0 0 0-4.7 4.3L4 15.6 6.4 18l5.3-5.3A3.5 3.5 0 0 0 16 8l-2 2-2-2z" /></>,
  },
  {
    t: 'Managed Security Services',
    d: 'Managed detection and response, SOC support operations, and compliance monitoring.',
    icon: <><path d="M4 13a8 8 0 0 1 16 0" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /></>,
  },
  {
    t: 'Cybersecurity Talent and Specialist Services',
    d: 'Contract staffing, permanent strategic hiring, and project-based engineering augmentation.',
    icon: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 8.5a3 3 0 0 1 4 4M17 19a5 5 0 0 0-3-4.6" /></>,
  },
]

const svg = (paths: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
)

export default function Page() {
  return (
    <>
      {/* HERO */}
      <header className="hero wrap">
        <span className="kicker rev">SOLUTIONS &amp; SERVICES PORTFOLIO</span>
        <h1 className="rev">Cybersecurity Solutions &amp; <span className="em">Services Portfolio</span>.</h1>
        <p className="sub rev">Kaska Technologies operates as a vendor-agnostic cybersecurity solutions and services integrator across Enterprise, Government, Defense, and Critical Infrastructure ecosystems — unified by Kaska EM to continuously validate controls, quantify risk, and improve operational resilience.</p>
        <div className="ctas rev">
          <a className="act" href="/contact">Talk to us about your programme
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="ghost" href="/">See the platform</a>
        </div>
      </header>

      {/* SOLUTIONS PORTFOLIO — nine capability sets */}
      <section className="wrap tint">
        <div className="sec-head center rev">
          <span className="kicker">SOLUTIONS PORTFOLIO</span>
          <h2 style={{ marginTop: '18px' }}>Nine capability sets, <span className="em">one accountable partner</span>.</h2>
          <p className="lead">A customer-outcome-led portfolio — technologies selected per opportunity for your environment, risk profile and regulatory obligations, then unified by Kaska EM.</p>
        </div>
        <div className="cat-grid">
          {SOLUTIONS.map((s) => (
            <div className="card rev" key={s.t}>
              <div className="ic">{svg(s.icon)}</div>
              <span className="ck">{s.t}</span>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PORTFOLIO — four delivery pillars */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">SERVICE PILLARS</span>
          <h2 style={{ marginTop: '18px' }}>Four ways we <span className="em">deliver</span>.</h2>
          <p className="lead">Repeatable delivery models spanning assessment, implementation, managed services and specialist talent.</p>
        </div>
        <div className="row2" style={{ marginTop: '48px', gap: '22px' }}>
          {PILLARS.map((p) => (
            <div className="card rev" key={p.t}>
              <div className="ic">{svg(p.icon)}</div>
              <span className="ck">{p.t}</span>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="wrap tint">
        <div className="rev" style={{ maxWidth: '58rem', margin: '0 auto', textAlign: 'center', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)', padding: '48px 0' }}>
          <span className="kicker" style={{ display: 'inline-block', marginBottom: '20px' }}>ONE ACCOUNTABLE PARTNER</span>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(21px,2.8vw,30px)', lineHeight: 1.4, letterSpacing: '-.01em' }}>Kaska Technologies delivers the right cybersecurity technologies, specialist expertise, and managed services — <span className="em">unified by Kaska EM to continuously validate controls, quantify risk, and improve cyber resilience</span>.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wrap final">
        <div className="rev">
          <span className="kicker">GET STARTED</span>
          <h2 style={{ marginTop: '18px' }}>Talk to us about <span className="em">your programme.</span></h2>
          <div className="ctas">
            <a className="act" href="/contact">Talk to us about your programme
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="ghost" href="/">See the platform</a>
          </div>
        </div>
      </section>
    </>
  );
}
