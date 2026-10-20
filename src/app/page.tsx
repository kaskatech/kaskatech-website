import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Kaska — Stop the attack before it starts. Recover fast if it does.',
  description:
    'Kaska Technologies: Vantmail email security, Managed Security Services and Kaska EM, the Cyber Risk & Resilience platform. Security products and services that turn your existing investments into protection you can measure and prove.',
}

const VANTMAIL = 'https://vantmail.ai'
const VANTMAIL_POV = 'https://vantmail.ai/contact'

const SERVICES: [string, string][] = [
  ['SOC / MDR', '24×7 monitoring, triage and response.'],
  ['VAPT & Red Team', 'Applications, infrastructure and cloud — tested and reported.'],
  ['GRC & Compliance', 'CERT-In, DPDP, RBI, ISO 27001 readiness and audits.'],
  ['Identity, Data & AppSec', 'IAM / PAM, data protection and secure development.'],
]

export default function Page() {
  return (
    <>
      {/* HERO + THREE DOORS */}
      <section className="s-dark home-hero">
        <div className="wrap">
          <span className="kicker">Kaska Technologies</span>
          <h1 className="h1 mt-s" style={{ maxWidth: '22ch' }}>
            Stop the attack before it starts. <em>Recover fast if it does.</em>
          </h1>
          <p className="lede mt-s" style={{ maxWidth: '62ch' }}>
            From the inbox to the boardroom — security products and services that turn your existing
            investments into protection you can measure and prove.
          </p>

          <div className="doors">
            <div className="door main">
              <span className="dtag">Email Security</span>
              <h3>Vantmail</h3>
              <p>API-first email security for Microsoft 365, Google Workspace and Zoho Mail. No MX change.</p>
              <ul>
                <li>BEC, QR phishing, malicious links and files</li>
                <li>Evidence behind every verdict</li>
                <li>Live in your tenant in a day — observe mode first</li>
              </ul>
              <a className="btn btn-go" href={VANTMAIL_POV} target="_blank" rel="noopener noreferrer">Start a 14-day proof of value<Arrow /></a>
            </div>
            <div className="door">
              <span className="dtag">Security Services</span>
              <h3>Managed Security</h3>
              <p>Security operations and assurance delivered by Kaska with our OEM partners.</p>
              <ul>
                <li>SOC / MDR</li>
                <li>VAPT &amp; red teaming</li>
                <li>GRC, IAM / PAM, data security</li>
              </ul>
              <Link className="btn btn-q" href="/contact?interest=solutions">Discuss your requirement<Arrow /></Link>
            </div>
            <div className="door">
              <span className="dtag">Cyber Risk &amp; Resilience</span>
              <h3>Kaska EM</h3>
              <p>One live picture of your cyber risk — before, during and after a breach.</p>
              <ul>
                <li>Validated controls, not configured ones</li>
                <li>Breach paths to your crown jewels</li>
                <li>Risk in ranges your board can trust</li>
              </ul>
              <Link className="btn btn-q" href="/contact?interest=kaska-em">Request a briefing<Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="s-dark trust-strip">
        <div className="wrap">
          <span>Works with</span><b>Microsoft 365</b><b>Google Workspace</b><b>Zoho Mail</b>
          <span aria-hidden="true">·</span>
          <span>Aligned to</span><b>CERT-In</b><b>DPDP Act</b><b>RBI</b><b>ISO 27001</b>
        </div>
      </div>

      {/* VANTMAIL */}
      <section className="s-deep sec">
        <div className="wrap split">
          <div>
            <span className="kicker">Vantmail · email security</span>
            <h2 className="h2 mt-s">See what your current filters <em>miss</em>.</h2>
            <p className="lede mt-s">
              Vantmail connects to your mail tenant through the provider&apos;s API — no gateway, no MX change,
              no mail-flow risk. Watch real detections alongside your existing protection, then decide.
            </p>
            <div className="cols3 mt-m pov3">
              <div><span className="n">DAY 1</span><b>Connect in observe mode</b></div>
              <div><span className="n">DAYS 1–14</span><b>Live detections with evidence</b></div>
              <div><span className="n">DAY 14</span><b>Findings report</b></div>
            </div>
            <div className="ctas mt-m">
              <a className="btn btn-go" href={VANTMAIL_POV} target="_blank" rel="noopener noreferrer">Start a proof of value<Arrow /></a>
              <a className="btn btn-q" href={VANTMAIL} target="_blank" rel="noopener noreferrer">Visit vantmail.ai</a>
            </div>
            <Link className="more mt-m" href="/email-security">More about Vantmail</Link>
          </div>
          <div className="mail" aria-label="Illustrative business email compromise example">
            <div className="mail-h">
              <div><b>From</b>Accounts · Meridian Supplies &lt;accounts@meridian-supp1ies.com&gt;</div>
              <div><b>Subject</b>RE: Invoice MS-4471 — updated bank details</div>
            </div>
            <div className="mail-b">Hi, please note our bank account has changed. Kindly process invoice MS-4471 to the new account below before Friday&apos;s payment run.</div>
            <div className="mail-s">
              <span className="h">Signals behind the verdict</span>
              <div className="sg"><i className="w" />Lookalike sender domain</div>
              <div className="sg"><i className="w" />Bank-account change request</div>
              <div className="sg"><i />Reply inside an existing invoice thread</div>
              <div className="vd"><span>Likely BEC · high risk</span><span>Evidence retained</span></div>
            </div>
            <p className="note mt-s">Illustrative example · fictional organisation and message.</p>
          </div>
        </div>
      </section>

      {/* MANAGED SECURITY SERVICES */}
      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Managed Security Services</span>
          <h2 className="h2 mt-s">Security operations, <em>delivered</em>.</h2>
          <p className="lede mt-s" style={{ maxWidth: '64ch' }}>
            For organisations that need outcomes, not more tools to run. Kaska designs, implements and operates
            security with partner technologies — one accountable team.
          </p>
          <div className="cols4 mt-m">
            {SERVICES.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
          {/* Partner logos: intentionally not rendered until real partner logos are provided. */}
          <div className="ctas mt-m">
            <Link className="btn btn-q" href="/contact?interest=solutions">Discuss your requirement</Link>
            <Link className="more" href="/technology-solutions">Explore our services</Link>
          </div>
        </div>
      </section>

      {/* KASKA EM */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="em-box">
            <span className="dtag">Kaska EM</span>
            <h2 className="h2 mt-s">Kaska EM — know your risk <em>before attackers do</em>.</h2>
            <p className="lede mt-s" style={{ maxWidth: '68ch' }}>
              An autonomous cyber risk and resilience platform that sits above the security tools you already
              run. It connects their signals around each asset to show how a breach would happen, what to fix
              first, and what it means for the business.
            </p>
            <div className="cols3 mt-m">
              <div><b>Before a breach</b><p>Exposure, validated controls, attack paths</p></div>
              <div><b>During a breach</b><p>Threat context on your own assets</p></div>
              <div><b>After a breach</b><p>Recovery readiness and resilience</p></div>
            </div>
            <p className="lede mt-m" style={{ maxWidth: '68ch' }}>
              See how Kaska EM would read your environment: a guided briefing with your security team, mapped to
              your own tools and priorities.
            </p>
            <div className="ctas mt-m">
              <Link className="btn btn-go" href="/contact?interest=kaska-em">Request a briefing<Arrow /></Link>
              <Link className="btn btn-q" href="/exposure-management">How Kaska EM works</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KASKA */}
      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Why Kaska</span>
          <h2 className="h2 mt-s">Evidence over <em>claims</em>.</h2>
          <div className="cols3 mt-m">
            <div><b>Built in India</b><p>Designed for Indian regulators, platforms and data residency — Zoho Mail first-class.</p></div>
            <div><b>Evidence-first</b><p>Every verdict and every figure shows where it came from. Unmeasured is never shown as passing.</p></div>
            <div><b>Partner-ready</b><p>Multi-tenant consoles and clear margins for MSPs, MSSPs and resellers.</p></div>
          </div>
          <Link className="more mt-m" href="/company">About Kaska</Link>
        </div>
      </section>
    </>
  )
}
