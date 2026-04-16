import type { Metadata } from 'next';
import Script from 'next/script';
import {
  AreasSection,
  AreasSectionProps,
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
import { PRICES } from '@/lib/constants';
import { botoxFalten, hylase, skinbooster } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Hyaluron Filler Bremen – Lippen & Jawline',
  description:
    'Hyaluron-Filler für natürliche Lippen, Jawline & Falten in Bremen. Ärztliche Behandlung mit hochwertigen Präparaten. Jetzt Beratung vereinbaren.',
  keywords: ['Hyaluron Filler Bremen', 'Lippen aufspritzen Bremen', 'Lippenunterspritzung Bremen', 'Faltenunterspritzung Bremen', 'Jawline Bremen', 'Tränenrinne Bremen', 'Kinnaufbau Bremen'],
  openGraph: {
    title: 'Hyaluron Filler Bremen | Lippen, Jawline & Falten | EL Aesthetics',
    description:
      'Hyaluron-Filler für natürliche Lippen, Jawline & Falten in Bremen. Ärztliche Behandlung mit hochwertigen Präparaten.',
    url: 'https://elaesthetics-bremen.de/hyaluron/filler',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/hyaluron/og-hyaluron-filler-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/filler',
  },
};

export default function HyaluronFillerBremenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Hyaluron Filler in Bremen',
          description: 'Ärztliche Hyaluronsäure-Filler-Behandlung für Lippen, Falten und Konturierung.',
          url: '/hyaluron/filler',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Hyaluron-Filler Unterspritzung',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Hyaluronsäure-Filler-Injektion zur Volumenaufbau, Faltenunterspritzung und Konturierung von Lippen, Wangen, Kinn und Jawline.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Hyaluronsäure-Filler in Bremen',
    subtitle:
      'Hyaluronsäure-Filler für Faltenunterspritzung, Volumenaufbau, Lifting und Konturierung von Lippen, Wangen, Kinn, Jawline & mehr.',
    imageSrc: '/assets/hyaluron/hyaluron-filler_hero.webp',
    imageAlt: 'Hyaluron-Filler-Behandlung für Lippen, Falten und Konturen – EL Aesthetics Bremen',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was sind Hyaluronsäure-Filler?',
    content: [
      'Mit zunehmendem Alter kommt es zu einem Abbau von Fett-, Knochen- und Muskelgewebe. Gleichzeitig nimmt die Produktion von Kollagen und Elastin ab. Die Folge sind ein Absinken der Gesichtszüge, nachlassende Spannkraft sowie der Verlust klarer Konturen. Durch die präzise Platzierung von Hyaluronsäure-Fillern kann verlorenes Volumen gezielt wieder aufgebaut, die Gesichtsharmonie verbessert und natürliche Strukturen schonend rekonstruiert werden.',
      'Neben dem Ausgleich von Volumenverlust können Filler auch genutzt werden, um bestehende Gesichtszüge ästhetisch zu verfeinern. Durch gezielte Konturierung lassen sich beispielsweise Kinn, Wangen, Lippen oder Nase harmonisieren und definieren.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsareale mit Hyaluron-Fillern',
    categories: [
      {
        category: 'Lippen & Mundbereich',
        items: [
          { title: 'Lippen aufspritzen & -konturierung' },
          { title: 'Oberlippenfältchen (Plisséfalten)' },
          { title: 'Marionettenfalten' },
        ],
      },
      {
        category: 'Falten & Volumen',
        items: [
          { title: 'Nasolabialfalten' },
          { title: 'Wangenaufbau (Liquid Lift)' },
          { title: 'Schläfen' },
        ],
      },
      {
        category: 'Kontur & Profil',
        items: [
          { title: 'Jawline-Konturierung' },
          { title: 'Kinnaufbau & -korrektur' },
          { title: 'Nasenkorrektur ohne OP (Profilkorrektur)' },
        ],
      },
      {
        category: 'Weitere Bereiche',
        items: [
          { title: 'Hals & Dekolleté (ausgewählte Indikationen)' },
          { title: 'Handrücken-Volumen' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Filler-Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.hyaluronFiller.fillerUnterspritzung},-€*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungsdauer', description: 'ca. 40-60 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkeintritt', description: 'sofort', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 6–24 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'i. d. R. nicht nötig', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'meist sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; individuelle Abrechnung gemäß GOÄ.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Behandlung',
    steps: [
      {
        number: '01',
        title: 'Analyse & Behandlungsplan',
        description:
          'Wir definieren Ihre Ziele (z. B. Volumen, Kontur, Faltenreduktion) und wählen die passende Produktspezifikation.',
      },
      {
        number: '02',
        title: 'Vorbereitung & Hygiene',
        description:
          'Reinigung/Desinfektion der Areale. Einsatz hochwertiger, CE-zertifizierter Filler.',
      },
      {
        number: '03',
        title: 'Injektion',
        description:
          'Präzise Applikation mit Nadel oder Kanüle – angepasst an Region, Tiefe und gewünschte Formung.',
      },
      {
        number: '04',
        title: 'Kontrolle & Nachsorge',
        description:
          'Abschließender Spiegelcheck, Kühlung nach Bedarf, klare Nachsorgehinweise. Kontrolltermin nach ~14 Tagen empfohlen.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '7 Tage vorher keine blutverdünnenden Schmerzmittel (z. B. Ibuprofen, ASS) – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.' },
        { title: 'Alkohol', description: '24 h vorher keinen Alkohol.' },
        { title: 'Gesundheit', description: '2 Wochen keine Impfungen und keine invasiven Eingriffe wie Permanent Make-up, Laserbehandlungen, Zahnbehandlungen, Zahnreinigungen, Operationen oder Ähnliches planen.' },
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Behandlung in Schwangerschaft/Stillzeit.' },
        { title: 'Operation', description: 'Mindestens 4 Wochen vor der Behandlung keine Operation durchführen lassen.' },

      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Sport', description: '48 h kein Sport.' },
        { title: 'Druck/Massage', description: 'Areale nicht massieren oder stark drücken.' },
        { title: 'Weitere Eingriffe', description: '2 Wochen keine Impfungen, invasiven/kosmetischen Behandlungen oder Zahnarzt-Eingriffe.' },
        { title: 'Make-up', description: 'Mehrere Stunden pausieren; auf Hygiene achten.' },
        { title: 'UV-/Hitze-Schutz', description: '2 Wochen keine Sauna, Solarium oder Dampfbad besuchen.' },
      ],
    },
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen',
    treatments: [
      botoxFalten,
      hylase,
      skinbooster,
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Hyaluronsäure-Fillern',
    faqs: [
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Je nach Region, Produkt und Stoffwechsel etwa 6–24 Monate. Bei Bedarf kann das Ergebnis aufgefrischt werden.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die meisten Filler enthalten Lidocain; zusätzlich kann eine Betäubungscreme aufgetragen werden. Die Behandlung gilt als gut tolerierbar.',
      },
      {
        question: 'Welche Risiken gibt es?',
        answer:
          'Kurzfristig sind Rötungen, Schwellungen oder Hämatome möglich.',
      },
      {
        question: 'Kann man Filler bei Bedarf wieder auflösen?',
        answer:
          'Ja. Mit Hyaluronidase lassen sich Hyaluron-Filler in geeigneten Fällen gezielt abbauen.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für ein frisches, natürliches Ergebnis?',
    subtitle:
      'Vereinbaren Sie jetzt Ihre persönliche Beratung für Hyaluron-Filler in Bremen.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
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
    { id: 'cta', label: 'Termin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="hyaluron-filler-schema"
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
        title="Mehr zu Hyaluronsäure‑Behandlungen"
        subtitle="Übersicht der Anwendungen & Hinweise."
        href="/hyaluron"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
