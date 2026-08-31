"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)

    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className="transition-all duration-300 px-4 pt-4">
      <div className="max-w-7xl mx-auto transition-all duration-300 rounded-2xl bg-background/90 backdrop-blur-md border border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <img src="/images/AVATARES-02.png" alt="Mr Hyde Logo" className="h-12 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#specs" onClick={(e) => handleSmoothScroll(e, "specs")} className="text-sm font-sans transition-colors cursor-pointer text-muted-foreground hover:text-primary">
              {t.nav.link1}
            </a>
            <a href="#why-distribute" onClick={(e) => handleSmoothScroll(e, "why-distribute")} className="text-sm font-sans transition-colors cursor-pointer text-muted-foreground hover:text-primary">
              {t.nav.link2}
            </a>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-1">
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="relative flex items-center gap-2 bg-primary text-primary-foreground font-bold rounded-xl px-5 py-2 transition-all duration-300 hover:bg-primary/90">
                <span className="text-sm">{t.nav.cta}</span>
              </a>
            </div>

            <button
              className="md:hidden transition-colors duration-300 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-6 pb-2 flex flex-col gap-4 border-t border-border pt-6">
            <a href="#specs" onClick={(e) => handleSmoothScroll(e, "specs")} className="transition-colors cursor-pointer text-muted-foreground hover:text-primary">
              {t.nav.link1}
            </a>
            <a href="#why-distribute" onClick={(e) => handleSmoothScroll(e, "why-distribute")} className="transition-colors cursor-pointer text-muted-foreground hover:text-primary">
              {t.nav.link2}
            </a>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="bg-primary text-primary-foreground font-bold rounded-xl px-5 py-3 text-center w-full transition-all duration-300 hover:bg-primary/90">
                {t.nav.cta}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
