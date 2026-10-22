// Single source of truth for em.kaskatech.com navigation — used by Navbar (desktop + drawer) and Footer.

// Demo funnel: route to the contact form until a self-serve path exists.
export const REGISTER = '/contact?interest=kaska-em'
export const PARENT = 'https://kaskatech.com'

export type NavItem = { href: string; label: string; desc?: string; external?: boolean; sub?: boolean }
export type NavGroup = { label: string; href?: string; items?: NavItem[] }

export const NAV: NavGroup[] = [
  { label: 'Platform', href: '/#intelligence-layer' },
  { label: 'Capabilities', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  { label: 'Resources', href: 'https://kaskatech.com/resources' },
  { label: 'Contact', href: '/contact' },
]
