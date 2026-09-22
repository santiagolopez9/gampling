import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { CABIN_SPACES, getWhatsAppUrl } from '../data/cabinData';

export const CabinSpaces: React.FC = () => {
  const [activeSpaceId, setActiveSpaceId] = useState(CABIN_SPACES[0].id);

  const activeSpace = CABIN_SPACES.find((s) => s.id === activeSpaceId) || CABIN_SPACES[0];

  return (
    <section id="experiencia" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#241C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82502B]/10 text-[#82502B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2593F]" />
            <span>Arquitectura en Madera & Conexión</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#221711] leading-tight">
            Cada rincón pensado para contemplar y descansar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A493E] font-normal leading-relaxed">
            La cabaña fue diseñada para fundirse con la ladera de la montaña. Madera maciza, amplios ventanales
            que convierten el paisaje en un cuadro vivo y el calor reconfortante del fuego.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex overflow-x-auto pb-3 gap-2 sm:gap-3 border-b border-[#E6DDD3] mb-8 scrollbar-none">
          {CABIN_SPACES.map((space) => {
            const isSelected = space.id === activeSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpaceId(space.id)}
                className={`relative px-4 sm:px-5 py-3 rounded-t-lg font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-[#C2593F] font-semibold bg-[#F3ECE2]'
                    : 'text-[#6B584C] hover:text-[#241C16] hover:bg-[#F3ECE2]/60'
                }`}
                id={`tab-btn-${space.id}`}
              >
                {space.title}
                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C2593F]"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Space Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpace.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-[#F4EFEA] rounded-2xl p-6 sm:p-10 border border-[#E6DDD3] luxury-card-shadow"
          >
            {/* Image on left */}
            <div className="lg:col-span-7 overflow-hidden rounded-xl relative group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={activeSpace.image}
                alt={activeSpace.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2.5 py-1 rounded bg-[#C2593F] text-xs font-semibold tracking-wide uppercase mb-1">
                  Destacado
                </span>
                <p className="text-sm sm:text-base font-medium drop-shadow-md">
                  {activeSpace.highlight}
                </p>
              </div>
            </div>

            {/* Info on right */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#82502B] font-semibold">
                  {activeSpace.subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221711] mt-1.5">
                  {activeSpace.title}
                </h3>
                <p className="mt-4 text-[#5A493E] text-sm sm:text-base leading-relaxed">
                  {activeSpace.description}
                </p>

                {/* Specs List */}
                <div className="mt-6 space-y-2.5">
                  {activeSpace.specs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-[#3E3129]">
                      <CheckCircle2 className="w-4 h-4 text-[#82502B] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons inside space */}
              <div className="pt-4 border-t border-[#E0D5C7] flex flex-wrap gap-3">
                <a
                  href="#agendar"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C2593F] hover:bg-[#A8452D] text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
                >
                  <span>Reservar Este Espacio</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppUrl(`¡Hola! Quisiera saber más detalles sobre ${activeSpace.title} en Glamping Paraíso en La Montaña.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF7F2] text-[#1E7E34] border border-[#25D366]/40 text-sm font-semibold rounded-lg shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Preguntar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
