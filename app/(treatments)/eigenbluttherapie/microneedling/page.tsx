import type { Metadata } from 'next';
import {
  TableOfContents,
  TOCItem,
  AreasSection,
  ConsultationSectionProps,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
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
import { Review } from '@/types/Review';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'PRF Microneedling Bremen – Plasma-Needling gegen Narben & große Poren | EL Aesthetics',
  description:
    'PRF Microneedling (Plasma-Needling) in Bremen: Microneedling + PRF-Matrix zur Unterstützung der Regeneration – für feinere Poren, glattere Textur und Aknenarben. Ärztlich durchgeführt.',
  keywords:
    'PRF Microneedling Bremen, Plasma Needling Bremen, Microneedling mit PRF, PRP Microneedling Bremen, iPRF Needling, Aknenarben behandeln Bremen, Poren verfeinern Bremen, Hautbild verbessern Bremen, medizinisches Microneedling Bremen',
  openGraph: {
    title: 'PRF Microneedling (Plasma-Needling) in Bremen – EL Aesthetics',
    description:
      'Synergie aus Microneedling und PRF-Matrix: langanhaltende Freisetzung körpereigener Faktoren – für sichtbar verfeinerte Poren und ein ebenmäßigeres Hautbild.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/prf/prf-microneedling-og.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie/microneedling',
  },
};

export default function PRFMicroneedlingPage() {
  const heroData: HeroSectionProps = {
    title: 'PRF Microneedling (Plasma-Needling) in Bremen',
    subtitle:
      'Microneedling + PRF-Matrix: Die Kombination zur Unterstützung der Regeneration – für verfeinerte Poren, glattere Textur und ein ebenmäßigeres Hautbild, ärztlich durchgeführt.',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
    imageAlt: 'PRF Microneedling (Plasma-Needling) in der Praxis EL Aesthetics Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' }
  };

  const introData: IntroSectionProps = {
    title: 'Warum Microneedling mit PRF in Bremen?',
    content: [
      'Das Plasma-Needling kombiniert die Vorteile von PRF mit den regenerativen Effekten des Needlings. Durch das Needling wird die Haut angeregt, mehr Kollagen zu produzieren, während PRF den Heilungsprozess beschleunigt und die Hauterneuerung fördert.',
      'Die Synergie aus PRF-Injektionen und Microneedling kann zu einer deutlichen Verbesserung des Hautbildes führen und eignet sich bei vielen Hautproblemen und Indikationen. Zum Beispiel zur Textur-Verbesserung, Porenverfeinerung und zur begleitenden Behandlung von Aknenarben.',
      'Nadeltiefe und PRF-Applikation werden individuell an Hautzustand und Areal angepasst.'
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
      { title: 'Wirkeintritt', description: 'im Verlauf einer Serie (3–5 Termine)', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Intervall', description: 'ca. alle ~4 Wochen', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Betäubung', description: 'lokal auf Wunsch', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Downtime', description: 'meist 1–3 Tage', iconUrl: '/assets/icons/gesellschaft.svg' }
    ],
    note: '*Preise sind Richtwerte nach GOÄ; individueller Kostenplan im Beratungsgespräch.'
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf Ihrer PRF-Microneedling-Behandlung',
    steps: [
      {
        number: '01',
        title: 'Beratung & Vorbereitung',
        description:
          'Indikationsprüfung, Hautanalyse und Aufklärung. Optional Anästhesiecreme (Einwirkzeit ~30 Min). Anschließend Blutabnahme und PRF-Herstellung nach Protokoll.'
      },
      {
        number: '02',
        title: 'Microneedling + PRF-Applikation',
        description:
          'Needling in geeigneter Eindringtiefe; die PRF-Matrix wird in/auf die Haut eingebracht und verteilt, um die Regeneration zu unterstützen.'
      },
      {
        number: '03',
        title: 'Beruhigung & Schutz',
        description:
          'Beruhigende Maske/Abschluss-Pflege und Hinweise zur Nachsorge. Gesamtdauer meist 60–90 Minuten.'
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
            'Nach ärztlicher Rücksprache 1 Woche zuvor möglichst keine blutverdünnenden Mittel (z. B. Ibuprofen, Diclofenac, Aspirin).'
        },
        {
          title: 'Koffein, Nikotin, Alkohol',
          description:
            'Mindestens 2 Tage vorab reduzieren/vermeiden; am Behandlungstag komplett darauf verzichten.'
        },
        {
          title: 'Hydration & Ernährung',
          description:
            'Ausreichend trinken und nicht nüchtern erscheinen; nur behandeln lassen, wenn Sie gesund sind.'
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
        { title: 'Sonne & LSF', description: 'Direkte Sonne ca. 2 Wochen meiden; LSF 30–50 verwenden.' }
      ]
    }
  };

  const reviews: Review[] = [
    { id: 1, name: 'Mareike B.', rating: 5, text: 'Poren sichtbar feiner, Haut praller. Sehr transparente Aufklärung!', date: '2024-09-12' },
    { id: 2, name: 'Tina S.', rating: 5, text: 'Nach der 3. Sitzung deutliche Verbesserung der Aknenarben. Downtime war kurz.', date: '2024-08-23' },
    { id: 3, name: 'Jana F.', rating: 5, text: 'Professionell, verträglich und natürlich wirkend – klare Empfehlung.', date: '2024-07-19' }
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre persönliche Beratung in Bremen',
    description: [
      'Wir prüfen, ob Plasma-Needling die passende Option für Ihre Indikation ist und definieren realistische Ziele.',
      'Nadeltiefe und PRF-Applikation werden individuell festgelegt; Sie erhalten klare Empfehlungen zu Anzahl und Intervallen.',
      'Transparenz zu Erwartungsmanagement, Regenerationszeit und Pflege inklusive.'
    ],
    ctaText: 'Jetzt Beratungstermin anfragen',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]'
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen mit Eigenblut',
    treatments: [
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp',
        imageAlt: 'Medizinisches Microneedling mit Dermapen 4 ohne PRF',
        title: 'Medizinisches Microneedling ohne PRF',
        description:
          'Kollagen-Induktion ohne PRF-Matrix – sinnvoll, wenn eine reine Needling-Serie ausreicht.',
        treatmentUrl: '/medizinisches-microneedling'
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-vampire-lifting_hero.webp',
        imageAlt: 'Gesicht einer Frau bei einer PRF-Eigenbluttherapie',
        title: 'PRF-Eigenbluttherapie (Vampire Lifting)',
        description:
          'Eigenbluttherapie als reine Injektion – ohne Needling; für fokussierte Areale.',
        treatmentUrl: '/eigenbluttherapie/vampir-lifting'
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-haare_hero.webp',
        imageAlt: 'PRF-Therapie bei Haarausfall',
        title: 'PRF bei Haarausfall',
        description:
          'Spezielle PRF-Anwendung für die Kopfhaut zur Unterstützung des Haarwuchses.',
        treatmentUrl: '/eigenbluttherapie/haare'
      }
    ]
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
          'Bewährt sind 3–5 Behandlungen im Abstand von etwa 4 Wochen. Verbesserungen entwickeln sich über Wochen, die sichtbare Textur-Optimierung verstärkt sich im Verlauf der Serie.'
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
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
