import Image from 'next/image';
export default function Welcome() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-24 items-center bg-background-primary lg:bg-[linear-gradient(to_right,#f9f4f0_50%,#fff_50%)] py-16 md:py-32 px-[8%]">
      <div className="w-full ">
        <h2 className="text-[2.8rem] font-normal mb-8 leading-[1.3] text-accent-dark">
          Herzlich<br />Willkommen
        </h2>

        <p className="font-light mb-4 md:mb-6 leading-[1.9] text-text-primary text-base">
          Willkommen bei El Aesthetics, Ihrer Privatpraxis für ästhetische
          Medizin in Bremen. Hier stehen Sie und Ihre individuellen Bedürfnisse
          im Mittelpunkt.
        </p>

        <p className="font-light mb-4 md:mb-6 leading-[1.9] text-text-primary text-base">
          Der Wunsch nach strahlender, gesunder Haut sowie einer jugendlichen und vitalen Ausstrahlung ist in uns allen tief verankert. Die Techniken und Verfahren im Bereich der Ästhetik haben sich in den letzten Jahren kontinuierlich weiterentwickelt. Regenerative Medizin gewinnt dabei immer mehr an Bedeutung.
        </p>

        <p className="font-light mb-4 md:mb-6 leading-[1.9] text-text-primary text-base">
          Sie umfasst verschiedene innovative Behandlungen, die sich die natürliche Heilkraft zunutze machen, die jeder Mensch besitzt, nämlich die Fähigkeit zur Regeneration. Das bedeutet unter anderem Reparatur von Hautschäden und Elastizitätsverlust des Bindegewebes, Förderung von Haarwachstum, Verbesserung von Narben oder Hyperpigmentierungen, um nur einiges zu nennen.
        </p>

        <p className="font-light mb-4 md:mb-6 leading-[1.9] text-text-primary text-base">
          Die auf Sie zugeschnittene Kombination aus bewährten Behandlungsmethoden und neuen Therapiemöglichkeiten in der Ästhetischen Medizin ist der Schlüssel, Ihrem persönlichen Ideal näher zu kommen. Der stärkste Verbündete auf dem Weg dahin ist Ihr eigener Körper.
        </p>

        <p className="font-light mb-4 md:mb-6 leading-[1.9] text-text-primary text-base">
          Wir freuen uns auf Ihren Besuch in unserer modernen Praxis für
          ästhetische Medizin in Bremen.
        </p>
      </div>

      <div className="w-full">
  <div className="relative w-full aspect-[5/6] bg-[#e8d5c4] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden">
    <Image
      src="/elaesthetics-bremen-github/assets//cover.webp"
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
