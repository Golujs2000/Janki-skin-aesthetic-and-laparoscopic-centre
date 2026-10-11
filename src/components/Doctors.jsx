import React from 'react';
import { doctorsData } from '../data/doctors';
import { Award, Clock, Phone, Calendar, CheckCircle2, Stethoscope, Sparkles } from 'lucide-react';

export default function Doctors({ onSelectDoctor }) {
  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Senior Medical Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Meet Our <span className="text-teal-accent">Distinguished Specialists</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Academic professors and practicing consultants bringing tertiary-level surgical excellence and advanced dermatology directly to Forbesganj.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {doctorsData.map((doc) => {
            const isTeal = doc.theme === 'teal';

            return (
              <div
                key={doc.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Card Top Banner & Avatar */}
                  <div className={`p-6 sm:p-8 ${isTeal ? 'bg-gradient-to-br from-slate-900 to-primary text-white' : 'bg-gradient-to-br from-slate-900 to-[#1f0b1a] text-white'}`}>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <img
                          src={doc.photo}
                          alt={`${doc.name} - ${doc.role}`}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border-2 border-white/20 shadow-lg bg-slate-800"
                          loading="lazy"
                        />
                        <span className={`absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-md ${isTeal ? 'bg-teal-accent' : 'bg-rose-accent'}`}>
                          {isTeal ? 'Surgical Head' : 'Skin & Hair Head'}
                        </span>
                      </div>

                      <div className="text-center sm:text-left space-y-1.5 flex-1">
                        <div className="text-xs font-semibold text-slate-300">{doc.nameHindi}</div>
                        <h3 className="text-2xl font-bold font-heading text-white">{doc.name}</h3>
                        <div className="text-xs sm:text-sm font-semibold text-amber-300">{doc.degree}</div>
                        <p className="text-xs text-slate-300 leading-snug">{doc.role}</p>
                        <div className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-white/10 text-[11px] text-slate-200">
                          {doc.experience}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Credentials Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Credentials & Training</h4>
                      <ul className="space-y-1.5">
                        {doc.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isTeal ? 'text-teal-accent' : 'text-rose-accent'}`} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Core Specialties Pills */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Clinical Specialities</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.specialties.map((s, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2.5 py-1 rounded-lg font-medium ${isTeal ? 'bg-teal-50 text-teal-800 border border-teal-100' : 'bg-rose-50 text-rose-800 border border-rose-100'}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Schedule Box */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <Clock className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-slate-600">
                        <span className="font-bold text-slate-800 block">Consultation Schedule:</span>
                        <span>{doc.timing}</span>
                        <span className="block text-[11px] text-slate-500 mt-0.5">{doc.emergency}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onSelectDoctor(doc.name)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white shadow-md transition transform hover:-translate-y-0.5 ${isTeal ? 'bg-teal-accent hover:bg-teal-600 shadow-teal-500/20' : 'bg-rose-accent hover:bg-rose-600 shadow-rose-500/20'}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {doc.name.split(' ')[1]}</span>
                  </button>

                  <a
                    href={`tel:${doc.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
                  >
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span>Call Direct</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
