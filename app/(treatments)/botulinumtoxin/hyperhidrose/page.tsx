import { Metadata } from "next";
import Script from "next/script";
import {
  TOCItem,
  TableOfContents,
  AreasSection,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
  HubTeaserSection,
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
  CTASection,
} from "@/components/TreatmentPageComponents";
import { getWebPageSchema, getMedicalProcedureSchema } from "@/lib/schema";
// PatientReviews entfernt (HWG)
import { PRICES } from "@/lib/constants";
import { botoxFalten, botoxMasseter, mesobotox, migraene } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Hyperhidrose Behandlung Bremen",
  description:
    "Übermäßiges Schwitzen behandeln: Botulinumtoxin gegen Hyperhidrose in Bremen. Wirkung, Ablauf & Kosten der ärztlichen Behandlung. Beratungstermin vereinbaren.",
  keywords: [
    "Hyperhidrose Behandlung Bremen",
    "übermäßiges Schwitzen behandeln Bremen",
    "Botox gegen Schwitzen Bremen",
    "Schweißdrüsen Behandlung Bremen",
  ],
  openGraph: {
    title: "Hyperhidrose-Behandlung in Bremen – EL Aesthetics",
    description:
      "Botulinumtoxin gegen übermäßiges Schwitzen (Hyperhidrose) in Bremen. Ärztliche Behandlung.",
    url: "https://elaesthetics-bremen.de/botulinumtoxin/hyperhidrose",
    siteName: "EL Aesthetics Bremen",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://elaesthetics-bremen.de/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
        width: 1200,
        height: 630,
        alt: "Hyperhidrose-Behandlung in Bremen – EL Aesthetics",
      },
    ],
  },
  alternates: {
    canonical: "https://elaesthetics-bremen.de/botulinumtoxin/hyperhidrose",
  },
};

export default function BotoxHyperhidrosePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...getWebPageSchema({
          name: "Hyperhidrose-Behandlung mit Botulinumtoxin in Bremen",
          description:
            "Ärztliche Behandlung von übermäßigem Schwitzen mit Botulinumtoxin.",
          url: "/botulinumtoxin/hyperhidrose",
        }),
        "@context": undefined,
      },
      getMedicalProcedureSchema({
        name: "Botulinumtoxin-Behandlung gegen Hyperhidrose",
        type: "MedicalProcedure",
        bodyLocation: "Axilla",
        description:
          "Botulinumtoxin-Injektion zur Behandlung von primärer axillärer Hyperhidrose (übermäßiges Schwitzen).",
        howPerformed: "Injektion",
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Botulinumtoxin gegen starkes Schwitzen (Hyperhidrose)",
    subtitle:
      "Die Anwendung von Botulinumtoxin bei Hyperhidrose zielt auf eine Verringerung der Schweißproduktion ab.",
    imageSrc: "/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
    imageAlt:
      "Hyperhidrose-Behandlung mit Botulinumtoxin gegen Schwitzen – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" },
  };

  const introData: IntroSectionProps = {
    title: "Botulinumtoxin gegen starkes schwitzen",
    content: [
      "Die Hyperhidrose-Behandlung mit Botulinumtoxin ist ein minimal-invasives Verfahren zur Reduktion übermäßigen Schwitzens, die sich in den letzten Jahren als sehr effektiv erwiesen hat.",
      "Botulinumtoxin kann die Signalübertragung an den Nervenendigungen der Schweißdrüsen vorübergehend hemmen. Infolgedessen kann die Schweißproduktion in den behandelten Arealen reduziert werden.",
    ],
  };

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche - Hyperhidrose Behandlung",
    categories: [
      {
        category: "Am häufigsten",
        items: [{ title: "Achseln (axilläre Hyperhidrose)" }],
      },
      {
        category: "Hinweis",
        items: [
          {
            title:
              "Weitere Areale nur nach individueller ärztlicher Prüfung und wenn medizinisch vertretbar.",
          },
        ],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: "Überblick - Behandlung gegen starkes Schwitzen",
    benefits: [
      {
        title: "Preis",
        description: `ab ${PRICES.botulinum.hyperhidrose},-\u20AC*`,
        iconUrl: "/assets/icons/EUR.svg",
      },
      {
        title: "Behandlungszeit",
        description: "ca. 60 Minuten",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Möglicher Wirkeintritt",
        description: "10–14 Tagen",
        iconUrl: "/assets/icons/CAL.svg",
      },
      {
        title: "Mögliche Wirkdauer",
        description: "etwa 4–6 Monate",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Betäubung",
        description: "Ja",
        iconUrl: "/assets/icons/Spritze.svg",
      },
      {
        title: "Alltag",
        description: "i.d.R. sofort",
        iconUrl: "/assets/icons/gesellschaft.svg",
      },
    ],
    note: "*Richtwert nach GOÄ. Der endgültige Betrag richtet sich nach Areal, Menge und individuellem Aufwand und wird nach Aufklärung im Einzelfall festgelegt. Keine Erfolgsgarantie.",
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf der Behandlung gegen Hyperhidrose",
    steps: [
      {
        number: "01",
        title: "Ärztliche Beratung & Indikationsprüfung",
        description:
          "Umfassende Anamnese, Klärung von Kontraindikationen und individuelle Aufklärung zu Möglichkeiten, Grenzen und Risiken der Behandlung.",
      },
      {
        number: "02",
        title: "Behandlung",
        description:
          "Die betroffenen Bereiche werden vor der Behandlung mit einer Lidocain-Creme betäubt. Nach ca. 30 Minuten werden die Bereiche desinfiziert und das Botulinumtoxin in einem Raster von ca. 1 cm oberflächlich in die Haut injiziert.",
      },
      {
        number: "03",
        title: "Kontrolle & ggf. Auffrischung",
        description:
          "Beurteilung des Effekts nach etwa 10–14 Tagen. Auffrischungen können je nach Verlauf erwogen werden.",
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Schwangerschaft/Stillzeit",
          description: "Keine Anwendung in Schwangerschaft oder Stillzeit.",
        },
        {
          title: "Infektionen/Entzündungen",
          description: "Keine Behandlung bei lokalen Entzündungen.",
        },
        {
          title: "Operationen",
          description: "Nicht innerhalb von 2 Wochen vor/nach einer Operation.",
        },
        {
          title: "Blutverdünner",
          description:
            "Medikamente wie ASS/Ibuprofen/Diclofenac nur nach ärztlicher Rücksprache pausieren – keine eigenständige Absetzung.",
        },
        {
          title: "Alkohol",
          description: "In den 48 Stunden vor der Behandlung besser vermeiden.",
        },
      ],
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Sport/Hitze",
          description:
            "2–3 Tage keinen Sport; Sauna/Dampfbad/Hitze 2 Tage meiden.",
        },
        {
          title: "Sonne/UV",
          description:
            "2–3 Tage starke UV-Exposition vermeiden; Sonnenschutz beachten.",
        },
        {
          title: "Alkohol",
          description: "In den 2-3 Tage Stunden besser vermeiden.",
        },
      ],
    },
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Anwendungen mit Botulinumtoxin in Bremen",
    treatments: [botoxFalten, botoxMasseter, mesobotox, migraene],
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zu Botulinumtoxin gegen Schwitzen",
    faqs: [
      {
        question: "Wie funktioniert Botulinumtoxin gegen Schwitzen?",
        answer:
          "Der Wirkstoff kann die Freisetzung von Acetylcholin an den Nervenendigungen hemmen. Dadurch kann die Aktivität der Schweißdrüsen im behandelten Areal vorübergehend reduziert sein.",
      },
      {
        question:
          "Kann man übermäßiges Schwitzen mit Botulinumtoxin behandeln?",
        answer:
          "Bei axillärer Hyperhidrose kann eine ärztlich indizierte Anwendung erwogen werden, insbesondere wenn andere Maßnahmen nicht ausreichend geholfen haben. Ob die Behandlung für Sie geeignet ist, klären wir individuell.",
      },
      {
        question:
          "Kann Botulinumtoxin bei Schwitzen in den Wechseljahren helfen?",
        answer:
          "Hitzewallungen und Schwitzen in den Wechseljahren haben vielfältige Ursachen. Botulinumtoxin zielt lokal auf Schweißdrüsen in einem definierten Areal (z. B. Achseln). Ob dies bei menopausalen Beschwerden sinnvoll ist, wird ärztlich geprüft; eine allgemeine Aussage ist nicht möglich.",
      },
      {
        question: "Zahlt die Krankenkasse Botulinumtoxin gegen Schwitzen?",
        answer:
          "Bei gesetzlich Versicherten handelt es sich in der Regel um eine Selbstzahlerleistung. In Einzelfällen kann eine Kostenübernahme erwogen werden, z. B. bei nachgewiesener, therapieresistenter axillärer Hyperhidrose und entsprechender Antragstellung. Bitte wenden Sie sich an Ihre Kasse.",
      },
      {
        question: "Was kostet eine Botulinumtoxin‑Behandlung gegen Schwitzen?",
        answer: `Die Kosten starten meist ab etwa ${PRICES.botulinum.hyperhidrose}\u00A0€ (Richtwert) und richten sich nach Areal, Dosierung und individuellem Aufwand. Abrechnung GOÄ-orientiert.`,
      },
      {
        question: "Wie lange hält Botulinumtoxin gegen Schwitzen?",
        answer:
          "Die beobachtete Wirkzeit liegt häufig im Bereich von etwa 3–6 Monaten. Abweichungen sind möglich; es gibt keine Garantie für Dauer oder Ausmaß.",
      },
      {
        question: "Welche Nebenwirkungen sind möglich?",
        answer:
          "Vorübergehende Rötungen, Schwellungen oder kleine Hämatome an den Einstichstellen sind möglich. Selten Unverträglichkeiten. Kontraindikationen (z. B. neuromuskuläre Erkrankungen, Schwangerschaft/Stillzeit) werden im Gespräch besprochen.",
      },
      {
        question:
          "Gibt es Alternativen zur Botulinumtoxin Schwitzen Behandlung?",
        answer:
          "Je nach Ausprägung: Antitranspirantien, Leitungswasser-Iontophorese, medikamentöse Optionen (ärztliche Verordnung erforderlich), operative Verfahren. Welche Maßnahme passt, hängt vom Einzelfall ab.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Beratung zur Hyperhidrose in Bremen",
    subtitle:
      'Sie wünschen eine ärztliche Einschätzung zur \"botulinumtoxin schwitzen\" Behandlung? Vereinbaren Sie einen Termin zur individuellen Aufklärung.',
    primaryCTA: { text: "Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" },
  };

  const tocItems: TOCItem[] = [
    { id: "intro", label: "Über die Behandlung" },
    { id: "areas", label: "Behandlungsbereiche" },
    { id: "quickInfos", label: "Überblick" },
    { id: "process", label: "Ablauf" },
    { id: "treatmentsCare", label: "Vor & Nach der Behandlung" },
    { id: "consultation", label: "Beratung" },
    { id: "treatments", label: "Weitere Anwendungen" },
    { id: "faq", label: "Häufige Fragen" },
    { id: "cta", label: "Termin" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="botox-hyperhidrose-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...benefitsData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection />
      <HubTeaserSection
        title="Alle Botulinumtoxin‑Behandlungen im Überblick"
        subtitle="Übersicht, Abläufe, Indikationen & Hinweise."
        href="/botulinumtoxin"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
