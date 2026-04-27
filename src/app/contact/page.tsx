import type { Metadata } from 'next'
import { Mail, MapPin, Clock, Shield, Users, Briefcase, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Kaska Technologies & Services',
  description: 'Get in touch with Kaska Technologies — product demos, cybersecurity services, talent requirements, and investor enquiries.',
}

const enquiryTypes = [
  { icon: Shield,     label: 'SafeCyber Demo / POC',    desc: 'See the platform in action' },
  { icon: Briefcase,  label: 'Cybersecurity Services',  desc: 'GRC, VAPT, SOC, vCISO' },
  { icon: Users,      label: 'Talent Requirement',       desc: 'Cybersecurity hiring' },
  { icon: TrendingUp, label: 'Investor Enquiry',         desc: 'SafeCyber seed round' },
]

export default function ContactPage() {
  return (
    <div className="bg-cream">

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden pt-36 pb-28 px-6">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/8 rounded-full blur-[100px]" />
        <div className="relative container-sm text-center">
          <div className="eyebrow justify-center text-gold">Contact</div>
          <h1 className="display text-6xl lg:text-7xl text-white leading-tight mb-6">
            Let's talk.
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Product demo, service engagement, talent requirement, or investor conversation —
            we respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section bg-stone">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-premium border border-black/5 p-10">
                <h2 className="display text-3xl text-navy mb-8">Send a message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Full Name</label>
                      <input type="text" placeholder="Your full name"
                        className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-cream text-navy text-sm placeholder:text-slate-300 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Organisation</label>
                      <input type="text" placeholder="Your company"
                        className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-cream text-navy text-sm placeholder:text-slate-300 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5 transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Work Email</label>
                      <input type="email" placeholder="you@company.com"
                        className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-cream text-navy text-sm placeholder:text-slate-300 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Phone</label>
                      <input type="tel" placeholder="+1 / +44 / +91..."
                        className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-cream text-navy text-sm placeholder:text-slate-300 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5 transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">Enquiry Type</label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {enquiryTypes.map(e => {
                        const Icon = e.icon
                        return (
                          <label key={e.label}
                            className="flex items-center gap-3 p-4 rounded-2xl border border-black/8 bg-cream cursor-pointer hover:border-navy hover:bg-stone transition-all group">
                            <input type="radio" name="enquiry" value={e.label} className="accent-navy" />
                            <Icon className="w-4 h-4 text-slate-400 group-hover:text-navy transition-colors flex-shrink-0" />
                            <div>
                              <div className="text-xs font-bold text-navy">{e.label}</div>
                              <div className="text-xs text-slate-400">{e.desc}</div>
                            </div>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-400 mb-2">Message</label>
                    <textarea rows={5} placeholder="Tell us what you're looking for, your timeline, and any specific context..."
                      className="w-full px-5 py-3.5 rounded-2xl border border-black/10 bg-cream text-navy text-sm placeholder:text-slate-300 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/5 transition-all resize-none" />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-navy hover:bg-[#1a2e5a] transition-all shadow-premium hover:shadow-xl hover:-translate-y-0.5">
                    Send Message
                  </button>
                  <p className="text-xs text-slate-400 text-center">We respond within 24 hours on business days.</p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="card-premium border border-black/5 p-7">
                <h3 className="font-bold text-navy mb-5 text-sm tracking-widest uppercase">Contact</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'General', value: 'info@kaskatech.com', href: 'mailto:info@kaskatech.com' },
                    { icon: Shield, label: 'SafeCyber', value: 'hello@safecyber.io', href: 'mailto:hello@safecyber.io' },
                    { icon: MapPin, label: 'Offices', value: 'Global' },
                    { icon: Clock, label: 'Response', value: 'Within 24 hours' },
                  ].map(c => {
                    const Icon = c.icon
                    return (
                      <div key={c.label} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-stone flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-navy" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{c.label}</div>
                          {c.href
                            ? <a href={c.href} className="text-sm font-semibold text-navy hover:text-blue transition-colors">{c.value}</a>
                            : <span className="text-sm font-semibold text-navy">{c.value}</span>
                          }
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="card-dark p-7">
                <div className="text-[10px] font-bold tracking-widest uppercase text-gold mb-3">Investor Enquiries</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  SafeCyber is raising a Seed Round. For investor conversations, reach out directly.
                </p>
                <a href="mailto:invest@safecyber.io" className="text-gold font-bold text-sm hover:text-gold/80 transition-colors">
                  invest@safecyber.io →
                </a>
              </div>

              <div className="card-premium border border-black/5 p-7">
                <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Quick Links</div>
                {[
                  { label: 'SafeCyber Platform', href: 'https://safecyber.io' },
                  { label: 'Request a Demo', href: 'https://safecyber.io/contact' },
                  { label: 'CyberSecHire', href: 'https://cybersechire.com' },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 border-b border-black/5 last:border-0 hover:text-blue transition-colors group">
                    <span className="text-sm font-medium text-navy group-hover:text-blue">{l.label}</span>
                    <span className="text-slate-300 group-hover:text-blue">↗</span>
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
