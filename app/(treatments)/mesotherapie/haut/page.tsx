import type { Metadata } from 'next';
import Script from 'next/script';
import { AreasSection, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, HubTeaserSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, TableOfContents, TOCItem } from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { eigenblut, skinbooster, peeling, polynukleotide, profhilo } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Mesotherapie für die Haut Bremen – Hyaluron & Mikronährstoffe',
  description: 'Mesotherapie für Gesicht in Bremen: Hyaluronsäure & Mikronährstoffe für strahlende Haut, Augenringe & Falten. Jetzt beraten lassen.',
  keywords: ['Mesotherapie Gesicht Bremen', 'Mesotherapie Hautqualität Bremen', 'Augenringe Behandlung Bremen', 'Hautverjüngung Bremen', 'Skinbooster Bremen'],
  openGraph: {
    title: 'Mesotherapie Bremen | Hautqualität & Glow | EL Aesthetics',
    description: 'Mesotherapie für Gesicht in Bremen: Hyaluronsäure & Mikronährstoffe für strahlende Haut, Augenringe & Falten.',
    url: 'https://elaesthetics-bremen.de/mesotherapie/haut',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/mesotherapie/nctf_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Mesotherapie Gesicht Bremen | Hautqualität & Glow | EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/mesotherapie/haut/',
  },
};

export default function MesotherapieHautPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Mesotherapie für die Haut in Bremen',
          description: 'Ärztliche Mesotherapie-Behandlung zur Verbesserung der Hautqualität mit Mikronährstoffen und Hyaluronsäure.',
          url: '/mesotherapie/haut',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Mesotherapie für Gesicht und Hautqualität',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Mikro-Injektionen mit Hyaluronsäure und Mikronährstoffen zur Verbesserung der Hautqualität, Reduzierung von Augenringen und für strahlenden Teint.',
        howPerformed: 'Mikro-Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Mesotherapie für die Haut in Bremen",
    subtitle: "Verbesserung der Hautqualität durch biorevitalisierende Injektionsbehandlung",
    imageSrc: "/assets/mesotherapie/nctf_hero.webp",
    imageAlt: "NCTF Mesotherapie für die Haut – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist Mesotherapie für die Haut?",
    content: [
      "Die Mesotherapie kombiniert verschiedene Substanzen wie Vitaminen, Aminosäuren, Mineralstoffen, Coenzymen, Antioxidantien und Hyaluronsäure, welche oberflächlich in die Haut injiziert werden. Ziel ist eine Verbesserung der Hautqualität durch Unterstützung von Zellregeneration und Feuchtigkeitsversorgung. Die Behandlung eignet sich besonders zur gezielten Auffrischung empfindlicher Hautareale wie Augenpartie, Wangen, Hals oder Handrücken. Die Injektion erfolgt über eine besonders feine Mikro-Nadeltechnik, die eine präzise und in der Regel gut verträgliche Anwendung ermöglicht.",
    ]
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

  const areasData: AreasSectionProps = {
    title: "Behandlungsbereiche der Mesotherapie",
    categories: [
      {
        category: "Bereiche",
        items: [
          { title: "Gesicht" },
          { title: "Hals" },
          { title: "Dekolleté" },
          { title: "Augenpartie" },
          { title: "Hände" },
        ]
      },
      {
        category: "Ziele",
        items: [
          { title: "Müde Haut" },
          { title: "Trockene Haut" },
          { title: "Fältchen" },
          { title: "Hyperpigmentierungen" },
        ]
      }

    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Mesotherapie für die Haut auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.hyaluronFiller.mesotherapieHaut}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 45-60 Min (inkl. Peeling & Maske)", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Wirkung", description: "nach ca. 2-3 Behandlungen", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Haltbarkeit", description: "6 Monate", iconUrl: "/assets/icons/CAL.svg" },
      { title: "Behandlungen", description: "3-5 Sitzungen alle 2-3 Wochen\nAuffrischung: 2-3x pro Jahr", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Betäubung", description: "meist nicht erforderlich", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "in der Regel sofort gesellschaftsfähig", iconUrl: "/assets/icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Mesotherapie-Behandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Beratung",
        description: "Im Beratungsgespräch klären wir Ihre Wünsche und Ziele."
      },
      {
        number: "02",
        title: "Mikroinjektion des Wirkstoffkomplexes",
        description: "Die Haut wird zunächst gründlich gereinigt. Anschließend wird der Wirkstoffkomplex mit einer speziellen Nadeltechnik in die obersten Hautschichten injiziert."
      },
      {
        number: "03",
        title: "Abschluss und Nachsorge",
        description: "Zum Abschluss wird ein Pflegeprodukt oder eine Maske aufgetragen."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Mesotherapie",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünnende Medikamente",
          description: "Verzichten Sie ca. 1 Woche vor der Behandlung auf blutverdünnende Medikamente (z.B. Aspirin, Ibuprofen, Diclofenac), um das Risiko von Blutergüssen zu minimieren. Das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden."
        },
        {
          title: "Alkohol vermeiden",
          description: "Verzichten Sie 24 Stunden vor der Behandlung auf Alkohol, da dieser die Durchblutung erhöht."
        },
        {
          title: "Gesunder Hautzustand",
          description: "Die Haut sollte intakt sein. Bei akuten Hauterkrankungen, Verletzungen, Herpes oder Entzündungen sollte die Behandlung verschoben werden."
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description: "Während der Schwangerschaft und Stillzeit sollte keine Mesotherapie durchgeführt werden."
        },
        {
          title: "Allergien",
          description: "Teilen Sie uns Unverträglichkeiten mit, insbesondere bei Allergien gegen Schalentiere (enthält Spurenelemente aus maritimen Quellen)."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Sonnenschutz",
          description: "Schützen Sie die Haut mindestens 1-2 Wochen nach der Behandlung konsequent vor direkter Sonneneinstrahlung mit einem hohen Lichtschutzfaktor (LSF 50+), um Hautreizungen und Hyperpigmentierungen vorzubeugen."
        },
        {
          title: "Nicht manipulieren",
          description: "Berühren, reiben oder massieren Sie die behandelten Stellen nicht. Dies könnte zu Irritationen führen."
        },
        {
          title: "Sport & Hitze",
          description: "Verzichten Sie für 24 Stunden auf intensive körperliche Aktivität, Sauna, Solarium und heiße Bäder."
        },
        {
          title: "Kosmetische Behandlungen",
          description: "Planen Sie für 2 Wochen keine aggressiven Gesichtsbehandlungen, Peelings oder andere kosmetische Eingriffe im behandelten Bereich."
        },
        {
          title: "Make-up",
          description: "Sie können am nächsten Tag wieder Make-up auftragen. Am Behandlungstag sollte die Haut jedoch ruhen."
        }
      ]
    }
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Hautverbesserung-Behandlungen in Bremen",
    treatments: [
      profhilo,
      eigenblut,
      peeling,
      polynukleotide,
      skinbooster
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Mesotherapie für die Haut",
    faqs: [
      {
        question: "Wer sollte die Behandlung NICHT durchführen?",
        answer: "Die Behandlung sollte nicht durchgeführt werden bei beeinträchtigter Hautbarriere, Hauterkrankungen oder -verletzungen, während einer Immuntherapie, während der Schwangerschaft und Stillzeit sowie bei einer Unverträglichkeit gegen Schalentiere."
      },
      {
        question: "Ist die Behandlung schmerzhaft?",
        answer: "Die Injektion wird als nahezu schmerzfrei und weniger traumatisch wahrgenommen. Zudem ist das Hämatomrisiko bei Verwendung von den speziellen, sehr feinen Nadeln äußerst gering."
      },
      {
        question: "Mögliche Nebenwirkungen",
        answer: "Die Behandlung gilt als risikoarm und wird im Allgemeinen gut vertragen. Das Gewebe wird schonend behandelt, weshalb sichtbare Spuren der Behandlung meist innerhalb von 24 Stunden zurückgehen.\n\nLeichte Rötungen, Schwellungen oder kleine Blutergüsse (Hämatome) an den Einstichstellen können auftreten, sind aber selten und vorübergehend. Kleinere Knötchenbildung an den Injektionsstellen kann ebenfalls vorkommen, verschwindet jedoch in der Regel von selbst.\n\nAllergische Reaktionen sind sehr selten, können aber nicht vollständig ausgeschlossen werden."
      },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="mesotherapie-haut-schema"
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
        title="Zur Übersicht: Mesotherapie"
        subtitle="Alle Mesotherapie-Behandlungen für Haut & Haare im Überblick."
        href="/mesotherapie"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}
