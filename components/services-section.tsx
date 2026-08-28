"use client"

import { Target, TrendingUp, PackageCheck } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Target,
    title: "Identidad de Marca Fuerte",
    description: "No es un cartucho genérico más. Empaque y branding con carácter que el estudio recordará y volverá a pedir.",
  },
  {
    icon: PackageCheck,
    title: "Consistencia Lote a Lote",
    description: "La misma calidad premium en cada caja. Evita reclamos de tus clientes y asegura su fidelidad a largo plazo.",
  },
  {
    icon: TrendingUp,
    title: "Certeza de Suministro",
    description: "Stock garantizado para pedidos por volumen. Condiciones claras y tiempos de entrega en los que puedes confiar.",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-distribute" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-5">
        <span className="font-serif font-bold text-center text-[18vw] leading-none tracking-tighter text-primary whitespace-nowrap">
          PARTNERSHIP
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={sectionRef} className="relative px-6 lg:px-8 py-16 lg:py-24 mb-32 overflow-hidden rounded-3xl border border-border">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/Copia de 650A5656.jpg"
              alt="Mr Hyde Tattoo Cartridges Box"
              className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                isVisible ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <p className="text-sm font-sans tracking-[0.2em] text-primary font-bold mb-4">DISTRIBUCIÓN B2B</p>
              <h2 className="font-serif md:text-4xl lg:text-5xl font-normal text-foreground text-balance mb-8">
                El cartucho no es un insumo más
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Es la herramienta que sostiene la reputación del tatuador en cada sesión. Mr. Hyde combina el estándar técnico que ya exige la industria con una identidad de marca fuerte y memorable.
                </p>
                <p>
                  Algo que un distribuidor puede poner en el mostrador y que el estudio recuerda. No ofrecemos solo un producto, ofrecemos una alianza de negocio rentable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif text-primary">Por qué distribuir Mr. Hyde</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beneficios diseñados para mayoristas e importadores de insumos de tatuaje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-colors duration-300 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground font-sans">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
