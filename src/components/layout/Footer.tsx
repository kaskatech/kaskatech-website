'use client'

import Link from 'next/link'

// Early-access funnel: route to the contact form until app.kaskatech.com is live.
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
              <svg
                className="shield"
                width="24"
                height="26"
                viewBox="0 0 26 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              >
                <path d="M13 2 L23 6 V14 C23 20 18.5 24.5 13 26 C7.5 24.5 3 20 3 14 V6 Z" />
                <path d="M8.5 13.5 L11.5 16.5 L17.5 10" strokeLinecap="round" />
              </svg>
              <span className="name">Kaska</span>
            </Link>
            <p>AI at the Core. Resilience at the Edge.</p>
            <div className="foot-social">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="6" width="19" height="12" rx="3" />
                  <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <div className="fcol">
            <h4>Platform</h4>
            <Link href="/">Overview</Link>
            <Link href="/features">Features</Link>
            <Link href="/features#architecture">Architecture</Link>
          </div>
          <div className="fcol">
            <h4>Solutions</h4>
            <Link href="/technology-solutions">Technology Solutions</Link>
            <Link href="/partners">Partners</Link>
            <a href="#">Industries</a>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <Link href="/company">About</Link>
            <Link href="/contact">Contact</Link>
            <a href={REGISTER}>Request early access</a>
          </div>
          <div className="fcol">
            <h4>Resources</h4>
            <a href="#">Technical Whitepaper</a>
            <a href="#">Data Governance & Trust</a>
            <a href="#">Risk Model Explained</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="cp">© 2026 Kaska Technologies</span>
          <span className="url">kaskatech.com · Privacy · Terms</span>
        </div>
      </div>
    </footer>
  )
}
