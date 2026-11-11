import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertCircle, PhoneCall, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Terms & Conditions | Janki Skin Aesthetic & Laparoscopic Centre"
        description="Terms of service, medical disclaimer, and consultation guidelines for Janki Skin Aesthetic & Laparoscopic Centre, Forbesganj."
        keywords="Terms and conditions Janki Clinic, Medical disclaimer Forbesganj, Appointment policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Terms &amp; Conditions</li>
          </ol>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Clinical Terms of Service</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-primary font-heading">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date: October 2026 • Janki Skin Aesthetic &amp; Laparoscopic Centre, Forbesganj, Bihar
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              1. General Acceptance
            </h2>
            <p>
              By accessing the website of <strong>Janki Skin Aesthetic &amp; Laparoscopic Centre</strong> (<code>https://jankiskinandlaparoscopiccentre.com</code>) or utilizing our appointment scheduling, WhatsApp booking assistance, or telephone enquiry services, you acknowledge and agree to comply with the terms and conditions outlined herein. If you do not accept these terms, please refrain from using this website.
            </p>
          </section>

          <section className="space-y-3 p-4 bg-amber-50/70 border border-amber-200 rounded-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-bold text-amber-900 text-sm">Medical Disclaimer &amp; Non-Emergency Notice</h3>
                <p className="text-amber-800 text-xs leading-relaxed">
                  The clinical information, symptom descriptions, and educational materials provided across this website are intended solely for general patient education and awareness. <strong>They do not constitute formal medical diagnosis or replace personalized consultation with a licensed medical practitioner.</strong> For acute surgical emergencies (e.g., perforated appendix, strangulated hernia, severe acute abdominal trauma) or anaphylactic skin reactions, immediately visit an emergency trauma center or call national ambulance services (108 / 112).
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              2. Appointment Booking &amp; Slot Confirmation
            </h2>
            <p>
              Online form submissions and WhatsApp chat requests represent appointment requests. Confirmation is completed upon phone or WhatsApp verification by our front-desk reception desk.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li><strong>Timeliness:</strong> Patients are requested to arrive at the centre 15 minutes prior to their designated consultation slot for vitals registration and initial paperwork.</li>
              <li><strong>Emergency Prioritization:</strong> In the event of an urgent surgical procedure or emergency trauma case, Dr. S. Sagar or Dr. Rashmi Roy may be called for immediate patient intervention. In such rare instances, routine consultation slots may be slightly delayed or rescheduled with patient consent.</li>
              <li><strong>Rescheduling &amp; Cancellations:</strong> We request at least 2 hours prior notice via phone or WhatsApp at <strong>+91 70915 06123</strong> to reschedule your appointment without inconvenience.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              3. Tele-Triaging &amp; Digital Communications
            </h2>
            <p>
              Pre-visit interactions over WhatsApp or telephone assist patients in selecting the appropriate specialist and bringing relevant historical ultrasound or pathology reports. Digital guidance does not substitute in-person clinical examinations, palpations, or dermoscopic assessments. Final diagnosis is established only inside the consultation chamber.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              4. Patient Responsibilities
            </h2>
            <p>
              To ensure safe surgical and dermatological outcomes, patients and their guardians agree to provide accurate and truthful medical histories, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Past surgical history and previous reactions to local or general anesthesia.</li>
              <li>Current prescription medications (including blood thinners, anticoagulants, or immunosuppressants).</li>
              <li>Known allergies to medications, latex, or topical preparations.</li>
              <li>Adherence to pre-operative fasting guidelines (NPO guidelines) prior to planned laparoscopic procedures.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              5. Intellectual Property
            </h2>
            <p>
              All website text, custom medical diagrams, logos, clinical photography, and responsive UI components are proprietary intellectual property of Janki Skin Aesthetic &amp; Laparoscopic Centre and protected under Indian copyright statutes. Unauthorized reproduction or scraping is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              6. Jurisdiction &amp; Dispute Resolution
            </h2>
            <p>
              These terms are governed by the laws of India. Any legal dispute or claim arising out of the use of this website or clinical services shall be subject to the exclusive jurisdiction of the competent courts in Forbesganj / Araria District, Bihar.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900">Have questions regarding clinical terms?</p>
              <p className="text-xs text-slate-500">Contact our administrative desk directly.</p>
            </div>
            <a
              href="tel:+917091506123"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:bg-primary-hover transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline: +91 70915 06123</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
