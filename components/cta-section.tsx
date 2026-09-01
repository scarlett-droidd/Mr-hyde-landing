"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function CTASection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    detalles: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const API_ENDPOINT = "/api/contact"

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _replyto: formData.email,
          _subject: t.contactForm.emailSubject(formData.nombre, formData.empresa),
          message: t.contactForm.buildEmailMessage(
            formData.nombre,
            formData.empresa,
            formData.telefono,
            formData.detalles,
            formData.email
          ),
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ nombre: "", empresa: "", email: "", telefono: "", detalles: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-card">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="text-[20vw] font-bold font-serif tracking-tighter leading-none text-primary whitespace-nowrap">
          {t.contactForm.bgText}
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 bg-background border border-border p-8 md:p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mx-auto mb-4 font-serif text-primary">
            {t.contactForm.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contactForm.subtitle}
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="text-center py-12">
            <p className="text-xl font-bold text-primary">{t.contactForm.successMessage}</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t.contactForm.labels.name}</label>
                <input required type="text" value={formData.nombre} onChange={handleChange("nombre")} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={t.contactForm.placeholders.name} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t.contactForm.labels.company}</label>
                <input required type="text" value={formData.empresa} onChange={handleChange("empresa")} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={t.contactForm.placeholders.company} />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t.contactForm.labels.email}</label>
                <input required type="email" value={formData.email} onChange={handleChange("email")} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={t.contactForm.placeholders.email} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t.contactForm.labels.phone}</label>
                <input type="tel" value={formData.telefono} onChange={handleChange("telefono")} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder={t.contactForm.placeholders.phone} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t.contactForm.labels.details}</label>
              <textarea required value={formData.detalles} onChange={handleChange("detalles")} className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors h-32 resize-none" placeholder={t.contactForm.placeholders.details}></textarea>
            </div>

            {submitStatus === "error" && (
              <p className="text-center text-red-500 text-sm">{t.contactForm.errorMessage}</p>
            )}

            <div className="flex justify-center pt-4">
              <button type="submit" disabled={isSubmitting} className="relative flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:bg-primary/90 disabled:opacity-60">
                {isSubmitting ? "Enviando..." : t.contactForm.submitButton}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
