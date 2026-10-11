import React from 'react';
import { ShieldCheck, Award, Calendar, Phone, ArrowRight, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary to-primary-dark text-white pt-12 pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Forbesganj’s Premier Multi-Speciality Clinical Facility</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight text-white">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-400">Laparoscopic Surgery</span> & Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-400">Aesthetic Care</span>
            </h1>

            {/* Hindi Tagline */}
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर — दूरबीन द्वारा चीरा-रहित सर्जरी, आधुनिक हेयर रीग्रोथ (GFC थेरेपी), केमिकल पील व संपूर्ण त्वचा रोग निदान।
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Board-Certified Assistant Professors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Minimally Invasive Keyhole Incisions</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>Next-Gen Autologous GFC Hair Therapy</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>No Need to Travel to Patna or Siliguri</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold text-base px-7 py-3.5 rounded-full shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Doctor Consultation</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-3.5 rounded-full border border-white/20 transition backdrop-blur-sm"
              >
                <span>Explore 21 Treatments</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Doctors Quick Recognition */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span><strong>Dr. S. Sagar:</strong> MS Gen Surgery, FIAGES</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                <span><strong>Dr. Rashmi Ray:</strong> MD, DNB, MNAMS (Skin)</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Doctor Hero Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Visual Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-slate-800/80 to-primary-dark/90 p-4">
                <img
                  src="assets/dr-rashmi-sagar-hero-feathered.png"
                  alt="Dr. S. Sagar and Dr. Rashmi Ray at Janki Skin Aesthetic & Laparoscopic Centre Forbesganj"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="eager"
                />

                {/* Overlaid Badges */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="bg-slate-900/80 backdrop-blur-md p-2.5 rounded-xl border border-teal-500/30">
                    <div className="text-teal-400 font-bold text-xs uppercase tracking-wider">Laparoscopy Wing</div>
                    <div className="text-white text-xs font-semibold mt-0.5">Dr. S. Sagar</div>
                    <div className="text-[11px] text-slate-400">FIAGES Specialist</div>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-md p-2.5 rounded-xl border border-rose-500/30">
                    <div className="text-rose-400 font-bold text-xs uppercase tracking-wider">Dermatology Wing</div>
                    <div className="text-white text-xs font-semibold mt-0.5">Dr. Rashmi Ray</div>
                    <div className="text-[11px] text-slate-400">MD, DNB, MNAMS</div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-base text-primary">24x7 Ready</div>
                  <div className="text-xs text-slate-500 font-medium">Emergency Laparoscopy</div>
                </div>
              </div>

              {/* Floating Stat Badge Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-accent flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-base text-primary">Triple Board</div>
                  <div className="text-xs text-slate-500 font-medium">Certified Dermatologist</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
