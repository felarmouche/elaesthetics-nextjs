import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-[5%] bg-background-primary" aria-labelledby="about-title">
      <div className="flex flex-col max-w-[1300px] mx-auto">
        <h2 className="text-4xl font-normal mb-8 text-accent-dark uppercase tracking-[2px]">
          Über <br />
          EL Aesthetics
        </h2>

        {/* Originalzitat (wieder voll) */}
        <blockquote className="text-text-secondary mb-6 md:mb-8 font-light italic border-l-4 border-accent-dark pl-4">
          „Attraktiv in jedem Alter“ ist meine Devise, die ich selbst lebe und mit der ich für meine Patienten stets mein Bestes gebe.
        </blockquote>

        {/* Block 1: Zielsetzung & Individualität */}
        <p className="text-text-primary mb-4">
          Wir nehmen uns natürliche Ergebnisse zum Ziel, damit Sie sich in Ihrer „neuen“ Haut wohlfühlen. Es geht darum, dem Alter entsprechend vital, frisch und sympathisch auszusehen. Gemeinsam entwickeln wir einen individuellen Plan, der genau Ihrem Typ entspricht und nur das enthält, was Ihnen wirklich hilft.
        </p>

        {/* Block 2: Medizinische Kompetenz & Ganzheitlichkeit (Wieder mit Fachbegriffen, aber gestrafft) */}
        <p className="text-text-primary mb-4">
          Um optimale Behandlungsergebnisse zu erzielen, reicht es oft nicht, nur einzelne Falten zu behandeln – ein ganzheitlicher Ansatz ist erforderlich.
        </p>

        {/* Block 3: Vertrauen & Zeit (Der USP) */}
        <p className="text-text-primary mb-4">
          Da kein Gesicht dem anderen gleicht und medizinische Eingriffe Verantwortung bedeuten, lege ich größten Wert auf Aufklärung. Ihr erster Besuch dauert vielleicht etwas länger als gewohnt, doch für ein sicheres Ergebnis nehme ich mir diese Zeit gerne.
        </p>

        {/* Block 4: Atmosphäre & Abschluss */}
        <p className="text-text-primary mb-6">
          Mir liegt es am Herzen, Ihnen eine persönliche Betreuung in entspannter Atmosphäre zu bieten – unter Verwendung ausschließlich hochwertiger Produkte marktführender Hersteller. Menschen jeden Alters und Geschlechts sind in meiner Praxis herzlich willkommen.
        </p>

        <div className="flex justify-center my-8 md:mt-10">
          <Link
            href="/kontakt"
            aria-label="Termin bei EL Aesthetics Bremen buchen"
            className="group inline-flex w-[300px] items-center justify-center bg-stone-900 px-7 sm:px-9 py-3.5 sm:py-4 text-white font-medium tracking-wide shadow-lg shadow-stone-900/10 hover:shadow-stone-900/20 hover:bg-stone-800 transition"
          >
            Termin vereinbaren
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />

          </Link>
        </div>
      </div>

    </section>
  )
}