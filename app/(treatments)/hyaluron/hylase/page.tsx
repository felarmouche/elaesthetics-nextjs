import type { Metadata } from 'next';
import Script from 'next/script';
import { PRICES } from '@/lib/constants'
import { filler, skinbooster, profhilo } from '@/data/treatments';
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
  CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hyaluronidase Bremen – Hyaluron auflösen',
  description: 'Hyaluronidase Behandlung in Bremen: Hyaluron sicher auflösen bei Lippen, Tränenrinne, Knötchen & mehr ➤ Jetzt Termin buchen',
  keywords: 'Hylase Behandlung Bremen, Hylase Kosten Bremen, Hylase Lippen auflösen Bremen, Hyaluron auflösen Bremen, Hylase Erfahrung, Hyaluronidase Bremen, Hylase Nebenwirkungen, Lippen auflösen Hylase, Hylase Wirkung, Hyaluron entfernen Kosten Bremen, Hylase Tränenrinne, Hylase Nase, Hylase Augenringe',
  openGraph: {
    title: 'Hyaluronidase Behandlung Bremen – Hyaluron auflösen | EL Aesthetics',
    description: 'Sichere Hyaluronidase-Behandlung in Bremen: Hyaluron-Filler auflösen bei Lippen, Knötchen & Asymmetrien – schnelle Wirkung, erfahrene Ärztin.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/hylase/og-hyaluronidase-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/hylase',
  },
};

export default function HyaluronidaseHylasePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Hyaluronidase-Behandlung in Bremen',
          description: 'Ärztliche Behandlung zum Auflösen von Hyaluronsäure mit Hyaluronidase.',
          url: '/hyaluron/hylase',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Hyaluronidase-Behandlung (Hylase)',
        type: 'MedicalProcedure',
        bodyLocation: 'Face',
        description: 'Enzym-Injektion mit Hyaluronidase (Hylase) zum gezielten Abbau von Hyaluronsäure-Fillern bei Korrekturbedarf oder Komplikationen.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Hyaluronidase Behandlung in Bremen',
    subtitle: 'Filler mit Hyaluronidase (Hylase) auflösen',
    imageSrc: '/assets/hyaluron/hyaluron-hylase_hero.webp',
    imageAlt: 'Hyaluronidase-Behandlung zum Auflösen von Hyaluron – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Hyaluronidase?',
    content: [
      'Hylase (Hyaluronidase) ist ein Enzym, das natürlicherweise im menschlichen Körper vorkommt und die Hyaluronsäure auflösen kann. Das ermöglicht die Korrektur von unerwünschten Ergebnissen, Knötchen oder Überkorrekturen mit Hyaluronsäure-Fillern.',
      'Hylase ist für besondere Fälle gedacht. Dazu gehören Komplikationen bei Fillerbehandlungen, Fehlbehandlungen, grobe Überspritzungen oder das Auftreten von Knötchen als Nebenwirkung einer Hyaluron-Unterspritzung.'
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Hyaluronsäure auflösen: Anwendungsbereiche',
    categories: [
      {
        category: 'Häufigste Bereiche',
        items: [
          {
            title: 'Lippen-Filler auflösen',
            description: 'Auflösung von Überkorrekturen, Asymmetrien, Knötchen und zu viel Hyaluron in den Lippen. Häufigster Anwendungsbereich mit schneller Wirkung.',
          },
          {
            title: 'Tränenrinne / Augenringe',
            description: 'Korrektur von Tyndall-Effekt, Schwellungen und verrutschten Fillern im Unterlidbereich mit gezielter Enzym-Injektion.',
          },
          {
            title: 'Nase',
            description: 'Auflösung unerwünschter Wülste oder Überkorrekturen nach Nasenkorrektur mit Hyaluron.',
          },
          {
            title: 'Nasolabialfalten korrigieren',
            description: 'Auflösung von Wülsten, Unebenheiten oder übermäßigem Volumen im Nasolabialbereich.',
          },
          {
            title: 'Wangen & Kinn',
            description: 'Korrektur von übermäßigem Volumen oder Asymmetrien nach Hyaluron-Unterspritzung.',
          },
          {
            title: 'Stirn',
            description: 'Entfernung unerwünschter Filler-Ansammlungen im Stirnbereich.',
          },
        ],
      },
      {
        category: 'Spezielle Indikationen',
        items: [
          {
            title: 'Knötchen auflösen',
            description: 'Auflösung tastbarer oder sichtbarer Verhärtungen nach Hyaluron-Fillern – schnelle Wirkung innerhalb von 24 Stunden.',
          },
          {
            title: 'Komplikationen behandeln',
            description: 'Korrektur von Tyndall-Effekt, bläulichen Verfärbungen oder allergischen Reaktionen auf Hyaluron-Filler.',
          },
          {
            title: 'Gefäßverschluss (Notfall)',
            description: 'Sofortige Enzym-Injektion bei arterieller Okklusion zur Vermeidung von Nekrosen – lebensrettende Notfallbehandlung.',
          },
          {
            title: 'Migration von Fillern',
            description: 'Auflösung von Fillern, die sich aus dem ursprünglichen Injektionsbereich verlagert haben.',
          },
          {
            title: 'Unzufriedenheit mit Ergebnis',
            description: 'Rückgängig machen unerwünschter ästhetischer Veränderungen für einen kompletten Neustart.',
          },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Die Hyaluronidase-Behandlung auf einen Blick',
    benefits: [
      {
        title: 'Kosten',
        description: `ab ${PRICES.hyaluronFiller.hyaluronidase},-\u20AC*`,
        iconUrl: '/assets/icons/EUR.svg',
      },
      {
        title: 'Dauer',
        description: '15-30 Min',
        iconUrl: '/assets/icons/TIME.svg',
      },
      {
        title: 'Wirkeintritt',
        description: 'meist sofort',
        iconUrl: '/assets/icons/CAL.svg',
      },
      {
        title: 'Betäubung',
        description: 'auf Wunsch',
        iconUrl: '/assets/icons/Spritze.svg',
      },
      {
        title: 'Gesellschaftsfähig',
        description: 'Regionabhängig',
        iconUrl: '/assets/icons/gesellschaft.svg',
      },
    ],
    note: '*Die Kosten richten sich nach dem Behandlungsumfang und der Dosierung. Individuelle Abrechnung nach GOÄ.',
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
    { id: 'quickInfos', label: 'Kosten & Infos' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Hyaluronidase-Behandlung in Bremen',
    steps: [
      {
        number: '01',
        title: 'Beratung',
        description: 'Im Beratungsgespräch klären wir Ihre Wünsche und Ziele.',
      },
      {
        number: '02',
        title: 'Präzise Injektion',
        description: 'Die Hyaluronidase wird mit feiner Nadel gezielt in die Bereiche injiziert, in denen die Hyaluronsäure aufgelöst werden soll. Die Dosierung wird individuell an die Menge des vorhandenen Fillers angepasst.',
      },
      {
        number: '03',
        title: 'Folgebehandlung',
        description: 'Die Anzahl der benötigten Sitzungen variiert, abhängig vom Umfang der ursprünglichen Unterspritzung und der individuellen Reaktion des Körpers. Bei kleineren Korrekturen reicht zumeist eine Sitzung aus.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Medikamente',
          description: 'Keine blutverdünnenden Medikamente vor der Behandlung einnehmen – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.',
        },
        {
          title: 'Allergien abklären',
          description: 'Informieren Sie mich über bekannte Allergien, insbesondere Wespen- oder Bienenstich-Allergien.',
        },
        {
          title: 'Gesundheitszustand',
          description: 'Gesund und ohne akute Infektionen zur Behandlung erscheinen.',
        },
        {
          title: 'Informationen bereithalten',
          description: 'Wenn möglich, Informationen über die ursprüngliche Filler-Behandlung mitbringen (Produkt, Menge, Zeitpunkt) – wichtig für die Dosierung.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Wirkung beobachten',
          description: 'Eine vorübergehende verstärkte Schwellung in den ersten Stunden ist normal und klingt schnell ab, sobald die Wirkung einsetzt.',
        },
        {
          title: 'Wartezeit vor neuem Hyaluron',
          description: 'Warten Sie mindestens 2 Wochen (besser 4–6 Wochen) vor einer neuen Hyaluron-Behandlung im selben Bereich. Diese Karenzzeit ist wichtig für optimale Ergebnisse.',
        },
      ],
    },
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Behandlungen mit Hyaluronsäure in Bremen',
    treatments: [filler, skinbooster, profhilo],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Hyaluronidase-Behandlung',
    faqs: [
      {
        question: 'Warum muss Hylase vorsichtig dosiert werden?',
        answer: 'Das Enzym unterscheidet nicht zwischen künstlich injiziertem Filler und körpereigener Hyaluronsäure. Eine zu hohe Dosierung könnte auch die natürliche Hyaluronsäure in der Haut abbauen, was vorübergehend zu Dellen führen kann. Der Körper gleicht dies normalerweise innerhalb weniger Wochen aus – dennoch ist eine präzise, erfahrene Dosierung entscheidend.',
      },
      {
        question: 'In welchen Fällen wird Hylase eingesetzt?',
        answer: 'Die häufigsten Indikationen sind: 1) Ästhetische Korrekturen bei Überkorrekturen, Asymmetrien oder unnatürlichen Ergebnissen. 2) Komplikationen wie Knötchen, Tyndall-Effekt oder Filler-Migration. 3) Notfälle bei arteriellen Gefäßverschlüssen 4) Patientenwunsch bei Unzufriedenheit mit dem Ergebnis.',
      },
      {
        question: 'Wie schnell wirkt Hyaluronidase?',
        answer: 'Die Wirkung setzt in der Regel rasch ein. Erste Veränderungen können häufig innerhalb weniger Stunden beobachtet werden. Die Geschwindigkeit hängt von der Menge des aufzulösenden Hyalurons und der Dosierung ab.',
      },
      {
        question: 'Welche Nebenwirkungen können auftreten?',
        answer: 'Die Nebenwirkungen sind in der Regel mild: Rötungen an den Einstichstellen, vorübergehend verstärkte Schwellung für einige Stunden und mögliche Hämatome. Eine vorübergehende Auflockerung des umliegenden Gewebes normalisiert sich innerhalb von 2–6 Wochen. Allergische Reaktionen auf Hyaluronidase sind möglich.',
      },
      {
        question: 'Wann darf nach der Behandlung wieder Hyaluron gespritzt werden?',
        answer: 'Nach einer Hyaluronidase-Behandlung ist eine Wartezeit von ca. 2 Wochen empfohlen.',
      },
      {
        question: 'Kann jeder Filler mit Hyaluronidase aufgelöst werden?',
        answer: 'Nein, das Enzym löst ausschließlich Hyaluronsäure-basierte Filler auf. Permanente Filler (z. B. Silikon, PMMA) oder andere Filler-Typen wie Calciumhydroxylapatit oder Poly-L-Milchsäure können nicht aufgelöst werden.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Unzufrieden mit Ihrem Hyaluron-Ergebnis?',
    subtitle: 'Vereinbaren Sie jetzt Ihre persönliche Beratung in Bremen und erfahren Sie, wie die Hyaluronidase-Behandlung unerwünschte Filler sicher und schnell auflösen kann.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="hylase-schema"
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
        title="Mehr zu Hyaluron‑Behandlungen in Bremen"
        subtitle="Zur Übersicht mit allen Hyaluron-Behandlungen, Abläufen & wichtigen Hinweisen."
        href="/hyaluron"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
