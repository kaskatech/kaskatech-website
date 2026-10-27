import type { Metadata } from 'next'
import Link from 'next/link'
import { Arrow, demo } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Kaska — Stop the attack before it starts. Recover fast if it does.',
  description:
    'Kaska Technologies: Kaska Exposure Management & Cyber Risk Resilience platform (Kaska EM & Cyber Resilience); Vantmail email security; Managed Security Services; and vetted cybersecurity professionals and experts for hire.',
}

export default function Page() {
  return (
    <>
      {/* HERO + FOUR DOORS */}
      <section className="s-dark home-hero">
        <div className="wrap">
          <span className="kicker">Kaska Technologies</span>
          <h1 className="h1 mt-s" style={{ maxWidth: '22ch' }}>
            Stop the attack before it starts. <em>Recover fast if it does.</em>
          </h1>
          <p className="lede mt-s" style={{ maxWidth: '62ch' }}>
            Security products and services that turn the investments you already have into protection you
            can measure and prove.
          </p>

          <div className="hdoors">
            <div className="hdoor main d-em">
              <span className="dtag">Exposure Management</span>
              <h3>Kaska EM & Cyber Resilience</h3>
              <p>
                Kaska Exposure Management & Cyber Risk Resilience Platform™, above the security stack you already run. One evidenced
                picture of exposure, validated controls and breach paths, with loss ranges, before, during and
                after a breach.
              </p>
              <div className="ctas">
                <Link className="btn btn-go" href="/kaska-em">Explore Kaska EM & Cyber Resilience<Arrow /></Link>
                <Link className="btn btn-q" href={demo('em')}>Request a briefing</Link>
                <a className="more" href="https://em.kaskatech.com" target="_blank" rel="noopener noreferrer">Visit em.kaskatech.com ↗</a>
              </div>
            </div>
            <div className="hdoor d-vm">
              <span className="dtag">Email Security</span>
              <h3>Vantmail</h3>
              <p>API-first email security for Microsoft 365, Google Workspace and Zoho Mail. No MX change.</p>
              <div className="ctas">
                <Link className="btn btn-q" href="/email-security">Email security<Arrow /></Link>
                <a className="more" href="https://vantmail.ai" target="_blank" rel="noopener noreferrer">Visit vantmail.ai ↗</a>
              </div>
            </div>
            <div className="hdoor d-ms">
              <span className="dtag">Security Services</span>
              <h3>Managed Security Services</h3>
              <p>SOC / MDR, VAPT, GRC and compliance, delivered by Kaska with MSSP and OEM partners.</p>
              <div className="ctas">
                <Link className="btn btn-q" href="/managed-services">Managed services<Arrow /></Link>
              </div>
            </div>
            <div className="hdoor d-ms">
              <span className="dtag">Professional services</span>
              <h3>Hire Professionals</h3>
              <p>Hire vetted cybersecurity professionals and experts.</p>
              <div className="ctas">
                <Link className="btn btn-q" href="/hire-professionals">Hire professionals<Arrow /></Link>
              </div>
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
            <div><b>Built in India</b><p>Designed for Indian regulators, platforms and data residency.</p></div>
            <div><b>Evidence-first</b><p>Every verdict and every figure shows where it came from. Unmeasured is never shown as passing.</p></div>
            <div><b>Partner-ready</b><p>Multi-tenant consoles for MSPs, MSSPs and resellers.</p></div>
          </div>
          <Link className="more mt-m" href="/company">About Kaska</Link>
        </div>
      </section>
    </>
  )
}
