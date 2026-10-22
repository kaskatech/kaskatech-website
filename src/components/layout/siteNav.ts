// Single source of truth for site navigation — used by Navbar (desktop + drawer) and Footer.

// Demo funnel: route to the contact form until a self-serve path exists.
export const REGISTER = '/contact'

export type NavItem = { href: string; label: string; desc?: string; external?: boolean; sub?: boolean }
export type NavGroup = { label: string; href?: string; items?: NavItem[] }

export const PRODUCTS: NavItem[] = [
  { href: '/kaska-em', label: 'Exposure Management', desc: 'An Autonomous Cyber Risk & Resilience Platform' },
  { href: 'https://em.kaskatech.com/features', label: 'Platform capabilities', sub: true, external: true },
  { href: 'https://em.kaskatech.com/integrations', label: 'Integrations', sub: true, external: true },
  { href: '/email-security', label: 'Vantmail', desc: 'API-first email security' },
]

export const SERVICES: NavItem[] = [
  { href: '/managed-services', label: 'Managed Security Services', desc: 'SOC / MDR, VAPT, GRC and compliance' },
  { href: '/hire-professionals', label: 'Hire Professionals', desc: 'Vetted cybersecurity professionals and experts' },
]

export const INDUSTRIES: NavItem[] = [
  { href: '/industries#enterprise', label: 'Enterprise' },
  { href: '/industries#bfsi', label: 'BFSI' },
  { href: '/industries#government', label: 'Government / PSU' },
  { href: '/industries#defence', label: 'Defence' },
  { href: '/industries#critical-infrastructure', label: 'Critical Infrastructure' },
]

export const NAV: NavGroup[] = [
  { label: 'Products', items: PRODUCTS },
  { label: 'Managed Services', items: SERVICES },
  { label: 'Industries', items: INDUSTRIES },
  { label: 'Resources', href: '/resources' },
  {
    label: 'Company',
    items: [
      { href: '/company', label: 'About Kaska' },
      { href: '/partners', label: 'Partners' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]
