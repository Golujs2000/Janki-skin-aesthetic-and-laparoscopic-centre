import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Send,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  Check,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { doctorsData } from '../data/doctors';
import { saveLocalBooking } from '../utils/analytics';

export default function AppointmentPage({ initialDoctor = '', initialTreatment = null }) {
  // Doctor Selection State: default to Dr. S. Sagar
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-sagar');

  const sagarTreatments = [
    'Gallbladder Stones (पित्त की पथरी)',
    'Laparoscopic Appendix (अपेंडिक्स)',
    'Laparoscopic Hernia (हर्निया)',
    'Ovarian Cyst (ओवेरियन सिस्ट)',
    'Tubal Ligation (दूरबीन नसबंदी)',
    'General Surgery Consultation',
    'Other Surgical Concern'
  ];

  const rashmiTreatments = [
    'Skin, Hair & Nail Consultation (त्वचा, बाल, नाखून)',
    'GFC Hair Regrowth & Hair Fall',
    'Severe Acne & Pimple Scars',
    'Chemical Peeling & Skin Glow',
    'Vitiligo / White Patches (सफेद दाग)',
    'Melasma & Pigmentation',
    'Eczema, Psoriasis & Skin Allergy',
    'Laser Skin Revision',
    'General Dermatology Consultation'
  ];

  // Helper date generators
  const getTodayStr = () => new Date().toISOString().split('T')[0];
  const getTomorrowStr = () => new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const getDayAfterStr = () => new Date(Date.now() + 172800000).toISOString().split('T')[0];

  const quickDates = [
    { label: 'Today', value: getTodayStr() },
    { label: 'Tomorrow', value: getTomorrowStr() },
    { label: 'Day After', value: getDayAfterStr() }
  ];

  // Compact Form State
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    treatment: sagarTreatments[0],
    date: getTomorrowStr(),
    slot: 'Morning OPD (10:00 AM – 01:00 PM)',
    age: '',
    gender: '',
    city: '',
    symptoms: '',
  });

  const [showOptional, setShowOptional] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Sync props if navigated with initial doctor or treatment
  useEffect(() => {
    if (initialDoctor) {
      const match = doctorsData.find(d => d.name.toLowerCase().includes(initialDoctor.toLowerCase()));
      if (match) {
        setSelectedDoctorId(match.id);
        setFormData(prev => ({
          ...prev,
          treatment: match.id === 'dr-sagar' ? sagarTreatments[0] : rashmiTreatments[0]
        }));
      }
    }
    if (initialTreatment) {
      const isRashmi = initialTreatment.doctor?.toLowerCase().includes('rashmi');
      const docId = isRashmi ? 'dr-rashmi' : 'dr-sagar';
      setSelectedDoctorId(docId);
      setFormData(prev => ({
        ...prev,
        treatment: initialTreatment.title,
      }));
    }
  }, [initialDoctor, initialTreatment]);

  // Handle Doctor Switch
  const handleSelectDoctor = (id) => {
    setSelectedDoctorId(id);
    const defaultTreatment = id === 'dr-sagar' ? sagarTreatments[0] : rashmiTreatments[0];
    setFormData(prev => ({
      ...prev,
      treatment: defaultTreatment
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const currentDoctorObj = doctorsData.find(d => d.id === selectedDoctorId) || doctorsData[0];
  const isRose = currentDoctorObj.theme === 'rose';
  const destinationPhone = selectedDoctorId === 'dr-rashmi' ? '917091506123' : '917909067784';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    const optionalDetails = [
      formData.gender ? `Gender: ${formData.gender}` : null,
      formData.age ? `Age: ${formData.age}` : null,
      formData.city ? `City: ${formData.city}` : null,
    ].filter(Boolean).join(', ');

    // Build structured, clean WhatsApp message
    const message = encodeURIComponent(
      `🏥 *JANKI CLINIC FORBESGANJ - APPOINTMENT REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Patient:* ${formData.patientName}${optionalDetails ? ` (${optionalDetails})` : ''}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `👨‍⚕️ *Doctor:* ${currentDoctorObj.name} (${currentDoctorObj.specialityBadge})\n` +
      `🩺 *Concern:* ${formData.treatment}\n` +
      `📅 *Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Time Slot:* ${formData.slot}\n` +
      (formData.symptoms ? `📝 *Notes/Symptoms:* ${formData.symptoms}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent via jankiclinic.com online appointment engine_`
    );

    // Save booking locally into browser database / local files backup
    saveLocalBooking({
      patientName: formData.patientName,
      phone: formData.phone,
      doctor: `${currentDoctorObj.name} (${currentDoctorObj.specialityBadge})`,
      treatment: formData.treatment,
      date: formData.date || 'Earliest Available',
      slot: formData.slot,
      symptoms: [formData.symptoms, optionalDetails].filter(Boolean).join(' | ')
    });

    window.open(`https://wa.me/${destinationPhone}?text=${message}`, '_blank');
    setBookingConfirmed(true);
  };

  const appointmentFaqs = [
    {
      q: 'Do I need to pay any advance booking fee?',
      a: 'No. Online appointment booking on our website is 100% free with zero advance fee. Consultation fees are paid directly at the clinic reception counter during your visit.'
    },
    {
      q: 'What is the consultation schedule for Dr. S. Sagar & Dr. Rashmi Roy?',
      a: 'Dr. S. Sagar (MS Surgery, Laparoscopic Surgeon) conducts consultation and surgical admissions daily (प्रतिदिन, 10:00 AM – 07:00 PM). Dr. Rashmi Roy (MBBS, MD - Skin, Hair & Nail Specialist) consults on Wednesday (1:00 PM – 7:00 PM), Saturday (10:00 AM – 7:00 PM), and Sunday (10:00 AM – 7:00 PM).'
    },
    {
      q: 'How quickly will I receive my appointment confirmation?',
      a: 'Instantly! Submitting this easy form sends your request directly to our reception WhatsApp desk, where our staff assigns you a priority token number.'
    },
    {
      q: 'Can patients from Araria, Raniganj, Purnea, or Nepal book in advance?',
      a: 'Yes, patients traveling from outside Forbesganj or across the Nepal border (Biratnagar/Jogbani) are given priority morning slots so they can complete consultation and return on the same day.'
    },
    {
      q: 'Is emergency laparoscopic surgery available 24x7?',
      a: 'Yes! For acute emergencies like appendicitis, ruptured ovarian cyst, or strangulated hernia, our emergency surgical line (+91 79090 67784) operates 24 hours a day.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <SEOHead
        title="Quick Appointment Booking | Janki Skin & Laparoscopic Centre Forbesganj"
        description="Book your consultation with Dr. S. Sagar (Laparoscopic Surgeon) or Dr. Rashmi Roy (MBBS, MD - Skin, Hair & Nail Specialist) in Forbesganj. Fast 30-second WhatsApp booking."
        keywords="Book appointment Janki Clinic Forbesganj, Laparoscopic doctor appointment Araria, Dr Rashmi Roy Forbesganj, Skin hair and nail doctor Forbesganj, Dermatologist consultation Forbesganj, Online doctor appointment Bihar"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Book Appointment</li>
          </ol>
        </nav>

        {/* Compact Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Fast 30-Second Booking • No Advance Fee</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-2.5">
            Book Specialist <span className="gradient-text-aesthetic">Appointment</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Fill your basic details below to receive an instant priority digital token on WhatsApp.
          </p>
        </div>

        {/* Main Booking Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12">

          {/* Easy & Small Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md">

            {/* Step 1: Sleek 2-Doctor Segmented Switcher */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Specialist Doctor
              </label>
              <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
                <button
                  type="button"
                  onClick={() => handleSelectDoctor('dr-sagar')}
                  className={`p-2.5 rounded-xl text-left transition flex items-center gap-2.5 cursor-pointer ${selectedDoctorId === 'dr-sagar'
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                      : 'text-slate-700 hover:bg-white/60'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${selectedDoctorId === 'dr-sagar' ? 'bg-white/20 text-white' : 'bg-teal-100 text-teal-700'
                    }`}>
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading font-bold text-xs sm:text-sm truncate">Dr. S. Sagar</div>
                    <div className={`text-[10px] truncate ${selectedDoctorId === 'dr-sagar' ? 'text-teal-100' : 'text-slate-500'}`}>
                      General & Laparoscopic Surgeon

                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectDoctor('dr-rashmi')}
                  className={`p-2.5 rounded-xl text-left transition flex items-center gap-2.5 cursor-pointer ${selectedDoctorId === 'dr-rashmi'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                      : 'text-slate-700 hover:bg-white/60'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${selectedDoctorId === 'dr-rashmi' ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-700'
                    }`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading font-bold text-xs sm:text-sm truncate">Dr. Rashmi Roy</div>
                    <div className={`text-[10px] truncate ${selectedDoctorId === 'dr-rashmi' ? 'text-rose-100' : 'text-slate-500'}`}>
                      Skin, Hair &amp; Nail (Wed, Sat, Sun)
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: The Core Easy Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="patientName"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp / Mobile *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Treatment & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Treatment / Reason
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                  >
                    {(selectedDoctorId === 'dr-sagar' ? sagarTreatments : rashmiTreatments).map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      name="slot"
                      value={formData.slot}
                      onChange={handleInputChange}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    >
                      <option value="Morning OPD (10:00 AM – 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                      <option value="Evening OPD (04:00 PM – 07:00 PM)">Evening (04:00 PM – 07:00 PM)</option>
                      <option value="Urgent Laparoscopy Emergency (24x7)">Urgent Emergency (24x7)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Date with Quick Chips */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Preferred Date
                  </label>
                  {/* Quick Date Chips */}
                  <div className="flex items-center gap-1.5">
                    {quickDates.map((qd, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setFormData(prev => ({ ...prev, date: qd.value }))}
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-lg transition ${formData.date === qd.value
                            ? isRose ? 'bg-rose-500 text-white' : 'bg-teal-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                      >
                        {qd.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    name="date"
                    min={getTodayStr()}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3.5 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                  />
                </div>
              </div>

              {/* Collapsible Optional Details (Keeps form small by default) */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowOptional(!showOptional)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-primary transition"
                >
                  {showOptional ? <Minus className="w-3.5 h-3.5 text-slate-400" /> : <Plus className="w-3.5 h-3.5 text-teal-600" />}
                  <span>{showOptional ? 'Hide optional details' : '+ Add symptoms, age or city (optional)'}</span>
                </button>

                {showOptional && (
                  <div className="mt-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs animate-in fade-in duration-200">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          placeholder="e.g. 35"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-slate-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-2 py-1.5 text-xs rounded-lg bg-white border border-slate-200"
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Child">Child</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          City / Area
                        </label>
                        <input
                          type="text"
                          name="city"
                          placeholder="e.g. Forbesganj"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-slate-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Brief Symptoms / Notes (Optional)
                      </label>
                      <textarea
                        name="symptoms"
                        rows="2"
                        placeholder="e.g. Abdominal ultrasound shows gallbladder stone, or severe acne on cheeks..."
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-slate-200 resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base text-white shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer ${isRose
                      ? 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/25'
                      : 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/25'
                    }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm on WhatsApp (Instant Token)</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 px-1">
                  <span>🔒 No advance payment • Pay at clinic</span>
                  <a
                    href={`tel:${currentDoctorObj.phone}`}
                    className="font-bold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-teal-600" />
                    <span>Or Call {currentDoctorObj.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Feedback Alert */}
              {bookingConfirmed && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>WhatsApp Booking Request Opened!</strong>
                    <p className="text-emerald-700 mt-0.5">
                      Our reception desk will confirm your queue number shortly.
                    </p>
                  </div>
                </div>
              )}

            </form>
          </div>

          {/* Right Column: Compact Clinic Info & Doctor Card */}
          <div className="lg:col-span-5 space-y-4">

            {/* Selected Doctor Summary Card */}
            <div className={`p-5 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden transition ${isRose ? 'border-l-4 border-l-rose-500' : 'border-l-4 border-l-teal-600'
              }`}>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={currentDoctorObj.photo}
                  alt={currentDoctorObj.name}
                  className="w-14 h-14 rounded-xl object-cover object-top border border-slate-100 shadow-sm flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white ${isRose ? 'bg-rose-500' : 'bg-teal-600'
                      }`}>
                      {currentDoctorObj.specialityBadge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{currentDoctorObj.nameHindi}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-primary mt-0.5">
                    {currentDoctorObj.name}
                  </h3>
                  <div className="text-[11px] text-slate-500">{currentDoctorObj.degree}</div>
                </div>
              </div>

              <div className="text-xs space-y-1.5 pt-2 border-t border-slate-100 text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="font-medium">{currentDoctorObj.timing}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                  <span>Digital Token Queue Priority</span>
                </div>
              </div>
            </div>

            {/* 24x7 Emergency Laparoscopy Banner */}
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-primary text-white shadow-md space-y-2">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>24x7 Surgical Admissions</span>
              </div>
              <h4 className="font-heading font-bold text-sm text-white">
                Acute Appendix, Hernia or Pain Emergency?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency laparoscopic surgery available without prior appointment.
              </p>
              <a
                href="tel:+917909067784"
                className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-white text-rose-700 font-bold text-xs hover:bg-slate-100 transition shadow-sm mt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Emergency Helpline: +91 79090 67784</span>
              </a>
            </div>

            {/* Clinic Address & Reachability */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600 space-y-2">
              <div className="font-heading font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Clinic Location</span>
              </div>
              <p className="font-medium text-slate-800">
                Opposite Sub-Divisional Referral Hospital, Referral Hospital Rd, Forbesganj, Araria, Bihar 854318.
              </p>
              <div className="text-[11px] text-slate-500 pt-0.5">
                • 5 Mins from Forbesganj Junction • 20 Mins from Jogbani/Nepal Border
              </div>
              <a
                href="https://www.google.com/maps/place/JANKI+SKIN+%26+LAPROSCOPIC/@26.303892,87.25331,17z/data=!4m6!3m5!1s0x39ef9fa908eb367f:0xea3a0f72158472c1!8m2!3d26.303892!4d87.25331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-teal-700 font-bold hover:underline pt-1"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* Doctor OPD Schedule Timetable */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
          <div className="max-w-xl mb-5">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-primary">
              Specialist Consultation Hours
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Weekly clinical timetable at Janki Clinic Forbesganj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Dr. S. Sagar Timetable */}
            <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xs">
                    SS
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-primary">
                      Dr. S. Sagar
                    </h4>
                    <span className="text-[11px] font-semibold text-teal-700">MS (Surgery), FIAGES • Minimal Access Surgeon</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700 pt-2">
                  <div className="flex justify-between py-1 border-b border-teal-100">
                    <span className="font-semibold">Monday – Sunday (प्रतिदिन):</span>
                    <span className="font-bold text-primary">10:00 AM – 07:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-teal-100">
                    <span className="font-semibold">OT Admissions:</span>
                    <span className="font-bold text-teal-700">Daily Morning &amp; Afternoon</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold">Emergency Surgery:</span>
                    <span className="font-bold text-rose-600">24x7 Helpline Active</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-teal-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">+91 79090 67784</span>
                <button
                  type="button"
                  onClick={() => {
                    handleSelectDoctor('dr-sagar');
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1 rounded-full bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition"
                >
                  Book Dr. Sagar
                </button>
              </div>
            </div>

            {/* Dr. Rashmi Roy Timetable */}
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-xs">
                    RR
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-primary">
                      Dr. Rashmi Roy
                    </h4>
                    <span className="text-[11px] font-semibold text-rose-700">MBBS, MD (Dermatology, Skin &amp; VD) • Skin, Hair &amp; Nail Specialist</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700 pt-2">
                  <div className="flex justify-between py-1 border-b border-rose-100">
                    <span className="font-semibold">Wednesday (बुधवार):</span>
                    <span className="font-bold text-primary">01:00 PM – 07:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-rose-100">
                    <span className="font-semibold">Saturday (शनिवार):</span>
                    <span className="font-bold text-primary">10:00 AM – 07:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold">Sunday (रविवार):</span>
                    <span className="font-bold text-primary">10:00 AM – 07:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-rose-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">+91 70915 06123</span>
                <button
                  type="button"
                  onClick={() => {
                    handleSelectDoctor('dr-rashmi');
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1 rounded-full bg-rose-500 text-white text-xs font-bold hover:bg-rose-600 transition"
                >
                  Book Dr. Rashmi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment FAQs Accordion */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="max-w-xl mb-6">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-primary">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Common questions about clinic appointments and consultation.
            </p>
          </div>

          <div className="space-y-2.5">
            {appointmentFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left font-heading font-bold text-xs sm:text-sm text-primary hover:bg-slate-50 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
