import Link from 'next/link';
import Image from 'next/image';
export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-[5%] bg-background-primary" aria-labelledby="about-title">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 md:gap-24 items-center max-w-[1300px] mx-auto">
        <div className=' bg-background-secondary p-6 md:p-12'>
          <h2 className="text-4xl font-normal mb-8 text-accent-dark uppercase tracking-[2px]">
            Über <br />
            El Aesthetics
          </h2>
          <blockquote className="text-text-secondary mb-6 md:mb-8 font-light italic border-l-4 border-accent-dark pl-4">
            „Der einzige Weg, großartige Arbeit zu leisten, ist zu lieben, was man tut.“
            <span className="block mt-2 text-sm text-text-primary">- Steve Jobs</span>
          </blockquote>
          <p className="text-text-primary leading-relaxed mb-4 md:mb-6 text-lg">
            El Aesthetics ist Ihre Privatpraxis für ästhetische Medizin im
            Herzen von Bremen. Wir verstehen Schönheit als eine Kunst, die
            Fachkenntnis, Präzision und ein tiefes Verständnis für individuelle
            Bedürfnisse erfordert.
          </p>
          <p className="text-text-primary leading-relaxed mb-4 md:mb-6 text-lg">
            Unsere erfahrene Ärztin kombiniert medizinische Expertise mit einem
            ästhetischen Gespür, um natürliche und harmonische Ergebnisse zu
            erzielen. In unserer modernen Praxis legen wir besonderen Wert auf
            persönliche Beratung, höchste Qualitätsstandards und Ihre Zufriedenheit.
          </p>
          <p className="text-text-primary leading-relaxed mb-4 md:mb-6 text-lg">
            Entdecken Sie die Möglichkeiten moderner ästhetischer Medizin in
            einer diskreten und angenehmen Atmosphäre.
          </p>
          <div className="flex justify-center md:justify-start my-12 md:my-8">
            <Link
              href="/kontakt"
              aria-label="Termin bei El Aesthetics Bremen buchen"
              className="w-full inline-block flex items-center text-center py-3 uppercase text-primary text-sm tracking-[2px] border-2 rounded-xs border-secondary transition-all duration-300 bg-secondary text-primary hover:text-secondary hover:bg-primary"
            >
              Beratungstermin vereinbaren
            </Link>
          </div>
        </div>
        <div className="w-full aspect-[9/11] bg-[#f5e6d8] rounded-lg flex items-center justify-center text-[#999] text-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
          <Image
            className="h-full w-full object-cover"
            width={400}
            height={500}
            src="/elaesthetics-bremen-github/assets//Profilbild engere auswahl/IMG_7336.webp"
            alt="Portrait der Ärztin Ola El-Armouche" />
        </div>
      </div>

    </section>
  )
}