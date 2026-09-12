'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function RevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rev'))
    if (!els.length) return

    const revealAll = () => els.forEach((e) => e.classList.add('in'))

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!('IntersectionObserver' in window) || reduced) {
      revealAll()
      return
    }

    // Reveal in-view content immediately (no requestAnimationFrame — that is
    // paused while a tab is backgrounded, which was leaving pages blank).
    const inView = () => {
      const vh = window.innerHeight || 800
      els.forEach((e) => {
        const r = e.getBoundingClientRect()
        if (r.top < vh * 0.98 && r.bottom > 0) e.classList.add('in')
      })
    }
    inView()

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

    // Safety net — setTimeout still fires in a hidden/background tab, so
    // content can never stay permanently hidden.
    const t = window.setTimeout(revealAll, 1600)
    const onVis = () => {
      if (document.visibilityState === 'visible') inView()
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      io.disconnect()
      window.clearTimeout(t)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [pathname])

  return null
}
