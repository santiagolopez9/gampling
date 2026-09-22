import React from 'react';
import { Compass, Phone, MessageCircle, MapPin, Heart } from 'lucide-react';
import { CABIN_INFO, getWhatsAppUrl } from '../data/cabinData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#140E0A] text-[#FAF7F2] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-[#F3B08C]" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Paraíso en La Montaña
              </span>
            </div>
            <p className="text-sm text-[#A8988B] leading-relaxed max-w-sm">
              Cabaña de madera auténtica en las alturas de La Calera. Un espacio íntimo para ver atardeceres sobre
              la cordillera, compartir junto al calor de la estufa de leña y reencontrarse con la calma.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#F3B08C]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>La Calera, Cundinamarca • 2.750 msnm</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#F3B08C]">
              Explorar
            </h4>
            <ul className="space-y-2 text-sm text-[#C8B8AB]">
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  La Cabaña & Malla Catamarán
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galería de Fotos
                </a>
              </li>
              <li>
                <a href="#comodidades" className="hover:text-white transition-colors">
                  Comodidades & Servicios
                </a>
              </li>
              <li>
                <a href="#agendar" className="hover:text-white transition-colors">
                  Calculadora de Tarifas & Agendar
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  Cómo Llegar & Preguntas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#F3B08C]">
              Contacto & Reservas
            </h4>
            <p className="text-sm text-[#C8B8AB]">
              Para reservas inmediatas o dudas sobre disponibilidad, escríbenos directamente:
            </p>
            <div className="space-y-2 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#4ADE80] text-sm font-semibold hover:bg-[#25D366]/30 transition-colors w-full"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {CABIN_INFO.phoneDisplay}</span>
              </a>

              <a
                href="tel:3173676149"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-colors w-full"
              >
                <Phone className="w-3.5 h-3.5 text-[#F3B08C]" />
                <span>Llamadas: 317 367 6149</span>
              </a>
            </div>
            <p className="text-[11px] text-[#827468] pt-1">
              Check-in: 3:00 PM • Check-out: 12:00 PM
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#827468] gap-4">
          <p>
            © {new Date().getFullYear()} Glamping Paraíso en La Montaña. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span>Hecho con dedicación para los amantes de la montaña</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
