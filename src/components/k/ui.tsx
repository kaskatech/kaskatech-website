import Link from 'next/link'
import type { ReactNode } from 'react'
import { REGISTER } from '@/components/layout/siteNav'

export const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)

export const demo = (interest?: string) => (interest ? `${REGISTER}?interest=${interest}` : REGISTER)

/** Closing call to action, used at the foot of every page. */
export function Close({
  kicker = 'See Kaska in action',
  title,
  text,
  primary = { href: demo('em'), label: 'Request a Demo' },
  secondary = { href: '/contact', label: 'Talk to Kaska' },
}: {
  kicker?: string
  title: ReactNode
  text: ReactNode
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string } | null
}) {
  return (
    <section className="s-dark close">
      <div className="wrap">
        <span className="kicker">{kicker}</span>
        <h2 className="h1">{title}</h2>
        <div className="row">
          <p>{text}</p>
          <div className="ctas">
            <Link className="btn btn-go" href={primary.href}>{primary.label}<Arrow /></Link>
            {secondary && <Link className="btn btn-q" href={secondary.href}>{secondary.label}</Link>}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Inner-page hero. */
export function PageHero({ kicker, title, lede, children, split }: { kicker: string; title: ReactNode; lede?: ReactNode; children?: ReactNode; split?: boolean }) {
  if (split) {
    return (
      <header className="s-dark">
        <div className="wrap phero split-h">
          <span className="kicker">{kicker}</span>
          <div className="row">
            <h1 className="h1">{title}</h1>
            <div>
              {lede && <p className="lede" style={{ marginTop: 0 }}>{lede}</p>}
              {children}
            </div>
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="s-dark">
      <div className="wrap phero">
        <span className="kicker">{kicker}</span>
        <h1 className="h1">{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </header>
  )
}

/* ---------- Above the stack: tool categories converge on Kaska, which produces outcomes ---------- */
const IN = ['SIEM / XDR', 'Endpoint', 'Identity & PAM', 'Cloud posture', 'Vulnerability', 'Network & firewall', 'Email', 'OT / ICS']
const OUT = ['Validated controls', 'Prioritised risk', 'Governed action', 'Board-ready evidence']
const VERBS = ['Validate', 'Quantify', 'Prioritise', 'Respond', 'Evidence']

export function StackDiagram({
  tone = 'warm',
  inputs = IN,
  outputs = OUT,
  verbs = VERBS,
  title = ['Asset-centric', 'intelligence'],
  inLabel = 'Your existing tools',
  outLabel = 'What you get',
}: {
  tone?: 'warm' | 'dark'
  inputs?: string[]
  outputs?: string[]
  verbs?: string[]
  title?: [string, string]
  inLabel?: string
  outLabel?: string
}) {
  const ink = tone === 'warm' ? '#101010' : '#EDEBE4'
  const mute = tone === 'warm' ? '#595750' : '#A09F98'
  const line = tone === 'warm' ? '#BDB9AC' : '#30333B'
  const pairs: string[] = []
  for (let i = 0; i < verbs.length; i += 2) pairs.push(verbs.slice(i, i + 2).join(' · ').toUpperCase())
  const W = 1240, kx = 520, kw = 220
  const kh = Math.max(220, 158 + (pairs.length - 1) * 20 + 22)
  const H = Math.max(460, 40 + (inputs.length - 1) * 54 + 40)
  const ky = (H - kh) / 2
  const iy = (i: number) => 40 + i * 54
  const oy = (i: number) => H / 2 - ((outputs.length - 1) * 80) / 2 + i * 80
  return (
    <div className="conv">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Kaska sits above your existing tools (${inputs.join(', ')}) and turns their signals into intelligence for ${outputs.join(', ')}.`}>
        <text x="0" y="12" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2.5" fill={mute}>{inLabel.toUpperCase()}</text>
        <text x={W} y="12" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2.5" fill={mute}>{outLabel.toUpperCase()}</text>
        {inputs.map((t, i) => (
          <g key={t}>
            <text x="0" y={iy(i) + 5} fontFamily="Inter Tight, Inter, sans-serif" fontSize="17" fill={ink}>{t}</text>
            <path d={`M190 ${iy(i)} C 360 ${iy(i)}, 380 ${ky + 30 + i * 22}, ${kx} ${ky + 30 + i * 22}`} fill="none" stroke={line} strokeWidth="1.2" />
            <circle cx="190" cy={iy(i)} r="3" fill={line} />
          </g>
        ))}
        <rect x={kx} y={ky} width={kw} height={kh} fill="#08090C" />
        <rect x={kx} y={ky} width="3" height={kh} fill="#C9A44C" />
        <text x={kx + 28} y={ky + 44} fontFamily="IBM Plex Mono, monospace" fontSize="10.5" letterSpacing="2.5" fill="#C9A44C">KASKA</text>
        <text x={kx + 28} y={ky + 84} fontFamily="Inter Tight, Inter, sans-serif" fontSize="21" fill="#EDEBE4">{title[0]}</text>
        <text x={kx + 28} y={ky + 110} fontFamily="Inter Tight, Inter, sans-serif" fontSize="21" fill="#EDEBE4">{title[1]}</text>
        {pairs.map((p, i) => (
          <text key={p} x={kx + 28} y={ky + 158 + i * 20} fontFamily="IBM Plex Mono, monospace" fontSize="10.5" letterSpacing="1.5" fill="#A09F98">{p}</text>
        ))}
        {outputs.map((t, i) => (
          <g key={t}>
            <path d={`M${kx + kw} ${ky + 50 + i * 40} C ${kx + kw + 120} ${ky + 50 + i * 40}, ${W - 330} ${oy(i)}, ${W - 250} ${oy(i)}`} fill="none" stroke="#C9A44C" strokeWidth="1.4" />
            <circle cx={W - 250} cy={oy(i)} r="4" fill={i === 1 ? '#B7E33A' : '#C9A44C'} />
            <text x={W - 234} y={oy(i) + 6} fontFamily="Inter Tight, Inter, sans-serif" fontSize="18" fill={ink}>{t}</text>
          </g>
        ))}
      </svg>
      <div className="conv-m">
        <div><span>{inLabel}</span><b>{inputs.join(' · ')}</b></div>
        <div className="kk"><span>Kaska</span><b>{title.join(' ')}: {verbs.map((v) => v.toLowerCase()).join(', ')}</b></div>
        <div><span>{outLabel}</span><b>{outputs.join(' · ')}</b></div>
      </div>
    </div>
  )
}
