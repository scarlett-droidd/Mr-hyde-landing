import { Target, TrendingUp, PackageCheck } from "lucide-react"
import { readdirSync, statSync } from "fs"
import { join } from "path"
import { SponsorCarousel, SponsorImage } from "./SponsorCarousel"

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

function getSponsorImages(): SponsorImage[] {
  const sponsorsRoot = join(process.cwd(), "public", "mrhyde-sponsors")
  const images: SponsorImage[] = []

  try {
    const countries = readdirSync(sponsorsRoot).filter((name) => {
      try {
        return statSync(join(sponsorsRoot, name)).isDirectory() && !name.startsWith(".")
      } catch {
        return false
      }
    })

    for (const country of countries) {
      const countryPath = join(sponsorsRoot, country)
      const artistDirs = readdirSync(countryPath).filter((name) => {
        try {
          return statSync(join(countryPath, name)).isDirectory() && !name.startsWith(".")
        } catch {
          return false
        }
      })

      for (const artistDir of artistDirs) {
        const artistPath = join(countryPath, artistDir)
        const files = readdirSync(artistPath).filter(
          (f) => !f.startsWith(".") && /\.(jpe?g|png|webp|avif|svg)$/i.test(f)
        )

        for (const file of files) {
          const encodedFile = file.split("").map((c) => {
            if (/[a-zA-Z0-9._~!$&'()*+,;=:@/-]/.test(c)) return c
            return encodeURIComponent(c)
          }).join("")

          images.push({
            url: `/mrhyde-sponsors/${country}/${artistDir}/${encodedFile}`,
            country: country.charAt(0) + country.slice(1).toLowerCase(),
            artist: artistDir.startsWith("@") ? artistDir.slice(1) : artistDir,
          })
        }
      }
    }
  } catch (e) {
    console.error("Error reading sponsor images:", e)
  }

  return images
}

export async function ServicesSection() {
  const sponsorImages = getSponsorImages()

  return (
    <section id="why-distribute" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0 opacity-5">
        <span className="font-serif font-bold text-center text-[18vw] leading-none tracking-tighter text-primary whitespace-nowrap">
          PARTNERSHIP
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Intro Block */}
        <div className="relative px-6 lg:px-8 py-16 lg:py-24 mb-32 overflow-hidden rounded-3xl border border-border">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/Copia de 650A5656.jpg"
              alt="Mr Hyde Tattoo Cartridges Box"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="relative z-10 lg:max-w-xl">
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

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif text-primary">
            Por qué distribuir Mr. Hyde
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beneficios diseñados para mayoristas e importadores de insumos de tatuaje.
          </p>
        </div>

        {/* Two-column layout: benefits + carousel */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: benefit cards stacked vertically, stretched to match carousel height */}
          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden flex flex-1 gap-6 items-start p-6 rounded-2xl border border-border bg-card hover:border-[#9F69BD]/50 transition-colors duration-300"
              >
                {/* Background animated watermark icon */}
                <div 
                  className="absolute -bottom-10 -right-10 z-0 opacity-[0.12] pointer-events-none animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <service.icon className="w-48 h-48 text-[#9F69BD]" />
                </div>

                {/* Original content */}
                <div className="relative z-10 shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-[#9F69BD]/20 group-hover:bg-[#9F69BD]/35 transition-colors">
                  <service.icon className="w-7 h-7 text-[#c8a0e0]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2 text-foreground font-sans">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sponsor carousel — controls height of the row */}
          <div className="flex flex-col">
            <SponsorCarousel images={sponsorImages} />
          </div>
        </div>
      </div>
    </section>
  )
}
