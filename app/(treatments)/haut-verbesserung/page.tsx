import type { Metadata } from 'next';
import { ConsultationSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Hautverbesserung Bremen | Skinbooster, Profhilo, PRF, Microneedling & Peeling | EL Aesthetics',
  description:
    'Hautverbesserung in Bremen: Skinbooster & Profhilo für Feuchtigkeit, PRF & Polynukleotide für Regeneration, Microneedling & chemische Peelings für Ebenmäßigkeit – medizinisch fundiert, natürlich, individuell.',
  keywords:
    'Hautverbesserung Bremen, Hautverjüngung Bremen, Skinbooster Bremen, Profhilo Bremen, PRF Bremen, Eigenbluttherapie Bremen, Polynukleotide Bremen, PDRN Bremen, Microneedling Bremen, Radiofrequenz Microneedling Bremen, Microbotox Bremen, Chemisches Peeling Bremen, Fruchtsäurepeeling Bremen, Kollagenstimulation Bremen, Sculptra Bremen, Radiesse Bremen, CaHA Bremen, Aknenarben Bremen, Pigmentflecken Bremen, Poren verfeinern Bremen',
  openGraph: {
    title:
      'Hautverbesserung in Bremen – Skinbooster, Profhilo, PRF, Microneedling & Peeling | EL Aesthetics',
    description:
      'Mehr Glow, bessere Hautstruktur & natürliches Strahlen: Entdecken Sie unsere Methoden für Hautqualität – von Skinboostern & Profhilo über PRF/Polynukleotide bis Microneedling & chemische Peelings.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/hautverbesserung/og-image-hautverbesserung-bremen.png'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hautverbesserung',
  },
};

export default function HautverbesserungHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Hautverbesserung in Bremen',
    subtitle:
      'Skinbooster & Profhilo für intensive Hydration, PRF & Polynukleotide für Regeneration, Microneedling & Peelings für Ebenmäßigkeit – Microbotox & Kollagenstimulation für verfeinerte Struktur.',
    imageSrc: '/assets/haut-verbesserung/haut-verbesserung_hero.webp',
    imageAlt: 'Übersicht moderner Behandlungen zur Hautverbesserung bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Hautqualität ganzheitlich verbessern – sanft & medizinisch fundiert',
    content: [
      'Hautverbesserung heißt mehr als „Anti-Aging“: Wir kombinieren hydratisierende Skinbooster (inkl. PROFHILO®), regenerative Verfahren wie PRF (Eigenblut) & Polynukleotide, strukturverbessernde Techniken wie (Radiofrequenz‑)Microneedling sowie Microbotox und chemische Peelings.',
      'Ziel: mehr Feuchtigkeit, Elastizität und Dichte, feinere Poren, gleichmäßiger Teint – und ein natürlich frischer Look ohne „gemacht“-Effekt.',
      'Welche Methode passt? Das hängt von Hautbild, Areal und Ziel ab. Häufig sind Kombinationen sinnvoll – z. B. Skinbooster für Glow, PRF/Polynukleotide für Regeneration und Microneedling/Peeling für Ebenmäßigkeit.',
      'In der Beratung besprechen wir Erwartungen, Behandlungsplan, Intervalle und Downtime – transparent & individuell.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Behandlungen zur Hautverbesserung',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.png',
        imageAlt: 'Skinbooster Behandlung für intensive Feuchtigkeit und Glow',
        title: 'Skinbooster (HA)',
        description:
          'Feuchtigkeits-Boost & feineres Hautbild im Gesicht, Hals & Dekolleté. Verbessert Elastizität und verleiht natürliches Strahlen.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-profhilo_hero.png',
        imageAlt: 'PROFHILO® Behandlung zur Bioremodellierung der Haut',
        title: 'PROFHILO®',
        description:
          'Innovativer Skinbooster zur Bioremodellierung: fördert Kollagen & Elastin, spendet intensiv Feuchtigkeit – ohne Volumenwirkung.',
        treatmentUrl: '/hyaluron/profhilo',
      },
      {
        imageUrl: '/assets/mesotherapie/mesotherapie-haut_hero.png',
        imageAlt: 'Mesotherapie zur Unterstützung der Hautqualität',
        title: 'Mesotherapie',
        description:
          'Feine Mikroinjektionen von Wirkstoff-Cocktails für mehr Frische und Ebenmäßigkeit – individuell abgestimmt.',
        treatmentUrl: '/mesotherapie',
      },
      {
        imageUrl: '/assets/eigenbluttherapie-prf/eigenbluttherapie-prf_hero.png',
        imageAlt: 'Eigenbluttherapie PRF zur Hautregeneration und Unterlid-Behandlung',
        title: 'Eigenbluttherapie (PRF)',
        description:
          'Autologe Regeneration: PRF setzt über Wochen Wachstumsfaktoren frei – ideal für feine Fältchen & sensible Zonen (z. B. Unterlider).',
        treatmentUrl: '/eigenbluttherapie-prf',
      },
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.png',
        imageAlt: '(Radiofrequenz-)Microneedling zur Verbesserung von Struktur & Poren',
        title: 'Medizinisches Microneedling',
        description:
          'Verbessert Struktur, Poren & Aknenarben; optional mit Radiofrequenz für zusätzlichen Straffungseffekt.',
        treatmentUrl: '/medizinisches-microneedling',
      },
      {
        imageUrl: '/assets/botox/botox-microbotox_hero.png',
        imageAlt: 'Microbotox für verfeinerte Poren und weniger Glanz',
        title: 'Microbotox',
        description:
          'Oberflächliche Botulinumtoxin‑Mikrodepots: verfeinern Poren, reduzieren Talg & Glanz – ohne die Mimik zu beeinflussen.',
        treatmentUrl: '/microbotox',
      },
      {
        imageUrl: '/assets/chemisches-peeling/chemisches-peeling_hero.jpg',
        imageAlt: 'Chemisches Peeling zur Ebenmäßigkeit und gegen Pigmentflecken',
        title: 'Chemisches Peeling',
        description:
          'Von sanftem Fruchtsäure‑Peeling bis TCA: für ebenmäßigen Teint, Glow und feinere Linien – mit planbarer Downtime.',
        treatmentUrl: '/chemisches-peeling',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide (PN/PDRN) für Regeneration & Hautqualität',
        title: 'Polynukleotide (PN/PDRN)',
        description:
          'Bioregeneration ohne Volumen: unterstützt Zellaktivität, Hydration & Elastizität – ideal für müde Haut & feine Fältchen.',
        treatmentUrl: '/polynukleotide',
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.png',
        imageAlt: 'Kollagenstimulation z. B. mit CaHA/PLLA für straffere Konturen',
        title: 'Kollagenstimulation',
        description:
          'Strukturbildend durch Kollagenneubildung (z. B. CaHA/PLLA): unterstützt Straffheit & Kontur – Face & Hände.',
        treatmentUrl: '/kollagenstimulation',
      },
    ],
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sophie W.',
      rating: 5,
      text:
        'Skinbooster + Microneedling: Meine Haut wirkt deutlich praller und ebenmäßiger – ohne Downtime im Alltag.',
      date: '2024-09-28',
    },
    {
      id: 2,
      name: 'Clara G.',
      rating: 5,
      text:
        'PRF unter den Augen hat die feinen Knitterfalten sichtbar gemildert. Sehr natürliche Veränderung.',
      date: '2024-08-12',
    },
    {
      id: 3,
      name: 'Miriam L.',
      rating: 5,
      text:
        'Nach dem Peeling ist mein Hautton viel gleichmäßiger, Pigmentflecken sind aufgehellt. Top Aufklärung!',
      date: '2024-07-22',
    },
    {
      id: 4,
      name: 'Daniela R.',
      rating: 4,
      text:
        'Microbotox hat meinen Glanz reduziert und die Poren verfeinert. Ergebnis wirkt sehr natürlich.',
      date: '2024-06-18',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Welche Methode passt zu Ihrer Haut?',
    description: [
      'Als Ärztin für ästhetische Medizin analysiere ich Hauttyp, Hautzustand und Zielsetzung – und bespreche mit Ihnen, welche Verfahren (oder Kombination) sinnvoll sind.',
      'Wir definieren realistische Ziele, Intervalle (Serien/Booster), Downtime & Pflege – für planbare, natürliche Ergebnisse.',
      'Sicherheit steht an erster Stelle: sterile Arbeitsweise, hochwertige Produkte, schonende Techniken.',
    ],
    ctaText: 'Jetzt Beratungsgespräch vereinbaren',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt:
      'Ärztin Ola El-Armouche berät Patientin zu Skinbooster, PRF, Microneedling, Peeling und Microbotox in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Hautverbesserung',
    faqs: [
      {
        question:
          'Skinbooster, PROFHILO®, PRF, Polynukleotide, Microneedling, Peeling, Microbotox – was ist der Unterschied?',
        answer:
          'Skinbooster & PROFHILO® spenden intensiv Feuchtigkeit und unterstützen Elastizität; PRF und Polynukleotide wirken regenerativ (Hautdichte, Feuchtigkeit, Feinfältchen). Microneedling (ggf. mit RF) verbessert Struktur, Poren & Narben. Chemische Peelings gleichen Tone & Textur aus. Microbotox verfeinert Poren und reduziert Glanz, ohne die Mimik zu beeinflussen. Die Kollagenstimulation (z. B. CaHA/PLLA) unterstützt Straffheit & Kontur.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig und wie lange hält der Effekt?',
        answer:
          'Skinbooster/PROFHILO®: meist 2–3 Sitzungen, Auffrischung nach 6–9 Monaten. PRF/Polynukleotide: Serien à 2–3 Sitzungen, Effekt baut sich über Wochen auf. Microneedling: 3–4 Sitzungen im Abstand von 4–6 Wochen. Peelings: je nach Tiefe einmalig bis kurativ. Microbotox: ca. alle 3–4 Monate. Kollagenstimulation: Wirkung über Monate, Intervalle individuell.',
      },
      {
        question: 'Gibt es Downtime?',
        answer:
          'Leichte Rötungen/Schwellungen oder kleine Hämatome sind möglich und klingen meist nach 1–3 Tagen ab. Bei mittleren/tiefen Peelings ist mit planbarer Downtime (Schälung) zu rechnen. Wir wählen gemeinsam das passende Protokoll für Ihren Alltag.',
      },
      {
        question: 'Kann man Behandlungen kombinieren?',
        answer:
          'Ja – Kombinationen sind häufig besonders effektiv, z. B. Skinbooster + Microneedling für Glow & Struktur oder PRF/Polynukleotide mit Peelings. Reihenfolge & Intervalle stimme ich individuell ab.',
      },
      {
        question: 'Für welche Areale eignen sich die Verfahren?',
        answer:
          'Gesicht, Hals, Dekolleté und Hände. PRF/Polynukleotide eignen sich auch für sensible Bereiche wie die Unterlider. Microneedling ist zudem bei Aknenarben hilfreich.',
      },
      {
        question: 'Was kosten die Behandlungen?',
        answer:
          'Die Kosten richten sich nach Methode, Material und Umfang. Im Beratungstermin erhalten Sie einen transparenten, individuellen Kostenplan.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Natürlich bessere Haut – ohne künstlichen Look',
    subtitle:
      'Vereinbaren Sie jetzt Ihren Termin zur Hautverbesserung in Bremen: Skinbooster, PROFHILO®, PRF, Microneedling, Peelings, Microbotox, Polynukleotide & Kollagenstimulation.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis für Hautverbesserung in Bremen: EL Aesthetics',
    description:
      'In Schwachhausen nahe Oberneuland/Horn‑Lehe: präzise, sanfte Verfahren für mehr Hautqualität – individuell geplant & sicher durchgeführt.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '0155 66919635',
      email: 'info@elaesthetics-bremen.de',
      openingHours: ['Termine nach Vereinbarung'],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten"
        subtitle="Echte Ergebnisse: mehr Glow, feinere Poren, ebenmäßiger Teint und straffere Konturen – natürlich & subtil."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}
