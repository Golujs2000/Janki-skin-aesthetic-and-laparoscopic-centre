import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Stethoscope, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Appointment({ initialDoctor = '', initialTreatment = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor: initialDoctor || 'Dr. S. Sagar (Laparoscopic Surgeon)',
    treatment: initialTreatment ? initialTreatment.title : 'General Consultation',
    date: '',
    time: 'Morning (10:00 AM - 01:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDoctor) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
    }
    if (initialTreatment) {
      setFormData((prev) => ({
        ...prev,
        treatment: initialTreatment.title,
        doctor: initialTreatment.doctor,
      }));
    }
  }, [initialDoctor, initialTreatment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    // Format WhatsApp pre-filled message
    const waText = encodeURIComponent(
      `*New Consultation Booking Request - Janki Clinic Forbesganj*\n\n` +
      `👤 *Patient Name:* ${formData.name}\n` +
      `📞 *Phone Number:* ${formData.phone}\n` +
      `👨‍⚕️ *Selected Doctor:* ${formData.doctor}\n` +
      `🩺 *Procedure/Speciality:* ${formData.treatment}\n` +
      `📅 *Preferred Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Preferred Slot:* ${formData.time}\n` +
      `📝 *Notes/Symptoms:* ${formData.message || 'None'}\n\n` +
      `_Sent via jankiclinic.com online appointment engine_`
    );

    // Open WhatsApp directly
    window.open(`https://wa.me/917909067784?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="book-appointment" className="py-16 sm:py-24 bg-gradient-to-br from-primary-dark via-primary to-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wide uppercase">
              <Calendar className="w-3.5 h-3.5" />
              <span>Instant Confirmation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Schedule Your Consultation in <span className="text-teal-400">Forbesganj</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Avoid long clinic waiting times. Submit your consultation request online, and receive instant confirmation via WhatsApp directly from our desk.
            </p>

            {/* Quick Contact Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Primary Reception & WhatsApp</div>
                  <a href="tel:+917909067784" className="text-base font-bold text-white hover:text-teal-300 transition">
                    +91 79090 67784
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Dermatology OPD Direct</div>
                  <a href="tel:+917091506123" className="text-base font-bold text-white hover:text-rose-300 transition">
                    +91 70915 06123
                  </a>
                </div>
              </div>
            </div>

            {/* 24x7 Emergency Notice */}
            <div className="p-4 rounded-2xl bg-teal-900/40 border border-teal-500/30 text-xs text-teal-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
              <span>
                <strong>24x7 Laparoscopy Emergency:</strong> For acute appendicitis, twisted ovarian cysts, or strangulated hernia, call our emergency hotline directly without appointment.
              </span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-1">
                Book Appointment Online
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details to book a consultation with our senior specialist doctors.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>WhatsApp Booking Initiated!</strong>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      Your booking text was opened in WhatsApp. Our reception desk will confirm your token number shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile / WhatsApp Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Doctor Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Doctor *
                    </label>
                    <div className="relative">
                      <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition appearance-none"
                      >
                        <option value="Dr. S. Sagar (Laparoscopic Surgeon)">Dr. S. Sagar (Laparoscopic Surgeon)</option>
                        <option value="Dr. Rashmi Ray (MD Dermatologist & Aesthetician)">Dr. Rashmi Ray (MD Dermatologist & Aesthetician)</option>
                        <option value="Any Available Specialist">Any Available Specialist</option>
                      </select>
                    </div>
                  </div>

                  {/* Treatment Category */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Treatment or Reason
                    </label>
                    <input
                      type="text"
                      name="treatment"
                      placeholder="e.g. Gallbladder Stone, GFC Hair, Acne, Hernia"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    />
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Slot
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    >
                      <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                      <option value="Immediate Emergency">Immediate Emergency</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Brief Symptoms / Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Briefly describe your symptoms or medical history..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-accent to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold text-sm py-3.5 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Confirm via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
