'use client'
import { useEffect } from 'react'

// Static-export redirect: keeps any #hash, and the page carries noindex + canonical.
export default function RedirectTo({ to, label }: { to: string; label: string }) {
  useEffect(() => { window.location.replace(to + window.location.hash) }, [to])
  return (
    <section className="s-white sec"><div className="wrap">
      <p className="body">This page has moved. <a className="more" href={to}>Continue to {label}</a></p>
    </div></section>
  )
}
