import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TableOfContents,
  TOCItem,
  AreasSection,
  AreasSectionProps,
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
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps,
  CTASection,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { mesoHaar, prfMicro, polyHaar } from '@/data/treatments';
// PatientReviews bewusst nicht verwendet (HWG)

export const metadata: Metadata = {
  title: 'Eigenbluttherapie Haare Bremen',
  description:
    'Eigenbluttherapie (PRF/PRP) bei Haarausfall in Bremen: Unterstützung der Haardichte. Infos zu Ablauf, Sitzungen & Kosten. Jetzt beraten lassen.',
  keywords:
    ['Eigenbluttherapie Haarausfall Bremen', 'PRF Haare Bremen', 'PRP Haarausfall Bremen', 'Haardichte Behandlung Bremen', 'Haarausfall Therapie Bremen'],
  openGraph: {
    title:
      'Eigenbluttherapie Haare Bremen | PRF & Haarausfall | EL Aesthetics',
    description:
      'Eigenbluttherapie (PRF/PRP) bei Haarausfall in Bremen: Unterstützung der Haardichte. Infos zu Ablauf, Sitzungen & Kosten.',
    url: 'https://elaesthetics-bremen.de/eigenbluttherapie/haare',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/prf/og-prf-haare-haarausfall-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie/haare',
  },
};

export default function PRFHaarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Eigenbluttherapie bei Haarausfall in Bremen',
          description: 'Ärztliche PRF/PRP-Therapie zur Unterstützung bei Haarausfall und zur Förderung der Haardichte.',
          url: '/eigenbluttherapie/haare',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Eigenbluttherapie bei Haarausfall (PRF/PRP)',
        type: 'MedicalProcedure',
        bodyLocation: 'Scalp',
        description: 'Eigenbluttherapie (PRF/PRP) zur Unterstützung der Kopfhaut und Förderung der Vitalität von Haarfollikeln bei verschiedenen Formen von Haarausfall.',
        howPerformed: 'Injektion in die Kopfhaut',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Eigenbluttherapie Haarausfall-Behandlung in Bremen',
    subtitle:
      'Eigenbluttherapie Haarausfall Behandlung (PRF/PRP) - Unterstützung des Haarwachstums und der Kopfhautgesundheit. Bei verschiedenen Formen von Haarausfall',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie-haare_hero.webp',
    imageAlt: 'Eigenbluttherapie PRF/PRP bei Haarausfall – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'PRF/PRP bei Haarausfall',
    content: [
      'Die Eigenblut-Therapie eignet sich sehr gut als Behandlung bei Haarausfall. Sie stimuliert das Haarwachstum durch eine Revitalisierung der Haarfollikel. PRF-Therapie kann dazu beitragen, dass die Haardichte und der Haardurchmesser zunimmt. Die Behandlung kann bei verschiedenen Formen des Haarausfalls zum Einsatz kommen, wie z.B erblich bedingten, diffusem oder kreisrundem Haarausfall, sowie zur Unterstützung vor und nach einer Haartransplantation .',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Bereiche & Indikationen ',
    categories: [
      {
        category: 'Haarausfallformen',
        items: [
          { title: 'Erblicher Haarausfall (androgenetische Alopezie)', description: 'z. B. Geheimratsecken, Tonsur/Scheitel' },
          { title: 'Nach einer Haartransplantation', description: 'begleitende PRF/PRP‑Anwendung kann erwogen werden' },
          { title: 'Vor einer Haartransplantation', description: 'begleitende PRF/PRP‑Anwendung kann erwogen werden' },
          { title: 'Diffuser Haarausfall', description: 'gleichmäßige Ausdünnung der Kopfhaut' },
          { title: 'Kreisrunder Haarausfall (Alopecia areata)', description: 'lokalisierte Areale – individuelle Eignung' },
        ],
      },
      {
        category: 'Behandlungsziele',
        items: [
          { title: 'Unterstützung der Haardichte' },
          { title: 'Haardurchmesser/Qualität verbessern' },
          { title: 'Kopfhautmilieu stabilisieren' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Eigenbluttherapie für die Haare auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.haare.prpPrf}€ pro Sitzung*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 60–120 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Behandlungsserie', description: '4–6 Sitzungen im Abstand von 4–6 Wochen', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Beurteilung', description: 'Verlaufskontrolle nach 2–3 Terminen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Erhaltung', description: 'Auffrischung individuell nach Verlauf', iconUrl: '/assets/icons/CAL.svg' },
    ],
    note: '*GOÄ‑orientierter Richtwert. Der konkrete Betrag richtet sich nach Areal und Aufwand und wird individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der PRF / PRP Haarausfallbehandlung',
    steps: [
      { number: '01', title: 'Haaranalyse & Beratung', description: 'Befund (Muster, Verlauf, Auslöser) und Zieldefinition; Fotodokumentation als Verlaufskontrolle.' },
      { number: '02', title: 'Vorbereitung', description: 'Optional Betäubungscreme (30–60 Min.). Blutentnahme.' },
      { number: '03', title: 'Aufbereitung PRF/PRP', description: '' },
      { number: '04', title: 'Injektionen', description: 'Mikro‑Injektionen der Matrix im ca. 1 cm‑Raster in betroffene Areale.' },
      { number: '05', title: 'Nachsorge & Planung', description: '' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor‑ und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Blutverdünner', description: 'Nur nach ärztlicher Rücksprache pausieren – keinesfalls eigenständig absetzen.' },
        { title: 'Hydration/Ernährung', description: 'Ausreichend trinken, leichte Mahlzeit vor dem Termin.' },
        { title: 'Stimulanzien', description: '48 Stunden vorher möglichst kein Alkohol/Nikotin; Koffein reduzieren.' },
        { title: 'Hygiene', description: 'Saubere, produktfreie Haare am Behandlungs-/Vortag.' },
        { title: 'Gesundheit', description: 'Bei Infekt/Fieber/Kopfhauterkrankungen Termin verschieben.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Einstichstellen', description: 'Behandelte Areale möglichst nicht berühren; Hände vorher reinigen.' },
        { title: 'Abendliche Spülung', description: 'Am Behandlungsabend die Kopfhaut nur mit klarem Wasser abspülen.' },
        { title: 'Schutz', description: '24 Stunden keinen Sport; 7 Tage starke Hitze/UV meiden.' },
        { title: 'Haarwäsche', description: 'Ab dem Folgetag mit mildem Shampoo möglich; Kopfhaut nicht reizen.' },
        { title: 'Chemische Behandlungen', description: '1–2 Wochen keine Färbungen/chemische Behandlungen.' },
        { title: 'Pflege', description: 'Milde Kopfhautpflege; Massage erst nach ~48 Std. sanft beginnen.' },
      ],
    },
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Optionen bei Haarausfall',
    treatments: [mesoHaar, prfMicro, polyHaar],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu PRF/PRP für die Haare',
    faqs: [
      {
        question: 'Womit ist nach der Haar-Behandlung mit PRF zu rechnen?',
        answer:
          'Mehrere Sitzungen sind notwendig, um optimale Ergebnisse zu erzielen. Der maximale Effekt wird nach etwa sechs Monaten sichtbar. Geduld und Kontinuität sind entscheidend für den Erfolg der Behandlung.\n\nPRF kann ruhende Haarfollikel reaktivieren, die Haardicke bei dünnem Haar erhöhen und die Haare insgesamt dichter erscheinen lassen. Der Erfolg hängt von Faktoren wie der Ursache des Haarausfalls, dem Zustand der Haarfollikel und individuellen Gegebenheiten ab. Diese Faktoren werden in einem persönlichen Gespräch besprochen.',
      },
      {
        question: 'Wie lange halten die Ergebnisse an?',
        answer:
          'Nach einer vollständigen Behandlungsserie können die Ergebnisse 1–2 Jahre anhalten. Zur Erhaltung empfehlen sich 1–2 Auffrischungsbehandlungen pro Jahr. Lebensstil, Ernährung und Hormonstatus können die Haltbarkeit beeinflussen.',
      },
      {
        question: 'Welche Kontraindikationen gibt es?',
        answer:
          'PRF/PRP-Behandlungen sind nicht geeignet bei Schwangerschaft und Stillzeit, Gerinnungsstörungen oder Einnahme von Antikoagulanzien, akuten oder chronischen Infektionen sowie aktiven Entzündungen im Behandlungsareal. Die individuelle Eignung wird im ärztlichen Gespräch geprüft.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Mit Betäubungscreme wird die Behandlung in der Regel gut vertragen. Während der Mikro-Injektionen berichten viele über ein kurzes Pieken oder Druckgefühl. Eine mögliche Empfindlichkeit der Kopfhaut klingt meist rasch ab.',
      },
      {
        question: 'Was sind mögliche Nebenwirkungen?',
        answer:
          'Nach der Behandlung können vorübergehend leichte Rötungen, Schwellungen und ein Spannungsgefühl auftreten. Die PRF-Therapie gilt als sicher und ist mit keinen größeren Nebenwirkungen verbunden, da ausschließlich körpereigene Substanzen verwendet werden.'
      },

    ],
  };


  const ctaData: CTASectionProps = {
    title: 'Beratung zur Eigenbluttherapie für Haare',
    subtitle:
      'Wir klären Eignung, Ablauf, Serie und Kosten (Richtwerte) – individuell und transparent.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
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
        id="prf-haare-schema"
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
