import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Award, 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Stethoscope,
  MessageSquare
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function TributePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="In Memory of Late Dr. Vijay Kumar | General Physician & Surgeon | Janki Clinic"
        description="A heartfelt tribute to Late Dr. Vijay Kumar (General Physician and Surgeon, MBBS ANMMCH Gaya, DOB: 24 Sep 1955, Punya Tithi: 15 May 2019). Served 28 years at Forbesganj Government Hospital (1991–2019), Amour, Raniganj & Simraha."
        keywords="Late Dr Vijay Kumar Forbesganj, General Physician and Surgeon, Dr Vijay Kumar Memorial, Forbesganj Government Hospital doctor, Dr S Sagar father, Janki clinic tribute"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">In Memory of Late Dr. Vijay Kumar</li>
          </ol>
        </nav>

        {/* Memorial Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#061527] via-[#0b2545] to-[#122b4d] text-white p-8 sm:p-14 mb-12 shadow-2xl border border-amber-400/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Sacred Memorial &amp; Eternal Inspiration</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              In Sacred Memory of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                Late Dr. Vijay Kumar
              </span>
            </h1>

            <div className="text-base sm:text-xl font-heading font-bold text-amber-300">
              General Physician &amp; Surgeon • <span className="text-amber-200/90 font-medium">स्वर्गीय डॉ. विजय कुमार जी (जनरल फिजिशियन एवं सर्जन)</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/30 font-semibold">
                General Physician &amp; Surgeon
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold">
                <strong>MBBS:</strong> Anugrah Narayan Magadh Medical College &amp; Hospital (ANMMCH), Gaya
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                <strong>जन्म (DOB):</strong> 24 September 1955
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-400/30">
                <strong>पुण्यतिथि (Punya Tithi):</strong> 15 May 2019
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-amber-400/15 text-amber-200 border border-amber-400/30">
                <strong>Forbesganj Govt. Hospital:</strong> 1991 – 2019 (28+ Years)
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Portrait & Life Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-14 items-start">
          
          {/* Left Column: Framed Dignified Portrait + Diya Interactive Offering */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md text-center">
              
              <div className="relative mx-auto w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200/80 bg-slate-900 group">
                <img
                  src="/assets/dr-vijay-kumar.jpeg"
                  alt="Late Dr. Vijay Kumar - General Physician and Surgeon, Forbesganj"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-white">
                  <div className="font-heading font-extrabold text-base sm:text-lg">
                    Late Dr. Vijay Kumar
                  </div>
                  <div className="text-xs font-bold text-amber-300">
                    General Physician &amp; Surgeon
                  </div>
                  <div className="text-[11px] text-amber-200/90 font-medium">
                    MBBS (ANMMCH, Gaya)
                  </div>
                  <div className="text-[11px] text-slate-300">
                    24 Sep 1955 – 15 May 2019
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="font-heading font-bold text-xl text-primary">
                  A Life of Compassion &amp; Healing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  General Physician and Surgeon, mentor, father, and humanitarian who lived by the motto that medical science is a divine service to suffering humanity.
                </p>
              </div>

              {/* Dignified Remembrance & Tribute Card */}
              <div className="mt-6 pt-5 border-t border-slate-100 text-center space-y-3">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 text-xs leading-relaxed text-left space-y-2">
                  <div className="font-heading font-bold text-amber-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>श्रद्धांजलि एवं नमन (Sacred Remembrance)</span>
                  </div>
                  <p className="text-[12px] text-amber-900 font-medium italic">
                    "कर्म ही पूजा है, और रोगी की सेवा ही ईश्वर की सच्ची आराधना।"
                  </p>
                  <p className="text-[11px] text-slate-600">
                    स्वर्गीय डॉ. विजय कुमार जी (MBBS, ANMMCH Gaya) — जनरल फिजिशियन एवं सर्जन की पावन स्मृति को सादर नमन।
                  </p>
                </div>

                <a
                  href="https://wa.me/917909067784?text=श्रद्धांजलि%20संदेश%20-%20In%20Sacred%20Remembrance%20of%20Late%20Dr.%20Vijay%20Kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-amber-500/20 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-amber-200" />
                  <span>Share a Remembrance Note / श्रद्धांजलि संदेश</span>
                </a>
                <div className="text-[11px] text-slate-500 font-medium">
                  Colleagues, patients &amp; well-wishers are warmly invited to share their memories with the family.
                </div>
              </div>

            </div>

            {/* Quick Service Keynotes */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3.5">
              <h4 className="font-heading font-bold text-sm text-primary uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Service Chronicle</span>
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Forbesganj Government Hospital (1991–2019)</strong>
                    <span className="text-slate-500 text-xs">28 continuous years of dedicated public hospital service.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Different Places Served: Amour, Raniganj &amp; Simraha</strong>
                    <span className="text-slate-500 text-xs">In between his hospital tenure, he worked in different places including Amour (अमौर), Raniganj (रानीगंज), and Simraha (सिमराहा).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block">General Physician &amp; Surgeon Legacy</strong>
                    <span className="text-slate-500 text-xs">MBBS from ANMMCH, Gaya — dedicated clinical consultations and surgical care with humility and compassion.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Full Memorial Biography & Living Legacy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Heartfelt Personal Quote Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0b2545] to-[#173e72] text-white shadow-xl border border-amber-400/30 relative overflow-hidden">
              <div className="text-6xl font-serif text-amber-400/20 leading-none select-none absolute top-4 left-6">
                “
              </div>
              <blockquote className="relative z-10 text-base sm:text-xl italic font-heading font-medium leading-relaxed pt-3 text-slate-100">
                “I grew up watching my father serve humanity with compassion and dedication. His white coat taught me the value of responsibility, his wisdom taught me the power of knowledge, and his life taught me that being a doctor is not just a profession—it is a noble service.”
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-amber-300 gap-1 font-semibold">
                <span>Dr. S. Sagar &amp; Family</span>
                <span className="text-slate-300 font-normal">Founding Spirit of JANKI Skin Aesthetic &amp; Laparoscopic Centre</span>
              </div>
            </div>

            {/* Section 1: The Three Decades at Forbesganj Hospital */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>1991 – 2019: 28 Golden Years</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary">
                A Pillar of Public Healthcare in Forbesganj
              </h2>
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Born on <strong>24 September 1955</strong>, Late Dr. Vijay Kumar earned his prestigious medical graduation—<strong>MBBS from Anugrah Narayan Magadh Medical College and Hospital (ANMMCH), Gaya</strong>—and served with lifelong dedication as a beloved <strong>General Physician and Surgeon</strong>. Driven by an innate calling to heal suffering humanity, he dedicated himself wholeheartedly to government healthcare.
                </p>
                <p>
                  When he joined the <strong>Forbesganj Government Hospital (Referral Hospital) in 1991</strong>, healthcare infrastructure in Seemanchal was modest. Yet, through unwavering dedication, clinical sharpness, and unbounded kindness, he became a beacon of trust for generations of families.
                </p>
                <p>
                  As a revered General Physician and Surgeon, he reported faithfully to the Forbesganj Government Hospital corridors for nearly three continuous decades (<strong>1991 to 2019</strong>). His calm demeanor, accurate clinical diagnostics, and compassionate bedside care made him a beloved household name and a trusted healthcare guardian for families across Seemanchal.
                </p>
              </div>
            </div>

            {/* Section 2: Medical Service in Amour, Raniganj & Simraha */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-accent text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>Service Across Different Places</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary">
                Dedicated Service Across Places: Amour, Raniganj &amp; Simraha
              </h2>
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  In between his extensive medical tenure at Forbesganj Government Hospital (1991–2019), Dr. Vijay Kumar also worked in different places including <strong>Amour (अमौर)</strong>, <strong>Raniganj (रानीगंज)</strong>, and <strong>Simraha (सिमराहा)</strong>.
                </p>
                <p>
                  In each of these regional places, he reached out to the common man, treating families with deep affection, humility, and dignity.
                </p>
                <p>
                  He treated every patient with equal dignity—rich or poor, farmer or merchant. His medical care was always accompanied by patient listening, affectionate counsel, and selfless medical ethics.
                </p>
              </div>
            </div>

            {/* Section 3: The Living Legacy: JANKI Skin Aesthetic & Laparoscopic Centre */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>The Living Legacy</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary">
                How His Torch Shines at JANKI Skin Aesthetic &amp; Laparoscopic Centre
              </h2>
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  When Dr. Vijay Kumar passed away on <strong>15 May 2019</strong>, Forbesganj lost one of its most cherished guardians. But his spirit did not fade—it became the guiding light for his family.
                </p>
                <p>
                  Inspired by his lifelong devotion, <strong>Dr. S. Sagar (MS, FIAGES - Laparoscopic Surgeon)</strong> and <strong>Dr. Rashmi Roy (MBBS, MD - Skin, Hair &amp; Nail Specialist)</strong> founded <strong>JANKI Skin Aesthetic &amp; Laparoscopic Centre</strong> directly on <strong>Referral Hospital Road, Forbesganj</strong>.
                </p>
                <p>
                  Every surgical procedure performed with gentle keyhole precision, every dermatological condition treated with evidence-based care, and every patient greeted with kindness is an offering to his eternal memory.
                </p>
              </div>

              {/* Hindi Tribute Banner */}
              <div className="mt-6 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed space-y-2">
                <p className="font-heading font-bold text-amber-950 text-sm sm:text-base">
                  "कर्म ही पूजा है, और रोगी की सेवा ही ईश्वर की सच्ची आराधना।"
                </p>
                <p>
                  स्वर्गीय डॉ. विजय कुमार जी ने अपना सम्पूर्ण जीवन रोगियों की मुस्कान और स्वास्थ्य के लिए समर्पित कर दिया। जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर उनके बताए सत्य, सेवा और समर्पण के मार्ग पर निरंतर अग्रसर है।
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/doctors"
                className="btn-rose px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
              >
                <span>Meet the Doctors Carrying His Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/book-appointment"
                className="px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold transition shadow-sm"
              >
                Book Consultation
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
