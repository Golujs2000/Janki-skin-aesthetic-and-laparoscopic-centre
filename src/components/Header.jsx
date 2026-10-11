import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, Calendar, MessageCircle, ChevronRight } from 'lucide-react';

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
    { name: 'About Centre', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Treatments', href: '#services' },
    { name: 'Keyhole vs Open', href: '#comparison' },
    { name: 'Clinic Tour', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-teal-accent" />
              Opp. Referral Hospital, Forbesganj, Araria (Bihar)
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-accent" />
              Daily Consultations & 24x7 Emergency Laparoscopy
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+917909067784" className="flex items-center gap-1 text-slate-200 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-teal-accent" />
              <span className="font-semibold">+91 79090 67784</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/917909067784?text=Hello%20Janki%20Skin%20%26%20Laparoscopic%20Centre%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="font-semibold">WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-primary to-teal-accent p-2 shadow-sm flex items-center justify-center text-white font-heading font-extrabold text-xl group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white">
                <path d="M50 8 L88 28 L88 72 L50 92 L12 72 L12 28 Z" stroke="currentColor" strokeWidth="6" fill="none"/>
                <path d="M50 24 L50 76 M24 50 L76 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-xl text-primary tracking-tight leading-none group-hover:text-teal-accent transition-colors">
                JANKI CLINIC
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide mt-0.5">
                Skin Aesthetic & Laparoscopic Centre
              </div>
              <div className="text-[10px] text-teal-accent font-medium hidden sm:block">
                जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर, फारबिसगंज
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-teal-accent transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-teal-accent to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium text-sm px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation Menu"
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
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-heading font-bold text-primary text-lg">Menu Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-accent transition"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 bg-teal-accent text-white py-3 rounded-xl font-medium text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href="tel:+917909067784"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 rounded-xl font-medium text-sm hover:bg-slate-200 transition"
              >
                <Phone className="w-4 h-4 text-rose-accent" />
                <span>Call Clinic Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
