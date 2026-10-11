import React from 'react';
import { Award, ShieldCheck, HeartPulse, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Reception Hall Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3] bg-slate-100">
                <img
                  src="assets/clinic-reception-hall.jpg"
                  alt="Janki Skin Aesthetic & Laparoscopic Centre Reception Area Forbesganj"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Sub Image Overlap */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-square">
                <img
                  src="assets/clinic-examination-bed-certificates.jpg"
                  alt="Clinical Examination Bed and Board Certifications"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-4 left-4 bg-primary/95 text-white p-3.5 rounded-2xl shadow-lg backdrop-blur-md border border-white/20">
                <div className="font-heading font-extrabold text-2xl text-teal-300">12+</div>
                <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider leading-tight">
                  Years Clinical<br />Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Centre</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight leading-tight">
              Compassionate Care, <span className="text-teal-accent">Advanced Technology</span> & Clinical Precision
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong>Janki Skin Aesthetic & Laparoscopic Centre</strong> (जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर) 
                is Forbesganj’s premier clinical facility dedicated to solving complex dermatological conditions and delivering modern minimally invasive laparoscopic surgical care.
              </p>
              <p>
                Conveniently located on <strong>Referral Hospital Road, Forbesganj</strong>, our centre bridges the gap between metropolitan surgical excellence and regional accessibility. Patients no longer need to travel to Patna, Siliguri, or Delhi for advanced laparoscopic surgeries or specialized aesthetic dermatology procedures like GFC hair regrowth, glutathione therapy, and chemical peeling.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-accent flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Board-Certified Assistant Professors</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-accent flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Minimal Invasive Scarless Surgery</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-rose-100/80 text-rose-accent flex items-center justify-center flex-shrink-0">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Personalized Skin & Hair Regimens</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-rose-100/80 text-rose-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Prime Location Opposite Referral Hospital</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
