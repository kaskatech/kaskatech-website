import Link from 'next/link'
import { REGISTER } from './siteNav'
import { KaskaMark } from './Navbar'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="g">
          <div className="c">
            <Link className="brand" href="/" aria-label="Kaska home"><KaskaMark /><span className="nm">Kaska</span></Link>
            <span style={{ marginTop: 12, maxWidth: '32ch' }}>Cybersecurity products and services. Built in India.</span>
          </div>
          <div className="c">
            <h4>Products</h4>
            <Link href="/kaska-em">Exposure Management</Link>
            <Link href="/email-security">Vantmail</Link>
            <a href="https://vantmail.ai" target="_blank" rel="noopener noreferrer">vantmail.ai ↗</a>
            <Link href="/features">Platform capabilities</Link>
            <Link href="/integrations">Integrations</Link>
          </div>
          <div className="c">
            <h4>Services</h4>
            <Link href="/managed-services">Managed Security Services</Link>
            <Link href="/industries">Industries</Link>
          </div>
          <div className="c">
            <h4>Company</h4>
            <Link href="/company">About Kaska</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/contact">Contact</Link>
            <Link href={REGISTER}>Talk to us</Link>
          </div>
          <div className="c">
            <h4>Resources</h4>
            <Link href="/resources">Datasheets &amp; resources</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Kaska Technologies &amp; Services Pvt Ltd. All rights reserved.</span>
          <span>Kaska™, Kaska EM™ and Kaska Exposure Management™ are trademarks of Kaska Technologies &amp; Services Pvt Ltd.</span>
        </div>
      </div>
    </footer>
  )
}
