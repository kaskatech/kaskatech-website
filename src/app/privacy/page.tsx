import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kaska Technologies & Services',
}

export default function PrivacyPage() {
  return (
    <section className="section bg-white">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-extrabold text-navy mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: April 2026</p>
        <div className="prose prose-slate max-w-none space-y-6 text-sm text-slate-600 leading-relaxed">
          <p>Kaska Technologies and Services Pvt Ltd ("Kaska", "we", "us") is committed to protecting your privacy in accordance with the Digital Personal Data Protection Act, 2023 (DPDPA) and applicable Indian law.</p>
          <h2 className="text-lg font-bold text-navy">Information We Collect</h2>
          <p>We collect information you provide directly — such as name, email, and organisation name when you fill in a contact form or request a demo. We do not sell your personal data to third parties.</p>
          <h2 className="text-lg font-bold text-navy">How We Use It</h2>
          <p>To respond to your enquiry, schedule demos, and send relevant product and service communications. You can opt out at any time by emailing info@kaskatech.com.</p>
          <h2 className="text-lg font-bold text-navy">Data Storage</h2>
          <p>Data is stored on servers located within India. For SafeCyber platform data, please refer to the SafeCyber Data Privacy Policy at safecyber.io/privacy.</p>
          <h2 className="text-lg font-bold text-navy">Contact</h2>
          <p>For privacy-related requests, email: <a href="mailto:privacy@kaskatech.com" className="text-blue hover:underline">privacy@kaskatech.com</a></p>
        </div>
      </div>
    </section>
  )
}
