import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CalendarCheck, MapPin, Flame, Compass, Eye, Star, ShieldCheck } from 'lucide-react';
import { CABIN_INFO, getWhatsAppUrl } from '../data/cabinData';
import heroImg from '../assets/images/glamping_hero_sunset_1790035010790.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[94vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with warm dusk vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Glamping Paraíso en La Montaña en La Calera al atardecer con chimenea y malla catamarán"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Gradients for text contrast and sunset ambiance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#221711] via-[#221711]/50 to-[#221711]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#221711]/60 via-transparent to-[#221711]/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center text-white flex flex-col items-center">
        {/* Top Badges: Rating & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          {/* Official Rating Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-xs font-bold text-amber-300 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Puntuación: 9.0 • ¡Buenos servicios!</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-[#F8ECE3] shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F3B08C]" />
            <span>La Calera, Cundinamarca • 2.750 msnm</span>
          </div>
        </motion.div>

        {/* Main Title with target SEO keywords seamlessly integrated */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF7F2] max-w-4xl leading-[1.08]"
        >
          Glamping Paraíso en La Montaña
        </motion.h1>

        {/* Poetic & Authentic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 text-lg sm:text-xl md:text-2xl text-[#E8DCD1] max-w-2xl font-light leading-relaxed"
        >
          Cabaña de madera privada en La Calera con vista panorámica a la cordillera, chimenea de leña tradicional, 
          malla catamarán al vacío, restaurante campestre y paseos a caballo.
        </motion.p>

        {/* High-Conversion Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md"
        >
          <a
            href="#agendar"
            id="hero-btn-agendar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C2593F] hover:bg-[#A8452D] text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-200 active:scale-95"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Ver Disponibilidad & Agendar</span>
          </a>

          <a
            href={getWhatsAppUrl('¡Hola! Me gustaría cotizar y consultar disponibilidad para el Glamping Paraíso en La Montaña en La Calera.')}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-btn-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-base rounded-xl shadow-lg transition-all duration-200 active:scale-95 border border-[#25D366]/40"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>WhatsApp: 317 367 6149</span>
          </a>
        </motion.div>

        {/* Quick Micro-Trust badges */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-3 text-xs text-[#C5B5A5] flex items-center justify-center gap-2"
        >
          <ShieldCheck className="w-4 h-4 text-[#78D497]" />
          <span>Reserva directa con el propietario • Sin intermediarios ni comisiones</span>
        </motion.p>

        {/* Authentic Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 text-left w-full"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
            <div className="p-2 rounded-lg bg-[#C2593F]/30 text-[#F3B08C]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D5C6B7] font-medium">Chimenea</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Leña de Eucalipto</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
            <div className="p-2 rounded-lg bg-[#C2593F]/30 text-[#F3B08C]">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D5C6B7] font-medium">Atardeceres</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Malla Catamarán</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
            <div className="p-2 rounded-lg bg-[#82502B]/40 text-[#F3B08C]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D5C6B7] font-medium">Actividades</p>
              <p className="text-xs sm:text-sm font-semibold text-white">Paseo a Caballo</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
            <div className="p-2 rounded-lg bg-[#25D366]/30 text-[#96F3B2]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#D5C6B7] font-medium">Atención Inmediata</p>
              <p className="text-xs sm:text-sm font-semibold text-white">317 367 6149</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
