import type { Metadata } from 'next';
import Script from 'next/script';
import {
  AreasSection,
  type AreasSectionProps,
  ConsultationSection,
  CTASection,
  type CTASectionProps,
  FAQSection,
  type FAQSectionProps,
  HeroSection,
  type HeroSectionProps,
  IntroSection,
  type IntroSectionProps,
  ProcessSection,
  type ProcessSectionProps,
  QuickInfoSection,
  type QuickInfoSectionProps,
  RelatedLinksSection,
  TableOfContents,
  type TOCItem,
  TreatmentCareSection,
  type TreatmentCareSectionProps,
} from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';
import {
  getFAQSchema,
  getMedicalProcedureSchema,
  getWebPageSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Infusionen Bremen',
  description:
    'Ärztlich begleitete Infusionen in Bremen-Oberneuland: individuelle Auswahl nach Anamnese und Bedarf. Ablauf, Risiken und Kosten im Überblick.',
  keywords: [
    'Infusionen Bremen',
    'Vitamininfusion Bremen',
    'Infusionen Bremen',
    'Mikronährstoffinfusion Bremen',
    'Infusion Bremen Oberneuland',
    'Infusionen Kosten Bremen',
  ],
  openGraph: {
    title: 'Infusionen in Bremen – EL Aesthetics',
    description:
      'Ärztlich begleitete Vitamin- und Mikronährstoffinfusionen in Bremen-Oberneuland – individuell ausgewählt und transparent aufgeklärt.',
    url: 'https://elaesthetics-bremen.de/infusionen',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/infusionen/infusionen_hero.png',
        width: 1254,
        height: 1254,
        alt: 'Ärztlich begleitete Infusionen bei EL Aesthetics in Bremen',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/infusionen/',
  },
};

export default function InfusionenPage() {
  const heroData: HeroSectionProps = {
    title: 'Infusionen in Bremen',
    subtitle:
      'Gezielte Nährstoffzufuhr von Aminosäuren, Vitaminen & verschiedenen Mikronährstoffen für Regeneration und Vitalität.',
    imageSrc: '/assets/infusionen/infusionen_hero.png',
    imageAlt: 'Ärztlich begleitete Infusionen bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Ärztliche Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlung im Überblick', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Infusionstherapie: Was ist das?',
    content: [
      'Infusionstherapien bieten die Möglichkeit, den Körper über die Vene gezielt mit Aminosäuren, Vitaminen und weiteren Mikronährstoffen zu versorgen. Die Infusionslösungen werden nach ärztlicher Beratung entsprechend der jeweiligen Situation ausgewählt und patientenbezogen in einem spezialisierten Sterillabor einer Apotheke hergestellt.',

      'Sie können insbesondere in Phasen erhöhter körperlicher oder psychischer Belastung, bei intensiver sportlicher Aktivität, zur Unterstützung der Regeneration, bei erhöhter Infektanfälligkeit, in der Menopause sowie im Rahmen von Healthy Aging und Longevity eingesetzt werden. Auch als begleitende Unterstützung beim Gewichtsmanagement sowie zur Unterstützung von Haut, Haaren und Nägeln können entsprechende Infusionskonzepte in Betracht kommen.',

      'Was sind Aminosäuren?',

      'Aminosäuren sind grundlegende Bausteine des Körpers und werden für die Bildung von Proteinen benötigt. Sie sind unter anderem am Aufbau und Erhalt von Muskulatur, Bindegewebe, Haut, Haaren und Nägeln beteiligt und spielen eine wichtige Rolle bei zahlreichen Stoffwechselprozessen sowie bei der Bildung von Enzymen, Hormonen und weiteren körpereigenen Substanzen.',

      'Es gibt essenzielle Aminosäuren, die der Körper nicht selbst herstellen kann und deshalb über die Nahrung aufnehmen muss, sowie nicht-essenzielle Aminosäuren, die der Körper selbst bilden kann. Je nach Situation können unterschiedliche Aminosäuren von Bedeutung sein und entsprechend in einer Infusionslösung kombiniert werden.',

    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Wann kann eine Infusion erwogen werden?',
    categories: [
      {
        category: '',
        items: [
          { title: 'Burnout und Erschöpfungszustände' },
          { title: 'Erschöpfungssyndrome' },
          { title: 'Infektanfälligkeit' },
          { title: 'Menopause' },
          { title: 'Gesunde Haut, Haare und Nägel' },
          { title: 'Longevity und Prävention' },
          { title: 'unterstützend bei Gewichtsreduktion' },
          { title: 'Leistungssport' },
          { title: 'Immunsystem' },
          { title: 'Entgiftung und Entschlackung' },
          { title: 'Regeneration' }
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Infusionen auf einen Blick',
    benefits: [
      {
        title: 'Preis',
        description: `ab ${PRICES.infusionen} €`,
        iconUrl: '/assets/icons/EUR.svg',
      },
      {
        title: 'Dauer',
        description: '45 - 60 Minuten',
        iconUrl: '/assets/icons/TIME.svg',
      },
      {
        title: 'Anwendung',
        description: 'intravenös über einen Venenzugang',
        iconUrl: '/assets/icons/Spritze.svg',
      },
      {
        title: 'Alltag',
        description: 'direkt möglich',
        iconUrl: '/assets/icons/gesellschaft.svg',
      },
    ],
    note:
      '*Die Abrechnung erfolgt individuell nach der Gebührenordnung für Ärzte (GOÄ). Zusammensetzung, Material, Aufwand und gegebenenfalls erforderliche Labordiagnostik bestimmen die tatsächlichen Kosten.',
  };

  const processData: ProcessSectionProps = {
    title: 'So läuft eine Infusionsbehandlung ab',
    steps: [
      {
        number: '01',
        title: 'Ärztliche Anamnese',
        description:
          'Wir besprechen Ihre Beschwerden und Ziele sowie Vorerkrankungen, Allergien, frühere Reaktionen, Medikamente und Nahrungsergänzungsmittel.',
      },
      {
        number: '02',
        title: 'Individuelle Aufklärung',
        description:
          'Vor der Behandlung erläutern wir Inhaltsstoffe, Dosis, realistische Ziele, mögliche Risiken und Alternativen. Erst danach wird gemeinsam über die Durchführung entschieden.',
      },
      {
        number: '03',
        title: 'Venöser Zugang und kontrollierte Gabe',
        description:
          'Nach der Hautdesinfektion wird eine sterile Venenkanüle gelegt. Die verordnete Lösung läuft mit präparatabhängiger Geschwindigkeit ein; Ihr Befinden und die Einstichstelle werden dabei beobachtet.',
      },
      {
        number: '04',
        title: 'Abschluss',
        description:
          'Weitere Planung richten sich nach Präparat und individuellem Verlauf.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor und nach der Infusion',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Medikamente und Supplemente',
          description:
            'Nennen Sie alle Medikamente, Vitamine und Nahrungsergänzungsmittel. Setzen Sie verordnete Medikamente niemals eigenständig ab.',
        },
        {
          title: 'Allergien und frühere Reaktionen',
          description:
            'Teilen Sie bekannte Allergien und jede frühere Reaktion auf Infusionen, Injektionen oder Arzneimittel mit.',
        },
        {
          title: 'Befunde mitbringen',
          description:
            'Bringen Sie vorhandene relevante Laborbefunde und Arztberichte zum Termin mit. Ob weitere Diagnostik erforderlich ist, entscheiden wir individuell.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Warnzeichen ernst nehmen',
          description:
            'Bei Atemnot, Schwellungen im Gesicht oder Hals, ausgeprägtem Schwindel oder Kollaps ist sofort medizinische Notfallhilfe erforderlich.',
        },
      ],
    },
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Infusionen',
    faqs: [

      {
        question: 'Brauche ich vor der Infusion eine Blutuntersuchung?',
        answer:
          'Nicht vor jeder Infusion ist automatisch eine Blutuntersuchung nötig. Ob Laborwerte sinnvoll oder erforderlich sind, hängt von Beschwerden, gewünschtem Präparat, Vorerkrankungen und vorhandenen Befunden ab.',
      },
      {
        question: 'Wie wird entschieden, welche Infusion zu mir passt?',
        answer:
          'Entscheidend sind die medizinische Fragestellung, Ihre Vorgeschichte, Medikamente, Allergien, mögliche Wechselwirkungen und gegebenenfalls Laborwerte. Wir besprechen auch, ob eine orale Behandlung oder zunächst weitere Diagnostik sinnvoller ist.',
      },
      {
        question: 'Wie oft sollte eine Infusion wiederholt werden?',
        answer:
          'Es gibt keine für alle Personen sinnvolle Infusionskur. Ob und wann eine Wiederholung infrage kommt, wird anhand von Indikation, Fachinformation, Verträglichkeit und Verlauf entschieden.',
      },
      {
        question: 'Welche Nebenwirkungen und Risiken sind möglich?',
        answer:
          'Möglich sind unter anderem Punktionsschmerz, Bluterguss, Nachblutung, Venenreizung, lokale Infektion, Kreislaufbeschwerden oder allergische Reaktionen. Weitere Risiken hängen von Inhaltsstoffen und Dosis ab und werden vorab individuell erläutert.',
      },
      {
        question: 'Für wen ist eine Infusion möglicherweise nicht geeignet?',
        answer:
          'Das hängt vom verwendeten Präparat ab. Besondere Vorsicht kann unter anderem bei Allergien, Nieren-, Herz- oder Lebererkrankungen, Störungen des Flüssigkeits- oder Elektrolythaushalts erforderlich sein. Maßgeblich sind die individuelle Prüfung und die jeweilige Fachinformation.',
      },
      {
        question: 'Wann wird eine Infusion nicht durchgeführt?',
        answer:
          'Bei Schwangerschaft und Stillzeit wird keine Infusion durchgeführt.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Infusion ärztlich abklären lassen',
    subtitle:
      'In einem persönlichen Gespräch prüfen wir, ob eine Infusion für Ihre Situation sinnvoll ist und welche Behandlung oder Alternative medizinisch infrage kommt.',
    primaryCTA: { text: 'Beratung in Bremen anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Was ist eine Infusion?' },
    { id: 'medical-context', label: 'Nutzen & Grenzen' },
    { id: 'areas', label: 'Wann kann sie sinnvoll sein?' },
    { id: 'quickInfos', label: 'Fakten & Kosten' },
    { id: 'process', label: 'Behandlungsablauf' },
    { id: 'safety', label: 'Sicherheit & Risiken' },
    { id: 'treatmentsCare', label: 'Vor & nach der Infusion' },
    { id: 'consultation', label: 'Ärztliche Beratung' },
    { id: 'related', label: 'Weiterführende Themen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Infusionen in Bremen',
          description:
            'Ärztlich begleitete Infusionen nach individueller Anamnese, Eignungsprüfung und Aufklärung bei EL Aesthetics in Bremen-Oberneuland.',
          url: '/infusionen',
          about: {
            type: 'MedicalProcedure',
            name: 'Infusionen',
            procedureType: 'PercutaneousProcedure',
          },
        }),
        '@context': undefined,
        lastReviewed: '2026-09-01',
      },
      getMedicalProcedureSchema({
        name: 'Ärztlich begleitete Infusionen',
        type: 'MedicalProcedure',
        procedureType: 'PercutaneousProcedure',
        bodyLocation: 'Periphere Vene an Arm oder Hand',
        description:
          'Kontrollierte intravenöse Gabe einer ärztlich ausgewählten Infusionslösung nach Anamnese, Eignungsprüfung und individueller Aufklärung.',
        howPerformed:
          'Verabreichung über einen peripheren Venenzugang unter ärztlicher Begleitung und Beobachtung.',
      }),
      getFAQSchema(faqData.faqs),
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="Infusionen-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <MedicalContextSection />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection />
      <div id="related" className="scroll-mt-24">
        <RelatedLinksSection
          title="Weiterführende Informationen"
          links={[
            {
              href: '/preise',
              label: 'Kosten und Orientierungspreise',
              description:
                'Alle zentral gepflegten Preisangaben und Hinweise zur Abrechnung nach GOÄ.',
            },
            {
              href: '/longevity',
              label: 'Longevity und Regeneration',
              description:
                'Ärztlich geplante Konzepte für Hautqualität, Prävention und Regeneration.',
            },
            {
              href: '/mesotherapie',
              label: 'Mesotherapie',
              description:
                'So unterscheidet sich die lokale Mikroinjektion in Haut oder Kopfhaut von einer intravenösen Infusion.',
            },
          ]}
        />
      </div>
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}

function MedicalContextSection() {
  return (
    <section id="medical-context" className="scroll-mt-24 bg-stone-50 py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-2xl font-normal uppercase tracking-[2px] text-accent-dark md:text-4xl">
          Was kann eine Infusion leisten – und was nicht?
        </h2>
        <div className="space-y-6 text-lg font-light leading-relaxed text-stone-600">
          <p>
            Die Infusionstherapie versteht sich als unterstützende Maßnahme für Regeneration, Leistungsfähigkeit und allgemeines Wohlbefinden und ersetzt keine notwendige Diagnostik oder Behandlung einer Erkrankung.
          </p>
        </div>
      </div>
    </section>
  );
}