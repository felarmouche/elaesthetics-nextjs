"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <header
            className="relative min-h-[85vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
            aria-label="Hero: El Aesthetics Bremen"
        >
            {/* Mobile Bild */}
            <div className="absolute inset-0 block md:hidden">
                <Image
                    src="/assets/cover-cutted.webp"
                    alt="El Aesthetics Bremen"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Desktop Bild */}
            <div className="absolute inset-0 hidden md:block">
                <Image
                    src="/assets/chatGPT-picture-small.jpg"
                    alt="El Aesthetics Bremen"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Premium Gradient Overlay für bessere Lesbarkeit */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />

            {/* Text & Content Container */}
            <div className="relative z-[2] flex flex-col items-center justify-center text-center px-6 py-12 md:p-12 w-full max-w-5xl mx-auto gap-12 md:gap-16 animate-fade-up">

                {/* Typografie-Block */}
                <div className="flex flex-col gap-5 md:gap-8 items-center cursor-default">
                    <h1 className="flex flex-col gap-2 md:gap-4 uppercase drop-shadow-2xl">
                        <span className="block text-accent font-light text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] leading-none">
                            EL Aesthetics
                        </span>
                        <span className="block text-white/95 font-light text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] leading-none">
                            Bremen
                        </span>
                    </h1>
                    <p className="max-w-2xl text-sm sm:text-base md:text-xl tracking-[0.05em] sm:tracking-[0.1em] font-light text-white/80 drop-shadow-md">
                        Praxis für ästhetische und regenerative Medizin
                    </p>
                </div>

                {/* Premium Glassmorphism Button */}
                <Link
                    href="/kontakt"
                    aria-label="Termin bei El Aesthetics Bremen buchen"
                    className="group inline-flex w-auto items-center justify-center whitespace-nowrap px-8 sm:px-10 py-4 sm:py-5 bg-white/5 backdrop-blur-md text-white uppercase font-light text-xs sm:text-sm tracking-[0.2em] border border-white/20 rounded-full transition-all duration-500 hover:bg-white hover:text-black hover:border-white shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                    Jetzt Termin buchen
                    <ChevronRight className="ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
            </div>
        </header>
    );
}