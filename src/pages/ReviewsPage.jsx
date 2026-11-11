import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Calendar, 
  ArrowRight, 
  Award, 
  Sparkles, 
  Activity,
  Heart
} from 'lucide-react';
import { reviewsData } from '../data/reviews';
import SEOHead from '../components/SEOHead';

export default function ReviewsPage() {
  const [filter, setFilter] = useState('all');

  const filtered = reviewsData.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'laparoscopic') return r.theme === 'teal' || r.doctor.includes('Sagar');
    if (filter === 'dermatology') return r.theme === 'rose' || r.doctor.includes('Rashmi');
    return true;
  });

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Janki Skin Aesthetic & Laparoscopic Centre - Patient Reviews",
    "url": "https://jankiskinandlaparoscopiccentre.com/reviews",
    "telephone": "+917091506123",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "485",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviewsData.map((rev) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.name
      },
      "datePublished": "2026-02-15",
      "reviewBody": rev.comment,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5"
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Patient Reviews & Testimonials | Janki Skin & Laparoscopic Centre Forbesganj"
        description="Read authentic patient reviews and surgical success stories for Dr. S. Sagar and Dr. Rashmi Roy at Janki Skin Aesthetic & Laparoscopic Centre in Forbesganj (Bihar). 4.9/5 patient satisfaction."
        keywords="Janki clinic reviews, Dr S Sagar patient reviews, Dr Rashmi Roy reviews, Gallbladder surgery review Forbesganj, GFC hair treatment review Araria, Best doctor in Forbesganj"
        schema={reviewsSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Patient Reviews</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-teal-accent text-teal-accent" />
            <span>4.9 / 5.0 Rated Patient Care (मरीजों की राय)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Voices of Healing &amp; <span className="text-teal-accent">Clinical Trust</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Discover real patient experiences across Forbesganj, Araria, Supaul, and Nepal who trusted Janki Centre for scarless laparoscopic operations and transformative dermatological care.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-extrabold text-primary font-heading">4.9</div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-slate-500">• 485+ Verified Patient Outcomes</div>
            <div className="text-teal-600 font-semibold">• 28+ Years Healthcare Legacy</div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'laparoscopic', label: 'Laparoscopic Surgery (Dr. S. Sagar)' },
            { id: 'dermatology', label: 'Skin & Aesthetics (Dr. Rashmi Roy)' },
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((r) => {
            const isRose = r.theme === 'rose';
            return (
              <div
                key={r.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isRose ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-teal-50 text-teal-700 border border-teal-200'
                    }`}>
                      {r.treatment}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{r.date}</span>
                  </div>

                  <div className="flex text-amber-400 mb-3">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                    "{r.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{r.name}</div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{r.location}</span>
                  </div>
                  <div className={`text-[11px] font-semibold mt-1.5 ${isRose ? 'text-rose-600' : 'text-teal-600'}`}>
                    Consulted: {r.doctor}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Review Submission & CTA Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-primary font-heading">
            Had a Care Experience at Janki Centre?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Your honest feedback helps fellow patients from Forbesganj, Araria, Supaul, and Nepal find compassionate, modern healthcare close to home.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://maps.app.goo.gl/9uG534eQ7EhyXfub6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rose px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-1.5"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>Write a Review on Google Maps</span>
            </a>
            <Link
              to="/book-appointment"
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-primary font-bold text-xs sm:text-sm border border-slate-200 transition"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
