import { Metadata } from "next";
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
  HubTeaserSection,
} from "@/components/TreatmentPageComponents";
import { PRICES } from "@/lib/constants";
import { getWebPageSchema, getMedicalProcedureSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Masseter Botox Bremen – Face Slimming",
  description:
    "Masseter-Behandlung mit Botulinumtoxin in Bremen: Linderung bei Zähneknirschen (Bruxismus) und optische Gesichtsverschlankung. Ärztliche Beratung. Jetzt Termin buchen.",
  keywords: [
    "Masseter Botox Bremen",
    "Bruxismus Behandlung Bremen",
    "Zähneknirschen Botox Bremen",
    "Face Slimming Bremen",
    "Kiefer Botox Bremen",
  ],
  openGraph: {
    title: "Masseter-Behandlung in Bremen – EL Aesthetics",
    description:
      "Botulinumtoxin bei Bruxismus und zur Gesichtsverschlankung in Bremen. Ärztliche Beratung.",
    url: "https://elaesthetics-bremen.de/botulinumtoxin/masseter",
    siteName: "EL Aesthetics Bremen",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-masseter-bremen.webp",
        width: 1200,
        height: 630,
        alt: "Masseter-Behandlung in Bremen – EL Aesthetics",
      },
    ],
  },
  alternates: {
    canonical: "https://elaesthetics-bremen.de/botulinumtoxin/masseter",
  },
};

export default function BotoxMasseterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...getWebPageSchema({
          name: "Masseter-Behandlung mit Botulinumtoxin in Bremen",
          description:
            "Ärztliche Behandlung gegen Zähneknirschen (Bruxismus) und zur Gesichtsverschlankung.",
          url: "/botulinumtoxin/masseter",
        }),
        "@context": undefined,
      },
      getMedicalProcedureSchema({
        name: "Masseter-Behandlung mit Botulinumtoxin",
        type: "CosmeticProcedure",
        bodyLocation: "Jaw",
        description:
          "Botulinumtoxin-Injektion in den Masseter-Muskel zur Entspannung und Konturierung sowie zur Linderung von Bruxismus.",
        howPerformed: "Injektion",
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Masseter Behandlung mit Botulinumtoxin in Bremen",
    subtitle:
      "Behandlung gegen (nächtliches) Zähneknirschen, oder zur Gesichtsmodelierung für eine schmalere Kieferpartie durch Entspannung des Kaumuskels mit Botulinumtoxin.",
    imageSrc: "/assets/botulinumtoxin/botox-masseter_hero.webp",
    imageAlt:
      "Masseter-Behandlung mit Botulinumtoxin am Kiefer – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" },
  };

  const introData: IntroSectionProps = {
    title: "Was ist die Masseter-Behandlung?",
    content: [
      "Die Masseter-Behandlung mit Botulinumtoxin ist ein minimal-invasives Verfahren zur Entspannung des Kaumuskels bei Bruxismus und zur ästhetischen Gesichtsverschlankung in Bremen.",
      "Zu den typischen Symptomen gehören unter anderem: Schmerzen in den Kiefergelenken, Zahnschmerzen, Migräne, Tinnitus, Verspannungen im Kopf- und Nackenbereich",
      "Die Behandlung kann auch zur Konturierung der unteren Gesichtshälfte und zum verschmälern markanter Gesichtszüge eingesetzt werden",
      "Bei der Masseter Behandlung wird Botulinumtoxin in definierte Punkte des Muskels injiziert. Der Wirkstoff kann die Signalübertragung zwischen Nerven und Muskel vorübergehend hemmen. Dadurch entspannt sich der Muskel und kann bei wiederholter Anwendung an Volumen verlieren. In welchem Ausmaß dies sinnvoll ist, wird ärztlich geklärt.",
      "In der Regel reduziert sich das Zähneknirschen für etwa 3–6 Monate, während das Botulinumtoxin vom Körper schrittweise abgebaut wird. Die Dauer der Wirkung kann individuell unterschiedlich sein.",
      "Bei regelmäßiger Behandlung kommt es häufig zu einer leichten Rückbildung des Masseter-Muskels. Dadurch ist es möglich, dass sich die Behandlungsintervalle im Laufe der Zeit verlängern lassen.",
    ],
  };

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche",
    categories: [
      {
        category: "Ästhetisch",
        items: [
          { title: "Verschmälerung einer breiten Kieferpartie" },
          { title: "Unterstützung einer definierteren Jawline" },
        ],
      },
      {
        category: "Funktionell",
        items: [
          { title: "Bruxismus (Zähneknirschen) – individuelle Prüfung" },
          { title: "Kieferverspannungen – je nach Befund" },
        ],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: "Kurzüberblick zur Masseter Behandlung",
    benefits: [
      {
        title: "Preis",
        description: `ab ${PRICES.botulinum.masseter},-\u20AC*`,
        iconUrl: "/assets/icons/EUR.svg",
      },
      {
        title: "Behandlungszeit",
        description: "ca. 30 Minuten",
        iconUrl: "/assets/icons/TIME.svg",
      },
      {
        title: "Möglicher Wirkeintritt",
        description: "ca. 10–14 Tage",
        iconUrl: "/assets/icons/CAL.svg",
      },
      {
        title: "Mögliche Wirkdauer",
        description: "etwa 3–6 Monate",
        iconUrl: "/assets/icons/CAL.svg",
      },
      {
        title: "Betäubung",
        description: "in der Regel nicht nötig",
        iconUrl: "/assets/icons/Spritze.svg",
      },
      {
        title: "Gesellschaftsfähig",
        description: "sofort",
        iconUrl: "/assets/icons/gesellschaft.svg",
      },
    ],
    note: "*Richtwert nach GOÄ. Der endgültige Betrag wird nach individueller Aufklärung, Areal und Dosierung festgelegt. Keine Erfolgsgarantie.",
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf in unserer Praxis",
    steps: [
      {
        number: "01",
        title: "Anamnese & Indikationsprüfung",
        description:
          "Besprechung von Zielen und Beschwerden (z. B. Bruxismus). Untersuchung des Kaumuskels und der Gesichtsproportionen.",
      },
      {
        number: "02",
        title: "Mikro-Injektionen",
        description:
          "Injektion an 3-4 Punkten pro Seite mit feiner Kanüle. Die Dosierung richtet sich nach Muskelstärke und Zielsetzung.",
      },
      {
        number: "03",
        title: "Nachkontrolle",
        description:
          "Der Wirkungseintritt ist nach circa 10-14 Tagen zu erwarten. Sollten Sie nach ca. 14 Tagen keine Linderung der Symptome erfahren, sollte eine Nachdosierung erwogen werden. Wiederholungen können im Abstand von 3–6 Monaten erwogen werden.",
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
            "7 Tage vorher möglichst auf blutverdünnende Mittel (z. B. Aspirin, Ibuprofen) verzichten.",
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
    title: "Weitere Botulinumtoxin-Anwendungen",
    treatments: [
      {
        imageUrl: "/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp",
        imageAlt: "Faltenbehandlung mit Botulinumtoxin",
        title: "Faltenbehandlung",
        description:
          "Planung und Dosierung nach Befund – Ziel ist eine Entspannung mimischer Falten.",
        treatmentUrl: "/botulinumtoxin/faltenbehandlung",
      },
      {
        imageUrl: "/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
        imageAlt: "Anwendung gegen Schwitzen",
        title: "Hyperhidrose",
        description:
          "Information zur lokalen Anwendung bei axillärer Hyperhidrose – individuelle Eignung erforderlich.",
        treatmentUrl: "/botulinumtoxin/hyperhidrose",
      },
      {
        imageUrl: "/assets/botulinumtoxin/botox-microbotox_hero.webp",
        imageAlt: "Microbotox",
        title: "Mesobotox",
        description:
          "Oberflächliche Anwendung zur Hautbild-Optimierung – Eignung wird geprüft.",
        treatmentUrl: "/botulinumtoxin/mesobotox",
      },
      {
        imageUrl: "/assets/botulinumtoxin/botox-migräne_hero.webp",
        imageAlt: "Migräne",
        title: "Migräne",
        description:
          "Therapieoption bei chronischer Migräne im Rahmen der ärztlichen Indikation.",
        treatmentUrl: "/botulinumtoxin/migraene",
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Masseter Behandlung",
    faqs: [
      {
        question: "Was ist eine Masseter-Behandlung und wie funktioniert sie?",
        answer:
          "Botulinumtoxin wird in den Masseter (Kaumuskel) injiziert. Der Wirkstoff kann die Freisetzung von Acetylcholin hemmen und so die Muskelaktivität vorübergehend reduzieren. Ziel ist eine Entspannung des Muskels; ästhetisch kann die Kieferkontur schmaler wirken, funktionell können Pressen/Knirschen reduziert werden – je nach Befund.",
      },
      {
        question:
          "Übernimmt die Krankenkasse die Kosten für Masseter-Botox bei Zähneknirschen (Bruxismus)?",
        answer:
          "In der Regel handelt es sich für gesetzlich Versicherte um eine Selbstzahlerleistung. Eine Kostenübernahme kann nur in Einzelfällen nach Antragstellung und individueller Prüfung erfolgen. Bitte kontaktieren Sie Ihre Krankenkasse.",
      },
      {
        question: "Lohnt sich Botulinumtoxin im Kaumuskel wirklich?",
        answer:
          "Ob sich die Behandlung „lohnt“, ist individuell. Einige Personen berichten über eine schmalere Kontur und Entlastung bei Bruxismus. Andere bevorzugen Alternativen (z.\u00A0B. Aufbissschiene, Physiotherapie). Wir besprechen Ziele, Möglichkeiten und Grenzen im Termin.",
      },
      {
        question: "Wann sieht man das Ergebnis einer Bruxismus-Behandlung?",
        answer:
          "Eine Entspannung ist häufig nach 10–14 Tagen spürbar. Sichtbare Konturveränderungen zeigen sich meist nach 4–8 Wochen, wenn der Muskel bei geringerer Aktivität an Umfang verliert.",
      },
      {
        question: "Wie lange hält das Ergebnis einer Masseter-Behandlung an?",
        answer:
          "Die beobachtete Wirkdauer liegt oft bei etwa 3–6 Monaten. Abweichungen sind möglich; Dauer und Ausmaß sind individuell unterschiedlich.",
      },
      {
        question:
          "Wird das Gesicht nach einer Masseter-Botulinumtoxin-Behandlung wieder normal?",
        answer:
          "Ja, die Wirkung ist vorübergehend. Nach dem Abklingen der Wirkung nimmt die Muskelaktivität wieder zu. Verlauf und Tempo sind individuell; auf Wunsch kann die Behandlung in Abständen wiederholt werden.",
      },
      {
        question: "Gibt es Risiken oder Nebenwirkungen?",
        answer:
          "Ernsthafte Komplikationen sind äußerst selten. Möglich sind vorübergehende Rötungen, kleine Blutergüsse oder leichte Schwellungen an den Einstichstellen. Gelegentlich treten harmlose Kopfschmerzen auf. Eventuelle Asymmetrien lassen sich meist in einer Nachbehandlung nach ca. 2 Wochen korrigieren. Da der Wirkstoff vollständig abgebaut wird, sind dauerhafte Schäden ausgeschlossen. Über seltene Restrisiken klären wir Sie vor der Behandlung persönlich auf.",
      },
      {
        question:
          "Wie oft sollte man Masseter-Botulinumtoxin machen, um ein dauerhaftes Ergebnis zu erzielen?",
        answer:
          "Ein „dauerhaftes“ Ergebnis lässt sich nicht zusichern. Viele planen Wiederholungen alle 3–6 Monate; bei mehrmaliger Anwendung kann sich der Effekt teils länger halten. Die Intervalle werden individuell festgelegt.",
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: "Individuelle Beratung zur Masseter Behandlung",
    subtitle:
      "Sie möchten wissen, ob die Anwendung für Sie geeignet ist und welche masseter behandlung kosten einzuplanen sind? Wir beraten Sie gerne.",
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
        id="botox-masseter-schema"
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
