import type { Metadata } from 'next';
import Script from 'next/script';
import { PRICES } from '@/lib/constants'
import { filler, profhilo, hylase } from '@/data/treatments';
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
  TreatmentsSection,
  CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';


export const metadata: Metadata = {
  title: 'Skinbooster Behandlung Bremen',
  description:
    'Skinbooster-Behandlung in Bremen: Hyaluron für glattere, strahlendere Haut. Für Gesicht, Hals & Dekolleté. Jetzt Beratung vereinbaren.',
  keywords:
    ['Skinbooster Bremen', 'Hyaluron Hautauffrischung Bremen', 'Hautfeuchtigkeit Bremen', 'Glow Behandlung Bremen', 'feine Linien Hyaluron Bremen'],
  openGraph: {
    title:
      'Skinbooster Bremen | Hautfeuchtigkeit & Glow | EL Aesthetics',
    description:
      'Skinbooster-Behandlung in Bremen: Hyaluron für glattere, strahlendere Haut. Für Gesicht, Hals & Dekolleté.',
    url: 'https://elaesthetics-bremen.de/hyaluron/skinbooster',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/hyaluron/hyaluron-skinbooster_hero.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/skinbooster/',
  },
};

export default function SkinboosterBremenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Skinbooster-Behandlung in Bremen',
          description: 'Ärztliche Skinbooster-Behandlung mit Hyaluronsäure für Hautfeuchtigkeit und Glow.',
          url: '/hyaluron/skinbooster',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Skinbooster-Behandlung',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Tiefenwirksame Hydratation der Haut durch Hyaluronsäure-Injektionen für verbesserte Hautstruktur und strahlenden Glow.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Skinbooster in Bremen',
    subtitle:
      'Skinbooster-Behandlung für Gesicht, Hals, Dekolleté & Hände – Spannkraft, Hydratation & Glow.',
    imageSrc: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
    imageAlt: 'Skinbooster-Behandlung mit Hyaluronsäure für Glow – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist eine Skinbooster-Behandlung?',
    content: [
      'Skinbooster-Behandlungen sind ein minimal-invasives Verfahren der ästhetischen Medizin zur tiefenwirksamen Hauthydratation mit unvernetzter Hyaluronsäure.',
      'Das Ergebnis kann eine nachhaltige Durchfeuchtung der Haut bis in die tiefen Hautschichten, mehr Spannkraft und Hautglätte sein.',
      'Die Behandlung hat ebenfalls einen sehr positiven Effekt auf Problemhaut, z. B. bei Akne, Pigmentstörungen, eingefallenen Narben oder grobporiger Haut.',
      'So können feine Linien geglättet werden, der Teint ebenmäßiger und die Ausstrahlung frischer wirken.',
      'Geeignet sind Skinbooster vor allem für Gesicht, Hals, Dekolleté und Hände.',
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
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Die Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.hyaluronFiller.skinbooster1ml},-€`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungsdauer', description: '45–60 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Sitzungen', description: '2–3 (produktabhängig)', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Betäubung', description: 'auf Wunsch', iconUrl: '/assets/icons/Spritze.svg' },
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
        { title: 'Medikamente', description: '7 Tage vorher keine Blutverdünner – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.' },
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
    treatments: [filler, profhilo, hylase],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Behandlung',
    faqs: [
      {
        question: 'Wann zeigt sich der Effekt?',
        answer:
          'Der sichtbare Effekt baut sich über 3–4 Wochen auf. In der Aufbauphase sind je nach Hautbild 2-3 Sitzungen üblich.',
      },
      {
        question: 'Wie lang dauert die Behandlung und bin ich danach einsatzfähig?',
        answer:
          'Rund 45–60 Minuten (ggf. plus Betäubungszeit). In der Regel sind Sie anschließend sofort wieder gesellschaftsfähig.',
      },
      {
        question: 'Was sind mögliche Nebenwirkungen?',
        answer:
          'Die bei der Behandlung verwendete Hyaluronsäure ist risikoarm und gut verträglich. Wie bei allen Injektionsbehandlungen können jedoch folgende Reaktionen auftreten: Leichte Rötung und Schwellung an den Injektionsstellen, blaue Flecken und Quaddeln an den Einstichstellen, Allergische Reaktionen auf die Hyaluronsäure sind in seltenen Fällen möglich.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Noch Fragen zu der Behandlung?',
    subtitle:
      'Buchen Sie Ihre persönliche Beratung für Skinbooster in Bremen.',
    primaryCTA: { text: 'Beratungstermin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="skinbooster-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
      <CTASection {...ctaData} />

    </div>
  );
}
