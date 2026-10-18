import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Sparkles, 
  Clock, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Stethoscope,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import Doctors from '../components/Doctors';
import SEOHead from '../components/SEOHead';

export default function DoctorsPage({ onSelectDoctor, onBookClick }) {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Our Specialist Doctors in Forbesganj | Dr. S. Sagar & Dr. Rashmi Roy"
        description="Meet Dr. S. Sagar (MBBS, MS, FIAGES - Specialist Laparoscopic Surgeon) and Dr. Rashmi Roy (MBBS, MD - Dermatology, Skin & VD - Skin, Hair & Nail Specialist). Consultations available daily in Forbesganj."
        keywords="Dr S Sagar Forbesganj, Dr Rashmi Roy Dermatologist, Skin hair and nail specialist Forbesganj, Best surgeon Forbesganj, Laparoscopic doctor Araria, Skin doctor Forbesganj, Assistant Professor doctor Forbesganj"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Specialist Doctors</li>
          </ol>
        </nav>

        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-accent text-xs font-bold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Senior Medical Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Our Distinguished <span className="gradient-text-aesthetic">Specialist Doctors</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Consult experienced university professors and fellowship-trained medical experts specializing in advanced laparoscopic keyhole surgery, clinical trichology, and aesthetic dermatology in Forbesganj.
          </p>
        </div>

        {/* Doctor Showcase Grid Component */}
        <div className="mb-14">
          <Doctors onSelectDoctor={onSelectDoctor} />
        </div>

        {/* Clinical Qualifications & Specializations Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Dr. S. Sagar Qualifications */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between border-t-4 border-t-teal-accent">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary">
                    Dr. S. Sagar
                  </h3>
                  <span className="text-xs font-semibold text-teal-600">
                    MBBS, MS (General Surgery), FIAGES
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Assistant Professor &amp; Senior Laparoscopic Surgeon with specialized fellowship credentials in minimal access abdominal surgery from the Indian Association of Gastrointestinal Endo Surgeons (FIAGES).
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Clinical Expertise:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Laparoscopic Cholecystectomy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>3D Mesh Hernia Repair</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Keyhole Appendectomy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Ovarian Cyst Enucleation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Laparoscopic Tubal Ligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-accent flex-shrink-0" />
                    <span>Day-Care Minor Surgery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Daily Surgical Consultations</span>
              <a
                href="tel:+917909067784"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-50 text-teal-700 hover:bg-teal-100 font-bold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 79090 67784</span>
              </a>
            </div>
          </div>

          {/* Dr. Rashmi Roy Qualifications */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between border-t-4 border-t-rose-accent">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-accent flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-primary">
                    Dr. Rashmi Roy
                  </h3>
                  <span className="text-xs font-semibold text-rose-600">
                    MBBS, MD (Dermatology, Skin &amp; VD)
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Assistant Professor (Saharsa), Consultant Dermatologist, Skin, Hair &amp; Nail Specialist (त्वचा, बाल और नाखून विशेषज्ञ) with Fellowship in Aesthetic Dermatology and Dermatosurgery.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Clinical Expertise:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-accent flex-shrink-0" />
                    <span>GFC Hair Regrowth Therapy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-accent flex-shrink-0" />
                    <span>Medical Chemical Peels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-accent flex-shrink-0" />
                    <span>IV Infusions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-accent flex-shrink-0" />
                    <span>Laser Acne Scar Revision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-accent flex-shrink-0" />
                    <span>Vitiligo Repigmentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-accent flex-shrink-0" />
                    <span>Chronic Eczema &amp; Psoriasis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Daily Dermatology OPD</span>
              <a
                href="tel:+917091506123"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 70915 06123</span>
              </a>
            </div>
          </div>

        </div>

        {/* Founding Guiding Light & Mentor Tribute */}
        <div className="bg-gradient-to-br from-[#061527] via-[#0b2545] to-[#122b4d] rounded-3xl p-6 sm:p-10 border border-amber-400/30 text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Framed Portrait */}
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden bg-slate-900 border-2 border-amber-400/40 shadow-xl flex-shrink-0">
              <img
                src="/assets/dr-vijay-kumar.jpeg"
                alt="Late Dr. Vijay Kumar"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Tribute Text */}
            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Founding Inspiration &amp; Mentor</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                In Sacred Memory of Late Dr. Vijay Kumar
              </h3>
              <div className="text-xs sm:text-sm font-semibold text-amber-300">
                General Physician &amp; Surgeon • MBBS (ANMMCH, Gaya) • 28+ Years at Forbesganj Govt Hospital (1991–2019)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic pt-1">
                “His white coat taught me the value of responsibility, his wisdom taught me the power of knowledge, and his life taught me that being a doctor is not just a profession—it is a noble service.”
              </p>
            </div>

            {/* Read Tribute Link */}
            <div className="flex-shrink-0">
              <Link
                to="/tribute"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition"
              >
                <span>Read Full Tribute</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center py-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-heading font-extrabold text-xl text-primary mb-2">
            Need Expert Medical Guidance?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Book a clinical consultation with Dr. S. Sagar or Dr. Rashmi Roy to receive an accurate diagnosis and customized therapy plan.
          </p>
          <Link
            to="/book-appointment"
            className="btn-rose px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation Now</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
