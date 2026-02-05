'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface TreatmentSlide {
  src: string;
  alt: string;
  text: string;
  linkUrl: string;
}

const treatments: TreatmentSlide[] = [
  { src: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp', alt: 'Botox Behandlung', text: 'Botulinumtoxin', linkUrl: '/botulinumtoxin' },
  { src: '/assets/hyaluron/hyaluron-filler_hero.webp', alt: 'Hyaluron Behandlung', text: 'Hyaluron', linkUrl: '/hyaluron' },
  { src: '/assets/fett-weg-spritze/fett-weg-spritze_hero.webp', alt: 'Fett-weg-Spritze', text: 'Fett-weg-Spritze', linkUrl: '/fett-weg-spritze' },
  { src: '/assets/eigenbluttherapie/eigenbluttherapie-vampire-lifting_hero.webp', alt: 'PRF Eigenbluttherapie', text: 'PRF (Eigenbluttherapie)', linkUrl: '/eigenbluttherapie' },
  { src: '/assets/mesotherapie/mesotherapie-haut_hero.webp', alt: 'Mesotherapie', text: 'Mesotherapie', linkUrl: '/mesotherapie' },
  { src: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp', alt: 'Microneedling', text: 'Medizinisches Microneedling', linkUrl: '/medizinisches-microneedling' },
  { src: '/assets/polynukleotide/polynukleotide_hero.webp', alt: 'Polynukleotide', text: 'Polynukleotide', linkUrl: '/polynukleotide' },
  { src: '/assets/chemisches-peeling/chemisches-peeling_hero.webp', alt: 'Chemisches Peeling', text: 'Chemisches Peeling', linkUrl: '/chemisches-peeling' },
  { src: '/assets/kollagenstimulation/kollagenstimulation_hero.webp', alt: 'Kollagenstimulation', text: 'Kollagenstimulation', linkUrl: '/kollagenstimulation' },
];

export default function TreatmentSlider() {
  // Embla Hook Setup mit Loop und Autoplay Plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  ]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Update Button States (optional bei Loop, aber gut für Accessibility)
  const onSelect = useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
      <section
          className="relative w-full mx-auto py-16 md:py-32 px-[5%]"
          aria-label="Slider für verschiedene Behandlungen"
      >
        <div className="relative w-full flex flex-col gap-6">

          {/* Header und Navigation in einer Zeile (optional) oder untereinander */}
          <div className="flex justify-between items-end px-2">
            <h2 className="text-4xl text-accent-dark uppercase font-light leading-tight">
              weitere <br /> <span className="font-medium">Behandlungen</span>
            </h2>

            {/* Buttons Desktop: Oben rechts positioniert für eleganteren Look */}
            <div className="hidden md:flex gap-2">
              <button
                  onClick={scrollPrev}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="Vorheriges"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                  onClick={scrollNext}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 p-3 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  aria-label="Nächstes"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Slider Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing rounded-2xl" ref={emblaRef}>
            {/* Slider Container (Flexbox) */}
            <div className="flex -ml-4"> {/* Negative Margin für Gap-Ausgleich */}
              {treatments.map((service, index) => (
                  <div
                      key={`${index}-${service.linkUrl}`}
                      className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 pl-4" // Padding Left als Gap
                  >
                    <Link
                        href={service.linkUrl}
                        className="group relative block w-full aspect-square overflow-hidden rounded-xl shadow-md"
                    >
                      {/* Bild mit sanftem Zoom-Effekt */}
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                        <Image
                            fill
                            src={service.src}
                            alt={service.alt}
                            className="object-cover"
                            sizes="(min-width: 768px) 33vw, 100vw"
                            loading="lazy"
                        />
                      </div>

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />

                      {/* Text Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-light mb-2 uppercase tracking-wider translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                          {service.text}
                        </h3>
                        <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300 ease-in-out">
                      <span className="text-sm tracking-[2px] uppercase font-light inline-flex items-center gap-2 translate-y-4 transition-transform duration-300 group-hover:translate-y-0 text-white/90">
                        Mehr erfahren →
                      </span>
                        </div>
                      </div>
                    </Link>
                  </div>
              ))}
            </div>
          </div>

          {/* Buttons Mobile: Unten zentriert */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
                onClick={scrollPrev}
                className="bg-white/90 text-gray-800 p-3 rounded-full shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={scrollNext}
                className="bg-white/90 text-gray-800 p-3 rounded-full shadow-lg active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>
  );
}