import { motion } from "motion/react";

const pizzaHero = "/src/assets/images/napoli_hero_pizza_1779909885425.png";

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-16 px-6 md:px-24 flex flex-col items-center justify-center bg-[#fbfcfa]">
      {/* Visual Frame wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] bg-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden group border border-neutral-100/50"
      >
        {/* Soft shadow edge vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15 z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />

        {/* Real image of Pizza */}
        <img
          src={pizzaHero}
          alt="Rustic Neapolitan Pizza"
          className="w-full h-full object-cover transform duration-10000 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Superposición de texto minimalista */}
        <div className="absolute inset-0 z-25 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.45em] text-stone-200/90 font-medium mb-3 md:mb-5">
              NAPOLI DAL 2025
            </span>
            <h1 className="font-serif italic font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.16em] leading-tight select-none">
              LA ESENCIA DE ITALIA
            </h1>
            <div className="w-12 h-[1px] bg-white/40 mt-5 md:mt-8 transform origin-center transition-all duration-700 group-hover:w-20" />
          </motion.div>
        </div>

        {/* Framing Corner Accents for custom fine-art look */}
        <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/40 z-20 pointer-events-none" />
        <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/40 z-20 pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/40 z-20 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/40 z-20 pointer-events-none" />
      </motion.div>

      {/* Subtle description banner under heroism */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 text-center max-w-xl px-4"
      >
        <span className="font-serif italic text-lg text-[#5e6341] tracking-wide block mb-3">
          Materia prima selecta, paciencia y legado de tradición.
        </span>
        <p className="text-xs text-neutral-500 tracking-[0.05em] leading-relaxed uppercase font-light">
          Harina premium nacional, fermentación en frío ultra lenta de 48 horas, una riquísima salsa secreta de tomates seleccionados y el queso muzzarella artesanal más puro.
        </p>
      </motion.div>
    </section>
  );
}
