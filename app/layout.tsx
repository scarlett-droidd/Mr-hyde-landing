import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Creepster } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const creepster = Creepster({ weight: "400", subsets: ["latin"], variable: "--font-creepster" })

export const metadata: Metadata = {
  title: "Mr. Hyde Tattoo Cartridges | B2B Distribution",
  description: "Rendimiento implacable, precisión absoluta. Conviértete en distribuidor de los cartuchos de tatuaje Mr. Hyde.",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased ${creepster.variable}`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
