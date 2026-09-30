import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Partners — Kaska',
  description:
    'Partner with Kaska: systems integrators, solution partners, technology (OEM) partners and advisory firms working with Kaska Exposure Management Platform™ and Kaska Email Security.',
}

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Partners"
        title={<>Partner with <em>Kaska</em>.</>}
        lede="Kaska works with systems integrators, solution partners, technology partners and advisory firms who want to bring evidence-backed exposure management and API-first email security to their customers."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href={demo('partner')}>Talk about partnering<Arrow /></Link>
          <Link className="btn btn-q" href="/exposure-management">See our products</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap">
          <span className="kicker">Why partner</span>
          <h2 className="h2 mt-s">Products that make your engagements <em>stronger</em>.</h2>
          <div className="cols4 mt-m">
            <div><b>Differentiate</b><p>A board-level story built on control evidence, or a post-delivery email layer customers adopt without changing mail flow.</p></div>
            <div><b>Complements the stack</b><p>Vendor-agnostic by design. Kaska sits alongside the tools your customers already run.</p></div>
            <div><b>Built for regulated sectors</b><p>Designed with RBI, SEBI, CERT-In and DPDP expectations in mind.</p></div>
            <div><b>Straight answers</b><p>Clear positions on product status, integration fit and deployment, so partners never over-commit.</p></div>
          </div>
        </div>
      </section>

      <section className="s-dark sec">
        <div className="wrap">
          <span className="kicker">Who we partner with</span>
          <h2 className="h2 mt-s">Room for the <em>right partners</em>.</h2>
          <div className="elist two mt-m">
            <div><b>Systems Integrators</b><p>Include Kaska products in transformation, compliance and public-sector programmes.</p></div>
            <div><b>Solution Partners</b><p>Bring Kaska&apos;s products to your enterprise and BFSI accounts.</p></div>
            <div><b>Technology (OEM) Partners</b><p>Integrate your tools with Kaska EM so their signal feeds one view of risk.</p></div>
            <div><b>Advisory Firms</b><p>Use Kaska&apos;s evidence in risk, audit and regulatory-readiness engagements.</p></div>
          </div>
          <p className="note mt-m">We&apos;re onboarding founding partners now. Named partners will be shown as each agreement is in place.</p>
        </div>
      </section>

      <Close kicker="Get started" title={<>Become a <em>partner</em>.</>} text="Tell us about your practice and the customers you serve." primary={{ href: demo('partner'), label: 'Talk about partnering' }} secondary={null} />
    </>
  )
}
