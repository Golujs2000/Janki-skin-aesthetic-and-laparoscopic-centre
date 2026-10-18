import React from 'react';
import { doctorsData } from '../data/doctors';
import { Clock, Phone, Calendar, CheckCircle2, Stethoscope, Award, Sparkles } from 'lucide-react';

export default function Doctors({ onSelectDoctor }) {
  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-accent text-xs font-bold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Our Distinguished Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Meet Our Renowned <span className="gradient-text-aesthetic">Specialist Doctors</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            University professors and fellowship-trained medical experts committed to world-class diagnostics, clinical aesthetics, and gentle surgical recovery.
          </p>
        </div>

        {/* Doctor Cards Grid with Big Prominent Portraits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {doctorsData.map((doc) => {
            const isRose = doc.theme === 'rose';

            return (
              <div
                key={doc.id}
                className={`group bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${isRose ? 'border-t-4 border-t-rose-accent' : 'border-t-4 border-t-teal-accent'
                  }`}
              >
                <div>
                  {/* Big Picture Showcase Container */}
                  <div className={`p-8 sm:p-10 flex flex-col items-center justify-center border-b border-slate-100 ${isRose
                    ? 'bg-gradient-to-b from-rose-50/70 via-slate-50/60 to-white'
                    : 'bg-gradient-to-b from-teal-50/70 via-slate-50/60 to-white'
                    }`}>
                    {/* Big Framed Portrait */}
                    <div className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_20px_40px_-10px_rgba(11,37,69,0.18)] ring-4 ring-white">
                      <img
                        src={doc.photo}
                        alt={`${doc.name} - ${doc.specialityBadge}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Prominent Speciality Badge Pill directly under the Big Portrait */}
                    <div className="mt-5">
                      <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-sm ${isRose ? 'bg-rose-accent' : 'bg-teal-accent'
                        }`}>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{doc.specialityBadge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Doctor Details Body */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Header: Name, Hindi Title, Degrees */}
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary leading-tight flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                        <span>{doc.name}</span>
                        <span className="text-base sm:text-lg font-bold text-slate-500 font-body">
                          {doc.nameHindi}
                        </span>
                      </h3>
                      <div className={`text-sm font-bold mt-1.5 ${isRose ? 'text-rose-600' : 'text-teal-600'}`}>
                        {doc.degree}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                        {doc.role}
                      </div>
                    </div>

                    {/* Clinical Specialties Bullet Items */}
                    <div className="space-y-3 pt-1">
                      {doc.specialties.map((spec, i) => {
                        const colonIdx = spec.indexOf(':');
                        const label = colonIdx !== -1 ? spec.slice(0, colonIdx + 1) : '';
                        const desc = colonIdx !== -1 ? spec.slice(colonIdx + 1) : spec;

                        return (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isRose ? 'text-rose-accent' : 'text-teal-accent'
                              }`} />
                            <div>
                              {label && <strong className="text-slate-900">{label}</strong>}
                              <span>{desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Consultation Schedule Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1.5">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span>Consultation &amp; Surgical Schedule</span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {doc.timing}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {doc.emergency}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onSelectDoctor(doc.name)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-bold text-sm text-white shadow-md transition transform hover:-translate-y-0.5 cursor-pointer ${isRose
                      ? 'btn-rose'
                      : 'bg-teal-accent hover:bg-teal-600 shadow-teal-500/20'
                      }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {doc.name}</span>
                  </button>

                  <a
                    href={`tel:${doc.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white transition"
                  >
                    <Phone className="w-4 h-4" />
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
