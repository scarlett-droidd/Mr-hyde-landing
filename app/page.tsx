import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import DistributorsTicker from "@/components/DistributorsTicker"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DistributorsTicker
        distributors={[
          { name: "Distribuidor 1", logoUrl: "/logos-distribuidores/1.png" },
          { name: "Distribuidor 2", logoUrl: "/logos-distribuidores/2.png" },
          { name: "Distribuidor 3", logoUrl: "/logos-distribuidores/3.png" },
          { name: "Distribuidor 4", logoUrl: "/logos-distribuidores/4.png" },
          { name: "Distribuidor 5", logoUrl: "/logos-distribuidores/5.png", scale: 1.5 },
        ]}
      />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
