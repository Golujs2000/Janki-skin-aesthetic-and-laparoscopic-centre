import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Activity, 
  Sparkles, 
  HeartPulse, 
  Layers,
  ChevronRight
} from 'lucide-react';

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTreatmentsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setTreatmentsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const laparoscopicTreatments = [
    { title: 'Laparoscopic Cholecystectomy', id: 'laparoscopic-cholecystectomy', desc: 'Gallbladder Stones Removal' },
    { title: 'Laparoscopic Appendectomy', id: 'laparoscopic-appendectomy', desc: 'Emergency & Elective Keyhole' },
    { title: 'Laparoscopic Hernia Repair', id: 'laparoscopic-hernia', desc: '3D Anatomical Mesh (TAPP/TEP)' },
    { title: 'Laparoscopic Cystectomy', id: 'laparoscopic-cystectomy', desc: 'Fertility-Preserving Ovarian Cyst' },
    { title: 'Bilateral Tubal Ligation', id: 'tubal-ligation', desc: 'Day-Care Female Contraception' },
    { title: 'General Surgical Procedures', id: 'general-surgery', desc: 'Cysts, Lipomas & Day-Care Minor OT' },
  ];

  const aestheticTreatments = [
    { title: 'GFC Hair & Skin Therapy', id: 'gfc-therapy', desc: 'Growth Factor Concentrate' },
    { title: 'Chemical Peeling Glow', id: 'chemical-peeling', desc: 'Melasma, Tanning & Glow' },
    { title: 'Glutathione Glow Therapy', id: 'glutathione-therapy', desc: 'Master Antioxidant IV Infusion' },
    { title: 'Laser Skin & Scar Revision', id: 'laser-revision', desc: 'Acne Pits & Texture Repair' },
    { title: 'Anti-Aging & Rejuvenation', id: 'anti-aging', desc: 'Collagen Boost & Wrinkle Relief' },
    { title: 'Hair Fall & Scalp Care', id: 'hair-scalp-care', desc: 'Trichoscopy & Follicle Rejuvenation' },
  ];

  const dermatologyTreatments = [
    { title: 'Acne, Pimples & Blemishes', id: 'acne-treatment', desc: 'Clinical Grade-IV Acne Clearing' },
    { title: 'Vitiligo & White Patches', id: 'vitiligo-care', desc: 'Targeted Repigmentation Therapy' },
    { title: 'Eczema, Psoriasis & Allergies', id: 'eczema-psoriasis', desc: 'Barrier Repair & Itch Relief' },
  ];

  const handleNavAnchor = (hash) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#061527] text-white/85 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Left: Location */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.google.com/maps/place/JANKI+SKIN+%26+LAPROSCOPIC/@26.303892,87.25331,17z/data=!4m6!3m5!1s0x39ef9fa908eb367f:0xea3a0f72158472c1!8m2!3d26.303892!4d87.25331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-accent" />
              <span>Referral Hospital Road, Forbesganj, Bihar 854318</span>
            </a>
          </div>

          {/* Right: Hours & Phone */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:inline-flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-teal-accent" />
              <span>Daily Consultation &amp; Surgeries Available</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-teal-accent" />
              <a href="tel:+917909067784" className="font-semibold text-white hover:underline">
                +91 79090 67784
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/98 shadow-md py-2' : 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo with authentic J-Star Emblem */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-[46px] h-[46px] rounded-xl bg-gradient-to-br from-[#0b2545] to-[#173e72] flex items-center justify-center shadow-md border-[1.5px] border-rose-500/30 group-hover:scale-105 transition-transform flex-shrink-0">
              {/* Authentic Signboard J-Diamond Star Emblem SVG */}
              <svg viewBox="0 0 100 100" width="30" height="30" fill="none" className="drop-shadow-sm">
                <path d="M50 12 Q53 20 61 23 Q53 26 50 34 Q47 26 39 23 Q47 20 50 12 Z" fill="#fbbf24" />
                <path d="M54 30 C64 31 73 37 70 44 C67 49 60 48 58 44 C56 40 61 36 65 37" stroke="#ffffff" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M43 29 C34 31 27 37 30 44 C33 49 40 48 41 42 C42 37 37 34 34 36" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M51 33 C53 47 53 60 46 70 C39 80 26 82 18 75 C11 68 14 55 24 53 C32 51 37 59 32 65 C29 69 23 68 22 63" stroke="#ffffff" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="font-heading font-extrabold text-[1.25rem] sm:text-[1.35rem] text-primary leading-[1.05] tracking-wide block">
                JANKI Skin Aesthetic <br />
                <span className="text-[1.1rem] sm:text-[1.2rem] font-bold text-slate-800">&amp; Laparoscopic Centre</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[0.92rem] font-bold text-slate-700">
            <Link
              to="/"
              className={`hover:text-rose-600 transition-colors py-1 relative ${
                location.pathname === '/' ? 'text-rose-600 font-extrabold' : ''
              }`}
            >
              Home
            </Link>

            {/* Interactive Treatments Dropdown Nav Item */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setTreatmentsDropdownOpen(true)}
              onMouseLeave={() => setTreatmentsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setTreatmentsDropdownOpen(!treatmentsDropdownOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors hover:text-rose-600 cursor-pointer ${
                  location.pathname.startsWith('/treatment') ? 'text-rose-600 font-extrabold' : ''
                }`}
                aria-expanded={treatmentsDropdownOpen}
              >
                <span>Treatments</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${treatmentsDropdownOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {treatmentsDropdownOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[880px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden">
                    {/* Dropdown Header */}
                    <div className="bg-slate-50 px-6 py-3.5 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-teal-accent" />
                        <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                          Specialized Procedures &amp; Surgeries
                        </span>
                      </div>
                      <Link
                        to="/treatments"
                        onClick={() => setTreatmentsDropdownOpen(false)}
                        className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline"
                      >
                        <span>View All 15 Treatments Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Dropdown Columns */}
                    <div className="p-6 grid grid-cols-3 gap-6">
                      
                      {/* Column 1: Laparoscopy */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                          <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-accent flex items-center justify-center">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-xs text-primary leading-tight">
                              Laparoscopic Surgery
                            </h4>
                            <span className="text-[10px] text-slate-500 font-medium">Dr. S. Sagar (MS, FIAGES)</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {laparoscopicTreatments.map((t) => (
                            <Link
                              key={t.id}
                              to={`/treatment/${t.id}`}
                              onClick={() => setTreatmentsDropdownOpen(false)}
                              className="group block p-2 rounded-xl hover:bg-teal-50/70 transition"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover:text-teal-700 leading-snug">
                                {t.title}
                              </div>
                              <div className="text-[11px] text-slate-500 truncate">
                                {t.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Aesthetics */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                          <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-accent flex items-center justify-center">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-xs text-primary leading-tight">
                              Aesthetics &amp; Hair
                            </h4>
                            <span className="text-[10px] text-slate-500 font-medium">Dr. Rashmi Ray (MD, DNB)</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {aestheticTreatments.map((t) => (
                            <Link
                              key={t.id}
                              to={`/treatment/${t.id}`}
                              onClick={() => setTreatmentsDropdownOpen(false)}
                              className="group block p-2 rounded-xl hover:bg-rose-50/70 transition"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover:text-rose-700 leading-snug">
                                {t.title}
                              </div>
                              <div className="text-[11px] text-slate-500 truncate">
                                {t.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Dermatology */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                          <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                            <HeartPulse className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-xs text-primary leading-tight">
                              Clinical Dermatology
                            </h4>
                            <span className="text-[10px] text-slate-500 font-medium">Dr. Rashmi Ray (MD, MNAMS)</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          {dermatologyTreatments.map((t) => (
                            <Link
                              key={t.id}
                              to={`/treatment/${t.id}`}
                              onClick={() => setTreatmentsDropdownOpen(false)}
                              className="group block p-2 rounded-xl hover:bg-amber-50/70 transition"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover:text-amber-700 leading-snug">
                                {t.title}
                              </div>
                              <div className="text-[11px] text-slate-500 truncate">
                                {t.desc}
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Direct Directory Callout Banner */}
                        <div className="mt-4 p-3 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl border border-teal-100 text-center">
                          <p className="text-[11px] text-slate-700 font-semibold mb-2">
                            Explore all 15 clinical pages with step-by-step recovery and indications.
                          </p>
                          <Link
                            to="/treatments"
                            onClick={() => setTreatmentsDropdownOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-accent hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition"
                          >
                            <span>Browse Catalog</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Dropdown Footer */}
                    <div className="bg-slate-900 text-slate-300 px-6 py-2.5 flex items-center justify-between text-xs font-medium">
                      <span>Need quick surgical admission or emergency assistance?</span>
                      <a href="tel:+917909067784" className="text-white font-bold hover:underline inline-flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-teal-accent" />
                        <span>Call +91 79090 67784</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/#about"
              onClick={() => handleNavAnchor('#about')}
              className="hover:text-rose-600 transition-colors py-1"
            >
              About
            </Link>

            <Link
              to="/#doctors"
              onClick={() => handleNavAnchor('#doctors')}
              className="hover:text-rose-600 transition-colors py-1"
            >
              Doctors
            </Link>

            <Link
              to="/#comparison"
              onClick={() => handleNavAnchor('#comparison')}
              className="hover:text-rose-600 transition-colors py-1"
            >
              Why Laparoscopy
            </Link>

            <Link
              to="/#contact"
              onClick={() => handleNavAnchor('#contact')}
              className="hover:text-rose-600 transition-colors py-1"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button & Phone */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+917909067784"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-primary border border-slate-200 text-xs font-bold hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition"
            >
              <Phone className="w-3.5 h-3.5 text-rose-500" />
              <span>+91 79090 67784</span>
            </a>

            <button
              onClick={onBookClick}
              className="btn-rose px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-primary hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0b2545]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0b2545] flex items-center justify-center">
                    <svg viewBox="0 0 100 100" width="20" height="20" fill="none">
                      <path d="M50 12 Q53 20 61 23 Q53 26 50 34 Q47 26 39 23 Q47 20 50 12 Z" fill="#fbbf24" />
                      <path d="M51 33 C53 47 53 60 46 70 C39 80 26 82 18 75 C11 68 14 55 24 53 C32 51 37 59 32 65 C29 69 23 68 22 63" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-heading font-extrabold text-primary text-sm leading-tight">
                    JANKI Clinic Forbesganj
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-slate-700 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Home
                </Link>

                {/* Mobile Treatments Accordion */}
                <div className="rounded-xl border border-slate-100 overflow-hidden bg-slate-50/60 my-1">
                  <button
                    type="button"
                    onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                    className="w-full py-2.5 px-3 flex items-center justify-between text-slate-800 font-bold text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-teal-accent" />
                      <span>Treatments (15)</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileTreatmentsOpen ? 'rotate-180 text-rose-600' : ''}`} />
                  </button>

                  {mobileTreatmentsOpen && (
                    <div className="px-3 pb-3 space-y-3 pt-1 border-t border-slate-100 text-xs">
                      <Link
                        to="/treatments"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full flex items-center justify-between p-2 rounded-lg bg-teal-600 text-white font-bold"
                      >
                        <span>View All 15 Treatments</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block px-2">
                          Laparoscopic Surgeries
                        </span>
                        {laparoscopicTreatments.map((t) => (
                          <Link
                            key={t.id}
                            to={`/treatment/${t.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-2 py-1.5 rounded text-slate-700 hover:text-rose-600 font-medium"
                          >
                            • {t.title}
                          </Link>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block px-2">
                          Aesthetics &amp; Hair
                        </span>
                        {aestheticTreatments.map((t) => (
                          <Link
                            key={t.id}
                            to={`/treatment/${t.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-2 py-1.5 rounded text-slate-700 hover:text-rose-600 font-medium"
                          >
                            • {t.title}
                          </Link>
                        ))}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block px-2">
                          Clinical Dermatology
                        </span>
                        {dermatologyTreatments.map((t) => (
                          <Link
                            key={t.id}
                            to={`/treatment/${t.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-2 py-1.5 rounded text-slate-700 hover:text-rose-600 font-medium"
                          >
                            • {t.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/#about"
                  onClick={() => handleNavAnchor('#about')}
                  className="py-2.5 px-3 rounded-lg text-slate-700 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  About
                </Link>

                <Link
                  to="/#doctors"
                  onClick={() => handleNavAnchor('#doctors')}
                  className="py-2.5 px-3 rounded-lg text-slate-700 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Doctors
                </Link>

                <Link
                  to="/#comparison"
                  onClick={() => handleNavAnchor('#comparison')}
                  className="py-2.5 px-3 rounded-lg text-slate-700 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Why Laparoscopy
                </Link>

                <Link
                  to="/#contact"
                  onClick={() => handleNavAnchor('#contact')}
                  className="py-2.5 px-3 rounded-lg text-slate-700 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full btn-rose py-3 rounded-xl font-bold text-sm text-center block shadow-md"
              >
                Book Appointment
              </button>

              <a
                href="tel:+917909067784"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-primary py-2.5 rounded-xl font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                <span>Call +91 79090 67784</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
