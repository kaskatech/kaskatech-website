'use client'

import Link from 'next/link'

// Demo funnel: route to the contact form until app.kaskatech.com is live.
// When the self-serve app goes live, set this back to 'https://app.kaskatech.com/register'.
const REGISTER = '/contact'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        {/* TODO: wire newsletter to a real subscribe endpoint; currently non-submitting */}
        <div className="foot-news">
          <div>
            <div className="nt">Join our newsletter</div>
            <div className="ns">Keep up to date with everything Kaska</div>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@company.com" aria-label="Email address" />
            <button className="act" type="submit">
              Subscribe
            </button>
          </form>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <svg className="shield" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3v18M7 12l9-9M8.5 11l8.5 10" />
              </svg>
              <span className="name">Kaska</span>
            </Link>
            <p>AI at the Core. Resilience at the Edge.</p>
          </div>
          <div className="fcol">
            <h4>Platform</h4>
            <Link href="/">Overview</Link>
            <Link href="/features">Capabilities</Link>
            <Link href="/integrations">Integrations</Link>
            <Link href="/features#architecture">Architecture</Link>
          </div>
          <div className="fcol">
            <h4>Solutions</h4>
            <Link href="/technology-solutions">Solutions &amp; Services</Link>
            <Link href="/partners">Partners</Link>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <Link href="/company">About</Link>
            <Link href="/contact">Contact</Link>
            <a href={REGISTER}>Request a Demo</a>
          </div>
          <div className="fcol">
            <h4>Resources</h4>
            <a href="/docs/Kaska_EM_Technical_Whitepaper.pdf" target="_blank" rel="noopener noreferrer">Technical Whitepaper</a>
            <a href="/docs/Kaska_EM_Product_Datasheet.pdf" target="_blank" rel="noopener noreferrer">Product Datasheet</a>
            <Link href="/features">Risk Model Explained</Link>
            <Link href="/privacy">Data Governance &amp; Trust</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="cp">© 2026 Kaska Technologies and Services. All rights reserved.</span>
          <span className="url">kaskatech.com · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span>
          <span className="foot-compliance">Kaska™, Kaska EM™ and Kaska Exposure Management™ are trademarks of Kaska Technologies and Services. All other names and logos are trademarks of their respective owners.</span>
          <span className="foot-compliance">Make-in-India aligned · Data-residency options · DPDP-aligned multi-tenant architecture.</span>
        </div>
      </div>
    </footer>
  )
}
