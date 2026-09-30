import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Kaska',
  description:
    'Request a demo of Kaska Exposure Management Platform™ or Kaska Email Security, or talk to Kaska about technology solutions and partnerships.',
}

export default function Page() {
  return (
    <>
      <header className="s-dark">
        <div className="wrap phero">
          <span className="kicker">Contact</span>
          <h1 className="h1">Talk to <em>Kaska</em>.</h1>
          <p className="lede">
            Request a demo, ask for a datasheet, or talk to us about technology solutions or partnering.
          </p>
        </div>
      </header>
      <section className="s-warm sec">
        <div className="wrap contact-g">
          <ContactForm />
          <div className="info">
            <div className="line"><span>Email</span><b>contact@kaskatech.com</b></div>
            <div className="line"><span>Web</span><b>kaskatech.com</b></div>
            <div className="line"><span>What to expect</span><b>A scoped conversation about your environment and priorities, then a focused demo of the product that fits.</b></div>
            <div className="line"><span>No obligation</span><b>A conversation first. Nothing to sign.</b></div>
          </div>
        </div>
      </section>
    </>
  )
}
