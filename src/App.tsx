/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CabinSpaces } from './components/CabinSpaces';
import { PhotoGallery } from './components/PhotoGallery';
import { AmenitiesList } from './components/AmenitiesList';
import { BookingEngine } from './components/BookingEngine';
import { WhatsAppContactSection } from './components/WhatsAppContactSection';
import { LocationAndFaq } from './components/LocationAndFaq';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyBookingBar } from './components/StickyBookingBar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241C16] flex flex-col selection:bg-[#C2593F] selection:text-white pb-14 sm:pb-12">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Atmospheric Mountain Hero */}
        <Hero />

        {/* The Spaces: Balcony, Catamaran Net, Wooden Bedroom, Wood Stove & Horseback riding */}
        <CabinSpaces />

        {/* Visual Photo Gallery with Lightbox */}
        <PhotoGallery />

        {/* Full Services, Rating 9.0 & Mountain Comfort */}
        <AmenitiesList />

        {/* Interactive Booking Engine & Rate Calculator */}
        <BookingEngine />

        {/* Dedicated WhatsApp Section (3173676149) */}
        <WhatsAppContactSection />

        {/* Location, Driving Route from Bogotá & FAQs */}
        <LocationAndFaq />
      </main>

      {/* Floating Quick WhatsApp pill */}
      <FloatingWhatsApp />

      {/* Sticky Conversion Booking Bar */}
      <StickyBookingBar />

      {/* Grounded Footer */}
      <Footer />
    </div>
  );
}

