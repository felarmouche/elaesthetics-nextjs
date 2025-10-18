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

export const metadata: Metadata = {
  title:
    'Hyaluron Filler Bremen | Lippen aufspritzen & Faltenunterspritzung | EL Aesthetics',
  description:
    'Hyaluron Filler in Bremen: Lippen natürlich aufspritzen, Faltenunterspritzung & Konturierung. Ärztliche Expertise, transparente Kosten nach GOÄ. Jetzt Termin sichern!',
  keywords:
    'Hyaluron Filler Bremen, Lippen aufspritzen Bremen, Lippenunterspritzung Bremen, Faltenunterspritzung Bremen, Tränenrinne Bremen, Jawline Bremen, Kinnaufbau Bremen, Nasolabialfalte Bremen, Marionettenfalten Bremen, Hylase Bremen',
  openGraph: {
    title:
      'Hyaluron Filler & Lippen in Bremen | EL Aesthetics',
    description:
      'Ärztliche Hyaluron-Filler-Behandlungen in Bremen: Lippen, Falten & Konturen – natürlich und präzise.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//hyaluron/og-hyaluron-filler-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/filler',
  },
};

export default function HyaluronFillerBremenPage() {
  const heroData: HeroSectionProps = {
    title: 'Hyaluron Filler in Bremen',
    subtitle:
      'Lippen aufspritzen, Falten sanft glätten & Konturen präzisieren – individuell, natürlich, ärztlich.',
    imageSrc: '/elaesthetics-bremen-github/assets//hyaluron/hyaluron-filler_hero.webp',
    imageAlt:
      'Hyaluron-Filler-Behandlung in Bremen – Lippen, Falten & Konturen',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Hyaluron-Filler: Wirkprinzip & Vorteile',
    content: [
      'Hyaluronsäure bindet Wasser, stellt Volumen wieder her und verbessert Konturen. Damit lassen sich Falten weichzeichnen, Lippen formen und das Gesichtsprofil harmonisieren – mit sofort sichtbaren, natürlich wirkenden Ergebnissen.',
      'Für Volumen und Kontur verwenden wir je nach Region unterschiedliche Filler-Kohäsionen und -Viskositäten. Ziel ist stets ein dezentes, typgerechtes Finish, das in Ruhe und Mimik harmonisch wirkt.',
      'Alle Behandlungen erfolgen ärztlich, mit hochwertigen CE-zertifizierten Präparaten und klaren Hygiene- und Sicherheitsstandards.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsareale mit Hyaluron-Fillern',
    categories: [
      {
        category: 'Lippen & Mundbereich',
        items: [
          { title: 'Lippenaufspritzen & -konturierung' },
          { title: 'Oberlippenfältchen (Plisséfalten)' },
          { title: 'Marionettenfalten' },
        ],
      },
      {
        category: 'Falten & Volumen',
        items: [
          { title: 'Nasolabialfalten' },
          { title: 'Wangenaufbau (Liquid Lift)' },
          { title: 'Tränenrinne (Augenringe, selektiert)' },
        ],
      },
      {
        category: 'Kontur & Profil',
        items: [
          { title: 'Jawline-Konturierung' },
          { title: 'Kinnaufbau & -korrektur' },
          { title: 'Nasenkorrektur ohne OP (Profilkorrektur)' },
        ],
      },
      {
        category: 'Weitere Bereiche',
        items: [
          { title: 'Hals & Dekolleté (ausgewählte Indikationen)' },
          { title: 'Handrücken-Volumen' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Hyaluron-Filler auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 250€*', iconUrl: '/elaesthetics-bremen-github/assets//icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 30–45 Min', iconUrl: '/elaesthetics-bremen-github/assets//icons/TIME.svg' },
      { title: 'Ergebnis', description: 'sofort sichtbar', iconUrl: '/elaesthetics-bremen-github/assets//icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 6–18 Monate', iconUrl: '/elaesthetics-bremen-github/assets//icons/CAL.svg' },
      { title: 'Betäubung', description: 'i. d. R. nicht nötig (Lidocain im Gel)', iconUrl: '/elaesthetics-bremen-github/assets//icons/Spritze.svg' },
      { title: 'Ausfallzeit', description: 'meist sofort gesellschaftsfähig', iconUrl: '/elaesthetics-bremen-github/assets//icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; individuelle Abrechnung gemäß GOÄ.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Filler-Behandlung',
    steps: [
      {
        number: '01',
        title: 'Analyse & Behandlungsplan',
        description:
          'Wir definieren Ihre Ziele (z. B. Volumen, Kontur, Faltenreduktion) und wählen die passende Produktspezifikation.',
      },
      {
        number: '02',
        title: 'Vorbereitung & Hygiene',
        description:
          'Reinigung/Desinfektion der Areale; auf Wunsch Betäubungscreme. Einsatz hochwertiger, CE-zertifizierter Filler.',
      },
      {
        number: '03',
        title: 'Injektion',
        description:
          'Präzise Applikation mit Nadel oder Kanüle – angepasst an Region, Tiefe und gewünschte Formung.',
      },
      {
        number: '04',
        title: 'Kontrolle & Nachsorge',
        description:
          'Abschließender Spiegelcheck, Kühlung nach Bedarf, klare Nachsorgehinweise. Kontrolltermin nach ~14 Tagen empfohlen.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge bei Fillern',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '7 Tage vorher nach Rücksprache keine blutverdünnenden Schmerzmittel (z. B. Ibuprofen, ASS).' },
        { title: 'Alkohol', description: '24 h vorher keinen Alkohol.' },
        { title: 'Gesundheit', description: 'Kein akuter Infekt/Herpes; keine frischen Impfungen oder Zahnbehandlungen.' },
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Behandlung in Schwangerschaft/Stillzeit.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Sport/Hitze', description: '48 h kein Sport; 1–2 Wochen keine Sauna/Solarium/intensive Sonne.' },
        { title: 'Druck/Massage', description: 'Areale nicht massieren oder stark drücken.' },
        { title: 'Weitere Eingriffe', description: '2 Wochen keine Impfungen, invasiven/kosmetischen Behandlungen oder Zahnarzt-Eingriffe.' },
        { title: 'Make-up', description: 'Mehrere Stunden pausieren; auf Hygiene achten.' },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Lea S.',
      rating: 5,
      text:
        'Sehr natürliches Lippenvolumen – exakt so dezent, wie ich es wollte. Ablauf top erklärt, null „Duckface“.',
      date: '2025-05-22',
    },
    {
      id: 2,
      name: 'Johannes K.',
      rating: 5,
      text:
        'Nasolabialfalten deutlich weicher, Gesicht wirkt frischer. Beratung ehrlich und unaufgeregt.',
      date: '2025-03-14',
    },
    {
      id: 3,
      name: 'Merve T.',
      rating: 5,
      text:
        'Kinn/Jawline dezent definiert, viel harmonischer im Profil. Ergebnis wirkt wie „ich – ausgeschlafen“.',
      date: '2025-01-30',
    },
    {
      id: 4,
      name: 'Anna D.',
      rating: 5,
      text:
        'Sehr präzise Technik, keine blauen Flecken. Nachkontrolle inklusive – fühle mich super betreut.',
      date: '2024-11-17',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Hyaluron-Filler in Bremen',
    description: [
      'Als Ärztin für ästhetische Medizin setze ich Filler gezielt für harmonische, natürliche Ergebnisse ein – ohne künstlichen Look.',
      'Wir besprechen Eignung, Materialmenge, realistische Ziele, Haltbarkeit sowie einen transparenten Kostenplan gemäß GOÄ.',
      'Verantwortung & Sicherheit: klare Aufklärung, sterile Arbeitsweise und ein definiertes Vorgehen für seltene Komplikationen (inkl. Hylase).',
    ],
    ctaText: 'Jetzt Beratungstermin buchen',
    ctaHref: '/terminanfragen',
    imageSrc: '/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp',
    imageAlt:
      'Ärztin Ola El-Armouche – Hyaluron-Filler in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen',
    treatments: [
      {
        imageUrl: '/elaesthetics-bremen-github/assets//botox/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Botulinumtoxin für mimische Falten',
        title: 'Botulinumtoxin (mimische Falten)',
        description:
          'Perfekte Ergänzung zu Fillern bei Stirn, Zornesfalte & Krähenfüßen.',
        treatmentUrl: '/botox/faltenbehandlung',
      },
      {
        imageUrl: '/elaesthetics-bremen-github/assets//hyaluron/hyaluron-hylase_hero.webp',
        imageAlt: 'Hylase Fillerauflösung',
        title: 'Hylase (Fillerauflösung)',
        description:
          'Sicherheitsnetz bei Fehlplatzierung oder Überkorrektur – verantwortungsvoll eingesetzt.',
        treatmentUrl: '/hyaluron/hylase',
      },
      {
        imageUrl: '/elaesthetics-bremen-github/assets//hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Skinbooster zur Hydratation',
        title: 'Skinbooster (eigene Unterseite)',
        description:
          'Für Hydratation & Hautqualität. Details auf der Skinbooster-Seite.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Hyaluron-Fillern',
    faqs: [
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Je nach Region, Produkt und Stoffwechsel etwa 6–18 Monate. Bei Bedarf kann das Ergebnis aufgefrischt werden.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die meisten Filler enthalten Lidocain; zusätzlich kann eine Betäubungscreme aufgetragen werden. Die Behandlung gilt als gut tolerierbar.',
      },
      {
        question: 'Welche Risiken gibt es?',
        answer:
          'Kurzfristig sind Rötungen, Schwellungen oder Hämatome möglich. Sehr selten treten Gefäßkomplikationen auf – hierfür besteht ein klarer Notfall-Algorithmus (u. a. Hylase).',
      },
      {
        question: 'Was kostet die Filler-Behandlung?',
        answer:
          'Ab 250€. Der individuelle Preis richtet sich nach Materialmenge, Areal und Aufwand; die Abrechnung erfolgt gemäß GOÄ.',
      },
      {
        question: 'Kann man Filler bei Bedarf wieder auflösen?',
        answer:
          'Ja. Mit Hylase (Hyaluronidase) lassen sich Hyaluron-Filler in geeigneten Fällen gezielt abbauen.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für ein frisches, natürliches Ergebnis?',
    subtitle:
      'Vereinbaren Sie jetzt Ihre persönliche Beratung für Hyaluron-Filler in Bremen.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Hyaluron-Filler in Bremen: EL Aesthetics',
    description:
      'Zentral gelegen, gut erreichbar aus Horn-Lehe, Oberneuland, Schwachhausen & Umgebung.',
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
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten mit Hyaluron-Fillern"
        subtitle="Echte, natürliche Ergebnisse – individuell geplant, präzise umgesetzt."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}
