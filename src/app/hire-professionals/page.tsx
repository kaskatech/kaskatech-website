import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Hire Professionals — cybersecurity professionals and experts | Kaska',
  description:
    'Kaska provides vetted cybersecurity professionals and experts for projects, teams and leadership roles: staff augmentation, permanent hiring, fixed-scope and time-and-materials engagements, expert consultations and fractional CISO.',
}

const ENGAGE: [string, string][] = [
  ['Staff augmentation', 'Specialists embedded in your team, short or long term, working to your priorities.'],
  ['Permanent hiring', 'We source and assess candidates for full-time roles. You make the hiring decision.'],
  ['Contract / fixed scope', 'A defined deliverable at an agreed price, with scope and acceptance agreed up front.'],
  ['Time & materials', 'A flexible engagement billed for effort, for work whose scope will change as it goes.'],
  ['Expert consultations', 'On-demand calls with senior practitioners for a decision, a review or a second opinion.'],
  ['Fractional / virtual CISO', 'Part-time security leadership: strategy, governance and board reporting.'],
]

const ROLES = [
  'SOC analysts',
  'Incident responders',
  'Penetration testers / red team',
  'Cloud security engineers',
  'IAM / PAM specialists',
  'GRC & compliance consultants (DPDP, RBI, CERT-In, ISO 27001)',
  'Security architects',
  'DevSecOps / AppSec',
  'OT / ICS security',
  'Data protection / DLP',
]

const STEPS: [string, string, string][] = [
  ['01', 'Share your requirement', 'Tell us the role or the work, the skills needed, the engagement model and when you need it.'],
  ['02', 'We match vetted profiles', 'Practitioners assess candidates on the skills the work needs, and we share a shortlist.'],
  ['03', 'You interview and select', 'You meet the shortlisted people and choose who joins the work.'],
  ['04', 'Onboard and deliver', 'The professional starts work, with Kaska accountable for the engagement throughout.'],
]

const WHY: [string, string][] = [
  ['Cybersecurity only', 'We work only in cybersecurity, so the people we put forward are specialists, not generalists.'],
  ['Vetted by practitioners', 'Candidates are assessed by people who do the same work, on the skills the role needs.'],
  ['Flexible models', 'From a single consultation to a permanent hire, on the model that suits the work.'],
  ['Part of Kaska', 'Delivered alongside Kaska’s managed security services and products, with one accountable team.'],
]

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Hire Professionals"
        title={<>Hire vetted cybersecurity <em>professionals and experts</em>.</>}
        lede="Kaska provides specialist cybersecurity people for your projects, your teams and your leadership roles, on the engagement model that fits the work."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('solutions')}>Talk to us about your requirement<Arrow /></Link>
          <Link className="btn btn-q" href={demo('briefing')}>Request a briefing</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">How you can engage</span>
          <h2 className="h2 mt-s">The right model <em>for the work</em>.</h2>
          <div className="cols3 mt-m">
            {ENGAGE.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Roles we provide</span>
          <h2 className="h2 mt-s">Specialists across <em>the security function</em>.</h2>
          <div className="mt-m" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {ROLES.map((r) => <span key={r} className="chip">{r}</span>)}
          </div>
        </div>
      </section>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">How it works</span>
          <h2 className="h2 mt-s">From requirement <em>to delivery</em>.</h2>
          <div className="cols4 mt-m">
            {STEPS.map(([n, t, d]) => <div key={n}><span className="n">{n}</span><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">Why Kaska</span>
          <h2 className="h2 mt-s">Specialists, <em>with accountability</em>.</h2>
          <div className="cols4 mt-m">
            {WHY.map(([t, d]) => <div key={t}><b>{t}</b><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <Close
        kicker="Hire Professionals"
        title={<>Tell us what you need. <em>We’ll find the people.</em></>}
        text="Share the role or the work, and we’ll come back with how we would staff it."
        primary={{ href: demo('solutions'), label: 'Talk to us about your requirement' }}
        secondary={{ href: demo('briefing'), label: 'Request a briefing' }}
      />
    </>
  )
}
