import { readdirSync, statSync } from "fs"
import { join } from "path"
import { SponsorImage } from "./SponsorCarousel"
import { ServicesContent } from "./services-content"

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

  return <ServicesContent sponsorImages={sponsorImages} />
}
