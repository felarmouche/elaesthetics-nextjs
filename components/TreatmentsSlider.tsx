'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface TreatmentSlide {
  src: string;
  alt: string;
  text: string;
  linkUrl: string;
  width?: number;
  height?: number;
}

const treatments: TreatmentSlide[] = [
  // bereits vorhanden
  {
    src: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    alt: 'Behandlungsbild für Botox mit einer älteren Frau und einem älteren Mann',
    text: 'Botulinum',
    linkUrl: '/botulinumtoxin',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//hyaluron/hyaluron-filler_hero.webp',
    alt: 'Behandlungsbild einer Frau für eine Hyaluron-Behandlung',
    text: 'Hyaluron',
    linkUrl: '/hyaluron',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//fett-weg-spritze/fett-weg-spritze_hero.webp',
    alt: 'Abbildung zum Thema Fett-weg-Spritze',
    text: 'Fett-weg-Spritze',
    linkUrl: '/fett-weg-spritze',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-vampire-lifting_hero.webp',
    alt: 'PRF Eigenbluttherapie',
    text: 'PRF (Eigenbluttherapie)',
    linkUrl: '/eigenbluttherapie-prf',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//mesotherapie/mesotherapie-haut_hero.webp',
    alt: 'Mesotherapie Behandlung',
    text: 'Mesotherapie',
    linkUrl: '/mesotherapie',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//medizinisches-microneedling/medizinisches-microneedling_hero.webp',
    alt: 'Medizinisches Microneedling',
    text: 'Medizinisches Microneedling',
    linkUrl: '/medizinisches-microneedling',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//polynukleotide/polynukleotide_hero.webp',
    alt: 'Polynukleotide (PDRN/PN)',
    text: 'Polynukleotide',
    linkUrl: '/polynukleotide',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//chemisches-peeling/chemisches-peeling_hero.webp',
    alt: 'Chemisches Peeling',
    text: 'Chemisches Peeling',
    linkUrl: '/chemisches-peeling',
    width: 1920,
    height: 1080,
  },
  {
    src: '/assets//kollagenstimulation/kollagenstimulation_hero.webp',
    alt: 'Kollagenstimulation (Biostimulatoren)',
    text: 'Kollagenstimulation',
    linkUrl: '/kollagenstimulation',
    width: 1920,
    height: 1080,
  },
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

  const handlePrev = () => {
    setIsAutoPlaying(false);
    prevSlide();
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    nextSlide();
  };

  // Touch-Gesten für Mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  // 3 sichtbare Indizes berechnen (Fenster von 3 Slides)
  const visibleIndices = [0, 1, 2].map((i) => (currentIndex + i) % treatments.length);

  return (
    <section
      className="relative w-full mx-auto py-16 md:py-32 px-[5%]"
      aria-label="Slider für verschiedene Behandlungen"
      aria-roledescription="carousel"
    >
      <div className="relative w-full flex flex-col">
        <h2 className="text-4xl text-accent-dark uppercase p-4 my-4">
          weitere <br />
          Behandlungen
        </h2>

        <div 
          className="relative w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
            {visibleIndices.map((i) => {
              const service = treatments[i];
              return (
                <Link
                  key={`${service.src}-${i}`}
                  className="relative overflow-hidden rounded-xl aspect-square cursor-pointer transition-transform duration-500 hover:-translate-y-2 group md:block hidden"
                  href={service.linkUrl}
                >
                  <Image
                    fill
                    src={service.src}
                    alt={service.alt}
                    className="object-cover transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    loading='lazy'
                  />
                  <div className="w-full h-full bg-gradient-to-br from-[#d4a87c] to-[#e8c4a8] flex items-center justify-center text-white text-lg text-center p-8">
                    {service.text}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 flex flex-col justify-end p-10 text-white">
                    <h3 className="text-2xl font-light mb-4 uppercase tracking-[2px]">
                      {service.text}
                    </h3>
                    <div className="text-white text-sm tracking-[2px] uppercase font-light inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
                      Mehr erfahren →
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Mobile Version - Nur erstes Slide */}
            {(() => {
              const service = treatments[visibleIndices[0]];
              return (
                <Link
                  key={`mobile-${service.src}`}
                  className="relative overflow-hidden rounded-xl aspect-square cursor-pointer md:hidden block"
                  href={service.linkUrl}
                >
                  <Image
                    fill
                    src={service.src}
                    alt={service.alt}
                    className="object-cover"
                    sizes="100vw"
                    loading='lazy'
                  />
                  <div className="w-full h-full bg-gradient-to-br from-[#d4a87c] to-[#e8c4a8] flex items-center justify-center text-white text-lg text-center p-8">
                    {service.text}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-light mb-3 uppercase tracking-[2px]">
                      {service.text}
                    </h3>
                    <div className="text-white text-sm tracking-[2px] uppercase font-light inline-flex items-center gap-2">
                      Mehr erfahren →
                    </div>
                  </div>
                </Link>
              );
            })()}
          </div>

          {/* Navigation Buttons */}
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