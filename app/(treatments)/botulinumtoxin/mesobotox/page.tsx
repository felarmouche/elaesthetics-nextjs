import type { Metadata } from 'next';
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
} from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mesobotox / Microbotox (SkinBotox) in Bremen | EL Aesthetics',
  description:
    'Sachliche Information zu Mesobotox (Microbotox / SkinBotox): Ablauf, mögliche Effekte, Sicherheit, Kombinationen und SkinBotox kosten (Richtwerte). Ärztliche Beratung erforderlich.',
  keywords:
    'mesobotox, microbotox, skinbotox, micro botox, mesobotox kosten, Mesobotox Erfahrungen, Microbotox Bremen, Hautbild verfeinern, Poren, Glanz, Talgregulation',
  openGraph: {
    title: 'Mesobotox / Microbotox (SkinBotox) – Informationen & Kosten',
    description:
      'Oberflächliche Anwendung von Botulinumtoxin zur Unterstützung eines verfeinerten Hautbilds. Hinweise zu Ablauf, Sicherheit, Kombinationen und Kosten (Richtwerte).',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-microbotox-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/mesobotox',
  },
};

export default function MicrobotoxPage() {
  const heroData: HeroSectionProps = {
    title: 'Mesobotox in Bremen',
    subtitle:
      'Ziel der Anwendung ist eine Unterstützung der Hautqualität durch sehr oberflächliche Injektionen. Ziel ist eine Verbesserung des Hautbildes und zur Reduktion feiner Fältchen im Gesicht, am Hals und im Dekolleté.',
    imageSrc: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
    imageAlt: 'Microbotox Behandlung zur Hautbild-Verbesserung in Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Mesobotox (Microbotox / SkinBotox)?',
    content: [
      'Bei Mesobotox, auch Microbotox oder SkinBotox genannt, wird eine stark verdünnte Botulinumtoxin-Lösung sehr oberflächlich in die Haut eingebracht (Mikro‑Injektionen; alternativ begleitend per Microneedling).',
      'Es ist eine beliebte Behandlungsmethode zur Verbesserung des Hautbildes und zur Reduktion feiner Fältchen im Gesicht, am Hals und im Dekolleté. Anwendungen sind weniger tief und in geringerer Menge als bei klassischen Botulinumtoxin-Behandlungen. Ziel ist es, die Aktivität von Talg- und Schweißdrüsen sowie feinen Muskelfasern zu reduzieren, wodurch das Hautbild verfeinert und Fältchen gemindert werden können.',
      'Im Unterschied zur klassischen, tieferen Botulinumtoxin-Anwendung zielt SkinBotox nicht primär auf eine deutliche Muskelentspannung ab. Vielmehr kann die Aktivität von Talg- und Schweißdrüsen sowie feinster mimischer Muskelfasern beeinflusst werden – mit dem Ziel eines verfeinerten Hautbilds.',
    ],
  };

  const areasData: AreasSectionProps = {
  title: 'Anwendungsbereiche & mögliche Effekte',
  categories: [
    {
      category: 'Hautbild & Struktur',
      items: [
        { title: 'Feineres, glatteres und strahlenderes Hautbild' },
        { title: 'Optische Verfeinerung der Poren' },
        { title: 'Milderung feiner Fältchen bei weitgehendem Erhalt der natürlichen Mimik' },
        { title: 'Unterstützung bei Rosazea und Akne (nicht bei akuten Schüben anwendbar)' },
      ],
    },
    {
      category: 'Funktion (lokal)',
      items: [
        { title: 'Verminderung der Talgproduktion (Reduktion von Talgglanz)' },
        { title: 'Verringerung der Schweißbildung und des Schwitzens im Gesicht' },
      ],
    },
    {
      category: 'Zonen',
      items: [
        { title: 'Gesicht (v. a. Wangen, Stirn), Hals, Dekolleté' },
      ],
    },
  ],
};


  const benefitsData: QuickInfoSectionProps = {
    title: 'SkinBotox auf einen Blick',
    benefits: [
      { title: 'Kosten (Richtwert)', description: `ab ${PRICES.botulinum.microBotox}\u20AC*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungszeit', description: 'ca. 20–30 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Möglicher Wirkeintritt', description: 'einige Tage bis ca. 14 Tage', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Mögliche Wirkdauer', description: 'etwa 3–6 Monate', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Betäubung', description: 'Betäubungscreme optional', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Alltag', description: 'in der Regel rasch wieder möglich', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note:
      '*GOÄ-orientierter Richtwert. Der konkrete Betrag richtet sich nach Areal, Menge und Aufwand und wird nach individueller Aufklärung festgelegt. Keine Erfolgsgarantie.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Behandlung',
    steps: [
      {
        number: '01',
        title: 'Beratung & Hautanalyse',
        description:
          'Besprechung von Zielen (z.\u00A0B. Poren, Glanz, feine Fältchen) sowie Eignung der Areale (Gesicht, Hals, Dekolleté).',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung und Desinfektion. Auf Wunsch Betäubungscreme (Einwirkzeit ca. 30 Minuten).',
      },
      {
        number: '03',
        title: 'Mikro-Injektionen / Needling',
        description:
          'Stark verdünntes Botulinumtoxin sehr oberflächlich im ca. 1×1‑cm Raster injiziert; alternativ begleitendes Microneedling mit Wirkstoffeinbringung.',
      },
      {
        number: '04',
        title: 'Nachsorge',
        description:
          'Beruhigende Pflege/Masken nach Bedarf und Hinweise zur Schonung. Beurteilung des Effekts nach ca. 10–14 Tagen.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorgehinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Anwendung in Schwangerschaft oder Stillzeit.' },
        { title: 'Infektionen/Entzündungen', description: 'Keine Behandlung bei lokalen Entzündungen.' },
        { title: 'Operationen', description: 'Nicht innerhalb von 2 Wochen vor/nach einer OP.' },
        { title: 'Blutverdünner', description: 'ASS/Ibuprofen/Diclofenac nur nach ärztlicher Rücksprache pausieren – bitte nicht eigenständig absetzen.' },
        { title: 'Alkohol', description: '48 Stunden vor der Behandlung möglichst vermeiden.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Aufrecht bleiben', description: 'Für 3–4 Stunden aufrechte Haltung beibehalten.' },
        { title: 'Sport/Schwimmbad', description: '48 Stunden keinen intensiven Sport und kein Schwimmbad.' },
        { title: 'Hitze/UV', description: '1–2 Wochen starke Hitze (Sauna, Solarium) und intensive Sonne meiden; 4–6 Wochen Sonnenschutz beachten.' },
        { title: 'Massagen/Behandlungen', description: 'Für 2 Wochen keine Gesichts- oder kräftigen Kiefermassagen.' },
        { title: 'Alkohol', description: 'Mindestens 48 Stunden keinen Alkohol.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ärztliche Beratung in Bremen',
    description: [
      'Wir klären Nutzen, mögliche Risiken und Alternativen (z.\u00A0B. topische Präparate, Laser/Peel, Microneedling). Die Entscheidung für oder gegen Mesobotox wird individuell getroffen.',
      'Durchführung nach aktuellen Standards; Kontraindikationen (z.\u00A0B. neuromuskuläre Erkrankungen, relevante Allergien) werden besprochen.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztliche Beratung zu Mesobotox / Microbotox',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Anwendungen mit Botulinumtoxin',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Faltenbehandlung mit Botulinumtoxin',
        title: 'Faltenbehandlung',
        description:
          'Klassische Anwendung bei mimischen Falten – Dosierung nach Befund. Keine Erfolgsgarantie.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp',
        imageAlt: 'Masseter/Bruxismus – Kaumuskel',
        title: 'Masseter / Bruxismus',
        description:
          'Lokal begrenzte Anwendung am Kaumuskel – Eignung wird individuell geprüft.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp',
        imageAlt: 'Anwendung gegen Schwitzen',
        title: 'Hyperhidrose',
        description: 'Information zur axillären Hyperhidrose – individuelle Indikation erforderlich.',
        treatmentUrl: '/botulinumtoxin/hyperhidrose',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-migräne_hero.webp',
        imageAlt: 'Migräne',
        title: 'Migräne',
        description: 'Therapieoption bei chronischer Migräne im Rahmen der ärztlichen Indikation.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Microbotox',
    faqs: [
      {
        question: 'Was ist Mesobotox und wie funktioniert die Behandlung?',
        answer:
          'Es handelt sich um eine oberflächliche Anwendung stark verdünnten Botulinumtoxins über Mikro‑Injektionen (alternativ begleitendes Needling). Ziel ist die Unterstützung eines verfeinerten Hautbilds, u.\u00A0a. durch Einfluss auf Talg-/Schweißdrüsen und sehr feine Muskelfasern.',
      },
      {
        question: 'Was ist der Unterschied zwischen klassischem Botulinumtoxin und Mesobotox?',
        answer:
          'Klassische Botulinumtoxin-Behandlungen zielen meist auf eine deutlichere Muskelentspannung (tiefer, punktuell). Microbotox arbeitet sehr oberflächlich und fokussiert auf Hautqualität (Poren/Glanz/feine Fältchen) bei weitgehend erhaltener Mimik.',
      },
      {
        question: 'Wie lange hält das Ergebnis einer Mesobotox-Behandlung an?',
        answer:
          'Die beobachtete Wirkzeit liegt häufig bei etwa 3–6 Monaten. Abweichungen sind möglich.',
      },
      {
        question: 'Was kostet eine Mesobotox-Behandlung?',
        answer:
          `Microbotox kosten (Richtwert): ab ca. ${PRICES.botulinum.microBotox}\u00A0€. Der Betrag hängt von Areal, Menge und Aufwand ab. Die Abrechnung erfolgt GOÄ-orientiert; der konkrete Preis wird individuell festgelegt.`,
      },
      {
        question: 'Ist Mesobotox sicherund gibt es Nebenwirkungen?',
        answer:
          'Die Injektionen mit sehr feinen Nadeln sind in der Regel gut tolerierbar. Mögliche, meist vorübergehende Reaktionen: Rötungen, Schwellungen, kleine Hämatome; gelegentlich Kopfschmerz/Unwohlsein. Kontraindikationen werden vorab besprochen.',
      },
      {
        question: 'Lohnt sich Microbotox im Vergleich zu klassischem Botulinumtoxin?',
        answer:
          'Das hängt von Ihrem Ziel ab: Für starke Mimikfalten eignen sich häufig klassische Anwendungen. Für Hautqualität (Poren/Glanz/feine Fältchen) kann Mesobotox erwogen werden. Eine allgemeine Empfehlung ist nicht möglich; wir beraten individuell.',
      },
      {
        question: 'Wann sieht man das Ergebnis von Mesobotox?',
        answer:
          'Erste Effekte können nach wenigen Tagen sichtbar sein, die Beurteilung erfolgt meist bis etwa 14 Tage nach der Behandlung.',
      },
      {
        question: 'Welche Hautprobleme lassen sich mit Microbotox behandeln?',
        answer:
          'Je nach Ausgangsbefund: großporige/ölige Haut, Glanz, oberflächliche Knitterfältchen. Bei Rosazea/Akne kann eine unterstützende Anwendung erwogen werden (nicht im akuten Schub).',
      },
      {
        question: 'Kann man Microbotox mit Hyaluron oder Microneedling kombinieren?',
        answer:
          'Kombinationen sind möglich (z.\u00A0B. Microneedling, chemische Peelings, Hyaluron in getrennten Sitzungen/Arealen). Das genaue Vorgehen wird individuell geplant, um Risiken zu minimieren.',
      },
      {
        question: 'Wie läuft eine Mesobotox-Behandlung ab?',
        answer:
          'Beratung und Hautanalyse, anschließend Reinigung/Desinfektion und ggf. Betäubungscreme. Sehr oberflächliche Mikro‑Injektionen im Raster oder begleitendes Needling. Danach beruhigende Pflege und Nachsorgehinweise.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Beratung zu Mesobotox / Microbotox',
    subtitle:
      'Sie möchten mehr zu Anwendung, Sicherheit und mesobotox kosten erfahren? Wir beraten Sie gerne.',
    primaryCTA: { text: 'Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

   const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
    { id: 'quickInfos', label: 'Überblick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Anwendungen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin' },
  ];


  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...benefitsData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
    </div>
  );
}
