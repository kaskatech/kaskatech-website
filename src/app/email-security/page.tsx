import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Kaska Email Security — API-First Email Security Platform',
  description:
    'Kaska Email Security is an API-first, post-delivery email security platform for detecting, investigating and responding to phishing, business email compromise, impersonation and other email-borne threats, without requiring an MX change.',
}

const DEMO = demo('email-security')

const EXPLOITS = ['Trusted identities', 'Business relationships', 'Conversation context', 'Executive impersonation', 'Vendor relationships', 'Payment workflows', 'Compromised accounts']

const SPINE = [
  { t: 'Connect', d: 'Microsoft 365 or Google Workspace, through their APIs.' },
  { t: 'Understand', d: 'Authentication, sender and recipient, content, URLs, attachments and relationships.' },
  { t: 'Detect', d: 'Layered analysis producing a verdict, a risk level and its evidence.' },
  { t: 'Investigate', d: 'Why it was flagged, related messages and campaigns, in one case.' },
  { t: 'Respond', d: 'Detect-only, policy-controlled quarantine, analyst allow / block, controlled clawback.' },
  { t: 'Report / Prove', d: 'Audit trail, evidence, security reporting and integration-ready event output.' },
]

const THREATS: [string, string[]][] = [
  ['Phishing', ['Credential theft', 'Malicious URLs', 'QR / quishing']],
  ['Business Email Compromise', ['Vendor impersonation', 'Invoice fraud', 'Payment redirection', 'Bank-account change requests', 'First-time payment requests', 'Reply-chain attacks', 'Thread hijacking']],
  ['Identity & Impersonation', ['Executive impersonation', 'Lookalike domains', 'Sender spoofing', 'Compromised senders']],
  ['Campaigns & Context', ['Campaign clustering', 'Relationship intelligence', 'IOC / reputation signals', 'AI-assisted analysis']],
]

const LAYERS: [string, string][] = [
  ['Metadata', 'headers, routing and sending infrastructure'],
  ['Authentication', 'SPF, DKIM and DMARC results'],
  ['Reputation', 'sender, domain, URL and IOC signals'],
  ['Content / Intent', 'requests, urgency and payment language'],
  ['URL', 'links, redirects and QR codes'],
  ['Attachment', 'file type and attachment analysis'],
  ['Relationship', 'sender–recipient history and business context'],
]

const RESPONSE: [string, string][] = [
  ['Detect', 'Layered analysis produces a verdict, risk and evidence.'],
  ['Investigate', 'Signals, related messages and campaign context in one case.'],
  ['Evidence', 'The rationale behind the verdict is preserved for review.'],
  ['Quarantine', 'Only where policy allows, or on analyst decision.'],
  ['Verify', 'Confirm the campaign scope before acting across mailboxes.'],
  ['Release / Remediate', 'Release false positives, or remediate with controlled clawback.'],
]

const WHO: [string, string][] = [
  ['Enterprise', 'Organisations on Microsoft 365 or Google Workspace that want protection beyond native email controls.'],
  ['BFSI', 'Payment workflows, vendor relationships and executive impersonation are prime targets for BEC.'],
  ['IT / ITES', 'Large, distributed mailboxes and client relationships that attackers try to exploit.'],
  ['Pharma', 'Supplier, partner and research communications that need closer scrutiny.'],
  ['Manufacturing', 'Vendor invoices and procurement workflows exposed to payment fraud.'],
  ['Government / PSU', 'Official communications targeted by impersonation and phishing, subject to your hosting requirements.'],
]

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Kaska Email Security"
        title={<>Protect your mailboxes <em>without changing mail flow</em>.</>}
        lede="API-First Email Security Platform · AI-Powered Email Threat Detection & Response. Protection for Microsoft 365 and Google Workspace against phishing, BEC, impersonation and email-borne threats, with no MX change."
      >
        <div className="vre">{['API-first', 'No MX change', 'Post-delivery', 'Microsoft 365 · Google Workspace'].map((t) => <span key={t}>{t}</span>)}</div>
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={DEMO}>Request a Demo<Arrow /></Link>
          <Link className="btn btn-q" href="/contact">Talk to Kaska</Link>
        </div>
      </PageHero>

      {/* PROBLEM */}
      <section className="s-warm sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">The problem</span>
            <h2 className="h2 mt-s">A dangerous email does not always <em>look dangerous</em>.</h2>
            <p className="lede mt-s">
              Modern email attacks increasingly carry no malware and no obviously bad link. They exploit trust:
              a familiar name, an existing thread, a routine payment request from a supplier you already pay.
            </p>
          </div>
          <div>
            <div className="xlabel"><span>What modern email attacks exploit</span><i /></div>
            <div className="elist two mt-s">
              {EXPLOITS.map((e, i) => <div key={e}><b>{e}</b><p className="note">{String(i + 1).padStart(2, '0')}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="s-dark sec">
        <div className="wrap">
          <span className="kicker">How it works</span>
          <h2 className="h2 mt-s">From connection to <em>proof</em>.</h2>
          <div className="es-spine mt-m">
            {SPINE.map((s, i) => (
              <div key={s.t}><span className="n">{String(i + 1).padStart(2, '0')}</span><b>{s.t}</b><p>{s.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* THREATS */}
      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Threat coverage</span>
          <h2 className="h2 mt-s">Built for the threats that <em>reach the inbox</em>.</h2>
          <div className="cols4 mt-m">
            {THREATS.map(([t, items]) => (
              <div key={t}><b>{t}</b><p>{items.join(' · ')}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* BEC */}
      <section className="s-dark sec">
        <div className="wrap split even">
          <div>
            <span className="kicker">Business email compromise &amp; payment fraud</span>
            <h2 className="h2 mt-s">The costliest emails <em>ask politely</em>.</h2>
            <p className="lede mt-s">
              BEC rarely looks like an attack. It looks like a supplier with new bank details, or a reply
              inside an invoice thread your team has worked on for weeks.
            </p>
            <p className="body mt-s">
              Kaska Email Security looks at who is asking, who they normally talk to and what they are asking
              for, combining relationships, impersonation signals, authentication, intent and payment-risk
              indicators into one explained verdict.
            </p>
          </div>
          <div>
            <div className="mail" aria-label="Illustrative business email compromise example">
              <div className="mail-h">
                <div><b>From</b>Accounts · Meridian Supplies &lt;accounts@meridian-supp1ies.com&gt;</div>
                <div><b>To</b>Accounts Payable</div>
                <div><b>Subject</b>RE: Invoice MS-4471 — updated bank details</div>
              </div>
              <div className="mail-b">Hi, please note our bank account has changed. Kindly process invoice MS-4471 to the new account below before Friday&apos;s payment run so there is no delay in supply.</div>
              <div className="mail-s">
                <span className="h">Signals behind the verdict</span>
                <div className="sg"><i className="w" />Lookalike sender domain</div>
                <div className="sg"><i className="w" />Bank-account change request</div>
                <div className="sg"><i className="w" />First-time payment destination</div>
                <div className="sg"><i />Reply inside an existing invoice thread</div>
                <div className="sg"><i />Deadline pressure</div>
                <div className="vd"><span>Verdict · likely BEC · high risk</span><span>Evidence retained</span></div>
              </div>
            </div>
            <p className="note mt-s">Illustrative example · fictional organisation and message.</p>
          </div>
        </div>
      </section>

      {/* LAYERS */}
      <section className="s-deep sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">How Kaska detects</span>
            <h2 className="h2 mt-s">Layered analysis. <em>Explained verdicts.</em></h2>
            <p className="lede mt-s">Every verdict keeps the signals that produced it, so an analyst can see why, not just what.</p>
          </div>
          <div>
            <div className="layers">
              {LAYERS.map(([t, d], i) => (
                <div key={t}><i>{String(i + 1).padStart(2, '0')}</i><div><b>{t}</b><span>{d}</span></div></div>
              ))}
              <div className="ai"><i>08</i><div><b>AI-assisted analysis</b><span>of context and intent</span></div></div>
            </div>
            <div className="vre">{['Verdict', 'Risk', 'Evidence'].map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        </div>
      </section>

      {/* RESPONSE */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Investigation &amp; response</span>
              <h2 className="h2 mt-s">Controlled response, with the <em>evidence attached</em>.</h2>
            </div>
            <p className="lede">Start in detect-only mode, then enable policy-controlled actions. Every action is on the audit trail.</p>
          </div>
          <div className="es-spine mt-m">
            {RESPONSE.map(([t, d], i) => (
              <div key={t}><span className="n">{i + 1}</span><b>{t}</b><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* API-FIRST + AI */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">API-first</span>
              <h2 className="h2 mt-s">Alongside your email platform. <em>Not in front of it.</em></h2>
            </div>
            <p className="lede">
              Kaska Email Security connects to Microsoft 365 or Google Workspace through their APIs. Mail flow,
              MX records and existing email controls stay exactly as they are. It is designed to augment, not replace.
            </p>
          </div>
          <div className="cols3 mt-m">
            <div><b>No MX change</b><p>Mail flow and MX records stay as they are.</p></div>
            <div><b>Post-delivery</b><p>Analysis and response after messages are delivered.</p></div>
            <div><b>Governed actions</b><p>Read for analysis; response actions only by policy or analyst decision.</p></div>
          </div>
          <div className="split even mt-l" style={{ alignItems: 'start' }}>
            <div>
              <div className="xlabel"><span>AI assists with</span><i /></div>
              <p className="h3 mt-s">Analysis · Triage · Context · Correlation · Threat intelligence · Impact assessment · Timeline generation</p>
            </div>
            <div>
              <div className="xlabel"><span>Security actions stay governed by</span><i /></div>
              <p className="h3 mt-s" style={{ color: 'var(--gold-hi)' }}>Evidence · Explicit policy · Safety controls · Human approval where required · Auditability</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO + DEPLOYMENT */}
      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Who it is for</span>
          <h2 className="h2 mt-s">For organisations where one email can <em>move money</em>.</h2>
          <div className="cols3 mt-m">
            {WHO.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="mt-l">
            <span className="kicker">Deployment</span>
            <h3 className="h3 mt-s">Cloud-delivered. API-connected.</h3>
            <div className="elist two mt-s">
              <div><b>Cloud / SaaS</b><p>Delivered as a cloud service.</p></div>
              <div><b>Microsoft Azure</b><p>Designed for India-region hosting (Azure Central India).</p></div>
              <div><b>API-first</b><p>Connects through Microsoft 365 / Google Workspace APIs.</p></div>
            </div>
            <p className="status-note mt-m">
              <b>Product status.</b> Kaska Email Security is being prepared for controlled customer launch and
              design-partner validation. Microsoft 365 is the primary integration for the first release, with
              Google Workspace following the same API-first approach. Capability availability depends on the
              release and integration status we confirm with you during evaluation.
            </p>
          </div>
        </div>
      </section>

      <Close
        kicker="Get started"
        title={<>See what Kaska can find in your <em>email</em>.</>}
        text="A focused demo of Kaska Email Security for Microsoft 365 or Google Workspace."
        primary={{ href: DEMO, label: 'Request a Demo' }}
      />
    </>
  )
}
