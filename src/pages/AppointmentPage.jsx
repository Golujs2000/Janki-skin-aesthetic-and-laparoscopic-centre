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
  Activity,
  HeartPulse,
  Award,
  ChevronDown,
  ChevronUp,
  FileText,
  BadgeCheck,
  Check,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { doctorsData } from '../data/doctors';

export default function AppointmentPage({ initialDoctor = '', initialTreatment = null }) {
  // Doctor Selection State
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-sagar');
  
  // Quick Treatments List
  const surgeryTreatments = [
    'Gallbladder Stones (पित्त की पथरी)',
    'Laparoscopic Appendix (अपेंडिक्स)',
    'Laparoscopic Hernia (हर्निया)',
    'Ovarian Cyst (ओवेरियन सिस्ट)',
    'Tubal Ligation (दूरबीन नसबंदी)',
    'General / Minor Surgery'
  ];

  const aestheticTreatments = [
    'GFC Hair Regrowth Therapy',
    'Chemical Peeling & Glow',
    'Glutathione Glow Infusion',
    'Laser Acne Scar Revision',
    'Severe Acne & Pimples',
    'Vitiligo / White Patches (सफेद दाग)',
    'Melasma & Pigmentation',
    'Eczema & Psoriasis'
  ];

  const quickDates = [
    { label: 'Today (Urgent)', value: new Date().toISOString().split('T')[0] },
    { 
      label: 'Tomorrow', 
      value: new Date(Date.now() + 86400000).toISOString().split('T')[0] 
    },
    { 
      label: 'Day After', 
      value: new Date(Date.now() + 172800000).toISOString().split('T')[0] 
    }
  ];

  // Form State
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    age: '',
    gender: 'Male',
    city: 'Forbesganj',
    doctorId: 'dr-sagar',
    treatment: 'Gallbladder Stones (पित्त की पथरी)',
    date: quickDates[1].value,
    slot: 'Morning OPD (10:00 AM – 01:00 PM)',
    symptoms: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Sync initial props if navigated with treatment or doctor
  useEffect(() => {
    if (initialDoctor) {
      const match = doctorsData.find(d => d.name.toLowerCase().includes(initialDoctor.toLowerCase()));
      if (match) {
        setSelectedDoctorId(match.id);
        setFormData(prev => ({ 
          ...prev, 
          doctorId: match.id,
          treatment: match.id === 'dr-sagar' ? surgeryTreatments[0] : aestheticTreatments[0]
        }));
      }
    }
    if (initialTreatment) {
      setFormData(prev => ({
        ...prev,
        treatment: initialTreatment.title,
        doctorId: initialTreatment.doctor?.includes('Rashmi') ? 'dr-rashmi' : 'dr-sagar'
      }));
      if (initialTreatment.doctor?.includes('Rashmi')) {
        setSelectedDoctorId('dr-rashmi');
      } else {
        setSelectedDoctorId('dr-sagar');
      }
    }
  }, [initialDoctor, initialTreatment]);

  // Handle Doctor Card Select
  const handleSelectDoctor = (id) => {
    setSelectedDoctorId(id);
    const defaultTreatment = id === 'dr-sagar' ? surgeryTreatments[0] : aestheticTreatments[0];
    setFormData(prev => ({
      ...prev,
      doctorId: id,
      treatment: defaultTreatment
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTreatmentPillClick = (treatmentName) => {
    setFormData(prev => ({ ...prev, treatment: treatmentName }));
  };

  const handleDateQuickPick = (val) => {
    setFormData(prev => ({ ...prev, date: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    const currentDoc = doctorsData.find(d => d.id === selectedDoctorId) || doctorsData[0];
    const destinationPhone = currentDoc.id === 'dr-rashmi' ? '917091506123' : '917909067784';

    // Build structured, easy-to-read WhatsApp text
    const message = encodeURIComponent(
      `🏥 *JANKI CLINIC FORBESGANJ - APPOINTMENT REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Patient:* ${formData.patientName} (${formData.gender || 'Not specified'}, Age: ${formData.age || 'N/A'})\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location / City:* ${formData.city || 'Forbesganj'}\n\n` +
      `👨‍⚕️ *Consulting Doctor:* ${currentDoc.name} (${currentDoc.specialityBadge})\n` +
      `🩺 *Procedure/Concern:* ${formData.treatment}\n` +
      `📅 *Requested Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Preferred Time Slot:* ${formData.slot}\n` +
      `📝 *Notes/Symptoms:* ${formData.symptoms || 'None'}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `_Submitted via Janki Clinic Online Appointment Portal_`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${destinationPhone}?text=${message}`, '_blank');
    setBookingConfirmed(true);
  };

  const currentDoctorObj = doctorsData.find(d => d.id === selectedDoctorId) || doctorsData[0];
  const isRose = currentDoctorObj.theme === 'rose';

  const appointmentFaqs = [
    {
      q: 'Do I need to fast before coming for gallbladder stone consultation?',
      a: 'If you plan to get an abdominal ultrasound or pre-operative blood work done on the same day, coming after 4-6 hours of overnight fasting is recommended. For regular consultation, fasting is not compulsory.'
    },
    {
      q: 'What is the consultation schedule for Dr. S. Sagar & Dr. Rashmi Ray?',
      a: 'Dr. S. Sagar (Laparoscopic Surgeon) conducts consultation and surgical admissions daily (प्रतिदिन). Dr. Rashmi Ray (MD Dermatologist & Cosmetologist) is available on Wednesday (1:00 PM – 7:00 PM), Saturday (10:00 AM – 7:00 PM), and Sunday (10:00 AM – 7:00 PM).'
    },
    {
      q: 'How does the online appointment token work?',
      a: 'Submitting your booking sends your digital request directly to our clinic WhatsApp desk. You receive a priority queue number, minimizing your physical waiting time when you arrive at Referral Hospital Road.'
    },
    {
      q: 'Can patients from Araria, Raniganj, Purnea, or Nepal book in advance?',
      a: 'Yes, patients traveling from outside Forbesganj or across the Nepal border (Biratnagar/Jogbani) are given priority time slots so they can complete consultation, diagnostics, or day-care procedures without needing an overnight stay.'
    },
    {
      q: 'Is emergency laparoscopic surgery available at night?',
      a: 'Yes! For acute emergencies like acute appendicitis, ruptured/twisted ovarian cyst, or obstructed hernia, our emergency hotline (+91 79090 67784) operates 24x7. You do not need to wait for regular OPD hours.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Special Appointment Booking Portal | Janki Clinic Forbesganj"
        description="Book direct consultation & priority digital token for Dr. S. Sagar (Laparoscopic Surgery) or Dr. Rashmi Ray (MD Dermatology & Aesthetics) in Forbesganj. Instant WhatsApp confirmation."
        keywords="Book appointment Janki Clinic Forbesganj, Laparoscopic doctor appointment Araria, Dermatologist consultation Forbesganj, Online doctor appointment Bihar, Gallbladder surgery appointment"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Online Appointment Booking Portal</li>
          </ol>
        </nav>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Healthcare Booking</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Book Specialist <span className="gradient-text-aesthetic">Consultation Online</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Reserve your consultation slot with University Assistant Professors in Forbesganj. Get priority queue verification and direct WhatsApp appointment confirmation.
          </p>

          {/* Quick Helpline Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <a 
              href="tel:+917909067784"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs sm:text-sm font-bold hover:bg-teal-100 transition"
            >
              <Phone className="w-3.5 h-3.5 text-teal-accent" />
              <span>Surgical Helpline: +91 79090 67784</span>
            </a>

            <a 
              href="tel:+917091506123"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-bold hover:bg-rose-100 transition"
            >
              <Phone className="w-3.5 h-3.5 text-rose-accent" />
              <span>Skin &amp; Hair Helpline: +91 70915 06123</span>
            </a>
          </div>
        </div>

        {/* Step 1: Visual Interactive Doctor Selector */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 1 of 3</span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary">
                Choose Your Specialist Doctor
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">Click card to select</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctorsData.map((doc) => {
              const isSelected = selectedDoctorId === doc.id;
              const isDocRose = doc.theme === 'rose';

              return (
                <div
                  key={doc.id}
                  onClick={() => handleSelectDoctor(doc.id)}
                  className={`relative p-5 sm:p-6 rounded-3xl border-2 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left ${
                    isSelected
                      ? isDocRose
                        ? 'border-rose-accent bg-rose-50/50 shadow-xl shadow-rose-500/10 ring-2 ring-rose-400/20'
                        : 'border-teal-accent bg-teal-50/50 shadow-xl shadow-teal-500/10 ring-2 ring-teal-400/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Selected Indicator Checkmark */}
                  {isSelected && (
                    <div className={`absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm ${
                      isDocRose ? 'bg-rose-accent' : 'bg-teal-accent'
                    }`}>
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                  )}

                  {/* Doctor Portrait Thumbnail */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 shadow-md">
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Doctor Details */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white ${
                        isDocRose ? 'bg-rose-accent' : 'bg-teal-accent'
                      }`}>
                        {doc.specialityBadge}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {doc.nameHindi}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-primary">
                      {doc.name}
                    </h3>

                    <div className="text-xs font-bold text-slate-700">
                      {doc.degree}
                    </div>

                    <div className="text-xs text-slate-500 line-clamp-1">
                      {doc.role}
                    </div>

                    {/* Schedule Badge */}
                    <div className="pt-1 flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-slate-700">
                      <Clock className={`w-3.5 h-3.5 ${isDocRose ? 'text-rose-500' : 'text-teal-600'}`} />
                      <span>{doc.timing}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Comprehensive Interactive Booking Form + Live Digital Slip Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Form: Steps 2 & 3 */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 2: Treatment Pill Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 2 of 3</span>
                    <h3 className="text-lg font-bold font-heading text-primary">
                      Select Treatment / Concern
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-500">Click to choose</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {(selectedDoctorId === 'dr-sagar' ? surgeryTreatments : aestheticTreatments).map((treatmentName, idx) => {
                    const isPicked = formData.treatment === treatmentName;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleTreatmentPillClick(treatmentName)}
                        className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer text-left ${
                          isPicked
                            ? isRose
                              ? 'bg-rose-accent text-white shadow-sm ring-2 ring-rose-200'
                              : 'bg-teal-accent text-white shadow-sm ring-2 ring-teal-200'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {treatmentName}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Treatment Input */}
                <input
                  type="text"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleInputChange}
                  placeholder="Or type specific condition / surgery name..."
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent"
                />
              </div>

              <hr className="border-slate-100" />

              {/* Step 3: Date & Preferred Slot */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 3 of 3</span>
                <h3 className="text-lg font-bold font-heading text-primary mb-3">
                  Choose Preferred Date &amp; Time
                </h3>

                {/* Quick Date Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {quickDates.map((qd, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => handleDateQuickPick(qd.value)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                        formData.date === qd.value
                          ? 'bg-primary text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {qd.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Consultation Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="slot"
                        value={formData.slot}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition appearance-none"
                      >
                        <option value="Morning OPD (10:00 AM – 01:00 PM)">Morning OPD (10:00 AM – 01:00 PM)</option>
                        <option value="Evening OPD (04:00 PM – 07:00 PM)">Evening OPD (04:00 PM – 07:00 PM)</option>
                        <option value="Urgent Surgical Admission (24x7)">Urgent Surgical Admission (24x7)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Patient Details Form Fields */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-primary">
                  Patient Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Patient Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Full Name *
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
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Mobile Phone *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Age */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      placeholder="e.g. 35"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Child">Child</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* City / Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      City / Area
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Forbesganj, Araria, Nepal"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
                    />
                  </div>
                </div>

                {/* Symptoms / Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Brief Medical Problem / Previous Reports (Optional)
                  </label>
                  <textarea
                    name="symptoms"
                    rows="2"
                    placeholder="e.g. Abdominal ultrasound shows gallbladder stone, or hair thinning on scalp..."
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition resize-none"
                  />
                </div>
              </div>

              {/* Submission Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer ${
                    isRose
                      ? 'btn-rose'
                      : 'bg-teal-accent hover:bg-teal-600 shadow-teal-500/25'
                  }`}
                >
                  <Send className="w-5 h-5" />
                  <span>Confirm &amp; Send Booking via WhatsApp</span>
                </button>
                <div className="text-center text-[11px] text-slate-500 mt-2">
                  🔒 No online advance payment required. Pay directly at clinic counter.
                </div>
              </div>

              {bookingConfirmed && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>WhatsApp Booking Initiated!</strong>
                    <p className="text-emerald-700 mt-0.5">
                      Your booking text was prepared and dispatched. Our reception desk will verify your slot and assign your priority token shortly.
                    </p>
                  </div>
                </div>
              )}

            </form>

          </div>

          {/* Right Column: Live Digital Consultation Slip & Clinic Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Interactive Digital Consultation Token Slip Preview */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full pointer-events-none" />

              {/* Slip Header */}
              <div className="flex items-center justify-between pb-4 border-b border-dashed border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
                    J
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-primary leading-tight">
                      JANKI CLINIC
                    </h4>
                    <span className="text-[10px] text-slate-500 font-medium">Digital Token Preview</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    PRIORITY QUEUE
                  </span>
                </div>
              </div>

              {/* Slip Body with Dynamic Details */}
              <div className="py-5 space-y-3.5 text-xs text-slate-600">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-400">Patient:</span>
                  <strong className="text-slate-900 text-sm font-heading">
                    {formData.patientName || 'Patient Name'}
                  </strong>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-400">Mobile / WhatsApp:</span>
                  <span className="font-semibold text-slate-800">
                    {formData.phone || '+91 ••••• •••••'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-400">Consulting Specialist:</span>
                  <div className="text-right">
                    <strong className="text-primary block font-heading">
                      {currentDoctorObj.name}
                    </strong>
                    <span className="text-[11px] text-slate-500">
                      {currentDoctorObj.specialityBadge}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-400">Procedure / Reason:</span>
                  <span className="font-semibold text-slate-800 text-right max-w-[200px] truncate">
                    {formData.treatment}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-400">Requested Date:</span>
                  <span className="font-bold text-slate-900">
                    {formData.date || 'Earliest Available'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-400">Preferred Slot:</span>
                  <span className="font-semibold text-slate-800">
                    {formData.slot}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Clinic Location:</span>
                  <span className="font-semibold text-slate-800 text-right">
                    Referral Hospital Rd, Forbesganj
                  </span>
                </div>
              </div>

              {/* Slip Footer Barcode & Guarantee */}
              <div className="pt-4 border-t border-dashed border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5 text-teal-700 font-semibold">
                  <BadgeCheck className="w-4 h-4 text-teal-600" />
                  <span>Guaranteed Zero Queuing Token</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">JK-{Date.now().toString().slice(-6)}</span>
              </div>
            </div>

            {/* Quick Emergency Surgery Admission Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-900 to-primary text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>24x7 Emergency Surgical Hotline</span>
              </div>
              <h4 className="font-heading font-extrabold text-lg text-white">
                Severe Abdominal Pain or Emergency?
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                For sudden acute appendicitis, ruptured ovarian cyst, or obstructed hernia, call Dr. S. Sagar directly. No appointment is needed for critical trauma and surgical emergencies.
              </p>
              <a
                href="tel:+917909067784"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-rose-700 font-bold text-xs hover:bg-slate-100 transition shadow-sm mt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Emergency: +91 79090 67784</span>
              </a>
            </div>

            {/* Clinic Address & Hours Quick Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3 text-xs text-slate-600">
              <h4 className="font-heading font-bold text-sm text-primary uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-accent" />
                <span>Clinic Address &amp; Reachability</span>
              </h4>
              <p>
                <strong>Opposite Sub-Divisional Referral Hospital</strong>, Referral Hospital Road, Forbesganj, Araria, Bihar 854318.
              </p>
              <div className="pt-1 space-y-1.5 text-slate-500">
                <div>• <strong>5 Mins</strong> from Forbesganj Junction Railway Station</div>
                <div>• <strong>3 Mins</strong> from Forbesganj Main Bus Stand</div>
                <div>• <strong>20 Mins</strong> from Jogbani / Nepal Border</div>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/JANKI+SKIN+%26+LAPROSCOPIC/@26.303892,87.25331,17z/data=!4m6!3m5!1s0x39ef9fa908eb367f:0xea3a0f72158472c1!8m2!3d26.303892!4d87.25331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-teal-700 font-bold hover:underline"
                >
                  <span>Open in Google Maps Navigation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Doctor OPD Schedules Reference Table */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-14">
          <div className="max-w-3xl mb-6">
            <h3 className="font-heading font-extrabold text-2xl text-primary">
              Specialist Consultation &amp; Surgical Timetable
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Refer to our weekly clinical schedule to plan your consultation and surgical evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dr. S. Sagar Timetable */}
            <div className="p-6 rounded-2xl bg-teal-50/50 border border-teal-100 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-accent text-white flex items-center justify-center font-bold text-sm">
                    SS
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-primary">
                      Dr. S. Sagar
                    </h4>
                    <span className="text-xs font-semibold text-teal-700">MS (Surgery), FIAGES • Minimal Access Surgeon</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 pt-2">
                  <div className="flex justify-between py-1 border-b border-teal-100">
                    <span className="font-semibold">Monday – Sunday (प्रतिदिन):</span>
                    <span className="font-bold text-primary">10:00 AM – 07:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-teal-100">
                    <span className="font-semibold">Surgical Admissions (OT):</span>
                    <span className="font-bold text-teal-700">Daily Morning &amp; Afternoon</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold">Emergency Surgery:</span>
                    <span className="font-bold text-rose-600">24x7 Helpline Active</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-teal-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Helpline: +91 79090 67784</span>
                <button
                  type="button"
                  onClick={() => handleSelectDoctor('dr-sagar')}
                  className="px-4 py-1.5 rounded-full bg-teal-accent text-white text-xs font-bold hover:bg-teal-600 transition"
                >
                  Select Dr. Sagar
                </button>
              </div>
            </div>

            {/* Dr. Rashmi Ray Timetable */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-accent text-white flex items-center justify-center font-bold text-sm">
                    RR
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-primary">
                      Dr. Rashmi Ray
                    </h4>
                    <span className="text-xs font-semibold text-rose-700">MD, DNB, MNAMS • Dermatologist &amp; Cosmetologist</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-700 pt-2">
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

              <div className="pt-4 mt-4 border-t border-rose-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">OPD Line: +91 70915 06123</span>
                <button
                  type="button"
                  onClick={() => handleSelectDoctor('dr-rashmi')}
                  className="px-4 py-1.5 rounded-full bg-rose-accent text-white text-xs font-bold hover:bg-rose-600 transition"
                >
                  Select Dr. Rashmi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment FAQs Accordion */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-12">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Patient Guidelines</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-primary">
              Frequently Asked Questions About Appointments
            </h3>
          </div>

          <div className="space-y-3">
            {appointmentFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-heading font-bold text-sm sm:text-base text-primary hover:bg-slate-50 transition"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
