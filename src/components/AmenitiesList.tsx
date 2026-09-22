import React, { useState } from 'react';
import { 
  Flame, Maximize2, Droplets, BedDouble, Sparkles, Car, Coffee, Wifi, 
  Compass, Heart, Utensils, ShieldCheck, Check, Star, ArrowRight, MessageCircle 
} from 'lucide-react';
import { CABIN_INFO, DETAILED_AMENITIES_SECTIONS, getWhatsAppUrl } from '../data/cabinData';

export const AmenitiesList: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Servicios Más Populares': <Star className="w-4 h-4 text-amber-500 fill-amber-500" />,
    'Baño Privado & Confort': <Droplets className="w-4 h-4 text-blue-500" />,
    'Vistas & Paisaje': <Maximize2 className="w-4 h-4 text-[#82502B]" />,
    'Exteriores & Terraza': <Maximize2 className="w-4 h-4 text-emerald-600" />,
    'Cocina & Zona de Comedor': <Coffee className="w-4 h-4 text-[#82502B]" />,
    'Zona de Estar & Calor': <Flame className="w-4 h-4 text-[#C2593F]" />,
    'Actividades & Caballos': <Compass className="w-4 h-4 text-[#82502B]" />,
    'Comida, Bebida & Restaurante': <Utensils className="w-4 h-4 text-amber-700" />,
    'Mascotas & Políticas': <Heart className="w-4 h-4 text-rose-500" />,
    'Seguridad & Servicios Generales': <ShieldCheck className="w-4 h-4 text-emerald-700" />
  };

  const topPopularServices = [
    { title: 'Parking gratis', subtitle: 'Privado y seguro en el predio', icon: <Car className="w-5 h-5 text-[#82502B]" /> },
    { title: 'WiFi gratis', subtitle: 'En cabaña y zonas comunes', icon: <Wifi className="w-5 h-5 text-[#82502B]" /> },
    { title: 'Servicio de habitaciones', subtitle: 'Atención directa en tu cabaña', icon: <BedDouble className="w-5 h-5 text-[#82502B]" /> },
    { title: 'Restaurante & Bar', subtitle: 'Comida típica y a la carta', icon: <Utensils className="w-5 h-5 text-[#82502B]" /> },
    { title: 'Muy buen desayuno', subtitle: 'Campestre con café de origen', icon: <Coffee className="w-5 h-5 text-[#82502B]" /> },
    { title: 'Paseo a caballo', subtitle: 'Cabalgatas por la montaña', icon: <Compass className="w-5 h-5 text-[#C2593F]" /> }
  ];

  return (
    <section id="comodidades" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#241C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating & Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            {/* Authentic Rating Badge styled for flawless mobile & desktop display */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 p-2 sm:px-3.5 sm:py-2 rounded-xl bg-[#1E2B22] text-white text-xs mb-4 shadow-sm max-w-full border border-white/10">
              <div className="flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold px-2 py-1 rounded-lg text-xs shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>9.0 / 10</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight min-w-0">
                <span className="font-bold text-white text-xs truncate sm:text-clip">
                  ¡Buenos servicios! Excepcional
                </span>
                <span className="text-[#C5D3C8] text-[11px] opacity-90 hidden xs:inline">
                  • 84 comentarios
                </span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#221711] leading-tight">
              Servicios de Glamping Paraíso en La Montaña
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5A493E]">
              Todo lo que necesitas para una estancia perfecta: desde el calor de la chimenea y la terraza privada
              hasta paseos a caballo, restaurante campestre y parqueadero gratis.
            </p>
          </div>

          {/* Quick CTA to WhatsApp / Book */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#agendar"
              id="cta-servicios-agendar"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C2593F] hover:bg-[#A8452D] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              <span>Ver Disponibilidad</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppUrl('¡Hola! Me gustaría conocer más sobre los servicios de la cabaña (restaurante, paseos a caballo y parqueadero).')}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-servicios-whatsapp"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Most Popular Services Highlight Grid */}
        <div className="mb-14">
          <h3 className="text-xs uppercase tracking-widest font-bold text-[#82502B] mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C2593F]" />
            <span>Servicios Más Populares & Destacados</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {topPopularServices.map((service, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E6DDD3] hover:border-[#C2593F]/40 transition-all text-center flex flex-col items-center justify-center subtle-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E0D5C7] flex items-center justify-center mb-2.5">
                  {service.icon}
                </div>
                <h4 className="font-serif font-bold text-sm text-[#221711] leading-tight">
                  {service.title}
                </h4>
                <p className="text-[11px] text-[#6B584C] mt-1 line-clamp-1">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Detailed Categories Navigator */}
        <div className="bg-[#F4EFEA] rounded-2xl border border-[#E6DDD3] p-6 sm:p-8 luxury-card-shadow">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Category selection column */}
            <div className="md:w-1/3 space-y-1.5 border-b md:border-b-0 md:border-r border-[#E0D5C7] pb-6 md:pb-0 md:pr-6">
              <h4 className="font-serif text-lg font-bold text-[#221711] mb-3">
                Inventario Completo de Servicios
              </h4>
              <div className="space-y-1">
                {DETAILED_AMENITIES_SECTIONS.map((section, idx) => {
                  const isSelected = idx === activeCategoryIndex;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#221711] text-white shadow-xs font-semibold'
                          : 'text-[#5A493E] hover:bg-[#EAE2D7] hover:text-[#221711]'
                      }`}
                      id={`amenity-cat-btn-${idx}`}
                    >
                      <span className="flex items-center gap-2">
                        {categoryIcons[section.category] || <Check className="w-4 h-4" />}
                        <span>{section.category}</span>
                      </span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6B584C]'}`}>
                        {section.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Category Items Detail */}
            <div className="md:w-2/3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#E0D5C7]">
                    {categoryIcons[DETAILED_AMENITIES_SECTIONS[activeCategoryIndex].category] || <Sparkles className="w-5 h-5 text-[#C2593F]" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#221711]">
                      {DETAILED_AMENITIES_SECTIONS[activeCategoryIndex].category}
                    </h3>
                    <p className="text-xs text-[#6B584C]">
                      Disponible para todos los huéspedes de Glamping Paraíso en La Montaña
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {DETAILED_AMENITIES_SECTIONS[activeCategoryIndex].items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7]"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#1E2B22]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#1E7E34]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#3E3129] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-box Quick Action CTA */}
              <div className="mt-8 pt-6 border-t border-[#E0D5C7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#6B584C] text-center sm:text-left">
                  ¿Tienes alguna pregunta sobre el <strong className="text-[#221711]">{DETAILED_AMENITIES_SECTIONS[activeCategoryIndex].category}</strong>?
                </p>
                <a
                  href={getWhatsAppUrl(`¡Hola! Quisiera consultar sobre los servicios de "${DETAILED_AMENITIES_SECTIONS[activeCategoryIndex].category}" en Glamping Paraíso en La Montaña.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-lg shadow-xs transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar por WhatsApp (317 367 6149)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
