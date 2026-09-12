'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Re-run on every route change (client-side navigation keeps the layout
    // mounted, so a one-time effect would never reveal a newly-navigated page).
    const run = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>('.rev'))
      if (!els.length) return () => {}

      const revealAll = () => els.forEach((e) => e.classList.add('in'))

      const reduced =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!('IntersectionObserver' in window) || reduced) {
        revealAll()
        return () => {}
      }

      const vh = window.innerHeight || 800
      els.forEach((e) => {
        const r = e.getBoundingClientRect()
        if (r.top < vh * 0.95 && r.bottom > 0) e.classList.add('in')
      })

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in')
              io.unobserve(en.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px -6% 0px' }
      )
      els.forEach((e) => {
        if (!e.classList.contains('in')) io.observe(e)
      })

      const t = window.setTimeout(revealAll, 2500)

      return () => {
        io.disconnect()
        window.clearTimeout(t)
      }
    }

    // Defer one frame so the newly-navigated page's DOM is in place.
    let cleanup = () => {}
    const raf = requestAnimationFrame(() => {
      cleanup = run()
    })
    return () => {
      cancelAnimationFrame(raf)
      cleanup()
    }
  }, [pathname])

  return null
}
