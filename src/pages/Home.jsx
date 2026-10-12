import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Doctors from '../components/Doctors';
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
      <Hero onBookClick={onBookClick} />
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
