import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  ArrowRight, 
  Compass,
  CheckCircle2,
  Car
} from 'lucide-react';
import { locationsData } from '../data/locations';
import SEOHead from '../components/SEOHead';

export default function LocationsPage() {
  const [filter, setFilter] = useState('all');

  const filteredLocations = locationsData.filter((loc) => {
    if (filter === 'all') return true;
    if (filter === 'araria') return loc.district === 'Araria';
    if (filter === 'supaul') return loc.district === 'Supaul';
    if (filter === 'nepal') return loc.country === 'Nepal';
    return true;
  });

  const locationsHubSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Janki Skin Aesthetic & Laparoscopic Centre - Regional Healthcare Catchment Hub",
    "url": "https://jankiskinandlaparoscopiccentre.com/locations-served",
    "telephone": "+917091506123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Referral Hospital Road",
      "addressLocality": "Forbesganj",
      "addressRegion": "Bihar",
      "postalCode": "854318",
      "addressCountry": "IN"
    },
    "areaServed": locationsData.map((loc) => ({
      "@type": "AdministrativeArea",
      "name": `${loc.name}, ${loc.district}`
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Locations & Regional Areas Served | Janki Skin & Laparoscopic Centre Forbesganj"
        description="Comprehensive healthcare catchment guide for Janki Centre in Forbesganj. Serving Forbesganj, Jogbani, Biratnagar, Itahari, Narpatganj, Raniganj, Bhargama, Kursakata, Birpur, Balua, Lalitgram & Simrahi."
        keywords="Laparoscopic surgery Forbesganj, Hospitals near Jogbani border, Best skin doctor near Biratnagar Nepal, Gallbladder surgery Narpatganj, Surgeon Raniganj Araria, Clinic Bhargama, Laparoscopy Kursakata, Birpur hospital Supaul, Balua Bazar doctor, Lalitgram surgery, Simrahi laparoscopic centre"
        schema={locationsHubSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Locations Served</li>
          </ol>
        </nav>

        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Healthcare Directory (क्षेत्रीय सेवा क्षेत्र)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Serving Seemanchal, Kosi &amp; <span className="text-teal-accent">Eastern Nepal</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Conveniently located on Referral Hospital Road in Forbesganj, Janki Centre provides advanced 4K laparoscopic keyhole surgeries and clinical dermatology with direct highway access along NH-27.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Catchment Areas (12)' },
            { id: 'araria', label: 'Araria District (6)' },
            { id: 'supaul', label: 'Supaul & Kosi Belt (4)' },
            { id: 'nepal', label: 'Eastern Nepal Cross-Border (2)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition shadow-sm ${
                filter === tab.id
                  ? 'bg-primary text-white shadow-primary/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => {
            const isRose = loc.badgeTheme === 'rose';
            return (
              <div 
                key={loc.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isRose ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-teal-50 text-teal-700 border border-teal-200'
                    }`}>
                      {loc.catchmentType}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{loc.commuteTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-extrabold text-slate-800 group-hover:text-primary transition flex items-center justify-between">
                    <span>{loc.name}</span>
                    <span className="text-sm font-normal text-slate-500 font-body">{loc.nameHindi}</span>
                  </h2>

                  <div className="text-xs font-semibold text-teal-600 mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{loc.district}, {loc.state} • PIN {loc.pin}</span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {loc.overview}
                  </p>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 mb-4 text-[11px] space-y-1">
                    <div className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-teal-accent" />
                      <span>Highway Route:</span>
                    </div>
                    <p className="text-slate-500 leading-snug">{loc.highwayRoute}</p>
                  </div>

                  <div className="space-y-1.5 mb-5 text-[11px] text-slate-600">
                    <div className="font-bold text-slate-700 text-xs mb-1">Key Local Services:</div>
                    {loc.commonConcerns.slice(0, 3).map((concern, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight line-clamp-1">{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/location/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition"
                  >
                    <span>View {loc.name} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </Link>

                  <a
                    href="tel:+917091506123"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-[11px] font-bold transition"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Helpline</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Highway Connectivity Banner */}
        <div className="mt-16 bg-gradient-to-br from-primary to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5" />
              <span>National Highway 27 Connectivity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Travelling from Outside Forbesganj for Surgery or OPD?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our clinic coordinates same-day diagnostic clearance and priority consultation tokens for out-of-town patients traveling from Araria, Supaul, and eastern Nepal, with routine 24-hour discharge protocols for laparoscopic operations.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book-appointment"
                className="btn-rose px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md"
              >
                Pre-Book Priority Token
              </Link>
              <a
                href="tel:+917091506123"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call Helpline: +91 70915 06123</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
