import Link from 'next/link'
import { PARENT, REGISTER } from './siteNav'
import { KaskaMark } from './Navbar'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="g">
          <div className="c">
            <Link className="brand" href="/" aria-label="Kaska EM home"><KaskaMark /><span className="nm">Kaska EM</span></Link>
            <span style={{ marginTop: 12, maxWidth: '36ch' }}>
              Kaska Exposure Management is a product of{' '}
              <a href={PARENT} style={{ textDecoration: 'underline' }}>Kaska Technologies &amp; Services Pvt Ltd</a>.
            </span>
          </div>
          <div className="c">
            <h4>Kaska EM</h4>
            <Link href="/">Platform</Link>
            <Link href="/features">Capabilities</Link>
            <Link href="/integrations">Integrations</Link>
            <a href={`${PARENT}/resources`}>Resources ↗</a>
            <Link href={REGISTER}>Request a briefing</Link>
          </div>
          <div className="c">
            <h4>Kaska Technologies</h4>
            <a href={`${PARENT}/company`}>About Kaska ↗</a>
            <a href={`${PARENT}/partners`}>Partners ↗</a>
            <a href={`${PARENT}/managed-services`}>Managed Services ↗</a>
            <a href={`${PARENT}/hire-professionals`}>Hire Professionals ↗</a>
            <a href="https://vantmail.ai" target="_blank" rel="noopener noreferrer">Vantmail ↗</a>
          </div>
          <div className="c">
            <h4>Legal</h4>
            <Link href="/contact">Contact</Link>
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
