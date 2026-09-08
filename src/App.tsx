import React, { useState } from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { ServicesArches } from './components/sections/ServicesArches';
import { StudioSanctuary } from './components/sections/StudioSanctuary';
import { BrandStatement } from './components/sections/BrandStatement';
import { ServicesList } from './components/sections/ServicesList';
import { TransformationSlider } from './components/sections/TransformationSlider';
import { Experience } from './components/sections/Experience';
import { Statistics } from './components/sections/Statistics';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { AtelierCurations } from './components/sections/AtelierCurations';
import { InstagramStrip } from './components/sections/InstagramStrip';
import { BookingSection } from './components/sections/BookingSection';
import { ContactSection } from './components/sections/ContactSection';
import { BookingModal } from './components/modals/BookingModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { LegalModal } from './components/modals/LegalModal';
import type { GalleryItem } from './types';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceFromList = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <CursorProvider>
      <div className="relative min-h-screen bg-ivory text-rich-black selection:bg-champagne/30 selection:text-rich-black font-sans">
        {/* Custom Desktop-only Cursor */}
        <CustomCursor />

        {/* Sticky Luxury Header */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Main Content Sections */}
        <main>
          {/* 01 Hero Section */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* 02 Continuous Moving Marquee */}
          <Marquee />

          {/* 03 Brand Statement & Philosophy (About Section) */}
          <BrandStatement />

          {/* 04 Reference Design: 4 Arched Curated Disciplines */}
          <ServicesArches onSelectService={handleSelectServiceFromList} />

          {/* 05 Reference Design: Architectural Studio Sanctuary (Grand Arch, 2 Luxury Cards & WhatsApp Booking) */}
          <StudioSanctuary onOpenBooking={() => handleOpenBooking()} />

          {/* 06 Complete Treatment Tariff: YOUR LOOK. YOUR RULES. (Rock-Solid Split Layout) */}
          <ServicesList onSelectService={handleSelectServiceFromList} />

          {/* 07 Centerpiece Before / After Transformation Slider */}
          <TransformationSlider onOpenBooking={() => handleOpenBooking('Haircut & Styling')} />

          {/* 08 The BLUSH BLOOM Experience (3 Stages: Discover, Transform, Confident) */}
          <Experience />

          {/* 14 Minimal Statistics */}
          <Statistics />

          {/* 15 Editorial Masonry Gallery & Lightbox */}
          <Gallery onOpenLightbox={(item) => setActiveLightboxItem(item)} />

          {/* 16 Large Single-Quote Testimonials Slider */}
          <Testimonials />

          {/* 17 Exclusive Atelier Curations: Signature Packages & VIP Suites */}
          <AtelierCurations onSelectPackage={handleSelectServiceFromList} />

          {/* 18 Major Conversion Booking Section + 19 WhatsApp Integration */}
          <BookingSection preselectedService={selectedService} />

          {/* 20 Contact Information & Atelier Location */}
          <ContactSection />

          {/* 21 Instagram Editorial Visual Strip - Right above Footer */}
          <InstagramStrip />
        </main>

        {/* 21 Sophisticated Black Footer */}
        <Footer
          onOpenBooking={() => handleOpenBooking()}
          onOpenLegal={(type) => setLegalModalType(type)}
        />

        {/* Quick Launch Booking Modal */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          preselectedService={selectedService}
        />

        {/* Full-screen Lightbox Modal */}
        <LightboxModal
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
        />

        {/* Legal Privacy / Terms Modal */}
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </div>
    </CursorProvider>
  );
};

export default App;
