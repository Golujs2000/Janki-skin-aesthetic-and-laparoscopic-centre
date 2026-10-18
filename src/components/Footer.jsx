import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Heart, ShieldAlert, Sparkles, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0b2545] to-[#173e72] p-2 shadow-sm flex items-center justify-center text-white border border-rose-500/30">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white">
                  <path d="M50 12 Q53 20 61 23 Q53 26 50 34 Q47 26 39 23 Q47 20 50 12 Z" fill="#fbbf24" />
                  <path d="M51 33 C53 47 53 60 46 70 C39 80 26 82 18 75 C11 68 14 55 24 53 C32 51 37 59 32 65 C29 69 23 68 22 63" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-lg block leading-none">
                  JANKI CLINIC
                </span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">
                  Skin Aesthetic &amp; Laparoscopic Centre • Estb. 1990 (28+ Years Legacy)
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Forbesganj’s premier multi-speciality clinical facility providing minimally invasive laparoscopic keyhole surgery, GFC hair regrowth, chemical peeling, and medical dermatology.
            </p>

            <div className="text-[11px] text-teal-400 font-medium">
              जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर, फारबिसगंज (अररिया, बिहार)
            </div>

            <div className="pt-1 text-[11px] text-amber-300/90 font-medium flex items-center gap-1.5">
              <span>★</span>
              <Link to="/tribute" className="hover:underline">
                In Sacred Memory of Late Dr. Vijay Kumar (1955–2019)
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-teal-300 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-300 transition">About the Centre</Link></li>
              <li><Link to="/doctors" className="hover:text-teal-300 transition">Specialist Doctors</Link></li>
              <li><Link to="/tribute" className="hover:text-amber-300 text-amber-400 font-bold transition">In Memoriam (Dr. Vijay Kumar)</Link></li>
              <li><Link to="/treatments" className="hover:text-teal-300 font-bold text-teal-400 transition">Treatments Directory</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-300 transition">Clinic Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-teal-300 transition">Contact &amp; Location</Link></li>
              <li><Link to="/book-appointment" className="hover:text-teal-300 text-rose-300 font-bold transition">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Featured Procedures */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Featured Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/treatment/laparoscopic-cholecystectomy" className="hover:text-teal-300 transition">Gallbladder Stone Removal</Link></li>
              <li><Link to="/treatment/laparoscopic-appendectomy" className="hover:text-teal-300 transition">Keyhole Appendectomy</Link></li>
              <li><Link to="/treatment/laparoscopic-hernia" className="hover:text-teal-300 transition">3D Mesh Hernia Repair</Link></li>
              <li><Link to="/treatment/gfc-therapy" className="hover:text-rose-300 transition">GFC Hair &amp; Skin Regrowth</Link></li>
              <li><Link to="/treatment/chemical-peeling" className="hover:text-rose-300 transition">Chemical Peels &amp; Glow</Link></li>
              <li><Link to="/treatment/acne-treatment" className="hover:text-rose-300 transition">Clinical Acne Clearing</Link></li>
              <li><Link to="/treatments" className="text-teal-400 font-bold hover:underline transition">View All 15 Procedures →</Link></li>
            </ul>
          </div>

          {/* Contact Helpline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Helpline &amp; Address
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Opp. Sub-Divisional Referral Hospital, Referral Hospital Road, Forbesganj, Araria, Bihar 854318</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span><strong>Surgical &amp; Emergency:</strong> <a href="tel:+917909067784" className="text-slate-200 hover:text-white">+91 79090 67784</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span><strong>Dermatology OPD:</strong> <a href="tel:+917091506123" className="text-slate-200 hover:text-white">+91 70915 06123</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Daily Consultation &amp; Surgery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <div className="flex flex-wrap items-center gap-2">
            <p>
              &copy; {new Date().getFullYear()} Janki Skin Aesthetic &amp; Laparoscopic Centre. All Rights Reserved.
            </p>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link to="/admin" className="text-slate-500 hover:text-teal-400 text-[11px] font-semibold transition inline-flex items-center gap-1">
              <span>Staff Admin Portal</span>
            </Link>
          </div>
          <p className="text-[11px] max-w-xl text-slate-500">
            <strong>Medical Disclaimer:</strong> Information on this website is for educational and general informational purposes and does not replace formal medical evaluation. Always consult Dr. S. Sagar or Dr. Rashmi Roy for direct clinical diagnosis.
          </p>
        </div>

      </div>
    </footer>
  );
}
