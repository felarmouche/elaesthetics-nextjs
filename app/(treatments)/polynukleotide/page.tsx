import type { Metadata } from 'next';
import Script from 'next/script';
import {
  AreasSection,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
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
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps,
  CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { profhilo, biostimulation, eigenblut, mesotherapieHaut } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Polynukleotide Bremen – Hautregeneration',
  description: 'Polynukleotide in Bremen: Lachs-DNA-basierte Hautregeneration für Falten, Augenbereich & Haarausfall. Ärztliche Beratung zu Ablauf & Kosten. Jetzt Termin vereinbaren.',
  keywords: ['Polynukleotide Bremen', 'Polynukleotide Augen Bremen', 'Polynukleotide Haarausfall Bremen', 'Lachs-DNA Hauttherapie Bremen'],
  openGraph: {
    title: 'Polynukleotide-Behandlung in Bremen – EL Aesthetics',
    description: 'Lachs-DNA-basierte Hautregeneration für Falten, Augenbereich & Haarausfall. Ärztliche Behandlung in Bremen.',
    url: 'https://elaesthetics-bremen.de/polynukleotide',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/polynukleotide/og-image-polynukleotide-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Polynukleotide-Behandlung in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/polynukleotide',
  },
};

export default function PolynukleotideBehandlungPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Polynukleotide-Behandlung in Bremen',
          description: 'Ärztliche Biostimulation mit Polynukleotiden für Hautregeneration und Haarwachstumsförderung.',
          url: '/polynukleotide',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Polynukleotide-Behandlung',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Biostimulation mit Lachs-DNA-Fragmenten (Polynukleotiden) zur Förderung der Hautregeneration, Faltenreduktion und Haarwachstum.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Polynukleotide in Bremen",
    subtitle: "Biostimulation mit Polynukleotiden (Lachs-DNA) - Hautregeneration, Faltenreduktion & Haarwachstum",
    imageSrc: "/assets/polynukleotide/polynukleotide_hero.webp",
    imageAlt: "Polynukleotide-Behandlung für Hautregeneration und Anti-Aging – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" }
  };

  const introData: IntroSectionProps = {
    title: "Was sind Polynukleotide?",
    content: [
      "Polynukleotide sind Ketten von DNA/RNA-Bausteinen, die aus Lachs-DNA gewonnen werden und für ihre regenerativen Eigenschaften bekannt sind. Diese Moleküle sind essenziell für die Zellfunktion, die für das Wachstum, die Entwicklung und die Reparatur von Zellen und Geweben notwendig sind.",
      "Polynukleotide werden daher oft als Biostimulatoren oder Bioaktivatoren bezeichnet.",
      "Die Behandlung kann Falten und Hyperpigmentierungen reduzieren, sowie die Haut revitalisieren und regenerieren. Zudem kann die Spannkraft, die Elastizität und die Hydratation der Haut verbessert werden.",
      "Besondere Anwendungsbereiche sind die Augenregion, Narben (insbesondere Aknenarben) und Haarausfall."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche der Polynukleotid-Filler",
    categories: [
      {
        category: "Haare",
        items: [
          { title: "Haarwachstumsförderung bei Haarausfall" },
          { title: "Revitalisierung der Kopfhaut" },
          { title: "Unterstützung nach Haartransplantationen" }
        ]
      },
      {
        category: "Gesicht & Haut",
        items: [
          { title: "Hautregeneration und Hautverjüngung" },
          { title: "Faltenreduktion (feine Linien und tiefere Falten)" },
          { title: "Verbesserung der Hautstruktur und Elastizität" },
          { title: "Behandlung von Aknenarben und Narbengewebe" },
          { title: "Reduktion von Hyperpigmentierungen" },
          { title: "Hals und Dekolleté" },
          { title: "Verbesserung der Hauthydratation" }
        ]
      },
      {
        category: "Augenbereich",
        items: [
          { title: "Reduktion dunkler Augenringe" },
          { title: "Glättung feiner Linien und Fältchen" },
          { title: "Straffung der empfindlichen Augenpartie" },
          { title: "Verbesserung der Hautqualität um die Augen" }
        ]
      }

    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Polynukleotid-Behandlung auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.hyaluronFiller.polynukleotideHautAugenHaare || '280'}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 30-60 Min", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Wirkeintritt", description: "nach 2-4 Wochen sichtbar", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Behandlungen", description: "3-4 Sitzungen (Abstand 2-3 Wochen)", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Betäubung", description: "auf Wunsch möglich", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Gesellschaftsfähig", description: "i.d.R. sofort (Augen: nach ca. 1 Tag)", iconUrl: "/assets/icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Anwendungsbereiche' },
    { id: 'quickInfos', label: 'Auf einen Blick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const processData: ProcessSectionProps = {
    title: "Ablauf der Behandlung mit Polynukleotiden",
    steps: [
      {
        number: "01",
        title: "Ausführliche Beratung und Hautanalyse",
        description: "Umfassende Anamnese, Klärung von Kontraindikationen und individuelle Aufklärung.",

      },
      {
        number: "02",
        title: "Vorbereitung und Betäubung",
        description: "Die zu behandelnden Bereiche werden gründlich gereinigt und desinfiziert. Bei besonders empfindlichen Bereichen wie dem Augenbereich oder auf Wunsch kann eine Betäubungscreme aufgetragen werden, die etwa 20-30 Minuten einwirken muss."
      },
      {
        number: "03",
        title: "Injektion der Polynukleotide",
        description: "Mit einer sehr feinen Nadel wird der Wirkstoff gezielt und oberflächlich in die Haut injiziert."
      },
      {
        number: "04",
        title: "Nachbehandlung und Pflege",
        description: "Nach der Injektion bekommen Sie eine beruhigende Maske aufgelegt, die die Haut kühlt und pflegt."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Behandlung",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Gesundheitszustand",
          description: "Sie sollten sich gesund fühlen. Bei akuten Infekten, aktiver Herpes-Infektion oder starker Akne sollte die Behandlung verschoben werden."
        },
        {
          title: "Fischallergie abklären",
          description: "Da Polynukleotide aus Lachs gewonnen werden, sollten Personen mit bekannter Fischallergie vor der Behandlung die Verträglichkeit des konkreten Präparats mit mir abklären."
        },
        {
          title: "Blutverdünnende Medikamente",
          description: "Informieren Sie mich über blutverdünnende Medikamente oder Neigung zu Blutergüssen. Diese sollten nach Möglichkeit einige Tage vor der Behandlung pausiert werden – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden."
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description: "Während der Schwangerschaft und Stillzeit sind Polynukleotide-Behandlungen nicht empfohlen."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Behandelte Bereiche schonen",
          description: "Am Tag der Behandlung sollten Sie die behandelten Bereiche nicht massieren oder manipulieren. Vermeiden Sie starkes Reiben oder Drücken der Haut."
        },
        {
          title: "Hitze und Kälte vermeiden",
          description: "Verzichten Sie für einige Tage auf Sauna, Dampfbad, Solarium, eisige Temperaturen und direkte UV-Strahlung. Schützen Sie Ihre Haut mit guter Sonnencreme (LSF 50+)."
        },
        {
          title: "Sport und körperliche Anstrengung",
          description: "Vermeiden Sie am ersten Tag nach der Behandlung schwere körperliche Arbeit, Sport und Kopfüber-Bewegungen, um Schwellungen zu minimieren."
        },
        {
          title: "Kosmetische Behandlungen pausieren",
          description: "Planen Sie für die ersten zwei Tage nach der Behandlung keine kosmetischen Behandlungen, Peelings oder andere Eingriffe im behandelten Bereich."
        }
      ]
    }
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere regenerative Behandlungen",
    treatments: [profhilo, biostimulation, eigenblut, mesotherapieHaut],
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Behandlung",
    faqs: [
      {
        question: "Wie wirken Polynukleotide auf die Haut?",
        answer: "Polynukleotide wirken auf zellulärer Ebene und aktivieren körpereigene Regenerationsprozesse. Sie stimulieren die Produktion neuer Hautzellen, fördern die Kollagensynthese und unterstützen die Bildung neuer Blutgefäße (Angiogenese). Zusätzlich wirken sie entzündungshemmend und wundheilend. Das Ergebnis ist eine verbesserte Hautstruktur, erhöhte Elastizität und ein insgesamt jugendlicheres, frischeres Hautbild."
      },
      {
        question: "Wie werden Polynukleotide gewonnen und sind sie sicher?",
        answer: "Injizierbare Polynukleotide werden aus Lachssperma gewonnen. Sie sind mit menschlichem Gewebe kompatibel. Die Sicherheit ist durch zahlreiche medizinische Studien belegt."
      },
      {
        question: "Wie viele Behandlungen sind notwendig und wie lange halten die Ergebnisse?",
        answer: "Bereits 2 Wochen nach der ersten Behandlung können erste Ergebnisse sichtbar sein. Für ein zufriedenstellendes Endergebnis werden 3-4 Behandlungssitzungen im Abstand von 2-3 Wochen empfohlen. Die Anzahl richtet sich nach Ihrem individuellen Hautzustand, der Indikation und den gewünschten Ergebnissen."
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer: "Mögliche Nebenwirkungen sind beispielsweise leichte Rötungen, Schwellungen und mögliche kleine Blutergüsse an den Injektionsstellen. Diese sind in der Regel mild und verschwinden innerhalb weniger Stunden bis Tage. Sie werden im Beratungsgespräch ausführlich über alle möglichen Nebenwirkungen informiert."
      },
      {
        question: "Können Polynukleotide auch bei Haarausfall helfen?",
        answer: "Ja, Polynukleotide sind sehr effektiv zur Behandlung von Haarausfall. Sie revitalisieren die Haarfollikel, fördern und beschleunigen das Haarwachstum und verbessern die Gesundheit der Kopfhaut. Die Behandlung kann eigenständig oder in Kombination mit anderen Therapien durchgeführt werden. Besonders bewährt hat sich die Polynukleotide-Behandlung auch als unterstützende Therapie nach Haartransplantationen."
      },
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für natürliche Hautregeneration?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Polynukleotide-Behandlung in Bremen und entdecken Sie die regenerative Kraft biologischer DNA-Therapie.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="polynukleotide-schema"
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
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />

    </div>
  );
}
