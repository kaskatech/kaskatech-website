import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Vantmail — email security by Kaska',
  description:
    'Vantmail is API-first email security for Microsoft 365, Google Workspace and Zoho Mail. No MX change: observe detections alongside your existing protection, then decide. A product of Kaska Technologies and Services Private Limited.',
}

const SITE = 'https://vantmail.ai'
const POV = 'https://vantmail.ai/contact'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const POV_STEPS: [string, string, string][] = [
  ['Day 1', 'Connect', 'Scoped call and tenant connection, in observe mode. No MX change, nothing blocked.'],
  ['Days 1–14', 'Observe', 'Live detections and dashboards on your real mail.'],
  ['Day 14', 'Report', 'A findings report covering threats, verdicts and recommendations.'],
]

const TIERS: [string, string, string][] = [
  ['Tier 0', 'Authentication', 'Email authentication results, sender alignment, reply-to mismatches and header evidence — SPF, DKIM and DMARC.'],
  ['Tier 1', 'URLs, files & QR', 'URLs and QR codes decoded and inspected; file signatures, macros, PDF active content, HTML smuggling and archives.'],
  ['Tier 2', 'Identity & BEC', 'VIP impersonation, lookalike domains, first-time senders, payment requests and urgency language.'],
  ['Tier 3', 'Selective AI review', 'Ambiguous messages get an additional intent review. AI informs the evidence; deterministic signals and policies retain decision authority. AI is never the sole decision-maker.'],
]

const THREATS: [string, string][] = [
  ['Business email compromise', 'Text-only scams that impersonate executives, lawyers or finance staff.'],
  ['Quishing', 'Malicious QR codes that shift the attack onto an unmanaged personal phone.'],
  ['Credential phishing', 'Fake login pages, adversary-in-the-middle kits and abused redirects.'],
  ['Malicious attachments', 'Weaponised documents and hidden HTML payloads.'],
  ['Vendor & supply-chain fraud', 'Fraud sent from genuine but compromised supplier accounts.'],
  ['Account takeover', 'Hijacked internal accounts used to attack the organisation from within.'],
]

const PLATFORMS: [string, string][] = [
  ['Microsoft 365', 'Microsoft Graph, with change notifications reconciled by delta queries. Admin-consented application permissions; quarantine, release and warning banners. Onboarding through Entra ID admin consent.'],
  ['Google Workspace', 'Gmail API and Pub/Sub, with domain-wide delegation limited to specific services. Mailbox changes watched with history sync; quarantine and release with labels.'],
  ['Zoho Mail', 'Zoho Mail API with an organisation-level OAuth connector. Webhooks with a polling fallback; quarantine and release using folders.'],
]

const WORKSPACE: [string, string][] = [
  ['Visibility & intelligence', 'Dashboards, analytics, account risk, campaigns, threat intel and shadow SaaS.'],
  ['Investigation & response', 'Threat records, quarantine, forensics, cases and employee reports.'],
  ['Analysis & validation', 'Raw-email parsing, attachment uploads, QR analysis, Red Team scenarios and detection evaluation.'],
  ['Tenant administration', 'Mailbox and VIP controls, policies, response settings, roles, licences and support records.'],
  ['Platform management', 'Provisioning, read-only tenant inspection, connector health, capacity alerts and licence certificates.'],
  ['Security foundations', 'Tenant-scoped access, encrypted credentials and tamper-evident auditing.'],
]

const TRUST: [string, string][] = [
  ['Per-tenant encryption', 'Provider credentials are encrypted with AES-GCM, using tenant-specific key derivation.'],
  ['Least-privilege access', 'Each capability gets only the permissions it needs. Tokens are not stored in plain form or logged.'],
  ['Tamper-evident audit', 'All analyst and system actions go into a hash-chained, append-only log.'],
]

const PARTNERS: [string, string][] = [
  ['MSP & MSSP', 'Manage every customer from one console with tenant hierarchy, delegated roles and consolidated reporting.'],
  ['Distributors & resellers', 'Deal registration, enablement, demo tenants and co-marketing support.'],
  ['Technology partners', 'Integrate Vantmail verdicts and actions into SIEM, SOAR and exposure-management platforms through the API.'],
]

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Vantmail — email security by Kaska"
        title={<>Email security. <em>Inside your cloud.</em></>}
        lede="API-first protection for Microsoft 365, Google Workspace and Zoho Mail — threat inspection, evidence review and response, through the provider's own API."
      >
        <div className="vre">{['API-first', 'No MX change', 'Observe before enforcing', 'Microsoft 365 · Google Workspace · Zoho Mail'].map((t) => <span key={t}>{t}</span>)}</div>
        <div className="ctas mt-m">
          <a className="btn btn-go" href={POV} {...ext}>Start a 14-day proof of value<Arrow /></a>
          <a className="btn btn-q" href={SITE} {...ext}>Visit vantmail.ai</a>
        </div>
      </PageHero>

      {/* NOT ANOTHER GATEWAY */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Cloud-native</span>
              <h2 className="h2 mt-s">Cloud-native security. <em>Not another gateway.</em></h2>
            </div>
            <p className="lede">
              Vantmail connects through provider APIs without changing MX records. Observe detections alongside
              your existing protection before enforcing thresholds. Every flag is explained with authentication
              results, file evidence, decoded links and weighted signals.
            </p>
          </div>
          <div className="cols3 mt-m">
            {PLATFORMS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      {/* PROOF OF VALUE */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">14-day proof of value</span>
              <h2 className="h2 mt-s">See what your current filters miss. <em>Risk-free.</em></h2>
            </div>
            <p className="lede">Vantmail connects in observe mode — no MX change, nothing blocked — and shows what it finds on your real mail.</p>
          </div>
          <div className="cols3 mt-m">
            {POV_STEPS.map(([n, t, d]) => <div key={n}><span className="n">{n.toUpperCase()}</span><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="ctas mt-m">
            <a className="btn btn-go" href={POV} {...ext}>Start a 14-day proof of value<Arrow /></a>
          </div>
        </div>
      </section>

      {/* DETECTION TIERS */}
      <section className="s-deep sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Layered defence</span>
              <h2 className="h2 mt-s">Four tiers. <em>One explainable decision.</em></h2>
            </div>
            <p className="lede">Inspect identity. Examine content. Understand intent. Deterministic evidence first, with selective AI review where a message is ambiguous.</p>
          </div>
          <div className="cols4 mt-m">
            {TIERS.map(([n, t, d]) => <div key={n}><span className="n">{n.toUpperCase()}</span><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="mt-l">
            <div className="xlabel"><span>Policy-driven response</span><i /></div>
            <p className="body mt-s">
              Policy maps confidence to an action — alert, banner, move to junk or quarantine. Observe mode,
              configurable thresholds, quarantine and release, and an auditable decision trail. Reversible by
              design: analysts review outcomes in the console.
            </p>
          </div>
        </div>
      </section>

      {/* THREATS */}
      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Threats covered</span>
          <h2 className="h2 mt-s">The attacks that <em>get through</em>.</h2>
          <div className="cols3 mt-m">
            {THREATS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      {/* WORKSPACE */}
      <section className="s-dark sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">The security workspace</span>
              <h2 className="h2 mt-s">From detection to investigation. <em>One connected view.</em></h2>
            </div>
            <p className="lede">Six modules for analysts, administrators and the platform team.</p>
          </div>
          <div className="cols3 mt-m">
            {WORKSPACE.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="s-warm sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Trust &amp; security</span>
              <h2 className="h2 mt-s">We read your email so attackers can&apos;t. <em>That demands a higher bar.</em></h2>
            </div>
            <p className="lede">The controls behind the platform. Data residency is validated for each deployment.</p>
          </div>
          <div className="cols3 mt-m">
            {TRUST.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
          <a className="more mt-m" href={`${SITE}/trust`} {...ext}>Trust &amp; compliance on vantmail.ai</a>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="s-white sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="kicker">Partners</span>
              <h2 className="h2 mt-s">Built to be delivered <em>by partners</em>.</h2>
            </div>
            <p className="lede">A multi-tenant console, fast API onboarding and a clear margin model make Vantmail a natural addition to any managed security portfolio.</p>
          </div>
          <div className="cols3 mt-m">
            {PARTNERS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="ctas mt-m">
            <a className="btn btn-q" href={`${SITE}/partners`} {...ext}>Become a partner</a>
            <Link className="more" href="/partners">Partnering with Kaska</Link>
          </div>
        </div>
      </section>

      <Close
        kicker="Vantmail · a product of Kaska Technologies and Services Private Limited"
        title={<>A clearer view of your <em>email risk</em>.</>}
        text="Discuss deployment, threat coverage and controls — or start a 14-day proof of value on your own tenant."
        primary={{ href: POV, label: 'Start a 14-day proof of value' }}
        secondary={{ href: SITE, label: 'Visit vantmail.ai' }}
      />
    </>
  )
}
