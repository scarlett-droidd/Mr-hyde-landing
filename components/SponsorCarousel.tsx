"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

import { useLanguage } from "@/context/language-context"

export interface SponsorImage {
  url: string
  country: string
  artist: string
}

interface SponsorCarouselProps {
  images: SponsorImage[]
}

export function SponsorCarousel({ images }: SponsorCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const { t } = useLanguage()

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const next = () => {
    setHasInteracted(true)
    setCurrent((c) => (c + 1) % images.length)
    setIsLoaded(false)
  }
  const prev = () => {
    setHasInteracted(true)
    setCurrent((c) => (c - 1 + images.length) % images.length)
    setIsLoaded(false)
  }
  const goTo = (i: number) => {
    setHasInteracted(true)
    setCurrent(i)
    setIsLoaded(false)
  }

  useEffect(() => {
    setIsLoaded(false)
  }, [current])

  // Autoplay effect
  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 4000)

    // Clear interval on unmount or when `current` changes (resets timer on manual interaction)
    return () => clearInterval(timer)
  }, [current, images.length])
  if (images.length === 0) return null

  const img = images[current]
  const nextImg = images[(current + 1) % images.length]

  // Play animation only when in view, if the user hasn't clicked anything yet, and we are on the first slide
  const shouldNudge = isInView && !hasInteracted && current === 0

  return (
    <div className="flex flex-col gap-3 h-full" ref={containerRef}>
      {/* Image area — portrait aspect ratio, contain so nothing is cropped */}
      <div className="relative overflow-hidden rounded-2xl bg-black/60 border border-border/50" style={{ aspectRatio: "3/4" }}>

        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/5 to-white/10 animate-pulse" />
        )}

        {/* Nudge wrapper for the active image */}
        <motion.div
          className="absolute inset-0"
          animate={shouldNudge ? { x: [0, -12, 0, -12, 0] } : { x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={img.url}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={img.url}
                alt={`${img.artist} — ${img.country}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority={current === 0}
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Silent preload of next image */}
        <div className="hidden" aria-hidden>
          <Image
            src={nextImg.url}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain opacity-0 pointer-events-none"
          />
        </div>

        {/* Dots — top center */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-4" : "bg-white/40 w-1.5"
              }`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
            aria-label={t.sponsorCarousel.prevLabel}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
          <motion.button
            onClick={next}
            animate={shouldNudge ? { x: [0, 6, 0, 6, 0] } : { x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
            aria-label={t.sponsorCarousel.nextLabel}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Country + artist — outside the image, always fully visible */}
      <div className="flex items-center justify-between px-1">
        <div>
          <p className="text-foreground font-bold text-sm tracking-widest uppercase">{img.country}</p>
          <p className="text-muted-foreground text-xs">@{img.artist}</p>
        </div>
        <p className="text-muted-foreground text-xs">
          {current + 1} / {images.length}
        </p>
      </div>

      {/* Caption / legend */}
      <p className="text-muted-foreground text-sm leading-relaxed italic border-l-2 border-primary/50 pl-4">
        {t.sponsorCarousel.caption}
      </p>
    </div>
  )
}
