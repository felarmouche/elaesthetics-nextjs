import type { Metadata } from 'next';
import {
  AreasSection,
  ConsultationSectionProps,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
  CTASection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  LocationSection,
  LocationSectionProps,
  ProcessSection,
  ProcessSectionProps,
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Polynukleotide Behandlung Bremen | Hautregeneration & Anti-Aging | EL Aesthetics',
  description: 'Polynukleotide-Behandlung in Bremen ✓ Hautregeneration, Faltenreduktion & Haarwachstum ✓ Jetzt Beraten lassen!',
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
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
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

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sandra G.",
      rating: 5,
      text: "Ich war heute das zweite Mal bei der jungen, lieben und vor allem kompetenten Ärztin. Sie weiß definitiv was sie tut und ich fühle mich einfach sehr gut aufgehoben. Ich freue mich schon auf das nächste Mal und ich kann sie ruhigen Gewissens weiter empfehlen.",
      date: "2024-09-15"
    },
    {
      id: 2,
      name: "Bianca S.",
      rating: 5,
      text: "Die Liebe Kübra macht wirklich tolle Arbeit, ich kann ihre Praxis jedem nur von Herzen empfehlen, meine Mutter und ich haben uns jetzt schon wiederholt bei ihr behandeln lassen und sind mehr als zufrieden mit den Ergebnissen. Sie hat einfach ein Auge für die Ästhetik und geht genau auf die Wünsche ihrer Patienten ein. Ihre Beratung ist sehr aufklärend und sie hat mich vorher sehr gut aufgeklärt. Die Ergebnisse sehen sehr natürlich aus. Die Praxis ist sehr schön eingerichtet und hygienisch. Außerdem geht sie sehr einfühlsam mit den Patienten um, sodass einem die Angst vor der Behandlung genommen wird. Man fühlt sich bei ihr sehr wohl. Vielen Dank für die tolle Arbeit! Ich freue mich schon auf meine nächste Behandlung.",
      date: "2024-08-22"
    },
    {
      id: 3,
      name: "Layla E.",
      rating: 5,
      text: "Super nette, ehrliche Beratung. Ich wurde gut aufgeklärt und Schritt für Schritt durch die Behandlung geführt. Ich hatte vorher etwas Angst, die wurde mir aber direkt genommen und habe mich sehr wohlgefühlt. Bin auch richtig happy mit dem Endergebnis und würde sie jedem weiterempfehlen.",
      date: "2024-07-10"
    },
    {
      id: 4,
      name: "Maria K.",
      rating: 5,
      text: "Absolut professionell und sehr herzlich! Die Behandlung war schmerzfrei und das Ergebnis ist fantastisch. Ich komme definitiv wieder.",
      date: "2024-06-18"
    },
    {
      id: 5,
      name: "Julia M.",
      rating: 5,
      text: "Ich bin begeistert! Die Beratung war ausführlich, die Behandlung sanft und das Ergebnis natürlich und wunderschön. Vielen Dank!",
      date: "2024-05-25"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre Expertin für Polynukleotide-Behandlungen in Bremen",
    description: [
      "Sie möchten die regenerative Kraft von Polynukleotiden für Ihre Haut oder Ihr Haar nutzen?",
      "Mein Name ist Ola El-Armouche, ich bin Ärztin mit Spezialisierung auf ästhetische und regenerative Medizin und Gründerin von EL Aesthetics. Mit fundierter Erfahrung in biologischen Hauttherapien biete ich Ihnen innovative Behandlungen mit Polynukleotiden für natürliche, nachhaltige Ergebnisse.",
      "Durch kontinuierliche Fortbildungen und die Teilnahme an internationalen Fachkongressen bleibe ich stets auf dem neuesten Stand der regenerativen Medizin. Ich bin Mitglied der Deutschen Gesellschaft für ästhetische Botulinumtoxin- und Fillertherapie e.V. (DGBT) und arbeite ausschließlich mit hochwertigen, biologisch verträglichen Präparaten.",
      "In meiner Praxis in Bremen steht Ihre individuelle Betreuung im Mittelpunkt. Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin und entdecken Sie, wie Polynukleotide Ihre Haut regenerieren und verjüngen können."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/assets/tinified/IMG_7364.webp",
    imageAlt: "Ärztin Ola El-Armouche im Beratungsgespräch für Polynukleotide-Behandlung in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
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
        imageUrl: "/assets/eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp",
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
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "Ihre Praxis für Polynukleotide-Behandlungen in Bremen: EL Aesthetics",
    description: "In unserer modernen Praxis im Herzen von Bremen bieten wir Ihnen innovative Polynukleotide-Behandlungen auf höchstem medizinischen Niveau. Wir legen Wert auf biologisch verträgliche Therapien, natürliche Ergebnisse und eine vertrauensvolle Atmosphäre.",
    location: {
      address: "Richtepad 14, 28355 Bremen",
      phone: "0155 66919635",
      email: "info@elaesthetics-bremen.de",
      openingHours: [
        "Termine nach Vereinbarung"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten"
        subtitle="Unsere Patienten schätzen vor allem die natürlichen Ergebnisse unserer regenerativen Behandlungen und den einfühlsamen Umgang in unserer Praxis für ästhetische Medizin in Bremen. Viele berichten, wie zufrieden sie mit den Ergebnissen und der individuellen Beratung sind, die auf ihre persönlichen Wünsche abgestimmt ist."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}