import type { Metadata } from 'next';
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
  ConsultationSection,
  CTASection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  LocationSection,
  LocationSectionProps,
  ProcessSection,
  ProcessSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSectionProps,
  TreatmentsSection
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title:
    'Skinbooster in Bremen | Hydratation & Glow mit Hyaluron | EL Aesthetics',
  description:
    'Sanfte Hautauffrischung mit Skinboostern: mehr Feuchtigkeit, feinere Struktur und frische Ausstrahlung – minimal-invasiv, ärztlich und transparent nach GOÄ. Jetzt Beratung vereinbaren.',
  keywords:
    'Skinbooster, Hyaluronbehandlung, Hautauffrischung, Feuchtigkeitskur, Glow, feine Linien, Knitterfältchen, Hals, Dekolleté, Hände, Bremen',
  openGraph: {
    title:
      'Skinbooster – Hydratation & Glow | EL Aesthetics Bremen',
    description:
      'Hyaluron-Skinbooster für langanhaltende Feuchtigkeit und glattere Haut. Für Gesicht, Hals, Dekolleté & Hände – ärztlich und minimal-invasiv.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/skinbooster/og-skinbooster-bremen.png',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/skinbooster',
  },
};

export default function SkinboosterBremenPage() {
  const heroData: HeroSectionProps = {
    title: 'Skinbooster in Bremen',
    subtitle:
      'Tiefenfeuchtigkeit & frischer Glow: glattere, prallere Haut an Gesicht, Hals, Dekolleté & Händen – minimal-invasiv.',
    imageSrc: '/assets/hyaluron/hyaluron-skinbooster_hero.png',
    imageAlt:
      'Skinbooster-Behandlung – sanfte Hautauffrischung mit Hyaluron',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist ein Hyaluron-Skinbooster?',
    content: [
      'Skinbooster sind sehr oberflächliche Mikroinjektionen mit unvernetzter Hyaluronsäure. Sie füllen die Feuchtigkeitsdepots der Haut auf, verbessern Elastizität und verfeinern das Hautbild – ohne Volumenaufbau.',
      'So werden feine Linien geglättet, der Teint wirkt ebenmäßiger und die Ausstrahlung frischer. Geeignet für Gesicht, Hals, Dekolleté und Hände.',
      'Die Methode ist gut verträglich und dezent in der Wirkung – ideal für einen natürlichen Glow.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsareale & Anliegen',
    categories: [
      {
        category: 'Gesicht',
        items: [
          { title: 'Feine Linien & Knitterfältchen' },
          { title: 'Fahle Haut & Glow' },
          { title: 'Porenbild & Struktur' },
        ],
      },
      {
        category: 'Hals & Dekolleté',
        items: [
          { title: 'Knitterfältchen am Hals' },
          { title: 'Glatteres, elastischeres Dekolleté' },
        ],
      },
      {
        category: 'Hände',
        items: [
          { title: 'Feuchtigkeits-Boost & ebenere Oberfläche' },
        ],
      },
      {
        category: 'Besondere Indikationen',
        items: [
          { title: 'eingesunkene Aknenarben (adjunktiv)' },
          { title: 'unterstützend bei Pigmentunregelmäßigkeiten*' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Die Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 180€*', iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: '45–60 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkeintritt', description: '3–4 Wochen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Sitzungen', description: '1–4 in der Aufbauphase (produktabhängig)', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Anästhesie', description: 'auf Wunsch (Betäubungscreme)', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'meist sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; individuelle Abrechnung nach GOÄ.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der klassischen Skinbooster-Behandlung',
    steps: [
      {
        number: '01',
        title: 'Analyse & Zieldefinition',
        description:
          'Hydratation, Glow, Struktur: Wir legen Areale, Produktauswahl und Anzahl der Sitzungen fest.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung/Desinfektion; auf Wunsch Betäubungscreme (Einwirkzeit ca. 30 Min).',
      },
      {
        number: '03',
        title: 'Mikroinjektionen',
        description:
          'Sehr feine Depots werden in kurzen Abständen oberflächlich gesetzt.',
      },
      {
        number: '04',
        title: 'Kühlung & Aufbauphase',
        description:
          'Kurze Kühlung; je nach Hautbild 1–4 Sitzungen in Abständen. Der Effekt entwickelt sich über 3–4 Wochen.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '7 Tage vorher nach Rücksprache keine Blutverdünner.' },
        { title: 'Kosmetische Procedere', description: 'Keine Peelings, Mikrodermabrasion oder Laser vorab; Sonne/Solarium meiden.' },
        { title: 'Alkohol', description: '24 h vorher keinen Alkohol.' },
        { title: 'Gesundheit', description: 'Kein akuter Infekt/Herpes.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Kühlung & UV-Schutz', description: 'Areale kühlen; direkte Sonne vermeiden und hohen UV-Schutz nutzen.' },
        { title: 'Sport/Sauna', description: 'Etwa 3 Tage auf Sport und Sauna verzichten.' },
        { title: 'Hautpflege', description: 'Sanfte Pflege; in den ersten Stunden kein Make-up auf die Einstichstellen.' },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Caro F.',
      rating: 5,
      text:
        'Nach 3 Wochen ein richtiger Glow und feinere Poren. Natürliches Ergebnis ohne Ausfallzeit.',
      date: '2025-06-10',
    },
    {
      id: 2,
      name: 'Nermin A.',
      rating: 5,
      text:
        'Dekolleté wirkt glatter und frischer. Die Mikroinjektionen waren gut auszuhalten.',
      date: '2025-04-02',
    },
    {
      id: 3,
      name: 'Silke W.',
      rating: 5,
      text:
        'Für meine Hände ideal – sehen direkt gepflegter aus. Zwei Sitzungen haben gereicht.',
      date: '2025-02-18',
    },
    {
      id: 4,
      name: 'Jana L.',
      rating: 5,
      text:
        'Klare Aufklärung, realistische Erwartung – der Effekt kam nach einigen Wochen. Sehr zufrieden.',
      date: '2024-11-05',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Skinbooster in Bremen',
    description: [
      'Ich plane Skinbooster individuell: Hauttyp, Areale sowie Aufbau- und Erhaltungsphase.',
      'Transparente Erwartungswerte: dezente, natürlich wirkende Verbesserung über Wochen mit klaren Nachsorge-Empfehlungen.',
      'Abrechnung nach GOÄ, hochwertige Präparate und sterile, minimal-invasive Technik.',
    ],
    ctaText: 'Jetzt Beratungstermin buchen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt:
      'Ärztin Ola El-Armouche – Skinbooster-Beratung',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Hyaluron-Behandlungen',
    treatments: [
      {
        imageUrl: "/assets/hyaluron/hyaluron-filler_hero.png",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluronsäure-Filler (Falten & Volumen)",
        description: "Die Behandlung mit Hyaluron-Fillern ist ein bewährtes Verfahren, um Falten wie Nasolabial- oder Marionettenfalten zu unterfüttern und Volumendefizite auszugleichen. Mit diesem Wirkstoff erzielen wir in Bremen beeindruckende und natürliche Effekte – in einem risikoarmen, minimal-invasiven Eingriff. Freuen Sie sich auf sofort sichtbare Ergebnisse.",
        treatmentUrl: "/hyaluron/filler"
      },
      
      {
        imageUrl: "/assets/hyaluron/hyaluron-profhilo_hero.png",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluron-Remodellierung (BAP-Technik)",
        description: "Remodellierung – auch Bioremodulierung genannt – ist eine gewebestimulierende Hyaluron-Behandlung, die die Hautqualität sichtbar verbessert: mehr Elastizität, feinere Linien, gleichmäßigerer Teint. Im Gegensatz zu Volumenbehandlungen steht nicht die Formung im Vordergrund, sondern die Qualität des Gewebes.",
        treatmentUrl: "/hyaluron/profhilo"
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-hylase_hero.png",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hylase-Flasche",
        title: "Hylase (Hyaluronidase)",
        description: "Hyaluronidase, häufig als Hylase bezeichnet, ist ein natürlich im menschlichen Körper vorkommendes Enzym, das die Fähigkeit besitzt, Hyaluronsäure gezielt aufzulösen und abzubauen.",
        treatmentUrl: "/hyaluron/hylase"
      }
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen',
    faqs: [
      {
        question: 'Wann zeigt sich der Effekt?',
        answer:
          'Der sichtbare Effekt baut sich über 3–4 Wochen auf. In der Aufbauphase sind je nach Hautbild 1–4 Sitzungen üblich.',
      },
      {
        question: 'Wie lang dauert die Behandlung und bin ich danach einsatzfähig?',
        answer:
          'Rund 45–60 Minuten (ggf. plus Betäubungszeit). In der Regel sind Sie anschließend sofort wieder gesellschaftsfähig.',
      },
      {
        question: 'Welche Reaktionen können auftreten?',
        answer:
          'Kurzfristig möglich: Rötungen, Schwellungen, kleine Quaddeln oder Hämatome – sie klingen meist binnen weniger Tage ab.',
      },
      {
        question: 'Welche Kosten entstehen?',
        answer:
          'Ab 180€. Der genaue Betrag hängt von Areal, Produkt und Sitzungsanzahl ab; Abrechnung gemäß GOÄ.',
      },
      {
        question: 'Skinbooster, Profhilo oder Filler – was passt zu mir?',
        answer:
          'Skinbooster: Hydratation & Hautqualität (sehr oberflächlich, ohne Volumen). Profhilo: spezielles Remodelling-Konzept (eigene Seite). Filler: Volumen/Kontur & tiefere Falten. Wir beraten individuell.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Mehr Glow & bessere Hautqualität?',
    subtitle:
      'Buchen Sie Ihre persönliche Beratung für Skinbooster in Bremen.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Skinbooster in Bremen: EL Aesthetics',
    description:
      'Zentral gelegen, gut erreichbar aus Horn-Lehe, Oberneuland, Schwachhausen & Umgebung.',
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
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen mit Skinboostern"
        subtitle="Natürlich, subtil, effektiv – echte Stimmen zu Hydratation & Glow."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}
