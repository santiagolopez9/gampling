import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';
import { CABIN_INFO, getWhatsAppUrl } from '../data/cabinData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#FAF7F2] text-[#241C16] rounded-2xl shadow-2xl border border-[#E0D5C7] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#221711] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#221711] rounded-full" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Glamping Paraíso</p>
                <p className="text-[11px] text-[#A8988B]">En línea • La Calera</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar ventana emergente"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-xs text-[#5A493E]">
            <p className="bg-[#F4EFEA] p-3 rounded-xl border border-[#E6DDD3]">
              👋 ¡Hola! ¿Quieres cotizar o agendar tu fecha en la cabaña? Escríbenos directamente a nuestro WhatsApp oficial:
            </p>

            <div className="text-center py-1">
              <span className="text-sm font-bold text-[#221711] font-mono tracking-wider">
                {CABIN_INFO.phoneDisplay}
              </span>
            </div>

            <div className="space-y-2">
              <a
                href={getWhatsAppUrl('¡Hola! Me gustaría cotizar disponibilidad para Glamping Paraíso en La Montaña.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir Chat de WhatsApp</span>
              </a>

              <a
                href="tel:3173676149"
                className="w-full py-2 px-3 bg-[#221711] hover:bg-black text-white font-medium text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar al 317 367 6149</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-[#FAF7F2] text-[#241C16] text-xs font-semibold shadow-lg border border-[#E0D5C7] whitespace-nowrap animate-bounce">
            ¿Dudas? Chatea al 3173676149 💬
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 relative cursor-pointer border-2 border-white"
          aria-label="Abrir WhatsApp flotante"
          id="btn-floating-whatsapp"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
