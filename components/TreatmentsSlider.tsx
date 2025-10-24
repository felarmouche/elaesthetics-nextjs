'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SWIPE_THRESHOLD = 50;

interface TreatmentSlide {
  src: string;
  alt: string;
  text: string;
  linkUrl: string;
  width?: number;
  height?: number;
}

const treatments: TreatmentSlide[] = [
  { src: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp', alt: 'Behandlungsbild für Botox mit einer älteren Frau und einem älteren Mann', text: 'Botulinumtoxin', linkUrl: '/botulinumtoxin', width: 1920, height: 1080 },
  { src: '/assets/hyaluron/hyaluron-filler_hero.webp', alt: 'Behandlungsbild einer Frau für eine Hyaluron-Behandlung', text: 'Hyaluron', linkUrl: '/hyaluron', width: 1920, height: 1080 },
  { src: '/assets/fett-weg-spritze/fett-weg-spritze_hero.webp', alt: 'Abbildung zum Thema Fett-weg-Spritze', text: 'Fett-weg-Spritze', linkUrl: '/fett-weg-spritze', width: 1920, height: 1080 },
  { src: '/assets/eigenbluttherapie/eigenbluttherapie-vampire-lifting_hero.webp', alt: 'PRF Eigenbluttherapie', text: 'PRF (Eigenbluttherapie)', linkUrl: '/eigenbluttherapie', width: 1920, height: 1080 },
  { src: '/assets/mesotherapie/mesotherapie-haut_hero.webp', alt: 'Mesotherapie Behandlung', text: 'Mesotherapie', linkUrl: '/mesotherapie', width: 1920, height: 1080 },
  { src: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp', alt: 'Medizinisches Microneedling', text: 'Medizinisches Microneedling', linkUrl: '/medizinisches-microneedling', width: 1920, height: 1080 },
  { src: '/assets/polynukleotide/polynukleotide_hero.webp', alt: 'Polynukleotide (PDRN/PN)', text: 'Polynukleotide', linkUrl: '/polynukleotide', width: 1920, height: 1080 },
  { src: '/assets/chemisches-peeling/chemisches-peeling_hero.webp', alt: 'Chemisches Peeling', text: 'Chemisches Peeling', linkUrl: '/chemisches-peeling', width: 1920, height: 1080 },
  { src: '/assets/kollagenstimulation/kollagenstimulation_hero.webp', alt: 'Kollagenstimulation (Biostimulatoren)', text: 'Kollagenstimulation', linkUrl: '/kollagenstimulation', width: 1920, height: 1080 },
];

export default function TreatmentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % treatments.length);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handlePrev = () => { setIsAutoPlaying(false); prevSlide(); };
  const handleNext = () => { setIsAutoPlaying(false); nextSlide(); };

  // Touch Handling
  const startXRef = useRef<number | null>(null);
  const endXRef   = useRef<number | null>(null);
  const didSwipeRef = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const x = e.targetTouches[0].clientX;
    startXRef.current = x;
    endXRef.current = x;
    didSwipeRef.current = false;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    endXRef.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const start = startXRef.current;
    const end = endXRef.current;
    if (start == null || end == null) return;
    const delta = start - end;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      didSwipeRef.current = true;
      setIsAutoPlaying(false);
      if (delta > 0) nextSlide(); else prevSlide();
    }
    startXRef.current = null;
    endXRef.current = null;
  };

  // Zeige 3 Karten auf Desktop, nur die erste auf Mobile
  const visibleIndices = [0, 1, 2].map((i) => (currentIndex + i) % treatments.length);

  const preventClickAfterSwipe = (e: React.MouseEvent) => {
    if (didSwipeRef.current) {
      e.preventDefault();
      didSwipeRef.current = false;
    }
  };

  return (
    <section
      className="relative w-full mx-auto py-16 md:py-32 px-[5%]"
      aria-label="Slider für verschiedene Behandlungen"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      <div className="relative w-full flex flex-col">
        <h2 className="text-4xl text-accent-dark uppercase p-4 my-4">
          weitere <br /> Behandlungen
        </h2>

        <div
          className="relative w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {visibleIndices.map((i, idx) => {
              const service = treatments[i];
              // idx 0 = immer sichtbar, idx 1/2 = nur ab md
              const visibility = idx === 0 ? 'block' : 'hidden md:block';
              return (
                <Link
                  key={`${i}-${service.linkUrl}`}
                  href={service.linkUrl}
                  onClick={preventClickAfterSwipe}
                  className={`group relative ${visibility} overflow-hidden rounded-xl aspect-square cursor-pointer transition-transform duration-500 hover:-translate-y-2`}
                >
                  {/* Bild */}
                  <Image
                    fill
                    src={service.src}
                    alt={service.alt}
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    loading="lazy"
                  />
                  {/* dunkler Verlauf + Text */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 flex flex-col justify-end p-6 md:p-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-light mb-3 uppercase tracking-[2px]">
                      {service.text}
                    </h3>
                    <div className="text-sm tracking-[2px] uppercase font-light inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
                      Mehr erfahren →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark z-10"
            aria-label="Vorheriges"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark z-10"
            aria-label="Nächstes"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
