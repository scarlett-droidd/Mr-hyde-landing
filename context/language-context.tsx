"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
  t: typeof translations["es"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("mrhyde-lang") as Language | null
    if (saved === "es" || saved === "en") {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "es" ? "en" : "es"
      localStorage.setItem("mrhyde-lang", next)
      return next
    })
  }

  // Prevent hydration mismatch by using default until mounted, 
  // though for simple text replacements it's usually fine.
  const currentTranslations = translations[mounted ? language : "es"]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider")
  }
  return context
}
