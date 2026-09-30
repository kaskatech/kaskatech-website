import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'About Kaska — Kaska Technologies & Services Pvt Ltd',
  description:
    'Kaska Technologies & Services Pvt Ltd is a cybersecurity technology company building Kaska Exposure Management Platform™ and Kaska Email Security, and delivering cybersecurity technology solutions.',
}

export default function Page() {
  return (
    <>
      <PageHero
        split
        kicker="Company"
        title={<>Built in India, to prove security <em>works</em>.</>}
        lede="Kaska Technologies & Services Pvt Ltd is a cybersecurity technology company. We build Kaska Exposure Management Platform™ and Kaska Email Security, and deliver technology solutions for enterprise, financial services, the public sector and critical infrastructure."
      >
        <div className="ctas mt-m">
          <Link className="btn btn-go" href="/contact">Get in touch<Arrow /></Link>
          <Link className="btn btn-q" href="/exposure-management">See our products</Link>
        </div>
      </PageHero>

      <section className="s-warm sec">
        <div className="wrap split top">
          <div>
            <span className="kicker">Why Kaska exists</span>
            <h2 className="h2 mt-s">The one question tools <em>don&apos;t answer</em>.</h2>
          </div>
          <div className="stack-md">
            <p className="lede">
              Organisations don&apos;t lack security tools. They lack a clear answer to one question: are we
              actually protected? Dashboards show green while controls drift out of policy, and risk lives in
              spreadsheets nobody trusts.
            </p>
            <p className="body">
              Kaska was built to close that gap. Kaska EM sits above the security stack, vendor-agnostic, and is
              designed to show whether controls are working, what is exposed and what matters most, and whether
              the response can be proved. The same discipline shaped Kaska Email Security, because the attack
              that costs money often arrives as an ordinary-looking email.
            </p>
            <p className="body">
              Kaska is designed with the regulatory reality of Indian enterprise, BFSI and government in mind:
              DPDP, CERT-In, RBI and SEBI among them.
            </p>
          </div>
        </div>
      </section>

      <section className="s-dark sec">
        <div className="wrap">
          <span className="kicker">What we build</span>
          <h2 className="h2 mt-s">Two products, <em>one discipline</em>.</h2>
          <div className="cols3 mt-m">
            <div><b>Kaska Exposure Management Platform&trade;</b><p>An Autonomous Cyber Risk &amp; Resilience Platform. It connects assets, exposure, control validation, risk, governed response and evidence in one model.</p><Link className="more" href="/exposure-management">Explore Kaska EM</Link></div>
            <div><b>Kaska Email Security</b><p>An API-first email security platform: detection, investigation and controlled response for Microsoft 365 and Google Workspace, with no MX change.</p><Link className="more" href="/email-security">Explore Email Security</Link></div>
            <div><b>Technology Solutions</b><p>Advisory, implementation, managed services and support, vendor-agnostic, for regulated environments.</p><Link className="more" href="/technology-solutions">Explore solutions</Link></div>
          </div>
        </div>
      </section>

      <section className="s-white sec">
        <div className="wrap">
          <span className="kicker">What we believe</span>
          <h2 className="h2 mt-s">Three convictions we <em>build on</em>.</h2>
          <div className="cols3 mt-m">
            <div><span className="n">01</span><b>Prove it, don&apos;t assume it.</b><p>Findings and verdicts carry their evidence. Protection you can show, not take on faith.</p></div>
            <div><span className="n">02</span><b>Honest about gaps.</b><p>Where a control can&apos;t be verified, we say so. An honest gap is worth more than a false green.</p></div>
            <div><span className="n">03</span><b>Nothing ripped out.</b><p>Vendor-agnostic by principle. Our products work alongside the stack and platforms you already run.</p></div>
          </div>
        </div>
      </section>

      <section className="s-deep sec">
        <div className="wrap">
          <span className="kicker">How we&apos;re different</span>
          <h2 className="h2 mt-s">Not another console. <em>A layer of evidence.</em></h2>
          <div className="cols3 mt-m">
            <div><b>Root causes, before the alert</b><p>Traditional SOAR acts after an alert fires. Kaska EM helps find the exploitable gap so it can be closed first, and connects response to the same context when an incident does occur.</p></div>
            <div><b>One loop, not three tools</b><p>Risk, control validation and governed response share one asset model, so a number is never separated from the control and the action behind it.</p></div>
            <div><b>Evidence first</b><p>Every figure shows whether it is measured, calculated or estimated, and what has not been assessed yet.</p></div>
          </div>
          <p className="note mt-m">Kaska Technologies &amp; Services Pvt Ltd · India</p>
        </div>
      </section>

      <Close kicker="Get started" title={<>Let&apos;s <em>talk</em>.</>} text="About our products, a technology programme, or a partnership." primary={{ href: '/contact', label: 'Get in touch' }} secondary={{ href: '/partners', label: 'Partner with Kaska' }} />
    </>
  )
}
