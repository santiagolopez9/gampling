import React, { useState, useEffect } from 'react';
import { MessageCircle, CalendarCheck, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { CABIN_INFO, getWhatsAppUrl } from '../data/cabinData';

export const StickyBookingBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de reserva rápida"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#221711]/95 text-white backdrop-blur-md border-t border-white/15 px-4 py-2.5 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF7F2]/10 border border-white/10 text-amber-400 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>9.0 / 10</span>
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-tight">
              Glamping Paraíso en La Montaña
            </p>
            <p className="text-[11px] text-[#D5C6B7] leading-tight">
              La Calera • Atardeceres, chimenea & paseos a caballo
            </p>
          </div>
        </div>

        {/* Center Price Tag */}
        <div className="flex items-baseline gap-1 text-left sm:text-right">
          <span className="text-[11px] text-[#D5C6B7] hidden md:inline">Desde</span>
          <span className="font-serif text-lg sm:text-xl font-bold text-white">
            $280.000 <span className="text-xs font-sans font-normal text-[#F3B08C]">COP/noche</span>
          </span>
        </div>

        {/* Right CTA buttons */}
        <div className="flex items-center gap-2">
          <a
            href="#agendar"
            id="sticky-btn-agendar"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 bg-[#C2593F] hover:bg-[#A8452D] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all whitespace-nowrap active:scale-95"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Ver Disponibilidad</span>
          </a>

          <a
            href={getWhatsAppUrl('¡Hola! Me comunico desde la barra de reservas para consultar disponibilidad y precios.')}
            target="_blank"
            rel="noopener noreferrer"
            id="sticky-btn-whatsapp"
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">WhatsApp: 317 367 6149</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
