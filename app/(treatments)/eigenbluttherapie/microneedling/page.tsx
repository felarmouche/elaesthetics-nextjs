import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TableOfContents,
  TOCItem,
  AreasSection,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
  HubTeaserSection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  ProcessSection,
  ProcessSectionProps,
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps,
  CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { microneedling, eigenblut, prfHaar } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'PRF Microneedling Bremen',
  description:
    'PRF Microneedling in Bremen: Kombination aus Needling und Eigenblut-Plasma für verfeinerte Poren & Narben. Jetzt beraten lassen.',
  keywords:
    ['PRF Microneedling Bremen', 'Plasma Needling Bremen', 'Aknenarben Bremen', 'Poren verfeinern Bremen', 'medizinisches Microneedling Bremen'],
  openGraph: {
    title: 'PRF Microneedling Bremen | Plasma-Needling & Narben | EL Aesthetics',
    description:
      'PRF Microneedling in Bremen: Kombination aus Needling und Eigenblut-Plasma für verfeinerte Poren & Narben.',
    url: 'https://elaesthetics-bremen.de/eigenbluttherapie/microneedling',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
        width: 1200,
        height: 630,
        alt: 'PRF Microneedling Bremen | Plasma-Needling & Narben | EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie/microneedling/',
  },
};

export default function PRFMicroneedlingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'PRF Microneedling in Bremen',
          description: 'Ärztliche Kombination aus medizinischem Microneedling und Eigenbluttherapie (PRF) für Hautregeneration.',
          url: '/eigenbluttherapie/microneedling',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'PRF Microneedling',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Kombination aus medizinischem Microneedling und PRF-Eigenbluttherapie zur Verfeinerung von Poren, Narben und Hautstruktur.',
        howPerformed: 'Microneedling mit PRF-Applikation',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'PRF Microneedling (Plasma-Needling) in Bremen',
    subtitle:
      'Die Kombination aus Microneedling und PRF-Matrix unterstützt die Hautregeneration und kann zu einem verfeinert wirkenden Hautbild, glatterer Hauttextur und einem ebenmäßigeren Erscheinungsbild beitragen.',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
    imageAlt: 'PRF Microneedling mit Plasma-Needling – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' }
  };

  const introData: IntroSectionProps = {
    title: 'Warum Microneedling mit PRF in Bremen?',
    content: [
      'Das Microneedling kombiniert die Vorteile von PRF mit den regenerativen Effekten des Needlings. Durch das Needling wird die Haut angeregt, mehr Kollagen zu produzieren, während PRF den Heilungsprozess beschleunigt und die Hauterneuerung fördert. Die Kombination aus PRF-Injektionen und Microneedling kann zu einer deutlichen Verbesserung des Hautbildes führen und eignet sich bei vielen Hautproblemen und Indikationen.'
    ]
  };

  const areasData: AreasSectionProps = {
    title: 'Indikationen & Areale',
    categories: [
      {
        category: 'Gesicht, Hals & Dekolleté',
        items: [
          { title: 'Porenverfeinerung & Textur-Glättung' },
          { title: 'Aknenarben & Narbenstrukturen' },
          { title: 'Feine Fältchen & Elastizität' },
          { title: 'Pigmentunregelmäßigkeiten / Teint' }
        ]
      },
      {
        category: 'Haare',
        items: [{ title: 'Behandlung der Kopfhaut (gegen Haarausfall)' }]

      },
      {
        category: 'Körper',
        items: [{ title: 'Dehnungsstreifen (z. B. Bauch, Hüfte, Oberschenkel)' }]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Plasma-Needling auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.prpPrf.microneedling} €*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 60–90 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Intervall', description: 'ca. alle 4 Wochen (3-4 Sitzungen)', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Betäubung', description: 'lokal auf Wunsch', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'meist 1–3 Tage', iconUrl: '/assets/icons/gesellschaft.svg' }
    ],
    note: '*Preise sind Richtwerte nach GOÄ; individueller Kostenplan im Beratungsgespräch.'
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf',
    steps: [
      {
        number: '01',
        title: 'Beratung & Anästhesie',
        description:
          'Indikationsprüfung, Hautanalyse und Aufklärung.'
      },
      {
        number: '02',
        title: 'Blutentnahme & PRF-Herstellung',
        description:
          'Blutabnahme und Aufbereitung nach PRF-Protokoll'
      },
      {
        number: '03',
        title: 'Microneedling + PRF-Applikation',
        description:
          'Needling mit dem Dermapen 4 in individuell angepasster Eindringtiefe; die PRF-Matrix wird gleichzeitig in/auf die Haut eingearbeitet.'
      },
      {
        number: '04',
        title: 'Beruhigende Maske & Nachsorge',
        description:
          'Abschließende beruhigende Maske (ca. 15 Minuten) sowie individuelle Nachsorgeinstruktionen. Gesamtdauer meist 60–90 Minuten.'
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Behandlungs­hinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Medikamente',
          description:
            '1 Woche zuvor möglichst keine blutverdünnenden Mittel (z. B. Ibuprofen, Diclofenac, Aspirin) – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.'
        },
        {
          title: 'Koffein, Nikotin, Alkohol',
          description:
            'Mindestens 2 Tage vorab reduzieren/vermeiden; am Behandlungstag komplett darauf verzichten.'
        },
        {
          title: 'Hydration & Ernährung',
          description:
            'Ausreichend trinken und nicht nüchtern erscheinen.'
        },
        {
          title: 'Gesundheit',
          description:
            'Nur behandeln lassen, wenn Sie infektfrei sind – bei akuten Entzündungen oder Erkrankungen Termin verschieben.'
        }
      ]
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Hautruhe', description: 'Behandelte Areale möglichst wenig berühren; Hände vorher reinigen.' },
        { title: 'Pflege & Make-up', description: '2–3 Tage milde Pflege; 2–3 Tage kein Make-up/Puder.' },
        { title: 'Kosmetische Eingriffe', description: '7 Tage keine Massagen, Packungen, Peelings.' },
        { title: 'Hitze & Wasser', description: '7 Tage Sauna, Solarium, Sonnenbäder, Schwimmbad meiden.' },
        { title: 'Sport', description: '24 Stunden Pause.' },
        { title: 'Sonne & LSF', description: 'Direkte Sonne ca. 2 Wochen meiden; mindestens LSF 50 verwenden.' }
      ]
    }
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen mit Eigenblut',
    treatments: [microneedling, eigenblut, prfHaar],
  };

  const faqData: FAQSectionProps = {
    title: 'FAQ zu PRF Microneedling (Plasma-Needling)',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen PRF-Microneedling und medizinischem Microneedling?',
        answer:
          'Beim Plasma-Needling wird zusätzlich eine PRF-Matrix (plättchenreiches Fibrin) genutzt, die körpereigene Faktoren über längere Zeit freisetzen kann. Reines medizinisches Needling arbeitet ohne PRF.'
      },
      {
        question: 'Wie unterscheidet sich PRF-Needling von einer PRF-Injektion?',
        answer:
          'PRF-Injektionen bringen die Matrix gezielt per Nadel in definierte Areale. Beim Plasma-Needling wird PRF über Mikrokanäle verteilt; geeignet zur flächigen Textur-Optimierung und Porenverfeinerung.'
      },
      {
        question: 'Wie viele Sitzungen sind sinnvoll und wann zeigt sich ein Effekt?',
        answer:
          'Empfohlen werden 4–6 Behandlungen im Abstand von etwa 4 Wochen. Erste Verbesserungen sind oft nach 1–2 Wochen spürbar (volleres, rosigeres Hautgefühl); die sichtbare Textur-Optimierung verstärkt sich im Verlauf der Serie.'
      },
      {
        question: 'Wie lange halten die Ergebnisse an?',
        answer:
          'Nach einer vollständigen Behandlungsserie halten die Ergebnisse in der Regel 1–2 Jahre. Faktoren wie Rauchen, intensive Sonnenexposition und Lebensstil können eine frühere Auffrischung notwendig machen. Zur Erhaltung empfehlen sich 1–2 Auffrischungsbehandlungen pro Jahr.'
      },
      {
        question: 'Welche Nebenwirkungen sind möglich?',
        answer:
          'Vorübergehende Rötung, Schwellung oder feine Schürfungen können auftreten. Die Ausfallzeit liegt meist bei 1–3 Tagen und hängt von der Eindringtiefe ab.'
      },
      {
        question: 'Gibt es Kontraindikationen?',
        answer:
          'Akute Entzündungen/Infektionen im Behandlungsareal, Störungen der Blutgerinnung sowie Schwangerschaft/Stillzeit. Wir prüfen dies vorab im ärztlichen Gespräch.'
      },
      {
        question: 'Ist PRF eine Weiterentwicklung von PRP?',
        answer:
          'PRF gilt als Weiterentwicklung der PRP-Anwendung: Es kommt ohne Zusätze aus und kann Inhaltsstoffe langsamer freisetzen. Eine allgemeingültige Wirkung kann nicht zugesichert werden.'
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für Plasma-Needling?',
    subtitle: 'Vereinbaren Sie Ihren Termin für PRF Microneedling in Bremen.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' }
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Indikationen' },
    { id: 'quickInfos', label: 'Überblick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Optionen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="prf-microneedling-schema"
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
        title="Zur Übersicht: Eigenbluttherapie (PRF/PRP)"
        subtitle="Anwendungen, Abläufe, Sitzungspläne & Hinweise."
        href="/eigenbluttherapie"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
