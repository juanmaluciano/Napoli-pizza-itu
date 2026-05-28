import { motion } from "motion/react";
import { Menu, Calendar, MapPin, Instagram, Clock } from "lucide-react";

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-[#fbfcfa]/95 backdrop-blur-md border-b border-neutral-100 py-5 px-6 md:px-12 flex items-center justify-between transition-all duration-300"
    >
      {/* Left detail: address or small contact info */}
      <div className="hidden md:flex items-center space-x-2 text-[11px] uppercase tracking-[0.15em] text-neutral-500">
        <MapPin className="w-3.5 h-3.5 text-[#5e6341]" /> {/* olive accent green */}
        <span>Av. Pres. Perón 7130, Buenos Aires</span>
      </div>

      <div className="md:hidden flex items-center text-xs text-neutral-500 space-x-1 uppercase tracking-widest">
        <span>Since 2025</span>
      </div>

      {/* Center: Stunning luxury logo */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      >
        <span className="font-serif italic text-3xl font-light tracking-[0.2em] text-neutral-900 group-hover:text-amber-900 transition-colors duration-500 select-none">
          NAPOLI
        </span>
        <span className="text-[8px] uppercase tracking-[0.35em] text-neutral-400 mt-0.5 group-hover:text-neutral-600 transition-colors duration-500">
          since 2025
        </span>
      </div>

      {/* Right navigation: MENU and RESERVAS */}
      <nav className="flex items-center space-x-8 text-xs uppercase tracking-[0.2em] text-neutral-700 font-medium select-none">
        <button 
          onClick={() => scrollTo("menu-section")}
          className="hover:text-black transition-colors duration-300 relative py-1 focus:outline-none group cursor-pointer"
        >
          <span>MENÚ</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button 
          onClick={() => scrollTo("reservation-section")}
          className="bg-black text-white hover:bg-neutral-800 transition-all duration-300 px-4 py-2 hover:scale-[1.02] active:scale-[0.98] rounded-none flex items-center space-x-1 text-[10px] tracking-[0.25em] font-medium"
        >
          <Calendar className="w-3 h-3 mr-1" />
          <span>RESERVAS</span>
        </button>
      </nav>
    </motion.header>
  );
}
