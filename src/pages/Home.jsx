import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Doctors from '../components/Doctors';
import Tribute from '../components/Tribute';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Appointment from '../components/Appointment';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home({
  onBookClick,
  onOpenLightbox,
  selectedDoctor,
  onSelectDoctor,
  selectedTreatment,
  onBookTreatment,
}) {
  return (
    <main className="flex-1">
      <SEOHead
        title="Janki Skin Aesthetic & Laparoscopic Centre Forbesganj | Dr. S. Sagar & Dr. Rashmi Roy"
        description="Forbesganj’s premier healthcare centre for minimally invasive laparoscopic gallbladder, appendix & hernia surgery by Dr. S. Sagar (MS, FIAGES) & advanced aesthetic dermatology, skin, hair and nail treatments by Dr. Rashmi Roy (MBBS, MD). Call +91 79090 67784."
        keywords="Laparoscopic surgery Forbesganj, Skin hair and nail specialist Forbesganj, Best dermatologist Forbesganj, Gallbladder stone surgery Bihar, Appendix operation Forbesganj, GFC hair regrowth Araria, Chemical peeling Forbesganj, Dr S Sagar, Dr Rashmi Roy"
      />
      <Hero onBookClick={onBookClick} />
      <Tribute />
      <About />
      <Doctors onSelectDoctor={onSelectDoctor} />
      <Services 
        onOpenLightbox={onOpenLightbox} 
        onBookTreatment={onBookTreatment} 
      />
      <Comparison />
      <Gallery onOpenLightbox={onOpenLightbox} />
      <Reviews />
      <Appointment 
        initialDoctor={selectedDoctor} 
        initialTreatment={selectedTreatment} 
      />
      <FAQ />
      <Contact />
    </main>
  );
}
