import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  MapPin, 
  CheckCircle2, 
  Activity, 
  Calendar, 
  Phone, 
  ArrowRight,
  Clock,
  Building2,
  Users
} from 'lucide-react';
import About from '../components/About';
import Tribute from '../components/Tribute';
import SEOHead from '../components/SEOHead';

export default function AboutPage({ onBookClick }) {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="About Janki Skin Aesthetic & Laparoscopic Centre Forbesganj | Our Mission & Faculty"
        description="Learn about Forbesganj's premier multi-speciality centre led by Assistant Professors Dr. S. Sagar (MS Gen Surgery) & Dr. Rashmi Roy (MD Dermatology). 28+ years of medical legacy (Estb. 1990) and surgical excellence in Seemanchal, Bihar."
        keywords="About Janki Clinic Forbesganj, Laparoscopic hospital Araria, Dr S Sagar Forbesganj, Dr Rashmi Roy clinic, Skin hair and nail specialist Forbesganj, Best hospital Forbesganj Bihar"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">About Us</li>
          </ol>
        </nav>

        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Healthcare Leadership in Forbesganj</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            About Janki Skin Aesthetic &amp; <span className="text-teal-accent">Laparoscopic Centre</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Delivering cutting-edge minimally invasive keyhole surgical excellence and advanced aesthetic dermatology to Forbesganj, Araria, and the surrounding Seemanchal region.
          </p>
        </div>

        {/* Embedded Core About Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-12">
          <About />
        </div>

        {/* Our Guiding Light & Memorial Heritage */}
        <div className="rounded-3xl overflow-hidden mb-12 shadow-xl border border-amber-400/20">
          <Tribute showFullLink={true} />
        </div>

        {/* Clinical Mission, Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-accent flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">
                Our Clinical Mission
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To eliminate the need for patients in Seemanchal to travel hundreds of kilometers to distant metros for standard surgical care. We provide painless 4K keyhole surgery and university-grade dermatology right at their doorstep.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-accent flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">
                Our Aesthetic Vision
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To deliver scientifically validated, ethical aesthetic and hair restoration protocols—such as autologous GFC, medical chemical peeling, and laser scar revision—without misleading promises or unmonitored steroid misuse.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">
                Sterile Infrastructure
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dedicated sterile minor operating suites with continuous autoclave monitoring, computerized laser systems, patient air-conditioned waiting lounges, and rapid 24-hour surgical discharge protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Doctors Section Linkage */}
        <div className="bg-gradient-to-br from-[#0b2545] to-[#173e72] rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
              Faculty &amp; Specialists
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Led by Assistant Professors &amp; Fellowship Surgeons
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Dr. S. Sagar (MS General Surgery, FIAGES) and Dr. Rashmi Roy (MBBS, MD - Dermatology, Skin, Hair &amp; Nail Specialist) provide comprehensive diagnostic examinations, transparent treatment counsel, and direct post-operative follow-up.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/doctors"
              className="btn-rose px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
            >
              <span>View Specialist Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/book-appointment"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-primary text-xs sm:text-sm font-bold border border-white/20 transition shadow-sm"
            >
              Book Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
