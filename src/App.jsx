import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetail from './pages/TreatmentDetail';
import LightboxModal from './components/LightboxModal';
import MobileBottomBar from './components/MobileBottomBar';
import FloatingWidgets from './components/FloatingWidgets';

function AppContent() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    src: '',
    alt: '',
    caption: '',
  });

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

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
    if (location.pathname !== '/') {
      navigate('/#book-appointment');
    } else {
      const el = document.getElementById('book-appointment');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
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
      <ScrollToTop />

      {/* Top Header */}
      <Header onBookClick={scrollToAppointment} />

      {/* Routed Pages */}
      <div className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onBookClick={scrollToAppointment}
                onOpenLightbox={handleOpenLightbox}
                selectedDoctor={selectedDoctor}
                onSelectDoctor={handleSelectDoctor}
                selectedTreatment={selectedTreatment}
                onBookTreatment={handleBookTreatment}
              />
            } 
          />
          <Route 
            path="/treatments" 
            element={
              <TreatmentsPage 
                onOpenLightbox={handleOpenLightbox} 
                onBookTreatment={handleBookTreatment} 
              />
            } 
          />
          <Route 
            path="/treatment/:id" 
            element={
              <TreatmentDetail 
                onOpenLightbox={handleOpenLightbox} 
              />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

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

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
