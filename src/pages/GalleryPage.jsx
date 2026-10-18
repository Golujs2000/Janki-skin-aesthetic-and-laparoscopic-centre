import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Sparkles, 
  ZoomIn, 
  Image as ImageIcon, 
  Layers, 
  Phone, 
  Calendar,
  ArrowRight
} from 'lucide-react';
import Gallery from '../components/Gallery';
import SEOHead from '../components/SEOHead';

export default function GalleryPage({ onOpenLightbox }) {
  const clinicPosters = [
    {
      title: 'Laparoscopic Cholecystectomy Poster',
      desc: 'Official clinic poster for gallbladder stone removal & benefits',
      src: '/assets/poster-laparoscopy-cholecystectomy.jpg'
    },
    {
      title: 'Laparoscopic Appendectomy Poster',
      desc: 'Emergency & elective keyhole appendicitis procedure visual',
      src: '/assets/poster-laparoscopic-appendectomy.jpg'
    },
    {
      title: 'Laparoscopic Ovarian Cystectomy Poster',
      desc: 'Fertility-preserving ovarian cyst surgery guide',
      src: '/assets/poster-laparoscopy-cystectomy.jpg'
    },
    {
      title: 'Tubal Ligation Family Planning Poster',
      desc: 'Day-care keyhole female contraceptive procedure poster',
      src: '/assets/poster-tubal-ligation.jpg'
    },
    {
      title: 'GFC Hair & Skin Treatment Poster',
      desc: 'Growth Factor Concentrate clinical biological therapy',
      src: '/assets/poster-gfc-treatment.jpg'
    },
    {
      title: 'Chemical Peeling Glow Poster',
      desc: 'Clinical benefits of medical peeling for melasma & pigmentation',
      src: '/assets/poster-chemical-peel-benefits.jpg'
    },
    {
      title: 'Glutathione IV Glow Therapy Poster',
      desc: 'Master antioxidant full-body skin brightening protocol',
      src: '/assets/poster-glutathione-therapy.jpg'
    },
    {
      title: 'Skin, Hair & Nail Disorders Poster',
      desc: 'Comprehensive clinical dermatology OPD diagnostic visual',
      src: '/assets/poster-skin-hair-nail.jpg'
    },
    {
      title: 'Aesthetic Dermatology Spectrum Poster',
      desc: 'Full range of facial aesthetics, lasers, and scar treatments',
      src: '/assets/poster-aesthetic-treatments.jpg'
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <SEOHead
        title="Clinic Gallery | JANKI Skin Aesthetic & Laparoscopic Centre Forbesganj"
        description="View authentic photos of our sanitized consultation chambers, patient waiting lounge, and executive chambers at JANKI Skin Aesthetic & Laparoscopic Centre Forbesganj."
        keywords="Janki clinic photos Forbesganj, Laparoscopy hospital gallery Bihar, Skin clinic Forbesganj interior, OT facility Forbesganj"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-semibold">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li>/</li>
            <li className="text-primary font-bold">Clinic Gallery</li>
          </ol>
        </nav>

        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-accent text-xs font-bold tracking-wide uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>Facility Tour &amp; Visual Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary font-heading tracking-tight mt-3">
            Inside JANKI Skin Aesthetic &amp; Laparoscopic Centre
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Take an authentic visual walkthrough of our reception hall, spacious patient waiting lounge, specialist consultation chambers, and sanitized clinical suites.
          </p>
        </div>

        {/* Core Gallery Component */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-14">
          <Gallery onOpenLightbox={onOpenLightbox} />
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicPosters.map((poster, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(poster.src, poster.title, `${poster.title} • High Definition Guide`)}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] w-full bg-slate-900 overflow-hidden">
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="p-2 rounded-full bg-white/90 text-primary shadow-md inline-flex items-center justify-center">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading font-bold text-base leading-snug drop-shadow-sm">
                      {poster.title}
                    </h3>
                    <p className="text-xs text-slate-200/90 mt-1 line-clamp-2">
                      {poster.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center flex flex-col items-center justify-center space-y-4">
          <h3 className="font-heading font-extrabold text-2xl">
            Experience Our Sanitized &amp; Advanced Healthcare Facility
          </h3>
          <p className="text-slate-100 text-xs sm:text-sm max-w-xl">
            Book your consultation with Dr. S. Sagar or Dr. Rashmi Ray today.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link
              to="/book-appointment"
              className="px-6 py-3 rounded-full bg-white text-teal-800 font-bold text-xs sm:text-sm hover:bg-slate-100 transition shadow-md"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+917909067784"
              className="px-6 py-3 rounded-full bg-teal-800/80 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
            >
              Call +91 79090 67784
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
