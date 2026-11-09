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
        description="Premier centre for laparoscopic surgery & aesthetic dermatology by Dr. S. Sagar (MS) & Dr. Rashmi Roy (MD). Serving Forbesganj, Jogbani, Biratnagar, Itahari, Narpatganj, Raniganj, Simrahi, Birpur & Seemanchal. Call +91 70915 06123."
        keywords="Laparoscopic surgery Forbesganj, Skin hair specialist Forbesganj, Dermatologist Forbesganj, Gallbladder surgery Narpatganj, Appendix operation Jogbani, Hernia surgery Biratnagar Nepal, GFC hair therapy Itahari, Laparoscopy Raniganj, Skin doctor Bhargama, Surgeon Kursakata, Birpur border hospital, Balua clinic, Lalitgram medical, Simrahi laparoscopic surgery, Dr S Sagar, Dr Rashmi Roy"
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
