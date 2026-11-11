import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, PhoneCall, HelpCircle, Stethoscope, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="bg-slate-50 min-h-[75vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="404 - Page Not Found | Janki Skin Aesthetic & Laparoscopic Centre"
        description="The medical page you are looking for may have moved or been updated. Browse our surgical procedures, skin clinic services, or call our Forbesganj helpline."
      />

      <div className="max-w-xl w-full text-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
        
        {/* Visual Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-3xl font-black font-heading mb-2">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary font-heading">
            Page Not Found / पृष्ठ नहीं मिला
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The link you accessed may be outdated, moved, or mistyped. Please use the navigation below to find the required treatment, doctor profile, or regional clinic guide.
          </p>
        </div>

        {/* Quick Recovery Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-bold rounded-xl shadow-md hover:bg-primary-hover transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/treatments"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-50 text-teal-accent border border-teal-200 text-sm font-bold rounded-xl hover:bg-teal-100/60 transition"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Browse Treatments</span>
          </Link>
        </div>

        {/* Popular Shortcuts */}
        <div className="pt-6 border-t border-slate-100 text-left space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
            Frequently Visited Portals
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link to="/treatment/laparoscopic-cholecystectomy" className="p-2.5 rounded-lg bg-slate-50 hover:bg-teal-50/50 hover:text-teal-accent transition font-medium text-slate-700">
              &bull; Gallbladder Stone (दूरबीन)
            </Link>
            <Link to="/treatment/laser-hair-reduction" className="p-2.5 rounded-lg bg-slate-50 hover:bg-teal-50/50 hover:text-teal-accent transition font-medium text-slate-700">
              &bull; Laser Hair Reduction
            </Link>
            <Link to="/treatment/laparoscopic-hernia-repair" className="p-2.5 rounded-lg bg-slate-50 hover:bg-teal-50/50 hover:text-teal-accent transition font-medium text-slate-700">
              &bull; Hernia Mesh Surgery
            </Link>
            <Link to="/locations-served" className="p-2.5 rounded-lg bg-slate-50 hover:bg-teal-50/50 hover:text-teal-accent transition font-medium text-slate-700">
              &bull; Regional Locations (12 Towns)
            </Link>
          </div>
        </div>

        {/* Helpline */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span>Need immediate assistance?</span>
          <a href="tel:+917091506123" className="font-bold text-teal-accent hover:underline inline-flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5" />
            +91 70915 06123
          </a>
        </div>

      </div>
    </div>
  );
}
