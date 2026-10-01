'use client'

import { useEffect, useRef, useState } from 'react'

/* The Kaska Gate — the site's signature visual.
   Neutral line = configured · gold band = Kaska measures · solid gold = effective ·
   broken gold = gap · hatching = not assessed · lime = act first.
   Conceptual: what Kaska measures depends on the sources a customer connects. */

type Outcome = 'v' | 'g' | 'n'
type Control = { name: string; out: Outcome; finding: string; rank: number; mobile: boolean }

const CONTROLS: Control[] = [
  { name: 'Endpoint protection', out: 'g', finding: 'Gap · prevention off on some hosts', rank: 3, mobile: true },
  { name: 'Workforce MFA', out: 'g', finding: 'Gap · coverage below policy', rank: 2, mobile: true },
  { name: 'Email authentication', out: 'v', finding: 'Validated · DMARC enforced', rank: 0, mobile: true },
  { name: 'Privileged access', out: 'v', finding: 'Validated · admin sessions vaulted', rank: 0, mobile: true },
  { name: 'Vulnerability management', out: 'g', finding: 'Gap · known-exploited flaw past its window', rank: 1, mobile: true },
  { name: 'Backup & recovery', out: 'v', finding: 'Validated · immutable copy present', rank: 0, mobile: false },
  { name: 'Logging coverage', out: 'v', finding: 'Validated · critical sources onboarded', rank: 0, mobile: false },
  { name: 'Network segmentation', out: 'n', finding: 'Not assessed · no connected source', rank: 0, mobile: true },
  { name: 'Cloud posture', out: 'g', finding: 'Gap · publicly readable storage', rank: 0, mobile: false },
  { name: 'Web application firewall', out: 'v', finding: 'Validated · blocking mode', rank: 0, mobile: true },
  { name: 'Key management', out: 'n', finding: 'Not assessed · no connected source', rank: 0, mobile: false },
  { name: 'Remote access', out: 'v', finding: 'Validated · MFA enforced', rank: 0, mobile: false },
  { name: 'Firewall rule base', out: 'g', finding: 'Gap · permissive inbound rule', rank: 0, mobile: false },
  { name: 'Data loss prevention', out: 'v', finding: 'Validated · egress policy enforced', rank: 0, mobile: true },
  { name: 'OT / ICS controls', out: 'n', finding: 'Not assessed · no connected source', rank: 0, mobile: true },
  { name: 'SaaS single sign-on', out: 'v', finding: 'Validated · enforced', rank: 0, mobile: false },
]
const SHORT: Record<string, string> = {
  'Vulnerability management': 'Known-exploited patching',
  'Workforce MFA': 'Workforce MFA',
  'Endpoint protection': 'Endpoint prevention',
}

const NS = 'http://www.w3.org/2000/svg'
function el(tag: string, attrs: Record<string, string | number>, parent?: Element) {
  const e = document.createElementNS(NS, tag)
  for (const k in attrs) e.setAttribute(k, String(attrs[k]))
  if (parent) parent.appendChild(e)
  return e
}

export default function KaskaGate() {
  const figRef = useRef<HTMLDivElement>(null)
  const [sel, setSel] = useState<Control>(CONTROLS[4])

  useEffect(() => {
    const fig = figRef.current
    if (!fig) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let mode: boolean | null = null
    let rows: { g: Element; c: Control }[] = []
    let tour: ReturnType<typeof setInterval> | null = null
    let animated = false

    const pick = (i: number, focus: boolean) => {
      const r = rows[i]
      if (!r) return
      rows.forEach((x, j) => x.g.classList.toggle('on', j === i))
      fig.classList.toggle('focus', focus)
      setSel(r.c)
    }
    const stopTour = () => {
      if (tour) clearInterval(tour)
      tour = null
    }

    const draw = () => {
      const mob = (window.innerWidth || document.documentElement.clientWidth || 1280) < 700
      if (mode === mob && fig.firstChild) return
      mode = mob
      fig.innerHTML = ''
      rows = []
      const G = mob
        ? { W: 400, label: 0, x0: 8, g0: 150, g1: 186, edge: 330, px: 352, pitch: 30, top: 44 }
        : { W: 1240, label: 196, x0: 214, g0: 560, g1: 640, edge: 990, px: 1040, pitch: 34, top: 56 }
      const L = mob ? CONTROLS.filter((c) => c.mobile) : CONTROLS
      const H = G.top + L.length * G.pitch + 18
      const svg = el('svg', { viewBox: `0 0 ${G.W} ${H}`, role: 'img', 'aria-label': 'Configured controls pass through the Kaska measurement band and resolve into effective, gap or not assessed. The most serious gaps rank into a priority list.' }, fig)
      const defs = el('defs', {}, svg)
      const pat = el('pattern', { id: 'kg-hz', width: 6, height: 6, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, defs)
      el('rect', { width: 1, height: 6, fill: '#4A4A45' }, pat)
      const hs = { 'font-family': 'IBM Plex Mono, monospace', 'font-size': mob ? 9 : 10.5, 'letter-spacing': 2.4, fill: '#6B6A64' }
      const ht = (x: number, t: string, anchor = 'start', c?: string) => {
        const e = el('text', { ...hs, x, y: G.top - 22, 'text-anchor': anchor }, svg)
        if (c) e.setAttribute('fill', c)
        e.textContent = t
      }
      ht(G.x0, 'CONFIGURED')
      ht((G.g0 + G.g1) / 2, 'KASKA', 'middle', '#C9A44C')
      ht(G.g1 + 14, mob ? 'OUTCOME' : 'MEASURED OUTCOME')
      if (!mob) {
        ht(G.edge, 'RESILIENCE', 'middle')
        ht(G.px + 18, 'ACT FIRST')
      }
      const bandH = L.length * G.pitch + 8
      el('rect', { x: G.g0, y: G.top - 12, width: G.g1 - G.g0, height: bandH, fill: 'rgba(201,164,76,.07)' }, svg)
      el('line', { x1: G.g0, y1: G.top - 12, x2: G.g0, y2: G.top + L.length * G.pitch - 4, stroke: '#C9A44C', 'stroke-width': 1 }, svg)
      el('line', { x1: G.g1, y1: G.top - 12, x2: G.g1, y2: G.top + L.length * G.pitch - 4, stroke: '#C9A44C', 'stroke-width': 1 }, svg)
      el('line', { x1: G.edge, y1: G.top - 12, x2: G.edge, y2: G.top + L.length * G.pitch - 4, stroke: '#C9A44C', 'stroke-width': 1, 'stroke-dasharray': '2 5', opacity: 0.6 }, svg)
      const priY = (r: number) => G.top + (r - 1) * G.pitch * 1.6 + 6
      const prig = el('g', { class: 'pri-g' })

      L.forEach((c, i) => {
        const y = G.top + i * G.pitch
        const row = el('g', { class: 'row', tabindex: 0, role: 'button', 'aria-label': `${c.name}: ${c.finding}` }, svg)
        el('rect', { class: 'hit', x: 0, y: y - G.pitch / 2, width: G.W, height: G.pitch }, row)
        if (!mob) {
          const t = el('text', { x: G.label, y: y + 4, 'text-anchor': 'end', 'font-family': 'Inter, sans-serif', 'font-size': 14, fill: '#A7A69E' }, row)
          t.textContent = c.name
        }
        const lg = el('g', { class: 'rv' }, row)
        el('line', { x1: G.x0, y1: y, x2: G.g0, y2: y, stroke: '#3A3C43', 'stroke-width': 1.2 }, lg)
        el('rect', { x: G.x0 - 3, y: y - 3, width: 6, height: 6, fill: '#6E6D66' }, lg)
        const rg = el('g', { class: 'rv' }, row)
        if (c.out === 'v') {
          el('line', { x1: G.g1, y1: y, x2: G.edge, y2: y, stroke: '#C9A44C', 'stroke-width': 1.6 }, rg)
          el('circle', { cx: G.edge, cy: y, r: 3.5, fill: '#C9A44C' }, rg)
        } else if (c.out === 'g') {
          if (c.rank > 0 && !mob) {
            const yy = priY(c.rank)
            el('path', { d: `M${G.g1} ${y} L${G.edge - 80} ${y} C${G.edge + 10} ${y} ${G.px - 40} ${yy} ${G.px} ${yy}`, fill: 'none', stroke: '#C9A44C', 'stroke-width': 1.5, 'stroke-dasharray': '7 5' }, rg)
          } else {
            const endX = mob ? G.edge : G.edge - 80
            el('line', { x1: G.g1, y1: y, x2: endX, y2: y, stroke: '#C9A44C', 'stroke-width': 1.5, 'stroke-dasharray': '7 5' }, rg)
            if (mob && c.rank > 0) {
              el('circle', { cx: G.px, cy: y, r: 5, fill: '#B7E33A' }, rg)
              const tt = el('text', { x: G.px + 12, y: y + 4, 'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: '#B7E33A' }, rg)
              tt.textContent = String(c.rank)
            } else el('circle', { cx: endX, cy: y, r: 4, fill: 'none', stroke: '#C9A44C', 'stroke-width': 1.5 }, rg)
          }
        } else {
          el('rect', { x: G.g1, y: y - 4, width: mob ? 30 : 60, height: 8, fill: 'url(#kg-hz)' }, rg)
          const d = el('text', { x: G.g1 + (mob ? 38 : 72), y: y + 4, 'font-family': 'IBM Plex Mono, monospace', 'font-size': 12, fill: '#6B6A64' }, rg)
          d.textContent = '—'
        }
        rows.push({ g: row, c })
        const act = () => {
          stopTour()
          pick(i, true)
        }
        row.addEventListener('mouseenter', act)
        row.addEventListener('click', act)
        row.addEventListener('focus', act)
      })

      if (!mob) {
        L.filter((c) => c.rank > 0)
          .sort((a, b) => a.rank - b.rank)
          .forEach((c) => {
            const yy = priY(c.rank)
            el('circle', { cx: G.px, cy: yy, r: 6, fill: '#B7E33A' }, prig)
            const n = el('text', { x: G.px + 18, y: yy + 5, 'font-family': 'IBM Plex Mono, monospace', 'font-size': 13, fill: '#B7E33A' }, prig)
            n.textContent = String(c.rank)
            const tx = el('text', { x: G.px + 38, y: yy + 5, 'font-family': 'Inter Tight, Inter, sans-serif', 'font-size': 14.5, fill: '#EDEBE4' }, prig)
            tx.textContent = SHORT[c.name] || c.name
          })
        svg.appendChild(prig)
      }

      if (!reduce && !animated) {
        fig.classList.add('prep')
        requestAnimationFrame(() => requestAnimationFrame(() => fig.classList.remove('prep')))
        animated = true
      }
      const first = rows.findIndex((r) => r.c.rank === 1)
      pick(first < 0 ? 0 : first, false)
    }

    draw()
    const leave = () => fig.classList.remove('focus')
    fig.addEventListener('mouseleave', leave)
    const onResize = () => draw()
    window.addEventListener('resize', onResize)
    let t0: ReturnType<typeof setTimeout> | null = null
    if (!reduce) {
      t0 = setTimeout(() => {
        let k = 0
        tour = setInterval(() => {
          const order = rows.map((_, j) => j)
          k = (k + 1) % order.length
          pick([4, 1, 7, 2, 0, 9][k % 6] % rows.length, false)
        }, 3400)
      }, 2600)
    }
    return () => {
      window.removeEventListener('resize', onResize)
      fig.removeEventListener('mouseleave', leave)
      stopTour()
      if (t0) clearTimeout(t0)
    }
  }, [])

  const rankText = sel.rank > 0 ? `${sel.rank} of 3` : sel.out === 'g' ? 'Tracked' : '—'
  return (
    <div className="gate">
      <div className="gate-fig" ref={figRef} />
      <div className="g-read" aria-live="polite">
        <span className="t">Selected control</span>
        <span className="n">{sel.name}</span>
        <div className="r"><span>Configured</span><b>Yes</b></div>
        <div className="r"><span>Kaska finds</span><b className={sel.out === 'v' ? '' : 'hi'}>{sel.finding}</b></div>
        <div className="r"><span>Priority</span><b className="hi">{rankText}</b></div>
        <div className="src">
          {sel.out === 'n' ? <span className="chip na">Not assessed</span> : <><span className="chip live">Live</span><span className="chip der">Derived</span></>}
        </div>
      </div>
      <div className="g-legend">
        <div className="lg">
          <span className="c"><i></i>Configured</span>
          <span className="a"><i></i>Effective</span>
          <span className="b"><i></i>Gap</span>
          <span className="e"><i></i>Not assessed</span>
          <span className="d"><i></i>Act first</span>
        </div>
        <span>One lens of Kaska&apos;s intelligence: how your controls actually measure up · illustrative · select a control</span>
      </div>
    </div>
  )
}
