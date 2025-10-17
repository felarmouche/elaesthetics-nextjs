import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header
      className="relative h-[60vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero: El Aesthetics Bremen"
    >
      {/* „Background“-Bild via next/image → SEO + LCP */}
      <Image
        src="/assets/chatGPT-picture-small.webp"
        alt="El Aesthetics Bremen – Praxis für ästhetische und regenerative Medizin"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />

      {/* dunkles Overlay, dekorativ */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-[2] text-center p-8 text-white animate-fade-in-up">
        <h1 className="text-4xl md:text-[4.5rem] font-light tracking-[6px] mb-6 uppercase text-accent">
          El Aesthetics Bremen
        </h1>
        <p className="text-lg tracking-[2px] mb-12 font-light uppercase">
          Praxis für ästhetische und regenerative Medizin
        </p>

        <div className="flex justify-center items-center ">
            <Link
            href="/kontakt"
            aria-label="Termin bei El Aesthetics Bremen buchen"
            className="group flex w-[320px] items-center px-12 py-4 bg-transparent text-white font-semibold no-underline text-md tracking-[2px] border-4 border-white rounded-full transition-all duration-300 hover:bg-white/10 hover:border-accent"
            >
            Jetzt Termin buchen
            <ChevronRight className="ml-auto transition-transform duration-300 group-hover:translate-x-2"/>
            </Link>
        </div>
      </div>
    </header>
  );
}
