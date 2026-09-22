import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, PlusCircle, Check, MessageCircle, Sparkles, ShieldCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CABIN_INFO, BOOKING_ADDONS, getWhatsAppUrl } from '../data/cabinData';

export const BookingEngine: React.FC = () => {
  // Dates setup: default to tomorrow and day after tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDateForInput = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateForInput(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDateForInput(dayAfter));
  const [guests, setGuests] = useState<number>(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['addon-fogata-masmelos']);
  
  // Guest fields
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialOccasion, setSpecialOccasion] = useState<string>('Escapada Romántica');
  const [guestNotes, setGuestNotes] = useState<string>('');

  // Booking confirmed state
  const [bookingConfirmed, setBookingConfirmed] = useState<{
    code: string;
    total: number;
    dates: string;
    detailsText: string;
  } | null>(null);

  // Price calculation
  const calculation = useMemo(() => {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

    let nightsCost = 0;
    const nightBreakdown: { date: string; isWeekend: boolean; price: number }[] = [];

    // Calculate each night to check weekday vs weekend (Fri, Sat = 5, 6)
    const cur = new Date(startDate);
    for (let i = 0; i < diffDays; i++) {
      const dayOfWeek = cur.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
      const price = isWeekend ? CABIN_INFO.basePriceWeekend : CABIN_INFO.basePriceWeekday;
      nightsCost += price;
      nightBreakdown.push({
        date: cur.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' }),
        isWeekend,
        price
      });
      cur.setDate(cur.getDate() + 1);
    }

    // Addons cost
    const addonsCost = selectedAddons.reduce((acc, addonId) => {
      const addon = BOOKING_ADDONS.find((a) => a.id === addonId);
      return acc + (addon ? addon.price : 0);
    }, 0);

    const grandTotal = nightsCost + addonsCost;
    const depositRequired = Math.round(grandTotal * 0.5);

    return {
      diffDays,
      nightsCost,
      nightBreakdown,
      addonsCost,
      grandTotal,
      depositRequired
    };
  }, [checkIn, checkOut, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Build formatted WhatsApp reservation message
  const buildWhatsAppMessage = () => {
    const addonsNames = selectedAddons
      .map((id) => BOOKING_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `¡Hola! Me gustaría confirmar disponibilidad y agendar en Glamping Paraíso en La Montaña (La Calera):

📅 Check-in: ${checkIn} (a partir de las 3:00 PM)
📅 Check-out: ${checkOut} (hasta las 12:00 PM)
🌙 Noches: ${calculation.diffDays}
👥 Huéspedes: ${guests} persona(s)
✨ Motivo: ${specialOccasion}
${addonsNames ? `🎁 Adicionales elegidos: ${addonsNames}\n` : ''}💰 Total cotizado: ${formatCOP(calculation.grandTotal)} (Abono 50%: ${formatCOP(calculation.depositRequired)})

👤 Nombre: ${guestName || 'Por definir'}
📱 Celular: ${guestPhone || 'Por definir'}
${guestNotes ? `📝 Notas: ${guestNotes}\n` : ''}
¿Tienen disponibilidad en estas fechas para realizar el abono?`;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWebReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      alert('Por favor escribe tu nombre para generar la solicitud de reserva.');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const randomCode = `GLAMP-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingConfirmed({
      code: randomCode,
      total: calculation.grandTotal,
      dates: `${checkIn} al ${checkOut} (${calculation.diffDays} noches)`,
      detailsText: buildWhatsAppMessage()
    });
  };

  return (
    <section id="agendar" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#241C16] border-t border-[#EAE2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#82502B] bg-[#82502B]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C2593F]" />
            <span>Reserva Directa Sin Intermediarios</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#221711] mt-3">
            Calcula y agenda tu escapada a la montaña
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A493E]">
            Selecciona tus fechas, agrega tus experiencias preferidas y envía tu solicitud directamente
            a nuestro WhatsApp al <strong className="text-[#C2593F]">317 367 6149</strong> para asegurar tu fecha.
          </p>
        </div>

        {/* Booking Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form & Controls (Left 7 cols) */}
          <div className="lg:col-span-7 bg-[#F4EFEA] rounded-2xl p-6 sm:p-8 border border-[#E6DDD3] luxury-card-shadow">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#221711] mb-6 flex items-center gap-2">
              <span>1. Fechas y Huéspedes</span>
            </h3>

            {/* Dates Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-2">
                  Fecha de Llegada (Check-in)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    min={formatDateForInput(new Date())}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                      if (new Date(e.target.value) >= new Date(checkOut)) {
                        const next = new Date(e.target.value);
                        next.setDate(next.getDate() + 1);
                        setCheckOut(formatDateForInput(next));
                      }
                    }}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm font-medium text-[#241C16] focus:outline-none focus:ring-2 focus:ring-[#C2593F]"
                    id="input-check-in"
                  />
                  <span className="text-[11px] text-[#82502B] block mt-1 font-medium">Check-in: 3:00 PM</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-2">
                  Fecha de Salida (Check-out)
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm font-medium text-[#241C16] focus:outline-none focus:ring-2 focus:ring-[#C2593F]"
                    id="input-check-out"
                  />
                  <span className="text-[11px] text-[#82502B] block mt-1 font-medium">Check-out: 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Guests & Occasion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-2">
                  Número de Huéspedes
                </label>
                <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl p-1.5">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                        guests === num
                          ? 'bg-[#221711] text-white shadow-sm'
                          : 'text-[#6B584C] hover:bg-[#EAE2D7]'
                      }`}
                      id={`guest-btn-${num}`}
                    >
                      {num} {num === 1 ? 'persona' : 'personas'}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] text-[#6B584C] block mt-1">Ideal para parejas o familias pequeñas</span>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-2">
                  Motivo de la Visita
                </label>
                <select
                  value={specialOccasion}
                  onChange={(e) => setSpecialOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm font-medium text-[#241C16] focus:outline-none focus:ring-2 focus:ring-[#C2593F]"
                  id="select-occasion"
                >
                  <option value="Escapada Romántica">Escapada Romántica en Pareja</option>
                  <option value="Celebración de Aniversario">Celebración de Aniversario</option>
                  <option value="Cumpleaños Especial">Cumpleaños Especial</option>
                  <option value="Propuesta de Matrimonio">Propuesta de Matrimonio</option>
                  <option value="Descanso y Desconexión">Descanso & Desconexión de la Ciudad</option>
                  <option value="Trabajo Remoto con Vista">Trabajo Remoto con Silencio</option>
                </select>
              </div>
            </div>

            {/* Add-ons Checklist */}
            <div className="pt-6 border-t border-[#E6DDD3]">
              <h3 className="font-serif text-xl font-bold text-[#221711] mb-2 flex items-center justify-between">
                <span>2. Experiencias Adicionales</span>
                <span className="text-xs font-sans font-normal text-[#82502B]">Opcionales</span>
              </h3>
              <p className="text-xs text-[#6B584C] mb-4">
                Personaliza tu estadía para que al llegar a la cabaña todo esté preparado y listo.
              </p>

              <div className="space-y-3">
                {BOOKING_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#FAF7F2] border-[#C2593F] shadow-xs'
                          : 'bg-[#FAF7F2]/60 border-[#DDD3C7] hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked
                              ? 'bg-[#C2593F] text-white'
                              : 'border border-[#9C897B] bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#221711]">{addon.name}</p>
                          <p className="text-xs text-[#6B584C] mt-0.5">{addon.description}</p>
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#82502B] whitespace-nowrap ml-4">
                        +{formatCOP(addon.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Guest Details */}
            <div className="pt-6 mt-6 border-t border-[#E6DDD3]">
              <h3 className="font-serif text-xl font-bold text-[#221711] mb-4">
                3. Datos de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-1.5">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Santiago López"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm font-medium text-[#241C16] focus:outline-none focus:ring-2 focus:ring-[#C2593F]"
                    id="input-guest-name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-1.5">
                    Número de WhatsApp / Celular *
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej. 317 123 4567"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm font-medium text-[#241C16] focus:outline-none focus:ring-2 focus:ring-[#C2593F]"
                    id="input-guest-phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B584C] mb-1.5">
                  Notas o Solicitudes Especiales (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej: ¿A qué hora nos recomiendan llegar para ver el atardecer? / Vamos a celebrar nuestro aniversario..."
                  value={guestNotes}
                  onChange={(e) => setGuestNotes(e.target.value)}
                  className="w-full px-4 py-2 bg-[#FAF7F2] border border-[#DDD3C7] rounded-xl text-sm font-medium text-[#241C16] focus:outline-none focus:ring-2 focus:ring-[#C2593F]"
                  id="input-guest-notes"
                />
              </div>
            </div>
          </div>

          {/* Price Breakdown & Confirmation Summary (Right 5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-[#221711] text-[#FAF7F2] rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F3B08C] font-semibold">
                    Resumen de Estadía
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Glamping Paraíso
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#D5C6B7] block">Estadía para</span>
                  <span className="text-sm font-semibold text-white">{guests} {guests === 1 ? 'huésped' : 'huéspedes'}</span>
                </div>
              </div>

              {/* Dates strip */}
              <div className="bg-white/5 rounded-xl p-4 mb-5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#D5C6B7]">Llegada (Check-in):</span>
                  <span className="font-semibold text-white">{checkIn} (3:00 PM)</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#D5C6B7]">Salida (Check-out):</span>
                  <span className="font-semibold text-white">{checkOut} (12:00 PM)</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm pt-1 border-t border-white/10">
                  <span className="text-[#D5C6B7]">Duración:</span>
                  <span className="font-semibold text-[#F3B08C]">{calculation.diffDays} {calculation.diffDays === 1 ? 'noche' : 'noches'}</span>
                </div>
              </div>

              {/* Breakdown details */}
              <div className="space-y-2.5 text-sm mb-6">
                <div className="flex justify-between text-[#D5C6B7]">
                  <span>Hospedaje ({calculation.diffDays} noches):</span>
                  <span className="font-medium text-white">{formatCOP(calculation.nightsCost)}</span>
                </div>

                {calculation.addonsCost > 0 && (
                  <div className="flex justify-between text-[#D5C6B7]">
                    <span>Experiencias adicionales:</span>
                    <span className="font-medium text-white">+{formatCOP(calculation.addonsCost)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#D5C6B7]">
                  <span>Carga de leña para chimenea:</span>
                  <span className="font-medium text-[#78D497]">¡Incluida!</span>
                </div>

                <div className="flex justify-between text-[#D5C6B7]">
                  <span>Parqueadero privado:</span>
                  <span className="font-medium text-[#78D497]">¡Incluido!</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t border-white/15 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-[#D5C6B7]">Total Estimado:</span>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {formatCOP(calculation.grandTotal)}
                  </span>
                </div>
                <p className="text-xs text-[#F3B08C] mt-1.5 flex items-center justify-between">
                  <span>Abono requerido para apartar (50%):</span>
                  <span className="font-semibold">{formatCOP(calculation.depositRequired)}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {/* Main WhatsApp Booking Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 px-5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer"
                  id="btn-whatsapp-booking"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Agendar por WhatsApp (317 367 6149)</span>
                </button>

                {/* Secondary Web Voucher Button */}
                <button
                  type="button"
                  onClick={handleWebReserve}
                  className="w-full py-3 px-5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="btn-generate-voucher"
                >
                  <Sparkles className="w-4 h-4 text-[#F3B08C]" />
                  <span>Generar Solicitud de Reserva Web</span>
                </button>
              </div>

              {/* Guarantee badges */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3 text-[11px] text-[#C0B3A6]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#78D497]" />
                  <span>Trato directo sin comisiones</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#78D497]" />
                  <span>Respuesta rápida garantizada</span>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance Card */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DDD3] flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase font-semibold text-[#82502B]">¿Prefieres llamada telefónica?</p>
                <p className="text-sm text-[#4A3B32] mt-0.5">Te atendemos directamente con gusto.</p>
              </div>
              <a
                href="tel:3173676149"
                className="px-4 py-2.5 bg-[#221711] text-white text-xs font-semibold rounded-lg hover:bg-black transition-colors whitespace-nowrap"
              >
                Llamar: 317 367 6149
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Voucher Modal */}
      <AnimatePresence>
        {bookingConfirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#FAF7F2] text-[#241C16] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E0D5C7]"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/15 text-[#1E7E34] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-[#25D366]" />
              </div>

              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#82502B]">
                  ¡Solicitud Generada con Éxito!
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#221711] mt-1">
                  Código: {bookingConfirmed.code}
                </h3>
                <p className="text-xs text-[#6B584C] mt-1">
                  Fechas: {bookingConfirmed.dates} • Total: {formatCOP(bookingConfirmed.total)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E6DDD3] text-xs text-[#5A493E] space-y-2 mb-6">
                <p>
                  <strong>Paso siguiente para apartar la fecha:</strong>
                </p>
                <p>
                  Envíanos este código a nuestro WhatsApp oficial al <strong>317 367 6149</strong> para validar los datos bancarios de consignación (50% de abono) y enviarte la ubicación exacta con indicaciones de llegada.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={getWhatsAppUrl(`¡Hola! Acabo de generar mi solicitud de reserva web con el código ${bookingConfirmed.code} para las fechas ${bookingConfirmed.dates}. ¿Me confirman disponibilidad para realizar el abono?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Código al WhatsApp (317 367 6149)</span>
                </a>

                <button
                  type="button"
                  onClick={() => setBookingConfirmed(null)}
                  className="w-full py-2.5 text-xs text-[#6B584C] hover:text-[#221711] font-medium"
                >
                  Cerrar ventana
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
