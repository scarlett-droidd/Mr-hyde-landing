import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-border py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/images/AVATARES-02.png" alt="Mr Hyde Logo" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Cartuchos de tatuaje de alto rendimiento para artistas profesionales.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-center md:text-left">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider font-sans">Producto</h4>
              <ul className="space-y-3">
                <li><Link href="#specs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Especificaciones</Link></li>
                <li><Link href="#why-distribute" className="text-sm text-muted-foreground hover:text-primary transition-colors">Distribución B2B</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider font-sans">Soporte</h4>
              <ul className="space-y-3">
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto B2B</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Garantía y Devoluciones</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">© {new Date().getFullYear()} Mr. Hyde Tattoo Cartridges. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
