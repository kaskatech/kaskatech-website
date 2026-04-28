'use client'
import { useState } from 'react'
import { Mail, MapPin, Clock, Shield, Users, Briefcase, TrendingUp, CheckCircle } from 'lucide-react'

const enquiryTypes = [
  { icon: Shield,     label: 'SafeCyber Demo / POC',    desc: 'See the platform in action' },
  { icon: Briefcase,  label: 'Cybersecurity Services',  desc: 'GRC, VAPT, SOC, vCISO' },
  { icon: Users,      label: 'Talent Requirement',       desc: 'Cybersecurity hiring' },
  { icon: TrendingUp, label: 'Investor Enquiry',         desc: 'SafeCyber seed round' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)
    const json = Object.fromEntries(data.entries())

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(json),
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError('Something went wrong. Please email us directly at contact@kaskatech.com')
    }
    setLoading(false)
  }

  return (
    <div className="bg-smoke">

      {/* Hero */}
      <section className="relative bg-[#0D0D14] overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/8 rounded-full blur-[100px]" />
        <div className="relative container-sm text-center">
          <div className="eyebrow justify-center text-brand-light">Contact</div>
          <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
            Let&apos;s talk.
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Product demo, service engagement, talent requirement, or investor conversation —
            we respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section bg-smoke">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-premium border border-black/5 p-10">

                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-brand mx-auto mb-6" />
                    <h2 className="display text-3xl text-[#0D0D14] mb-4">Message received.</h2>
                    <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. We will respond within 24 hours on business days.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="display text-3xl text-[#0D0D14] mb-8">Send a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Web3Forms access key — replace YOUR_ACCESS_KEY with key from web3forms.com */}
                      <input type="hidden" name="access_key" value="206302e1-fa36-4003-ba8f-049108c29dba" />
                      <input type="hidden" name="subject" value="New enquiry from kaskatech.com" />
                      <input type="checkbox" name="botcheck" className="hidden" />

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Full Name</label>
                          <input type="text" name="name" required placeholder="Your full name"
                            className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-white text-[#0D0D14] text-sm placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/5 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Organisation</label>
                          <input type="text" name="organisation" placeholder="Your company"
                            className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-white text-[#0D0D14] text-sm placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/5 transition-all" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Work Email</label>
                          <input type="email" name="email" required placeholder="you@company.com"
                            className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-white text-[#0D0D14] text-sm placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/5 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Phone</label>
                          <input type="tel" name="phone" placeholder="+1 / +44 / +91..."
                            className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-white text-[#0D0D14] text-sm placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/5 transition-all" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Enquiry Type</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {enquiryTypes.map(e => {
                            const Icon = e.icon
                            return (
                              <label key={e.label}
                                className="flex items-center gap-3 p-4 rounded-2xl border border-black/8 bg-white cursor-pointer hover:border-brand hover:bg-mist transition-all group">
                                <input type="radio" name="enquiry_type" value={e.label} className="accent-brand" />
                                <Icon className="w-4 h-4 text-slate-400 group-hover:text-brand transition-colors flex-shrink-0" />
                                <div>
                                  <div className="text-xs font-bold text-[#0D0D14]">{e.label}</div>
                                  <div className="text-xs text-slate-400">{e.desc}</div>
                                </div>
                              </label>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Message</label>
                        <textarea name="message" required rows={5}
                          placeholder="Tell us what you're looking for, your timeline, and any specific context..."
                          className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-white text-[#0D0D14] text-sm placeholder:text-slate-300 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/5 transition-all resize-none" />
                      </div>

                      {error && <p className="text-sm text-red-500">{error}</p>}

                      <button type="submit" disabled={loading}
                        className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-brand hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-xs text-slate-400 text-center">We respond within 24 hours on business days.</p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-premium border border-black/5 p-7">
                <h3 className="font-bold text-[#0D0D14] mb-5 text-sm tracking-widest uppercase">Contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail,   label: 'General',  value: 'contact@kaskatech.com', href: 'mailto:contact@kaskatech.com' },
                    { icon: Shield, label: 'SafeCyber', value: 'hello@safecyber.io',   href: 'mailto:hello@safecyber.io' },
                    { icon: MapPin, label: 'Offices',   value: 'Global' },
                    { icon: Clock,  label: 'Response',  value: 'Within 24 hours' },
                  ].map(c => {
                    const Icon = c.icon
                    return (
                      <div key={c.label} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-mist flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-brand" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{c.label}</div>
                          {c.href
                            ? <a href={c.href} className="text-sm font-semibold text-[#0D0D14] hover:text-brand transition-colors">{c.value}</a>
                            : <span className="text-sm font-semibold text-[#0D0D14]">{c.value}</span>
                          }
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="card-premium border border-black/5 p-7 bg-[#0D0D14]">
                <div className="text-[10px] font-bold tracking-widest uppercase text-brand-light mb-3">Investor Enquiries</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  SafeCyber is raising a Seed Round. For investor conversations, reach out directly.
                </p>
                <a href="mailto:invest@safecyber.io" className="text-brand-light font-bold text-sm hover:text-white transition-colors">
                  invest@safecyber.io →
                </a>
              </div>

              <div className="card-premium border border-black/5 p-7">
                <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Quick Links</div>
                {[
                  { label: 'SafeCyber Platform', href: 'https://safecyber.io' },
                  { label: 'Request a Demo',     href: 'https://safecyber.io/contact' },
                  { label: 'CyberSecHire',        href: 'https://cybersechire.com' },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0 hover:text-brand transition-colors group">
                    <span className="text-sm font-medium text-[#0D0D14] group-hover:text-brand">{l.label}</span>
                    <span className="text-slate-300 group-hover:text-brand">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
