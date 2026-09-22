import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Thermometer, ShieldCheck, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CABIN_INFO, FAQ_ITEMS, getWhatsAppUrl } from '../data/cabinData';

export const LocationAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#241C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Location & Guide (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#82502B] bg-[#82502B]/10 px-3 py-1 rounded-full">
                Ubicación Privilegiada
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#221711] mt-3">
                Cerca de Bogotá, lejos del bullicio
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#5A493E]">
                Ubicados en la vereda El Salitre en La Calera, un mirador natural sobre la cordillera oriental
                donde el atardecer se ve sin interferencias.
              </p>
            </div>

            {/* Travel Specs Card */}
            <div className="p-6 rounded-2xl bg-[#F4EFEA] border border-[#E6DDD3] space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] flex items-center justify-center shrink-0 text-[#C2593F]">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#221711]">Distancia desde Bogotá</h4>
                  <p className="text-xs text-[#6B584C] mt-0.5">
                    Aproximadamente 45 a 55 minutos saliendo por la Calle 84 o Calle 72 hacia La Calera.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-[#E6DDD3]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] flex items-center justify-center shrink-0 text-[#82502B]">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#221711]">Clima & Temperatura</h4>
                  <p className="text-xs text-[#6B584C] mt-0.5">
                    11°C a 18°C. Días templados y atardeceres frescos. Se recomienda traer ropa abrigada y chaqueta para la noche.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-[#E6DDD3]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E0D5C7] flex items-center justify-center shrink-0 text-[#4A6B4E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#221711]">Acceso Vehicular</h4>
                  <p className="text-xs text-[#6B584C] mt-0.5">
                    Vía apta para todo tipo de vehículos (automóvil, campero o moto). Al reservar te enviamos la ubicación exacta en Waze y Google Maps.
                  </p>
                </div>
              </div>
            </div>

            {/* Request Location on WhatsApp */}
            <div className="p-5 rounded-2xl bg-[#1E2B22] text-white flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#B8C7BC] uppercase font-semibold">¿Quieres la ubicación en tu celular?</p>
                <p className="text-sm font-bold mt-0.5">Te la enviamos por WhatsApp al instante</p>
              </div>
              <a
                href={getWhatsAppUrl('¡Hola! Me gustaría que me compartan la ubicación exacta de Glamping Paraíso en La Montaña para calcular mi ruta.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shrink-0 transition-all"
              >
                Pedir Ubicación
              </a>
            </div>
          </div>

          {/* FAQ Accordion (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#C2593F]" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221711]">
                Preguntas Frecuentes
              </h3>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-[#F4EFEA] border border-[#E6DDD3] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-serif font-bold text-base sm:text-lg text-[#221711]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#82502B] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C2593F]' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-sm text-[#5A493E] leading-relaxed border-t border-[#E6DDD3]/60 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Still have questions */}
            <div className="mt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between p-4 bg-[#FAF7F2] border border-[#E0D5C7] rounded-xl text-xs text-[#6B584C] gap-3">
              <span>¿Tienes alguna otra duda o petición especial?</span>
              <a
                href={getWhatsAppUrl('¡Hola! Tengo una pregunta sobre el glamping que no encontré en las preguntas frecuentes.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#1E7E34] hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Preguntar al 317 367 6149</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
