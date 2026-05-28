import { Instagram, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fbfcfa] py-16 border-t border-neutral-100 px-6 md:px-12 flex flex-col items-center text-center">
      
      {/* Brand Icon or Symbol */}
      <div className="mb-6 flex flex-col items-center">
        <span className="font-serif italic font-light text-2xl text-neutral-800 tracking-wider">N</span>
        <div className="w-5 h-[1px] bg-[#5e6341] mt-1" />
      </div>

      {/* Address & Hours */}
      <div className="max-w-md space-y-3 mb-8">
        <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-600 font-medium">
          Napoli Ristorante - Pizzería Tradicional
        </p>
        <p className="text-xs text-neutral-400 font-light tracking-wide">
          Av. Pres. Perón 7130, Buenos Aires, Argentina
        </p>
        <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-relaxed">
          Martes a Domingo: 13:00 - 15:30 | 20:00 - 23:30 <br />
          Lunes Cerrado por descanso de personal
        </p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-[11px] uppercase tracking-[0.15em] text-neutral-500 font-light mt-2">
        <a href="tel:+541150548534" className="hover:text-black transition-colors duration-200 flex items-center">
          <Phone className="w-3 h-3 mr-1.5 opacity-60" /> 011 5054-8534
        </a>
        <a href="mailto:info@napolipizza.com.ar" className="hover:text-black transition-colors duration-200 flex items-center">
          <Mail className="w-3 h-3 mr-1.5 opacity-60" /> info@napolipizza.com.ar
        </a>
      </div>

      {/* Social Networks & Links */}
      <div className="flex items-center space-x-6 mb-10 text-neutral-400">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black transition-colors duration-300 flex items-center space-x-1.5 text-xs uppercase tracking-widest"
        >
          <Instagram className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-[0.2em]">Instagram</span>
        </a>
        <span className="text-stone-300">|</span>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black transition-colors duration-300 flex items-center space-x-1.5 text-xs uppercase tracking-widest"
        >
          <Globe className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-[0.2em]">Facebook</span>
        </a>
      </div>

      {/* Legal watermark */}
      <div className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-light">
        Napoli © 2025. Todos los derechos reservados.
      </div>

    </footer>
  );
}
