import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Stethoscope, Sparkles, Send, CheckCircle2, Plus, Minus } from 'lucide-react';
import { saveLocalBooking } from '../utils/analytics';

export default function Appointment({ initialDoctor = '', initialTreatment = null }) {
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. S. Sagar');

  const sagarTreatments = [
    'Gallbladder Stones (पित्त की पथरी)',
    'Laparoscopic Appendix (अपेंडिक्स)',
    'Laparoscopic Hernia (हर्निया)',
    'Ovarian Cyst (ओवेरियन सिस्ट)',
    'Tubal Ligation (दूरबीन नसबंदी)',
    'General Surgery Consultation',
    'Other Surgical Procedure'
  ];

  const rashmiTreatments = [
    'Skin, Hair & Nail Consultation (त्वचा, बाल, नाखून)',
    'GFC Hair Regrowth & Hair Fall',
    'Severe Acne & Pimple Scars',
    'Chemical Peeling & Skin Glow',
    'Vitiligo / White Patches (सफेद दाग)',
    'Melasma & Pigmentation',
    'Eczema & Psoriasis',
    'General Dermatology Consultation'
  ];

  const getTodayStr = () => new Date().toISOString().split('T')[0];
  const getTomorrowStr = () => new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor: 'Dr. S. Sagar',
    treatment: sagarTreatments[0],
    date: getTomorrowStr(),
    time: 'Morning (10:00 AM - 01:00 PM)',
    message: '',
  });

  const [showNotes, setShowNotes] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDoctor) {
      const isRashmi = initialDoctor.toLowerCase().includes('rashmi');
      const docName = isRashmi ? 'Dr. Rashmi Roy' : 'Dr. S. Sagar';
      setSelectedDoctor(docName);
      setFormData(prev => ({
        ...prev,
        doctor: docName,
        treatment: isRashmi ? rashmiTreatments[0] : sagarTreatments[0]
      }));
    }
    if (initialTreatment) {
      const isRashmi = initialTreatment.doctor?.toLowerCase().includes('rashmi');
      const docName = isRashmi ? 'Dr. Rashmi Roy' : 'Dr. S. Sagar';
      setSelectedDoctor(docName);
      setFormData(prev => ({
        ...prev,
        doctor: docName,
        treatment: initialTreatment.title,
      }));
    }
  }, [initialDoctor, initialTreatment]);

  const handleDoctorChange = (docName) => {
    setSelectedDoctor(docName);
    const defaultTreatment = docName === 'Dr. Rashmi Roy' ? rashmiTreatments[0] : sagarTreatments[0];
    setFormData(prev => ({
      ...prev,
      doctor: docName,
      treatment: defaultTreatment
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    const isRashmi = selectedDoctor.includes('Rashmi');
    const destPhone = isRashmi ? '917091506123' : '917909067784';
    const docFull = isRashmi
      ? 'Dr. Rashmi Roy (MBBS, MD - Skin, Hair & Nail Specialist)'
      : 'Dr. S. Sagar (Laparoscopic Surgeon)';

    // WhatsApp pre-filled message
    const waText = encodeURIComponent(
      `*New Consultation Booking Request - Janki Clinic Forbesganj*\n\n` +
      `👤 *Patient Name:* ${formData.name}\n` +
      `📞 *Phone Number:* ${formData.phone}\n` +
      `👨‍⚕️ *Selected Doctor:* ${docFull}\n` +
      `🩺 *Concern:* ${formData.treatment}\n` +
      `📅 *Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Time Slot:* ${formData.time}\n` +
      (formData.message ? `📝 *Notes/Symptoms:* ${formData.message}\n` : '') +
      `\n_Sent via jankiclinic.com online appointment engine_`
    );

    // Save booking locally into browser database / file export engine
    saveLocalBooking({
      patientName: formData.name,
      phone: formData.phone,
      doctor: docFull,
      treatment: formData.treatment,
      date: formData.date || 'Earliest Available',
      slot: formData.time,
      symptoms: formData.message
    });

    window.open(`https://wa.me/${destPhone}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  const isRashmi = selectedDoctor.includes('Rashmi');

  return (
    <section id="book-appointment" className="py-12 sm:py-16 bg-gradient-to-br from-primary-dark via-primary to-slate-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wide uppercase">
              <Calendar className="w-3.5 h-3.5" />
              <span>Fast 30-Second Booking</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Book Doctor Consultation in <span className="text-teal-400">Forbesganj</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Skip clinic queue waiting. Submit your request for instant priority token verification on WhatsApp. Zero advance fee required.
            </p>

            {/* Quick Contact Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href="tel:+917909067784"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Dr. S. Sagar (Surgery Helpline)</div>
                  <div className="text-sm font-bold text-white">+91 79090 67784</div>
                </div>
              </a>

              <a
                href="tel:+917091506123"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">Dr. Rashmi Roy (Skin, Hair &amp; Nail OPD)</div>
                  <div className="text-sm font-bold text-white">+91 70915 06123</div>
                </div>
              </a>
            </div>

            <div className="p-3 rounded-2xl bg-teal-900/30 border border-teal-500/30 text-[11px] text-teal-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span><strong>24x7 Laparoscopy:</strong> Acute appendicitis or hernia admissions anytime.</span>
            </div>
          </div>

          {/* Right Form Card - Easy & Small */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-100">

              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-primary">
                    Quick Appointment Form
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Takes only 15 seconds • Instant WhatsApp token
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  FREE BOOKING
                </span>
              </div>

              {/* Doctor Switcher Pills */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-4">
                <button
                  type="button"
                  onClick={() => handleDoctorChange('Dr. S. Sagar')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${!isRashmi
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span className="truncate">Dr. S. Sagar (General & Laparoscopic Surgeon
                    )</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDoctorChange('Dr. Rashmi Roy')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${isRashmi
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="truncate">Dr. Rashmi (Skin/Hair/Nail)</span>
                </button>
              </div>

              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp booking opened! Our desk will confirm your token shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Patient Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile / WhatsApp Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Treatment & Preferred Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Concern / Treatment
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent transition"
                    >
                      {(isRashmi ? rashmiTreatments : sagarTreatments).map((t, i) => (
                        <option key={i} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent transition"
                      >
                        <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                        <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                        <option value="Immediate Emergency">Immediate Emergency</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Date with Quick Chips */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Consultation Date
                    </label>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, date: getTodayStr() }))}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded transition ${formData.date === getTodayStr() ? (isRashmi ? 'bg-rose-500 text-white' : 'bg-teal-600 text-white') : 'bg-slate-100 text-slate-600'
                          }`}
                      >
                        Today
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, date: getTomorrowStr() }))}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded transition ${formData.date === getTomorrowStr() ? (isRashmi ? 'bg-rose-500 text-white' : 'bg-teal-600 text-white') : 'bg-slate-100 text-slate-600'
                          }`}
                      >
                        Tomorrow
                      </button>
                    </div>
                  </div>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      name="date"
                      min={getTodayStr()}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent transition"
                    />
                  </div>
                </div>

                {/* Optional Symptoms Toggle (Keeps form small) */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowNotes(!showNotes)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-primary transition"
                  >
                    {showNotes ? <Minus className="w-3 h-3 text-slate-400" /> : <Plus className="w-3 h-3 text-teal-600" />}
                    <span>{showNotes ? 'Hide symptoms note' : '+ Add symptoms or medical note (optional)'}</span>
                  </button>

                  {showNotes && (
                    <div className="mt-2 animate-in fade-in duration-150">
                      <textarea
                        name="message"
                        rows="2"
                        placeholder="Briefly describe your symptoms or medical concern..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent transition resize-none"
                      />
                    </div>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 cursor-pointer ${isRashmi
                    ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'
                    : 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/20'
                    }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm on WhatsApp (Instant Token)</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
