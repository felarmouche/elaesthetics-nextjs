import type { Metadata } from 'next';
import {PRICES} from '@/lib/constants'
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
  ConsultationSection,
  HubTeaserSection,
  TableOfContents,
  TOCItem,
  
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  
  
  ProcessSection,
  ProcessSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSectionProps,
  TreatmentsSection
} from '@/components/TreatmentPageComponents';
 

export const metadata: Metadata = {
  title:
    'Skinbooster Behandlung Bremen',
  description:
    'Skinbooster in Bremen: fließfähige Hyaluronsäure für Hydratation und Glow. Buchen sie jetzt ihren persönlichen Beratungstermin!',
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
      'https://elaesthetics-bremen.de/assets/skinbooster/og-skinbooster-bremen.webp',
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
      'Suchen Sie nach einer professionellen Skinbooster-Behandlung für Gesicht, Hals, Dekolleté & Hände? \nDann sind Sie bei El Aesthetics genau richtig.',
    imageSrc: '/assets/hyaluron/hyaluron-skinbooster_hero.webp', 
    imageAlt:
      'Skinbooster-Behandlung – sanfte Hautauffrischung mit Hyaluron',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist eine Hyaluron-Skinbooster-Behandlung?',
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
      { title: 'Preis', description: `ab ${PRICES.hyaluronFiller.skinbooster1ml}`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: '45–60 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkeintritt', description: '3–4 Wochen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Sitzungen', description: '1–4 in der Aufbauphase (produktabhängig)', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Anästhesie', description: 'auf Wunsch (Betäubungscreme)', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'meist sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; individuelle Abrechnung nach GOÄ.',
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsareale' },
    { id: 'quickInfos', label: 'Auf einen Blick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

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

  

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Skinbooster in Bremen',
    description: [
      'Ich plane Skinbooster individuell: Hauttyp, Areale sowie Aufbau- und Erhaltungsphase.',
      'Transparente Erwartungswerte: dezente, natürlich wirkende Verbesserung über Wochen mit klaren Nachsorge-Empfehlungen.',
      'Abrechnung nach GOÄ, hochwertige Präparate und sterile, minimal-invasive Technik.',
    ],
    ctaText: 'Jetzt Beratungstermin buchen',
    ctaHref: '/kontakt',
    
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Hyaluron-Behandlungen',
    treatments: [
      {
        imageUrl: "/assets/hyaluron/hyaluron-filler_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluronsäure-Filler (Falten & Volumen)",
        description: "Die Behandlung mit Hyaluron-Fillern ist ein bewährtes Verfahren, um Falten wie Nasolabial- oder Marionettenfalten zu unterfüttern und Volumendefizite auszugleichen. Mit diesem Wirkstoff erzielen wir in Bremen beeindruckende und natürliche Effekte – in einem risikoarmen, minimal-invasiven Eingriff. Freuen Sie sich auf sofort sichtbare Ergebnisse.",
        treatmentUrl: "/hyaluron/filler"
      },
      
      {
        imageUrl: "/assets/hyaluron/hyaluron-profhilo_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluron-Skinbooster nach BAP-Technik",
        description: "Biorevitalisierung und Bioremodulierung mit BAP-Technik – ist eine gewebestimulierende Hyaluron-Behandlung, die die Hautqualität sichtbar verbessert: mehr Elastizität, feinere Linien, gleichmäßigerer Teint.",
        treatmentUrl: "/hyaluron/profhilo"
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-hylase_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hylase-Flasche",
        title: "Hylase (Hyaluronidase)",
        description: "Hyaluronidase, häufig als Hylase bezeichnet, ist ein natürlich im menschlichen Körper vorkommendes Enzym, das die Fähigkeit besitzt, Hyaluronsäure gezielt aufzulösen und abzubauen.",
        treatmentUrl: "/hyaluron/hylase"
      }
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Behandlung',
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
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      
      <ConsultationSection />
      <HubTeaserSection
        title="Mehr zu Hyaluron‑Behandlungen"
        subtitle="Zur Übersicht mit Behandlungen, Abläufen & Hinweisen."
        href="/hyaluron"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}
