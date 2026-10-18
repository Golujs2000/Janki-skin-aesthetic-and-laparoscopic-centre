import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { treatmentsData } from '../data/treatments';
import { 
  Sparkles, 
  Activity, 
  Search, 
  ZoomIn, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  HeartPulse, 
  ShieldCheck, 
  Stethoscope, 
  Sun, 
  Zap, 
  Crosshair, 
  Clock, 
  Feather, 
  ShieldAlert, 
  SunMedium, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

// Dynamic Icon Map for Lucide Icons
const iconMap = {
  ShieldAlert,
  Activity,
  Layers,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Sun,
  Zap,
  Crosshair,
  Clock,
  Feather,
  SunMedium,
  AlertCircle,
};

export default function Services({ onOpenLightbox, onBookTreatment }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', label: 'All Treatments (15)', icon: Layers },
    { id: 'laparoscopic', label: 'Laparoscopic Surgery (6)', icon: Activity },
    { id: 'aesthetic', label: 'Aesthetics & Hair (6)', icon: Sparkles },
    { id: 'dermatology', label: 'Clinical Dermatology (3)', icon: HeartPulse },
  ];

  const filteredTreatments = treatmentsData.filter((t) => {
    const matchesTab = activeTab === 'all' || t.department === activeTab;
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Medical & Surgical Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Advanced Treatments & <span className="text-teal-accent">Clinical Specialties</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Browse our complete treatment catalog with verified clinical thumbnails, high-definition official posters, and minimally invasive protocols.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tab Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-accent/20 focus:border-teal-accent transition"
            />
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => {
            const isTeal = treatment.badgeTheme === 'teal';
            const IconComponent = iconMap[treatment.icon] || Activity;

            return (
              <div
                key={treatment.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* 16:9 Thumbnail Header with Badges and Lightbox Trigger */}
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => onOpenLightbox(treatment.poster, treatment.title, `${treatment.title} • Clinical Information`)}
                >
                  <img
                    src={treatment.thumb}
                    alt={`${treatment.title} at JANKI Skin Aesthetic & Laparoscopic Centre Forbesganj`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white backdrop-blur-md shadow-sm ${
                      isTeal ? 'bg-teal-600/90' : 'bg-rose-600/90'
                    }`}>
                      {treatment.badge}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLightbox(treatment.poster, treatment.title, `${treatment.title} • Clinical Information`);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-white text-white hover:text-slate-900 text-[11px] font-semibold border border-white/20 transition backdrop-blur-md shadow-sm"
                    >
                      <ZoomIn className="w-3 h-3" />
                      <span>{treatment.posterLabel}</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-4">
                    {/* Header with Icon and Title */}
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isTeal ? 'bg-teal-50 text-teal-accent' : 'bg-rose-50 text-rose-accent'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <Link to={`/treatment/${treatment.id}`} className="group/link block">
                          <h3 className="font-heading font-bold text-lg text-primary leading-tight group-hover/link:text-teal-accent transition-colors">
                            {treatment.title}
                          </h3>
                        </Link>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">
                          {treatment.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {treatment.desc}
                    </p>

                    {/* Key Clinical Benefits */}
                    <div className="space-y-1.5 pt-1">
                      {treatment.benefits.slice(0, 3).map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                            isTeal ? 'text-teal-accent' : 'text-rose-accent'
                          }`} />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Link to full page & Book CTA */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      to={`/treatment/${treatment.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-teal-accent transition group/btn"
                    >
                      <span>Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => onBookTreatment(treatment)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition ${
                        isTeal ? 'bg-teal-accent hover:bg-teal-600' : 'bg-rose-accent hover:bg-rose-600'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTreatments.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="font-heading font-bold text-lg text-slate-700">No treatments found</h4>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your search terms or clearing the filter.</p>
            <button
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-teal-accent text-white text-xs font-semibold rounded-full shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
