'use client'

import { useEffect, useState } from 'react'

/* Breach Intelligence — three doors into one intelligence loop.
   The loop is the same for every door; each door enters at a different station and lights the
   part of the loop it depends on. */

const STATIONS = [
  { k: 'asset', t: 'Asset', s: 'What it is, who owns it, how critical it is' },
  { k: 'finding', t: 'Finding / Incident', s: 'A gap found, or a signal raised' },
  { k: 'case', t: 'Case', s: 'Investigation with full context' },
  { k: 'action', t: 'Action', s: 'Governed, with approval where it matters' },
  { k: 'evidence', t: 'Evidence', s: 'What was done, and the proof' },
  { k: 'score', t: 'Risk score', s: 'Exposure × control × impact' },
  { k: 'report', t: 'Report', s: 'For leadership and regulators' },
  { k: 'reassess', t: 'Reassessment', s: 'Re-validate what changed' },
  { k: 'resilience', t: 'Resilience', s: 'Stronger each time round' },
]

type Door = { id: string; when: string; name: string; enters: string; q: string; lit: string[]; chain: [string, string?][] }
const DOORS: Door[] = [
  {
    id: 'before', when: 'Before a breach', name: 'Predict & Prevent', enters: 'asset',
    q: 'Understand assets, exposure and control effectiveness, then close the weaknesses that matter before they become incidents.',
    lit: ['asset', 'finding', 'score', 'case', 'action', 'evidence', 'reassess'],
    chain: [['Asset'], ['Exposure', 'vulnerabilities, attack paths where supported'], ['Control', 'validated, not assumed'], ['Risk', 'in business context'], ['Priority'], ['Case & action'], ['Verification']],
  },
  {
    id: 'during', when: 'During a breach', name: 'Detect & Contain', enters: 'finding',
    q: 'Kaska does not replace your SIEM or XDR. It brings each incident together with the same asset, exposure and control context used before it happened, for investigation and governed containment.',
    lit: ['finding', 'asset', 'case', 'action', 'evidence', 'score'],
    chain: [['Detection signal', 'from your SIEM or XDR'], ['Asset context'], ['Exposure & control state'], ['Attack path & blast radius', 'where supported'], ['Business impact'], ['Investigation & case'], ['Governed response', 'human approval where it matters']],
  },
  {
    id: 'after', when: 'After a breach', name: 'Recover & Adapt', enters: 'reassess',
    q: 'Recovery feeds the model forward, so the same class of attack should not succeed twice. Every incident informs reassessment; every fix is verified.',
    lit: ['evidence', 'reassess', 'resilience', 'report', 'score', 'asset'],
    chain: [['Incident'], ['Recovery'], ['Evidence'], ['Reassessment'], ['Control revalidation'], ['Risk reassessment'], ['Resilience improvement']],
  },
]

// loop geometry (desktop SVG) — stations on a rounded rectangle, clockwise from top-left
const W = 820, H = 460, X0 = 70, X1 = 750, Y0 = 70, Y1 = 390
const POS: Record<string, [number, number, 'n' | 's' | 'e' | 'w']> = {
  asset: [X0 + 40, Y0, 'n'], finding: [X0 + 240, Y0, 'n'], case: [X0 + 460, Y0, 'n'], action: [X1 - 30, Y0, 'n'],
  evidence: [X1, (Y0 + Y1) / 2, 'e'],
  score: [X1 - 30, Y1, 's'], report: [X0 + 420, Y1, 's'], reassess: [X0 + 150, Y1, 's'],
  resilience: [X0, (Y0 + Y1) / 2, 'w'],
}
const TRACK = `M${X0 + 30} ${Y0} H${X1 - 30} Q${X1} ${Y0} ${X1} ${Y0 + 30} V${Y1 - 30} Q${X1} ${Y1} ${X1 - 30} ${Y1} H${X0 + 30} Q${X0} ${Y1} ${X0} ${Y1 - 30} V${Y0 + 30} Q${X0} ${Y0} ${X0 + 30} ${Y0} Z`

export default function BreachLoop({ initial = 0 }: { initial?: number }) {
  const [di, setDi] = useState(initial)
  const [reduce, setReduce] = useState(true)
  useEffect(() => {
    setReduce(!!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches))
  }, [])
  const door = DOORS[di]
  const doorPos: Record<string, [number, number]> = { before: [X0 + 40, 8], during: [X0 + 240, 8], after: [X0 + 150, H - 6] }

  return (
    <div className="bl">
      <div className="bl-fig">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`One intelligence loop: ${STATIONS.map((s) => s.t).join(', ')}. ${door.when}, Kaska enters at ${STATIONS.find((s) => s.k === door.enters)!.t}.`}>
          <defs>
            <pattern id="bl-hz" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="1" height="6" fill="#3A3A36" /></pattern>
          </defs>
          <path d={TRACK} fill="none" stroke="#2A2D34" strokeWidth="10" />
          <path d={TRACK} fill="none" stroke="#C9A44C" strokeWidth="1.4" strokeDasharray="1 7" opacity=".7" />
          {!reduce && (
            <circle r="4.5" fill="#C9A44C">
              <animateMotion dur="14s" repeatCount="indefinite" path={TRACK} />
            </circle>
          )}
          {/* centre label */}
          <text x={W / 2} y={H / 2 - 12} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="3" fill="#6B6A64">ONE INTELLIGENCE LOOP</text>
          <text x={W / 2} y={H / 2 + 22} textAnchor="middle" fontFamily="Inter Tight, Inter, sans-serif" fontSize="22" fill="#EDEBE4">Same assets. Same context.</text>
          <text x={W / 2} y={H / 2 + 50} textAnchor="middle" fontFamily="Inter Tight, Inter, sans-serif" fontSize="22" fill="#C9A44C">Before, during and after.</text>
          {/* doors */}
          {DOORS.map((d, i) => {
            const [dx, dy] = doorPos[d.id]
            const [sx, sy] = POS[d.enters]
            const on = i === di
            return (
              <g key={d.id} style={{ cursor: 'pointer' }} onClick={() => setDi(i)}>
                <line x1={dx} y1={d.id === 'after' ? dy - 18 : dy + 14} x2={sx} y2={d.id === 'after' ? sy + 12 : sy - 12} stroke={on ? '#B7E33A' : '#3A3C43'} strokeWidth="1.4" />
                <text x={dx} y={d.id === 'after' ? dy : dy + 8} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" letterSpacing="2" fill={on ? '#B7E33A' : '#6B6A64'}>{d.when.toUpperCase()}</text>
              </g>
            )
          })}
          {/* stations */}
          {STATIONS.map((s) => {
            const [x, y, side] = POS[s.k]
            const lit = door.lit.includes(s.k)
            const entry = s.k === door.enters
            const lx = side === 'e' ? x + 18 : side === 'w' ? x - 18 : x
            const ly = side === 'n' ? y - 22 : side === 's' ? y + 32 : y + 5
            const anchor = side === 'e' ? 'start' : side === 'w' ? 'end' : 'middle'
            return (
              <g key={s.k} className={`stn${lit ? '' : ' dim'}`}>
                <rect x={x - 9} y={y - 9} width="18" height="18" fill={entry ? '#B7E33A' : lit ? '#C9A44C' : '#12151B'} stroke={lit ? '#C9A44C' : '#3A3C43'} strokeWidth="1.4" />
                {!lit && <rect x={x - 6} y={y - 6} width="12" height="12" fill="url(#bl-hz)" />}
                <text x={lx} y={ly} textAnchor={anchor} fontFamily="Inter Tight, Inter, sans-serif" fontSize="15.5" fill={lit ? '#EDEBE4' : '#6B6A64'}>{s.t}</text>
              </g>
            )
          })}
        </svg>
        {/* mobile: the same loop as an ordered track */}
        <ol className="bl-list" aria-hidden="true">
          {STATIONS.map((s) => (
            <li key={s.k} className={`${door.lit.includes(s.k) ? 'lit' : ''}${s.k === door.enters ? ' entry' : ''}`}>
              <i></i><b>{s.t}</b><span>{s.s}</span>
            </li>
          ))}
          <li className="back">↺ back to Asset, with what was learned</li>
        </ol>
      </div>

      <div>
        <div className="doors" role="tablist" aria-label="Breach lifecycle">
          {DOORS.map((d, i) => (
            <button key={d.id} role="tab" aria-selected={i === di} onClick={() => setDi(i)}>
              <span>{d.when}</span>
              <b>{d.name}</b>
            </button>
          ))}
        </div>
        <div className="dpanel" aria-live="polite">
          <div className="fadein" key={door.id} style={{ display: 'grid', gap: 16 }}>
            <p className="q">{door.q}</p>
            <div className="chain">
              {door.chain.map(([t, e], i) => (
                <div key={t}><i>{String(i + 1).padStart(2, '0')}</i><span>{t}{e && <em>{e}</em>}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
