import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Home as HomeIcon, 
  UserCheck, 
  Stethoscope, 
  Sparkles, 
  MapPin, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  Image, 
  HeartHandshake, 
  CalendarCheck,
  ChevronRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { treatmentsData } from '../data/treatments';
import { locationsData } from '../data/locations';

export default function SitemapPage() {
  const laparoscopicTreatments = treatmentsData.filter(t => t.department === 'laparoscopic');
  const aestheticTreatments = treatmentsData.filter(t => t.department === 'aesthetic' || t.department === 'dermatology');

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="HTML Sitemap & Directory | Janki Skin Aesthetic & Laparoscopic Centre"
        description="Complete site index and hierarchical navigation directory for Janki Skin Aesthetic & Laparoscopic Centre. Browse all clinical treatments, catchment areas, and resources."
        keywords="Sitemap Janki Clinic Forbesganj, Website navigation, Medical specialties index"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">HTML Sitemap</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold uppercase tracking-wider">
            <Network className="w-4 h-4" />
            <span>Architecture &amp; Navigation Index</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight">
            Complete Website Sitemap &amp; Medical Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Quickly locate clinical services, surgical procedures, aesthetic therapies, regional catchment locations, patient support guides, and administrative resources across our web portal.
          </p>
        </div>

        {/* 1. Core Pages & Portals */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-accent flex items-center justify-center font-bold">
              <HomeIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">Primary Website Pages</h2>
              <p className="text-xs text-slate-500">Core operational and institutional information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Home Page", path: "/", desc: "Welcome portal, key procedures, and direct booking" },
              { title: "About the Centre", path: "/about", desc: "Our heritage, sterilization protocols, and values" },
              { title: "Specialist Doctors", path: "/doctors", desc: "Profiles of Dr. S. Sagar & Dr. Rashmi Roy" },
              { title: "Clinical Treatments", path: "/treatments", desc: "Full catalog of 15 surgical & skin procedures" },
              { title: "Photo Gallery & OT", path: "/gallery", desc: "Infrastructure, Karl Storz OT, and skin lasers" },
              { title: "Book Appointment", path: "/book-appointment", desc: "Direct consultation scheduling with specialists" },
              { title: "Contact & Route Map", path: "/contact", desc: "Forbesganj Subhash Chowk address & phone helpline" },
              { title: "Dr. Vijay Kumar Tribute", path: "/tribute", desc: "Honoring our visionary founder and his medical legacy" }
            ].map((item, idx) => (
              <Link 
                key={idx}
                to={item.path}
                className="group p-4 rounded-2xl border border-slate-100 hover:border-teal-300 hover:bg-teal-50/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-sm group-hover:text-teal-accent transition-colors">
                      {item.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-[10px] text-teal-600 font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.path}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. Patient Resources & Legal */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">Patient Resources &amp; Legal</h2>
              <p className="text-xs text-slate-500">Transparency, patient feedback, and regulatory guidelines</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Patient Reviews", path: "/reviews", desc: "Authentic verified patient feedback & testimonials", icon: MessageSquare },
              { title: "Patient FAQs", path: "/faqs", desc: "Answers regarding recovery, costs, and prep", icon: HelpCircle },
              { title: "Locations Served", path: "/locations-served", desc: "Comprehensive 12-town regional coverage directory", icon: MapPin },
              { title: "Privacy Policy", path: "/privacy-policy", desc: "Medical data handling & NMC confidentiality", icon: ShieldCheck },
              { title: "Terms & Conditions", path: "/terms-conditions", desc: "Clinical guidelines, consultation terms & disclaimers", icon: FileText }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={idx}
                  to={item.path}
                  className="group p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-4 h-4 text-blue-600 mb-2" />
                    <span className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors block">
                      {item.title}
                    </span>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-[10px] text-blue-600 font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.path}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. Laparoscopic Surgeries & Dermatology Treatments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Laparoscopic */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-accent flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  Laparoscopic &amp; General Surgery
                </h2>
                <p className="text-xs text-slate-500">Lead Surgeon: Dr. S. Sagar (MS, FIAGES)</p>
              </div>
            </div>

            <div className="space-y-3">
              {laparoscopicTreatments.map((treatment) => (
                <Link
                  key={treatment.id}
                  to={`/treatment/${treatment.id}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-teal-300 hover:bg-teal-50/20 transition"
                >
                  <div className="pr-4">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-teal-accent transition-colors">
                      {treatment.title}
                    </p>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {treatment.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-accent group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Dermatology */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  Clinical Dermatology &amp; Aesthetics
                </h2>
                <p className="text-xs text-slate-500">Specialist: Dr. Rashmi Roy (MD Dermatology)</p>
              </div>
            </div>

            <div className="space-y-3">
              {aestheticTreatments.map((treatment) => (
                <Link
                  key={treatment.id}
                  to={`/treatment/${treatment.id}`}
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-rose-300 hover:bg-rose-50/20 transition"
                >
                  <div className="pr-4">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                      {treatment.title}
                    </p>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {treatment.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* 4. Catchment Locations */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                Regional Catchment Areas &amp; Border Towns Served
              </h2>
              <p className="text-xs text-slate-500">Dedicated local connectivity guides and highway transit information</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {locationsData.map((loc) => (
              <Link
                key={loc.slug}
                to={`/location/${loc.slug}`}
                className="group p-3 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/30 transition text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-md inline-block mb-1.5">
                    {loc.district}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-800 transition-colors">
                    {loc.name}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{loc.distance}</p>
                </div>
                <div className="mt-2 text-[10px] text-amber-600 font-semibold group-hover:underline">
                  View Guide &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
