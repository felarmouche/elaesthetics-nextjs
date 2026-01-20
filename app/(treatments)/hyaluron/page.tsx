import type { Metadata } from 'next';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection,  CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps,   ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, TableOfContents, TOCItem } from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';
// SEO-OPTIMIERUNG: Metadaten überarbeitet
export const metadata: Metadata = {
  // Title: Hauptkeyword an den Anfang, ansprechend und prägnant.
  title: 'Hyaluron Behandlungen Bremen | Skinbooster & Filler Info',
  // Description: 150–160 Zeichen, klare Aussage & lokal.
  description: 'Hyaluron-Behandlungen in Bremen: Filler für Kontur, Skinbooster für Glow. Beratung zu Indikationen, Materialwahl, GOÄ-Kosten, Ablauf, Pflege und Risiken.',
  // Keywords: Um Long-Tail-Keywords und spezifische Behandlungen erweitert.
  keywords: 'Hyaluron Behandlung Bremen, Hyaluron Bremen, Hyaluronsäure Bremen, Faltenbehandlung Bremen, Lippen aufspritzen Bremen, Lippenunterspritzung Bremen, Faltenunterspritzung Bremen, Skinbooster Bremen, Jawline aufbauen Bremen, Wangenaufbau Bremen, Liquid Lifting Bremen',
  // OpenGraph: Angepasst für eine ansprechende Darstellung in sozialen Medien.
  openGraph: {
    title: 'Hyaluron in Bremen - Natürliche Ästhetik bei EL Aesthetics',
    description: 'Entdecken Sie professionelle Behandlungen mit Hyaluronsäure in Bremen für eine frische, jugendliche Ausstrahlung. Falten glätten, Lippen formen und Volumen aufbauen.',
    type: 'website',
    locale: 'de_DE',
    // WICHTIG: Fügen Sie hier eine absolute URL zu einem repräsentativen Bild hinzu.
    images: ['https://elaesthetics-bremen.de/assets/hyaluron/og-image-hyaluron-bremen.webp'],
  },
  // Canonical URL: Platzhalter beibehalten, muss durch die echte URL ersetzt werden.
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron',
  },
};

export default function HyaluronBremenPage() {
  // SEO-OPTIMIERUNG: Hero-Sektion mit Hauptkeyword in der H1
  const heroData: HeroSectionProps = {
    title: "Hyaluron Behandlung in Bremen",
    subtitle: "Suchen Sie nach einer professionellen Hyaluron Behandlung in Bremen?\nDann sind Sie bei El Aesthetics genau richtig. Filler, Skinbooster & vieles mehr",
    imageSrc: "/assets/hyaluron/hyaluron-filler_hero.webp",
    // Image Alt: Beschreibend und Keyword-optimiert.
    imageAlt: "Eine Frau erhält eine professionelle Hyaluronsäure-Behandlung in Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" }
  };

  // SEO-OPTIMIERUNG: Einleitungssektion mit lokalem Bezug
  const introData: IntroSectionProps = {
    title: "Was ist Hyaluronsäure und wie wirkt sie?",
    content: [
      "Hyaluron oder Hyaluronsäure ist ein natürlicher Bestandteil unserer Haut und ein entscheidender Feuchtigkeitsspeicher, der für Elastizität und Spannkraft sorgt. Mit den Jahren nimmt der körpereigene Hyaluronsäuregehalt ab, was zu Volumenverlust und Faltenbildung führt.",
      "Mit einer Hyluron Behandlung können unter anderem Falten geglättet, Gesichtskonturen wie die Jawline oder Wangen präzisiert und Lippen dezent aufgebaut werden.",
      "Zusätzlich bieten wir Skinbooster-Behandlungen an. Diese versorgen die Haut tiefenwirksam mit Feuchtigkeit, verbessern die Hautstruktur und sorgen für einen strahlenden Glow. Skinbooster nach BAP-Technik, umgangsprachlich auch Profhilo genannt (Markenname), sollen zu besserer Hautqualität verhelfen."
    ]
  };

  // SEO-OPTIMIERUNG: Behandlungssektion mit klareren Titeln und optimierten Alt-Tags
  const treatmentsData: TreatmentsSectionProps = {
    title: "Unsere Behandlungen mit Hyaluronsäure in Bremen",
    treatments: [
      {
        imageUrl: "/assets/hyaluron/hyaluron-filler_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluron-Filler (Falten & Volumen)",
        description: "Die Hyaluron Behandlung mit Fillern ist ein bewährtes Verfahren, um Falten wie Nasolabial- oder Marionettenfalten zu unterfüttern und Volumendefizite auszugleichen. Mit diesem Wirkstoff erzielen wir in Bremen beeindruckende und natürliche Effekte – in einem risikoarmen, minimal-invasiven Eingriff. Freuen Sie sich auf sofort sichtbare Ergebnisse.",
        treatmentUrl: "/hyaluron/filler"
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-skinbooster_hero.webp",
        imageAlt: "Symbolbild für Feuchtigkeit durch eine Skinbooster-Behandlung",
        title: "Skinbooster (Hydratation & Glow)",
        description: "Skinbooster revitalisieren Ihre Haut von innen heraus. Durch die tiefe Hydratation mit unvernetzter Hyaluronsäure werden feine Linien geglättet und die Haut erhält eine frische, strahlende Ausstrahlung. Diese Behandlung eignet sich in unserer Praxis in Bremen hervorragend für Gesicht, Hals, Dekolleté und Hände.",
        treatmentUrl: "/hyaluron/skinbooster"
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-profhilo_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluron-Remodellierung mit Skinbooster (BAP-Technik)",
        description: "Remodellierung – auch Bioremodulierung genannt – ist eine gewebestimulierende Hyaluron-Behandlung, die die Hautqualität sichtbar verbessert: mehr Elastizität, feinere Linien, gleichmäßigerer Teint. Im Gegensatz zu Volumenbehandlungen steht nicht die Formung im Vordergrund, sondern die Qualität des Gewebes.",
        treatmentUrl: "/hyaluron/profhilo"
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-hylase_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hylase-Flasche",
        title: "Hylase (Hyaluronidase)",
        description: "Hyaluronidase, häufig als Hylase bezeichnet, ist ein natürlich im menschlichen Körper vorkommendes Enzym, das die Fähigkeit besitzt, Hyaluronsäure gezielt aufzulösen und abzubauen.",
        treatmentUrl: "/hyaluron/hylase"
      }
    ]
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const areasData: AreasSectionProps = {
    title: "Bereiche für eine Behandlung mit Hyaluronsäure",
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
      { title: "Preis", description: `ab ${PRICES.hyaluronFiller.fillerUnterspritzung}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 30-45 Min", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Ergebnis", description: "sofort sichtbar", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Haltbarkeit", description: "6-18 Monate", iconUrl: "/assets/icons/CAL.svg" },
      { title: "Betäubung", description: "Creme möglich, oft nicht nötig", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Gesellschaftsfähig", description: "keine", iconUrl: "/assets/icons/gesellschaft.svg" }
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
        question: "Was genau ist ein Filler?",
        answer: "Hyaluronsäure-Filler ist ein speziell für ästhetische Behandlungen entwickeltes Gel, das dem körpereigenen Hyaluron nachempfunden ist. Es ist biologisch abbaubar und wird verwendet, um Falten aufzufüllen, Volumen (z.B. an Wangen oder Lippen) wiederherzustellen oder Konturen zu definieren. Je nach Anwendungsbereich gibt es Filler mit unterschiedlicher Vernetzung und Viskosität."
      },
      {
        question: "Ist eine Behandlung schmerzhaft?",
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
        question: "Was ist der Unterschied zwischen Fillern und Skinboostern?",
        answer: "Während Hyaluron-Filler primär dazu dienen, Volumen zu geben und tiefe Falten aufzufüllen, sind Skinbooster dünnflüssiger und werden zur tiefen Hydratation und Verbesserung der allgemeinen Hautqualität eingesetzt. Skinbooster polstern die Haut nicht auf, sondern spenden Feuchtigkeit von innen und sorgen für einen frischen Glow."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für ein frischeres Aussehen?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Hyaluron-Behandlung in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <ConsultationSection />
      <TreatmentCareSection {...treatmentCareData} />
      <FAQSection {...faqData} />
    </div>
  );
}
