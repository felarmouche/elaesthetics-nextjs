import type { Metadata } from 'next';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import {Review} from '@/types/Review'
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Botox Faltenbehandlung Bremen | Stirnfalten, Zornesfalten & Krähenfüße | EL Aesthetics',
  description: 'Professionelle Botox Faltenbehandlung in Bremen ✓ Stirnfalten, Zornesfalten & Krähenfüße glätten ✓ Natürliche Ergebnisse von erfahrenen Ärzten ✓ Jetzt Beratungstermin buchen!',
  keywords: 'Botox Faltenbehandlung Bremen, Botox Bremen, Stirnfalten behandeln Bremen, Zornesfalten Bremen, Krähenfüße behandeln Bremen, Falten glätten Bremen, Botulinumtoxin Bremen, Mimikfalten behandeln Bremen',
  openGraph: {
    title: 'Botox Faltenbehandlung in Bremen - Natürliche Ergebnisse bei EL Aesthetics',
    description: 'Entdecken Sie professionelle Botox-Behandlungen gegen Stirnfalten, Zornesfalten und Krähenfüße in Bremen. Für ein frisches, jugendliches Aussehen ohne gefrorene Mimik.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//botox/og-image-botox-faltenbehandlung-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botox/faltenbehandlung',
  },
};

export default function BotoxFaltenbehandlungPage() {
  const heroData: HeroSectionProps = {
    title: "Botox Faltenbehandlung in Bremen",
    subtitle: "Suchen Sie nach einer effektiven Behandlung gegen Stirnfalten, Zornesfalten oder Krähenfüße?\nBei EL Aesthetics erzielen wir natürliche Ergebnisse mit Botulinumtoxin.",
    imageSrc: "/elaesthetics-bremen-github/assets//botox/botox-faltenbehandlung_hero.webp",
    imageAlt: "Frau nach erfolgreicher Botox Faltenbehandlung in Bremen mit glattem Stirnbereich",
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Wie wirkt Botulinumtoxin gegen Mimikfalten?",
    content: [
      "Botulinumtoxin ist eines der bewährtesten und am besten erforschten Mittel in der ästhetischen Medizin zur Behandlung von Mimikfalten. Es entspannt gezielt die Muskulatur, die für die Entstehung dynamischer Falten verantwortlich ist.",
      "In unserer Praxis in Bremen behandeln wir vor allem Stirnfalten, Zornesfalten (Glabellafalten) und Krähenfüße (Lachfalten). Durch die präzise Injektion an den richtigen Stellen wird die Mimik sanft beruhigt – ohne Ihre natürliche Ausdrucksfähigkeit einzuschränken.",
      "Das Ergebnis: Ein entspannter, frischer Gesichtsausdruck, der Ihre Persönlichkeit bewahrt. Die Behandlung dauert nur wenige Minuten, ist nahezu schmerzfrei und erfordert keine Ausfallzeit. Erleben Sie, wie eine Botulinumtoxin-Faltenbehandlung Ihr Gesicht harmonischer und jugendlicher wirken lässt."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Behandlungs-Bereiche für Botulinumtoxin gegen Falten",
    categories: [
      {
        category: "Oberes Gesichtsdrittel",
        items: [
          { title: "Stirnfalten (horizontale Falten)" },
          { title: "Zornesfalten (Glabellafalten zwischen den Augenbrauen)" },
          { title: "Krähenfüße (Lachfalten um die Augen)" },
          { title: "Augenbrauenlift (subtile Anhebung der Brauen)" }
        ]
      },
      {
        category: "Mittleres & unteres Gesicht",
        items: [
          { title: "Bunny Lines (Rümpffalten an der Nase)" },
          { title: "Gummy Smile (übermäßige Zahnfleischexposition)" },
          { title: "Mundwinkelkorrektur (hängende Mundwinkel)" },
          { title: "Kinngrübchen (Mentalis-Falten)" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Botulinumtoxin Faltenbehandlung auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.botulinum.faltenbehandlung}€*`, iconUrl: "/elaesthetics-bremen-github/assets//icons/EUR.svg" },
      { title: "Dauer", description: "ca. 15-20 Min", iconUrl: "/elaesthetics-bremen-github/assets//icons/TIME.svg" },
      { title: "Wirkung", description: "nach 3-7 Tagen sichtbar", iconUrl: "/elaesthetics-bremen-github/assets//icons/TIME.svg" },
      { title: "Haltbarkeit", description: "3-6 Monate", iconUrl: "/elaesthetics-bremen-github/assets//icons/CAL.svg" },
      { title: "Betäubung", description: "nicht erforderlich", iconUrl: "/elaesthetics-bremen-github/assets//icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "keine (sofort gesellschaftsfähig)", iconUrl: "/elaesthetics-bremen-github/assets//icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Botulinumtoxin Faltenbehandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Ausführliche Beratung und Analyse",
        description: "In unserer Praxis in Bremen analysiere ich zunächst Ihre Mimik und Gesichtsstruktur. Wir besprechen Ihre Wünsche und ästhetischen Ziele. Ich erkläre Ihnen genau, welche Bereiche behandelt werden und welches Ergebnis realistisch ist."
      },
      {
        number: "02",
        title: "Vorbereitung der Behandlung",
        description: "Die zu behandelnden Bereiche werden gereinigt und desinfiziert. Make-up wird entfernt. Da die Injektionen mit sehr feinen Nadeln erfolgen, ist eine Betäubung in der Regel nicht notwendig."
      },
      {
        number: "03",
        title: "Präzise Injektion",
        description: "Mit einer hauchdünnen Nadel wird das Botulinumtoxin gezielt in die Muskulatur injektiert. Die Behandlung dauert nur 10 bis 20 Minuten. Ich achte dabei auf die richtige Dosierung und Platzierung, um ein natürliches, harmonisches Ergebnis zu erzielen."
      },
      {
        number: "04",
        title: "Nachsorge und Kontrolle",
        description: "Nach der Behandlung können Sie sofort Ihren Alltag fortsetzen. Erste Effekte zeigen sich nach 3-7 Tagen, das vollständige Ergebnis nach etwa 14 Tagen. Ein Kontrolltermin nach 2 Wochen in unserer Bremer Praxis ist empfehlenswert, um das Ergebnis zu beurteilen."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Behandlung",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünnende Medikamente",
          description: "Verzichten Sie nach ärztlicher Rücksprache ca. 7 Tage vor der Behandlung auf blutverdünnende Medikamente (z.B. Aspirin, Ibuprofen), um das Risiko von Blutergüssen zu minimieren."
        },
        {
          title: "Alkohol",
          description: "Vermeiden Sie 24 Stunden vor der Behandlung Alkohol, da dieser die Durchblutung erhöht und zu mehr Schwellungen führen kann."
        },
        {
          title: "Gesundheitszustand",
          description: "Sie sollten sich gesund fühlen. Bei akuten Infekten, Herpes oder Hautentzündungen sollte die Behandlung verschoben werden."
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description: "Während der Schwangerschaft und Stillzeit sind Botulinumtoxin-Behandlungen nicht erlaubt."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Kopf aufrecht halten",
          description: "Halten Sie Ihren Kopf für 4 Stunden nach der Behandlung aufrecht. Legen Sie sich nicht hin und beugen Sie sich nicht stark nach vorne."
        },
        {
          title: "Nicht manipulieren",
          description: "Reiben, massieren oder drücken Sie die behandelten Stellen nicht. Dies könnte das Botulinumtoxin in unerwünschte Bereiche verteilen."
        },
        {
          title: "Sport & Hitze",
          description: "Verzichten Sie für 24 Stunden auf Sport, Sauna, Solarium und heiße Bäder. Hitze kann die Wirkung beeinträchtigen."
        },
        {
          title: "Kosmetische Behandlungen",
          description: "Planen Sie für 2 Wochen keine Gesichtsbehandlungen, Peelings oder andere kosmetische Eingriffe im Gesicht."
        }
      ]
    }
  };

  const reviews : Review[] = [
    {
      id:1,
      name: "Sandra G.",
      rating: 2,
      text: "Ich war heute das zweite Mal bei der jungen, lieben und vor allem kompetenten Ärztin. Sie weiß definitiv was sie tut und ich fühle mich einfach sehr gut aufgehoben. Ich freue mich schon auf das nächste Mal und ich kann sie ruhigen Gewissens weiter empfehlen.",
      date: "2024-09-15"
    },
    {
      id:2,
      name: "Bianca S.",
      rating: 3,
      text: "Die Liebe Kübra macht wirklich tolle Arbeit, ich kann ihre Praxis jedem nur von Herzen empfehlen, meine Mutter und ich haben uns jetzt schon wiederholt bei ihr behandeln lassen und sind mehr als zufrieden mit den Ergebnissen. Sie hat einfach ein Auge für die Ästhetik und geht genau auf die Wünsche ihrer Patienten ein. Ihre Beratung ist sehr aufklärend und sie hat mich vorher sehr gut aufgeklärt. Die Ergebnisse sehen sehr natürlich aus. Die Praxis ist sehr schön eingerichtet und hygienisch. Außerdem geht sie sehr einfühlsam mit den Patienten um, sodass einem die Angst vor der Behandlung genommen wird. Man fühlt sich bei ihr sehr wohl. Vielen Dank für die tolle Arbeit! Ich freue mich schon auf meine nächste Behandlung.",
      date: "2024-08-22"
    },
    {
      id:3,
      name: "Layla E.",
      rating: 4,
      text: "Super nette, ehrliche Beratung. Ich wurde gut aufgeklärt und Schritt für Schritt durch die Behandlung geführt. Ich hatte vorher etwas Angst, die wurde mir aber direkt genommen und habe mich sehr wohlgefühlt. Bin auch richtig happy mit dem Endergebnis und würde sie jedem weiterempfehlen.",
      date: "2024-07-10"
    },
    {
      id:4,
      name: "Maria K.",
      rating: 5,
      text: "Absolut professionell und sehr herzlich! Die Behandlung war schmerzfrei und das Ergebnis ist fantastisch. Ich komme definitiv wieder.",
      date: "2024-06-18"
    },
    {
      id:5,
      name: "Julia M.",
      rating: 5,
      text: "Ich bin begeistert! Die Beratung war ausführlich, die Behandlung sanft und das Ergebnis natürlich und wunderschön. Vielen Dank!",
      date: "2024-05-25"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre Expertin für Botulinumtoxin Faltenbehandlung in Bremen",
    description: [
      "Sie möchten Mimikfalten reduzieren und dabei ein natürliches Aussehen bewahren?",
      "Mein Name ist Ola El-Armouche, ich bin Ärztin mit Spezialisierung auf ästhetische Medizin und Gründerin von EL Aesthetics. Mit langjähriger Erfahrung in der Behandlung mit Botulinumtoxin verhelfe ich Ihnen zu einem frischen, jugendlichen Erscheinungsbild – individuell und präzise dosiert.",
      "Ich bin zertifiziert für Botulinumtoxin- und Filler-Behandlungen und Mitglied der Deutschen Gesellschaft für ästhetische Botulinum- und Fillertherapie e.V. (DGBT). Durch kontinuierliche Fortbildungen und die Teilnahme an internationalen Fachkongressen bleibe ich auf dem neuesten Stand der ästhetischen Medizin.",
      "In meiner Praxis in Bremen steht Ihre Zufriedenheit im Mittelpunkt. Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin und entdecken Sie, wie eine Botulinumtoxin-Behandlung Ihr Gesicht harmonischer und entspannter wirken lassen kann."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp",
    imageAlt: "Ärztin Ola El-Armouche im Beratungsgespräch für eine Botulinumtoxin Faltenbehandlung in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Botulinumtoxin Behandlungen in Bremen",
    treatments: [
      {
        imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-masseter_hero.webp",
        imageAlt: "Botox Behandlung des Masseter-Muskels zur Gesichtskonturierung",
        title: "Masseter-Behandlung (Jawline)",
        description: "Durch gezielte Botulinumtoxin-Injektionen in den Kaumuskel (Masseter) kann die Gesichtsform harmonisiert und eine markante Jawline geschaffen werden. Auch bei Zähneknirschen (Bruxismus) ist diese Behandlung sehr wirksam.",
        treatmentUrl: "/botox/masseter"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-microbotox_hero.webp",
        imageAlt: "Microbotox Behandlung für feinere Hautstruktur und Porenverfeinung",
        title: "Microbotox (Skin Quality)",
        description: "Microbotox wird flächig in die oberen Hautschichten injiziert und verbessert die Hautqualität, verfeinert Poren und reduziert die Talgproduktion. Ideal für einen ebenmäßigen, glatten Teint.",
        treatmentUrl: "/botox/microbotox"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-hyperhidrose_hero.webp",
        imageAlt: "Botox Behandlung gegen übermäßiges Schwitzen",
        title: "Hyperhidrose-Behandlung",
        description: "Bei übermäßigem Schwitzen (Hyperhidrose) kann Botulinumtoxin die Schweißproduktion deutlich reduzieren. Die Behandlung ist besonders effektiv an Achseln, Händen und Füßen.",
        treatmentUrl: "/botox/hyperhidrose"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-migräne_hero.webp",
        imageAlt: "Botox zur Behandlung chronischer Migräne",
        title: "Migräne-Behandlung",
        description: "Chronische Migränepatienten können durch gezielte Botulinumtoxin-Injektionen an bestimmten Kopf- und Nackenpunkten eine deutliche Reduktion der Anfallshäufigkeit und Schmerzintensität erfahren.",
        treatmentUrl: "/botox/migraene"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Botulinumtoxin Faltenbehandlung",
    faqs: [
      {
        question: "Wie funktioniert Botox gegen Falten?",
        answer: "Botulinumtoxin blockiert die Übertragung von Nervensignalen auf die Gesichtsmuskulatur. Die behandelten Muskeln entspannen sich, wodurch die darüber liegende Haut glatter wird. Dynamische Falten, die durch wiederholte Mimikbewegungen entstehen, werden deutlich reduziert oder verschwinden ganz."
      },
      {
        question: "Ist eine Botulinumtoxin-Behandlung schmerzhaft?",
        answer: "Die Behandlung verursacht nur minimale Beschwerden. Die Injektionen erfolgen mit sehr feinen Nadeln und dauern nur wenige Sekunden pro Einstichstelle. Die meisten Patienten beschreiben das Gefühl als leichtes Pieken. Eine Betäubung ist in der Regel nicht erforderlich."
      },
      {
        question: "Wann sehe ich das Ergebnis und wie lange hält es?",
        answer: "Die ersten Effekte zeigen sich nach 3-7 Tagen. Das vollständige Ergebnis entwickelt sich nach etwa 14 Tagen. Die Wirkung hält durchschnittlich 3-6 Monate. Mit regelmäßigen Auffrischungen kann die Haltbarkeit optimiert werden, da sich die Muskulatur an den entspannten Zustand gewöhnt."
      },
      {
        question: "Sieht man nach der Behandlung, dass ich Botulinumtoxin hatte?",
        answer: "Bei korrekter Anwendung und natürlicher Dosierung ist Botulinumtoxin nicht erkennbar. Das Ziel ist eine sanfte Entspannung der Mimik, nicht eine gefrorene Stirn. Sie können weiterhin alle Gesichtsausdrücke zeigen, nur die tiefen Falten werden geglättet. In meiner Praxis lege ich großen Wert auf natürliche, harmonische Ergebnisse."
      },
      {
        question: "Welche Nebenwirkungen und Risiken gibt es?",
        answer: "Botulinumtoxin-Behandlungen sind sehr sicher, wenn sie von qualifizierten Ärzten durchgeführt werden. Leichte Rötungen, kleine Blutergüsse oder minimale Schwellungen an den Einstichstellen können auftreten und klingen innerhalb weniger Tage ab. Sehr selten kann es zu einem leichten Hängen des Augenlids kommen, was sich aber vollständig zurückbildet. Im Beratungsgespräch kläre ich Sie umfassend über alle Risiken auf."
      },
      {
        question: "Kann ich nach der Behandlung sofort wieder arbeiten gehen?",
        answer: "Ja, Sie sind sofort gesellschaftsfähig. Die Behandlung hinterlässt keine sichtbaren Spuren außer möglicherweise winzigen Einstichstellen, die schnell verblassen. Sie sollten nur für einige Stunden auf Sport und starkes Bücken verzichten."
      },
      {
        question: "Was kostet eine Botulinumtoxin Faltenbehandlung in Bremen?",
        answer: "Die Kosten richten sich nach der Anzahl der behandelten Bereiche und der benötigten Menge an Botulinumtoxin. Eine Behandlung beginnt bei etwa 200€ für einen einzelnen Bereich. Im persönlichen Beratungsgespräch in unserer Bremer Praxis erstelle ich Ihnen einen transparenten und individuellen Kostenplan."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für ein entspanntes, jugendliches Aussehen?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Botulinumtoxin Faltenbehandlung in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "Ihre Praxis für Botulinumtoxin in Bremen: EL Aesthetics",
    description: "In unserer modernen Praxis im Herzen von Bremen bieten wir Ihnen Botulinumtoxin-Behandlungen auf höchstem medizinischen Niveau. Wir legen Wert auf natürliche Ergebnisse, präzise Technik und eine vertrauensvolle Atmosphäre.",
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
      <PatientReviews reviews={reviews} title="Erfahrungen unserer Patienten" subtitle='Unsere Patienten schätzen vor allem die natürlichen Ergebnisse unserer Behandlungen und den einfühlsamen Umgang in unserer Praxis für ästhetische Medizin in Hanau. Viele berichten, wie zufrieden sie mit den Ergebnissen und der individuellen Beratung sind, die auf ihre persönlichen Wünsche abgestimmt ist.' />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}