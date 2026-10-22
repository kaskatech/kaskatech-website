import type { Metadata } from 'next'
import { Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'CyberSecHire — cybersecurity talent and expert services | Kaska',
  description:
    'CyberSecHire is a specialist register for cybersecurity and IT: post roles and hire, find specialist jobs, request expert services and get quotes from vetted providers, and learn and get certified. A Kaska Technologies company.',
}

const SITE = 'https://cybersechire.com'
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

// Wording taken from cybersechire.com, /services and /for-employers.
const DO: [string, string][] = [
  ['Hire talent', 'Post a role and get matched candidates, or search the talent pool.'],
  ['Find your next cybersecurity role', 'Specialist roles worldwide — SOC, penetration testing, cloud security, GRC, IAM and more.'],
  ['Buy expert services', 'Post a requirement and get quotes from vetted providers. Compare, talk, and take it forward on your terms.'],
  ['Get trained and certified', 'Courses and tutorials alongside jobs, freelance work and expert services, all in one place.'],
]

const WHO: [string, string][] = [
  ['Employers & service providers', 'Hire talent, buy services, or win new work. Providers list their firm or freelance services and receive buyer requirements matched to their specialism.'],
  ['Professionals', 'Find specialist roles, offer your services, and get trained and certified.'],
]

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="CyberSecHire — cybersecurity talent by Kaska"
        title={<>Hire cybersecurity professionals <em>and experts</em>.</>}
        lede="One specialist register for cybersecurity & IT — security work, done by vetted experts, on demand."
      >
        <div className="ctas mt-m">
          <a className="btn btn-go" href={SITE} {...ext}>Visit cybersechire.com ↗</a>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">What you can do</span>
          <h2 className="h2 mt-s">Jobs, expert services and certification. <em>In one place.</em></h2>
          <div className="cols4 mt-m">
            {DO.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Who it&apos;s for</span>
          <h2 className="h2 mt-s">For the people who hire, <em>and the people who do the work</em>.</h2>
          <div className="cols2 mt-m vcmp">
            {WHO.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <Close
        kicker="CyberSecHire · A Kaska Technologies company"
        title={<>Hire talent, buy services, or <em>win new work</em>.</>}
        text="CyberSecHire runs on its own site. Post a role, post a request, or create your profile there."
        primary={{ href: SITE, label: 'Visit cybersechire.com' }}
        secondary={null}
      />
    </>
  )
}
