import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Appointment from './components/Appointment';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import MobileBottomBar from './components/MobileBottomBar';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleOpenLightbox = (src, alt, caption) => {
    setLightbox({
      isOpen: true,
      src,
      alt,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToAppointment = () => {
    const el = document.getElementById('book-appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctor(doctorName);
    scrollToAppointment();
  };

  const handleBookTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setSelectedDoctor(treatment.doctor);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Top Header */}
      <Header onBookClick={scrollToAppointment} />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero onBookClick={scrollToAppointment} />
        <About />
        <Doctors onSelectDoctor={handleSelectDoctor} />
        <Services 
          onOpenLightbox={handleOpenLightbox} 
          onBookTreatment={handleBookTreatment} 
        />
        <Comparison />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <Reviews />
        <Appointment 
          initialDoctor={selectedDoctor} 
          initialTreatment={selectedTreatment} 
        />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Overlay Widgets */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        src={lightbox.src}
        alt={lightbox.alt}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />

      <MobileBottomBar onBookClick={scrollToAppointment} />
      <FloatingWidgets />
    </div>
  );
}
