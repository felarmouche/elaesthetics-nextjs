import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <header
            // JETZT MÖGLICH: h-[85vh] für Mobile, da wir das passendere Bild haben!
            className="relative h-[85vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
            aria-label="Hero: El Aesthetics Bremen"
        >
            {/*
        === BILD 1: MOBILE VERSION ===
        Wird nur auf kleinen Screens angezeigt (block) und ab Tablet versteckt (md:hidden).
        Hier nutzen wir das "höhere" Bild.
      */}
            <div className="absolute inset-0 block md:hidden">
                <Image
                    src="/assets/cover-cutted.webp" // Das neue, hohe Bild
                    alt="El Aesthetics Bremen"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/*
        === BILD 2: DESKTOP VERSION ===
        Wird auf Mobile versteckt (hidden) und ab Tablet angezeigt (md:block).
        Hier nutzen wir das ursprüngliche breite Bild.
      */}
            <div className="absolute inset-0 hidden md:block">
                <Image
                    src="/assets/chatGPT-picture-small.jpg" // Das ursprüngliche breite Bild
                    alt="El Aesthetics Bremen"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            {/* Dunkles Overlay (bleibt für beide gleich) */}
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

            <div className="relative z-[2] text-center p-8 text-white animate-fade-in-up">
                <h1 className="text-4xl md:text-[4.5rem] font-light tracking-[6px] mb-6 uppercase text-accent">
                    El Aesthetics Bremen
                </h1>
                <p className="text-lg tracking-[2px] mb-12 font-light uppercase">
                    Praxis für ästhetische und regenerative Medizin
                </p>

                <div className="flex justify-center items-center">
                    <Link
                        href="/kontakt"
                        aria-label="Termin bei El Aesthetics Bremen buchen"
                        className="group flex w-[320px] items-center px-12 py-4 bg-transparent text-white font-semibold no-underline text-md tracking-[2px] border-4 border-white rounded-full transition-all duration-300 hover:bg-white/10 hover:border-accent"
                    >
                        Jetzt Termin buchen
                        <ChevronRight className="ml-auto transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>
        </header>
    );
}