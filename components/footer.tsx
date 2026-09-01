"use client"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative z-20 border-t border-border py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/AVATARES-02.png" alt="Mr Hyde Logo" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/mrhyde_cartridges/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61587554250231" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-center md:text-left">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider font-sans">{t.footer.productTitle}</h4>
              <ul className="space-y-3">
                <li><Link href="#specs" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.productLink1}</Link></li>
                <li><Link href="#why-distribute" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.productLink2}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider font-sans">{t.footer.supportTitle}</h4>
              <ul className="space-y-3">
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.supportLink1}</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.supportLink2}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">{t.footer.copyright(new Date().getFullYear())}</p>
        </div>
      </div>
    </footer>
  )
}
