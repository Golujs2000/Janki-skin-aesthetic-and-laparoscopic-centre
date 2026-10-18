import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Sparkles, MapPin, ArrowRight, Heart, Stethoscope, Flame } from 'lucide-react';

export default function Tribute({ showFullLink = true }) {
  return (
    <section id="in-memoriam" className="py-16 sm:py-20 bg-gradient-to-b from-[#061527] via-[#0b2545] to-[#071930] text-white relative overflow-hidden">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Memorial Badge Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Our Guiding Light &amp; Eternal Inspiration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mt-3 text-white leading-tight">
            In Loving Memory of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
              Late Dr. Vijay Kumar
            </span>
          </h2>

          {/* Designation & Hindi title */}
          <div className="text-base sm:text-lg font-bold text-amber-300 font-heading mt-2 flex flex-wrap items-center justify-center gap-2">
            <span>General Physician &amp; Surgeon</span>
            <span className="text-amber-400/60 hidden sm:inline">•</span>
            <span className="text-amber-200/90 font-medium">स्वर्गीय डॉ. विजय कुमार जी (जनरल फिजिशियन एवं सर्जन)</span>
          </div>

          {/* Quick Credential Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs sm:text-sm font-semibold text-slate-200">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-amber-300" />
              <span>MBBS (ANMMCH, Gaya)</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 font-semibold">
              General Physician &amp; Surgeon
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200">
              जन्म: 24 सितम्बर 1955
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 font-bold">
              पुण्यतिथि: 15 मई 2019
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-200">
              Forbesganj Govt Hospital (1991–2019 • 28+ Years)
            </span>
          </div>
        </div>

        {/* Main Tribute Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Framed Dignified Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              
              {/* Gold Floral Memorial Glow Rim */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-amber-300/40 to-teal-400/20 rounded-[32px] blur-lg opacity-75" />

              {/* Framed Portrait Box */}
              <div className="relative rounded-[28px] overflow-hidden bg-slate-900 border-2 border-amber-400/40 shadow-2xl shadow-black/60 aspect-[4/5] group">
                <img
                  src="/assets/dr-vijay-kumar.jpeg"
                  alt="Late Dr. Vijay Kumar - General Physician and Surgeon, Forbesganj"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay at bottom with designation */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end p-5 text-center">
                  <div className="font-heading font-extrabold text-lg text-white tracking-wide">
                    Late Dr. Vijay Kumar
                  </div>
                  <div className="text-xs font-bold text-amber-300">
                    General Physician &amp; Surgeon
                  </div>
                  <div className="text-[11px] text-amber-200/90 font-medium mt-0.5">
                    MBBS (ANMMCH, Gaya)
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    24 Sep 1955 — 15 May 2019
                  </div>
                </div>
              </div>

              {/* Service Footprint Callout */}
              <div className="mt-4 p-3.5 rounded-2xl bg-slate-900/90 border border-amber-400/30 shadow-xl backdrop-blur-md text-center">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>28+ Years Dedicated Public Hospital Service</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
                  Forbesganj Government Hospital (1991 – 2019)
                </div>
                <div className="text-[11px] text-teal-300 mt-0.5">
                  Also Served in Amour, Raniganj &amp; Simraha
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Short Description, Quote & Tribute Redirect */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Heartfelt Personal Quote */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-white/[0.07] border border-amber-400/30 backdrop-blur-md shadow-2xl">
              <div className="text-4xl sm:text-5xl font-serif text-amber-400/40 leading-none select-none absolute top-4 left-5">
                “
              </div>
              <blockquote className="relative z-10 text-slate-100 text-sm sm:text-base md:text-lg italic font-medium leading-relaxed pt-2">
                “I grew up watching my father serve humanity with compassion and dedication. His white coat taught me the value of responsibility, his wisdom taught me the power of knowledge, and his life taught me that being a doctor is not just a profession—it is a noble service.”
              </blockquote>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-amber-300/90 font-semibold">
                <span>— The Guiding Ethos of Dr. S. Sagar &amp; Family</span>
                <span className="text-slate-400 font-normal">Living Legacy</span>
              </div>
            </div>

            {/* Concise Short Description */}
            <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">Late Dr. Vijay Kumar</strong> was a revered <strong className="text-amber-300">General Physician and Surgeon</strong> who graduated with his <strong className="text-amber-300">MBBS from Anugrah Narayan Magadh Medical College and Hospital (ANMMCH), Gaya</strong>. He dedicated nearly three continuous decades (<strong>1991 till 2019</strong>) to selfless public healthcare at the <strong className="text-white">Forbesganj Government Hospital</strong> (Referral Hospital).
              </p>
              <p>
                Throughout his distinguished career, he also served with deep devotion in different places including <strong className="text-white">Amour (अमौर)</strong>, <strong className="text-white">Raniganj (रानीगंज)</strong>, and <strong className="text-white">Simraha (सिमराहा)</strong>. Known for his compassionate bedside manner, sharp clinical diagnostics, and selfless devotion, he healed thousands of families across Seemanchal.
              </p>
              <p className="text-slate-200">
                Today, <strong>Janki Skin Aesthetic &amp; Laparoscopic Centre</strong> stands proudly on <strong>Referral Hospital Road, Forbesganj</strong>—carrying forward his sacred torch with modern laparoscopic surgery, advanced dermatology, and uncompromised ethical care.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Stethoscope className="w-3 h-3" />
                  <span>Qualification</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">MBBS (ANMMCH Gaya)</div>
                <div className="text-[11px] text-slate-400 mt-0.5">General Physician &amp; Surgeon</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-teal-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Places Served</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">Forbesganj • 1991–2019</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Amour • Raniganj • Simraha</div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  <span>Living Legacy</span>
                </div>
                <div className="text-xs font-bold text-white mt-1">JANKI Skin Aesthetic &amp; Laparoscopic Centre</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Referral Hospital Road</div>
              </div>
            </div>

            {/* Prominent Redirect Box to Tribute Page */}
            {showFullLink && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-400/15 via-amber-400/10 to-teal-400/10 border border-amber-400/35 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Dedicated Memorial &amp; Life Journey</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Read his complete 28-year service chronicle, medical milestones, and tribute remembrance.
                  </div>
                </div>

                <Link
                  to="/tribute"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition transform hover:-translate-y-0.5 flex-shrink-0"
                >
                  <span>Visit Tribute Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

