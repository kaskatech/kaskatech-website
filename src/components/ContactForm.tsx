'use client'

import { useState } from 'react'

const ACCESS_KEY = '206302e1-fa36-4003-ba8f-049108c29dba'

export default function ContactForm() {
  const [result, setResult] = useState(
    "We reply within one business day. Your details are never shared."
  )
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
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
        setResult('Thank you — we’ll reply within one business day.')
      } else {
        setResult('Sorry, something went wrong. Please email hello@kaskatech.com.')
        setSubmitting(false)
      }
    } catch {
      setResult('Sorry, something went wrong. Please email hello@kaskatech.com.')
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
            <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
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
          <label htmlFor="msg">How can we help?</label>
          <textarea
            id="msg"
            name="message"
            placeholder="Early access, a briefing, or Technology Solutions for your stack — tell us what you're looking for."
          ></textarea>
        </div>
        <button className="act full" type="submit" disabled={submitting}>
          Request early access
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <p className="form-note">{result}</p>
      </form>
    </div>
  )
}
