// Single source of truth for site navigation — used by Navbar (desktop + drawer) and Footer.

// Demo funnel: route to the contact form until a self-serve path exists.
export const REGISTER = '/contact'

export type NavItem = { href: string; label: string; desc?: string }
export type NavGroup = { label: string; href?: string; items?: NavItem[] }

export const PRODUCTS: NavItem[] = [
  { href: '/exposure-management', label: 'Kaska Exposure Management Platform', desc: 'An Autonomous Cyber Risk & Resilience Platform' },
  { href: '/features', label: 'Platform capabilities', desc: 'From asset intelligence to resilience reporting' },
  { href: '/integrations', label: 'Integrations', desc: 'Above the security stack you already run' },
  { href: '/email-security', label: 'Kaska Email Security', desc: 'API-First Email Security Platform' },
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
  { label: 'Solutions', href: '/technology-solutions' },
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
