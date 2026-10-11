import React from 'react';
import { reviewsData } from '../data/reviews';
import { Star, ShieldCheck, MessageSquare, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Real Stories, Real <span className="text-teal-accent">Recoveries</span>
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Hear directly from patients across Forbesganj, Araria, Purnea, and Jogbani who received treatments at our centre.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review) => {
            const isTeal = review.theme === 'teal';

            return (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-200" />
                  </div>

                  {/* Treatment Badge */}
                  <div className="mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                      isTeal ? 'bg-teal-50 text-teal-800' : 'bg-rose-50 text-rose-800'
                    }`}>
                      {review.treatment}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">{review.name}</h4>
                    <span className="text-[11px] text-slate-400 block">{review.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-teal-600 text-[11px] font-semibold bg-teal-50 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
