import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  ChevronDown, 
  Compass,
  Calendar,
  Building2,
  Car
} from 'lucide-react';
import { locationsData } from '../data/locations';
import SEOHead from '../components/SEOHead';

export default function CityLandingPage() {
  const { slug } = useParams();
  const location = locationsData.find((l) => l.slug === slug || l.id === slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!location) {
    return <Navigate to="/locations-served" replace />;
  }

  const isRose = location.badgeTheme === 'rose';

  // Construct comprehensive local schema
  const citySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "Hospital"],
        "@id": `https://jankiskinandlaparoscopiccentre.com/location/${location.slug}#clinic`,
        "name": `Janki Skin Aesthetic & Laparoscopic Centre - Serving ${location.name}`,
        "description": `Premier healthcare facility serving ${location.name} (${location.district}) for minimally invasive 4K laparoscopic keyhole surgeries and clinical dermatology.`,
        "url": `https://jankiskinandlaparoscopiccentre.com/location/${location.slug}`,
        "telephone": "+917091506123",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Referral Hospital Road",
          "addressLocality": "Forbesganj",
          "addressRegion": "Bihar",
          "postalCode": "854318",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${location.name}, ${location.district}, ${location.state}`,
          "postalCode": location.pin
        },
        "employee": [
          {
            "@type": "Physician",
            "name": "Dr. S. Sagar",
            "jobTitle": "Senior Laparoscopic Surgeon & Assistant Professor",
            "medicalSpecialty": "Surgical",
            "telephone": "+917091506123",
            "alumniOf": "FIAGES, FALS (IGIMS Patna)"
          },
          {
            "@type": "Physician",
            "name": "Dr. Rashmi Roy",
            "jobTitle": "Consultant Dermatologist & Assistant Professor",
            "medicalSpecialty": "Dermatology",
            "telephone": "+917091506123",
            "alumniOf": "MNAMS, MD (Dermatology)"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jankiskinandlaparoscopiccentre.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations Served",
            "item": "https://jankiskinandlaparoscopiccentre.com/locations-served"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${location.name} Medical Care`,
            "item": `https://jankiskinandlaparoscopiccentre.com/location/${location.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": location.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  // Nearby related towns
  const otherLocations = locationsData
    .filter((l) => l.slug !== location.slug)
    .slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title={`${location.name} Laparoscopic Surgery & Skin Clinic | Janki Centre Forbesganj`}
        description={`Top 4K laparoscopic keyhole surgery & dermatology for ${location.name} (${location.district}). Dr. S. Sagar (MS Surgery) & Dr. Rashmi Roy (MD Skin). ${location.distanceKm} from Referral Hospital Road. Call +91 70915 06123.`}
        keywords={`Laparoscopic surgery in ${location.name}, Gallbladder stone operation ${location.name}, Appendix surgery ${location.name}, Hernia mesh repair ${location.name}, Best skin doctor ${location.name}, Dermatologist near ${location.name}, GFC hair treatment ${location.name}, Janki Centre Forbesganj`}
        schema={citySchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li><Link to="/locations-served" className="hover:text-primary transition">Locations Served</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">{location.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
              isRose ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-teal-50 text-teal-700 border border-teal-200'
            }`}>
              {location.catchmentType}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-teal-accent" />
              <span>{location.distanceKm}</span>
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{location.commuteTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight leading-tight">
            {location.headline}
          </h1>
          <p className="text-teal-600 font-semibold text-sm sm:text-base mt-2">
            {location.subheadline}
          </p>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4 max-w-4xl">
            {location.overview}
          </p>

          {/* Quick CTA strip */}
          <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 mt-6">
            <Link
              to="/book-appointment"
              className="btn-rose px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment from {location.name}</span>
            </Link>

            <a
              href="tel:+917091506123"
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-primary font-bold text-xs sm:text-sm border border-slate-200 transition inline-flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Helpline: +91 70915 06123</span>
            </a>

            <a
              href={`https://wa.me/917091506123?text=Hello%20Janki%20Centre%2C%20I%20am%20contacting%20from%20${location.name}%20regarding%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs sm:text-sm border border-emerald-200 transition inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Location Token</span>
            </a>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Common Healthcare Concerns in this Region */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-teal-700 font-heading font-bold text-base sm:text-lg">
                <Activity className="w-5 h-5 text-teal-accent" />
                <h2>Common Clinical Concerns for Patients in {location.name}</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Residents in {location.name} ({location.district}) frequently seek specialized medical interventions at Janki Centre for conditions requiring advanced equipment not available in local dispensaries:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {location.commonConcerns.map((concern, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-snug">{concern}</span>
                  </div>
                ))}
              </div>

              {/* Direct links to procedures */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-700 mb-2">Explore Related Specialized Procedures:</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link to="/treatment/laparoscopic-cholecystectomy" className="px-3 py-1 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold transition">
                    Gallbladder Stones (पित्त पथरी) →
                  </Link>
                  <Link to="/treatment/laparoscopic-appendectomy" className="px-3 py-1 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold transition">
                    Appendix Surgery →
                  </Link>
                  <Link to="/treatment/laparoscopic-hernia" className="px-3 py-1 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 font-semibold transition">
                    3D Mesh Hernia Repair →
                  </Link>
                  <Link to="/treatment/gfc-therapy" className="px-3 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold transition">
                    GFC Hair Regrowth →
                  </Link>
                  <Link to="/treatment/chemical-peeling" className="px-3 py-1 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold transition">
                    Chemical Peels (Melasma) →
                  </Link>
                  <Link to="/treatment/vitiligo-care" className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold transition">
                    Vitiligo Care (सफेद दाग) →
                  </Link>
                </div>
              </div>
            </div>

            {/* Travel Directions & Highway Route Guide */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-primary font-heading font-bold text-base sm:text-lg">
                <Car className="w-5 h-5 text-teal-accent" />
                <h2>How to Travel from {location.name} to Janki Centre Forbesganj</h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {location.routeGuide}
              </p>

              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-teal-900 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-teal-600" />
                  <span>Exact Highway Route Coordinates:</span>
                </div>
                <p>
                  <strong>Route:</strong> {location.highwayRoute}
                </p>
                <p>
                  <strong>Approximate Travel Time:</strong> {location.commuteTime} • <strong>Distance:</strong> {location.distanceKm}
                </p>
                <p className="text-[11px] text-teal-700 pt-1 font-semibold">
                  Ample car parking, wheelchair access, and private vehicle ambulance drop-off available at our Referral Hospital Road gate.
                </p>
              </div>
            </div>

            {/* Localized FAQ Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="font-heading font-bold text-slate-800 text-lg">
                Frequently Asked Questions for Patients from {location.name}
              </h2>
              <div className="space-y-3 pt-2">
                {location.faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-primary flex items-center justify-between gap-3 bg-slate-50/50"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-primary' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Lead Faculty Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-sm text-primary uppercase tracking-wider">
                Consulting Faculty
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-800 text-sm">Dr. S. Sagar</div>
                  <div className="text-[11px] text-teal-600 font-semibold">MBBS, MS General Surgery, FIAGES, FALS</div>
                  <div className="text-[11px] text-slate-500 mt-1">Assistant Professor of Surgery • Specialist Laparoscopic Surgeon</div>
                  <div className="text-[10px] text-slate-400 mt-1 font-semibold">Daily Consultations &amp; Admissions</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-slate-800 text-sm">Dr. Rashmi Roy</div>
                  <div className="text-[11px] text-rose-600 font-semibold">MBBS, MD Dermatology, Venereology &amp; Leprosy</div>
                  <div className="text-[11px] text-slate-500 mt-1">Assistant Professor of Dermatology • Aesthetic Dermatosurgeon</div>
                  <div className="text-[10px] text-slate-400 mt-1 font-semibold">Wed: 1–7 PM | Sat &amp; Sun: 10 AM–7 PM</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/doctors"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition"
                >
                  <span>View Complete Doctor Profiles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Quick 24x7 Helpline Card */}
            <div className="bg-gradient-to-br from-primary to-slate-900 rounded-3xl p-6 text-white space-y-3 shadow-md">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-white">
                Emergency or Appointment from {location.name}?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Contact our reception desk for instant slot verification and zero-wait-time admission.
              </p>
              <a
                href="tel:+917091506123"
                className="w-full py-2.5 rounded-xl bg-teal-400 text-primary-dark font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-teal-300 transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 70915 06123</span>
              </a>
            </div>

            {/* Other Nearby Catchments */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="font-heading font-bold text-xs text-slate-500 uppercase tracking-wider">
                Other Regional Catchment Towns
              </h3>
              <div className="space-y-2 text-xs">
                {otherLocations.map((other) => (
                  <Link
                    key={other.id}
                    to={`/location/${other.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition group"
                  >
                    <div>
                      <span className="font-bold text-slate-800 group-hover:text-primary block">{other.name}</span>
                      <span className="text-[10px] text-slate-400">{other.district} • {other.commuteTime}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition" />
                  </Link>
                ))}
              </div>
              <div className="pt-2 text-center">
                <Link
                  to="/locations-served"
                  className="text-xs font-bold text-teal-600 hover:underline"
                >
                  View All 12 Regional Locations →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
