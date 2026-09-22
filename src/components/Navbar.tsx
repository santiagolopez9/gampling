import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Compass, CalendarCheck } from 'lucide-react';
import { CABIN_INFO, getWhatsAppUrl } from '../data/cabinData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E6DED4] py-3'
          : 'bg-gradient-to-b from-[#221711]/80 via-[#221711]/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex flex-col items-start focus:outline-none"
          id="brand-logo-link"
        >
          <div className="flex items-center space-x-2">
            <Compass className={`w-5 h-5 transition-transform group-hover:rotate-45 ${isScrolled ? 'text-[#C2593F]' : 'text-[#F3B08C]'}`} />
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-[#241C16]' : 'text-white'
              }`}
            >
              Paraíso en La Montaña
            </span>
          </div>
          <div className="flex items-center gap-2 ml-7 mt-0.5">
            <span
              className={`text-xs tracking-widest uppercase font-medium ${
                isScrolled ? 'text-[#82502B]' : 'text-[#FAF7F2]/80'
              }`}
            >
              Glamping • La Calera
            </span>
            <span className="opacity-40 text-xs">•</span>
            <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded ${
              isScrolled ? 'bg-amber-100 text-amber-800' : 'bg-white/20 text-amber-300'
            }`}>
              ★ 9.0
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#experiencia"
            className={`transition-colors hover:text-[#C2593F] ${
              isScrolled ? 'text-[#4A3B32]' : 'text-[#FAF7F2]/90'
            }`}
            id="nav-link-experiencia"
          >
            La Cabaña
          </a>
          <a
            href="#galeria"
            className={`transition-colors hover:text-[#C2593F] ${
              isScrolled ? 'text-[#4A3B32]' : 'text-[#FAF7F2]/90'
            }`}
            id="nav-link-galeria"
          >
            Galería
          </a>
          <a
            href="#comodidades"
            className={`transition-colors hover:text-[#C2593F] ${
              isScrolled ? 'text-[#4A3B32]' : 'text-[#FAF7F2]/90'
            }`}
            id="nav-link-comodidades"
          >
            Comodidades
          </a>
          <a
            href="#agendar"
            className={`transition-colors hover:text-[#C2593F] ${
              isScrolled ? 'text-[#4A3B32]' : 'text-[#FAF7F2]/90'
            }`}
            id="nav-link-agendar"
          >
            Tarifas & Agendar
          </a>
          <a
            href="#contacto"
            className={`transition-colors hover:text-[#C2593F] ${
              isScrolled ? 'text-[#4A3B32]' : 'text-[#FAF7F2]/90'
            }`}
            id="nav-link-contacto"
          >
            Contacto
          </a>
        </nav>

        {/* Right CTA Area: WhatsApp & Booking */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={getWhatsAppUrl('¡Hola! Me gustaría información sobre disponibilidad y fechas en Glamping Paraíso en La Montaña.')}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-direct"
            className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
              isScrolled
                ? 'bg-[#25D366]/10 text-[#1E7E34] hover:bg-[#25D366]/20 border border-[#25D366]/30'
                : 'bg-white/15 backdrop-blur-md text-white hover:bg-white/25 border border-white/20'
            }`}
            title="Escribir por WhatsApp al 3173676149"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>317 367 6149</span>
          </a>

          <a
            href="#agendar"
            id="nav-cta-agendar"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#C2593F] hover:bg-[#A8452D] active:scale-95 rounded-lg shadow-sm transition-all duration-200"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Agendar Estadía</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#25D366] hover:bg-black/10 transition-colors"
            id="mobile-quick-wa"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#241C16] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
            id="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FAF7F2] border-b border-[#E6DED4] px-6 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200 text-[#241C16]"
        >
          <div className="flex flex-col space-y-3 font-medium text-base">
            <a
              href="#experiencia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE2D7] text-[#4A3B32] hover:text-[#C2593F]"
            >
              La Cabaña & Espacios
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE2D7] text-[#4A3B32] hover:text-[#C2593F]"
            >
              Galería de Fotos
            </a>
            <a
              href="#comodidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE2D7] text-[#4A3B32] hover:text-[#C2593F]"
            >
              Comodidades
            </a>
            <a
              href="#agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#EAE2D7] text-[#4A3B32] hover:text-[#C2593F]"
            >
              Tarifas & Agendar
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#4A3B32] hover:text-[#C2593F]"
            >
              Contacto & WhatsApp
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg shadow-sm"
              id="mobile-drawer-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: 317 367 6149</span>
            </a>
            <a
              href="#agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#C2593F] text-white font-semibold rounded-lg shadow-sm"
              id="mobile-drawer-booking-btn"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Calcular & Agendar Fecha</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
