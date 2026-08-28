"use client"

import { Shield, Eye, Settings2, Droplets, VolumeX, Crosshair, Zap } from "lucide-react"
import { motion } from "framer-motion"

const specs = [
  {
    title: "Acero 304H (High Carbon)",
    description: "Punta más resistente que el acero convencional. Mantiene el filo en sesiones largas, logrando penetración limpia y mejor cicatrización.",
    icon: Shield,
  },
  {
    title: "Carcasa transparente médica",
    description: "Visión total del flujo de tinta y posición de la aguja. Ajustes en tiempo real con higiene impecable.",
    icon: Eye,
  },
  {
    title: "Finger Ledge Design",
    description: "Soporte ergonómico para los dedos. Más control y precisión, reduciendo la fatiga en sesiones extensas.",
    icon: Settings2,
  },
  {
    title: "Membrana de sílice antirreflujo",
    description: "Barrera impenetrable que evita que la tinta o fluidos regresen y contaminen la máquina.",
    icon: Droplets,
  },
  {
    title: "Operación silenciosa y firme",
    description: "Diseño estabilizado que reduce drásticamente el ruido y la vibración, ofreciendo un trabajo más fluido.",
    icon: VolumeX,
  },
  {
    title: "Ajuste Super Tight",
    description: "La aguja queda perfectamente centrada sin bamboleo. Trazos con precisión milimétrica asegurada.",
    icon: Crosshair,
  },
  {
    title: "Tecnología Easier to Ink",
    description: "Micro-surcos en la aguja que mejoran la adherencia y flujo de tinta. Saturación más eficiente con menos repasadas.",
    icon: Zap,
  }
]

export function FeaturesSection() {
  return (
    <section id="specs" className="py-32 px-6 relative bg-card overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-5">
        <span className="font-serif font-bold text-center text-[20vw] sm:text-[18vw] leading-none tracking-tighter text-primary whitespace-nowrap">
          SPECS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif text-primary">
              Estándar técnico no negociable
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              Plástico grado médico y esterilización con gas EO. Producto libre de contaminación, listo para un uso inmediato y seguro.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <spec.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground font-sans">{spec.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
