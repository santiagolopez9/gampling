import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, MessageCircle, ZoomIn, ArrowRight } from 'lucide-react';
import { GALLERY_IMAGES, getWhatsAppUrl } from '../data/cabinData';
import { GalleryImage } from '../types';

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'Todas las Vistas' },
    { id: 'panoramica', label: 'Atardeceres' },
    { id: 'habitacion', label: 'Habitación & Cama King' },
    { id: 'terraza', label: 'Terraza & Malla' },
    { id: 'noches', label: 'Fogata Nocturna' },
    { id: 'gastronomia', label: 'Desayuno Campestre' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#F4EFEA] text-[#241C16] border-t border-[#EAE2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82502B]/10 text-[#82502B] text-xs font-semibold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#C2593F]" />
              <span>Galería Visual Auténtica</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#221711] leading-tight">
              Una ventana a la serenidad de La Calera
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5A493E]">
              Sin filtros engañosos ni fotos genéricas. Descubre los tonos reales del cielo, el calor de la madera
              y la intimidad de cada espacio.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#221711] text-white shadow-sm'
                    : 'bg-[#FAF7F2] text-[#6B584C] hover:bg-[#EAE2D7] border border-[#DDD3C7]'
                }`}
                id={`cat-btn-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl bg-[#221711] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setLightboxImage(item)}
                id={`gallery-card-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Zoom Icon Hint */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform duration-300">
                  <span className="text-xs text-[#F3B08C] font-semibold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mt-0.5 group-hover:text-[#F3B08C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EAE2D7] line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Bar below Gallery */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E6DDD3] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#221711]">
              ¿Te gustaría despertar con esta vista?
            </h4>
            <p className="text-sm text-[#6B584C] mt-1">
              Las fechas de fines de semana y festivos se agotan con semanas de anticipación.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#agendar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#C2593F] hover:bg-[#A8452D] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              <span>Ver Disponibilidad</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppUrl('¡Hola! Estuve viendo la galería y quisiera consultar fechas libres.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#1A120D] text-white rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Cerrar vista previa"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-xs font-semibold text-[#F3B08C] uppercase tracking-wider">
                    {lightboxImage.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-sm text-[#D5C6B7] mt-1 max-w-xl">
                    {lightboxImage.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl(`¡Hola! Me encantó la foto de "${lightboxImage.title}" en Glamping Paraíso en La Montaña. ¿Tienen fechas disponibles?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm rounded-xl shrink-0 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
