import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Phone, 
  MessageCircle, 
  Activity, 
  Sparkles, 
  Calendar,
  Compass
} from 'lucide-react';
import { faqsData } from '../data/faqs';
import SEOHead from '../components/SEOHead';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState(null);

  const tabs = [
    { id: 'all', label: 'All Questions' },
    { id: 'laparoscopic', label: 'Laparoscopic Surgery' },
    { id: 'aesthetic', label: 'Aesthetics & Dermatology' },
    { id: 'general', label: 'Appointments & Hospital Care' },
  ];

  const filtered = faqsData.filter((faq) => {
    const matchesTab = activeTab === 'all' || faq.category === activeTab;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Frequently Asked Questions (FAQs) | Janki Skin & Laparoscopic Centre"
        description="Find clear medical answers regarding laparoscopic keyhole surgery, GFC hair therapy, chemical peeling, doctor timings, costs, and travel directions at Janki Centre Forbesganj."
        keywords="Laparoscopic surgery questions Forbesganj, GFC treatment FAQs Bihar, Chemical peel questions, Gallbladder surgery recovery time, Dr S Sagar appointment FAQs, Dr Rashmi Roy timings"
        schema={faqSchema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Frequently Asked Questions</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Clinical Guidance (अक्सर पूछे जाने वाले सवाल)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Got Questions? <span className="text-teal-accent">We Have Answers</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Everything you need to know about keyhole procedures, skin &amp; hair treatments, appointments, recovery timelines, and travel from surrounding towns.
          </p>

          {/* Search Box */}
          <div className="mt-6 relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by symptom, surgery, recovery, doctor..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition shadow-sm ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-primary/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3 mb-16">
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
              <p className="text-slate-500 text-sm">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="mt-3 text-xs font-bold text-teal-600 hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 font-heading font-bold text-xs sm:text-base text-slate-800 hover:text-primary flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm text-center max-w-2xl mx-auto space-y-4">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <Phone className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-extrabold text-primary font-heading">
            Still Have Questions or Need an Emergency Opinion?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Our medical staff is available to clarify surgical options, doctor schedules, or help review your ultrasound scan.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+917091506123"
              className="btn-rose px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 70915 06123</span>
            </a>
            <a
              href="https://wa.me/917091506123?text=Hello%20Janki%20Centre%2C%20I%20have%20a%20question%20regarding%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs sm:text-sm border border-emerald-200 transition inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
