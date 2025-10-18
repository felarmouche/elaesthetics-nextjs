'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSlide {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const images: ImageSlide[] = [
    {
        src: '/assets/tinified/DJI_20241219_140752_335.webp',
        alt: 'Luftaufnahme - Drohnenfoto vom 19. Dezember 2024',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_7295.webp',
        alt: 'Galeriebild 2 - Architektur und Design',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_7364.webp',
        alt: 'Galeriebild 3 - Detailaufnahme',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_7775.webp',
        alt: 'Galeriebild 4 - Innenansicht',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_8555.webp',
        alt: 'Galeriebild 5 - Außenbereich',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_8570.webp',
        alt: 'Galeriebild 6 - Designdetail',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_8579.webp',
        alt: 'Galeriebild 7 - Perspektive',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_8618.webp',
        alt: 'Galeriebild 8 - Ambiente',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_8631.webp',
        alt: 'Galeriebild 9 - Gesamtansicht',
        width: 1920,
        height: 1080,
    },
    {
        src: '/assets/tinified/IMG_7295.webp',
        alt: 'Galeriebild 10 - Weitere Ansicht',
        width: 1920,
        height: 1080,
    },
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

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

    return (
        <section
            className="relative w-full mx-auto py-16 md:py-32 bg-background-secondary"
            aria-label="Bildergalerie"
            aria-roledescription="carousel"
        >
            {/* Hauptbild Container */}
            <div className="relative w-full flex flex-col-reverse md:grid md:grid-cols-2 p-8 md:p-16 overflow-hidden ">
                <div className="relative w-full h-full min-h-[220px]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            aria-hidden={index !== currentIndex}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                className="object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                                quality={85}
                            />
                        </div>
                    ))}

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark"
                        aria-label="Vorheriges Bild"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark"
                        aria-label="Nächstes Bild"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="w-full p-6 flex flex-col justify-center">
                    <h2 className="text-4xl font-normal mb-8 leading-[1.3] text-accent-dark uppercase tracking-[2px]">
                        Praxis<br />Einblicke
                    </h2>

                    <p className="font-light mb-6 leading-[1.9] text-text-primary text-base">
                        Entdecken Sie die Welt von El Aesthetics - Ihrem neuen Wohlfühlparadies.
                    </p>

                    <p className="font-light mb-6 leading-[1.9] text-text-primary text-base">
                        Hier erhalten Sie Einblicke in unsere moderne Ausstattung und die liebevollen Details, die bei Ihrem Besuch bei uns für eine angenehme und entspannte Atmosphäre sorgen.
                    </p>

                    <div className="flex w-full justify-center mt-4">
                        <Link
                            href="/kontakt"
                            aria-label="Termin bei El Aesthetics Bremen buchen"
                            className="w-full inline-block flex items-center text-center py-4 uppercase text-accent-dark text-sm tracking-[2px] border-2 border-accent-dark rounded-xs transition-all duration-300 hover:bg-primary hover:text-secondary hover:border-secondary"
                        >
                            Termin vereinbaren
                        </Link>
                    </div>

                </div>

                {/* Slide Counter */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>


            {/* Thumbnail Navigation */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-4 scrollbar-hide items-center justify-start md:justify-center">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${index === currentIndex
                            ? 'scale-105'
                            : 'ring-2 ring-gray-300 hover:ring-gray-400 opacity-70 hover:opacity-100'
                            }`}
                        aria-label={`Gehe zu Bild ${index + 1}`}
                        aria-current={index === currentIndex ? 'true' : 'false'}
                    >
                        <Image
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            sizes="96px"
                            className="object-cover"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>



            {/* Schema.org JSON-LD für SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ImageGallery',
                        name: 'Bildergalerie',
                        description: 'Professionelle Fotogalerie mit Luftaufnahmen und Architekturfotos',
                        image: images.map((img) => ({
                            '@type': 'ImageObject',
                            url: img.src,
                            description: img.alt,
                        })),
                    }),
                }}
            />
        </section>
    );
}