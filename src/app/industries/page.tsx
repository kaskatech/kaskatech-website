import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Close, PageHero } from '@/components/k/ui'

export const metadata: Metadata = {
  title: 'Industries — Kaska',
  description:
    'How Kaska products and technology solutions apply to enterprise, BFSI, government and PSU, defence and critical infrastructure environments.',
}

type P = { href: string; label: string }
const EM: P = { href: '/exposure-management', label: 'Kaska EM' }
const ES: P = { href: '/email-security', label: 'Kaska Email Security' }
const TS: P = { href: '/technology-solutions', label: 'Technology Solutions' }

const SECTORS: { id: string; k: string; t: ReactNode; body: ReactNode[]; products: P[]; ctx: string[] }[] = [
  {
    id: 'enterprise', k: 'Enterprise', t: <>IT / ITES, pharma and <em>manufacturing</em>.</>,
    body: [
      'Mid-size and large enterprises run broad security stacks, yet still struggle to answer two questions: what is actually exposed, and which email in the inbox is the one that costs money.',
      'Kaska EM brings exposure, control state and business context together into one view of cyber risk. Kaska Email Security adds API-first, post-delivery protection against phishing, BEC and impersonation.',
    ],
    products: [EM, ES, TS], ctx: ['DPDP', 'ISO 27001', 'NIST CSF', 'CIS Controls v8'],
  },
  {
    id: 'bfsi', k: 'BFSI', t: <>Banks, NBFCs and <em>insurers</em>.</>,
    body: [
      'Financial institutions face regulators and boards that expect evidence, not assurances, and payment workflows that make them a prime target for business email compromise and payment fraud.',
      'Kaska EM maps control evidence to the frameworks BFSI teams report against and is designed to express cyber risk in business terms. Kaska Email Security focuses on the BEC patterns that target finance teams.',
    ],
    products: [EM, ES, TS], ctx: ['RBI', 'SEBI CSCRF', 'IRDAI', 'CERT-In', 'DPDP'],
  },
  {
    id: 'government', k: 'Government / PSU', t: <>Government departments and <em>public-sector undertakings</em>.</>,
    body: [
      'Public-sector organisations operate under CERT-In reporting obligations and heightened scrutiny, often with strict hosting, data-residency and connectivity requirements.',
      'Kaska EM supports control evidence mapped to Indian regulatory frameworks, and Kaska’s technology solutions help design and implement the underlying programme. Hosting, data-residency and connectivity requirements are scoped with you before any commitment.',
    ],
    products: [EM, ES, TS], ctx: ['CERT-In', 'NCIIPC', 'MeitY', 'DPDP'],
  },
  {
    id: 'defence', k: 'Defence', t: <>Defence and <em>restricted</em> environments.</>,
    body: [
      'Defence and strategic environments demand restricted connectivity, local control of data and rigorous assurance of every security control in place.',
      'Kaska engages through technology solutions (security architecture, implementation and assurance) and assesses product fit against each environment’s deployment requirements case by case.',
    ],
    products: [TS, EM], ctx: ['Restricted connectivity', 'Data sovereignty', 'Control assurance'],
  },
  {
    id: 'critical-infrastructure', k: 'Critical Infrastructure', t: <>Power, energy and other <em>regulated critical</em> sectors.</>,
    body: [
      'Critical-infrastructure operators must secure IT and OT together, where an exposure on the corporate network can become an operational incident.',
      'Kaska EM includes OT/ICS control domains mapped to IEC 62443 and the CEA cyber-security guidelines for the power sector. Kaska’s technology solutions cover OT asset visibility, secure remote access and IT/OT convergence.',
    ],
    products: [EM, TS], ctx: ['CEA', 'IEC 62443', 'NERC CIP', 'NCIIPC'],
  },
]

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title={<>Built for <em>regulated</em> environments.</>}
        lede="How Kaska’s products and technology solutions apply across enterprise, financial services, the public sector, defence and critical infrastructure."
      />
      {SECTORS.map((s, i) => (
        <section key={s.id} id={s.id} className={`${i % 2 ? 's-white' : 's-warm'} sec`} style={{ scrollMarginTop: 80 }}>
          <div className="wrap split top">
            <div>
              <span className="kicker">{s.k}</span>
              <h2 className="h2 mt-s">{s.t}</h2>
            </div>
            <div className="stack-md">
              {s.body.map((b, j) => <p key={j} className="body">{b}</p>)}
              <div>
                <div className="xlabel"><span>Relevant from Kaska</span><i /></div>
                <div className="ctas mt-s" style={{ gap: 28 }}>{s.products.map((p) => <Link key={p.href} className="more" href={p.href}>{p.label}</Link>)}</div>
              </div>
              <div>
                <div className="xlabel"><span>Regulatory &amp; operating context</span><i /></div>
                <p className="note mt-s" style={{ fontSize: 13 }}>{s.ctx.join(' · ')}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="s-white">
        <p className="wrap note" style={{ paddingBottom: 48 }}>Framework names indicate the regulatory context Kaska maps to. They do not imply certification or regulatory approval.</p>
      </section>
      <Close kicker="Get started" title={<>Talk to us about your <em>sector</em>.</>} text="We'll start with your regulatory context, environment and priorities." />
    </>
  )
}
