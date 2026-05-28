import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Info, Sparkles, X, Wine, Pizza } from "lucide-react";
import { PizzaItem, WineItem } from "../types";

export default function Menu() {
  const [selectedPizza, setSelectedPizza] = useState<PizzaItem | null>(null);
  const [selectedWine, setSelectedWine] = useState<WineItem | null>(null);

  const classicPizzas: PizzaItem[] = [
    {
      id: "muzzarella",
      name: "Muzzarella Clásica",
      ingredients: "Salsa de tomates seleccionados, doble muzzarella premium de hilado artesanal, aceitunas verdes sazonadas y orégano fresco",
      price: 15500,
      tags: ["Pizzería Tradicional"],
      isPopular: true
    },
    {
      id: "calabresa",
      name: "Calabresa Premium",
      ingredients: "Salsa de la casa, muzzarella fundida, rodajas seleccionadas de longaniza calabresa curada artesanalmente y toque de provolone rallado",
      price: 18500,
      tags: ["Especialidad"]
    },
    {
      id: "fugazzeta",
      name: "Fugazzeta de la Casa",
      ingredients: "Exclusivo colchón de cebollas dulces marinadas en aceite de oliva, muzzarella cremosa de alta calidad y parmesano premium tostado",
      price: 17500,
      tags: ["Pizzería Tradicional", "Favorito"],
      isPopular: true
    },
    {
      id: "napolitana",
      name: "Napolitana Napoli",
      ingredients: "Salsa de tomates maduros, muzzarella fundida, rodajas frescas de tomates de estación, ajo confitado tiernamente y albahaca fresca",
      price: 16500,
      tags: ["Pizzería Tradicional"]
    },
    {
      id: "especial",
      name: "Especial de Jamón y Morrones",
      ingredients: "Muzzarella premium, jamón cocido artesanal de primera calidad, tiras de morrones asados a mano y finas hierbas",
      price: 19500,
      tags: ["Especialidad"]
    }
  ];

  const wines: WineItem[] = [
    {
      id: "chianti",
      name: "Chianti Classico DOCG (Selección del Mes)",
      description: "Tinto de la Toscana con notas de bayas rojas, acidez equilibrada y final amaderado persistente.",
      priceGlass: 6500,
      priceBottle: 28000,
      year: "2021"
    },
    {
      id: "nebbiolo",
      name: "Langhe Nebbiolo DOC",
      description: "Elegante y floral, aromas de rosas silvestres, cuero fino y cereza negra.",
      priceGlass: 7500,
      priceBottle: 32000,
      year: "2020"
    },
    {
      id: "acqua-panna",
      name: "Acqua Panna",
      description: "Agua mineral natural sin gas embotellada en origen, Toscana, de sabor suave y redondo.",
      priceBottle: 3500
    },
    {
      id: "san-pellegrino",
      name: "S. Pellegrino",
      description: "Agua mineral fina con gas de burbuja persistente, ideal para exaltar la muzzarella.",
      priceBottle: 3500
    }
  ];

  return (
    <section id="menu-section" className="w-full bg-[#fbfcfa] py-20 px-6 md:px-24 max-w-6xl mx-auto border-t border-neutral-100">
      {/* Editorial Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-2">
          LA CARTA DIGITAL
        </span>
        <h2 className="font-serif italic font-light text-3xl md:text-4xl text-neutral-900 tracking-[0.12em] uppercase">
          NUESTRAS PIZZAS
        </h2>
        <div className="w-8 h-[1px] bg-neutral-900/60 mt-4" />
      </div>

      {/* Two Column Layout (No visible division borders - clean text) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
        
        {/* Column 1: Pizze Classiche */}
        <div className="space-y-10">
          <div className="border-b border-neutral-100 pb-3 mb-8">
            <h3 className="font-serif italic text-xl text-neutral-800 tracking-[0.05em] flex items-center justify-between">
              <span>Nuestras Pizzas de Tradición</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-light text-stone-400">
                Al Molde bien Generosas
              </span>
            </h3>
          </div>
          
          <div className="space-y-8">
            {classicPizzas.map((pizza) => (
              <motion.div
                key={pizza.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPizza(pizza)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="flex justify-between items-baseline">
                  <h4 className="font-sans font-medium text-[15px] text-neutral-900 tracking-wider group-hover:text-amber-900 transition-colors duration-300 flex items-center">
                    {pizza.name}
                    {pizza.isPopular && (
                      <span className="ml-2 inline-flex items-center text-[8px] tracking-[0.1em] font-light uppercase bg-[#5e6341]/10 text-[#4c5034] px-1.5 py-0.5">
                        Insignia
                      </span>
                    )}
                  </h4>
                  <div className="flex-grow border-b border-dotted border-neutral-200/50 mx-4" />
                  <span className="font-serif italic font-medium text-neutral-900 tracking-wide">
                    ${pizza.price.toLocaleString("es-AR")}
                  </span>
                </div>
                <p className="font-sans text-xs text-neutral-500 font-light tracking-[0.02em] leading-relaxed mt-2 pr-12">
                  {pizza.ingredients}
                </p>
                <span className="text-[10px] text-stone-400 font-light mt-1 flex items-center group-hover:text-stone-600 transition-colors duration-300">
                  <Info className="w-3 h-3 mr-1 opacity-60" /> Ver detalles de maridaje y alérgenos
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2: Vinos & Bebidas */}
        <div className="space-y-10">
          <div className="border-b border-neutral-100 pb-3 mb-8">
            <h3 className="font-serif italic text-xl text-neutral-800 tracking-[0.05em] flex items-center justify-between">
              <span>Cantina & Cantar</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-light text-stone-400">
                Vinos Italianos & Aguas
              </span>
            </h3>
          </div>

          <div className="space-y-8">
            {wines.map((wine) => (
              <motion.div
                key={wine.id}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedWine(wine)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="flex justify-between items-baseline">
                  <h4 className="font-sans font-medium text-[15px] text-neutral-900 tracking-wider group-hover:text-amber-950 transition-colors duration-300">
                    {wine.name}
                  </h4>
                  <div className="flex-grow border-b border-dotted border-neutral-200/50 mx-4" />
                  <span className="font-serif italic font-medium text-neutral-900 tracking-wide text-right">
                    {wine.priceGlass ? `Copa $${wine.priceGlass.toLocaleString("es-AR")} / ` : ""}Botella ${wine.priceBottle.toLocaleString("es-AR")}
                  </span>
                </div>
                <p className="font-sans text-xs text-neutral-500 font-light tracking-[0.02em] leading-relaxed mt-2 pr-12">
                  {wine.description}
                </p>
                <span className="text-[10px] text-stone-400 font-light mt-1 flex items-center group-hover:text-stone-600 transition-colors duration-300">
                  <Wine className="w-3 h-3 mr-1 opacity-60" /> Ver terroir de elaboración
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Aesthetic pairing philosophy quote at bottom of menu */}
      <div className="mt-20 border-t border-dashed border-stone-200/50 pt-10 text-center">
        <p className="font-serif italic text-sm text-stone-600 max-w-lg mx-auto">
          "La pizza es un ritual de encuentro, herencia y complicidad. Unimos la tradición italiana con el alma y la generosidad de la mesa argentina."
        </p>
        <span className="text-[8px] uppercase tracking-[0.3em] text-[#5e6341] mt-2 block">
          Maestro Pizzero, Napoli
        </span>
      </div>

      {/* Pizza Details Side Panel (Modal Style for absolute luxury presentation) */}
      <AnimatePresence>
        {selectedPizza && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPizza(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#fbfcfa] p-8 md:p-10 max-w-md w-full border border-stone-100 shadow-[0_25px_60px_rgba(0,0,0,0.15)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPizza(null)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors duration-200"
              >
                <X className="w-5 h-5 font-light" />
              </button>

              <div className="flex items-center space-x-2 text-[9px] uppercase tracking-[0.25em] text-[#5e6341] mb-3">
                <Pizza className="w-3.5 h-3.5" />
                <span>Pizzería de Tradición</span>
              </div>

              <h3 className="font-serif italic text-3xl text-neutral-900 tracking-wide mb-4">
                {selectedPizza.name}
              </h3>
              
              <p className="text-sm font-serif italic text-amber-900 mb-6">
                Precio: ${selectedPizza.price.toLocaleString("es-AR")}
              </p>

              <div className="space-y-4 border-t border-b border-stone-100 py-6 my-6 text-xs text-neutral-600 leading-relaxed">
                <div>
                  <h5 className="font-medium uppercase tracking-[0.15em] text-neutral-800 mb-1">Ingredientes Selectos:</h5>
                  <p className="font-light tracking-wide">{selectedPizza.ingredients}</p>
                </div>
                <div>
                  <h5 className="font-medium uppercase tracking-[0.15em] text-neutral-800 mb-1">Alérgenos:</h5>
                  <p className="font-light tracking-wide">Contiene Gluten de trigo, Lácteos.</p>
                </div>
                <div>
                  <h5 className="font-medium uppercase tracking-[0.15em] text-neutral-800 mb-1">Maridaje Recomendado:</h5>
                  <p className="font-light tracking-wide">Un refinado vino Chianti Classico o moscato dulce helado de nuestra bodega selecta.</p>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button 
                  onClick={() => setSelectedPizza(null)}
                  className="bg-black text-white hover:bg-stone-800 transition-colors duration-300 px-6 py-2 text-[10px] tracking-widest uppercase font-medium"
                >
                  Regresar al Menú
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wine Details Modal */}
      <AnimatePresence>
        {selectedWine && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWine(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#fbfcfa] p-8 md:p-10 max-w-md w-full border border-stone-100 shadow-[0_25px_60px_rgba(0,0,0,0.15)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedWine(null)}
                className="slate-400 absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-[9px] uppercase tracking-[0.25em] text-[#5e6341] mb-3">
                <Wine className="w-3.5 h-3.5" />
                <span>Terroir de la Bodega</span>
              </div>

              <h3 className="font-serif italic text-2xl text-neutral-900 tracking-wide mb-2">
                {selectedWine.name}
              </h3>
              <p className="text-sm font-serif italic text-amber-900 mb-2">
                {selectedWine.priceGlass ? `Copa: $${selectedWine.priceGlass.toLocaleString("es-AR")} / ` : ""}Botella: $${selectedWine.priceBottle.toLocaleString("es-AR")}
              </p>
              {selectedWine.year && (
                <span className="text-xs uppercase tracking-widest text-neutral-400">Cosecha {selectedWine.year}</span>
              )}
              
              <div className="space-y-4 border-t border-b border-stone-100 py-6 my-6 text-xs text-neutral-600 leading-relaxed">
                <div>
                  <h5 className="font-medium uppercase tracking-[0.15em] text-neutral-800 mb-1">Nota de Cata:</h5>
                  <p className="font-light tracking-wide">{selectedWine.description}</p>
                </div>
                <div>
                  <h5 className="font-medium uppercase tracking-[0.15em] text-neutral-800 mb-1">Origen:</h5>
                  <p className="font-light tracking-wide">Bodegas tradicionales con Denominación de Origen certificada.</p>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedWine(null)}
                  className="bg-black text-white hover:bg-stone-800 transition-colors duration-300 px-6 py-2 text-[10px] tracking-widest uppercase font-medium"
                >
                  Regresar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
