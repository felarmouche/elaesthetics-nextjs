import type { Metadata } from "next";
import Script from "next/script";
import {
  TableOfContents,
  TOCItem,
  AreasSection,
  ConsultationSectionProps,
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
import { PRICES } from "@/lib/constants";
import { botoxFalten, botoxMasseter, hyperhidrose, migraene } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Mesobotox Bremen – Porenverfeinerung",
  description:
    "Mesobotox in Bremen: Mikro-Injektionen zur Porenverfeinerung und Verbesserung der Hauttextur. Ärztlich durchgeführt. Beratungstermin vereinbaren.",
  keywords: [
    "Mesobotox Bremen",
    "Mikro-Botox Bremen",
    "Poren verfeinern Botox Bremen",
    "Hauttextur verbessern Bremen",
  ],
  openGraph: {
    title: "Mesobotox-Behandlung in Bremen – EL Aesthetics",
    description:
      "Mikro-Injektionen zur Porenverfeinerung und Verbesserung der Hauttextur in Bremen.",
    url: "https://elaesthetics-bremen.de/botulinumtoxin/mesobotox",
    siteName: "EL Aesthetics Bremen",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://elaesthetics-bremen.de/assets/botulinumtoxin/botox-microbotox_hero.webp",
        width: 1200,
        height: 630,
        alt: "Mesobotox-Behandlung in Bremen – EL Aesthetics",
      },
    ],
  },
  alternates: {
    canonical: "https://elaesthetics-bremen.de/botulinumtoxin/mesobotox/",
  },
};

export default function MicrobotoxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...getWebPageSchema({
          name: "Mesobotox-Behandlung in Bremen",
          description:
            "Ärztliche Mikro-Injektion zur Porenverfeinerung und Verbesserung der Hauttextur.",
          url: "/botulinumtoxin/mesobotox",
        }),
        "@context": undefined,
      },
      getMedicalProcedureSchema({
        name: "Mesobotox - Porenverfeinernde Mikro-Injektion",
        type: "CosmeticProcedure",
        bodyLocation: "Face",
        description:
          "Oberflächliche, verteilte Botulinumtoxin-Mikro-Injektionen zur Porenverfeinerung und Verbesserung der Hauttextur.",
        howPerformed: "Mikro-Injektion",
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Baby-Botox (Mesobotox) in Bremen",
    subtitle:
      "Sehr oberflächliche Mikro-Injektionen können die Hauttextur verbessern, Poren verfeinern und feine Linien mildern – im Gesicht, am Hals und im Dekolleté.",
    imageSrc: "/assets/botulinumtoxin/botox-microbotox_hero.webp",
    imageAlt:
      "Mesobotox-Behandlung zur Porenverfeinerung – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" },
  };

  const introData: IntroSectionProps = {
    title: "Was ist Baby-Botox (Mesobotox)?",
    content: [
      'Baby-Botox (auch "Mesobotox" genannt) ist eine ästhetische Behandlung, bei der stark verdünntes Botulinumtoxin in sehr oberflächliche Hautschichten injiziert wird, um Poren zu verfeinern und die Hauttextur zu verbessern.',
      "Dies unterscheidet sich von der klassischen Botulinumtoxin-Behandlung, die tiefer in die Muskelschichten wirkt.",
      "Je nach Ausgangsbefund kann die Aktivität von Talg- und Schweißdrüsen vermindert werden. Mesobotox zielt vor allem auf die Verfeinerung des Hautbildes ab, besonders bei großporiger und öliger Haut.",
    ],
  };

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche & mögliche Effekte",
    categories: [
      {
        category: "Hautbild & Struktur",
        items: [
          { title: "Feineres, glatteres und strahlenderes Hautbild" },
          { title: "Optische Verfeinerung der Poren" },
          {
            title:
              "Milderung feiner Fältchen bei weitgehendem Erhalt der natürlichen Mimik",
          },
          {
            title:
              "Unterstützung bei Rosazea und Akne (nicht bei akuten Schüben anwendbar)",
          },
        ],
      },
      {
        category: "Funktion",
        items: [
          {
            title: "Verminderung der Talgproduktion (Reduktion von Talgglanz)",
          },
          {
            title:
              "Verringerung der Schweißbildung und des Schwitzens im Gesicht",
          },
        ],
      },
      {
        category: "Zonen",
        items: [{ title: "Gesicht (v. a. Wangen, Stirn), Hals, Dekolleté" }],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: "Baby-Botox auf einen Blick",
    benefits: [
      {
        title: "Preis",
        description: `ab ${PRICES.botulinum.microBotox},-€`,
        iconUrl: "/assets/icons/EUR.svg",
      },
      {
        title: "Möglicher Wirkeintritt",
        description: "10-14 Tage",
        iconUrl: "/assets/icons/CAL.svg",
      },
      {
        title: "Mögliche Wirkdauer",
        description: "etwa 3–6 Monate",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Betäubung",
        description: "auf Wunsch",
        iconUrl: "/assets/icons/Spritze.svg",
      },
      {
        title: "Gesellschaftsfähig",
        description: "i.d.R. sofort",
        iconUrl: "/assets/icons/gesellschaft.svg",
      },
    ],
    note: "*GOÄ-orientierter Richtwert. Der konkrete Betrag richtet sich nach Areal, Menge und Aufwand und wird nach individueller Aufklärung festgelegt. Keine Erfolgsgarantie.",
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf der Behandlung",
    steps: [
      {
        number: "01",
        title: "Beratung & Hautanalyse",
        description:
          "Besprechung von Zielen (z.\u00A0B. Poren, Glanz, feine Fältchen) sowie Eignung der Areale (Gesicht, Hals, Dekolleté).",
      },
      {
        number: "02",
        title: "Vorbereitung",
        description:
          "Reinigung und Desinfektion. Auf Wunsch Betäubungscreme (Einwirkzeit ca. 30 Minuten).",
      },
      {
        number: "03",
        title: "Mikro-Injektionen / Needling",
        description:
          "Stark verdünntes Botulinumtoxin sehr oberflächlich im ca. 1×1‑cm Raster injiziert oder per Microneedling eingearbeitet.",
      },
      {
        number: "04",
        title: "Nachsorge",
        description:
          "Beruhigende Pflege/Masken nach Bedarf und Hinweise zur Schonung. Beurteilung des Effekts nach ca. 10–14 Tagen.",
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Vor- und Nachsorgehinweise",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Schwangerschaft & Stillzeit",
          description:
            "Keine Behandlung während der Schwangerschaft oder Stillzeit durchführen.",
        },
        {
          title: "Entzündungen",
          description:
            "Das Behandlungsareal muss frei von akuten Entzündungen oder Infektionen sein.",
        },
        {
          title: "Operationen",
          description:
            "Halten Sie einen Abstand von 2 Wochen zu geplanten oder vergangenen Operationen ein.",
        },
        {
          title: "Medikamente",
          description:
            "7 Tage vorher möglichst auf blutverdünnende Mittel (z. B. Aspirin, Ibuprofen) verzichten – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.",
        },
        {
          title: "Alkohol",
          description:
            "2 Tage vor dem Termin keinen Alkohol trinken, um das Risiko für Blutergüsse zu minimieren.",
        },
      ],
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Körperhaltung",
          description:
            "Für 3–4 Stunden eine aufrechte Haltung bewahren, nicht flach hinlegen.",
        },
        {
          title: "Sport & Schwimmbad",
          description:
            "Vermeiden Sie für 2 Tage körperliche Anstrengung und Schwimmbadbesuche.",
        },
        {
          title: "Hitze & Sonne",
          description:
            "1–2 Wochen auf Sauna, Solarium und intensive Wärmeeinwirkung verzichten.",
        },
        {
          title: "UV-Schutz",
          description:
            "Achten Sie 4–6 Wochen lang auf konsequenten Sonnenschutz im behandelten Areal.",
        },
        {
          title: "No Touch",
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
    title: "Weitere Anwendungen mit Botulinumtoxin",
    treatments: [botoxFalten, botoxMasseter, hyperhidrose, migraene],
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen",
    faqs: [
      {
        question: "Was ist Baby-Botox und wie funktioniert die Behandlung?",
        answer:
          "Es handelt sich um eine oberflächliche Anwendung stark verdünnten Botulinumtoxins über Mikro‑Injektionen (alternativ Microneedling). Ziel ist eine Verfeinerung des Hautbildes, u.\u00A0a. durch Einfluss auf Talg-/Schweißdrüsen und feiner Muskelfasern.",
      },
      {
        question:
          "Was ist der Unterschied zwischen klassischem Botulinumtoxin und Baby-Botox?",
        answer:
          "Klassische Botulinumtoxin-Behandlungen zielen meist auf eine deutlichere Muskelentspannung (tiefer, punktuell). Mesobotox arbeitet sehr oberflächlich und fokussiert auf Hautqualität (Poren/Glanz/feine Fältchen) bei weitgehend erhaltener Mimik.",
      },
      {
        question: "Wie lange hält das Ergebnis an?",
        answer:
          "Die beobachtete Wirkzeit liegt häufig bei etwa 3–6 Monaten. Abweichungen sind möglich.",
      },
      {
        question: "Was kostet eine Baby-Botox-Behandlung?",
        answer: `Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). Der Preis hängt von der Menge des verbrauchten Materials (Einheiten) und dem Aufwand der Behandlung ab. Weitere Informationen erhalten Sie auf den jeweiligen Unterseiten oder unter "Preise".`,
      },
      {
        question: "Ist die Behandlung sicher und gibt es Nebenwirkungen?",
        answer:
          "Die Injektionen mit sehr feinen Nadeln sind in der Regel gut tolerierbar. Mögliche, meist vorübergehende Reaktionen: Rötungen, Schwellungen und kleine Hämatome. Kontraindikationen werden vorab besprochen.",
      },
      {
        question: "Wann sieht man ein Ergebnis?",
        answer:
          "Der Wirkeintritt ist nach ca.10-14 Tagen zu erwarten.",
      },
      {
        question: "Welche Hautprobleme lassen sich behandeln?",
        answer:
          "Je nach Ausgangsbefund: großporige/ölige Haut, Glanz, oberflächliche Knitterfältchen. Bei Rosazea/Akne kann eine unterstützende Anwendung erwogen werden (nicht im akuten Schub).",
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer:
          "Möglich sind vorübergehende Rötungen, Schwellungen oder kleine Blutergüsse an den Einstichstellen.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Beratung zu Mesobotox in Bremen",
    subtitle:
      "Sie möchten mehr zu Anwendung, Sicherheit und den Kosten von Mesobotox erfahren? Wir beraten Sie gerne.",
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
        id="mesobotox-schema"
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
