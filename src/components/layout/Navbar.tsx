'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV, REGISTER } from './siteNav'

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const KaskaMark = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 3v18M7 12l9-9M8.5 11l8.5 10" />
  </svg>
)

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState<string | null>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        setMenu(null)
      }
    }
    function onDown(e: MouseEvent) {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDown)
    }
  }, [])

  useEffect(() => {
    setMenu(null)
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    const path = href.split('#')[0]
    return path === '/' ? pathname === '/' : pathname.startsWith(path)
  }

  return (
    <>
      <nav className="nav" aria-label="Main">
        <div className="wrap" ref={barRef}>
          <Link className="brand" href="/" aria-label="Kaska home">
            <KaskaMark />
            <span className="nm">Kaska</span>
            <span className="tg">Technologies<br />Products &amp; Solutions</span>
          </Link>

          <div className="navlinks">
            {NAV.map((g) =>
              g.items ? (
                <div
                  key={g.label}
                  className={`nd${menu === g.label ? ' open' : ''}`}
                  onMouseEnter={() => setMenu(g.label)}
                  onMouseLeave={() => setMenu(null)}
                >
                  <button
                    className={`nd-btn${g.items.some((i) => isActive(i.href)) ? ' active' : ''}`}
                    aria-expanded={menu === g.label}
                    aria-haspopup="true"
                    onClick={() => setMenu(g.label)}
                  >
                    {g.label}
                    <Chevron />
                  </button>
                  <div className="nd-menu">
                    {g.items.map((i) => (
                      <Link key={i.href} href={i.href} onClick={() => setMenu(null)}>
                        <span className="ni-t">{i.label}</span>
                        {i.desc && <span className="ni-d">{i.desc}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={g.label} href={g.href!} className={isActive(g.href!) ? 'active' : undefined}>
                  {g.label}
                </Link>
              )
            )}
          </div>

          <div className="navbar">
            <Link className="talk" href="/contact">Talk to Kaska</Link>
            <Link className="btn btn-go" href={REGISTER}>Request a Demo</Link>
            <button className="hamb" aria-label="Open menu" aria-expanded={open} aria-controls="siteDrawer" onClick={() => setOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`scrim${open ? ' open' : ''}`} aria-hidden="true" onClick={() => setOpen(false)}></div>
      <aside className={`drawer-nav${open ? ' open' : ''}`} id="siteDrawer" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden={!open}>
        <div className="dn-top">
          <button className="dn-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <div className="dg"><Link href="/" className={pathname === '/' ? 'active' : undefined}>Home</Link></div>
        {NAV.map((g) => (
          <div className="dg" key={g.label}>
            {g.items ? (
              <>
                <div className="dg-h">{g.label}</div>
                {g.items.map((i) => (
                  <Link key={i.href} href={i.href} className={isActive(i.href) && !i.href.includes('#') ? 'active' : undefined}>
                    {i.label}
                  </Link>
                ))}
              </>
            ) : (
              <Link href={g.href!} className={isActive(g.href!) ? 'active' : undefined}>
                {g.label === 'Solutions' ? 'Technology Solutions' : g.label}
              </Link>
            )}
          </div>
        ))}
        <Link className="btn btn-go" href={REGISTER}>Request a Demo</Link>
        <Link className="btn btn-q" href="/contact" style={{ marginTop: 10, justifyContent: 'center' }}>Talk to Kaska</Link>
        <div className="dn-tag">Kaska Technologies &amp; Services Pvt Ltd</div>
      </aside>
    </>
  )
}
