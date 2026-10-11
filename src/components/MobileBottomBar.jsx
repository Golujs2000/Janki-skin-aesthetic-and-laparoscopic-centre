import React from 'react';
import { Phone, MessageCircle, Calendar, Navigation } from 'lucide-react';

export default function MobileBottomBar({ onBookClick }) {
  return (
    <nav 
      aria-label="Mobile Quick Actions" 
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(11,37,69,0.08)] py-2 px-3"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Call Action */}
        <a 
          href="tel:+917909067784" 
          className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-rose-600 transition flex-1 text-center"
          aria-label="Call Hospital"
        >
          <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a 
          href="https://wa.me/917909067784?text=Hello%20Janki%20Skin%20%26%20Laparoscopic%20Centre%2C%20I%20would%20like%20to%20book%20a%20consultation." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-emerald-600 transition flex-1 text-center"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Book Action */}
        <button 
          onClick={onBookClick}
          className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-teal-600 transition flex-1 text-center"
          aria-label="Book Consultation"
        >
          <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold">Book</span>
        </button>

        {/* Direction Action */}
        <a 
          href="https://www.google.com/maps/place/JANKI+SKIN+%26+LAPROSCOPIC/@26.303892,87.25331,17z/data=!4m6!3m5!1s0x39ef9fa908eb367f:0xea3a0f72158472c1!8m2!3d26.303892!4d87.25331" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 transition flex-1 text-center"
          aria-label="Get Directions"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold">Directions</span>
        </a>
      </div>
    </nav>
  );
}
