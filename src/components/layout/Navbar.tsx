'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Platform' },
  { href: '/features', label: 'Features' },
  { href: '/technology-solutions', label: 'Cybersecurity Solutions & Services' },
  { href: '/partners', label: 'Partners' },
  { href: '/company', label: 'Company' },
  { href: '/contact', label: 'Contact' },
]

// Early-access funnel: route to the contact form until app.kaskatech.com is live.
// When the self-serve app goes live, set this back to 'https://app.kaskatech.com/register'.
const REGISTER = '/contact'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <Link className="brand" href="/">
            <svg className="shield" width="41" height="43" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 3v18M7 12l9-9M8.5 11l8.5 10" />
            </svg>
            <span className="brandtext">
              <span className="bt-main"><span className="name">Kaska</span><span className="div"></span><span className="tag">Exposure Management</span></span>
              <span className="bt-sub">Autonomous Cyber Risk &amp; Resilience</span>
            </span>
          </Link>
          <div className="navbar">
            <a className="act" href={REGISTER}>
              Request early access
            </a>
            <button
              className="hamb"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="siteDrawer"
              onClick={() => setOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`scrim${open ? ' open' : ''}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      ></div>
      <aside
        className={`drawer${open ? ' open' : ''}`}
        id="siteDrawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="drawer-top">
          <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="drawer-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-div"></div>
        <a className="act full" href={REGISTER}>
          Request early access
        </a>
        <div className="drawer-tag">AI at the Core · Resilience at the Edge</div>
      </aside>
    </>
  )
}
