import Image from 'next/image';
export default function Welcome() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-24 items-center bg-background-primary lg:bg-[linear-gradient(to_right,#f9f4f0_50%,#fff_50%)] py-16 md:py-32 px-[8%]">
      <div className="w-full ">
        <h2 className="text-[2.8rem] font-normal mb-8 leading-[1.3] text-accent-dark">
          Herzlich<br />Willkommen
        </h2>

        <p className="mb-4 md:mb-6 text-text-primary">
          Willkommen bei EL Aesthetics – Ihrer Privatpraxis für ästhetische und regenerative Medizin in Bremen.
        </p>

        <p className="mb-4 md:mb-6 text-text-primary">
          Hier stehen Sie mit Zeit, Sorgfalt und Verantwortung im Mittelpunkt. Die Sehnsucht nach Frische und natürlicher Ausstrahlung ist tief in uns verankert – die Wege dorthin sind so individuell wie jeder Mensch. Haut, Gewebe und Haare verändern sich im Laufe der Zeit, und mit ihnen oft auch das eigene Wohlbefinden. Moderne ästhetische Medizin bietet heute weit mehr als reine Korrektur: Sie setzt dort an, wo Regeneration entsteht.
        </p>

        <p className="mb-4 md:mb-6 text-text-primary">
          Die regenerative Medizin nutzt körpereigene Prozesse, um Hautqualität, Elastizität und Vitalität nachhaltig zu unterstützen. Sie kann die Reparatur von Hautstrukturen fördern, das Bindegewebe stärken, Haarwachstum anregen und das Hautbild bei Narben oder Pigmentveränderungen sichtbar verfeinern – nicht durch Überdeckung, sondern durch Aktivierung.
        </p>

        <p className="mb-4 md:mb-6 text-text-primary">
          Der wichtigste Partner auf diesem Weg ist Ihr eigener Körper.
        </p>
      </div>

      <div className="w-full">
        <div className="relative w-full aspect-[5/6] bg-[#e8d5c4] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden">
          <Image
            src="/assets/profilbild/IMG_7336.webp"
            width={800}
            height={960}
            alt="Schwarz Weiß Portrait von dem Gesicht einer Frau"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

    </section>
  );
}
