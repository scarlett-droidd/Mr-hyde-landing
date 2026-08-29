"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, X, Plus } from "lucide-react"

const specs = [
  {
    id: 1,
    title: "Finger Ledge Design",
    description: "Soporte ergonómico para los dedos. Más control y precisión, reduciendo la fatiga en sesiones extensas.",
    x: 35,
    y: 20,
  },
  {
    id: 2,
    title: "Material médico transparente",
    description: "Plástico grado médico esterilizado con gas EO, con carcasa transparente que da visión total del flujo de tinta y posición de la aguja. Higiene impecable, listo para uso inmediato.",
    x: 65,
    y: 35,
  },
  {
    id: 3,
    title: "Membrana de sílice antirreflujo",
    description: "Barrera impenetrable que evita que la tinta o fluidos regresen y contaminen la máquina.",
    x: 35,
    y: 55,
  },
  {
    id: 4,
    title: "Ajuste Super Tight y operación estable",
    description: "La aguja queda perfectamente centrada sin bamboleo, asegurando trazos con precisión milimétrica. Diseño estabilizado que reduce el ruido y la vibración para un trabajo más fluido.",
    x: 65,
    y: 75,
  },
  {
    id: 5,
    title: "Acero 304H con Easier to Ink",
    description: "Acero 304H (High Carbon) que mantiene el filo en sesiones largas, logrando penetración limpia y mejor cicatrización. Sus micro-surcos mejoran la adherencia y flujo de tinta, con menos repasadas.",
    x: 40,
    y: 92,
  }
]

export function FeaturesSection() {
  const [activeSpot, setActiveSpot] = useState<number | null>(0)
  const [viewMode, setViewMode] = useState<"hotspots" | "list">("hotspots")

  return (
    <section id="specs" className="py-24 lg:py-32 px-6 relative bg-card min-h-screen flex flex-col justify-center">
      {/* Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-5 overflow-hidden">
        <span className="font-serif font-bold text-center text-[20vw] sm:text-[18vw] leading-none tracking-tighter text-primary whitespace-nowrap">
          SPECS
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12">
        {/* Header & Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-normal mb-4 text-balance font-serif text-primary">
              Estándar técnico no negociable
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Explora las características que hacen de nuestros cartuchos la herramienta definitiva para precisión y seguridad.
            </p>
          </div>
          <button
            onClick={() => setViewMode(viewMode === "hotspots" ? "list" : "hotspots")}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold text-sm shrink-0"
          >
            {viewMode === "hotspots" ? (
              <>
                <List className="w-4 h-4" />
                Ver lista completa
              </>
            ) : (
              <>
                <X className="w-4 h-4" />
                Cerrar lista
              </>
            )}
          </button>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {viewMode === "hotspots" ? (
            <motion.div
              key="hotspots"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Desktop Info Panel (Stacking Cards Effect) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col justify-center relative h-[500px]">
                {activeSpot === null && (
                  <div className="absolute inset-0 flex items-center justify-center text-center opacity-50 z-0 transition-opacity duration-500">
                    <p className="text-xl">Haz clic en un punto para ver los detalles.</p>
                  </div>
                )}
                {specs.map((spec, index) => {
                  const offset = activeSpot !== null ? (index - activeSpot + specs.length) % specs.length : 0;
                  const isActive = activeSpot === index;
                  const opacities = [1, 0.6, 0.4, 0.25, 0.15];
                  const currentOpacity = activeSpot !== null ? opacities[offset] : 0;

                  return (
                    <div
                      key={spec.id}
                      className="absolute left-0 right-0 p-10 rounded-3xl backdrop-blur-xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] bg-card/95 border border-white/10 origin-top"
                      style={{
                        top: "20%", // Set near the top so it has room to stack downwards
                        zIndex: 10 - offset,
                        opacity: currentOpacity,
                        transform: `translateY(${offset * 24}px) scale(${1 - offset * 0.04})`,
                        filter: `blur(${offset * 2}px)`,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <div className="text-accent font-bold text-6xl opacity-20 mb-4 font-serif">0{spec.id}</div>
                      <h3 className="text-3xl font-bold mb-4 text-foreground font-sans">
                        {spec.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {spec.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Right Side: Image and Mobile Sticky Panel */}
              <div className="lg:col-span-7 relative flex flex-col items-center">
                {/* Mobile Info Panel (shows at the top on small screens, now inside the tall container) */}
                <div className="lg:hidden w-full flex flex-col justify-center min-h-[200px] sticky top-24 z-30 bg-card/95 backdrop-blur-md rounded-2xl mb-8 border border-border/50 shadow-xl">
                  <AnimatePresence mode="wait">
                    {activeSpot !== null ? (
                      <motion.div
                        key={activeSpot}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="p-6 w-full"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-accent font-bold text-2xl font-serif">0{specs[activeSpot].id}</div>
                          <h3 className="text-xl font-bold text-foreground font-sans leading-tight">
                            {specs[activeSpot].title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {specs[activeSpot].description}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center p-6 opacity-50"
                      >
                        <p className="text-sm">Toca un punto para ver los detalles.</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Image Container */}
                <div className="relative w-full max-w-[400px] aspect-[1/2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/productos/cartridge-hero.svg" 
                    alt="Cartridge Blueprint" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(209,67,124,0.15)]"
                  />

                  {/* Hotspots */}
                  {specs.map((spec, index) => {
                    const isActive = activeSpot === index
                    return (
                      <div
                        key={spec.id}
                        className="absolute"
                        style={{ top: `${spec.y}%`, left: `${spec.x}%`, transform: 'translate(-50%, -50%)' }}
                      >
                        {/* Pulse effect */}
                        {!isActive && (
                          <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                        )}
                        
                        <button
                          onClick={() => setActiveSpot(isActive ? null : index)}
                          className={`relative z-20 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? "bg-accent text-white scale-110 shadow-[0_0_15px_rgba(209,67,124,0.6)]" 
                              : "bg-background border-2 border-accent text-accent hover:bg-accent/20"
                          }`}
                        >
                          <Plus className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-45" : ""}`} />
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {specs.map((spec) => (
                <div key={spec.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold font-serif">
                    {spec.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground font-sans">{spec.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
