import type { Metadata } from 'next';
import Script from 'next/script';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, HubTeaserSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, TableOfContents, TOCItem } from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { eigenblut, mesotherapieHaut, peeling, polynukleotide, profhilo } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Mesotherapie Gesicht Bremen',
  description: 'Mesotherapie für Gesicht in Bremen: Hyaluronsäure & Mikronährstoffe für strahlende Haut, Augenringe & Falten. Jetzt beraten lassen.',
  keywords: ['Mesotherapie Gesicht Bremen', 'Mesotherapie Hautqualität Bremen', 'Augenringe Behandlung Bremen', 'Hautverjüngung Bremen', 'Skinbooster Bremen'],
  openGraph: {
    title: 'Mesotherapie Gesicht Bremen | Hautqualität & Glow | EL Aesthetics',
    description: 'Mesotherapie für Gesicht in Bremen: Hyaluronsäure & Mikronährstoffe für strahlende Haut, Augenringe & Falten.',
    url: 'https://elaesthetics-bremen.de/mesotherapie/haut',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/mesotherapie/og-image-mesotherapie-haut-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Mesotherapie Gesicht Bremen | Hautqualität & Glow | EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/mesotherapie/haut',
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
    title: "Mesotherapie für Gesicht & Hautqualität in Bremen",
    subtitle: "Möchten Sie Ihre Hautqualität verbessern, Augenringe reduzieren und einen strahlenden Teint?\nMit der Mesotherapie kombinieren wir Hyaluronsäure mit wertvollen Mikronährstoffen für natürliche Hautverjüngung.",
    imageSrc: "/assets/mesotherapie/mesotherapie-haut_hero.webp",
    imageAlt: "Mesotherapie für Gesicht und Hautqualität – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist Mesotherapie für die Haut?",
    content: [
      "Die Mesotherapie für das Gesicht ist ein minimal-invasives Verfahren der ästhetischen Medizin, bei dem Hyaluronsäure und Mikronährstoffe direkt in die Haut injiziert werden.",
      "Diese biorevitalisierende Injektionsbehandlung kombiniert unvernetzte Hyaluronsäure mit einem speziell abgestimmten Komplex aus Vitaminen, Aminosäuren, Mineralstoffen, Coenzymen und Antioxidantien. Ziel ist eine Verbesserung der Hautqualität durch Unterstützung von Zellregeneration und Feuchtigkeitsversorgung.",
      "Die Behandlung eignet sich besonders zur gezielten Auffrischung empfindlicher Hautareale wie Augenpartie, Wangen, Hals oder Handrücken. Die Injektion erfolgt über eine besonders feine Mikro-Nadeltechnik, die eine präzise und in der Regel gut verträgliche Anwendung ermöglicht."
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
        category: "Gesicht",
        items: [
          { title: "Augenpartie (Augenringe, Tränenfurchen, Krähenfüße)" },
          { title: "Wangen (erschlaffte Haut, Elastizitätsverlust)" },
          { title: "Stirn (feine Linien, Knitterfalten)" },
          { title: "Mund (Raucherfalten, Oberlippenfalten)" },
          { title: "Gesamtes Gesicht (Hautqualität, Strahlkraft)" }
        ]
      },
      {
        category: "Weitere Körperbereiche",
        items: [
          { title: "Hals (Halsfalten, schlaffe Haut)" },
          { title: "Dekolleté (Knitterfalten, Pigmentflecken)" },
          { title: "Handrücken (Volumenverlust, Altersflecken)" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Mesotherapie für die Haut auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.hyaluronFiller.mesotherapieHaut}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 45-60 Min (inkl. Peeling & Maske)", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Wirkung", description: "nach 2-3 Behandlungen sichtbar", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Haltbarkeit", description: "6 Monate", iconUrl: "/assets/icons/CAL.svg" },
      { title: "Behandlungen", description: "3-5 Sitzungen alle 2-4 Wochen\nAuffrischung: 2x pro Jahr", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Betäubung", description: "nicht erforderlich", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "in der Regel sofort gesellschaftsfähig", iconUrl: "/assets/icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Mesotherapie-Behandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Beratung und Hautanalyse",
        description: "In unserer Bremer Praxis analysiere ich zunächst Ihre Haut und bespreche mit Ihnen Ihre Wünsche. Wir schauen uns gemeinsam an, welche Bereiche behandelt werden sollen und welche Ergebnisse Sie erwarten können."
      },
      {
        number: "02",
        title: "Vorbereitung der Haut",
        description: "Die Haut wird gründlich gereinigt und desinfiziert. Make-up wird entfernt. Optional führen wir ein sanftes chemisches Peeling durch, um die Aufnahme der Wirkstoffe zu optimieren."
      },
      {
        number: "03",
        title: "Mikroinjektion des Wirkstoffkomplexes",
        description: "Mit einer speziellen, besonders feinen Nadeltechnik wird der Hyaluronsäure-Mikronährstoff-Komplex in die obersten Hautschichten injiziert. Die Behandlung ist nahezu schmerzfrei und dauert etwa 20-30 Minuten."
      },
      {
        number: "04",
        title: "Abschluss und Nachsorge",
        description: "Zum Abschluss tragen wir ein beruhigendes Pflegeprodukt oder eine Maske auf. Nach der Behandlung können Sie sofort in Ihren Alltag zurückkehren. Die ersten Ergebnisse zeigen sich nach 2-3 Behandlungen, das optimale Ergebnis nach der kompletten Behandlungsserie."
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
      mesotherapieHaut
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Mesotherapie für die Haut",
    faqs: [
      {
        question: "Wie wirkt die Mesotherapie auf die Haut?",
        answer: "Der Wirkstoffkomplex wird direkt in die oberen Hautschichten injiziert und versorgt die Haut intensiv mit Feuchtigkeit, Vitaminen, Aminosäuren und Antioxidantien. Die unvernetzte Hyaluronsäure bindet Wasser in der Haut, während die Mikronährstoffe die Zellregeneration anregen und die Kollagensynthese unterstützen. Das Ergebnis: Eine straffere, glattere und strahlendere Haut mit verbesserter Struktur."
      },
      {
        question: "Welche Ergebnisse kann ich erwarten?",
        answer: "Klinische Studien zeigen beeindruckende Ergebnisse: bis zu 43% Reduktion feiner Linien, eine Steigerung der Hautfeuchtigkeit um bis zu 132%, eine Zunahme der Hautdichte um bis zu 24%, eine Verbesserung der Hautdicke um bis zu 20%, eine gleichmäßigere Hautstruktur (bis zu +52%) und eine erhöhte Strahlkraft der Haut um bis zu 144%. Die Haut wirkt frischer, gleichmäßiger und jugendlicher. Besonders bei Augenringen, feinen Falten und fahlem Teint sind die Ergebnisse deutlich sichtbar."
      },
      {
        question: "Ist die Behandlung schmerzhaft?",
        answer: "Die Mesotherapie wird als nahezu schmerzfrei beschrieben. Durch die Verwendung besonders feiner Nadeln und die spezielle Injektionstechnik ist die Behandlung sehr gut verträglich. Die meisten Patienten empfinden nur ein leichtes Prickeln. Eine Betäubung ist in der Regel nicht erforderlich."
      },
      {
        question: "Für welche Hauttypen ist die Mesotherapie geeignet?",
        answer: "Die Mesotherapie eignet sich für nahezu alle Hauttypen und Altersgruppen. Besonders profitieren Patienten mit trockener Haut, feinen Falten, Augenringen, Pigmentflecken, fahlem Teint oder Elastizitätsverlust. Auch bei empfindlicher Haut ist die Behandlung gut verträglich. In einem persönlichen Beratungsgespräch analysiere ich Ihre Haut und erstelle einen individuellen Behandlungsplan."
      },
      {
        question: "Wie viele Behandlungen sind notwendig?",
        answer: "Für optimale Ergebnisse empfehle ich eine Behandlungsserie von 3-5 Sitzungen im Abstand von 2-4 Wochen. Erste Verbesserungen zeigen sich bereits nach 2-3 Behandlungen. Das vollständige Ergebnis entwickelt sich nach Abschluss der Serie. Zur Erhaltung des Ergebnisses sind Auffrischungen 2x pro Jahr sinnvoll."
      },
      {
        question: "Gibt es Ausfallzeiten nach der Behandlung?",
        answer: "Nein, die Mesotherapie erfordert keine Ausfallzeit. Sie sind sofort gesellschaftsfähig. Leichte Rötungen oder minimale Schwellungen an den Einstichstellen können auftreten, verschwinden aber in der Regel innerhalb von 24 Stunden. Das Risiko für sichtbare Blutergüsse ist durch die feinen Nadeln äußerst gering."
      },
      {
        question: "Welche Wirkstoffe sind im Behandlungskomplex enthalten?",
        answer: "Der verwendete Wirkstoffkomplex enthält 55 sorgfältig aufeinander abgestimmte Inhaltsstoffe: 12 Vitamine (darunter A, C, E und B-Komplex), 23 Aminosäuren (Bausteine für Kollagen und Elastin), 6 Coenzyme (Energielieferanten für Zellen), 6 Mineralien (wie Zink, Magnesium) und 8 Antioxidantien sowie unvernetzte Hyaluronsäure. Diese einzigartige Kombination wurde über Jahre klinisch getestet und optimiert."
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer: "Die Mesotherapie ist sehr sicher und wird im Allgemeinen gut vertragen. Leichte Rötungen, minimale Schwellungen oder kleine Blutergüsse an den Einstichstellen können vorkommen, sind aber selten und vorübergehend. Kleinere Knötchenbildungen an den Injektionsstellen können auftreten, verschwinden aber in der Regel von selbst. Allergische Reaktionen sind sehr selten. Im Beratungsgespräch kläre ich Sie umfassend über alle Risiken auf."
      },
      {
        question: "Was kostet eine Mesotherapie in Bremen?",
        answer: "Eine Mesotherapie-Behandlung für das Gesicht beginnt bei etwa 250€ (inklusive chemischem Peeling und beruhigender Maske). Die Kosten können je nach Behandlungsbereich und -umfang variieren. Im persönlichen Beratungsgespräch in unserer Bremer Praxis erstelle ich Ihnen einen transparenten und individuellen Kostenplan."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für strahlende, jugendliche Haut?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Mesotherapie in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
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
