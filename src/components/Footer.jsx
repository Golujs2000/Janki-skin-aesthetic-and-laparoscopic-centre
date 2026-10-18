import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Heart, 
  ShieldAlert, 
  Sparkles, 
  Activity, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Stethoscope 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 5-Column Navigation Grid showing ALL links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Hospital Identity & Heritage (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0b2545] to-[#173e72] p-2 shadow-sm flex items-center justify-center text-white border border-rose-500/30">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white">
                  <path d="M50 12 Q53 20 61 23 Q53 26 50 34 Q47 26 39 23 Q47 20 50 12 Z" fill="#fbbf24" />
                  <path d="M51 33 C53 47 53 60 46 70 C39 80 26 82 18 75 C11 68 14 55 24 53 C32 51 37 59 32 65 C29 69 23 68 22 63" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-lg block leading-none">
                  JANKI CLINIC
                </span>
                <span className="text-[11px] text-teal-400 font-semibold block mt-1">
                  Skin Aesthetic &amp; Laparoscopic Centre
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Forbesganj’s premier multi-speciality clinical facility providing minimally invasive 4K laparoscopic keyhole surgery, GFC hair regrowth, clinical dermatology, and aesthetic peels with 28+ years of healing trust.
            </p>

            <div className="text-[11px] text-teal-300 font-medium">
              जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर, फारबिसगंज (अररिया, बिहार)
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5 text-[11px]">
              <div className="text-amber-400 font-bold flex items-center gap-1.5">
                <span>★</span>
                <Link to="/tribute" className="hover:underline text-amber-300">
                  In Sacred Memory of Late Dr. Vijay Kumar (1955–2019)
                </Link>
              </div>
              <p className="text-slate-500 text-[10px] leading-relaxed">
                Founding pioneer who dedicated 28+ years to patient service across Forbesganj and Kosi-Seemanchal.
              </p>
            </div>

            {/* Helpline quick buttons */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href="tel:+917909067784"
                className="px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 hover:bg-teal-500/20 font-bold transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Surgery: 79090 67784</span>
              </a>
              <a
                href="tel:+917091506123"
                className="px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 font-bold transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Skin/Hair: 70915 06123</span>
              </a>
            </div>
          </div>

          {/* Column 2: Main Website Pages & Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 text-teal-400">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Quick Pages</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-teal-300 transition">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-teal-300 transition">About the Centre</Link></li>
              <li><Link to="/doctors" className="hover:text-teal-300 transition">Specialist Doctors</Link></li>
              <li><Link to="/treatments" className="hover:text-teal-300 font-bold text-slate-200 transition">All 15 Treatments</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-300 transition">Hospital Gallery</Link></li>
              <li><Link to="/tribute" className="hover:text-amber-300 text-amber-400/90 font-medium transition">Late Dr. Vijay Kumar Tribute</Link></li>
              <li><Link to="/contact" className="hover:text-teal-300 transition">Contact &amp; Map Location</Link></li>
              <li><Link to="/book-appointment" className="text-rose-400 hover:text-rose-300 font-bold transition flex items-center gap-1">
                <span>Book Appointment</span>
                <ArrowRight className="w-3 h-3" />
              </Link></li>
              <li><Link to="/admin" className="text-slate-500 hover:text-teal-400 transition text-[11px]">Staff Admin Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Laparoscopic Surgeries (Dr. S. Sagar) (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 text-teal-400">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Keyhole Surgery</span>
            </h4>
            <div className="text-[10px] text-slate-500 font-medium">Dr. S. Sagar (MS Gen Surg)</div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/treatment/laparoscopic-cholecystectomy" className="hover:text-teal-300 transition block">
                  Gallbladder Stones (पित्त पथरी)
                </Link>
              </li>
              <li>
                <Link to="/treatment/laparoscopic-appendectomy" className="hover:text-teal-300 transition block">
                  Appendix Surgery (अपेंडिक्स)
                </Link>
              </li>
              <li>
                <Link to="/treatment/laparoscopic-hernia" className="hover:text-teal-300 transition block">
                  3D Mesh Hernia (हर्निया)
                </Link>
              </li>
              <li>
                <Link to="/treatment/laparoscopic-cystectomy" className="hover:text-teal-300 transition block">
                  Ovarian Cyst (अंडाशय की गांठ)
                </Link>
              </li>
              <li>
                <Link to="/treatment/tubal-ligation" className="hover:text-teal-300 transition block">
                  Female Tubal Ligation (नसबंदी)
                </Link>
              </li>
              <li>
                <Link to="/treatment/general-surgery" className="hover:text-teal-300 transition block">
                  Minor &amp; Day-Care Surgery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Aesthetics & Trichology (Dr. Rashmi Roy) (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 text-rose-400">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Aesthetics &amp; Hair</span>
            </h4>
            <div className="text-[10px] text-slate-500 font-medium">Dr. Rashmi Roy (MD Skin)</div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/treatment/gfc-therapy" className="hover:text-rose-300 transition block">
                  GFC Hair &amp; Skin Regrowth
                </Link>
              </li>
              <li>
                <Link to="/treatment/chemical-peeling" className="hover:text-rose-300 transition block">
                  Chemical Peels (मेलास्मा)
                </Link>
              </li>
              <li>
                <Link to="/treatment/glutathione-therapy" className="hover:text-rose-300 transition block">
                  IV Infusion Therapy
                </Link>
              </li>
              <li>
                <Link to="/treatment/laser-revision" className="hover:text-rose-300 transition block">
                  Laser Scar Revision (गड्ढे)
                </Link>
              </li>
              <li>
                <Link to="/treatment/anti-aging" className="hover:text-rose-300 transition block">
                  Anti-Aging &amp; Wrinkles
                </Link>
              </li>
              <li>
                <Link to="/treatment/hair-scalp-care" className="hover:text-rose-300 transition block">
                  Hair Fall &amp; Scalp Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Clinical Dermatology & Helpline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 text-emerald-400">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />
              <span>Clinical Skin OPD</span>
            </h4>
            <div className="text-[10px] text-slate-500 font-medium">Dermatology Care</div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/treatment/acne-treatment" className="hover:text-emerald-300 transition block">
                  Acne &amp; Pimples (कील-मुंहासे)
                </Link>
              </li>
              <li>
                <Link to="/treatment/vitiligo-care" className="hover:text-emerald-300 transition block">
                  Vitiligo Care (सफेद दाग)
                </Link>
              </li>
              <li>
                <Link to="/treatment/eczema-psoriasis" className="hover:text-emerald-300 transition block">
                  Eczema, Psoriasis &amp; Allergies
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  to="/treatments" 
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-400 hover:text-teal-300 transition"
                >
                  <span>Explore Full Directory →</span>
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 space-y-1 text-[11px] text-slate-400">
              <div className="font-bold text-slate-300">Hospital Address:</div>
              <div className="leading-snug text-slate-400">
                Opp. Sub-Divisional Referral Hospital Road, Forbesganj, Araria, Bihar 854318
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <p>
              &copy; {new Date().getFullYear()} Janki Skin Aesthetic &amp; Laparoscopic Centre. All Rights Reserved.
            </p>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link to="/admin" className="text-slate-400 hover:text-teal-300 font-semibold transition inline-flex items-center gap-1">
              <span>Admin Portal</span>
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link to="/tribute" className="text-amber-400/90 hover:text-amber-300 transition">
              Dr. Vijay Kumar Memorial
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link to="/book-appointment" className="text-rose-400 hover:text-rose-300 font-semibold transition">
              Online Booking
            </Link>
          </div>
          
          <p className="text-[11px] max-w-xl text-slate-500">
            <strong>Medical Disclaimer:</strong> Information on this website is for educational and public informational purposes. Formal clinical evaluation by Dr. S. Sagar (Laparoscopic Surgeon) or Dr. Rashmi Roy (MD Dermatology, Skin, Hair &amp; Nail Specialist) is recommended for personalized treatment planning.
          </p>
        </div>

      </div>
    </footer>
  );
}
