import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use — Kaska',
  description:
    'The terms that govern use of the kaskatech.com website and any early-access evaluation of the Kaska platform.',
}

export default function Page() {
  return (
    <>
      <header className="hero wrap legal-hero">
        <span className="kicker rev">LEGAL</span>
        <h1 className="rev">Terms of Use</h1>
        <p className="sub rev">The terms that govern this website and any early-access evaluation of Kaska.</p>
        <p className="legal-meta rev">Last updated: 22 September 2026</p>
      </header>

      <section className="wrap legal">
        <p className="rev">
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the
          <b> kaskatech.com</b> website and any related early-access evaluation made available by
          <b> Kaska Technologies and Services</b> (&ldquo;Kaska&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). By using this website, you agree to these Terms. If you do not agree,
          please do not use the site.
        </p>

        <h2 className="rev">1. Use of the website</h2>
        <p className="rev">
          You may use this website for lawful, informational and business purposes. You agree not to
          misuse it, attempt to gain unauthorised access, disrupt its operation, or use it in breach
          of applicable law.
        </p>

        <h2 className="rev">2. Early access &amp; evaluations</h2>
        <p className="rev">
          Early-access programmes, demos and evaluation materials are provided for assessment only,
          on an &ldquo;as is&rdquo; basis, and may change or be withdrawn at any time. Any figures,
          scores or sample data shown on this website or in a demo are illustrative and not a
          representation about a specific environment.
        </p>

        <h2 className="rev">3. The platform agreement governs</h2>
        <p className="rev">
          Access to and use of the Kaska platform and related services is governed by a separate
          written agreement (for example an order form, subscription or master services agreement).
          Where those terms conflict with these website Terms, the platform agreement prevails for
          that service.
        </p>

        <h2 className="rev">4. Intellectual property</h2>
        <p className="rev">
          The website and its content — text, design, graphics and software — are owned by Kaska or
          its licensors and are protected by intellectual-property laws. <b>Kaska™</b>,
          <b> Kaska EM™</b> and <b>Kaska Exposure Management™</b> are trademarks of Kaska Technologies
          and Services. All other product names, logos and brands referenced on this site are the
          property of their respective owners and are used for identification only; their mention does
          not imply endorsement or affiliation.
        </p>

        <h2 className="rev">5. Acceptable use</h2>
        <p className="rev">
          You may not copy, scrape, reverse-engineer, resell or create derivative works from the
          website or its content without our written permission, except as permitted by law.
        </p>

        <h2 className="rev">6. No warranty</h2>
        <p className="rev">
          This website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          without warranties of any kind, express or implied, to the maximum extent permitted by law.
          We do not warrant that the site will be uninterrupted, error-free or secure.
        </p>

        <h2 className="rev">7. Limitation of liability</h2>
        <p className="rev">
          To the maximum extent permitted by law, Kaska will not be liable for any indirect,
          incidental, special or consequential damages, or loss of data, profits or goodwill, arising
          from your use of this website.
        </p>

        <h2 className="rev">8. Third-party links</h2>
        <p className="rev">
          The website may link to third-party sites we do not control. We are not responsible for
          their content, products or privacy practices.
        </p>

        <h2 className="rev">9. Governing law</h2>
        <p className="rev">
          These Terms are governed by the laws of India, and the courts of India will have
          jurisdiction over any dispute arising from or relating to this website.
        </p>

        <h2 className="rev">10. Changes</h2>
        <p className="rev">
          We may update these Terms from time to time. Continued use of the website after changes are
          posted constitutes acceptance of the updated Terms.
        </p>

        <h2 className="rev">11. Contact</h2>
        <p className="rev">
          Questions about these Terms: <a href="mailto:legal@kaskatech.com">legal@kaskatech.com</a> or
          our <a href="/contact">contact page</a>.
        </p>
      </section>
    </>
  )
}
