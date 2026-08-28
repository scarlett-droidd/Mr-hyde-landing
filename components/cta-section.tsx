"use client"

import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-card">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="text-[20vw] font-bold font-serif tracking-tighter leading-none text-primary whitespace-nowrap">
          JOIN US
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 bg-background border border-border p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mx-auto mb-4 font-serif text-primary">
            Conviértete en distribuidor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario para solicitar información sobre precios por volumen, catálogo y condiciones de distribución.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Nombre completo</label>
              <input type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Nombre de la empresa / Tienda</label>
              <input type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Nombre de negocio" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Correo electrónico</label>
              <input type="email" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="correo@empresa.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Teléfono / WhatsApp</label>
              <input type="tel" className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+1 234 567 8900" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Volumen estimado (Cajas/mes) o Detalles adicionales</label>
            <textarea className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors h-32 resize-none" placeholder="Cuéntanos sobre tu capacidad de distribución..."></textarea>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button type="submit" className="relative flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:bg-primary/90">
              Solicitar información
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-center gap-2 bg-transparent border border-border text-foreground font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:border-primary">
              Contactar por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
