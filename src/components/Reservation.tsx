import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Clock, CheckCircle, ArrowRight, CornerDownRight, Landmark } from "lucide-react";

export default function Reservation() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    code: string;
    date: string;
    time: string;
    guests: string;
    name: string;
  } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.name || !formData.email) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API call confirmation
    setTimeout(() => {
      const code = "NPL-" + Math.floor(1000 + Math.random() * 9000);
      setConfirmedBooking({
        code,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        name: formData.name
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const timeSlots = [
    "13:00", "13:30", "14:00", "14:30",
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  return (
    <section id="reservation-section" className="w-full bg-[#fbfcfa] py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-neutral-100">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-2">
          EXPEDICIÓN RÚSTICA
        </span>
        <h2 className="font-serif italic font-light text-3xl md:text-4xl text-neutral-900 tracking-[0.12em] uppercase">
          RESERVAR MESA
        </h2>
        <div className="w-8 h-[1px] bg-neutral-900/60 mt-4" />
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!confirmedBooking ? (
            <motion.form
              key="booking-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto space-y-10"
            >
              
              {/* Form Intros */}
              <p className="text-center text-xs text-neutral-500 max-w-md mx-auto leading-relaxed uppercase tracking-wider font-light">
                Debido a nuestro aforo limitado y al proceso artesanal de fermentación de nuestras masas, recomendamos reservar con un mínimo de 48 horas de antelación.
              </p>

              {/* Grid block for details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Date Input */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#5e6341]" />
                    Fecha *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-transparent border-b border-stone-200 py-2.5 text-sm tracking-wide text-neutral-800 placeholder-stone-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 w-full rounded-none"
                  />
                </div>

                {/* Time Selector */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-[#5e6341]" />
                    Hora *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="bg-transparent border-b border-stone-200 py-2.5 text-sm tracking-wide text-neutral-800 placeholder-stone-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 w-full rounded-none cursor-pointer"
                  >
                    <option value="" disabled className="text-stone-400">Seleccionar...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="text-neutral-800 bg-[#fbfcfa]">
                        {slot} hs
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guest counter */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase flex items-center">
                    <Users className="w-3.5 h-3.5 mr-1.5 text-[#5e6341]" />
                    Personas *
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="bg-transparent border-b border-stone-200 py-2.5 text-sm tracking-wide text-neutral-800 placeholder-stone-400 focus:outline-none focus:border-neutral-900 transition-colors duration-300 w-full rounded-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num} className="text-neutral-800 bg-[#fbfcfa]">
                        {num} {num === 1 ? "Persona" : "Personas"}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Sub-block for personal info so it functions realistically */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-dashed border-stone-100 pt-8 mt-4">
                
                {/* Customer name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Martínez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-stone-200 py-2 text-sm text-neutral-800 placeholder-stone-300 focus:outline-none focus:border-neutral-900 transition-colors duration-300 w-full rounded-none"
                  />
                </div>

                {/* Customer email */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sofia@napolipizza.com.ar"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-stone-200 py-2 text-sm text-neutral-800 placeholder-stone-300 focus:outline-none focus:border-neutral-900 transition-colors duration-300 w-full rounded-none"
                  />
                </div>

              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                  Requerimientos Especiales (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Alergias, intolerancia al gluten, mesa cerca de la ventana..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="bg-transparent border-b border-stone-200 py-2 text-sm text-neutral-800 placeholder-stone-300 focus:outline-none focus:border-neutral-900 transition-colors duration-300 w-full rounded-none"
                />
              </div>

              {/* Botón: Un botón de contorno negro simple con texto "CONFIRMAR RESERVA" */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative border border-neutral-900 bg-transparent hover:bg-neutral-900 text-neutral-900 hover:text-[#fbfcfa] transition-all duration-500 px-10 py-4 text-xs tracking-[0.3em] font-medium uppercase rounded-none select-none overflow-hidden max-w-sm w-full"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>{isSubmitting ? "SOLICITANDO..." : "CONFIRMAR RESERVA"}</span>
                    {!isSubmitting && <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />}
                  </span>
                </button>
              </div>

            </motion.form>
          ) : (
            /* Elegant high-contrast printable state coupon confirmation ticket */
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", damping: 20 }}
              className="max-w-md mx-auto bg-stone-50 border border-stone-200/60 p-8 text-center relative shadow-[0_15px_40px_rgba(0,0,0,0.03)]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-[#5e6341]" />
              
              <CheckCircle className="w-10 h-10 text-[#5e6341] mx-auto mb-4" />
              
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#5e6341] font-semibold block mb-1">
                Reserva Procesada
              </span>
              <h3 className="font-serif italic text-2xl text-stone-900 mb-6">
                Benvenuto, {confirmedBooking.name}
              </h3>

              <div className="border-t border-b border-stone-200/70 py-6 my-6 space-y-4 text-left font-sans text-xs text-neutral-600 tracking-wide">
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-400 text-[10px] uppercase tracking-wider">Código de Reserva:</span>
                  <span className="font-mono text-xs font-semibold text-neutral-900 bg-stone-200/60 px-2 py-0.5 rounded">{confirmedBooking.code}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-400 text-[10px] uppercase tracking-wider">Fecha de Encuentro:</span>
                  <span className="font-medium text-neutral-800">{new Date(confirmedBooking.date).toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-400 text-[10px] uppercase tracking-wider">Hora Reservada:</span>
                  <span className="font-medium text-neutral-800">{confirmedBooking.time} hs</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-400 text-[10px] uppercase tracking-wider">Mesa para:</span>
                  <span className="font-medium text-neutral-800">{confirmedBooking.guests} {confirmedBooking.guests === "1" ? "Comensal" : "Comensales"}</span>
                </div>
              </div>

              <p className="text-[10px] text-stone-500 uppercase tracking-widest leading-relaxed mb-6">
                Hemos enviado las especificaciones de su mesa y las recomendaciones de código de vestimenta elegante informal a su correo electrónico.
              </p>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 text-[10px] tracking-widest uppercase transition-colors duration-300"
              >
                Hacer Otra Reserva
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
