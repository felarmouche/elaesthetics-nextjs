import type { Metadata } from 'next';
import Script from 'next/script';
import {
  CTASection,
  TOCItem,
  TableOfContents,
  AreasSection,
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
  HubTeaserSection
} from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';

// 1. METADATA OPTIMIERUNG
// Fokus: Long-Tail Keywords (Zornesfalte, Krähenfüße) + Lokalisierung (Bremen)
export const metadata: Metadata = {
  title: 'Faltenunterspritzung Bremen (Botox) | Zornesfalte & Stirn | EL Aesthetics',
  description: 'Fachärztliche Faltenbehandlung in Bremen. Gezielte Glättung von Zornesfalten, Stirnfalten & Krähenfüßen mit Botulinumtoxin. Natürlich & Sicher.',
  keywords: ['Faltenunterspritzung Bremen', 'Zornesfalte entfernen Bremen', 'Stirnfalten glätten', 'Krähenfüße Behandlung', 'Botox Arzt Bremen'],
  openGraph: {
    title: 'Faltenbehandlung mit Botulinumtoxin in Bremen | EL Aesthetics',
    description: 'Natürliche Ergebnisse bei der Behandlung mimischer Falten. Fachärztliche Beratung für Zornesfalte, Stirn & Augenbereich.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung',
    images: [{
      url: '/assets/botulinumtoxin/og-image-botox-faltenbehandlung-bremen.webp', // Stelle sicher, dass dieses Bild existiert
      width: 1200,
      height: 630,
      alt: 'Vorher/Nachher Simulation Faltenbehandlung',
    }],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung',
  },
};

export default function BotulinumtoxinFaltenbehandlungPage() {

  // 2. SCHEMA.ORG (JSON-LD) - "Entity Stacking"
  // Wir definieren diese Seite spezifisch als kosmetische Prozedur für Falten.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Faltenbehandlung mit Botulinumtoxin Bremen',
    description: 'Ärztliche Behandlung mimischer Falten wie Zornesfalte und Krähenfüße.',
    provider: {
      '@type': 'MedicalOrganization',
      name: 'EL Aesthetics Bremen',
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bremen',
          addressRegion: 'HB',
          addressCountry: 'DE'
        }
      }
    },
    about: {
      '@type': 'CosmeticProcedure', // Spezifischer als MedicalProcedure
      name: 'Faltenunterspritzung mit Botulinumtoxin',
      medicalSpecialty: 'Dermatology',
      bodyLocation: 'Face',
      procedureType: 'NonSurgicalProcedure'
    }
  };

  const heroData: HeroSectionProps = {
    title: 'Faltenbehandlung mit Botulinumtoxin in Bremen',
    subtitle:
        'Für ein entspanntes, frisches Hautbild. Wir behandeln mimische Falten wie die Zornesfalte oder Krähenfüße präzise und fachärztlich – für Ergebnisse, die Ihre Natürlichkeit bewahren, statt sie zu maskieren.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Fachärztin bei der Faltenbehandlung an der Stirn', // Alt-Text beschreibt Handlung
    primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungszonen', href: '#areas' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Wirkung' },
    { id: 'areas', label: 'Zonen (Zornesfalte etc.)' },
    { id: 'quickInfos', label: 'Fakten & Preise' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Verhaltenstipps' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const introData: IntroSectionProps = {
    title: 'Wie funktioniert die Faltenunterspritzung?',
    content: [
      // E-E-A-T: Wir erklären es medizinisch korrekt, aber verständlich.
      'Mimische Falten entstehen, weil wir unsere Gesichtsmuskeln tausende Male am Tag anspannen – sei es beim Lachen, Konzentrieren oder Blinzeln. Mit der Zeit graben sich diese Bewegungen in die Haut ein.',
      'Botulinumtoxin (bekannt unter dem Markennamen Botox®) setzt genau an der Ursache an: Es entspannt gezielt die überaktive Muskulatur. Die Haut darüber kann sich erholen und glätten, ohne dass Ihre Mimik starr wirkt.',
      'In unserer Praxis in Bremen legen wir höchsten Wert auf das sogenannte "Fresh-Look"-Konzept: Sie sollen erholt aussehen, nicht "gemacht". Jede Behandlung erfolgt basierend auf einer genauen Analyse Ihrer Anatomie.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Welche Falten behandeln wir?',
    // SEO-Hack: Strukturierte Daten für Google List-Snippets
    categories: [
      {
        category: 'Die häufigsten Indikationen',
        items: [
          { title: 'Zornesfalte (Glabella)', description: 'Die senkrechten Falten zwischen den Augenbrauen, die oft streng wirken lassen.' },
          { title: 'Stirnfalten (Sorgenfalten)', description: 'Horizontale Linien auf der Stirn, die durch Augenbrauenhochziehen entstehen.' },
          { title: 'Krähenfüße (Lachfalten)', description: 'Seitliche Fältchen an den Augen, die sich strahlenförmig ausbreiten.' },
        ],
      },
      {
        category: 'Spezielle Bereiche (Advanced)',
        items: [
          { title: 'Bunny Lines', description: 'Kleine Fältchen am Nasenrücken beim Lachen.' },
          { title: 'Pflasterstein-Kinn', description: 'Unregelmäßige Struktur am Kinn durch den Mentalis-Muskel.' },
          { title: 'Brow Lift', description: 'Dezente Anhebung der Augenbrauen für einen offeneren Blick (chemisches Lifting).' },
          { title: 'Gummy Smile', description: 'Korrektur von zu viel sichtbarem Zahnfleisch beim Lachen.' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Behandlungsinfos auf einen Blick',
    benefits: [
      { title: 'Kosten', description: `ab ${PRICES.botulinum.faltenbehandlung.zone1}€ (je nach GOÄ-Faktor)`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Wirkungseintritt', description: 'Erste Effekte nach 3–5 Tagen', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 3–6 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'Nicht nötig', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'Sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note:
        '**Rechtlicher Hinweis:** Die genannten Preise sind Richtwerte nach GOÄ. Botulinumtoxin ist ein verschreibungspflichtiges Medikament. Eine Behandlung erfolgt nur nach ärztlicher Untersuchung und Aufklärung, sofern keine Kontraindikationen vorliegen.',
  };

  const processData: ProcessSectionProps = {
    title: 'So läuft Ihre Behandlung in Bremen ab',
    steps: [
      {
        number: '01',
        title: 'Facial Analysis',
        description:
            'Wir analysieren Ihre Mimik: Welcher Muskel zieht wie stark? Wo entstehen Asymmetrien? Wir erstellen einen individuellen Injektionsplan.',
      },
      {
        number: '02',
        title: 'Die Behandlung',
        description:
            'Nach Desinfektion der Haut wird das Botulinumtoxin mit hauchdünnen Nadeln präzise injiziert. Das spüren Sie meist nur als minimalen Piks.',
      },
      {
        number: '03',
        title: 'Nachsorge & Effekt',
        description:
            'Sie sind sofort wieder alltagstauglich. Die volle Wirkung entfaltet sich über die nächsten 14 Tage. Ein Kontrolltermin sichert das Ergebnis.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Verhaltenstipps für optimale Ergebnisse',
    beforeTreatment: {
      title: 'Davor',
      instructions: [
        { title: 'Blutverdünner', description: 'Falls möglich, keine blutverdünnenden Medikamente (z.B. Aspirin) direkt vor dem Termin einnehmen (nur nach ärztl. Absprache!).' },
        { title: 'Alkoholkonsum', description: '24h vorher auf Alkohol verzichten, um das Risiko für Hämatome zu minimieren.' },
      ],
    },
    afterTreatment: {
      title: 'Danach (Die ersten 4 Stunden)',
      instructions: [
        { title: 'Haltung', description: 'Kopf möglichst aufrecht halten, nicht flach hinlegen.' },
        { title: 'No Touch', description: 'Nicht an den Einstichstellen reiben oder massieren.' },
        { title: 'Sport & Sauna', description: 'Für 24–48 Stunden auf intensiven Sport, Sauna und Solarium verzichten.' },
      ],
    },
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Ergänzende Behandlungen',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp',
        imageAlt: 'Masseter Botox Behandlung',
        title: 'Masseter (Facial Slimming)',
        description: 'Behandlung des Kauskels bei Zähneknirschen oder für eine schmalere Gesichtsform.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
        imageAlt: 'Mesobotox Behandlung',
        title: 'Meso-Botox (Hautbild)',
        description: 'Feinste Injektionen für verfeinerte Poren und einen ebenmäßigen Teint.',
        treatmentUrl: '/botulinumtoxin/mesobotox',
      },
      // Wir verlinken NICHT auf Hyperhidrose/Migräne hier, um den Kontext "Ästhetik/Gesicht" sauber zu halten (Topical Cluster).
      // Stattdessen z.B. Hyaluron, falls vorhanden, oder wir lassen es bei 2.
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Faltenunterspritzung',
    // 2026 SEO Hack: "Direct Answer" Formatierung in den ersten Sätzen.
    faqs: [
      {
        question: 'Wirkt mein Gesicht nach der Behandlung starr?',
        answer:
            'Nein, bei korrekter Dosierung nicht. Unser Ziel in Bremen ist die Erhaltung Ihrer natürlichen Mimik. Sie sollen entspannt aussehen, nicht "eingefroren" (Frozen Face). Wir dosieren lieber vorsichtig und legen bei Bedarf nach.',
      },
      {
        question: 'Wie lange hält das Ergebnis an der Stirn oder Zornesfalte?',
        answer:
            'Die Wirkung hält durchschnittlich 3 bis 6 Monate an. Da sich der Muskel mit der Zeit an die Entspannung "gewöhnt", können die Intervalle bei regelmäßiger Anwendung oft länger werden.',
      },
      {
        question: 'Was ist der Unterschied zu Hyaluron?',
        answer:
            'Botulinumtoxin entspannt Muskeln (gut für Mimikfalten wie Zornesfalte). Hyaluron ist ein Filler, der Volumen gibt (gut für statische Falten wie Nasolabialfalten oder Lippenaufbau). Oft ist eine Kombination sinnvoll.',
      },
      {
        question: 'Ab wann sollte man mit Botox anfangen?',
        answer:
            'Es gibt kein festes Alter. Eine Behandlung kann präventiv sinnvoll sein, bevor sich Falten tief in die Haut eingraben ("Preventative Botox"). Dies wird individuell im Beratungsgespräch entschieden.',
      },
      {
        question: 'Was kostet eine Zornesfalten-Behandlung in Bremen?',
        answer:
            'Die Kosten beginnen meist ab ca. 150€, variieren aber je nach Materialaufwand und GOÄ-Faktor. Ein verbindlicher Preis kann seriös erst nach Ansicht des Befundes genannt werden.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Wünschen Sie eine Beratung?',
    subtitle:
        'Vereinbaren Sie Ihren Termin bei EL Aesthetics in Bremen. Wir analysieren Ihr Gesicht und erstellen einen Behandlungsplan, der zu Ihnen passt.',
    primaryCTA: { text: 'Termin online buchen', href: '/kontakt' },
    secondaryCTA: { text: 'Telefon: +49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
      <div className="min-h-screen bg-white">
        {/* Script für Structured Data */}
        <Script
            id="falten-schema"
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
            title="Mehr als nur Falten?"
            subtitle="Entdecken Sie auch unsere medizinischen Anwendungen bei Zähneknirschen oder Migräne."
            href="/botulinumtoxin"
        />

        <TreatmentsSection {...treatmentsData} />
        <FAQSection {...faqData} />
        <CTASection {...ctaData} />
      </div>
  );
}