'use client'

import { useEffect, useRef, useState } from 'react'

type Check = { c: string; v: string; st: 'gap' | 'ok' | 'na'; src: 'live' | 'der' | 'na' }
type Ctl = {
  name: string
  kind: string
  cfg: [string, string][]
  val: Check[]
  eff: { tone: 'bad' | 'good'; title: string; text: string; tally: [number, number, number] }
}

const CONTROLS: Ctl[] = [
  {
    name: 'Endpoint protection',
    kind: 'EDR',
    cfg: [['Agent deployed', 'All managed endpoints'], ['Policy assigned', 'Standard workstation policy'], ['Health', 'Reporting normally']],
    val: [
      { c: 'Prevention mode', v: 'Detect only on finance hosts', st: 'gap', src: 'der' },
      { c: 'Tamper protection', v: 'Enabled', st: 'ok', src: 'live' },
      { c: 'Critical server coverage', v: '—', st: 'na', src: 'na' },
    ],
    eff: { tone: 'bad', title: 'Not effective where it matters.', text: 'Malicious files are detected on finance hosts but not blocked. Critical server coverage has no evidence yet, so it stays open.', tally: [1, 1, 1] },
  },
  {
    name: 'Workforce MFA',
    kind: 'Identity',
    cfg: [['MFA policy', 'Enabled for all users'], ['Conditional access', 'Configured'], ['Sign-in method', 'Authenticator app']],
    val: [
      { c: 'MFA registration', v: '50% of users', st: 'gap', src: 'der' },
      { c: 'Admin accounts require MFA', v: 'Enforced', st: 'ok', src: 'live' },
      { c: 'Legacy authentication', v: '—', st: 'na', src: 'na' },
    ],
    eff: { tone: 'bad', title: 'Partially effective.', text: 'Half of the workforce can still sign in with a password alone. Legacy authentication has not been assessed.', tally: [1, 1, 1] },
  },
  {
    name: 'Email authentication',
    kind: 'DMARC · SPF · DKIM',
    cfg: [['SPF record', 'Published'], ['DKIM', 'Configured'], ['DMARC record', 'Published']],
    val: [
      { c: 'DMARC policy', v: 'Reject', st: 'ok', src: 'live' },
      { c: 'DKIM signing', v: 'All sending domains', st: 'ok', src: 'live' },
      { c: 'Subdomain policy', v: 'Reject', st: 'ok', src: 'live' },
    ],
    eff: { tone: 'good', title: 'Effective.', text: 'Mail that spoofs your domains is rejected before it reaches anyone.', tally: [3, 0, 0] },
  },
]

const StatusChip = ({ st }: { st: Check['st'] }) =>
  st === 'gap' ? <span className="chip gap">Gap</span> : st === 'ok' ? <span className="chip ok">Validated</span> : <span className="chip na">Not assessed</span>
const SrcChip = ({ src }: { src: Check['src'] }) =>
  src === 'live' ? <span className="chip live">Live</span> : src === 'der' ? <span className="chip der">Derived</span> : null

export default function ConfiguredInspector() {
  const [ci, setCi] = useState(0)
  const [stage, setStage] = useState(2)
  const [key, setKey] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reduce = useRef(false)

  const run = () => {
    if (reduce.current) return
    if (timer.current) clearTimeout(timer.current)
    setStage(0)
    let s = 0
    const step = () => {
      timer.current = setTimeout(() => {
        s += 1
        setStage(s)
        setKey((k) => k + 1)
        if (s < 2) step()
      }, 2300)
    }
    step()
  }

  useEffect(() => {
    reduce.current = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = ref.current
    if (reduce.current || !el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      if (timer.current) clearTimeout(timer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const d = CONTROLS[ci]
  const choose = (i: number) => {
    setCi(i)
    setKey((k) => k + 1)
    if (reduce.current) setStage(2)
    else run()
  }
  const goStage = (s: number) => {
    if (timer.current) clearTimeout(timer.current)
    setStage(s)
    setKey((k) => k + 1)
  }

  return (
    <div className="inspect" ref={ref}>
      <div className="ctl-list" role="tablist" aria-label="Controls">
        <span className="h">Controls</span>
        {CONTROLS.map((c, i) => (
          <button key={c.name} role="tab" aria-selected={i === ci} onClick={() => choose(i)}>
            <b>{c.name}</b>
            <span>{c.kind}</span>
          </button>
        ))}
      </div>
      <div className="stage">
        <div className="lens">
          <span className="fill" style={{ width: `${(stage / 2) * 100}%` }} />
          {[
            ['01', 'Configured', 'What the tool reports'],
            ['02', 'Validated', 'What Kaska measures'],
            ['03', 'Effective', 'What it means'],
          ].map(([n, t, s], i) => (
            <button key={t} className={i === stage ? 'cur' : i < stage ? 'done' : ''} onClick={() => goStage(i)} aria-pressed={i === stage}>
              <i>{n}</i>
              <b>{t}</b>
              <small>{s}</small>
            </button>
          ))}
        </div>
        <div className="panel" aria-live="polite">
          <div className="fadein" key={key}>
            {stage === 0 && (
              <>
                <div className="who"><span>Vendor console view</span><span>Everything reports green</span></div>
                {d.cfg.map(([c, v]) => (
                  <div className="chk vendor" key={c}><span className="c">{c}</span><span className="v">{v}</span><span className="tick">OK</span></div>
                ))}
              </>
            )}
            {stage === 1 && (
              <>
                <div className="who"><span>Kaska validation</span><span>Measured against the intended outcome</span></div>
                {d.val.map((r) => (
                  <div className="chk" key={r.c}>
                    <span className="c">{r.c}</span>
                    <span className={`v ${r.st === 'gap' ? 'gap' : r.st === 'na' ? 'na' : ''}`}>{r.v}</span>
                    <span style={{ display: 'flex', gap: 6 }}><StatusChip st={r.st} /><SrcChip src={r.src} /></span>
                  </div>
                ))}
              </>
            )}
            {stage === 2 && (
              <>
                <div className="who"><span>What it means</span><span>Outcome, with its evidence</span></div>
                <div className="verdict">
                  <span className="vk">Verdict</span>
                  <span className={`vt ${d.eff.tone}`}>{d.eff.title}</span>
                  <p className="vs">{d.eff.text}</p>
                  <div className="tally">
                    <span className="chip ok">{d.eff.tally[0]} validated</span>
                    <span className="chip gap">{d.eff.tally[1]} gap{d.eff.tally[1] === 1 ? '' : 's'}</span>
                    <span className="chip na">{d.eff.tally[2]} not assessed</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
