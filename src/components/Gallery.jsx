import React, { useState } from 'react';
import { galleryData } from '../data/gallery';
import { Camera, ZoomIn, Image as ImageIcon } from 'lucide-react';

export default function Gallery({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Facility Photos' },
    { id: 'reception', label: 'Reception & Entrance' },
    { id: 'waiting', label: 'Patient Waiting Lounge' },
    { id: 'chambers', label: 'Doctor Chambers' },
    { id: 'clinical', label: 'Clinical Examination' },
  ];

  const filteredItems = galleryData.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>Facility Tour & Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Inside JANKI Skin Aesthetic &amp; Laparoscopic Centre
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Take an authentic visual walkthrough of our sanitized reception, patient waiting lounge, consultation chambers, and examination suites.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
                filter === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item.src, item.title, `${item.title} • Clinic Tour`)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold font-heading leading-tight">{item.title}</h4>
                    <span className="text-[11px] text-teal-300 font-medium block mt-0.5">{item.subtitle}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
