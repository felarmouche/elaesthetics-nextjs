import type { Metadata } from "next";
import Script from "next/script";
import { PRICES } from "@/lib/constants";
import { filler, skinbooster, hylase } from "@/data/treatments";
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSection,
  HubTeaserSection,
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
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSectionProps,
  TreatmentsSection,
  CTASection,
} from "@/components/TreatmentPageComponents";
import { getWebPageSchema, getMedicalProcedureSchema } from "@/lib/schema";

// NEUE KEYWORDS FÜR RECHTLICHE SICHERHEIT UND SEO
// Marke (Profhilo) nur in Meta/ALT/Schema (nicht sichtbar im Content)
export const metadata: Metadata = {
  title: "Profhilo Bremen – Hautstraffung",
  description:
    "Biorevitalisierung mit Profhilo in Bremen: Hautqualität & Elastizität verbessern. BAP-Technik – schonend & effektiv. Jetzt beraten lassen.",
  keywords: [
    "Biorevitalisierung Bremen",
    "Profhilo Bremen",
    "BAP-Technik Bremen",
    "Hautstraffung Injektion Bremen",
    "Hautqualität verbessern Bremen",
  ],
  openGraph: {
    title:
      "Biorevitalisierung Bremen | Profhilo & Hautstraffung | EL Aesthetics",
    description:
      "Biorevitalisierung mit Profhilo in Bremen: Hautqualität & Elastizität verbessern. BAP-Technik – schonend & effektiv.",
    url: "https://elaesthetics-bremen.de/hyaluron/profhilo",
    siteName: "EL Aesthetics Bremen",
    type: "website",
    locale: "de_DE",
    images: [
      "https://elaesthetics-bremen.de/assets/profhilo/og-profhilo-bremen.webp",
    ],
  },
  alternates: {
    canonical: "https://elaesthetics-bremen.de/hyaluron/profhilo",
  },
};

export default function ProfhiloBAPPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...getWebPageSchema({
          name: "Biorevitalisierung (BAP-Technik) in Bremen",
          description:
            "Ärztliche Biorevitalisierung mit Hyaluronsäure zur Verbesserung der Hautqualität und Elastizität.",
          url: "/hyaluron/profhilo",
        }),
        "@context": undefined,
      },
      getMedicalProcedureSchema({
        name: "Biorevitalisierung mit BAP-Technik",
        type: "CosmeticProcedure",
        bodyLocation: "Face",
        description:
          "Hyaluron-Remodellierung nach BAP-Technik zur Verbesserung der Hautqualität, Elastizität und Straffung.",
        howPerformed: "Injektion",
      }),
    ],
  };

  // Sichtbarer Content ohne Markennennung
  const heroData: HeroSectionProps = {
    title: "Biorevitalisierung (BAP-Technik) in Bremen",
    subtitle:
      "Hautqualität & Elastizität gezielt verbessern – wenige Injektionspunkte, schonende Behandlung.",
    imageSrc: "/assets/hyaluron/hyaluron-profhilo_hero1.webp",
    imageAlt:
      "Profhilo Biorevitalisierung mit BAP-Technik – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratung anfragen", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" },
  };

  const introData: IntroSectionProps = {
    // Fokus auf Biorevitalisierung (statt Remodellierung)
    title: "Was bedeutet Biorevitalisierung der Haut mit BAP-Technik?",
    content: [
      "Die Biorevitalisierung mit BAP-Technik (oft auch als Profhilo bekannt) ist ein Verfahren der ästhetischen Medizin zur gezielten Verbesserung von Hautqualität und Elastizität durch hybride Hyaluronsäure.",
      "Bei dieser Behandlung wird eine Hyaluronsäure verwendet, die ohne Zusätze wie chemische Vernetzungsmittel auskommt. Ihre spezifisch abgestimmte Formulierung ermöglicht eine gleichmäßige Verteilung im Gewebe und trägt dazu bei, die Hautstruktur, -elastizität und Feuchtigkeitsbindung gezielt zu unterstützen.",
      "Die Anwendung erfolgt nach dem sogenannten BAP-Schema (Bio Aesthetic Points), bei dem das Präparat über nur fünf definierte Injektionspunkte pro Gesichtshälfte eingebracht wird. Dadurch ist eine flächige Wirkung mit vergleichsweise wenigen Injektionen möglich. Diese moderne Methode eignet sich insbesondere für Areale wie Gesicht, Hals, Dekolleté oder Handrücken. Aufgrund der wenigen Einstichstellen ist diese Methode sehr schonend."
    ],
  };

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche & Anliegen",
    categories: [
      {
        category: "Gesicht",
        items: [
          { title: "Feine Linien & Knitterfältchen" },
          { title: "Müdes Hautbild / frische Ausstrahlung" },
          { title: "Hautelastizität & Ebenmäßigkeit" },
        ],
      },
      {
        category: "Hals & Dekolleté",
        items: [
          { title: "Leichte Erschlaffung am Hals (Laxität)" },
          { title: "Struktur & Elastizität im Dekolleté verbessern" },
        ],
      },
      {
        category: "Hände",
        items: [{ title: "Hautqualität verfeinern und verjüngen" }],
      },
      {
        category: "Körper",
        items: [
          { title: "Innenseite der Oberarme" },
          { title: "Ellenbogen" },
          { title: "Knie" },
          { title: "Bauch" },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Auf einen Blick: Biorevitalisierung",
    benefits: [
      {
        title: "Preis",
        description: `ab ${PRICES.botulinum.masseter},-\u20AC*`,
        iconUrl: "/assets/icons/EUR.svg",
      },
      {
        title: "Behandlungsdauer",
        description: "ca. 20-30 Min",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Wirkeintritt",
        description: "nach 5-10 Tagen",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Wirkdauer",
        description: "6-9 Monate",
        iconUrl: "/assets/icons/CAL.svg",
      },
      {
        title: "Betäubung",
        description: "nicht nötig, auf Wunsch Betäubungscreme",
        iconUrl: "/assets/icons/Spritze.svg",
      },

      {
        title: "Folgebehandlungen",
        description: "2-3 Sitzungen alle 4-6 Wochen",
        iconUrl: "/assets/icons/wiederholung.svg",
      },
    ],
    note: "Die individuelle Planung und Abrechnung erfolgen gemäß Gebührenordnung für Ärzte (GOÄ).",
  };

  const tocItems: TOCItem[] = [
    { id: "intro", label: "Über die Biorevitalisierung" },
    { id: "areas", label: "Behandlungsbereiche" },
    { id: "quickInfos", label: "Auf einen Blick" },
    { id: "process", label: "Ablauf (BAP-Technik)" },
    { id: "treatmentsCare", label: "Vor & Nach der Behandlung" },
    { id: "consultation", label: "Beratung" },
    { id: "treatments", label: "Weitere Behandlungen" },
    { id: "faq", label: "Häufige Fragen" },
  ];

  const processData: ProcessSectionProps = {
    title: "Behandlungsablauf (BAP-Technik)",
    steps: [
      {
        number: "01",
        title: "Beratung",
        description:
          "Aufklärung zu Methode, Wirkstoff, Ablauf, Risiken; individuelle Planung basierend auf Hautanalyse und Zielen.",
      },
      {
        number: "02",
        title: "Vorbereitung",
        description:
          "Gründliche Reinigung/Desinfektion und Anzeichnen der standardisierten BAP-Punkte.",
      },
      {
        number: "03",
        title: "Injektion",
        description:
          "Insgesamt werden 2 ml der hochkonzentrierten Hyaluronsäure pro Sitzung an 10 definierten Punkten direkt unter die Hautoberfläche injiziert (10-Punkte-Technik). Nach der Injektion verteilt sich die Substanz im Gewebe.",
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Vor- & Nachsorge",
    beforeTreatment: {
      title: "Vor der Biorevitalisierung",
      instructions: [
        {
          title: "Medikamente",
          description:
            "Blutverdünner möglichst 7 Tage vorher pausieren – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.",
        },
        {
          title: "Hautvorbereitung",
          description:
            "Vorab keine aggressiven Peelings/Laser; direkte Sonne/Solarium meiden.",
        },
        {
          title: "Alkohol",
          description:
            "24 h vorher verzichten, um das Risiko für Blutergüsse zu minimieren.",
        },
        {
          title: "Gesundheit",
          description:
            "Keine Behandlung bei akutem Infekt oder aktivem Herpes.",
        },
      ],
    },
    afterTreatment: {
      title: "Nach der Biorevitalisierung",
      instructions: [
        {
          title: "Kühlung & UV-Schutz",
          description:
            "Areale kühlen; direkte Sonne vermeiden, hohen UV-Schutz (LSF 50) nutzen.",
        },
        {
          title: "Sport/Hitze",
          description:
            "48–72 h keinen intensiven Sport, keine Sauna oder Solarium (Infektionsgefahr).",
        },
        {
          title: "Hygiene",
          description:
            "Für einige Stunden kein Make-up direkt auf die Einstichstellen auftragen.",
        },
      ],
    },
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Sinnvolle Ergänzungen",
    treatments: [filler, skinbooster, hylase],
  };

  const faqData: FAQSectionProps = {
    title: "Fragen & Antworten zur Biorevitalisierung",
    faqs: [
      {
        question:
          "Worin unterscheidet sich Biorevitalisierung von Volumenbehandlungen?",
        answer:
          "Biorevitalisierung zielt auf Hautqualität, Elastizität und langanhaltende Hydratation ab – ohne künstlichen Volumenaufbau oder Formung. Volumenbehandlungen dienen hingegen der Korrektur von Falten und dem Aufbau einzelner Bereiche.",
      },
      {
        question: "Bin ich nach der Behandlung sofort gesellschaftsfähig?",
        answer:
          "Meist ja. Kurzfristig können kleine Rötungen, Quaddeln oder leichte Schwellungen an den Einstichstellen entstehen.",
      },
      {
        question: "Für welche Körperregionen eignet sich die Methode?",
        answer:
          "Die Behandlung eignet sich hervorragend für Gesicht, Hals, Dekolleté und Hände. Weitere Anwendungsbereiche: Knie, Ellenbogen, Innenseite der Oberarme oder Bauch.",
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer:
          "Die Behandlung gilt als sehr schonend. Nach der Injektion können vorübergehend leichte Schwellungen oder Rötungen auftreten, die meist rasch von selbst abklingen. Kleinere Hämatome an den Einstichstellen sind möglich, können jedoch nicht vollständig ausgeschlossen werden. Gelegentlich können zeitweise kleine Knötchen an den Injektionsstellen entstehen, die sich in der Regel ohne weitere Behandlung zurückbilden.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Fragen zur Behandlung?",
    subtitle:
      "Lassen Sie sich individuell beraten – wir erstellen einen passenden Behandlungsplan zur Verbesserung Ihrer Hautqualität.",
    primaryCTA: { text: "Beratung anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="profhilo-schema"
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
        title="Mehr zu Hyaluron‑Behandlungen"
        subtitle="Zur Übersicht mit Behandlungen, Abläufen & Hinweisen."
        href="/hyaluron"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
