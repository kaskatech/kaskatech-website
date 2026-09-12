import ContactForm from '@/components/ContactForm';

export default function Page() {
  return (
    <>
      {/* HERO */}
      <header className="hero wrap">
        <span className="kicker rev">CONTACT</span>
        <h1 className="rev">See your risk — <span className="em">in financial terms</span>.</h1>
        <p className="sub rev">Request early access to the Kaska platform, a briefing, or Technology Solutions for your stack.</p>
      </header>

      {/* CONTACT */}
      <section className="wrap contact">
        <div className="cgrid">
          {/* FORM */}
          <div className="form-card rev">
            <span className="fk">Tell us about you</span>
            <ContactForm />
          </div>

          {/* INFO */}
          <div className="info-card rev">
            <h3>For early access, a briefing, or Technology Solutions</h3>
            <p className="isub">Whether you want to prove your controls, price your risk in financial terms, or have Kaska run the tools for you — start here.</p>

            <div className="contact-line">
              <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg></span>
              <div><div className="cl-k">Email us</div><div className="cl-v">hello@kaskatech.com</div></div>
            </div>
            <div className="contact-line">
              <span className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" /></svg></span>
              <div><div className="cl-k">On the web</div><div className="cl-v">kaskatech.com</div></div>
            </div>

            <div className="reassure">
              <div className="rpoint"><span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span><div><b>India-hosted</b><span>Data residency built in, including air-gap.</span></div></div>
              <div className="rpoint"><span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span><div><b>Vendor-agnostic</b><span>We read the stack you already run.</span></div></div>
              <div className="rpoint"><span className="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg></span><div><b>No obligation</b><span>A conversation first — nothing to sign.</span></div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
