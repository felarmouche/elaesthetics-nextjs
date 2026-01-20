import type { Metadata } from 'next';
import {
  AreasSection,
  ConsultationSectionProps,
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
  TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
 
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Polynukleotide Behandlung Bremen | Hautregeneration & Anti-Aging',
  description: 'Polynukleotide in Bremen: fördern Hautregeneration, mindern Falten, fördern Haarwachstum. Ärztliche Beratung zu Ablauf, Sitzungen, Kombinationen und Risiken.',
  keywords: 'Polynukleotide Bremen, Polynukleotide Behandlung Bremen, Polynukleotide Augen Bremen, Polynukleotide Haarausfall Bremen, DNA Hauttherapie Bremen',
  openGraph: {
    title: 'Polynukleotide Behandlung Bremen - Biostimulation der neuesten Generation',
    description: 'Erleben Sie die regenerative Kraft von Polynukleotiden: Hautregeneration, Faltenreduktion und Haarwachstumsförderung durch biologische DNA-Therapie in Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/polynukleotide/og-image-polynukleotide-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/polynukleotide',
  },
};

export default function PolynukleotideBehandlungPage() {
  const heroData: HeroSectionProps = {
    title: "Polynukleotide-Behandlung in Bremen",
    subtitle: "Biostimulation der neuesten Generation für natürliche Hautregeneration, Faltenreduktion und Haarwachstum.\nEntdecken Sie die regenerative Kraft biologischer DNA-Therapie.",
    imageSrc: "/assets/polynukleotide/polynukleotide_hero.webp",
    imageAlt: "Polynukleotide-Behandlung für Hautregeneration in Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Was sind Polynukleotide und wie wirken sie?",
    content: [
      "Polynukleotide sind Ketten von DNA/RNA-Bausteinen, die für ihre außergewöhnlichen regenerativen Eigenschaften bekannt sind. Diese biologischen Moleküle sind essenziell für die Zellfunktion, da sie die genetischen Informationen enthalten, die für das Wachstum, die Entwicklung und die Reparatur von Zellen und Geweben notwendig sind.",
      "Als Biostimulatoren oder Bioaktivatoren unterstützen Polynukleotide die natürliche Regenerationsfähigkeit Ihrer Haut auf zellulärer Ebene. Sie fördern die Zellregeneration, stimulieren die Kollagenproduktion und verbessern die Durchblutung durch Angiogenese – die Bildung neuer Blutgefäße.",
      "In unserer Praxis in Bremen nutzen wir Polynukleotide zur Behandlung verschiedener ästhetischer und medizinischer Anliegen: von der Hautregeneration und Faltenreduktion über die Behandlung von Aknenarben bis hin zur Förderung des Haarwachstums. Die Behandlung ist biologisch verträglich und bietet natürliche, langanhaltende Ergebnisse durch die Aktivierung körpereigener Heilungs- und Regenerationsprozesse."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche der Polynukleotide-Behandlung",
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
    title: "Die Polynukleotide-Behandlung auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.hyaluronFiller.polynukleotideHautAugenHaare || '280'}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 30-60 Min", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Wirkeintritt", description: "nach 2-4 Wochen sichtbar", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Behandlungen", description: "3-6 Sitzungen (Abstand 2-3 Wochen)", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Betäubung", description: "auf Wunsch möglich", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "i.d.R. sofort (Augen: 1 Tag)", iconUrl: "/assets/icons/gesellschaft.svg" }
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
    title: "Ablauf Ihrer Polynukleotide-Behandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Ausführliche Beratung und Hautanalyse",
        description: "In unserer Bremer Praxis analysiere ich zunächst Ihren Hautzustand und bespreche mit Ihnen Ihre individuellen Wünsche und Ziele. Wir klären gemeinsam ab, ob die Polynukleotide-Behandlung für Sie geeignet ist und welche Ergebnisse realistisch zu erwarten sind. Ich erkläre Ihnen die Wirkungsweise der Behandlung und beantworte all Ihre Fragen."
      },
      {
        number: "02",
        title: "Vorbereitung und Betäubung",
        description: "Die zu behandelnden Bereiche werden gründlich gereinigt und desinfiziert. Bei besonders empfindlichen Bereichen wie dem Augenbereich oder auf Wunsch kann eine Betäubungscreme aufgetragen werden, die etwa 20-30 Minuten einwirken muss. Nach meiner Erfahrung ist eine Betäubung bei Polynukleotid-Injektionen jedoch in der Regel nicht erforderlich."
      },
      {
        number: "03",
        title: "Präzise Injektion der Polynukleotide",
        description: "Mit einer sehr feinen Nadel wird das Polynukleotid-Gel gezielt und oberflächlich in die Haut injiziert. Die Behandlung erfolgt präzise an den vorher markierten Stellen. Die Injektion dauert je nach Behandlungsareal zwischen 15 und 30 Minuten. Ich achte dabei auf die optimale Verteilung für ein gleichmäßiges Ergebnis."
      },
      {
        number: "04",
        title: "Nachbehandlung und Pflege",
        description: "Nach der Injektion bekommen Sie eine beruhigende Maske aufgelegt, die die Haut kühlt und pflegt. Die gesamte Behandlung inklusive Betäubungscreme dauert etwa 45-60 Minuten. Ich gebe Ihnen detaillierte Anweisungen für die optimale Nachsorge mit. Ein Kontrolltermin nach 2-3 Wochen ermöglicht die Beurteilung des Behandlungserfolgs."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Polynukleotide-Behandlung",
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
          description: "Informieren Sie mich über blutverdünnende Medikamente oder Neigung zu Blutergüssen. Nach ärztlicher Rücksprache sollten diese nach Möglichkeit einige Tage vor der Behandlung pausiert werden."
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
    title: "Weitere regenerative Behandlungen in Bremen",
    treatments: [
      {
        imageUrl: "/assets/hyaluron/hyaluron-skinbooster_hero.webp",
        imageAlt: "Hyaluronsäure Skinbooster BAP-Technik für Hautregeneration",
        title: "Hyaluronsäure Skinbooster (BAP-Technik)",
        description: "Hyaluronsäure-Skinbooster mit der innovativen BAP-Technik verbessern die Hautqualität durch intensive Hydratation und Stimulation der Kollagenproduktion. Ideal für einen frischen, strahlenden Teint.",
        treatmentUrl: "/hyaluron/profhilo"
      },
      {
        imageUrl: "/assets/kollagenstimulation/kollagenstimulation_hero.webp",
        imageAlt: "Kollagenstimulation mit Calciumhydroxylapatit und Hyaluronsäure",
        title: "Kollagenstimulation",
        description: "Die Kombination aus Calciumhydroxylapatit und Hyaluronsäure stimuliert die körpereigene Kollagenproduktion für natürliche Hautstraffung und langanhaltende Volumengabe.",
        treatmentUrl: "/kollagenstimulation"
      },
      {
        imageUrl: "/assets/eigenbluttherapie/eigenbluttherapie_hero.webp",
        imageAlt: "Bild von einer Frau, welche PRF im Gesicht hat",
        title: "PRF Eigenbluttherapie",
        description: "Mit Eigenblut (Platelet-Rich Fibrin) fördern wir natürliche Regenerationsprozesse für Haut und Haare. Eine biologische Behandlung für nachhaltige Anti-Aging-Effekte.",
        treatmentUrl: "/prf"
      },
      {
        imageUrl: "/assets/mesotherapie/mesotherapie-haut_hero.webp",
        imageAlt: "Mesotherapie für die Haut mit Revitalisierung",
        title: "Mesotherapie für die Haut",
        description: "Die Mesotherapie versorgt Ihre Haut mit einem individuellen Wirkstoffcocktail. Vitamine, Mineralstoffe und Hyaluronsäure verbessern die Hautqualität von innen heraus.",
        treatmentUrl: "/mesotherapie"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Polynukleotide-Behandlung",
    faqs: [
      {
        question: "Wie wirken Polynukleotide auf die Haut?",
        answer: "Polynukleotide wirken auf zellulärer Ebene und aktivieren körpereigene Regenerationsprozesse. Sie stimulieren die Produktion neuer Hautzellen, fördern die Kollagensynthese und unterstützen die Bildung neuer Blutgefäße (Angiogenese). Zusätzlich wirken sie entzündungshemmend und wundheilend. Das Ergebnis ist eine verbesserte Hautstruktur, erhöhte Elastizität und ein insgesamt jugendlicheres, frischeres Hautbild."
      },
      {
        question: "Wie werden Polynukleotide gewonnen und sind sie sicher?",
        answer: "Injizierbare Polynukleotide werden aus Lachssperma gewonnen, was ihnen eine hohe biologische Verträglichkeit verleiht. Der Gewinnungsprozess umfasst die Isolation, Reinigung und Fragmentierung der DNA in kleinere, biologisch aktive Polynukleotide. Sie sind mit menschlichem Gewebe kompatibel und minimieren das Risiko allergischer Reaktionen. Die Sicherheit ist durch zahlreiche medizinische Studien belegt."
      },
      {
        question: "Ist die Polynukleotide-Behandlung schmerzhaft?",
        answer: "Die Behandlung verursacht nur minimale Beschwerden. Die Injektionen erfolgen mit sehr feinen Nadeln oberflächlich in die Haut. Die meisten Patienten beschreiben das Gefühl als leichtes Pieken. Bei besonders empfindlichen Bereichen wie dem Augenbereich kann auf Wunsch eine Betäubungscreme aufgetragen werden. Nach meiner Erfahrung ist eine lokale Betäubung jedoch grundsätzlich nicht erforderlich."
      },
      {
        question: "Wie viele Behandlungen sind notwendig und wie lange halten die Ergebnisse?",
        answer: "Bereits nach der ersten Sitzung können Sie positive Ergebnisse sehen. Für ein zufriedenstellendes Endergebnis empfehle ich 3-6 Behandlungssitzungen im Abstand von 2-3 Wochen. Die Anzahl richtet sich nach Ihrem individuellen Hautzustand und den gewünschten Ergebnissen. Bei fortgeschrittenen Alterserscheinungen können auch 4-5 Sitzungen sinnvoll sein. Auffrischungen sind 2-3 Mal pro Jahr empfehlenswert, um die Ergebnisse langfristig zu erhalten."
      },
      {
        question: "Wann sehe ich erste Ergebnisse nach der Behandlung?",
        answer: "Die Wirkung der Polynukleotide entfaltet sich schrittweise, da sie zelluläre Regenerationsprozesse anregen. Erste sichtbare Verbesserungen zeigen sich in der Regel nach 2-4 Wochen. Das vollständige Ergebnis entwickelt sich über mehrere Wochen und wird mit jeder weiteren Sitzung deutlicher. Die Haut wird zunehmend straffer, glatter und erhält mehr Spannkraft und Elastizität."
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer: "Die häufigsten Nebenwirkungen sind leichte Rötungen, Schwellungen und mögliche kleine Blutergüsse an den Injektionsstellen. Diese sind in der Regel mild und verschwinden innerhalb weniger Tage. In sehr seltenen Fällen kann es zu allergischen Reaktionen kommen, die innerhalb weniger Stunden oder zeitverzögert auftreten können. Personen mit bekannter Fischallergie sollten dies vorab mit mir besprechen."
      },
      {
        question: "Können Polynukleotide auch bei Haarausfall helfen?",
        answer: "Ja, Polynukleotide sind sehr effektiv zur Behandlung von Haarausfall. Sie revitalisieren die Haarfollikel, fördern und beschleunigen das Haarwachstum und verbessern die Gesundheit der Kopfhaut. Die Behandlung kann eigenständig oder in Kombination mit anderen Therapien durchgeführt werden. Besonders bewährt hat sich die Polynukleotide-Behandlung auch als unterstützende Therapie nach Haartransplantationen."
      },
      {
        question: "Was kostet eine Polynukleotide-Behandlung in Bremen?",
        answer: "Die Kosten für eine Polynukleotide-Behandlung beginnen bei etwa 280€ und richten sich nach dem Behandlungsareal und der benötigten Menge. Da in der Regel mehrere Sitzungen notwendig sind, erstelle ich Ihnen im persönlichen Beratungsgespräch in unserer Bremer Praxis einen transparenten und individuellen Behandlungsplan mit allen Kosten."
      }
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

    </div>
  );
}
