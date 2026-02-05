"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    // Die Animation: Startet unsichtbar & tiefer (y: 30), fährt hoch auf Position 0
    const animVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <header
            className="relative h-[85vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
            aria-label="Hero: El Aesthetics Bremen"
        >
            {/*
        === BILDER (STATISCH) ===
        Kein Zoom, keine Animation. Das ist maximal performant.
        Browser rendert es einmal und fertig.
      */}

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

            {/*
        === OVERLAY ===
        Einfaches Schwarz mit Transparenz.
        Kein "backdrop-blur", das spart Rechenleistung auf Handys.
      */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            {/*
        === TEXT & INHALT ===
        Der Container steuert das Timing (staggerChildren).
        delayChildren: 0.2 sorgt dafür, dass das Bild kurz wirken kann, bevor Text kommt.
      */}
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
                className="relative z-[2] text-center p-8 text-white max-w-4xl mx-auto"
            >
                {/* TITEL */}
                <motion.h1
                    variants={animVariants}
                    className="text-4xl md:text-[4.5rem] tracking-[6px] mb-6 uppercase text-accent"
                >
                    El Aesthetics Bremen
                </motion.h1>

                {/* UNTERTITEL */}
                <motion.p
                    variants={animVariants}
                    className="text-lg tracking-[2px] mb-12 font-light uppercase"
                >
                    Praxis für ästhetische und regenerative Medizin
                </motion.p>

                {/* BUTTON */}
                <motion.div variants={animVariants} className="flex justify-center items-center">
                    <Link
                        href="/kontakt"
                        aria-label="Termin bei El Aesthetics Bremen buchen"
                        className="group flex w-[320px] items-center justify-center px-12 py-4 bg-transparent text-white font-semibold no-underline text-md tracking-[2px] border-2 border-white rounded-full transition-colors duration-300 hover:bg-white/10 hover:border-accent"
                    >
                        Jetzt Termin buchen
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </motion.div>
        </header>
    );
}