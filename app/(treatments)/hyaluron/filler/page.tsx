import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Hyaluron Filler Bremen – Lippen & Falten | Termin buchen',
  description:
    'Hyaluron-Filler in Bremen: Lippen, Konturen & Falten natürlich korrigieren – Buchen sie jetzt ihren individuellen Beratungstermin!',
  keywords:
    'Hyaluron Filler Bremen, Lippen aufspritzen Bremen, Lippenunterspritzung Bremen, Faltenunterspritzung Bremen, Tränenrinne Bremen, Jawline Bremen, Kinnaufbau Bremen, Nasolabialfalte Bremen, Marionettenfalten Bremen, Hylase Bremen',
  openGraph: {
    title: 'Hyaluron Filler & Lippen in Bremen | EL Aesthetics',
    description:
      'Ärztliche Hyaluron-Filler-Behandlungen in Bremen: Lippen, Falten & Konturen – natürlich und präzise. Jetzt Termin buchen.',
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
  const heroData: HeroSectionProps = {
    title: 'Hyaluron Filler in Bremen',
    subtitle:
      'Suchen Sie nach einer professionellen Praxis für Hyaluronsäure Filler?\nDann sind Sie bei El Aesthetics genau richtig. Lippen aufspritzen, Falten glätten & Konturen präzisieren ',
    imageSrc: '/assets/hyaluron/hyaluron-filler_hero.webp',
    imageAlt:
      'Hyaluron-Filler-Behandlung in Bremen – Lippen, Falten & Konturen',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was sind Hyaluron Filler? Wirkweise & Funktion',
    content: [
      'Hyaluronsäure bindet Wasser, stellt Volumen wieder her und verbessert Konturen. Damit lassen sich Falten weichzeichnen, Lippen formen und das Gesichtsprofil harmonisieren – mit sofort sichtbaren, natürlich wirkenden Ergebnissen.',
      'Für Volumen und Kontur verwenden wir je nach Region unterschiedliche Filler-Kohäsionen und -Viskositäten. Ziel ist stets ein dezentes, typgerechtes Finish, das in Ruhe und Mimik harmonisch wirkt.',
      'Alle Behandlungen erfolgen ärztlich, mit hochwertigen CE-zertifizierten Präparaten und klaren Hygiene- und Sicherheitsstandards.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsareale mit Hyaluron-Fillern',
    categories: [
      {
        category: 'Lippen & Mundbereich',
        items: [
          { title: 'Lippenaufspritzen & -konturierung' },
          { title: 'Oberlippenfältchen (Plisséfalten)' },
          { title: 'Marionettenfalten' },
        ],
      },
      {
        category: 'Falten & Volumen',
        items: [
          { title: 'Nasolabialfalten' },
          { title: 'Wangenaufbau (Liquid Lift)' },
          { title: 'Tränenrinne (Augenringe, selektiert)' },
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
    title: 'Hyaluron-Filler auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 250€*', iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 30–45 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Ergebnis', description: 'sofort sichtbar', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 6–18 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'i. d. R. nicht nötig (Lidocain im Gel)', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Ausfallzeit', description: 'meist sofort gesellschaftsfähig', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; individuelle Abrechnung gemäß GOÄ.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Filler-Behandlung',
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
          'Reinigung/Desinfektion der Areale; auf Wunsch Betäubungscreme. Einsatz hochwertiger, CE-zertifizierter Filler.',
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
    title: 'Vor- und Nachsorge bei Fillern',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '7 Tage vorher nach Rücksprache keine blutverdünnenden Schmerzmittel (z. B. Ibuprofen, ASS).' },
        { title: 'Alkohol', description: '24 h vorher keinen Alkohol.' },
        { title: 'Gesundheit', description: 'Kein akuter Infekt/Herpes; keine frischen Impfungen oder Zahnbehandlungen.' },
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Behandlung in Schwangerschaft/Stillzeit.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Sport/Hitze', description: '48 h kein Sport; 1–2 Wochen keine Sauna/Solarium/intensive Sonne.' },
        { title: 'Druck/Massage', description: 'Areale nicht massieren oder stark drücken.' },
        { title: 'Weitere Eingriffe', description: '2 Wochen keine Impfungen, invasiven/kosmetischen Behandlungen oder Zahnarzt-Eingriffe.' },
        { title: 'Make-up', description: 'Mehrere Stunden pausieren; auf Hygiene achten.' },
      ],
    },
  };

  

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Botulinumtoxin für mimische Falten',
        title: 'Botulinumtoxin (mimische Falten)',
        description:
          'Perfekte Ergänzung zu Fillern bei Stirn, Zornesfalte & Krähenfüßen.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-hylase_hero.webp',
        imageAlt: 'Hylase Fillerauflösung',
        title: 'Hylase (Fillerauflösung)',
        description:
          'Sicherheitsnetz bei Fehlplatzierung oder Überkorrektur – verantwortungsvoll eingesetzt.',
        treatmentUrl: '/hyaluron/hylase',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Skinbooster zur Hydratation',
        title: 'Skinbooster (eigene Unterseite)',
        description:
          'Für Hydratation & Hautqualität. Details auf der Skinbooster-Seite.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Hyaluron-Fillern',
    faqs: [
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Je nach Region, Produkt und Stoffwechsel etwa 6–18 Monate. Bei Bedarf kann das Ergebnis aufgefrischt werden.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die meisten Filler enthalten Lidocain; zusätzlich kann eine Betäubungscreme aufgetragen werden. Die Behandlung gilt als gut tolerierbar.',
      },
      {
        question: 'Welche Risiken gibt es?',
        answer:
          'Kurzfristig sind Rötungen, Schwellungen oder Hämatome möglich. Sehr selten treten Gefäßkomplikationen auf – hierfür besteht ein klarer Notfall-Algorithmus (u. a. Hylase).',
      },
      {
        question: 'Was kostet die Filler-Behandlung?',
        answer:
          'Ab 250€. Der individuelle Preis richtet sich nach Materialmenge, Areal und Aufwand; die Abrechnung erfolgt gemäß GOÄ.',
      },
      {
        question: 'Kann man Filler bei Bedarf wieder auflösen?',
        answer:
          'Ja. Mit Hylase (Hyaluronidase) lassen sich Hyaluron-Filler in geeigneten Fällen gezielt abbauen.',
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
        subtitle="Übersicht der Anwendungen, Abläufe & Hinweise."
        href="/hyaluron"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
