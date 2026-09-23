import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations — Kaska',
  description:
    'Kaska reads the security stack you already run. 150+ connectors across 20+ categories — SIEM/XDR, EDR, identity, cloud, email, OT and more — OEM-agnostic, read-only, data stays put.',
}

// Sourced from the platform connector register (docs/Kaska_Platform_Features.xlsx →
// "All Connectors (Master)"). Counts and marquee OEMs are real entries in that sheet.
type Lane = { cat: string; group: 'detect' | 'protect' | 'identity' | 'data' | 'infra'; count: number; oems: string[] }

const LANES: Lane[] = [
  { cat: 'SIEM / XDR', group: 'detect', count: 12, oems: ['Microsoft Sentinel', 'Splunk', 'IBM QRadar', 'Google Chronicle', 'Palo Alto Cortex', 'Elastic', 'LogRhythm', 'Sumo Logic'] },
  { cat: 'EDR / Endpoint', group: 'detect', count: 7, oems: ['CrowdStrike', 'SentinelOne', 'Microsoft Defender', 'Palo Alto Cortex XDR', 'Trend Micro', 'VMware Carbon Black'] },
  { cat: 'NIPS / HIPS', group: 'detect', count: 12, oems: ['Palo Alto', 'Check Point', 'Cisco', 'Fortinet', 'Trend TippingPoint', 'Trellix', 'Sophos'] },
  { cat: 'Firewall / Network', group: 'protect', count: 6, oems: ['Palo Alto', 'Fortinet', 'Check Point', 'Cisco', 'Zscaler', 'Cloudflare'] },
  { cat: 'WAF / DDoS', group: 'protect', count: 7, oems: ['Cloudflare', 'Imperva', 'F5', 'Radware', 'AWS WAF', 'A10 Networks'] },
  { cat: 'Web / SWG · ZTNA · SASE', group: 'protect', count: 10, oems: ['Zscaler', 'Netskope', 'Palo Alto Prisma', 'Cloudflare', 'Cisco', 'Forcepoint'] },
  { cat: 'Email Security', group: 'protect', count: 7, oems: ['Proofpoint', 'Mimecast', 'Microsoft', 'Cisco', 'Barracuda', 'Check Point'] },
  { cat: 'Identity & Access (IAM)', group: 'identity', count: 10, oems: ['Okta', 'Microsoft Entra ID', 'SailPoint', 'Saviynt', 'Ping Identity', 'Oracle'] },
  { cat: 'Privileged Access (PAM)', group: 'identity', count: 4, oems: ['CyberArk', 'BeyondTrust', 'ManageEngine', 'Arcon'] },
  { cat: 'Network Access Control', group: 'identity', count: 3, oems: ['Cisco ISE', 'Aruba ClearPass', 'Forescout'] },
  { cat: 'Cloud Security (CSPM)', group: 'infra', count: 3, oems: ['AWS Security Hub', 'Microsoft Defender for Cloud', 'Google SCC'] },
  { cat: 'Vulnerability Management', group: 'detect', count: 3, oems: ['Tenable', 'Qualys', 'Rapid7'] },
  { cat: 'Data Security (DLP / DSPM)', group: 'data', count: 10, oems: ['Forcepoint', 'Varonis', 'Microsoft Purview', 'Broadcom', 'BigID', 'Securiti.ai'] },
  { cat: 'Application Security', group: 'detect', count: 5, oems: ['Checkmarx', 'Veracode', 'OpenText Fortify', 'HCL AppScan'] },
  { cat: 'OT / ICS', group: 'infra', count: 3, oems: ['Claroty', 'Dragos', 'Nozomi'] },
  { cat: 'Backup / Recovery', group: 'data', count: 3, oems: ['Veeam', 'Commvault', 'Rubrik'] },
  { cat: 'GRC Platforms', group: 'data', count: 4, oems: ['ServiceNow', 'RSA Archer', 'MetricStream', 'OneTrust'] },
  { cat: 'VPN / Remote Access', group: 'protect', count: 4, oems: ['Cisco', 'Fortinet', 'Check Point', 'Palo Alto'] },
]

const STATS = [
  { v: '150+', k: 'Connectors built' },
  { v: '20+', k: 'Security categories' },
  { v: 'OEM', k: 'Agnostic — no lock-in' },
  { v: 'Read-only', k: 'Your data stays put' },
]

// Credential-free feeds Kaska pulls live out of the box.
const FEEDS = ['CISA KEV', 'NVD / CVE', 'EPSS', 'MITRE ATT&CK', 'abuse.ch', 'CERT-In', 'NCIIPC']

export default function Page() {
  return (
    <>
      {/* HERO */}
      <header className="hero wrap">
        <span className="kicker rev">INTEGRATIONS</span>
        <h1 className="rev">
          Reads the stack you <span className="em">already run</span>.
        </h1>
        <p className="sub rev">
          Kaska is vendor-agnostic by principle. It connects to the security tools you already own —
          over <b>150+ connectors across 20+ categories</b> — reads them read-only, keeps only the
          minimum it needs, and turns every signal into one asset-centric picture. Nothing ripped out.
        </p>
        <div className="ctas rev">
          <a className="act" href="/contact">
            Ask about your stack
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a className="ghost" href="/features">See the platform</a>
        </div>

        <div className="int-stats rev">
          {STATS.map((s) => (
            <div className="int-stat" key={s.k}>
              <div className="v">{s.v}</div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
      </header>

      {/* LIVE FEEDS */}
      <section className="wrap tint" style={{ paddingBottom: 0 }}>
        <div className="sec-head center rev">
          <span className="kicker">LIVE OUT OF THE BOX</span>
          <h2 style={{ marginTop: 18 }}>
            Threat &amp; exposure feeds, <span className="em">no credentials needed</span>.
          </h2>
          <p className="lead">Credential-free intelligence feeds are wired and running from day one — the exploitability signal behind every risk score.</p>
        </div>
        <div className="feed-row rev">
          {FEEDS.map((f) => (
            <span className="feed" key={f}>
              <span className="dot"></span>{f}
            </span>
          ))}
        </div>
      </section>

      {/* LANES */}
      <section className="wrap tint">
        <div className="sec-head center rev">
          <span className="kicker">CONNECTOR COVERAGE</span>
          <h2 style={{ marginTop: 18 }}>
            Every lane of your <span className="em">security stack</span>.
          </h2>
          <p className="lead">A connector for the tools you run — with the marquee OEMs in each category. Built to a common model, so a new vendor is a config, not a rebuild.</p>
        </div>
        <div className="int-grid">
          {LANES.map((l) => (
            <div className={`int-lane g-${l.group} rev`} key={l.cat}>
              <div className="il-head">
                <h3>{l.cat}</h3>
                <span className="il-count">{l.count}</span>
              </div>
              <div className="il-oems">
                {l.oems.map((o) => (
                  <span className="achip" key={o}>{o}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="est-foot rev">
          …and more. <span className="em">Don&apos;t see yours? It&apos;s likely a config away.</span>
        </p>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="wrap">
        <div className="sec-head center rev">
          <span className="kicker">HOW IT CONNECTS</span>
          <h2 style={{ marginTop: 18 }}>Two lanes in. <span className="em">Nothing out of your control.</span></h2>
        </div>
        <div className="prob-grid">
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h10" /><circle cx="19" cy="17" r="2.4" /></svg></div>
            <h3>P1 · Cloud-to-cloud</h3>
            <p>SIEM, cloud, identity, email and threat feeds connect over vendor APIs — no agent, no appliance.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1.4" /><rect x="3" y="15" width="18" height="5" rx="1.4" /><path d="M7 6.5h.01M7 17.5h.01" /></svg></div>
            <h3>P2 · On-prem collector</h3>
            <p>Firewalls, EDR, PAM and OT behind the perimeter reach Kaska through one light, outbound-only collector.</p>
          </div>
          <div className="card rev">
            <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V7z" /><path d="M9.5 12l2 2 3.5-4" /></svg></div>
            <h3>Read-only &amp; encrypted</h3>
            <p>Least-privilege, read-only access. Credentials are AES-256 encrypted; only the minimum signal is kept — your data stays put.</p>
          </div>
        </div>
        <p className="shot-note">Coverage reflects connectors built and unit-tested; each is validated live in your environment during onboarding.</p>
      </section>

      {/* CTA */}
      <section className="wrap final tint">
        <div className="rev">
          <span className="kicker">GET STARTED</span>
          <h2 style={{ marginTop: 18 }}>
            Tell us your stack — <span className="em">we&apos;ll map it.</span>
          </h2>
          <div className="ctas">
            <a className="act" href="/contact">
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="ghost" href="/features">See how it works</a>
          </div>
        </div>
      </section>
    </>
  )
}
