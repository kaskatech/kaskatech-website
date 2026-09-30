import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero, StackDiagram, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Integrations — Kaska',
  description:
    'Kaska Exposure Management Platform™ is vendor-agnostic. It is designed to connect to the security tools you already run, from SIEM and EDR to identity, cloud, email, OT and backup, and to keep only the signal it needs.',
}

// OEMs listed are those the connector framework is built for. A listing is not a live-proven
// integration, so no counts are published: status is confirmed per customer stack during evaluation.
const LANES: [string, string[]][] = [
  ['SIEM / XDR', ['Microsoft Sentinel', 'Splunk', 'IBM QRadar', 'Google Chronicle', 'Palo Alto Cortex', 'Elastic']],
  ['Endpoint (EDR)', ['CrowdStrike', 'SentinelOne', 'Microsoft Defender', 'Trend Micro', 'VMware Carbon Black']],
  ['Identity & access', ['Okta', 'Microsoft Entra ID', 'SailPoint', 'Saviynt', 'Ping Identity']],
  ['Privileged access', ['CyberArk', 'BeyondTrust', 'ManageEngine', 'Arcon']],
  ['Firewall & network', ['Palo Alto', 'Fortinet', 'Check Point', 'Cisco', 'Zscaler', 'Cloudflare']],
  ['WAF / DDoS', ['Cloudflare', 'Imperva', 'F5', 'Radware', 'AWS WAF']],
  ['Email gateways', ['Proofpoint', 'Mimecast', 'Microsoft', 'Cisco', 'Barracuda']],
  ['Cloud posture', ['AWS Security Hub', 'Microsoft Defender for Cloud', 'Google SCC']],
  ['Vulnerability management', ['Tenable', 'Qualys', 'Rapid7']],
  ['Data security', ['Forcepoint', 'Varonis', 'Microsoft Purview', 'BigID']],
  ['OT / ICS', ['Claroty', 'Dragos', 'Nozomi']],
  ['Backup & recovery', ['Veeam', 'Commvault', 'Rubrik']],
  ['GRC platforms', ['ServiceNow', 'RSA Archer', 'MetricStream', 'OneTrust']],
]
const FEEDS = ['CISA KEV', 'MITRE ATT&CK']
const MORE_FEEDS = ['NVD / CVE', 'EPSS', 'abuse.ch']

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Kaska EM · Integrations"
        title={<>Above the stack you <em>already run</em>.</>}
        lede="Kaska doesn't scan, block or replace. It is designed to read the tools you already own through a common connector framework, keep only the signal it needs, and connect it all around the asset."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('em')}>Ask about your stack<Arrow /></Link>
          <Link className="btn btn-q" href="/exposure-management">About Kaska EM</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">How it fits</span>
          <h2 className="h2 mt-s" style={{ maxWidth: '18ch' }}>Your tools in. <em>Understanding</em> out.</h2>
          <StackDiagram />
        </div>
      </section>

      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Coverage by category</span>
              <h2 className="h2 mt-s">Every lane of your <em>security stack</em>.</h2>
            </div>
            <p className="lede">Representative vendors in each category. Integrations are built to one common model, so adding a vendor is focused work, not a rebuild.</p>
          </div>
          <div className="elist two mt-m">
            {LANES.map(([c, o]) => (
              <div key={c}><b>{c}</b><p>{o.join(' · ')}</p></div>
            ))}
          </div>
          <p className="note mt-s">Vendors listed are those the connector framework is built for. Integration status varies by vendor and version, and is confirmed for your stack before any commitment.</p>
        </div>
      </section>

      <section className="s-deep sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">Public intelligence</span>
            <h2 className="h3 mt-s">Known-exploited vulnerabilities and attacker techniques.</h2>
            <p className="body mt-s">CISA KEV and MITRE ATT&amp;CK supply the exploitability and technique context behind prioritisation, with no customer credentials required.</p>
          </div>
          <div>
            <div className="vre" style={{ marginTop: 0 }}>{FEEDS.map((f) => <span key={f}>{f}</span>)}</div>
            <p className="note mt-s">Additional intelligence sources supported, under evaluation: {MORE_FEEDS.join(' · ')}.</p>
          </div>
        </div>
      </section>

      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">How it connects</span>
          <h2 className="h2 mt-s">Two ways in. <em>Nothing out of your control.</em></h2>
          <div className="cols3 mt-m">
            <div><b>Cloud-to-cloud</b><p>SIEM, cloud, identity and email tools are designed to connect through vendor APIs, with no agent or appliance.</p></div>
            <div><b>Outbound collector</b><p>Tools behind the perimeter, such as firewalls, EDR, PAM and OT, are designed to reach Kaska through one light, outbound-only collector.</p></div>
            <div><b>Least privilege</b><p>Read-only access wherever possible. Connector credentials are encrypted at rest, and only the minimum signal is kept.</p></div>
          </div>
        </div>
      </section>

      <Close kicker="Tell us your stack" title={<>We&apos;ll map it to <em>Kaska</em>.</>} text="Share the tools you run. We'll confirm integration fit and status for each before any commitment." />
    </>
  )
}
