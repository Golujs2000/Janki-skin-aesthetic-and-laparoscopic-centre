import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetail from './pages/TreatmentDetail';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import TributePage from './pages/TributePage';
import AdminPage from './pages/AdminPage';
import LocationsPage from './pages/LocationsPage';
import CityLandingPage from './pages/CityLandingPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';
import { recordPageView } from './utils/analytics';
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

  // Automatic Traffic & Inbound Acquisition Tracker
  useEffect(() => {
    recordPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

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

  const navigateToAppointment = () => {
    navigate('/book-appointment');
  };

  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctor(doctorName);
    navigate('/book-appointment');
  };

  const handleBookTreatment = (treatment) => {
    setSelectedTreatment(treatment);
    setSelectedDoctor(treatment.doctor);
    navigate('/book-appointment');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-body text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <ScrollToTop />

      {/* Top Header */}
      <Header onBookClick={navigateToAppointment} />

      {/* Routed Pages */}
      <div className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onBookClick={navigateToAppointment}
                onOpenLightbox={handleOpenLightbox}
                selectedDoctor={selectedDoctor}
                onSelectDoctor={handleSelectDoctor}
                selectedTreatment={selectedTreatment}
                onBookTreatment={handleBookTreatment}
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <AboutPage 
                onBookClick={navigateToAppointment} 
              />
            } 
          />
          <Route 
            path="/doctors" 
            element={
              <DoctorsPage 
                onSelectDoctor={handleSelectDoctor}
                onBookClick={navigateToAppointment}
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
          <Route 
            path="/gallery" 
            element={
              <GalleryPage 
                onOpenLightbox={handleOpenLightbox} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <ContactPage />
            } 
          />
          <Route 
            path="/book-appointment" 
            element={
              <AppointmentPage 
                initialDoctor={selectedDoctor}
                initialTreatment={selectedTreatment}
              />
            } 
          />
          <Route 
            path="/tribute" 
            element={<TributePage />} 
          />
          <Route 
            path="/in-memory-of-dr-vijay-kumar" 
            element={<TributePage />} 
          />
          <Route 
            path="/admin" 
            element={<AdminPage />} 
          />
          <Route 
            path="/dashboard" 
            element={<Navigate to="/admin" replace />} 
          />
          <Route 
            path="/locations-served" 
            element={<LocationsPage />} 
          />
          <Route 
            path="/location/:slug" 
            element={<CityLandingPage />} 
          />
          <Route 
            path="/reviews" 
            element={<ReviewsPage />} 
          />
          <Route 
            path="/faqs" 
            element={<FAQPage />} 
          />
          <Route 
            path="/privacy-policy" 
            element={<PrivacyPolicyPage />} 
          />
          <Route 
            path="/terms-conditions" 
            element={<TermsPage />} 
          />
          <Route 
            path="/terms" 
            element={<Navigate to="/terms-conditions" replace />} 
          />
          <Route 
            path="/sitemap" 
            element={<SitemapPage />} 
          />
          {/* Aliases & Fallbacks */}
          <Route path="/appointment" element={<Navigate to="/book-appointment" replace />} />
          <Route path="*" element={<NotFoundPage />} />
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

      <MobileBottomBar onBookClick={navigateToAppointment} />
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
