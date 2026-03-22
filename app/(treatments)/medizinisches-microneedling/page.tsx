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
      "Ärztlich durchgeführtes Microneedling zur Unterstützung der natürlichen Regenerationsprozesse der Haut – präzise, schonend und individuell abgestimmt.",
    imageSrc: "/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp",
    imageAlt: "Medizinisches Microneedling gegen Aknenarben und Poren – EL Aesthetics Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist Medizinisches Microneedling?",
    content: [
      "Medizinisches Microneedling ist ein schonendes, minimal-invasives Verfahren zur Hautverjüngung und -regeneration. Ein Gerät mit fortschrittlicher Mikroneedling-Technologie erzeugt mehrere Tausend Mikrokanäle pro Sekunde. Die Nadeltiefe kann präzise auf unterschiedliche Hautzustände und -bereiche eingestellt werden.",
      "Durch die feinsten Mikroverletzungen werden die Selbstheilungsprozesse und die Bildung von körpereigenem Kollagen, Elastin und Hyaluronsäure angeregt. Das Ergebnis ist ein sichtbar verjüngtes, erfrischtes und ebenmäßiges Hautbild.",
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
        title: "Beratung & Hautanalyse",
        description:
          "Wir bewerten Indikation, Hautzustand und Ziele. Daraus leiten wir Nadeltiefe, Areale und sinnvolle Wirkstoff-Kombinationen ab."
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



  const consultationData: ConsultationSectionProps = {
    title: "Ihre individuelle Microneedling-Beratung in Bremen",
    description: [
      "Wir prüfen Eignung, Indikation und Hautverträglichkeit und definieren realistische Ziele.",
      "Die Nadeltiefe wird für jedes Areal individuell festgelegt; bei Bedarf kombinieren wir geeignete Wirkstoffe (z. B. Hyaluron oder PRF).",
      "Sie erhalten klare Empfehlungen zu Behandlungsintervallen, erwartbarer Wirkung und Nachsorge."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/kontakt",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Verwandte Behandlungen",
    treatments: [
      {
        imageUrl: "/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp",
        imageAlt: "PRF Plasma-Needling zur Intensivierung",
        title: "PRF-Microneedling (Plasma-Needling)",
        description:
          "Kombination aus Needling und körpereigenem Plasma (PRF/PRP) zur zusätzlichen Regenerations-Stimulation.",
        treatmentUrl: "/eigenbluttherapie/microneedling"
      },
      {
        imageUrl: "/assets/mesotherapie/mesotherapie-haut_hero.webp",
        imageAlt: "Mesotherapie für Hautqualität",
        title: "Mesotherapie (Haut)",
        description:
          "Fein dosierte Wirkstoff-Cocktails für Glow, Feuchtigkeit und Hautqualität – ergänzend oder alternativ.",
        treatmentUrl: "/mesotherapie"
      },
      {
        imageUrl: "/assets/chemisches-peeling/chemisches-peeling_hero.webp",
        imageAlt: "Chemisches Peeling",
        title: "Chemisches Peeling",
        description:
          "Peelings unterschiedlicher Stärke für Teint-Verfeinerung und Pigmentausgleich.",
        treatmentUrl: "/chemisches-peeling"
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-skinbooster_hero.webp",
        imageAlt: "Skinbooster",
        title: "Skinbooster",
        description:
          "Intensive, langanhaltende Durchfeuchtung mittels unvernetzter Hyaluronsäure.",
        treatmentUrl: "/hyaluron/skinbooster"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufig gestellte Fragen (FAQ)",
    faqs: [
      {
        question: "Wie wirkt Microneedling?",
        answer:
          "Beim Microneedling werden mit feinen Nadeln kontrollierte Mikroverletzungen in der Haut erzeugt. Diese aktivieren die natürlichen Heilungsprozesse des Körpers und regen die Neubildung von Kollagen, Elastin und Hyaluronsäure an. Gleichzeitig wird die Aufnahme von Wirkstoffen (z. B. Hyaluron, Vitamine, PRF) deutlich verbessert."
      },
      {
        question: "Was ist der Unterschied zwischen medizinischem und kosmetischem Microneedling?",
        answer:
          "Kosmetisches Needling arbeitet meist bis ~0,5 mm und wirkt v. a. oberflächlich. Medizinisches Needling nutzt je nach Areal ca. 0,5–3 mm, triggert gezielt Regeneration und Kollagenneubildung und darf nur von Ärzten oder Heilpraktikern durchgeführt werden."
      },
      {
        question: "Für wen ist Microneedling geeignet?",
        answer:
          "Für viele Hauttypen und -töne geeignet – u. a. bei Aknenarben, Porenvergrößerung, feinen Linien, Pigmentunregelmäßigkeiten, Dehnungsstreifen, Rosazea, Akne sowie zur Unterstützung des Haarwuchses."
      },
      {
        question: "Wie oft sollte behandelt werden und wann sehe ich Ergebnisse?",
        answer:
          "Meist 3–6 Sitzungen im Abstand von etwa 4 Wochen. Erste Verbesserungen sind oft früh sichtbar, das finale Ergebnis zeigt sich nach ca. 12–24 Wochen. Die Kollagenbildung kann bis zu 12 Monate nach der Behandlung anhalten. Auffrischungen nach ~6 Monaten sind sinnvoll."
      },
      {
        question: "Wie lange halten die Ergebnisse an?",
        answer:
          "Die Kollagenbildung kann bis zu 12 Monate nach der Behandlung andauern. Bei regelmäßigen Auffrischungen (ca. alle 6 Monate) lassen sich die Ergebnisse langfristig erhalten. Die Haltbarkeit hängt auch von Hautpflege, Sonnenschutz und Lebensstil ab."
      },
      {
        question: "Wie effektiv ist Microneedling?",
        answer:
          "Microneedling hat sich als wirksame Methode zur Hautverbesserung etabliert. Es kann die Kollagen- und Elastinproduktion deutlich anregen, Narbengewebe verbessern und die Hautstruktur verfeinern. Die Wirkstoffaufnahme wird durch die Mikrokanäle um ein Vielfaches gesteigert."
      },
      {
        question: "Welche Nebenwirkungen sind möglich?",
        answer:
          "Vorübergehende Rötung/Schwellung wie nach leichtem Sonnenbrand, gelegentlich kleine Hämatome oder feine Krusten — klingen in der Regel binnen weniger Tage ab."
      },
      {
        question: "Gibt es Kontraindikationen?",
        answer:
          "Akute Hauterkrankungen/Entzündungen, frische Narben, bakterielle Infektionen, bekannte Gerinnungsstörungen, Verdacht auf Hautkrebs, unbehandelte Diabetes. In Schwangerschaft/Stillzeit sowie während Chemo-/Strahlentherapie nicht behandeln."
      },
      {
        question: "Was ist Plasma-Needling (PRF/PRP)?",
        answer:
          "Dabei wird körpereigenes, plättchenreiches Plasma (reich an Wachstumsfaktoren) auf/in die Haut gebracht, z. B. in Kombination mit Needling. Dies regt Regeneration und Zellneubildung zusätzlich an. Die Wachstumsfaktoren im Plasma unterstützen die Heilung und sorgen für eine kontinuierliche Verbesserung über mehrere Wochen."
      }
    ]
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
