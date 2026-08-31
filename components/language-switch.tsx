"use client"

import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Switch language"
      className="relative flex items-center gap-1 rounded-full border border-primary/40 bg-background/60 px-1 py-1 text-xs font-bold backdrop-blur-sm"
    >
      <span
        className={`rounded-full px-3 py-1 transition-colors ${
          language === "es" ? "bg-primary text-primary-foreground" : "text-primary/60"
        }`}
      >
        ES
      </span>
      <span
        className={`rounded-full px-3 py-1 transition-colors ${
          language === "en" ? "bg-primary text-primary-foreground" : "text-primary/60"
        }`}
      >
        EN
      </span>
    </button>
  )
}
