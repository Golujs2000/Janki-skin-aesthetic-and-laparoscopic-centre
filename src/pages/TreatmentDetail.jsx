import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { treatmentsData } from '../data/treatments';
import { 
  Clock, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  ZoomIn, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  User, 
  Send, 
  AlertCircle,
  Building,
  HeartPulse
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TreatmentDetail({ onOpenLightbox }) {
  const { id } = useParams();
  const treatment = treatmentsData.find((t) => t.id === id);

  const [activeFaq, setActiveFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: 'Morning (10:00 AM - 01:00 PM)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!treatment) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <AlertCircle className="w-16 h-16 text-rose-500 mb-4" />
        <h1 className="text-3xl font-extrabold font-heading text-primary mb-2">Treatment Not Found</h1>
        <p className="text-slate-600 max-w-md mb-6">
          The treatment page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/treatments"
          className="btn-rose px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All 15 Treatments</span>
        </Link>
      </div>
    );
  }

  const treatmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "name": treatment.title,
        "alternateName": treatment.subtitle,
        "description": treatment.desc,
        "procedureType": treatment.department === 'laparoscopic' ? "SurgicalProcedure" : "NoninvasiveProcedure",
        "bodyLocation": treatment.department === 'laparoscopic' ? "Abdomen" : (treatment.id.includes('hair') ? "Scalp" : "Skin"),
        "performer": {
          "@type": "Physician",
          "name": treatment.doctor,
          "medicalSpecialty": treatment.department === 'laparoscopic' ? "Surgical" : "Dermatology"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "MedicalClinic",
            "name": "Janki Skin Aesthetic & Laparoscopic Centre",
            "telephone": treatment.docPhone
          }
        }
      },
      ...(treatment.faqs && treatment.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": treatment.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }] : []),
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://janki-skin-and-laparo-centre.firebaseapp.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Treatments",
            "item": "https://janki-skin-and-laparo-centre.firebaseapp.com/treatments"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": treatment.title,
            "item": `https://janki-skin-and-laparo-centre.firebaseapp.com/treatment/${treatment.id}`
          }
        ]
      }
    ]
  };

  const isTeal = treatment.badgeTheme === 'teal';

  // Related treatments in same department
  const relatedTreatments = treatmentsData
    .filter((t) => t.department === treatment.department && t.id !== treatment.id)
    .slice(0, 4);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    const waText = encodeURIComponent(
      `*New Consultation Booking for ${treatment.title}*\n\n` +
      `👤 *Patient Name:* ${formData.name}\n` +
      `📞 *Phone Number:* ${formData.phone}\n` +
      `🩺 *Requested Procedure:* ${treatment.title}\n` +
      `👨‍⚕️ *Consultant Doctor:* ${treatment.doctor}\n` +
      `📅 *Preferred Date:* ${formData.date || 'Earliest Available'}\n` +
      `⏰ *Preferred Slot:* ${formData.time}\n` +
      `📝 *Notes/Symptoms:* ${formData.message || 'None'}\n\n` +
      `_Sent from Janki Clinic treatment page_`
    );

    window.open(`https://wa.me/917909067784?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <SEOHead
        title={`${treatment.title} in Forbesganj | Janki Skin Aesthetic & Laparoscopic Centre`}
        description={`${treatment.title} (${treatment.subtitle}) by ${treatment.doctor} at Janki Centre Forbesganj. ${treatment.desc.slice(0, 140)}...`}
        keywords={`${treatment.title}, ${treatment.title} Forbesganj, ${treatment.doctor}, Laparoscopic surgery Bihar, Janki Centre`}
        image={treatment.thumb}
        schema={treatmentSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-primary transition font-semibold">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/treatments" className="hover:text-primary transition font-semibold">Treatments</Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-slate-400">{treatment.departmentName}</span>
            </li>
            <li>/</li>
            <li className="text-primary font-bold truncate max-w-xs sm:max-w-md">
              {treatment.title}
            </li>
          </ol>
        </nav>

        {/* Treatment Hero Header Card */}
        <div className={`rounded-3xl p-6 sm:p-10 mb-8 border shadow-sm ${
          isTeal 
            ? 'bg-gradient-to-br from-teal-950 via-primary to-slate-900 text-white border-teal-500/20' 
            : 'bg-gradient-to-br from-rose-950 via-primary to-slate-900 text-white border-rose-500/20'
        }`}>
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
                isTeal ? 'bg-teal-600' : 'bg-rose-600'
              }`}>
                {treatment.badge}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-slate-200 text-xs font-semibold">
                Supervised by {treatment.doctor}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight text-white">
              {treatment.title}
            </h1>

            <div className="text-base sm:text-lg font-bold text-amber-300">
              {treatment.subtitle}
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {treatment.desc}
            </p>

            {/* Quick Metrics Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Procedure Time</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">{treatment.duration}</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  <span>Anesthesia</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">{treatment.anesthesia}</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Building className="w-3.5 h-3.5 text-teal-400" />
                  <span>Hospital Stay</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">{treatment.hospitalStay}</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Recovery Period</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">{treatment.recoveryTime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (8 cols): Clinical Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 16:9 Thumbnail Visual Showcase with Lightbox Trigger */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div 
                className="relative aspect-video w-full bg-slate-900 cursor-pointer group"
                onClick={() => onOpenLightbox(treatment.poster, treatment.title, `${treatment.title} • Official Clinical Visual`)}
              >
                <img
                  src={treatment.thumb}
                  alt={`${treatment.title} at Janki Centre Forbesganj`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 drop-shadow">
                    High-Resolution Clinical Visual • Forbesganj Centre
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-900 text-xs font-bold shadow-lg backdrop-blur-md transition group-hover:scale-105"
                  >
                    <ZoomIn className="w-4 h-4 text-teal-accent" />
                    <span>{treatment.posterLabel}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Clinical Overview */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-accent" />
                <span>Clinical Overview &amp; Background</span>
              </h2>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {treatment.overview}
              </div>
            </div>

            {/* When is this Treatment Needed? (Indications) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-rose-accent" />
                <span>Clinical Indications: When Is This Required?</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Consult with our specialists if you experience any of the following symptoms or diagnostic findings:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {treatment.indications.map((ind, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-accent flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      {i + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {ind}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Procedure Guide */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-accent" />
                <span>Step-by-Step Clinical Protocol</span>
              </h2>
              <div className="space-y-4">
                {treatment.procedureSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-8 sm:pl-10 pb-4 border-l-2 border-slate-200 last:border-l-transparent last:pb-0">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-teal-accent text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-white">
                      {idx + 1}
                    </div>
                    <h3 className="font-heading font-bold text-base text-primary leading-none mb-1">
                      {step.step}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits & Advantages */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-accent" />
                <span>Key Benefits &amp; Treatment Advantages</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      isTeal ? 'text-teal-accent' : 'text-rose-accent'
                    }`} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>Recovery Timeline &amp; Post-Procedure Care</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {Object.entries(treatment.recovery).map(([period, desc], idx) => {
                  const formatPeriod = period === 'sameDay' 
                    ? 'Day 1 (Same Day)' 
                    : period === 'dayTwo' 
                    ? 'Day 2' 
                    : period === 'dayThree' 
                    ? 'Day 3' 
                    : period === 'daySeven' 
                    ? 'Day 7' 
                    : period === 'weekOne' 
                    ? 'Week 1' 
                    : period === 'weekTwo' 
                    ? 'Week 2' 
                    : period === 'monthOne' 
                    ? 'Month 1' 
                    : period === 'monthThree' 
                    ? 'Month 3' 
                    : period;

                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold text-teal-accent uppercase tracking-wider block mb-1">
                        {formatPeriod}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Official Clinic Poster Showcase with Lightbox Trigger */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary">
                  Official Clinic Poster / Guide
                </h2>
                <button
                  type="button"
                  onClick={() => onOpenLightbox(treatment.poster, treatment.title, `${treatment.title} • Clinical Guide`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-accent hover:underline"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to Enlarge Fullscreen</span>
                </button>
              </div>

              <div 
                className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer max-h-96 flex items-center justify-center group"
                onClick={() => onOpenLightbox(treatment.poster, treatment.title, `${treatment.title} • Clinical Guide`)}
              >
                <img
                  src={treatment.poster}
                  alt={`${treatment.title} Clinical Poster`}
                  className="w-full h-auto max-h-96 object-contain group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5 text-teal-accent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated FAQs for this Treatment */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-primary flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-accent" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-3 pt-2">
                {treatment.faqs.map((faq, i) => {
                  const isOpen = activeFaq === i;

                  return (
                    <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50">
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : i)}
                        className="w-full text-left py-4 px-5 flex items-center justify-between gap-4 font-heading font-bold text-slate-800 text-sm hover:text-teal-accent transition-colors"
                      >
                        <span>{faq.q}</span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                          isOpen ? 'bg-teal-50 text-teal-accent rotate-180' : 'bg-slate-200 text-slate-500'
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sidebar with Doctor, Booking, Helpline & Related */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Treating Specialist Doctor Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
              <div className="relative w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md ring-4 ring-slate-50">
                <img
                  src={treatment.docPhoto}
                  alt={treatment.doctor}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white ${
                isTeal ? 'bg-teal-accent' : 'bg-rose-accent'
              }`}>
                Treating Specialist
              </span>

              <h3 className="font-heading font-extrabold text-xl text-primary mt-2">
                {treatment.doctor}
              </h3>
              <div className="text-xs font-bold text-slate-500 mt-0.5">
                {treatment.docDegree}
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-snug">
                {treatment.docRole}
              </p>

              <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
                <a
                  href={`tel:${treatment.docPhone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full font-bold text-xs border border-primary text-primary hover:bg-primary hover:text-white transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Doctor</span>
                </a>
                <a
                  href={`https://wa.me/917909067784?text=Hello%20${treatment.doctor}%2C%20I%20have%20an%20inquiry%20regarding%20${treatment.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full font-bold text-xs bg-emerald-500 text-white hover:bg-emerald-600 transition"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Treatment Booking Form Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-primary mb-1">
                Book This Treatment
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Receive instant priority consultation slot confirmation via WhatsApp.
              </p>

              {submitted && (
                <div className="p-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                  <strong>WhatsApp Booking Opened!</strong> Our reception will confirm your token shortly.
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-accent"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Evening (04:00 PM - 07:00 PM)">Evening (04:00 PM - 07:00 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition transform hover:-translate-y-0.5 cursor-pointer ${
                    isTeal ? 'bg-teal-accent hover:bg-teal-600' : 'btn-rose'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Confirm on WhatsApp</span>
                </button>
              </form>
            </div>

            {/* 24x7 Emergency Help Card */}
            <div className="bg-primary-dark text-white rounded-3xl p-6 border border-slate-800 shadow-sm space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                24x7 Surgical Admissions
              </span>
              <h4 className="font-heading font-extrabold text-lg text-white">
                Urgent Assistance Needed?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For acute abdominal emergency admissions or urgent consultations, contact our hospital desk immediately.
              </p>
              <a
                href="tel:+917909067784"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-primary font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                <span>Call +91 79090 67784</span>
              </a>
            </div>

            {/* Related Treatments in same department */}
            {relatedTreatments.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-heading font-bold text-sm text-primary uppercase tracking-wider">
                  Related Treatments
                </h4>
                <div className="divide-y divide-slate-100">
                  {relatedTreatments.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/treatment/${rel.id}`}
                      className="py-2.5 flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-teal-accent transition group"
                    >
                      <span className="truncate pr-2">{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
