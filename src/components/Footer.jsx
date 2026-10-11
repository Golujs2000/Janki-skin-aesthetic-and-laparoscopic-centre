import React from 'react';
import { Phone, MapPin, Clock, Heart, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-teal-accent p-2 shadow-sm flex items-center justify-center text-white">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-white">
                  <path d="M50 8 L88 28 L88 72 L50 92 L12 72 L12 28 Z" stroke="currentColor" strokeWidth="6" fill="none"/>
                  <path d="M50 24 L50 76 M24 50 L76 50" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-lg block leading-none">
                  JANKI CLINIC
                </span>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">
                  Skin Aesthetic & Laparoscopic Centre
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Forbesganj’s premier multi-speciality clinical facility providing minimally invasive laparoscopic keyhole surgery, GFC hair regrowth, chemical peeling, and medical dermatology.
            </p>

            <div className="text-[11px] text-teal-400 font-medium">
              जानकी स्किन एस्थेटिक एवं लैप्रोस्कोपिक सेंटर, फारबिसगंज (अररिया, बिहार)
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-teal-300 transition">About the Centre</a></li>
              <li><a href="#doctors" className="hover:text-teal-300 transition">Our Specialist Doctors</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition">Treatments & Surgeries</a></li>
              <li><a href="#comparison" className="hover:text-teal-300 transition">Laparoscopic vs Open Surgery</a></li>
              <li><a href="#gallery" className="hover:text-teal-300 transition">Photo & Poster Gallery</a></li>
              <li><a href="#reviews" className="hover:text-teal-300 transition">Patient Testimonials</a></li>
              <li><a href="#book-appointment" className="hover:text-teal-300 transition">Book Online Appointment</a></li>
            </ul>
          </div>

          {/* Contact Helpline */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Helpline & Address
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Opp. Sub-Divisional Referral Hospital, Referral Hospital Road, Forbesganj, Araria, Bihar 854318</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span><strong>Surgical & Emergency:</strong> <a href="tel:+917909067784" className="text-slate-200 hover:text-white">+91 79090 67784</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span><strong>Dermatology OPD:</strong> <a href="tel:+917091506123" className="text-slate-200 hover:text-white">+91 70915 06123</a></span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Janki Skin Aesthetic & Laparoscopic Centre. All Rights Reserved.
          </p>
          <p className="text-[11px] max-w-xl text-slate-500">
            <strong>Medical Disclaimer:</strong> Information on this website is for educational and general informational purposes and does not replace formal medical evaluation. Always consult Dr. S. Sagar or Dr. Rashmi Ray for direct clinical diagnosis.
          </p>
        </div>

      </div>
    </footer>
  );
}
