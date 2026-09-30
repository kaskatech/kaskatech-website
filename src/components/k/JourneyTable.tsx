'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/* The Kaska operating journey, shown as one product view building itself.
   Discover → Understand → Validate → Prioritise → Remediate → Verify → Report. Illustrative data. */

const STEPS = ['Discover', 'Understand', 'Validate', 'Prioritise', 'Remediate', 'Verify', 'Report']
const CAPTIONS = [
  'Kaska brings together your assets from the tools you already run: what exists, and who owns it.',
  'Each asset gains its exposure context: known-exploited flaws, public exposure, sensitive data.',
  'The controls protecting each asset are checked: working, failing, or not yet measured.',
  'Risk is assessed in context, and the few gaps that matter most rise to the top.',
  'Every priority becomes a case with an owner and a governed action.',
  'After the change, Kaska re-validates the control and records the evidence.',
  'The result is reported with the evidence behind every figure, and the loop begins again.',
]
const HEAD = ['Asset', 'Exposure', 'Control', 'Kaska finds', 'Risk', 'Priority', 'Case · action', 'Verification']
const STEPCOLS: number[][] = [[0], [1], [2, 3], [4, 5], [6], [7], []]

type Row = {
  name: string; type: string; exp: string; ctl: string
  st: 'ok' | 'gap' | 'na'; find: string; risk: number; rank: number
  owner?: string; action?: string; verify?: 'closed' | 'progress' | 'approval'
}
const ROWS: Row[] = [
  { name: 'Customer portal', type: 'Application', exp: 'Public-facing', ctl: 'Web application firewall', st: 'ok', find: 'Blocking mode', risk: 2, rank: 0 },
  { name: 'Payments API', type: 'Application', exp: 'Known-exploited flaw', ctl: 'Patching · MFA', st: 'gap', find: 'Past window · 50% MFA', risk: 4, rank: 1, owner: 'Application team', action: 'Case opened · approval required', verify: 'closed' },
  { name: 'Email tenant', type: 'Email', exp: 'Phishing target', ctl: 'DMARC', st: 'ok', find: 'Enforced', risk: 1, rank: 0 },
  { name: 'Finance endpoints', type: 'Endpoints', exp: 'Unpatched software', ctl: 'Endpoint protection', st: 'gap', find: 'Detect-only', risk: 4, rank: 2, owner: 'Endpoint team', action: 'Case opened · change scheduled', verify: 'progress' },
  { name: 'Plant network', type: 'OT', exp: '—', ctl: 'Segmentation', st: 'na', find: 'No connected source', risk: -1, rank: 0 },
  { name: 'Cloud storage', type: 'Cloud', exp: 'Publicly readable', ctl: 'Access policy', st: 'gap', find: 'Open bucket', risk: 3, rank: 3, owner: 'Cloud team', action: 'Case opened · approval required', verify: 'approval' },
  { name: 'Backup vault', type: 'Resilience', exp: 'Ransomware target', ctl: 'Immutability', st: 'ok', find: 'Immutable copy', risk: 1, rank: 0 },
]

function order(step: number) {
  const idx = ROWS.map((_, i) => i)
  if (step >= 3) idx.sort((a, b) => (ROWS[a].rank || 99) - (ROWS[b].rank || 99) || ROWS[b].risk - ROWS[a].risk)
  return idx
}

export default function JourneyTable() {
  const [step, setStep] = useState(STEPS.length - 1)
  const [playing, setPlaying] = useState(false)
  const rowRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const prevTops = useRef<Record<number, number>>({})
  const rootRef = useRef<HTMLDivElement>(null)
  const reduce = useRef(true)

  // FLIP: rows glide to their new order when prioritisation reorders them
  const capture = () => {
    const t: Record<number, number> = {}
    Object.entries(rowRefs.current).forEach(([k, el]) => { if (el) t[+k] = el.getBoundingClientRect().top })
    prevTops.current = t
  }
  const go = (s: number) => { capture(); setStep(s) }
  useLayoutEffect(() => {
    if (reduce.current) return
    Object.entries(rowRefs.current).forEach(([k, el]) => {
      if (!el || prevTops.current[+k] === undefined) return
      const d = prevTops.current[+k] - el.getBoundingClientRect().top
      if (!d) return
      el.style.transition = 'none'
      el.style.transform = `translateY(${d}px)`
      requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transition = ''; el.style.transform = '' }))
    })
    prevTops.current = {}
  }, [step])

  useEffect(() => {
    reduce.current = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = rootRef.current
    if (reduce.current || !el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setStep(0); setPlaying(true); io.disconnect() } }), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => { capture(); setStep((s) => (s + 1) % STEPS.length) }, 3400)
    return () => clearInterval(t)
  }, [playing])

  const visible = new Set<number>([0])
  for (let k = 0; k <= step; k++) STEPCOLS[k].forEach((c) => visible.add(c))
  const now = new Set(STEPCOLS[step])
  const cls = (c: number) => `jcol${visible.has(c) ? '' : ' off'}${now.has(c) || (step === 6 && c === 7) ? ' now' : ''}`

  return (
    <div ref={rootRef}>
      <div className="rail" role="tablist" aria-label="Kaska journey">
        <span className="fill" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
        {STEPS.map((s, i) => (
          <button key={s} role="tab" aria-selected={i === step} className={i === step ? 'cur' : i < step ? 'done' : ''} onClick={() => { setPlaying(false); go(i) }}>
            <span>{String(i + 1).padStart(2, '0')}</span><b>{s}</b>
          </button>
        ))}
      </div>
      <div className="j-cap">
        <p aria-live="polite">{CAPTIONS[step]}</p>
        <div className="j-ctl">
          <button onClick={() => { setPlaying(false); go((step + STEPS.length - 1) % STEPS.length) }} aria-label="Previous step">Prev</button>
          <button onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
          <button onClick={() => { setPlaying(false); go((step + 1) % STEPS.length) }} aria-label="Next step">Next</button>
        </div>
      </div>
      <div className="win">
        <div className="wbar"><i></i><i></i><i></i><span>Kaska EM · sample organisation</span><em>{STEPS[step]}</em></div>
        <div className="jt">
          <div className="jt-h">{HEAD.map((h, i) => <div key={h} className={cls(i)}>{h}</div>)}</div>
          <div>
            {order(step).map((ri) => {
              const r = ROWS[ri]
              const verified = step >= 5 && r.verify === 'closed'
              const st = verified ? 'ok' : r.st
              return (
                <div key={r.name} className={`jt-r${step >= 3 && !r.rank ? ' dim' : ''}`} ref={(el) => { rowRefs.current[ri] = el }}>
                  <div className={`an ${cls(0)}`} data-c="0" data-h="Asset"><b>{r.name}</b><small>{r.type}</small></div>
                  <div className={cls(1)} data-c="1" data-h="Exposure">{r.exp}</div>
                  <div className={cls(2)} data-c="2" data-h="Control">{r.ctl}</div>
                  <div className={cls(3)} data-c="3" data-h="Kaska finds" style={{ flexWrap: 'wrap' }}>
                    {st === 'ok' ? <span className="chip ok">{verified ? 'Re-validated' : 'Validated'}</span> : st === 'gap' ? <span className="chip gap">Gap</span> : <span className="chip na">Not assessed</span>}
                    <span style={{ fontSize: 13, color: st === 'gap' ? '#D6B465' : '#9C9B94' }}>{verified ? 'Gap closed' : r.find}</span>
                  </div>
                  <div className={cls(4)} data-c="4" data-h="Risk">
                    {r.risk < 0 ? <span style={{ color: '#6B6A64' }}>—</span> : <span className="risk"><i style={{ ['--w' as string]: `${(verified ? 1 : r.risk) * 25}%` }}></i>{['', 'Low', 'Med', 'High', 'High'][verified ? 1 : r.risk]}</span>}
                  </div>
                  <div className={cls(5)} data-c="5" data-h="Priority">{r.rank ? <span className="rank p">{r.rank}</span> : <span className="rank">–</span>}</div>
                  <div className={cls(6)} data-c="6" data-h="Case · action">
                    {r.owner ? <span className="own">{r.owner}<small>{r.action}</small></span> : r.st === 'na' ? <span style={{ color: '#9C9B94', fontSize: 13.5 }}>Connect a source</span> : <span style={{ color: '#6B6A64' }}>—</span>}
                  </div>
                  <div className={cls(7)} data-c="7" data-h="Verification" style={{ gap: 6, flexWrap: 'wrap' }}>
                    {r.verify === 'closed' ? <><span className="chip live">Live</span><span className="chip der">Re-validated</span></>
                      : r.verify === 'progress' ? <span className="chip prov">In progress</span>
                      : r.verify === 'approval' ? <span className="chip smp">Awaiting approval</span>
                      : r.st === 'na' ? <span className="chip na">Not assessed</span> : <span className="chip live">Live</span>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={`jt-foot${step < 6 ? ' off' : ''}`}><span><b>Board report ready.</b> One gap closed and verified; two in progress; every figure sourced.</span><span>Reassessment scheduled</span></div>
      </div>
      <p className="note" style={{ marginTop: 18 }}>Illustrative data. Select a step, or let it play.</p>
    </div>
  )
}
