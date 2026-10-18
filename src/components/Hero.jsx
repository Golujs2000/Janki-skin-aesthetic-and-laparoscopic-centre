import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Users, Award, Shield, Activity, Sparkles } from 'lucide-react';

export default function Hero({ onBookClick }) {
  return (
    <>
      <section className="relative bg-white py-14 lg:py-20 border-b border-slate-200 overflow-hidden" id="home">
        {/* Subtle Radial Glows */}
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-50 to-teal-50 border border-rose-200/80 text-primary text-xs sm:text-sm font-bold shadow-sm">
                <span className="text-amber-500">✨</span>
                <span>Forbesganj's Premier Super-Speciality Healthcare Centre</span>
              </div>

              {/* In Memory of Late Dr. Vijay Kumar - Right After First Tagline */}
              <div>
                <Link
                  to="/tribute"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-50 via-amber-100/70 to-amber-50 border border-amber-300 shadow-sm hover:shadow-md hover:border-amber-400 text-amber-950 transition-all group"
                  title="In Memory of Late Dr. Vijay Kumar (General Physician & Surgeon)"
                >
                  <img
                    src="/assets/dr-vijay-kumar.jpeg"
                    alt="Late Dr. Vijay Kumar"
                    className="w-7 h-7 rounded-full object-cover border border-amber-400 shadow-sm flex-shrink-0"
                    width="28"
                    height="28"
                  />
                  <div className="text-xs sm:text-sm font-medium flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                    <span className="text-slate-600 font-normal">In Memory of</span>
                    <strong className="text-amber-950 font-bold group-hover:underline">
                      Late Dr. Vijay Kumar
                    </strong>
                    <span className="text-amber-700/60 hidden sm:inline">•</span>
                    <span className="text-amber-800 text-[11px] sm:text-xs font-semibold">
                      General Physician &amp; Surgeon • MBBS (ANMMCH Gaya)
                    </span>
                  </div>
                  <span className="text-amber-600 font-bold text-xs group-hover:translate-x-1 transition-transform ml-1">
                    →
                  </span>
                </Link>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-primary">
                Advanced <span className="gradient-text-aesthetic">Skin Aesthetics</span> &amp; Minimally Invasive <span className="gradient-text-laparo">Laparoscopic Surgery</span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Experience state-of-the-art dermatology, laser skin rejuvenation, hair restoration, and painless keyhole laparoscopic surgeries under certified specialists in Forbesganj, Araria (Bihar).
              </p>

              {/* Doctors Mini Highlight Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Dr. Rashmi Ray Chip */}
                <div className="flex items-center gap-3 p-2 pr-4 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <img
                    src="/assets/dr-rashmi-ray.jpg"
                    alt="Dr. Rashmi Ray"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                    width="40"
                    height="40"
                  />
                  <div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-primary block leading-none">
                      Dr. Rashmi Ray
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      MBBS, MD • Skin &amp; Aesthetics
                    </span>
                  </div>
                </div>

                {/* Dr. S. Sagar Chip */}
                <div className="flex items-center gap-3 p-2 pr-4 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <img
                    src="/assets/dr-sagar.jpg"
                    alt="Dr. S. Sagar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                    width="40"
                    height="40"
                  />
                  <div>
                    <span className="font-heading font-bold text-xs sm:text-sm text-primary block leading-none">
                      Dr. S. Sagar
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      MBBS, MS • Laparoscopic Surgeon
                    </span>
                  </div>
                </div>


              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onBookClick}
                  className="btn-rose px-6 py-3 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="https://wa.me/917909067784?text=Hello%20Janki%20Skin%20%26%20Laparoscopic%20Centre%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp px-5 py-3 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.15c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.12.11-3.23-.74-2.69-1.08-4.41-3.83-4.55-4.01-.13-.18-1.08-1.44-1.08-2.75 0-1.31.69-1.95.93-2.22.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.39-.06.61.47.23.54.78 1.9.85 2.04.07.15.11.32.02.5-.09.18-.14.29-.27.45-.14.16-.29.35-.41.47-.14.14-.29.29-.12.57.16.29.73 1.21 1.57 1.96 1.08.96 1.99 1.26 2.27 1.4.29.14.45.12.62-.07.16-.2.7-81.89-1.09.18-.28.37-.23.62-.14.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.11.07.66-.17 1.34z" />
                  </svg>
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="tel:+917909067784"
                  className="btn-outline-primary px-5 py-3 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 79090 67784</span>
                </a>
              </div>

              {/* Feature Checkmark Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-teal-accent flex-shrink-0" />
                  <span>Minimal Cuts &amp; Faster Surgical Recovery</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-teal-accent flex-shrink-0" />
                  <span>Authentic GFC &amp; Chemical Peel Regimens</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-teal-accent flex-shrink-0" />
                  <span>Fellowship-Trained Medical Professors</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-teal-accent flex-shrink-0" />
                  <span>Ultra-Modern Sterile Clinic Environment</span>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Showcase Portrait with Blurred Feathered Edges & Split Badge */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[500px] flex flex-col items-center">
                {/* Doctor Portrait */}
                <div className="relative w-full flex justify-center items-center overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 shadow-xl">
                  <img
                    src="/assets/south-asian-doctors-hero.png"
                    alt="Dr. Rashmi Ray and Dr. S. Sagar - JANKI Skin Aesthetic & Laparoscopic Centre Forbesganj"
                    className="w-full h-auto max-h-[520px] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    width="600"
                    height="850"
                  />
                </div>

                {/* Split Doctors Caption Box */}
                <div className="w-full -mt-6 relative z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-xl flex items-center justify-around gap-3">
                  {/* Dr. Rashmi Ray */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-accent border border-rose-200/60 mb-1">
                      Skin &amp; Aesthetic
                    </span>
                    <div className="font-heading font-extrabold text-sm sm:text-base text-primary leading-tight">
                      Dr. Rashmi Ray
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      MBBS, MD • Dermatologist
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="w-px h-10 bg-slate-200 flex-shrink-0" />

                  {/* Dr. S. Sagar */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-accent border border-teal-200/60 mb-1">
                      Laparoscopy Specialist
                    </span>
                    <div className="font-heading font-extrabold text-sm sm:text-base text-primary leading-tight">
                      Dr. S. Sagar
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      MBBS, MS • Laparoscopic Surgeon
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Stats Bar Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-accent flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-base sm:text-lg text-primary leading-none">5,000+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Patients Treated Safely</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-base sm:text-lg text-primary leading-none">28+ Years</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Legacy • Estb. 1990</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-base sm:text-lg text-primary leading-none">2 Disciplines</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Dermatology &amp; Laparo</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-base sm:text-lg text-primary leading-none">100% Sterile</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Modern Treatment Setup</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
