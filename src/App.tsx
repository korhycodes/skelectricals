import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBanner } from './components/StatsBanner';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CostEstimator } from './components/CostEstimator';
import { SafetyAuditTool } from './components/SafetyAuditTool';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutFounder } from './components/AboutFounder';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

import { ServiceItem } from './types';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>(undefined);
  const [bookingInitialNotes, setBookingInitialNotes] = useState<string | undefined>(undefined);
  
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleOpenBooking = (service?: string, notes?: string) => {
    setBookingInitialService(service);
    setBookingInitialNotes(notes);
    setBookingModalOpen(true);
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithEstimate = (estimateData: {
    serviceName: string;
    propertyType: string;
    estimatedRange: string;
    summary: string;
  }) => {
    handleOpenBooking(estimateData.serviceName, `Estimate details: ${estimateData.summary}`);
  };

  const handleScheduleInspection = (reportSummary: string) => {
    handleOpenBooking('Full Comprehensive Electrical Safety Audit', reportSummary);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-20 right-4 z-50 max-w-md bg-slate-950 text-white p-4 rounded-2xl shadow-2xl border border-blue-500/30 flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-200 flex-1 leading-snug">
              {toastMessage}
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header / Navigation */}
      <Navbar
        onOpenBooking={(svc) => handleOpenBooking(svc)}
        onOpenEstimator={handleOpenEstimator}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Brand, "Solve Electrical Issues Fast" & Founder Office image */}
        <HeroSection
          onOpenBooking={(svc) => handleOpenBooking(svc)}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* 2. Key Stats & Trust Metrics Banner */}
        <StatsBanner />

        {/* 3. Core Services Grid (CCTV, Upgrade, Repairs, Wiring, Fence, Gate) */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onBookService={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* 4. Instant Online Cost Estimator & Quote Engine */}
        <CostEstimator onBookWithEstimate={handleBookWithEstimate} />

        {/* 5. Interactive Electrical & Security Safety Audit Diagnostic Tool */}
        <SafetyAuditTool onScheduleInspection={handleScheduleInspection} />

        {/* 6. Projects & Case Studies Portfolio */}
        <ProjectsShowcase
          onBookProjectScope={(projectTitle) => handleOpenBooking(projectTitle, `Reference Project: ${projectTitle}`)}
        />

        {/* 7. Why Choose Us / Trust Pillars */}
        <WhyChooseUs />

        {/* 8. About Founder, Company & Safety Philosophy */}
        <AboutFounder onOpenBooking={() => handleOpenBooking('Site Consultation')} />

        {/* 9. Verified Testimonials & Client Ratings */}
        <TestimonialsSection />

        {/* 10. Emergency Hotline & Live Response Area Radar */}
        <EmergencyBanner onOpenBooking={() => handleOpenBooking('Emergency Dispatch')} />

        {/* 11. Contact Inquiry Form, Location & FAQ */}
        <ContactSection onSuccessSubmit={(msg) => showToast(msg)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={(svc) => handleOpenBooking(svc)}
        onOpenEstimator={handleOpenEstimator}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBook={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />

      {/* Universal Service Booking & Dispatch Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={bookingInitialService}
        initialNotes={bookingInitialNotes}
      />
    </div>
  );
}
