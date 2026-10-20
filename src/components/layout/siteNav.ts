// Single source of truth for site navigation — used by Navbar (desktop + drawer) and Footer.

// Demo funnel: route to the contact form until a self-serve path exists.
export const REGISTER = '/contact'

export type NavItem = { href: string; label: string; desc?: string }
export type NavGroup = { label: string; href?: string; items?: NavItem[] }

export const PRODUCTS: NavItem[] = [
  { href: '/email-security', label: 'Vantmail', desc: 'Email security' },
  { href: '/exposure-management', label: 'Kaska EM', desc: 'Cyber Risk & Resilience' },
]

export const KASKA_EM: NavItem[] = [
  { href: '/exposure-management', label: 'Kaska EM', desc: 'Cyber Risk & Resilience platform' },
  { href: '/features', label: 'Platform capabilities', desc: 'From asset intelligence to resilience reporting' },
  { href: '/integrations', label: 'Integrations', desc: 'Above the security stack you already run' },
]

export const INDUSTRIES: NavItem[] = [
  { href: '/industries#enterprise', label: 'Enterprise' },
  { href: '/industries#bfsi', label: 'BFSI' },
  { href: '/industries#government', label: 'Government / PSU' },
  { href: '/industries#defence', label: 'Defence' },
  { href: '/industries#critical-infrastructure', label: 'Critical Infrastructure' },
]

export const NAV: NavGroup[] = [
  { label: 'Vantmail', href: '/email-security' },
  { label: 'Managed Services', href: '/technology-solutions' },
  { label: 'Kaska EM', items: KASKA_EM },
  { label: 'Partners', href: '/partners' },
  {
    label: 'Company',
    items: [
      { href: '/company', label: 'About Kaska' },
      { href: '/industries', label: 'Industries' },
      { href: '/resources', label: 'Resources' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]
