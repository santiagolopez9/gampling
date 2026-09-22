import React, { useState } from 'react';
import { MessageCircle, Phone, Clock, MapPin, Sparkles, Send, Copy, Check } from 'lucide-react';
import { CABIN_INFO, getWhatsAppUrl } from '../data/cabinData';

export const WhatsAppContactSection: React.FC = () => {
  const [customMsg, setCustomMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const quickQuestions = [
    '¿Tienen disponibilidad para este próximo fin de semana?',
    '¿Cómo es el servicio de paseo a caballo y qué horarios tienen?',
    '¿Cuánto cuesta la noche en pareja entre semana vs fin de semana?',
    '¿Qué opciones de restaurante y cena tienen en la cabaña?',
    '¿Cómo es el camino para llegar desde Bogotá en carro bajito?',
    'Quiero cotizar una noche romántica con vino, leña y decoración.',
    '¿Aceptan perritos en la cabaña?'
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('3173676149');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || '¡Hola! Me gustaría comunicarme con Glamping Paraíso en La Montaña.';
    const url = getWhatsAppUrl(textToSend);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#1A120D] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle ambient warm glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C2593F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct WhatsApp Focal Point */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#4ADE80] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
              <span>Canal Oficial de Atención Inmediata</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Habla directamente con nosotros al WhatsApp
            </h2>

            <p className="text-base sm:text-lg text-[#D5C6B7] leading-relaxed">
              Sin intermediarios ni demoras. Escríbenos para verificar fechas libres, enviar comprobantes
              o resolver cualquier duda antes de tu viaje a La Calera.
            </p>

            {/* Big Phone Card with Copy & WhatsApp button */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A8988B] font-medium block">
                    Línea Telefónica & WhatsApp
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-3xl sm:text-4xl font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    {CABIN_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
                    title="Copiar número de celular"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#4ADE80]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copiado' : 'Copiar'}</span>
                  </button>

                  <a
                    href="tel:3173676149"
                    className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all flex items-center gap-1.5"
                    title="Llamar directamente"
                  >
                    <Phone className="w-4 h-4 text-[#F3B08C]" />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Big Action */}
              <a
                href={getWhatsAppUrl('¡Hola! Me comunico desde la página web de Glamping Paraíso en La Montaña para consultar información.')}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-main-whatsapp-section"
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20BD5A] active:scale-98 text-white font-bold text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 text-center"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                <span>Abrir Chat de WhatsApp (317 367 6149)</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-4 h-4 text-[#4ADE80] mb-1" />
                <p className="text-xs font-semibold text-white">7:00 AM - 10:00 PM</p>
                <p className="text-[11px] text-[#A8988B]">Atención 7 días</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#F3B08C] mb-1" />
                <p className="text-xs font-semibold text-white">La Calera</p>
                <p className="text-[11px] text-[#A8988B]">Vereda El Salitre</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#F3B08C] mb-1" />
                <p className="text-xs font-semibold text-white">Trato Directo</p>
                <p className="text-[11px] text-[#A8988B]">Propietario local</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Chat Builder */}
          <div className="lg:col-span-6 bg-[#221711] rounded-2xl p-6 sm:p-8 border border-white/10 luxury-card-shadow">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Preguntas Rápidas en 1 Clic
            </h3>
            <p className="text-xs sm:text-sm text-[#A8988B] mb-5">
              Haz clic en cualquiera de estas preguntas frecuentes y se abrirá tu WhatsApp listo para enviar:
            </p>

            <div className="space-y-2.5 mb-6">
              {quickQuestions.map((question, i) => (
                <a
                  key={i}
                  href={getWhatsAppUrl(`¡Hola! ${question}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#25D366]/50 text-xs sm:text-sm text-[#E8DCD1] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span>{question}</span>
                  <MessageCircle className="w-4 h-4 text-[#25D366] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </a>
              ))}
            </div>

            {/* Custom message box */}
            <form onSubmit={handleSendCustomMessage} className="pt-5 border-t border-white/10">
              <label className="block text-xs uppercase tracking-wider text-[#A8988B] font-semibold mb-2">
                O escribe tu mensaje personalizado:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Escribe lo que deseas preguntar..."
                  className="flex-1 px-4 py-2.5 bg-black/30 border border-white/15 rounded-xl text-sm text-white placeholder-[#827468] focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Enviar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
