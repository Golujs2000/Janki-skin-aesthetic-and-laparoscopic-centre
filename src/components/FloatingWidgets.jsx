import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingWidgets() {
  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917909067784?text=Hello%20Janki%20Skin%20%26%20Laparoscopic%20Centre%2C%20I%20would%20like%20to%20book%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
        aria-label="Chat with Clinic on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold font-heading tracking-wide">WhatsApp Desk</span>
      </a>

      {/* Emergency Call Button */}
      <a
        href="tel:+917909067784"
        className="group flex items-center gap-2.5 bg-rose-600 hover:bg-rose-700 text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-rose-600/25 transition-all transform hover:-translate-y-0.5"
        aria-label="Call Emergency Helpline"
      >
        <Phone className="w-5 h-5" />
        <span className="text-xs font-bold font-heading tracking-wide">24x7 Helpline</span>
      </a>
    </div>
  );
}
