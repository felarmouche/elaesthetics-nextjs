import type { Metadata } from "next";
import { botoxMasseter, mesobotox } from "@/data/treatments";
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
  title: "Botulinumtoxin gegen Falten Bremen – Stirn & Zornesfalte",
  description:
    "Botulinumtoxin Faltenbehandlung in Bremen: Zornesfalte, Stirnfalten & Krähenfüße gezielt glätten mit Botulinumtoxin. Natürliche Ergebnisse durch ärztliche Präzision.",
  keywords: [
    "Botulinumtoxin Faltenbehandlung Bremen",
    "Zornesfalte entfernen Bremen",
    "Stirnfalten glätten Bremen",
    "Krähenfüße Botox Bremen",
  ],
  openGraph: {
    title: "Botulinumtoxin gegen Falten in Bremen – Zornesfalte & Stirnfalten",
    description:
      "Zornesfalte, Stirnfalten & Krähenfüße gezielt glätten mit Botulinumtoxin. Ärztliche Behandlung in Bremen.",
    url: "https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung",
    siteName: "EL Aesthetics Bremen",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp",
        width: 1200,
        height: 630,
        alt: "Faltenbehandlung mit Botulinumtoxin bei EL Aesthetics Bremen",
      },
    ],
  },
  alternates: {
    canonical: "https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung/",
  },
};

export default function BotulinumtoxinFaltenbehandlungPage() {
  const heroData: HeroSectionProps = {
    title: "Faltenbehandlung mit Botulinumtoxin in Bremen",
    subtitle:
      "Gezielte Behandlung von Mimik-Falten, wie z.B. Zornesfalte, Stirnfalten, Krähenfüße & mehr",
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
    title: "Wie funktioniert die Faltenbehandlung?",
    content: [
      // E-E-A-T: Wir erklären es medizinisch korrekt, aber verständlich.
      "Die Faltenbehandlung mit Botulinumtoxin ist ein minimal-invasives Verfahren zur gezielten Glättung mimischer Falten.",
      "Botulinumtoxin wirkt, indem es die Signalübertragung zwischen Nerv und Muskel hemmt. Dadurch entspannt sich die Muskulatur, sodass dynamische Falten reduziert werden.",
      "Die Behandlung wird individuell auf Ihre Anatomie und Mimik abgestimmt, um möglichst natürliche Ergebnisse zu erzielen.",
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
          {
            title: "Halsfalten",
            description:
              "",
          },
          {
            title: "Marionettenfalten",
            description:
              "",
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
          "Bei einem persönlichen Beratungsgespräch werden Fragen beantwortet und ein Behandlungsplan erstellt.",
      },
      {
        number: "02",
        title: "Die Behandlung",
        description:
          "Das Botulinumtoxin wird mit einer sehr dünnen Nadel in den Zielmuskel injiziert.",
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
    title: "Vor- und Nachsorge",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünner",
          description:
            "7 Tage vor der Behandlung möglichst keine blutverdünnenden Medikamente (z. B. Aspirin, Ibuprofen, Diclofenac) einnehmen. Das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.",
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
          title: "Krankheit",
          description:
            "Bei Hautentzündungen, Krankheit oder Infektionen im Behandlungsbereich Termin verschieben.",
        },
        {
          title: "Operationen/Impfung",
          description: "Keine Behandlung 2 Wochen vor oder nach einer OP/Impfung",
        },

      ],
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Körperhaltung",
          description: "Für 3-4 Stunden nicht flach oder auf der Seite liegen.",
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
      botoxMasseter,
      mesobotox

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
          'Nein, bei korrekter Dosierung nicht. Ziel ist der Erhalt der natürlichen Mimik. Sie sollen entspannt aussehen, nicht "eingefroren" (Frozen Face). Wir dosieren lieber vorsichtig und legen bei Bedarf nach.',
      },
      {
        question: "Wie lange hält das Ergebnis an der Stirn oder Zornesfalte?",
        answer:
          'Die Wirkung hält durchschnittlich 3 bis 6 Monate an. Da sich der Muskel mit der Zeit an die Entspannung "gewöhnt", können die Intervalle bei regelmäßiger Anwendung oft länger werden.',
      },
      {
        question: "Was ist der Unterschied zu Hyaluron?",
        answer:
          "Botulinumtoxin entspannt Muskeln (gut für Mimikfalten wie Zornesfalte). Hyaluron ist ein Filler, der Volumen gibt (gut für statische Falten wie Nasolabialfalten oder Lippenaufbau). Manchmal ist eine Kombination sinnvoll.",
      },
      {
        question: "Ab wann sollte man mit Botulinumtoxin anfangen?",
        answer:
          'Es gibt kein festes Alter. Eine Behandlung kann präventiv sinnvoll sein, bevor sich Falten tief in die Haut eingraben ("präventives Botulinumtoxin"). Dies wird individuell im Beratungsgespräch entschieden.',
      },
      {
        question: "Was kostet eine Zornesfalten-Behandlung in Bremen?",
        answer:
          "Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). Der Preis hängt von der Menge des verbrauchten Materials (Einheiten) und dem Aufwand der Behandlung ab. Weitere Informationen erhalten Sie auf den jeweiligen Unterseiten oder unter \"Preise\".",
      },
      {
        question: "Gibt es Risiken oder Nebenwirkungen?",
        answer:
          "Risiken und Nebenwirkungen varieren je nach Behandlung. Eine ausführliche Aufklärung erfolgt im Beratungsgespräch.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Beratung zur Faltenbehandlung",
    subtitle:
      "Vereinbaren Sie Ihren Termin bei EL Aesthetics in Bremen.",
    primaryCTA: { text: "Termin online buchen", href: "/kontakt" },
    secondaryCTA: {
      text: "+49 155 66919635",
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
