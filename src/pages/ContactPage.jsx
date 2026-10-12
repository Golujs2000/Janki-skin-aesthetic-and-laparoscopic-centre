import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'Laparoscopic Surgery',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `*New Contact Inquiry - Janki Centre Website*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Department:* ${formData.department}%0A*Message:* ${formData.message || 'I would like to inquire about consultation.'}`;
    window.open(`https://wa.me/917909067784?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Contact Janki Centre Forbesganj | Referral Hospital Road | Helplines"
        description="Visit Janki Skin Aesthetic & Laparoscopic Centre opposite Sub-Divisional Referral Hospital, Forbesganj, Araria, Bihar 854318. Call: +91 79090 67784 / +91 70915 06123."
        keywords="Contact Janki Clinic Forbesganj, Referral hospital road Forbesganj, Dr S Sagar phone number, Dr Rashmi Ray contact, Laparoscopy appointment Forbesganj"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Contact &amp; Location</li>
          </ol>
        </nav>

        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Clinic Location &amp; Accessibility</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Contact Janki Centre <span className="text-teal-accent">Forbesganj</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Conveniently situated opposite the Sub-Divisional Referral Hospital on Referral Hospital Road, Forbesganj (District Araria, Bihar). 
          </p>
        </div>

        {/* Embedded Contact Component */}
        <div className="mb-12">
          <Contact />
        </div>

        {/* OPD Hours & Direct Emergency Helplines Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <Clock className="w-5 h-5 text-teal-accent" />
              <h3 className="font-heading font-bold text-lg text-primary">
                OPD &amp; Emergency Consultation Schedule
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Surgical Emergency &amp; Admissions</span>
                <span className="font-bold text-teal-700 bg-teal-100 px-2.5 py-1 rounded-full text-xs">24x7 Available</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Dr. S. Sagar (Laparoscopic Surgery)</span>
                <span className="font-bold text-slate-800">Daily Morning &amp; Evening</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Dr. Rashmi Ray (Skin &amp; Aesthetics)</span>
                <span className="font-bold text-slate-800">Daily 10:00 AM – 05:00 PM</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <span className="font-semibold text-slate-700">Minor OT &amp; Day-Care Procedures</span>
                <span className="font-bold text-slate-800">Prior Slot Booking Recommended</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              * Note: For immediate acute abdominal pain or emergency surgical admission, call directly without prior appointment.
            </div>
          </div>

          {/* Quick Callback / Message Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-primary mb-1">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our clinical desk will respond swiftly with doctor availability and token numbers.
            </p>

            {sent ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-teal-accent mx-auto" />
                <h4 className="font-bold text-primary text-sm">Message Sent via WhatsApp!</h4>
                <p className="text-xs text-slate-600">
                  Our hospital team has received your query and will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-accent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-accent"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Specialty</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-accent bg-white"
                    >
                      <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
                      <option value="Aesthetics & Trichology">Aesthetics &amp; Hair</option>
                      <option value="Clinical Dermatology">Clinical Dermatology</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Message or Query</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your health question or preferred visit time..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-rose py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Hospital Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
