import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kaska',
  description:
    'How Kaska Technologies & Services Pvt Ltd collects, uses, and protects personal data — aligned with India’s Digital Personal Data Protection Act, 2023.',
}

// LEGAL REVIEW REQUIRED BEFORE PUBLIC LAUNCH (2026-09-27):
// - This policy does not yet cover Kaska Email Security: mailbox / email content and metadata,
//   and data obtained through API connections to Microsoft 365 and Google Workspace.
// - Controller/processor roles, retention, sub-processors (e.g. Microsoft Azure), cross-border
//   transfer, grievance officer and registered address still need legal sign-off.
// Remove the on-page review notice only once legal has approved the updated policy.
export default function Page() {
  return (
    <div className="s-warm legal-page">
      <header className="hero wrap legal-hero">
        <span className="kicker rev">LEGAL</span>
        <h1 className="rev">Privacy Policy</h1>
        <p className="sub rev">How we handle personal data across this website and the Kaska platform.</p>
        <p className="legal-meta rev">Last updated: 22 September 2026</p>
      </header>

      <div className="wrap">
        <div className="status-note rev" style={{ margin: '0 0 10px', maxWidth: 760 }}>
          <b>Under legal review.</b> This policy is being updated to cover Kaska Email Security,
          including email and mailbox data processed through API connections to Microsoft 365 and
          Google Workspace. Until the updated policy is published, contact{' '}
          <a href="mailto:privacy@kaskatech.com" style={{ color: 'var(--brass-hi)' }}>privacy@kaskatech.com</a>{' '}
          with any question about how that data is handled.
        </div>
      </div>

      <section className="wrap legal">
        <p className="rev">
          This Privacy Policy explains how <b>Kaska Technologies &amp; Services Pvt Ltd</b> (&ldquo;Kaska&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, shares and protects personal data. It
          covers visitors to <b>kaskatech.com</b> and organisations that evaluate or use the Kaska
          Exposure Management platform. We handle personal data in line with India&rsquo;s
          <b> Digital Personal Data Protection Act, 2023 (DPDP)</b> and a privacy-by-design approach.
        </p>

        <h2 className="rev">1. Who we are</h2>
        <p className="rev">
          Kaska Technologies &amp; Services Pvt Ltd is a cybersecurity company based in India. For any question
          about this policy or your personal data, contact us at <a href="mailto:privacy@kaskatech.com">privacy@kaskatech.com</a> or
          through our <a href="/contact">contact page</a>.
        </p>

        <h2 className="rev">2. The data we collect</h2>
        <ul className="rev">
          <li><b>Website visitors.</b> Contact details you submit (name, work email, company, message), and basic technical data such as IP address, browser type and pages viewed.</li>
          <li><b>Prospects &amp; design partners.</b> Business-contact and evaluation details you share when you request a demo or a walkthrough.</li>
          <li><b>Platform customers.</b> Account and configuration data, and the security telemetry your connected tools expose to the platform. Kaska accesses connected systems with least-privilege permissions — read-only wherever possible — and retains only the minimum signal required to produce risk, control and compliance results.</li>
        </ul>
        <p className="rev">We do not sell personal data, and we do not use it for advertising.</p>

        <h2 className="rev">3. How we use it</h2>
        <ul className="rev">
          <li>To respond to enquiries and provide access to the platform and its results.</li>
          <li>To operate, secure, support and improve our services.</li>
          <li>To send service and, where you have opted in, product communications.</li>
          <li>To meet legal, regulatory and contractual obligations.</li>
        </ul>

        <h2 className="rev">4. Legal basis</h2>
        <p className="rev">
          We process personal data on the basis of your consent, to perform a contract with you or
          your organisation, to meet legal obligations, and for certain legitimate uses permitted
          under the DPDP Act. Where we rely on consent, you may withdraw it at any time.
        </p>

        <h2 className="rev">5. Sharing &amp; processors</h2>
        <p className="rev">
          We share personal data only with service providers who process it on our behalf (for
          example hosting and infrastructure), under confidentiality and data-protection terms; when
          required by law; and with your organisation&rsquo;s administrators for platform accounts.
          Any use of AI models is subject to our data-minimisation controls.
        </p>

        <h2 className="rev">6. Data residency</h2>
        <p className="rev">
          Hosting location and data-residency requirements are agreed with each customer as part of
          their agreement. Where hosting is used, we apply appropriate safeguards and honour the
          deployment and residency commitments made to each customer.
        </p>

        <h2 className="rev">7. Security</h2>
        <p className="rev">
          We apply layered technical and organisational safeguards — least-privilege access to
          connected systems, encryption of connector credentials and of data in transit, access
          controls and audit logging. No system is perfectly secure, but security is the core
          of what we do.
        </p>

        <h2 className="rev">8. Retention</h2>
        <p className="rev">
          We keep personal data only as long as needed for the purposes above or as required by law,
          then delete or anonymise it. Platform data retention follows the terms agreed with each
          customer.
        </p>

        <h2 className="rev">9. Your rights</h2>
        <p className="rev">
          Subject to applicable law, you may request access to, correction of, or erasure of your
          personal data, withdraw consent, and raise a grievance. To exercise these rights, contact
          <a href="mailto:privacy@kaskatech.com"> privacy@kaskatech.com</a>. For platform data held on
          behalf of a customer, we act on the instructions of that customer as the data fiduciary.
        </p>

        <h2 className="rev">10. Cookies</h2>
        <p className="rev">
          This website uses only the cookies needed to operate and secure the site and to understand
          basic, aggregated usage. We do not use advertising or cross-site tracking cookies.
        </p>

        <h2 className="rev">11. Children</h2>
        <p className="rev">Our website and platform are intended for business use and are not directed at children.</p>

        <h2 className="rev">12. Changes</h2>
        <p className="rev">
          We may update this policy from time to time. Material changes will be reflected by the
          &ldquo;last updated&rdquo; date above.
        </p>

        <h2 className="rev">13. Contact &amp; grievances</h2>
        <p className="rev">
          Privacy queries and grievances: <a href="mailto:privacy@kaskatech.com">privacy@kaskatech.com</a>.
          We aim to acknowledge and address grievances within the timelines required under the DPDP Act.
        </p>

        <p className="legal-foot rev">
          This policy is provided for transparency and does not itself create contractual obligations
          beyond those in your agreement with Kaska.
        </p>
      </section>
    </div>
  )
}
