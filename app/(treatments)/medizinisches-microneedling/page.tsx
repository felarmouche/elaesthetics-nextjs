import type { Metadata } from 'next';
import Script from 'next/script';
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
  TreatmentsSectionProps,
  CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { eigenblutMicroneedling, mesotherapieHaut, peeling, skinbooster } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Medizinisches Microneedling Bremen',
  description: 'Ärztliches Microneedling in Bremen: Angepasste Nadeltiefe für Aknenarben, Poren & Hautstruktur. Kollagen-Induktionstherapie. Jetzt Beratungstermin vereinbaren.',
  keywords: ['Medizinisches Microneedling Bremen', 'Microneedling Bremen', 'Aknenarben behandeln Bremen', 'Dermapen Bremen', 'Poren verfeinern Bremen'],
  openGraph: {
    title: 'Medizinisches Microneedling in Bremen – EL Aesthetics',
    description: 'Kollagen-Induktionstherapie mit angepasster Nadeltiefe für Aknenarben, Poren & Hautstruktur in Bremen.',
    url: 'https://elaesthetics-bremen.de/medizinisches-microneedling',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/microneedling/og-microneedling-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Medizinisches Microneedling in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/medizinisches-microneedling',
  },
};

export default function MedizinischesMicroneedlingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Medizinisches Microneedling in Bremen',
          description: 'Ärztliches Microneedling zur Hautregeneration, Narbenbehandlung und Verbesserung der Hautstruktur.',
          url: '/medizinisches-microneedling',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Medizinisches Microneedling',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Kontrollierte Mikroverletzungen der Haut zur Anregung der Kollagenproduktion und Hautregeneration bei Narben, Falten und vergrößerten Poren.',
        howPerformed: 'Microneedling-Behandlung',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Medizinisches Microneedling in Bremen",
    subtitle:
      "Medizinisches Microneedling mit dem Dermapen 4 - Verfahren zur Hautverjüngung & Regeneration",
    imageSrc: "/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp",
    imageAlt: "Medizinisches Microneedling gegen Aknenarben und Poren – EL Aesthetics Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist Medizinisches Microneedling?",
    content: [
      "Das Medizinische Microneedling ist ein schonendes, minimal-invasives Verfahren zur Hautverjüngung und Regeneration. Der Dermapen 4 erzeugt mehrere Tausend Mikrokanäle pro Sekunde. Die Nadeltiefe kann präzise auf unterschiedliche Hautzustände und -bereiche eingestellt werden.",
      "Durch die feinsten Mikroverletzungen werden die Selbstheilungsprozesse und die Bildung von körpereigenem Kollagen, Elastin und Hyaluronsäure angeregt. Das Ergebnis kann ein verjüngtes, erfrischtes und ebenmäßiges Hautbild sein.",
      "Spezielle Einstellungen ermöglichen auch die Behandlung von Narbengewebe bei guter Verträglichkeit – selbst bei sensibler Haut, Rosazea oder Couperose. Das Verfahren ist für verschiedene Hauttypen und Altersgruppen geeignet."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Behandlungsareale & Indikationen",
    categories: [
      {
        category: "Gesicht, Hals & Dekolleté",
        items: [
          { title: "Aknenarben & Narbenstrukturen" },
          { title: "Feinere Poren & glatteres Hautbild" },
          { title: "Feine Linien & beginnende Fältchen" },
          { title: "Pigmentunregelmäßigkeiten / Teint" },
          { title: "Rosazea / Couperose" },
          { title: "Hautrötungen & Schwellungen" }
        ]
      },
      {
        category: "Körper",
        items: [
          { title: "Dehnungsstreifen (z. B. Bauch, Hüfte, Oberschenkel)" },
          { title: "Allgemeine Hautstraffung / Bindegewebe" }
        ]
      },
      {
        category: "Kopfhaut",
        items: [
          { title: "Unterstützung bei Haarausfall / Anregung des Haarwachstums" }
        ]
      },
      {
        category: "Zusätzlich",
        items: [
          { title: "Verbesserte Wirkstoffaufnahme (z. B. Hyaluron, PRF)" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "med. Microneedling auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.medizinischesMicroneedling}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 60 Min", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Sitzungen", description: "3–6 Behandlungen, alle ~4 Wochen", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Auffrischung", description: "empfohlen nach ~6 Monaten", iconUrl: "/assets/icons/CAL.svg" },
      { title: "Betäubung", description: "i. d. R. nicht nötig (auf Wunsch)", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Downtime", description: "gesellschaftsfähig nach 1–3 Tagen", iconUrl: "/assets/icons/gesellschaft.svg" }
    ],
    note: "*Preise sind Richtwerte nach GOÄ und werden im Beratungsgespräch individuell festgelegt."
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

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Behandlung",
    steps: [
      {
        number: "01",
        title: "Beratung",
        description: "Im Beratungsgespräch klären wir Ihre Wünsche und Ziele."
      },
      {
        number: "02",
        title: "Vorbereitung",
        description:
          "Reinigung und Desinfektion, optional lokale Anästhesiecreme. Make-up wird entfernt."
      },
      {
        number: "03",
        title: "Microneedling",
        description:
          "Mit einem Präzisions-Pen entstehen feine Mikrokanäle. Für jede Behandlung wird ein neuer, steriler Nadelaufsatz verwendet. Die Eindringtiefe wird areal- und hauttypgerecht angepasst; optional werden Wirkstoffe wie Hyaluron oder PRF eingebracht."
      },
      {
        number: "04",
        title: "Beruhigung & Schutz",
        description:
          "Beruhigende Maske und Pflege. Hinweise zur Nachsorge und Lichtschutz. Gesamtdauer meist ca. 60 Minuten."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Behandlungs­hinweise",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutgerinnung & Haut",
          description:
            "Nach ärztlicher Rücksprache blutverdünnende Mittel möglichst 7 Tage pausieren. Solarium und aggressive Peelings vor und nach der Behandlung meiden."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        { title: "Schonung", description: "1–2 Tage kein Sport, keine Sauna." },
        { title: "UV-Schutz", description: "Konsequenter Lichtschutz (mind. LSF 30) für die nächsten Wochen. Kein Solarium." },
        { title: "Hautpflege", description: "Keine hautreizenden Produkte (Säuren, Retinoide etc.) für einige Tage." }
      ]
    }
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Verwandte Behandlungen",
    treatments: [eigenblutMicroneedling, mesotherapieHaut, peeling, skinbooster],
  };

  const faqData: FAQSectionProps = {
    title: "Häufig gestellte Fragen (FAQ)",
    faqs: [
      {
        question: "Wie wirkt Microneedling?",
        answer: "Bei dieser modernen Behandlungsmethode werden feinste Nadeln in die Haut gestochen. Die Hautzellen werden durch den Reiz stimuliert, aber nicht zerstört. Durch die zahlreichen Mikroverletzungen wird der Haut „vorgetäuscht\", es handle sich um eine große Wunde, woraufhin regenerative Botenstoffe freigesetzt werden, um die Wunde zu heilen. Durch diese Stimulierung kommt es zur Neubildung von Gefäßen sowie einem Überschuss an neu gebildetem Kollagen.\n\nEin weiterer Effekt besteht in der vorübergehenden Durchlässigkeit der Hautbarriere, die durch das Durchstoßen der Hornschicht möglich wird. Durch die entstandenen Mikrokanäle können Wirkstoffe wie Hyaluronsäure, PRP/PRF aus Eigenblut oder andere Substanzen bis in die tieferen Hautschichten geschleust werden.",
      },
      {
        question: "Für wen ist medizinisches Microneedling geeignet?",
        answer: "Die Behandlung eignet sich für Männer und Frauen aller Hauttöne und -typen. Es verbessert nicht nur die Hautstruktur und Vitalität, sondern kann auch an verschiedenen Körperstellen wie Gesicht, Hals, Dekolleté, Händen und am Körper angewendet werden.",
      },
      {
        question: "Wann ist Microneedling besonders effektiv?",
        answer: "Microneedling ist besonders wirksam bei der Behandlung von Falten, Hautalterung, Hautbildverfeinerung, Pigmentstörungen, Narben, Dehnungsstreifen, Aknenarben, Akne oder Rosazea. Es kann auch bei Haarausfall helfen und neues Haarwachstum anregen.",
      },
      {
        question: "Wie lange halten die Ergebnisse der Behandlung an?",
        answer: "Die Resultate können je nach Hauttyp und Behandlungsziel variieren. Verbesserungen bei Narben sind meist dauerhaft. Für ein langfristig verbessertes Hautbild oder Haarwachstum sind regelmäßige Auffrischungen empfohlen.",
      },
      {
        question: "Was ist der Unterschied zwischen medizinischem und kosmetischem Microneedling?",
        answer: "Beide Verfahren dienen der Hautverbesserung, unterscheiden sich jedoch grundlegend in Wirkung und Anwendung.\n\nKosmetisches Microneedling verwendet Nadeln mit einer maximalen Eindringtiefe von etwa 0,5 mm. Diese dringen nur in die oberste Hautschicht (Epidermis) und die obere Lederhaut (Dermis) ein und wirken vor allem auf die Hautoberfläche. Es zielt hauptsächlich auf oberflächliche Hautverbesserungen und die Steigerung der Aufnahme von Hautpflegeprodukten ab.\n\nMedizinisches Microneedling (auch Medical Needling genannt) arbeitet mit Nadeln, die eine Einstichtiefe von 0,5 bis 3 mm erreichen. Durch die tiefere Eindringtiefe werden gezielt strukturelle Hautschäden ausgelöst, die eine intensive Regeneration und Kollagenneubildung fördern. Diese Methode darf ausschließlich von Ärzten oder Heilpraktikern durchgeführt werden.",
      },
      {
        question: "Wie häufig darf ein Microneedling wiederholt werden?",
        answer: "Bereits nach der Behandlung ist eine deutliche Verbesserung der Haut sichtbar. Für eine Restrukturierung und Verjüngung Ihrer Haut sind 3 bis 5 Behandlungen in Folge nötig, wobei ein Abstand von ca. 4–6 Wochen empfehlenswert ist. Abhängig von der Ausgangssituation und dem Ziel der Behandlung können weitere Behandlungen notwendig werden.\n\nDie Bildung neuer Kollagenfasern kann bis zu einem Jahr dauern. Während dieser Zeit ist eine ständige Verbesserung der Hautstruktur zu beobachten. Daher kann ein endgültiges Resultat frühestens nach 12 bis 24 Wochen beurteilt werden.",
      },
      {
        question: "Wann sollte Microneedling NICHT durchgeführt werden?",
        answer: "Eine Microneedling-Behandlung sollte nicht stattfinden bei akuten Hauterkrankungen, Hautschäden, Entzündungen und frischen Narben, bei bakteriellen Infektionen sowie bei einer bekannten Blutgerinnungsstörung. Bei Verdacht auf Hautkrebs sollte dieser im Vorfeld abgeklärt werden.\n\nBestimmte Medikamente und Vorerkrankungen können ebenfalls Ausschlussgründe sein, zum Beispiel eine unbehandelte Diabetes-Erkrankung. Auch während einer Strahlen- oder Chemotherapie sollte auf eine Behandlung verzichtet werden.",
      },
      {
        question: "Wie effektiv ist Microneedling?",
        answer: "Je nach angestrebtem Ergebnis kann man mit dem Microneedling sehr effektive Ergebnisse erzielen. Porengröße, Falten, Narben, Akne-Narben, Cellulite, Pigmentstörungen, Rosazea oder erschlafftes Bindegewebe lässt sich durch eine gezielte Behandlung verbessern.\n\nWichtig ist, dass die Behandlungsintensität dem jeweiligen Hautzustand angepasst wird. Um einen nachhaltigen Effekt zu erzielen, können mehrere Einzelsitzungen erforderlich sein.\n\nJe nach angestrebtem Ergebnis kann es mehrere Monate dauern, bis sich die gewünschten Resultate einstellen. Eine erste Verbesserung der Hautstruktur kann aber schon nach der ersten Microneedling-Behandlung sichtbar sein.",
      },
      {
        question: "Was ist Plasma-Needling?",
        answer: "Bei Plasma-Needling wird plättchenreiches Plasma mit dem Needling-Pen in die Haut eingeschleust. Dafür wird Ihnen unmittelbar vor der Behandlung etwas Blut aus der Vene entnommen und das plättchenreiche Plasma nach einem bestimmten Protokoll hergestellt. Die in der Plasma enthaltenen Wachstumsfaktoren regen regenerative Prozesse und die Zellerneuerung an. Die Wirkung entfaltet sich über mehrere Wochen und das Ergebnis verbessert sich somit kontinuierlich.\n\nPRF-Matrix kann in die Haut auch durch Injektion mit oder ohne Microneedling eingebracht werden. Die Kombinationstherapie ist besonders intensiv.",
      },
      {
        question: "Mögliche Nebenwirkungen",
        answer: "Typische Nebenwirkungen nach der Behandlung sind leichte Rötungen und Schwellungen, die einem Sonnenbrand ähneln. Gelegentlich können, je nach Behandlungsindikation und gewählter Einstichtiefe, auch Blutergüsse oder leichte Krustenbildung auftreten. Diese klingen innerhalb weniger Tage ab.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für ein ebenmäßigeres Hautbild?",
    subtitle: "Vereinbaren Sie Ihren Termin für medizinisches Microneedling in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };


  return (
    <div className="min-h-screen bg-white">
      <Script
        id="medizinisches-microneedling-schema"
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
