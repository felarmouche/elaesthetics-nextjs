import type { Metadata } from "next";
import Script from "next/script";
import {
  CTASection,
  TOCItem,
  TableOfContents,
  AreasSection,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
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
  HubTeaserSection,
} from "@/components/TreatmentPageComponents";
import { PRICES } from "@/lib/constants";
import {
  getWebPageSchema,
  getMedicalProcedureSchema,
  getFAQSchema,
} from "@/lib/schema";

// 1. METADATA OPTIMIERUNG
// Fokus: Long-Tail Keywords (Zornesfalte, Krähenfüße) + Lokalisierung (Bremen)
export const metadata: Metadata = {
  title: "Faltenbehandlung Bremen | Zornesfalte & Stirn | EL Aesthetics",
  description:
    "Ärztliche Faltenbehandlung mit Botulinumtoxin in Bremen. Gezielte Glättung von Zornesfalten, Stirnfalten & Krähenfüßen. Natürliche Ergebnisse. Jetzt beraten lassen.",
  keywords: [
    "Faltenbehandlung Botox Bremen",
    "Zornesfalte entfernen Bremen",
    "Stirnfalten glätten Bremen",
    "Krähenfüße Behandlung Bremen",
  ],
  openGraph: {
    title: "Faltenbehandlung mit Botulinumtoxin in Bremen – EL Aesthetics",
    description:
      "Gezielte Glättung von Zornesfalten, Stirnfalten & Krähenfüßen. Natürliche Ergebnisse in Bremen.",
    url: "https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung",
    siteName: "EL Aesthetics Bremen",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/assets/botulinumtoxin/og-image-botox-faltenbehandlung-bremen.webp",
        width: 1200,
        height: 630,
        alt: "Faltenbehandlung mit Botulinumtoxin bei EL Aesthetics Bremen",
      },
    ],
  },
  alternates: {
    canonical: "https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung",
  },
};

export default function BotulinumtoxinFaltenbehandlungPage() {
  const heroData: HeroSectionProps = {
    title: "Faltenbehandlung mit Botulinumtoxin in Bremen",
    subtitle:
      "Gezielte Behandlung von Mimik-Falten. Erfahren Sie, wie mit präziser Dosierung verschiedene Falten wie Zornesfalte, Stirnfalten und Krähenfüße effektiv geglättet werden können.",
    imageSrc: "/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp",
    imageAlt:
      "Faltenbehandlung mit Botulinumtoxin an der Stirn – EL Aesthetics Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungszonen", href: "#areas" },
  };

  const tocItems: TOCItem[] = [
    { id: "intro", label: "Wirkung" },
    { id: "areas", label: "Zonen (Zornesfalte etc.)" },
    { id: "quickInfos", label: "Fakten & Preise" },
    { id: "process", label: "Ablauf" },
    { id: "treatmentsCare", label: "Verhaltenstipps" },
    { id: "faq", label: "Häufige Fragen" },
  ];

  const introData: IntroSectionProps = {
    title: "Wie funktioniert die Faltenunterspritzung?",
    content: [
      // E-E-A-T: Wir erklären es medizinisch korrekt, aber verständlich.
      "Die Faltenbehandlung mit Botulinumtoxin ist ein ästhetisches, nicht chirurgisches Verfahren zur gezielten Glättung mimischer Falten.",
      "Botulinumtoxin wirkt, indem es die Signalübertragung zwischen Nerv und Muskel blockiert. Dadurch entspannt sich der Muskel und die darüberliegende Haut glättet sich. Besonders effektiv ist dies bei dynamischen Falten, die durch Muskelbewegungen entstehen, wie der Zornesfalte oder den Krähenfüßen.",
      "Die Behandlung wird individuell auf Ihre Anatomie und Mimik abgestimmt, um möglichst natürliche Ergebnisse zu erzielen. Bei El Aesthetics Bremen setzen wir auf präzise Dosierung und moderne Injektionstechniken.",
    ],
  };

  const areasData: AreasSectionProps = {
    title: "Welche Falten behandeln wir?",
    // SEO-Hack: Strukturierte Daten für Google List-Snippets
    categories: [
      {
        category: "Die häufigsten Indikationen",
        items: [
          {
            title: "Zornesfalte (Glabella)",
            description:
              "Die senkrechten Falten zwischen den Augenbrauen, die oft streng wirken lassen.",
          },
          {
            title: "Stirnfalten (Sorgenfalten)",
            description:
              "Horizontale Linien auf der Stirn, die durch Augenbrauenhochziehen entstehen.",
          },
          {
            title: "Krähenfüße (Lachfalten)",
            description:
              "Seitliche Fältchen an den Augen, die sich strahlenförmig ausbreiten.",
          },
          {
            title: "Bunny Lines",
            description: "Kleine Fältchen am Nasenrücken beim Lachen.",
          },
          {
            title: "Pflasterstein-Kinn",
            description:
              "Unregelmäßige Struktur am Kinn durch den Mentalis-Muskel.",
          },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Behandlungsinfos auf einen Blick",
    benefits: [
      {
        title: "Kosten",
        description: `ab ${PRICES.botulinum.faltenbehandlung.zone1},-€`,
        iconUrl: "/assets/icons/EUR.svg",
      },
      {
        title: "Wirkungseintritt",
        description: "ca. 1-2 Wochen",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Haltbarkeit",
        description: "ca. 3–6 Monate",
        iconUrl: "/assets/icons/CAL.svg",
      },
      {
        title: "Betäubung",
        description: "Nicht nötig",
        iconUrl: "/assets/icons/Spritze.svg",
      },
      {
        title: "Gesellschaftsfähig",
        description: "In der Regel sofort",
        iconUrl: "/assets/icons/gesellschaft.svg",
      },
    ],
    note: "**Rechtlicher Hinweis:** Die genannten Preise sind Richtwerte nach GOÄ. Botulinumtoxin ist ein verschreibungspflichtiges Medikament. Eine Behandlung erfolgt nur nach ärztlicher Untersuchung und Aufklärung, sofern keine Kontraindikationen vorliegen.",
  };

  const processData: ProcessSectionProps = {
    title: "So läuft Ihre Behandlung in Bremen ab",
    steps: [
      {
        number: "01",
        title: "Persönliche Beratung",
        description:
          "Wir erstellen ein individuelles Behandlungskonzept, um Ihre persönlichen Bedürfnisse zu erfüllen.",
      },
      {
        number: "02",
        title: "Die Behandlung",
        description:
          "Das Botulinumtoxin wird mit einer sehr dünnen Nadel in den Zielmuskel injiziert. Die gesamte Behandlung dauert maximal 30 Minuten.",
      },
      {
        number: "03",
        title: "Nachsorge & Effekt",
        description:
          "In der Regel sind Sie sofort wieder alltagstauglich. Die Wirkung entfaltet sich meist über die nächsten 14 Tage.",
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Vorher & Nachher: Wichtige Hinweise",
    beforeTreatment: {
      title: "Davor",
      instructions: [
        {
          title: "Blutverdünner",
          description:
            "7 Tage vor der Behandlung möglichst keine blutverdünnenden Medikamente (z. B. Aspirin, Ibuprofen, Diclofenac) einnehmen.",
        },
        {
          title: "Alkoholkonsum",
          description:
            "2 Tage vor der Behandlung kein Alkoholgenuss empfohlen.",
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description:
            "Keine Behandlung während Schwangerschaft oder Stillzeit.",
        },
        {
          title: "Entzündungen",
          description:
            "Bei Hautentzündungen oder Infektionen im Behandlungsbereich Termin verschieben.",
        },
        {
          title: "Operationen",
          description: "Keine Behandlung 2 Wochen vor oder nach einer OP",
        },
      ],
    },
    afterTreatment: {
      title: "Danach",
      instructions: [
        {
          title: "Körperhaltung",
          description: "Für 3–4 Stunden eine aufrechte Haltung bewahren.",
        },
        {
          title: "Sport & Schwimmbad",
          description:
            "Vermeiden Sie für 2 Tage körperliche Anstrengung und Schwimmbadbesuche.",
        },
        {
          title: "Wärme & Sonne",
          description:
            "1–2 Wochen auf Sauna, Solarium und intensive Sonneneinstrahlung verzichten.",
        },
        {
          title: "UV-Schutz",
          description:
            "Achten Sie 4–6 Wochen lang auf konsequenten Sonnenschutz.",
        },
        {
          title: "Gesichtsbehandlungen",
          description:
            "2 Wochen lang keine Gesichtsmassagen oder kosmetischen Behandlungen durchführen.",
        },
        {
          title: "Alkohol",
          description:
            "Mindestens 2 Tage verzichten, um die volle Wirksamkeit nicht zu beeinträchtigen.",
        },
      ],
    },
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Ergänzende Behandlungen",
    treatments: [
      {
        imageUrl: "/assets/botulinumtoxin/botox-masseter_hero.webp",
        imageAlt: "Masseter Botox Behandlung",
        title: "Masseter (Facial Slimming)",
        description:
          "Behandlung des Kauskels bei Zähneknirschen oder für eine schmalere Gesichtsform.",
        treatmentUrl: "/botulinumtoxin/masseter",
      },
      {
        imageUrl: "/assets/botulinumtoxin/botox-microbotox_hero.webp",
        imageAlt: "Mesobotox Behandlung",
        title: "Micro-Botulinumtoxin (Hautbild)",
        description:
          "Feinste Injektionen für verfeinerte Poren und einen ebenmäßigen Teint.",
        treatmentUrl: "/botulinumtoxin/mesobotox",
      },
      // Wir verlinken NICHT auf Hyperhidrose/Migräne hier, um den Kontext "Ästhetik/Gesicht" sauber zu halten (Topical Cluster).
      // Stattdessen z.B. Hyaluron, falls vorhanden, oder wir lassen es bei 2.
    ],
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Faltenunterspritzung",
    // 2026 SEO Hack: "Direct Answer" Formatierung in den ersten Sätzen.
    faqs: [
      {
        question: "Wirkt mein Gesicht nach der Behandlung starr?",
        answer:
          'Nein, bei korrekter Dosierung nicht. Unser Ziel in Bremen ist die Erhaltung Ihrer natürlichen Mimik. Sie sollen entspannt aussehen, nicht "eingefroren" (Frozen Face). Wir dosieren lieber vorsichtig und legen bei Bedarf nach.',
      },
      {
        question: "Wie lange hält das Ergebnis an der Stirn oder Zornesfalte?",
        answer:
          'Die Wirkung hält durchschnittlich 3 bis 6 Monate an. Da sich der Muskel mit der Zeit an die Entspannung "gewöhnt", können die Intervalle bei regelmäßiger Anwendung oft länger werden.',
      },
      {
        question: "Was ist der Unterschied zu Hyaluron?",
        answer:
          "Botulinumtoxin entspannt Muskeln (gut für Mimikfalten wie Zornesfalte). Hyaluron ist ein Filler, der Volumen gibt (gut für statische Falten wie Nasolabialfalten oder Lippenaufbau). Oft ist eine Kombination sinnvoll.",
      },
      {
        question: "Ab wann sollte man mit Botulinumtoxin anfangen?",
        answer:
          'Es gibt kein festes Alter. Eine Behandlung kann präventiv sinnvoll sein, bevor sich Falten tief in die Haut eingraben ("präventives Botulinumtoxin"). Dies wird individuell im Beratungsgespräch entschieden.',
      },
      {
        question: "Was kostet eine Zornesfalten-Behandlung in Bremen?",
        answer:
          "Die Kosten beginnen meist ab ca. 150€, variieren aber je nach Materialaufwand und GOÄ-Faktor. Ein verbindlicher Preis kann seriös erst nach Ansicht des Befundes genannt werden.",
      },
      {
        question: "Gibt es Risiken oder Nebenwirkungen?",
        answer:
          "Ernsthafte Nebenwirkungen sind sehr selten. Möglich sind vorübergehende Rötungen, kleine Blutergüsse oder leichte Kopfschmerzen. Eventuelle Asymmetrien lassen sich meist nach 2 Wochen korrigieren. Da der Wirkstoff vollständig abgebaut wird, sind dauerhafte Schäden ausgeschlossen. Über seltene Restrisiken klären wir Sie vorab persönlich auf.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Wünschen Sie eine Beratung?",
    subtitle:
      "Vereinbaren Sie Ihren Termin bei EL Aesthetics in Bremen. Wir analysieren Ihr Gesicht und erstellen einen Behandlungsplan, der zu Ihnen passt.",
    primaryCTA: { text: "Termin online buchen", href: "/kontakt" },
    secondaryCTA: {
      text: "Telefon: +49 155 66919635",
      href: "tel:+4915566919635",
    },
  };

  // --- SCHEMA ERSTELLUNG (DER WICHTIGE TEIL) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Die Seite selbst (WebPage)
      {
        ...getWebPageSchema({
          name: "Faltenbehandlung mit Botulinumtoxin Bremen",
          description:
            "Ärztliche Behandlung mimischer Falten wie Zornesfalte und Krähenfüße.",
          url: "/botulinumtoxin/faltenbehandlung",
        }),
        "@context": undefined, // Kontext entfernen, da wir im @graph sind
      },
      // 2. Die Behandlung (Procedure)
      getMedicalProcedureSchema({
        name: "Faltenunterspritzung mit Botulinumtoxin",
        type: "MedicalProcedure",
        bodyLocation: "Face",
        description:
          "Gezielte Glättung mimischer Falten wie Zornesfalte, Stirnfalten und Krähenfüße mit Botulinumtoxin.",
        howPerformed: "Injektion",
      }),
      // 3. FAQ Schema (direkt im Graph)
      getFAQSchema(faqData.faqs),
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Script für Structured Data */}
      <script
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
        title="Mehr als nur Falten?"
        subtitle="Entdecken Sie auch unsere medizinischen Anwendungen bei Zähneknirschen oder Migräne."
        href="/botulinumtoxin"
      />

      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
