import type { Metadata } from 'next';
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
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
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSectionProps,
  TreatmentsSection
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

// Sichtbar markenfrei, Marke nur in Meta/ALT/Schema
export const metadata: Metadata = {
  title:
    'Profhilo Bremen | BAP-Technik für Hyaluron-Remodulierung | EL Aesthetics',
  description:
    'Profhilo (BAP-Technik): Hyaluron-Remodulierung zur Verbesserung von Hautqualität & Elastizität – wenige Stiche, kurze Downtime, Serie aus 2 Sitzungen + Erhaltung.',
  keywords:
    'Profhilo, BAP, Bio Aesthetic Points, NAHYCO, Profhilo Bremen, Profhilo Kosten Bremen, Hyaluron Remodulierung',
  openGraph: {
    title:
      'Profhilo (BAP) – Hyaluron-Remodulierung | EL Aesthetics Bremen',
    description:
      'Hyaluron-Remodulierung mit BAP-Technik: Hautqualität & Elastizität verbessern – wenige Stiche, kurze Downtime.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//profhilo/og-profhilo-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/profhilo',
  },
};

export default function ProfhiloBAPPage() {
  // Sichtbarer Content ohne Markennennung
  const heroData: HeroSectionProps = {
    title: 'Hyaluron-Remodellierung (BAP-Technik) in Bremen',
    subtitle:
      'Hautqualität & Elastizität gezielt verbessern – wenige Stiche, schonende Behandlung.',
    imageSrc: '/elaesthetics-bremen-github/assets//hyaluron/hyaluron-profhilo_hero.webp',
    // Markenname nur im ALT-Text (nicht sichtbar für Nutzer)
    imageAlt: 'Profhilo BAP Technik – Hyaluron Remodulierung Illustration',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
  title: 'Was bedeutet Hyaluron-Remodellierung (BAP-Technik)?',
  content: [
    'Remodellierung – auch Bioremodulierung genannt – ist eine gewebestimulierende Hyaluron-Behandlung, die die Hautqualität sichtbar verbessert: mehr Elastizität, feinere Linien, gleichmäßigerer Teint. Im Gegensatz zu Volumenbehandlungen steht nicht die Formung im Vordergrund, sondern die Qualität des Gewebes.',
    'Die BAP-Technik (Bio Aesthetic Points) arbeitet mit wenigen, exakt definierten Punkten pro Gesichtshälfte. Eine besonders fließfähige, hybride Hyaluron-Formulierung verteilt sich großflächig im Gewebe – bekannt aus einem international etablierten Remodelling-System – und sorgt für ein natürliches, nicht überkorrigiertes Ergebnis.',
    'Ideal ist dieser Ansatz bei leichter Laxität, Knitterfältchen und müdem Hautbild. Behandelt werden je nach Bedarf Gesicht, Hals, Dekolleté oder Hände – für eine frischer wirkende Haut mit subtiler, aber spürbarer Verbesserung.',
    'Das Konzept ist als kurze Behandlungsserie angelegt: meist zwei Sitzungen im Abstand weniger Wochen, anschließend Erhaltung in sinnvollen Intervallen. Die Ausfallzeit ist in der Regel kurz, sodass Sie im Alltag schnell wieder einsatzfähig sind.',
    'Alle Behandlungen erfolgen ärztlich, mit hochwertigen CE-gekennzeichneten Präparaten, klaren Hygiene-Standards und transparenter Aufklärung. In Bremen beraten wir Sie persönlich, ob Remodellierung für Ihr Hautziel die beste Wahl ist – und wie sich der Plan sinnvoll mit ergänzenden Verfahren kombinieren lässt.'
  ],
};


  const areasData: AreasSectionProps = {
    title: 'Anwendungsbereiche & Anliegen',
    categories: [
      {
        category: 'Gesicht',
        items: [
          { title: 'Feine Linien & Knitterfältchen' },
          { title: 'Müdes Hautbild / frischere Ausstrahlung' },
          { title: 'Hautelastizität & Ebenmäßigkeit' },
        ],
      },
      {
        category: 'Hals & Dekolleté',
        items: [
          { title: 'Leichte Laxität am Hals' },
          { title: 'Struktur & Elastizität im Dekolleté' },
        ],
      },
      {
        category: 'Hände',
        items: [{ title: 'Hautqualität verfeinern' }],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'individuell, gemäß GOÄ', iconUrl: '/elaesthetics-bremen-github/assets//icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 30–45 Min', iconUrl: '/elaesthetics-bremen-github/assets//icons/TIME.svg' },
      { title: 'Schema', description: '2 Sitzungen + Erhaltung', iconUrl: '/elaesthetics-bremen-github/assets//icons/wiederholung.svg' },
      { title: 'Downtime', description: 'kurz (meist alltagstauglich)', iconUrl: '/elaesthetics-bremen-github/assets//icons/gesellschaft.svg' },
      { title: 'Stiche', description: 'wenige, standardisierte Punkte', iconUrl: '/elaesthetics-bremen-github/assets//icons/Spritze.svg' },
      { title: 'Ziel', description: 'Hautqualität & Elastizität', iconUrl: '/elaesthetics-bremen-github/assets//icons/CAL.svg' },
    ],
    note: 'Die individuelle Planung und Abrechnung erfolgen gemäß GOÄ.',
  };

  const processData: ProcessSectionProps = {
    title: 'Behandlungsablauf (BAP-Technik)',
    steps: [
      {
        number: '01',
        title: 'Analyse & Plan',
        description:
          'Indikationscheck, Arealwahl und Festlegung des Sitzungsplans (2 Sitzungen, anschließend Erhaltung).',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung/Desinfektion, Anzeichnen der BAP-Punkte; auf Wunsch Betäubungscreme.',
      },
      {
        number: '03',
        title: 'Injektion & Diffusion',
        description:
          'Gezielte Applikation an wenigen, definierten Punkten; die Formulierung verteilt sich großflächig im Gewebe.',
      },
      {
        number: '04',
        title: 'Kontrolle & Erhaltung',
        description:
          'Kurze Kühlung, Nachsorgehinweise; zweite Sitzung nach Plan, Erhaltung in sinnvollen Intervallen.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- & Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: 'Blutverdünner nur nach ärztlicher Rücksprache anpassen.' },
        { title: 'Hautvorbereitung', description: 'Vorab keine aggressiven Peelings/Laser; Sonne/Solarium meiden.' },
        { title: 'Alkohol', description: '24 h vorher verzichten.' },
        { title: 'Gesundheit', description: 'Kein akuter Infekt/Herpes.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Kühlung & UV-Schutz', description: 'Areale kühlen; direkte Sonne vermeiden, hohen UV-Schutz nutzen.' },
        { title: 'Sport/Hitze', description: '48–72 h kein intensiver Sport, Sauna oder Solarium.' },
        { title: 'Hygiene', description: 'Für einige Stunden kein Make-up direkt auf Einstichstellen.' },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'S. Krämer',
      rating: 5,
      text:
        'Haut wirkt straffer und frischer, ganz ohne „gemacht“-Effekt. Ablauf transparent, schnelle Kontrolle.',
      date: '2025-06-03',
    },
    {
      id: 2,
      name: 'L. Weber',
      rating: 5,
      text:
        'Sehr wenige Stiche, kaum Ausfallzeit. Nach der zweiten Sitzung deutlich elastischere Haut.',
      date: '2025-04-17',
    },
    {
      id: 3,
      name: 'A. Nguyen',
      rating: 5,
      text:
        'Ideal für mein Dekolleté – feine Knitterfältchen sind sichtbar weicher geworden.',
      date: '2025-02-11',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Beratung zum Remodulierung',
    description: [
      'Wir klären, ob die BAP-Technik für Ihr Anliegen geeignet ist und erstellen einen individuellen Plan – von der Erstsitzung bis zur Erhaltung.',
      'Transparente Aufklärung, hochwertige CE-Produkte und sterile Arbeitsweise sind selbstverständlich.',
      'Die Kosten werden gemäß GOÄ nach Areal, Aufwand und Materialmenge berechnet.',
    ],
    ctaText: 'Termin vereinbaren',
    ctaHref: '/terminanfragen',
    imageSrc: '/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp',
    // Marke im ALT erlaubt
    imageAlt: 'Profhilo BAP Behandlung – Beratung in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Sinnvolle Ergänzungen',
    treatments: [
      {
        imageUrl: "/elaesthetics-bremen-github/assets//hyaluron/hyaluron-filler_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluronsäure-Filler (Falten & Volumen)",
        description: "Die Behandlung mit Hyaluron-Fillern ist ein bewährtes Verfahren, um Falten wie Nasolabial- oder Marionettenfalten zu unterfüttern und Volumendefizite auszugleichen. Mit diesem Wirkstoff erzielen wir in Bremen beeindruckende und natürliche Effekte – in einem risikoarmen, minimal-invasiven Eingriff. Freuen Sie sich auf sofort sichtbare Ergebnisse.",
        treatmentUrl: "/hyaluron/filler"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//hyaluron/hyaluron-skinbooster_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Symbolbild für Feuchtigkeit durch eine Skinbooster-Behandlung",
        title: "Skinbooster (Hydratation & Glow)",
        description: "Skinbooster revitalisieren Ihre Haut von innen heraus. Durch die tiefe Hydratation mit unvernetzter Hyaluronsäure werden feine Linien geglättet und die Haut erhält eine frische, strahlende Ausstrahlung. Diese Behandlung eignet sich in unserer Praxis in Bremen hervorragend für Gesicht, Hals, Dekolleté und Hände.",
        treatmentUrl: "/hyaluron/skinbooster"
      },
      
      {
        imageUrl: "/elaesthetics-bremen-github/assets//hyaluron/hyaluron-hylase_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hylase-Flasche",
        title: "Hylase (Hyaluronidase)",
        description: "Hyaluronidase, häufig als Hylase bezeichnet, ist ein natürlich im menschlichen Körper vorkommendes Enzym, das die Fähigkeit besitzt, Hyaluronsäure gezielt aufzulösen und abzubauen.",
        treatmentUrl: "/hyaluron/hylase"
      }
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Fragen & Antworten',
    faqs: [
      {
        question: 'Worin unterscheidet sich Remodulierung von Volumenbehandlungen?',
        answer:
          'Remodulierung zielt auf Hautqualität und Elastizität ab – ohne Formung oder Volumenaufbau. Volumenbehandlungen dienen der Kontur und dem Aufbau einzelner Bereiche.',
      },
      {
        question: 'Wie läuft die BAP-Technik ab?',
        answer:
          'Es werden wenige, definierte Punkte pro Seite gesetzt. Die Formulierung verteilt sich anschließend großflächig im Gewebe.',
      },
      {
        question: 'Wie viele Sitzungen sind sinnvoll?',
        answer:
          'In der Regel zwei Sitzungen in kurzem Abstand, anschließend Erhaltung in individuellen Intervallen.',
      },
      {
        question: 'Bin ich danach gesellschaftsfähig?',
        answer:
          'Meist ja. Kurzfristig sind kleine Rötungen oder Schwellungen möglich, die in der Regel rasch abklingen.',
      },
      {
        question: 'Für welche Areale eignet sich die Methode?',
        answer:
          'Gesicht, Hals, Dekolleté und Hände – insbesondere bei feinen Linien, leichter Laxität und müdem Hautbild.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Remodulierung gewünscht?',
    subtitle:
      'Lassen Sie sich individuell beraten – wir erstellen einen passenden Behandlungsplan.',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'EL Aesthetics Bremen',
    description:
      'Zentral gelegen und gut erreichbar aus Horn-Lehe, Oberneuland, Schwachhausen & Umgebung.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '0155 66919635',
      email: 'info@elaesthetics-bremen.de',
      openingHours: ['Termine nach Vereinbarung'],
    },
  };

  // JSON-LD mit Markennennung (nicht sichtbar im Content)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Hyaluron-Remodulierung (BAP-Technik)',
    alternateName: 'Bio Aesthetic Points',
    brand: { '@type': 'Brand', name: 'Profhilo' },
    areaServed: 'Bremen, DE',
    procedureType: 'Dermatologic',
    description:
      'Remodulierung der Hautqualität und Elastizität mit standardisiertem BAP-Protokoll; kurze Downtime, Serie aus 2 Sitzungen plus Erhaltung.',
    provider: {
      '@type': 'MedicalClinic',
      name: 'EL Aesthetics',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Richtepad 14',
        postalCode: '28355',
        addressLocality: 'Bremen',
        addressCountry: 'DE',
      },
      telephone: '+49-155-66919635',
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen zum Remodulierung"
        subtitle="Natürlich, dezent und planbar – echte Rückmeldungen unserer Patientinnen und Patienten."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />

      {/* Strukturierte Daten – Marke nur hier */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
