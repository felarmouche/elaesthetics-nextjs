import { Metadata } from 'next';
import {
  TOCItem,
  TableOfContents,
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
  CTASection,
} from '@/components/TreatmentPageComponents';
// PatientReviews entfernt (HWG)
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title:
    'Botulinumtoxin gegen Schwitzen (Hyperhidrose) Bremen | Achseln | EL Aesthetics',
  description:
    'Information zur Schwitzen Behandlung (axilläre Hyperhidrose) mit Botulinumtoxin in Bremen: indikationsbezogene Beratung, ärztliche Aufklärung, individuelle Entscheidung.',
  keywords:
    'botulinumtoxin gegen schwitzen, botulinumtoxin a gegen schwitzen, botulinumtoxin schwitzen, schwitzen behandlung, Hyperhidrose Bremen, Achselschwitzen behandeln, übermäßiges Schwitzen Achseln, Schweißdrüsen Behandlung Bremen',
  openGraph: {
    title: 'Botulinumtoxin gegen axilläre Hyperhidrose in Bremen',
    description:
      'Sachliche Information zur Anwendung von Botulinumtoxin bei übermäßigem Schwitzen (axilläre Hyperhidrose). Ärztliche Beratung erforderlich.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/botox-hyperhidrose_hero.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/hyperhidrose',
  },
};

export default function BotoxHyperhidrosePage() {
  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin gegen starkes Schwitzen (Hyperhidrose)',
    subtitle:
      'Die Anwendung von Botulinumtoxin bei axillärer Hyperhidrose zielt auf eine Verringerung der Schweißproduktion ab.',
    imageSrc: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp',
    imageAlt: 'Behandlung mit Botulinumtoxin gegen Schwitzen (axilläre Hyperhidrose) in Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Botulinumtoxin a gegen schwitzen – Allgemeine Infos',
    content: [
      'Unter Hyperhidrose versteht man übermäßiges Schwitzen, das nicht allein durch Hitze oder Sport erklärbar ist. Häufig betroffen sind die Achseln (axilläre Hyperhidrose).',
      'Botulinumtoxin kann die Signalübertragung an den Nervenendigungen der Schweißdrüsen vorübergehend hemmen. Infolgedessen kann die Schweißproduktion in den behandelten Arealen reduziert sein. Ob und in welchem Ausmaß dies für Sie sinnvoll ist, wird im ärztlichen Gespräch geklärt.',
      'Wichtiger rechtlicher Hinweis: Es werden keine Heilversprechen gegeben. Die Informationen dienen der Aufklärung zu \"botulinumtoxin gegen schwitzen\" und \"schwitzen behandlung\" und ersetzen nicht die individuelle ärztliche Beratung.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Anwendungsbereiche - Hyperhidrose Behandlung',
    categories: [
      {
        category: 'Primär',
        items: [{ title: 'Achseln (axilläre Hyperhidrose)' }],
      },
      {
        category: 'Hinweis',
        items: [
          {
            title:
              'Weitere Areale nur nach individueller ärztlicher Prüfung und wenn medizinisch vertretbar.',
          },
        ],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: 'Überblick zur Behandlung gegen übermäßiges Schwitzen',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.botulinum.hyperhidrose}\u20AC*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungszeit', description: 'ca. 30–45 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Möglicher Wirkeintritt', description: 'nach ca. 10–14 Tagen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Mögliche Wirkdauer', description: 'etwa 3–6 Monate', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Betäubung', description: 'keine; Betäubungscreme möglich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Alltag', description: 'in der Regel rasch wieder möglich', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note:
      '*Richtwert nach GOÄ. Der endgültige Betrag richtet sich nach Areal, Menge und individuellem Aufwand und wird nach Aufklärung im Einzelfall festgelegt. Keine Erfolgsgarantie.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Behandlung gegen Hyperhidrose',
    steps: [
      {
        number: '01',
        title: 'Ärztliche Beratung & Indikationsprüfung',
        description:
          'Anamnese, Ausschlussgründe, ggf. Testung der Schweißverteilung. Es wird gemeinsam entschieden, ob \"botulinumtoxin a gegen schwitzen\" in Ihrem Fall sinnvoll ist.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung/Desinfektion. Auf Wunsch lokale Betäubungscreme (Einwirkzeit ca. 30 Minuten).',
      },
      {
        number: '03',
        title: 'Mikro-Injektionen im Raster',
        description:
          'Sehr oberflächliche Injektionen in einem ca. 1×1 cm Raster in das Behandlungsareal. Empfindungen sind individuell; die Betäubungscreme kann den Komfort erhöhen.',
      },
      {
        number: '04',
        title: 'Kontrolle & ggf. Auffrischung',
        description:
          'Beurteilung des Effekts nach etwa 10–14 Tagen. Auffrischungen können – je nach Verlauf – nach 3–6 Monaten erwogen werden.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Wichtige Hinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Anwendung in Schwangerschaft oder Stillzeit.' },
        { title: 'Infektionen/Entzündungen', description: 'Keine Behandlung bei lokalen Entzündungen.' },
        { title: 'Operationen', description: 'Nicht innerhalb von 2 Wochen vor/nach einer Operation.' },
        {
          title: 'Blutverdünner',
          description:
            'Medikamente wie ASS/Ibuprofen/Diclofenac nur nach ärztlicher Rücksprache pausieren – keine eigenständige Absetzung.',
        },
        { title: 'Alkohol', description: 'In den 48 Stunden vor der Behandlung besser vermeiden.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Aufrechte Haltung', description: 'Für 3–4 Stunden beibehalten.' },
        { title: 'Sport/Hitze', description: 'Für 24 Stunden keinen Sport; Sauna/Dampfbad/Hitze 2 Tage meiden.' },
        { title: 'Sonne/UV', description: '1–2 Wochen starke UV-Exposition vermeiden; Sonnenschutz beachten.' },
        { title: 'Pflege', description: 'Am Behandlungstag keine reizenden Deos/Peelings im Areal.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ärztliche Beratung in Bremen',
    description: [
      'Behandlungen mit Botulinumtoxin bei Hyperhidrose erfolgen in unserer Praxis nach individueller Aufklärung und Indikationsstellung.',
      'Es werden Nutzen, mögliche Risiken und Alternativen erläutert. Die Entscheidung für oder gegen eine Behandlung wird gemeinsam getroffen.',
      'Zertifizierte Durchführung nach aktuellen Standards. Kontraindikationen werden besprochen.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztliche Beratung zur Hyperhidrose (Botulinumtoxin) in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Anwendungen mit Botulinumtoxin in Bremen',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Faltenbehandlung mit Botulinumtoxin (Stirn, Zornesfalte, Krähenfüße)',
        title: 'Faltenbehandlung',
        description:
          'Mimikfalten wie Stirn, Zornesfalte, Krähenfüße – Aufklärung und individuelle Dosierungsplanung.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp',
        imageAlt: 'Masseter/Bruxismus – Anwendung von Botulinumtoxin',
        title: 'Masseter / Bruxismus',
        description:
          'Individuelle Bewertung bei Kieferbeschwerden/Zähneknirschen. Aufklärung zu Nutzen und Risiken.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
        imageAlt: 'Oberflächliche Botulinumtoxin-Anwendung (sog. Mesobotox / Microbotox)',
        title: 'Mesobotox / Microbotox',
        description:
          'Hautbild-orientierte Anwendung; Eignung wird individuell geprüft.',
        treatmentUrl: '/botulinumtoxin/mesobotox',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-migräne_hero.webp',
        imageAlt: 'Botulinumtoxin bei chronischer Migräne (ärztliche Anwendung)',
        title: 'Migräne',
        description: 'Therapieoption bei chronischer Migräne gemäß ärztlicher Indikation.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Botulinumtoxin gegen Schwitzen',
    faqs: [
      {
        question: 'Wie funktioniert Botulinumtoxin gegen Schwitzen?',
        answer:
          'Der Wirkstoff kann die Freisetzung von Acetylcholin an den Nervenendigungen hemmen. Dadurch kann die Aktivität der Schweißdrüsen im behandelten Areal vorübergehend reduziert sein.',
      },
      {
        question: 'Kann man übermäßiges Schwitzen mit Botulinumtoxin behandeln?',
        answer:
          'Bei axillärer Hyperhidrose kann eine ärztlich indizierte Anwendung erwogen werden, insbesondere wenn andere Maßnahmen nicht ausreichend geholfen haben. Ob die Behandlung für Sie geeignet ist, klären wir individuell.',
      },
      {
        question: 'Kann Botulinumtoxin bei Schwitzen in den Wechseljahren helfen?',
        answer:
          'Hitzewallungen und Schwitzen in den Wechseljahren haben vielfältige Ursachen. Botulinumtoxin zielt lokal auf Schweißdrüsen in einem definierten Areal (z. B. Achseln). Ob dies bei menopausalen Beschwerden sinnvoll ist, wird ärztlich geprüft; eine allgemeine Aussage ist nicht möglich.',
      },
      {
        question: 'Zahlt die Krankenkasse Botulinumtoxin gegen Schwitzen?',
        answer:
          'Bei gesetzlich Versicherten handelt es sich in der Regel um eine Selbstzahlerleistung. In Einzelfällen kann eine Kostenübernahme erwogen werden, z. B. bei nachgewiesener, therapieresistenter axillärer Hyperhidrose und entsprechender Antragstellung. Bitte wenden Sie sich an Ihre Kasse.',
      },
      {
        question: 'Was kostet eine Botulinumtoxin‑Behandlung gegen Schwitzen?',
        answer:
          `Die Kosten starten meist ab etwa ${PRICES.botulinum.hyperhidrose}\u00A0€ (Richtwert) und richten sich nach Areal, Dosierung und individuellem Aufwand. Abrechnung GOÄ-orientiert.`,
      },
      {
        question: 'Wie lange hält Botulinumtoxin gegen Schwitzen?',
        answer:
          'Die beobachtete Wirkzeit liegt häufig im Bereich von etwa 3–6 Monaten. Abweichungen sind möglich; es gibt keine Garantie für Dauer oder Ausmaß.',
      },
      {
        question: 'Welche Nebenwirkungen sind möglich?',
        answer:
          'Vorübergehende Rötungen, Schwellungen oder kleine Hämatome an den Einstichstellen sind möglich. Selten Unverträglichkeiten. Kontraindikationen (z. B. neuromuskuläre Erkrankungen, Schwangerschaft/Stillzeit) werden im Gespräch besprochen.',
      },
      {
        question: 'Gibt es Alternativen zur Botulinumtoxin Schwitzen Behandlung?',
        answer:
          'Je nach Ausprägung: Antitranspirantien, Leitungswasser-Iontophorese, medikamentöse Optionen (ärztliche Verordnung erforderlich), operative Verfahren. Welche Maßnahme passt, hängt vom Einzelfall ab.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Beratung zur Hyperhidrose in Bremen',
    subtitle:
      'Sie wünschen eine ärztliche Einschätzung zur \"botulinumtoxin schwitzen\" Behandlung? Vereinbaren Sie einen Termin zur individuellen Aufklärung.',
    primaryCTA: { text: 'Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
    { id: 'quickInfos', label: 'Überblick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Anwendungen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...benefitsData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
