"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
    return (
        <header
            className="relative h-[85vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
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

            <div className="absolute inset-0 bg-black/40 z-[1]" />

            <div className="relative z-[2] text-center p-8 text-white max-w-4xl mx-auto animate-fade-up">
                <h1 className="text-4xl md:text-[4.5rem] tracking-[6px] mb-6 uppercase text-accent">
                    El Aesthetics Bremen
                </h1>

                <p className="text-lg tracking-[2px] mb-12 font-light uppercase">
                    Praxis für ästhetische und regenerative Medizin
                </p>

                <div className="flex justify-center items-center">
                    <Link
                        href="/kontakt"
                        aria-label="Termin bei El Aesthetics Bremen buchen"
                        className="group flex w-[320px] items-center justify-center px-12 py-4 bg-transparent text-white font-semibold no-underline text-md tracking-[2px] border-2 border-white rounded-full transition-colors duration-300 hover:bg-white/10 hover:border-accent"
                    >
                        Jetzt Termin buchen
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </header>
    );
}