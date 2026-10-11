import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Treatments', href: '#services' },
    { name: 'Why Laparoscopy', href: '#comparison' },
    { name: 'Contact', href: '#contact' },
  ];

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
              <span>Daily Consultation & Surgeries Available</span>
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
        scrolled ? 'bg-white/98 shadow-sm py-2' : 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Logo with authentic J-Star Emblem */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
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
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.92rem] font-bold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-rose-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-rose-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
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
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
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
                    JANKI Clinic
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
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded-lg text-slate-700 font-bold text-sm hover:bg-rose-50 hover:text-rose-600 transition"
                  >
                    {link.name}
                  </a>
                ))}
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
