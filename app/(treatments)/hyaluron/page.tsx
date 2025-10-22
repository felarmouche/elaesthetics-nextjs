import type { Metadata } from 'next';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';
// SEO-OPTIMIERUNG: Metadaten überarbeitet
export const metadata: Metadata = {
  // Title: Hauptkeyword an den Anfang, ansprechender und prägnant.
  title: 'Hyaluron Bremen | Faltenbehandlung, Filler & Skinbooster | EL Aesthetics',
  // Description: Keyword-Prominenz, klare USPs und starke Handlungsaufforderung.
  description: 'Professionelle Behandlung mit Hyaluron in Bremen ✓ Faltenunterspritzung, Lippenaufbau & Skinbooster ✓ Natürliche Ergebnisse von erfahrenen Ärzten ✓ Buchen Sie jetzt Ihren Beratungstermin!',
  // Keywords: Um Long-Tail-Keywords und spezifische Behandlungen erweitert.
  keywords: 'Hyaluron Bremen, Hyaluronsäure Bremen, Faltenbehandlung Bremen, Lippen aufspritzen Bremen, Lippenunterspritzung Bremen, Faltenunterspritzung Bremen, Skinbooster Bremen, Jawline aufbauen Bremen, Wangenaufbau Bremen, Liquid Lifting Bremen',
  // OpenGraph: Angepasst für eine ansprechende Darstellung in sozialen Medien.
  openGraph: {
    title: 'Hyaluron in Bremen - Natürliche Ästhetik bei EL Aesthetics',
    description: 'Entdecken Sie professionelle Behandlungen mit Hyaluronsäure in Bremen für eine frische, jugendliche Ausstrahlung. Falten glätten, Lippen formen und Volumen aufbauen.',
    type: 'website',
    locale: 'de_DE',
    // WICHTIG: Fügen Sie hier eine absolute URL zu einem repräsentativen Bild hinzu.
    images: ['https://elaesthetics-bremen.de/assets//hyaluron/og-image-hyaluron-bremen.webp'],
  },
  // Canonical URL: Platzhalter beibehalten, muss durch die echte URL ersetzt werden.
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron-bremen',
  },
};

export default function HyaluronBremenPage() {
  // SEO-OPTIMIERUNG: Hero-Sektion mit Hauptkeyword in der H1
  const heroData: HeroSectionProps = {
    // Title (H1): Hauptkeyword "Hyaluron Bremen" prominent platziert.
    title: "Behandlung mit Hyaluron in Bremen",
    subtitle: "Suchen Sie nach einer professionellen Faltenbehandlung mit Hyaluron in Bremen?\nDann sind Sie bei El Aesthetics genau richtig.",
    imageSrc: "/assets//hyaluron/hyaluron-filler_hero.webp",
    // Image Alt: Beschreibend und Keyword-optimiert.
    imageAlt: "Eine Frau erhält eine professionelle Hyaluron-Behandlung in Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  // SEO-OPTIMIERUNG: Einleitungssektion mit lokalem Bezug
  const introData: IntroSectionProps = {
    title: "Was ist Hyaluronsäure und wie wirkt sie?",
    content: [
      "Hyaluronsäure ist ein natürlicher Hauptbestandteil unserer Haut und ein entscheidender Feuchtigkeitsspeicher, der für Elastizität und Spannkraft sorgt. Mit den Jahren nimmt der körpereigene Hyaluronsäuregehalt ab, was zu Volumenverlust und Faltenbildung führt.",
      "In unserer Praxis in Bremen nutzen wir hochwertige Hyaluronsäure-Filler, um diesen Volumenverlust gezielt auszugleichen. Falten werden geglättet, Gesichtskonturen wie die Jawline oder Wangen präzisiert und Lippen dezent aufgebaut.",
      "Zusätzlich bieten wir Skinbooster-Behandlungen an. Diese versorgen die Haut tiefenwirksam mit Feuchtigkeit, verbessern die Hautstruktur und sorgen für einen strahlenden Glow. Erleben Sie bei uns in Bremen, wie Hyaluron Ihr Hautbild sichtbar verjüngen kann."
    ]
  };

  // SEO-OPTIMIERUNG: Behandlungssektion mit klareren Titeln und optimierten Alt-Tags
  const treatmentsData: TreatmentsSectionProps = {
    title: "Unsere Behandlungen mit Hyaluron in Bremen",
    treatments: [
      {
        imageUrl: "/assets//hyaluron/hyaluron-filler_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluronsäure-Filler (Falten & Volumen)",
        description: "Die Behandlung mit Hyaluron-Fillern ist ein bewährtes Verfahren, um Falten wie Nasolabial- oder Marionettenfalten zu unterfüttern und Volumendefizite auszugleichen. Mit diesem Wirkstoff erzielen wir in Bremen beeindruckende und natürliche Effekte – in einem risikoarmen, minimal-invasiven Eingriff. Freuen Sie sich auf sofort sichtbare Ergebnisse.",
        treatmentUrl: "/hyaluron/filler"
      },
      {
        imageUrl: "/assets//hyaluron/hyaluron-skinbooster_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Symbolbild für Feuchtigkeit durch eine Skinbooster-Behandlung",
        title: "Skinbooster (Hydratation & Glow)",
        description: "Skinbooster revitalisieren Ihre Haut von innen heraus. Durch die tiefe Hydratation mit unvernetzter Hyaluronsäure werden feine Linien geglättet und die Haut erhält eine frische, strahlende Ausstrahlung. Diese Behandlung eignet sich in unserer Praxis in Bremen hervorragend für Gesicht, Hals, Dekolleté und Hände.",
        treatmentUrl: "/hyaluron/skinbooster"
      },
      {
        imageUrl: "/assets//hyaluron/hyaluron-profhilo_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluron-Remodellierung (BAP-Technik)",
        description: "Remodellierung – auch Bioremodulierung genannt – ist eine gewebestimulierende Hyaluron-Behandlung, die die Hautqualität sichtbar verbessert: mehr Elastizität, feinere Linien, gleichmäßigerer Teint. Im Gegensatz zu Volumenbehandlungen steht nicht die Formung im Vordergrund, sondern die Qualität des Gewebes.",
        treatmentUrl: "/hyaluron/profhilo"
      },
      {
        imageUrl: "/assets//hyaluron/hyaluron-hylase_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hylase-Flasche",
        title: "Hylase (Hyaluronidase)",
        description: "Hyaluronidase, häufig als Hylase bezeichnet, ist ein natürlich im menschlichen Körper vorkommendes Enzym, das die Fähigkeit besitzt, Hyaluronsäure gezielt aufzulösen und abzubauen.",
        treatmentUrl: "/hyaluron/hylase"
      }
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Bereiche für eine Hyaluron-Behandlung",
    categories: [
      {
        category: "Faltenbehandlung",
        items: [
          { title: "Nasolabialfalten" },
          { title: "Marionettenfalten (Mundwinkelfalten)" },
          { title: "Oberlippenfältchen (Raucherfältchen)" },
          { title: "Halsfalten & Dekolleté" }
        ]
      },
      {
        category: "Volumenaufbau & Konturierung",
        items: [
          { title: "Lippen aufspritzen & konturieren" },
          { title: "Wangenaufbau (Liquid Lift)" },
          { title: "Kinnaufbau & Kinnkorrektur" },
          { title: "Jawline-Konturierung" },
          { title: "Nasenkorrektur ohne OP" }
        ]
      },
      {
        category: "Gesichtsharmonisierung",
        items: [
          { title: "Harmonisierung des Gesichtsprofils" },
          { title: "Liquid Lifting" },
          { title: "Augenringe unterspritzen (Tränenrinne)" }
        ]
      },
      {
        category: "Hautverjüngung",
        items: [
          { title: "Handrückenverjüngung" },
          { title: "Skinbooster für Glow & Feuchtigkeit" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Hyaluron-Behandlung auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.hyaluronFiller.fillerUnterspritzung}€*`, iconUrl: "/assets//icons/EUR.svg" },
      { title: "Dauer", description: "ca. 30-45 Min", iconUrl: "/assets//icons/TIME.svg" },
      { title: "Ergebnis", description: "sofort sichtbar", iconUrl: "/assets//icons/TIME.svg" },
      { title: "Haltbarkeit", description: "6-18 Monate", iconUrl: "/assets//icons/CAL.svg" },
      { title: "Betäubung", description: "Creme möglich, oft nicht nötig", iconUrl: "/assets//icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "keine (sofort gesellschaftsfähig)", iconUrl: "/assets//icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Hyaluron-Behandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Individuelles Beratungsgespräch",
        description: "Zu Beginn analysieren wir in unserer Praxis in Bremen Ihre Wünsche und die Ausgangssituation. Wir klären, ob Ihre ästhetischen Ziele mit einer Hyaluron-Unterspritzung optimal erreicht werden können und erstellen einen persönlichen Behandlungsplan."
      },
      {
        number: "02",
        title: "Vorbereitung der Haut",
        description: "Vor der Behandlung wird das Areal sorgfältig gereinigt und desinfiziert. Make-up-Reste werden entfernt. Auf Wunsch kann eine Betäubungscreme aufgetragen werden, meist ist dies jedoch nicht erforderlich."
      },
      {
        number: "03",
        title: "Die Unterspritzung",
        description: "Die Injektion des Hyaluron-Gels erfolgt präzise und dauert je nach Umfang nur 30 bis 45 Minuten. Ich wende dabei, je nach Ziel und Region, verschiedene Techniken an, um ein harmonisches und natürliches Ergebnis zu gewährleisten."
      },
      {
        number: "04",
        title: "Nachsorge und Kontrolle",
        description: "Direkt nach der Unterspritzung kann der Bereich bei Bedarf leicht gekühlt werden. Sie erhalten von mir alle wichtigen Hinweise für die Tage nach der Behandlung. Ein Kontrolltermin nach ca. 14 Tagen in unserer Bremer Praxis ist empfehlenswert."
      }
    ]
  };

  const consultationData: ConsultationSectionProps = {
    title: "Ihr persönlicher Beratungstermin in Bremen",
    description: ["Sie wünschen sich eine Veränderung und möchten mehr über die Möglichkeiten einer Hyaluron-Behandlung erfahren?", "Mein Name ist Ola El-Armouche, ich bin Ärztin mit Spezialisierung auf ästhetische Medizin und Gründerin von EL Aesthetics. In meiner Praxis kombiniere ich klassische, minimalinvasive Behandlungen wie Botulinumtoxin und Hyaluronsäure-Filler mit innovativen regenerativen Verfahren – individuell abgestimmt auf Ihre Bedürfnisse und Ihre Haut.", "Ich bin zertifiziert für Botulinumtoxin- und Filler-Behandlungen und Mitglied der Deutschen Gesellschaft für ästhetische Botulinum- und Fillertherapie e.V. (DGBT). Durch regelmäßige Fortbildungen, Workshops und Fachkongresse halte ich mein Wissen auf dem neuesten Stand – für sichere und moderne Behandlungen auf fachlich höchstem Niveau.", "In unserer Arztpraxis in Bremen nehmen wir uns Zeit für Sie. Vereinbaren Sie noch heute Ihren unverbindlichen Beratungstermin und fühlen Sie sich wieder wohl in Ihrer Haut."],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/assets//tinified/IMG_7364.webp",
    imageAlt: "Ärztin Ola El-Armouche im Beratungsgespräch für eine Hyaluron-Behandlung in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
};

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Behandlung",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünnende Medikamente",
          description: "Setzen Sie ca. 7 Tage vor der Behandlung blutverdünnende Medikamente (z.B. Aspirin, Ibuprofen) nach ärztlicher Rücksprache ab."
        },
        {
          title: "Alkohol & Drogen",
          description: "Verzichten Sie 24 Stunden vor der Behandlung auf Alkohol."
        },
        {
          title: "Gesundheitszustand",
          description: "Sie sollten sich gesund fühlen. Bei akuten Infekten, Herpes, Impfungen oder Zahnbehandlungen in den letzten 2 Wochen sollte der Termin verschoben werden."
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description: "Behandlungen sind während der Schwangerschaft oder Stillzeit ausgeschlossen."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Sport & Anstrengung",
          description: "Verzichten Sie für 48 Stunden auf Sport und schwere körperliche Arbeit."
        },
        {
          title: "Druck & Massage",
          description: "Die behandelten Stellen nicht massieren oder starkem Druck aussetzen."
        },
        {
          title: "Hitze & Sonne",
          description: "Vermeiden Sie für ca. 1-2 Wochen intensive Sonneneinstrahlung, Solarium und Saunabesuche."
        },
        {
          title: "Weitere Behandlungen",
          description: "Planen Sie für 2 Wochen keine Impfungen, Zahnarztbesuche oder kosmetische Gesichtsbehandlungen."
        }
      ]
    }
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Hyaluron-Behandlung in Bremen",
    faqs: [
      {
        question: "Was genau ist ein Hyaluronsäure-Filler?",
        answer: "Hyaluronsäure-Filler ist ein speziell für ästhetische Behandlungen entwickeltes Gel, das dem körpereigenen Hyaluron nachempfunden ist. Es ist biologisch abbaubar und wird verwendet, um Falten aufzufüllen, Volumen (z.B. an Wangen oder Lippen) wiederherzustellen oder Konturen zu definieren. Je nach Anwendungsbereich gibt es Filler mit unterschiedlicher Vernetzung und Viskosität."
      },
      {
        question: "Ist eine Behandlung mit Hyaluronsäure schmerzhaft?",
        answer: "Das Schmerzempfinden ist individuell, die meisten Patienten empfinden die Behandlung jedoch als gut erträglich. Die meisten hochwertigen Hyaluron-Präparate enthalten bereits ein lokales Betäubungsmittel (Lidocain). Zusätzlich kann vorab eine Betäubungscreme aufgetragen werden, um den Komfort zu maximieren."
      },
      {
        question: "Wie lange hält das Ergebnis einer Hyaluron-Unterspritzung?",
        answer: "Die Haltbarkeit hängt von verschiedenen Faktoren ab, wie dem verwendeten Produkt, der behandelten Region und dem individuellen Stoffwechsel. In der Regel hält die Wirkung zwischen 6 und 18 Monaten. Das Ergebnis kann jederzeit durch eine Auffrischungsbehandlung erhalten werden."
      },
      {
        question: "Welche Risiken und Nebenwirkungen gibt es?",
        answer: "Behandlungen mit Hyaluronsäure gelten als sehr sicher, wenn sie von qualifizierten Ärzten durchgeführt werden. Leichte Rötungen, Schwellungen oder kleine Blutergüsse an der Einstichstelle sind normal und klingen meist innerhalb weniger Tage ab. Über ernstere, aber sehr seltene Risiken wie Gefäßverschlüsse klären wir Sie im persönlichen Gespräch umfassend auf."
      },
      {
        question: "Was ist der Unterschied zwischen Hyaluron-Fillern und Skinboostern?",
        answer: "Während Hyaluron-Filler primär dazu dienen, Volumen zu geben und tiefe Falten aufzufüllen, sind Skinbooster dünnflüssiger und werden zur tiefen Hydratation und Verbesserung der allgemeinen Hautqualität eingesetzt. Skinbooster polstern die Haut nicht auf, sondern spenden Feuchtigkeit von innen und sorgen für einen frischen Glow."
      },
      {
        question: "Was kostet eine Hyaluron-Behandlung in Ihrer Praxis in Bremen?",
        answer: "Die Kosten für eine Hyaluron-Behandlung sind individuell und richten sich nach der benötigten Materialmenge und dem Behandlungsaufwand. Die Preise beginnen bei ca. 250€. Im Rahmen Ihres persönlichen Beratungsgesprächs in unserer Bremer Praxis erstellen wir Ihnen einen detaillierten und transparenten Kostenplan."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für ein frischeres Aussehen?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Hyaluron-Behandlung in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "Ihre Praxis für Ästhetik: EL Aesthetics Bremen",
    description: "In unserer modernen Praxis im Herzen von Bremen bieten wir Ihnen Hyaluron-Behandlungen auf höchstem Niveau. Wir legen Wert auf eine vertrauensvolle Atmosphäre, individuelle Beratung und natürliche, ästhetische Ergebnisse, die Ihre Persönlichkeit unterstreichen.",
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
      <TreatmentsSection {...treatmentsData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <ConsultationSection {...consultationData} />
      <TreatmentCareSection {...treatmentCareData} />
      <FAQSection {...faqData} />

    </div>
  );
}