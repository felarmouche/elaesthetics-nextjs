import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
      <section id="about" className="py-16 md:py-32 px-[5%] bg-background-primary" aria-labelledby="about-title">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-24 items-start max-w-[1300px] mx-auto">

          <div className='bg-background-secondary p-6 md:p-12 rounded-sm'>
            <h2 className="text-4xl font-normal mb-8 text-accent-dark uppercase tracking-[2px]">
              Über <br />
              El Aesthetics
            </h2>

            {/* Originalzitat (wieder voll) */}
            <blockquote className="text-text-secondary mb-6 md:mb-8 font-light italic border-l-4 border-accent-dark pl-4">
              „Attraktiv in jedem Alter“ ist meine Devise, die ich selbst lebe und mit der ich für meine Patienten stets mein Bestes gebe.
            </blockquote>

            {/* Block 1: Zielsetzung & Individualität */}
            <p className="text-text-primary leading-relaxed mb-4 text-lg">
              Wir nehmen uns natürliche Ergebnisse zum Ziel, damit Sie sich in Ihrer „neuen“ Haut wohlfühlen. Es geht darum, dem Alter entsprechend vital, frisch und sympathisch auszusehen. Gemeinsam entwickeln wir einen individuellen Plan, der genau Ihrem Typ entspricht und nur das enthält, was Ihnen wirklich hilft.
            </p>

            {/* Block 2: Medizinische Kompetenz & Ganzheitlichkeit (Wieder mit Fachbegriffen, aber gestrafft) */}
            <p className="text-text-primary leading-relaxed mb-4 text-lg">
              Um optimale Behandlungsergebnisse zu erzielen, reicht es oft nicht, nur einzelne Falten zu behandeln – ein ganzheitlicher Ansatz ist erforderlich.
            </p>

            {/* Block 3: Vertrauen & Zeit (Der USP) */}
            <p className="text-text-primary leading-relaxed mb-4 text-lg">
              Da kein Gesicht dem anderen gleicht und medizinische Eingriffe Verantwortung bedeuten, lege ich größten Wert auf Aufklärung. Ihr erster Besuch dauert vielleicht etwas länger als gewohnt, doch für ein sicheres Ergebnis nehme ich mir diese Zeit gerne. Und Sie sollten es auch!
            </p>

            {/* Block 4: Atmosphäre & Abschluss */}
            <p className="text-text-primary leading-relaxed mb-6 text-lg">
              Mir liegt es am Herzen, Ihnen eine persönliche Betreuung in entspannter Atmosphäre zu bieten – unter Verwendung ausschließlich hochwertiger Produkte marktführender Hersteller. Menschen jeden Alters und Geschlechts sind in meiner Praxis herzlich willkommen.
            </p>

            <div className="flex justify-center md:justify-start my-8 md:mt-10">
              <Link
                  href="/kontakt"
                  aria-label="Termin bei El Aesthetics Bremen buchen"
                  className="w-full md:w-auto px-8 inline-block flex items-center justify-center py-3 uppercase text-primary text-sm tracking-[2px] border-2 rounded-xs border-secondary transition-all duration-300 bg-secondary text-primary hover:text-secondary hover:bg-primary"
              >
                Beratungstermin vereinbaren
              </Link>
            </div>
          </div>

          {/* Bild */}
          <div className="w-full aspect-square my-auto bg-[#f5e6d8] rounded-lg flex items-center justify-center text-[#999] text-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] md:sticky md:top-32">
            <Image
                className="h-full w-full object-cover rounded-lg"
                width={400}
                height={500}
                src="/assets/Profilbild engere auswahl/IMG_7336.jpg"
                alt="Portrait der Ärztin Ola El-Armouche"
                priority
            />
          </div>

        </div>
      </section>
  )
}