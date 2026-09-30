import type { Metadata } from 'next'
import Link from 'next/link'
import { Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Resources — Kaska',
  description: 'Datasheets and product resources for Kaska Exposure Management Platform™ and Kaska Email Security.',
}

// Datasheets are shared on request while the current editions are revised to the present
// product and deployment positioning. Link the PDFs here once approved.
const DATASHEETS = [
  { meta: 'Kaska EM', t: 'Kaska Exposure Management Platform™ — Product Datasheet', d: 'Capabilities, operating model and integration approach.', interest: 'em' },
  { meta: 'Kaska EM', t: 'Kaska Exposure Management Platform™ — Technical Whitepaper', d: 'How the asset model, control validation and risk quantification fit together.', interest: 'em' },
  { meta: 'Email Security', t: 'Kaska Email Security — Product Datasheet', d: 'API-first detection, investigation and response for Microsoft 365 and Google Workspace.', interest: 'email-security' },
]

const ON_SITE = [
  { k: 'Kaska EM', t: 'Platform capabilities and architecture', href: '/features' },
  { k: 'Kaska EM', t: 'Integrations: how Kaska connects', href: '/integrations' },
  { k: 'Kaska EM', t: 'Breach Intelligence: before, during, after', href: '/exposure-management#breach-intelligence' },
  { k: 'Email Security', t: 'Kaska Email Security overview', href: '/email-security' },
  { k: 'Trust', t: 'Privacy Policy', href: '/privacy' },
]

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Resources"
        title={<>Datasheets &amp; <em>resources</em>.</>}
        lede="Product datasheets and technical material are shared on request, so we can send the edition that matches your evaluation."
      />
      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Datasheets</span>
          <h2 className="h2 mt-s">Request a <em>datasheet</em>.</h2>
          <div className="elist mt-m">
            {DATASHEETS.map((r) => (
              <div key={r.t}>
                <b>{r.t}</b>
                <p>{r.d}</p>
                <span><Link className="more" href={`/contact?interest=${r.interest}`}>Request · {r.meta}</Link></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="s-dark sec">
        <div className="wrap">
          <span className="kicker">On this site</span>
          <h2 className="h2 mt-s">Explore the <em>products</em>.</h2>
          <div className="elist mt-m">
            {ON_SITE.map((r) => (
              <div key={r.href}>
                <b><Link href={r.href}>{r.t}</Link></b>
                <p>{r.k}</p>
                <span><Link className="more" href={r.href}>Read</Link></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Close kicker="Get started" title={<>Prefer a <em>conversation</em>?</>} text="We can walk you through the material that fits your evaluation." />
    </>
  )
}
