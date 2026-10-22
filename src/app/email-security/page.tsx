import type { Metadata } from 'next'
import { Arrow, Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Vantmail — email security by Kaska',
  description:
    'Vantmail is API-first email security for Microsoft 365, Google Workspace and Zoho Mail. No MX change, no gateway. See Vantmail in full at vantmail.ai. A product of Kaska Technologies and Services Private Limited.',
}

const SITE = 'https://vantmail.ai'
const POV = 'https://vantmail.ai/contact'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const CARDS: [string, string][] = [
  ['Microsoft 365 · Google Workspace · Zoho Mail', "Connects through each provider's own API. No MX change, no rerouting, no disruption."],
  ['14-day proof of value', 'Vantmail connects in observe mode, nothing blocked, and shows what it finds on your real mail.'],
  ['Evidence behind every verdict', 'Every flag is explained with authentication results, file evidence, decoded links and weighted signals.'],
]

const STOPS = [
  'Business email compromise',
  'QR phishing (quishing)',
  'Credential phishing',
  'Malicious attachments',
  'Vendor fraud',
  'Account takeover',
]

export default function Page() {
  return (
    <div>
      <PageHero
        split
        kicker="Vantmail · email security by Kaska"
        title={<>Email security. <em>Inside your cloud.</em></>}
        lede="API-first protection for Microsoft 365, Google Workspace and Zoho Mail. No MX change, no gateway."
      >
        <div className="ctas mt-m">
          <a className="btn btn-go" href={SITE} {...ext}>Visit vantmail.ai ↗</a>
          <a className="btn btn-q" href={POV} {...ext}>Start a 14-day proof of value<Arrow /></a>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <div className="cols3">
            {CARDS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
          <div className="mt-l">
            <div className="xlabel"><span>What it stops</span><i /></div>
            <p className="body mt-s">{STOPS.join(' · ')}</p>
          </div>
        </div>
      </section>

      <Close
        kicker="Vantmail"
        title={<>See Vantmail in full at <em>vantmail.ai</em>.</>}
        text="A product of Kaska Technologies and Services Private Limited."
        primary={{ href: SITE, label: 'Visit vantmail.ai' }}
        secondary={null}
      />
    </div>
  )
}
