import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Privacy Policy | Janki Skin Aesthetic & Laparoscopic Centre"
        description="Patient medical confidentiality and website privacy policy for Janki Skin Aesthetic & Laparoscopic Centre, Forbesganj, Bihar."
        keywords="Privacy policy Janki Clinic, Patient confidentiality, Medical data protection Bihar"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Privacy Policy</li>
          </ol>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Patient Data Confidentiality</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-primary font-heading">
              Privacy Policy &amp; Patient Confidentiality
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Last Updated: October 2026 • Janki Skin Aesthetic &amp; Laparoscopic Centre, Forbesganj
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              1. Commitment to Medical Confidentiality
            </h2>
            <p>
              At <strong>Janki Skin Aesthetic &amp; Laparoscopic Centre</strong> ("we", "our", or "the Centre"), protecting the privacy and personal health information of our patients is paramount. This Privacy Policy details how we collect, utilize, store, and safeguard data acquired through our website (<code>https://jankiskinandlaparoscopiccentre.com</code>), appointment booking forms, WhatsApp communication desks, and on-premises clinical intake procedures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              2. Information We Collect
            </h2>
            <p>When you interact with our website or request consultation appointments, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Contact Identifiers:</strong> Patient name, phone number, city/town of residence, and age.</li>
              <li><strong>Clinical Inquiries:</strong> Selected specialty (Laparoscopic Surgery or Dermatology), preferred doctor, and optional symptoms or medical notes.</li>
              <li><strong>Technical Diagnostics:</strong> Browser type, anonymized IP address, device viewport, and referral sources used solely for optimizing website loading speed and navigation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              3. Purpose of Data Processing
            </h2>
            <p>Your information is processed strictly for legitimate healthcare and administrative purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Scheduling doctor consultation slots and issuing priority OPD token numbers.</li>
              <li>Direct patient communication regarding appointment confirmations, preoperative fasting instructions, and discharge care follow-ups.</li>
              <li>Emergency medical coordination for acute surgical conditions (appendicitis, strangulated hernia, acute trauma).</li>
            </ul>
            <p className="font-semibold text-slate-800">
              We never sell, rent, trade, or commercialize patient information or phone numbers to third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              4. WhatsApp &amp; Third-Party Services
            </h2>
            <p>
              Our website provides convenient direct integration with WhatsApp (Meta Platforms) to enable swift token requests without complex account registration. When clicking WhatsApp action buttons, your pre-filled inquiry is transmitted through WhatsApp’s end-to-end encrypted messaging infrastructure under Meta's privacy terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              5. Data Security Standards
            </h2>
            <p>
              All online communications with our website are encrypted using industry-standard Transport Layer Security (TLS/HTTPS). Clinical records generated during outpatient consultations and surgical procedures are maintained in accordance with National Medical Commission (NMC) ethical regulations and applicable Indian healthcare data standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              6. Contact for Privacy Inquiries
            </h2>
            <p>
              For questions regarding this policy or to request updates to your appointment information, please contact:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
              <div><strong>Janki Skin Aesthetic &amp; Laparoscopic Centre</strong></div>
              <div>Referral Hospital Road, Forbesganj, Araria, Bihar – 854318</div>
              <div>Hospital Helpline: <a href="tel:+917091506123" className="text-teal-600 font-bold hover:underline">+91 70915 06123</a></div>
              <div>Website: <a href="https://jankiskinandlaparoscopiccentre.com" className="text-teal-600 font-bold hover:underline">jankiskinandlaparoscopiccentre.com</a></div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
