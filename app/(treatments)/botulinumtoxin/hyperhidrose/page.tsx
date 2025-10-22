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
  title:
    'Botox gegen starkes Schwitzen (Hyperhidrose) Bremen | Achseln | EL Aesthetics',
  description:
    'Effektive Botox-Behandlung gegen Hyperhidrose in Bremen: weniger Schweiß unter den Achseln, kurze Downtime, natürliches Gefühl. Beratung & Behandlung bei EL Aesthetics.',
  keywords:
    'Hyperhidrose Bremen, Botox gegen Schwitzen Bremen, Achselschwitzen behandeln, übermäßiges Schwitzen Achseln, Schweißdrüsen Botox Bremen, Hyperhidrose Behandlung Bremen',
  openGraph: {
    title: 'Botox gegen Hyperhidrose in Bremen – weniger Achselschwitzen',
    description:
      'Botulinumtoxin blockiert vorübergehend die Schweißproduktion. Geeignet bei übermäßigem Schwitzen (Hyperhidrose) – Achseln. Kurze Ausfallzeit, schnelle Wirkung.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/botulinumtoxin-hyperhidrose_hero.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/hyperhidrose',
  },
};

export default function BotoxHyperhidrosePage() {
  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin gegen Hyperhidrose (Achseln)',
    subtitle:
      'Beenden Sie lästiges Achselschwitzen: Botullinumtoxin blockiert vorübergehend die Schweißproduktion – mit kurzer Downtime und natürlichem Ergebnis.',
    imageSrc: '/assets/botulinumtoxin/botulinumtoxin-hyperhidrose_hero.webp',
    imageAlt: 'Botox-Behandlung gegen Achselschwitzen (Hyperhidrose) in Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Hyperhidrose – und wie hilft Botulinumtoxin?',
    content: [
      'Unter Hyperhidrose versteht man übermäßiges Schwitzen, das nicht nur durch Hitze oder Sport entsteht, sondern z.\u00B7B. auch genetisch bedingt sein kann oder im Zusammenhang mit Medikamenten bzw. Schilddrüsenerkrankungen auftritt. Häufig betroffen sind die Achseln.',
      'Die Behandlung mit Botulinumtoxin ist eine minimal-invasive, sehr effektive Methode: Der Wirkstoff blockiert die Signalübertragung an den Nervenendigungen der Schweißdrüsen. Dadurch produzieren die Drüsen vorübergehend deutlich weniger bis keinen Schweiß – mit spürbarer Erleichterung im Alltag.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Anwendungsbereich',
    categories: [
      {
        category: 'Primär',
        items: [{ title: 'Achseln (axilläre Hyperhidrose)' }],
      },
      {
        category: 'Hinweis',
        items: [
          {
            title:
              'Weitere Areale auf Anfrage nach individueller Prüfung (z.\u00B7B. nur wenn medizinisch geeignet)'
          },
        ],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: 'Hyperhidrose-Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.botulinum.hyperhidrose}\u20AC*`, iconUrl: '/assets//icons/EUR.svg' },
      { title: 'Dauer', description: '30–45 Minuten', iconUrl: '/assets//icons/TIME.svg' },
      { title: 'Wirkeintritt', description: '10–14 Tage', iconUrl: '/assets//icons/CAL.svg' },
      { title: 'Wirkdauer', description: '3–6 Monate', iconUrl: '/assets//icons/TIME.svg' },
      { title: 'Betäubung', description: 'keine (Betäubungscreme möglich)', iconUrl: '/assets//icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets//icons/gesellschaft.svg' },
    ],
    note:
      '*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf Ihrer Hyperhidrose-Behandlung',
    steps: [
      {
        number: '01',
        title: 'Beratung & Areal-Markierung',
        description:
          'Wir klären Ihre Vorgeschichte und prüfen, ob eine Botulinumtoxin-Therapie sinnvoll ist. Die Achselbereiche werden markiert (Schweißverteilung) und für die Behandlung vorbereitet.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung & Desinfektion. Auf Wunsch tragen wir eine Lidocain-haltige Betäubungscreme auf (Einwirkzeit ca. 30 Minuten).',
      },
      {
        number: '03',
        title: 'Micro-Injektionen im Raster',
        description:
          'Das verdünnte Botulinumtoxin wird sehr oberflächlich in einem Raster von ca. 1\u00D71 cm in die Haut injiziert. Die Vielzahl der Injektionen ist kurz, kann aber als unangenehm empfunden werden – die Betäubungscreme erhöht den Komfort.',
      },
      {
        number: '04',
        title: 'Kontrolle & Auffrischung',
        description:
          'Die volle Wirkung ist in der Regel nach 10–14 Tagen erreicht. Auffrischungen erfolgen typischerweise nach 3–6 Monaten, abhängig von Schweißaktivität und individuellem Ansprechen.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Wichtige Hinweise zur Behandlung',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Behandlung in Schwangerschaft oder Stillzeit.' },
        { title: 'Entzündungen', description: 'Keine Behandlung bei Entzündungen im Behandlungsareal.' },
        { title: 'Operationen', description: '2 Wochen vor oder nach einer OP nicht behandeln.' },
        {
          title: 'Blutverdünner',
          description:
            'Nach ärztlicher Rücksprache 7 Tage vorher möglichst keine blutverdünnenden Medikamente (z. B. Aspirin, Ibuprofen, Diclofenac).',
        },
        { title: 'Alkohol', description: '48 Stunden vor der Behandlung kein Alkohol empfohlen.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Aufrecht bleiben', description: '3–4 Stunden nach der Behandlung aufrechte Haltung beibehalten.' },
        { title: 'Sport/Hitze', description: '24 Stunden kein Sport; 2 Tage Sauna, Dampfbad und starke Hitze meiden.' },
        { title: 'UV/Sonne', description: '1–2 Wochen keine intensive Sonneneinstrahlung; 4–6 Wochen Sonnenschutz beachten.' },
        { title: 'Alkohol', description: 'Mindestens 48 Stunden auf Alkohol verzichten (kann die Wirksamkeit mindern).' },
        { title: 'Pflege', description: 'Am Behandlungstag keine aggressiven Deos/Peelings im Behandlungsareal verwenden.' },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Daniela F.',
      rating: 5,
      text:
        'Ich habe seit Jahren mit starkem Achselschwitzen gekämpft. Zwei Wochen nach der Behandlung war ich fast komplett trocken – riesige Erleichterung im Alltag!',
      date: '2024-07-03',
    },
    {
      id: 2,
      name: 'Timo L.',
      rating: 5,
      text:
        'Schnelle, professionelle Behandlung. Die vielen kleinen Piekser waren dank Betäubungscreme gut auszuhalten. Wirkung hält bei mir ca. 5 Monate.',
      date: '2024-06-12',
    },
    {
      id: 3,
      name: 'Lea P.',
      rating: 4,
      text:
        'Deutlich weniger Schweiß und endlich keine Flecken mehr auf Shirts. Nach 6 Monaten habe ich auffrischen lassen.',
      date: '2024-04-21',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Hyperhidrose-Behandlungen in Bremen',
    description: [
      'Ich bin Ola El-Armouche, Ärztin für ästhetische Medizin. Wir setzen Botulinumtoxin gezielt gegen axilläre Hyperhidrose ein – sicher, effektiv und mit kurzer Downtime.',
      'Nach einer kurzen Anamnese und Areal-Diagnostik bekommen Sie einen individuellen Behandlungsplan – inkl. realistischer Erwartungen zu Wirkeintritt und Wirkdauer.',
      'Als DGBT-zertifizierte Ärztin arbeite ich nach aktuellen Standards; im Termin klären wir Kontraindikationen und beantworten alle Fragen ausführlich.',
    ],
    ctaText: 'Jetzt Beratungstermin anfragen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets//tinified/IMG_7364.webp',
    imageAlt: 'Ärztin Ola El-Armouche berät Patientin zur Hyperhidrose-Behandlung in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Botulinumtoxin Behandlungen in Bremen',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Botox Faltenbehandlung für Stirn, Zornesfalte und Krähenfüße',
        title: 'Faltenbehandlung',
        description:
          'Klassische Behandlung von Mimikfalten (Stirn, Zornesfalte, Krähenfüße) für einen entspannten Look.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botulinumtoxin-masseter_hero.webp',
        imageAlt: 'Botox Masseter zur Jawline-Definition & gegen Bruxismus',
        title: 'Masseter / Bruxismus',
        description:
          'Entspannung des Kaumuskels für schmalere Kieferkontur und Linderung von Zähneknirschen & Kieferschmerzen.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botulinumtoxin-microbotox_hero.webp',
        imageAlt: 'Microbotox Behandlung zur Verbesserung der Hautqualität',
        title: 'Microbotox',
        description:
          'Oberflächliche Botulinumtoxin-Anwendung zur Porenverfeinerung und Reduktion von Glanz.',
        treatmentUrl: '/botulinumtoxin/microbotox',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botulinumtoxin-migräne_hero.webp',
        imageAlt: 'Botox bei chronischer Migräne',
        title: 'Migräne',
        description: 'Anerkannte Therapieoption bei chronischer Migräne.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Hyperhidrose-Behandlung',
    faqs: [
      {
        question: 'Wie funktioniert die Botulinumtoxin Behandlung gegen Schwitzen?',
        answer:
          'Botulinumtoxin blockiert die Signalübertragung an den Nervenendigungen der Schweißdrüsen. Dadurch produzieren die Drüsen vorübergehend weniger bis keinen Schweiß – das reduziert Achselschwitzen spürbar.',
      },
      {
        question: 'Wie läuft die Behandlung ab?',
        answer:
          'Nach Reinigung, ggf. Betäubungscreme (Einwirkzeit ca. 30 Min) und Markierung erfolgen sehr oberflächliche Micro-Injektionen im Raster von etwa 1×1 cm in die betroffenen Areale.',
      },
      {
        question: 'Wann sehe ich das Ergebnis und wie lange hält es?',
        answer:
          'Der Effekt baut sich innerhalb von 10–14 Tagen auf. Die Wirkdauer liegt im Durchschnitt bei 3–6 Monaten und hängt u. a. von individueller Ansprechbarkeit und Stoffwechsel ab.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die vielen kleinen Piekser können als unangenehm empfunden werden; mit Betäubungscreme ist die Behandlung gut tolerierbar. Gesellschaftsfähigkeit in der Regel sofort.',
      },
      {
        question: 'Welche Nebenwirkungen sind möglich?',
        answer:
          'Vorübergehende Rötungen, Schwellungen oder kleine Hämatome an den Einstichstellen sind möglich und klingen meist nach wenigen Tagen ab. Allergien sind selten.',
      },
      {
        question: 'Kann die Botulinumtoxin-Wirkung ausbleiben?',
        answer:
          'Selten sprechen Personen aufgrund neutralisierender Antikörper (klinisch ca. 1,5%) oder schnellen Wirkstoffabbaus weniger an. Echte Resistenzen sind selten.',
      },
      {
        question: 'Gibt es Gegenanzeigen?',
        answer:
          'Ja. U. a. neuromuskuläre Erkrankungen (z. B. Myasthenia gravis, Lambert-Eaton), relevante Schluckstörungen/Atemnot, Allergien gegen Inhaltsstoffe sowie Schwangerschaft/Stillzeit.',
      },
      {
        question: 'Was kostet die Behandlung?',
        answer:
          `Die Kosten beginnen in der Regel bei etwa ${PRICES.botulinum.hyperhidrose}\u00A0€ und richten sich nach Areal, Menge und individuellem Bedarf. Die Abrechnung erfolgt GOÄ-orientiert.`,
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Weniger Schwitzen – mehr Freiheit',
    subtitle:
      'Buchen Sie jetzt Ihren Termin für eine Hyperhidrose-Behandlung in Bremen.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis für Hyperhidrose-Behandlungen in Bremen: EL Aesthetics',
    description:
      'Diskrete, wirksame Behandlung gegen übermäßiges Schwitzen an den Achseln – individuell geplant und schonend umgesetzt.',
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
        subtitle="Deutlich weniger Schweiß unter den Achseln – spürbare Erleichterung im Alltag."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}
