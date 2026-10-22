import type { Metadata } from 'next'
import Link from 'next/link'
import { Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Kaska EM — exposure management by Kaska',
  alternates: { canonical: '/kaska-em' },
  description:
    'Kaska Exposure Management Platform™ sits above the security stack you already run: one evidenced picture of exposure, validated controls and breach paths. See Kaska EM in full at em.kaskatech.com.',
}

const SITE = 'https://em.kaskatech.com'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

const CARDS: [string, string][] = [
  ['Fix once, close many', 'Top fixes show the one change that closes the most findings, and Kaska re-validates to confirm it held.'],
  ["Configured doesn't mean protected", 'Each control is measured against the outcome it should deliver, across 31 control domains. Unmeasured is never passing.'],
  ['Regulator-ready, not certified', 'Evidence mapped to RBI, CERT-In, DPDP, SEBI and more. This is not a certification or regulatory approval.'],
]

export default function Page() {
  return (
    <div>
      <PageHero
        split
        kicker="Kaska EM · exposure management by Kaska"
        title={<>Know your risk <em>before attackers do.</em></>}
        lede="Kaska Exposure Management Platform™ sits above the security stack you already run: one evidenced picture of exposure, validated controls and breach paths, before, during and after a breach."
      >
        <div className="ctas mt-m">
          <a className="btn btn-go" href={SITE} {...ext}>Visit em.kaskatech.com ↗</a>
          <Link className="btn btn-q" href="/contact?interest=kaska-em">Request a briefing</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <div className="cols3">
            {CARDS.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <Close
        kicker="Kaska EM"
        title={<>See Kaska EM in full at <em>em.kaskatech.com</em>.</>}
        text="A product of Kaska Technologies and Services Private Limited."
        primary={{ href: SITE, label: 'Visit em.kaskatech.com' }}
        secondary={null}
      />
    </div>
  )
}
