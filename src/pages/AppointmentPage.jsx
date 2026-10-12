import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Sparkles, 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  User, 
  HeartPulse, 
  Activity,
  MessageCircle
} from 'lucide-react';
import Appointment from '../components/Appointment';
import SEOHead from '../components/SEOHead';

export default function AppointmentPage({ initialDoctor, initialTreatment }) {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Book Appointment Online | Dr. S. Sagar & Dr. Rashmi Ray Forbesganj"
        description="Book direct consultation for laparoscopic surgery (gallbladder, hernia, appendix) or dermatology (GFC hair regrowth, peels, acne, vitiligo) in Forbesganj. Instant WhatsApp confirmation."
        keywords="Book appointment Janki Clinic Forbesganj, Laparoscopic doctor appointment Araria, Dermatologist consultation Forbesganj, Online doctor appointment Bihar"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Book Online Appointment</li>
          </ol>
        </nav>

        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-accent text-xs font-bold tracking-wide uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Clinical Scheduling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Schedule Your <span className="gradient-text-aesthetic">Specialist Consultation</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Reserve your consultation slot with Dr. S. Sagar (Laparoscopic Surgery) or Dr. Rashmi Ray (Aesthetics &amp; Dermatology). Receive instant WhatsApp &amp; phone confirmation.
          </p>
        </div>

        {/* Embedded Appointment Form Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-12">
          <Appointment 
            initialDoctor={initialDoctor} 
            initialTreatment={initialTreatment} 
          />
        </div>

        {/* Trust Badges & Emergency Helplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-accent flex items-center justify-center flex-shrink-0 mt-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary">Zero Waiting Time</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Prior digital appointments receive priority tokens and minimal clinic waiting.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-accent flex items-center justify-center flex-shrink-0 mt-1">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary">Surgical Admissions 24x7</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Call <a href="tel:+917909067784" className="text-rose-600 font-bold hover:underline">+91 79090 67784</a> directly for acute emergency surgical pain.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary">Instant WhatsApp Sync</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Direct booking coordination and location pin delivered straight to your WhatsApp.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
