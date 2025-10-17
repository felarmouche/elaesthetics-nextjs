import Link from 'next/link'
import Image from 'next/image'

const services = [
  { id: 1, title: 'Anti-Aging', image: '/assets/pexels/botox.webp', path: '/anti-aging' },
  { id: 2, title: 'Unterspritzungen & Fillers', image: '/assets/faltenunterspritzung/faltenunterspritzung_hero.png', path: '/faltenunterspritzung' },
  { id: 3, title: 'Hautverbesserung', image: '/assets/pexels/hyaluron-rainbow.webp', path: '/haut-verbesserung' },
  { id: 4, title: 'Haarbehandlungen', image: '/assets/pexels/hair.webp', path: '/haarausfall-behandlung' },
  { id: 5, title: 'Bodyshaping & Fettreduktion', image: '/assets/pexels/sculpture.webp', path: '/fett-weg-spritze' },
  { id: 6, title: 'Hylase - Auflösen von Hyaluronsäure', image: '/assets/hyaluron/hyaluron-hylase_hero.png', path: '/hyaluron/hylase' },
  { id: 7, title: 'Medizinische Behandlungen', image: '/assets/pexels/pexels-thirdman-5922099.webp', path: '/medizinische-behandlungen' },
];

export default function Services() {
  return (
    <section id="services" className="bg-background-secondary py-16 md:py-32 px-[5%]">
      <div className="text-left md:text-center mb-0 md:mb-20">
        <h2 className="text-4xl font-normal mb-6 text-accent-dark uppercase tracking-[2px]">
          Unsere Leistungen
        </h2>
        <p className="max-w-[900px] mx-auto mb-4 text-text-primary leading-relaxed text-lg">
          Unsere Praxis für ästhetische Medizin in Bremen bietet Ihnen eine 
          breite Palette an ästhetischen Behandlungen – von minimal-invasiven 
          Verfahren wie Hyaluron-Filler und Botox bis hin zu speziellen 
          Hautpflege Konzepten.
        </p>
        <p className="max-w-[900px] mx-auto mb-4 text-text-primary leading-relaxed text-lg">
          Unser Ziel ist es, Ihre natürliche Schönheit hervorzuheben und Ihnen 
          eine frische, verjüngte Ausstrahlung zu schenken. Lassen Sie sich von 
          uns überzeugen, wie kleine Eingriffe große Veränderungen bewirken können.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
        {services.map((service) => (
          <Link
            key={service.id}
            className="relative overflow-hidden rounded-xl aspect-square cursor-pointer transition-transform duration-400 hover:-translate-y-2 group"
            href={service.path}>
            <Image
              fill
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-400"
            />
            <div className="w-full h-full bg-gradient-to-br from-[#d4a87c] to-[#e8c4a8] flex items-center justify-center text-white text-lg text-center p-8">
              {service.title}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-black/10 flex flex-col justify-end p-10 text-white">
              <h3 className="text-2xl font-light mb-4 uppercase tracking-[2px]">
                {service.title}
              </h3>
              <div className="text-white text-sm tracking-[2px] uppercase font-light inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-4">
                Mehr erfahren →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}