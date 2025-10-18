import type { Metadata } from 'next';
import {
  AreasSection,
  ConsultationSectionProps,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
  CTASection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  LocationSection,
  LocationSectionProps,
  ProcessSection,
  ProcessSectionProps,
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Microbotox Bremen | Feineres Hautbild, Porenverkleinerung & Talgregulation | EL Aesthetics',
  description:
    'Microbotox (Mesobotox) in Bremen: Verfeinerte Poren, weniger Glanz, glattere Haut – ohne starre Mimik. Schonende Behandlung mit kurzer Downtime. Jetzt Termin sichern!',
  keywords:
    'Microbotox Bremen, Mesobotox Bremen, Poren verkleinern Bremen, ölige Haut reduzieren, Talgproduktion senken, Hautbild verfeinern Bremen, Glow Behandlung, natürliche Botox Alternative',
  openGraph: {
    title: 'Microbotox Behandlung in Bremen – feinere Poren & strahlende Haut',
    description:
      'Oberflächliche Botulinumtoxin-Behandlung (Microbotox) zur Verfeinerung des Hautbilds und Reduktion von Talg & Schweiß. Natürliches Ergebnis ohne starre Mimik.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botox/og-image-botox-microbotox-bremen.png'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botox/microbotox',
  },
};

export default function BotoxMicrobotoxPage() {
  const heroData: HeroSectionProps = {
    title: 'Microbotox in Bremen (Mesobotox)',
    subtitle:
      'Feineres, glatteres und strahlenderes Hautbild – mit reduzierter Talg- und Schweißproduktion.\nNatürliche Ergebnisse ohne „starre“ Optik.',
    imageSrc: '/assets/botox/botox-microbotox_hero.png',
    imageAlt: 'Microbotox / Mesobotox Behandlung für feinere Poren und weniger Glanz in Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Microbotox (Mesobotox)?',
    content: [
      'Bei Microbotox wird eine verdünnte Botulinumtoxin-Lösung sehr oberflächlich in die Haut injiziert oder via Microneedling eingearbeitet. Anders als bei der klassischen, tieferen Botulinumtoxin-Behandlung zielt Microbotox nicht auf eine starke Muskelentspannung ab, sondern vor allem auf ein verfeinertes Hautbild.',
      'Die Aktivität von Talg- und Schweißdrüsen sowie feinster Muskelfasern wird reduziert – das Ergebnis: weniger Glanz, kleinere Poren, glattere Haut und gemilderte feine Fältchen bei weitgehend erhaltener Mimik.',
      'Für Einsteiger:innen, die eine dezente, natürliche Wirkung wünschen, ist Microbotox eine gute Option ohne „Masken“-Effekt.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Anwendungsbereiche & Effekte von Microbotox',
    categories: [
      {
        category: 'Hautbild & Struktur',
        items: [
          { title: 'Feineres, glatteres und strahlenderes Hautbild' },
          { title: 'Verkleinerung der Poren' },
          { title: 'Milderung feiner Fältchen bei erhaltener Mimik' },
        ],
      },
      {
        category: 'Funktion',
        items: [
          { title: 'Reduktion der Talgproduktion (weniger Glanz)' },
          { title: 'Verringerung von Schweißbildung im Gesicht' },
        ],
      },
      {
        category: 'Besondere Situationen',
        items: [
          { title: 'Unterstützend bei Rosazea & Akne (nicht im akuten Schub)' },
          { title: 'Gesicht, Hals & Dekolleté' },
        ],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: 'Microbotox auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.botulinum.microBotox}€*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'max. 30 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkeintritt', description: 'spätestens nach 14 Tagen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Wirkdauer', description: '3–6 Monate', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Betäubung', description: 'Betäubungscreme optional', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf Ihrer Microbotox-Behandlung',
    steps: [
      {
        number: '01',
        title: 'Beratung & Hautanalyse',
        description:
          'Wir besprechen Ziele (Poren, Glanz, feine Fältchen) und klären, welche Areale sinnvoll sind (Gesicht, Hals, Dekolleté). Auf Wunsch Fotodokumentation vor Beginn.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung & Desinfektion. Auf Wunsch wird eine Betäubungscreme aufgetragen (Einwirkzeit ca. 30 Minuten).',
      },
      {
        number: '03',
        title: 'Micro-Injektionen',
        description:
          'Stark verdünntes Botulinumtoxin wird sehr oberflächlich in einem Raster von ca. 1×1 cm injiziert – alternativ Einbringen via Microneedling. Die Behandlung dauert in der Regel maximal 30 Minuten.',
      },
      {
        number: '04',
        title: 'Beruhigende Maske & Nachsorge',
        description:
          'Direkt anschließend erhalten Sie eine beruhigende Maske und klare Nachsorgehinweise. Die volle Wirkung ist typischerweise nach bis zu 14 Tagen sichtbar.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Wichtige Hinweise zur Behandlung',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Schwangerschaft & Stillzeit',
          description: 'Keine Behandlung in Schwangerschaft oder Stillzeit.',
        },
        {
          title: 'Entzündungen',
          description: 'Keine Behandlung bei Entzündungen im Behandlungsareal.',
        },
        {
          title: 'Operationen',
          description: '2 Wochen vor oder nach einer Operation nicht behandeln.',
        },
        {
          title: 'Blutverdünner',
          description:
            'Nach ärztlicher Rücksprache 7 Tage vorher möglichst keine blutverdünnenden Medikamente (z. B. Aspirin, Ibuprofen, Diclofenac).',
        },
        {
          title: 'Alkohol',
          description: '48 Stunden vor der Behandlung kein Alkohol empfohlen.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Aufrechte Haltung',
          description: '3–4 Stunden nach der Behandlung aufrecht bleiben.',
        },
        {
          title: 'Sport/Schwimmbad',
          description: 'Für 48 Stunden Sport und Schwimmbad vermeiden.',
        },
        {
          title: 'Hitze/UV',
          description:
            '1–2 Wochen keine intensive Sonneneinstrahlung, Sauna, Solarium oder starke Wärmeeinwirkung; 4–6 Wochen Sonnenschutz beachten.',
        },
        {
          title: 'Massagen/Behandlungen',
          description: '2 Wochen keine Gesichts- oder (starken) Kiefermassagen.',
        },
        {
          title: 'Alkohol',
          description: 'Mindestens 48 Stunden kein Alkohol (kann Wirkung mindern).',
        },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Nina S.',
      rating: 5,
      text:
        'Meine Poren wirken deutlich kleiner und die Haut glänzt viel weniger. Das Ergebnis ist super natürlich – genau das wollte ich!',
      date: '2024-08-18',
    },
    {
      id: 2,
      name: 'Jana R.',
      rating: 5,
      text:
        'Sehr angenehme Behandlung. Nach ca. 2 Wochen war die Wirkung voll da: feinere Hautstruktur und weniger Make-up nötig.',
      date: '2024-07-02',
    },
    {
      id: 3,
      name: 'Meral K.',
      rating: 4,
      text:
        'Dezenter Glow und feinere Fältchen an den Wangen. Keine Ausfallzeit, ich war direkt wieder gesellschaftsfähig.',
      date: '2024-05-10',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Microbotox in Bremen',
    description: [
      'Ich bin Ola El-Armouche, Ärztin für ästhetische Medizin und Gründerin von EL Aesthetics. Microbotox ist ideal, um die Hautstruktur sichtbar zu verfeinern – mit erhaltenem, natürlichem Ausdruck.',
      'Nach einer genauen Hautanalyse erstelle ich Ihren individuellen Behandlungsplan und erkläre transparent, welche Ergebnisse realistisch sind und wann Sie sie erwarten können.',
      'Als zertifizierte Ärztin für Botulinumtoxin-Behandlungen (DGBT) arbeite ich nach aktuellen Standards – sicher, schonend und mit Fokus auf natürliche Ergebnisse.',
    ],
    ctaText: 'Jetzt Beratungstermin anfragen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztin Ola El-Armouche berät Patientin zur Microbotox-Behandlung in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Botox Behandlungen in Bremen',
    treatments: [
      {
        imageUrl: '/assets/botox/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Botox Faltenbehandlung für Stirn, Zornesfalte und Krähenfüße',
        title: 'Faltenbehandlung',
        description:
          'Klassische Mimikfalten-Behandlung (Stirn, Zornesfalte, Krähenfüße) für einen entspannten, frischen Ausdruck.',
        treatmentUrl: '/botox/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botox/botox-masseter_hero.png',
        imageAlt: 'Botox Masseter zur Jawline-Definition & gegen Bruxismus',
        title: 'Masseter / Bruxismus',
        description:
          'Entspannung des Kaumuskels für schmalere Kieferkontur und Linderung von Zähneknirschen & Kieferschmerzen.',
        treatmentUrl: '/botox/masseter',
      },
      {
        imageUrl: '/assets/botox/botox-hyperhidrose_hero.png',
        imageAlt: 'Botox gegen übermäßiges Schwitzen',
        title: 'Hyperhidrose',
        description: 'Effektiv gegen starkes Schwitzen (Achseln, Hände, Füße).',
        treatmentUrl: '/botox/hyperhidrose',
      },
      {
        imageUrl: '/assets/botox/botox-migräne_hero.png',
        imageAlt: 'Botox bei chronischer Migräne',
        title: 'Migräne',
        description: 'Anerkannte Therapieoption bei chronischer Migräne.',
        treatmentUrl: '/botox/migraene',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Microbotox',
    faqs: [
      {
        question: 'Wie funktioniert Microbotox?',
        answer:
          'Eine verdünnte Botulinumtoxin-Lösung wird sehr oberflächlich injiziert oder per Microneedling eingebracht. Ziel ist die Reduktion von Talg-/Schweißdrüsen-Aktivität und feinster Muskelfasern – für verfeinertes Hautbild und gemilderte Fältchen bei natürlicher Mimik.',
      },
      {
        question: 'Für wen ist die Behandlung geeignet?',
        answer:
          'Für Personen mit großporiger/öligen Haut, feinen Knitterfältchen oder störendem Glanz. Auch unterstützend bei Rosazea/Akne (nicht in akuten Schüben) und an Gesicht, Hals, Dekolleté anwendbar.',
      },
      {
        question: 'Wie läuft die Behandlung ab?',
        answer:
          'Nach Reinigung und optionaler Betäubungscreme (Einwirkzeit ca. 30 Minuten) erfolgen Micro-Injektionen im 1×1-cm-Raster – alternativ Microneedling mit Wirkstoffeinbringung. Danach beruhigende Maske.',
      },
      {
        question: 'Wann sehe ich das Ergebnis und wie lange hält es?',
        answer:
          'Die Wirkung ist meist nach einigen Tagen, spätestens nach 14 Tagen sichtbar und hält typischerweise 3–6 Monate.',
      },
      {
        question: 'Wirkt Microbotox „maskenhaft“?',
        answer:
          'Nein. Microbotox arbeitet sehr oberflächlich und erhält die natürliche Mimik weitgehend – es geht um Hautqualität, nicht um eine starke Muskelblockade.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die meisten empfinden sie als gut erträglich. Durch die sehr feinen Nadeln und auf Wunsch mit Betäubungscreme ist der Komfort hoch. Direkt danach sind Sie in der Regel gesellschaftsfähig.',
      },
      {
        question: 'Welche Nebenwirkungen sind möglich?',
        answer:
          'Übliche, harmlose Reaktionen sind Rötungen, Schwellungen oder kleine Hämatome an den Einstichstellen; gelegentlich Kopfschmerzen/Unwohlsein. Diese klingen meist binnen weniger Tage ab.',
      },
      {
        question: 'Gibt es Gegenanzeigen?',
        answer:
          'Ja: u. a. Schwangerschaft/Stillzeit, akute Entzündungen, 2 Wochen vor/nach OP nicht behandeln. Neuromuskuläre Erkrankungen oder relevante Allergien schließen eine Behandlung aus – dies klären wir im Gespräch.',
      },
      {
        question: 'Was kostet Microbotox in Bremen?',
        answer:
          `Die Kosten beginnen in der Regel bei etwa ${PRICES.botulinum.microBotox} € und richten sich nach Areal und Menge. Im Beratungsgespräch erhalten Sie einen transparenten Kostenplan (GOÄ-orientiert).`,
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für ein verfeinertes Hautbild?',
    subtitle:
      'Buchen Sie jetzt Ihre Microbotox-Behandlung – natürlich, dezent und mit kurzer Downtime.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis für Microbotox in Bremen: EL Aesthetics',
    description:
      'Wir bieten Microbotox (Mesobotox) für Gesicht, Hals und Dekolleté – mit Fokus auf sichere Anwendung und natürliche Ergebnisse.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '0155 66919635',
      email: 'info@elaesthetics-bremen.de',
      openingHours: ['Termine nach Vereinbarung'],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...benefitsData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten"
        subtitle="Dezente, natürliche Ergebnisse: verfeinerte Poren, weniger Glanz und spürbar glattere Haut."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}