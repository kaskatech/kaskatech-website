'use client'

import { useEffect, useState } from 'react'

const ACCESS_KEY = '206302e1-fa36-4003-ba8f-049108c29dba'

// Public / free mailbox providers — we ask for an official work email.
const PUBLIC_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk',
  'ymail.com', 'rocketmail.com', 'hotmail.com', 'hotmail.co.uk', 'outlook.com',
  'live.com', 'msn.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com',
  'proton.me', 'protonmail.com', 'gmx.com', 'mail.com', 'zoho.com',
  'yandex.com', 'rediffmail.com', 'rediff.com', 'qq.com', '163.com', '126.com',
])

function isPublicEmail(email: string): boolean {
  const at = email.lastIndexOf('@')
  if (at < 0) return false
  const domain = email.slice(at + 1).trim().toLowerCase()
  return PUBLIC_EMAIL_DOMAINS.has(domain)
}

const NOTE_DEFAULT = 'We reply within two business days. Your details are never shared.'

// ?interest=<key> on /contact pre-selects the enquiry type (used by product-page CTAs).
const INTERESTS: { key: string; label: string }[] = [
  { key: 'em', label: 'Kaska Exposure Management Platform — demo' },
  { key: 'email-security', label: 'Kaska Email Security — demo' },
  { key: 'assessment', label: 'Kaska Risk Assessment' },
  { key: 'solutions', label: 'Technology Solutions & Services' },
  { key: 'partner', label: 'Partnership' },
  { key: 'briefing', label: 'Not sure yet — a briefing' },
]

export default function ContactForm() {
  const [result, setResult] = useState(NOTE_DEFAULT)
  const [emailError, setEmailError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [interest, setInterest] = useState('')

  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get('interest')
    const match = INTERESTS.find((i) => i.key === key)
    if (match) setInterest(match.label)
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget

    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || ''
    if (isPublicEmail(email)) {
      setEmailError(
        'Please use your official work email — public addresses (Gmail, Yahoo, Outlook and the like) aren’t accepted.'
      )
      ;(form.elements.namedItem('email') as HTMLInputElement)?.focus()
      return
    }
    setEmailError('')

    setSubmitting(true)
    setResult('Sending…')
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const j = await r.json()
      if (j && j.success) {
        form.reset()
        setInterest('')
        setResult('Thank you — we’ll reply within two business days.')
      } else {
        setResult('Sorry, something went wrong. Please email contact@kaskatech.com.')
        setSubmitting(false)
      }
    } catch {
      setResult('Sorry, something went wrong. Please email contact@kaskatech.com.')
      setSubmitting(false)
    }
  }

  return (
    <div className="form-card rev">
      <span className="fk">Tell us about you</span>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value={ACCESS_KEY} />
        <input type="hidden" name="subject" value="New enquiry from kaskatech.com" />
        <input type="hidden" name="from_name" value="Kaska Website" />
        <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} />
        <div className="row2">
          <div className="field">
            <label htmlFor="name">
              Full name <span className="req">*</span>
            </label>
            <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">
              Work email <span className="req">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
              aria-invalid={emailError ? true : undefined}
              onInput={() => emailError && setEmailError('')}
            />
            {emailError && <span className="field-err">{emailError}</span>}
          </div>
        </div>
        <div className="row2">
          <div className="field">
            <label htmlFor="company">
              Company <span className="req">*</span>
            </label>
            <input id="company" name="company" type="text" placeholder="Company name" autoComplete="organization" required />
          </div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <select id="country" name="country" defaultValue="">
              <option value="">Select country</option>
              <option>India</option>
              <option>United Arab Emirates</option>
              <option>Singapore</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="interest">
            I’m interested in <span className="req">*</span>
          </label>
          <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} required>
            <option value="">Select an option</option>
            {INTERESTS.map((i) => (
              <option key={i.key} value={i.label}>{i.label}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="msg">How can we help?</label>
          <textarea
            id="msg"
            name="message"
            placeholder="A product demo, a datasheet, or Technology Solutions for your environment — tell us what you're looking for."
          ></textarea>
        </div>
        <button className="act full" type="submit" disabled={submitting}>
          Request a Demo
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <p className="form-note">{result}</p>
      </form>
    </div>
  )
}
