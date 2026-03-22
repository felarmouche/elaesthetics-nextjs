import type { Metadata } from 'next';
import Script from 'next/script';
import {
  CTASection,
  TOCItem,
  TableOfContents,
  ConsultationSection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getFAQSchema } from '@/lib/schema';
import { mesotherapieHaut, mesoHaar } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Mesotherapie Bremen | Haut & Haare | EL Aesthetics',
  description: 'Mesotherapie in Bremen: Mikronährstoffe & Hyaluronsäure für strahlende Haut und kräftigeres Haar. Ärztliche Beratung für individuelle Behandlung. Jetzt Termin vereinbaren.',
  keywords: ['Mesotherapie Bremen', 'Mesotherapie Gesicht Bremen', 'Mesotherapie Haare Bremen', 'Meso-Glow Bremen'],
  openGraph: {
    title: 'Mesotherapie in Bremen – EL Aesthetics',
    description: 'Mesotherapie für Haut & Haare in Bremen. Mikronährstoffe & Hyaluronsäure für Glow und kräftigeres Haar.',
    url: 'https://elaesthetics-bremen.de/mesotherapie',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/mesotherapie/og-image-mesotherapie-haut-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Mesotherapie in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/mesotherapie',
  },
};

export default function MesotherapieHubPage() {
  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Mesotherapie',
    faqs: [
      {
        question: 'Was ist Mesotherapie?',
        answer:
          'Die Mesotherapie ist ein minimal-invasives Verfahren, bei dem individuell zusammengestellte Wirkstoffcocktails (z. B. Hyaluronsäure, Vitamine, Aminosäuren, Mineralien) in geringer Dosierung direkt in die Haut oder Kopfhaut injiziert werden. So gelangen die Wirkstoffe gezielt dorthin, wo sie benötigt werden.',
      },
      {
        question: 'Für wen ist Mesotherapie geeignet?',
        answer:
          'Die Mesotherapie eignet sich für Menschen, die ihre Hautqualität verbessern (z. B. bei müder, fahler Haut, feinen Linien, Augenringen) oder Haarausfall entgegenwirken möchten. Die Behandlung kann auch als unterstützende Maßnahme nach einer Haartransplantation eingesetzt werden. Wir raten bei bestimmten Allergien (u. a. Schalentier-Unverträglichkeit bei der Hautbehandlung), Krebserkrankungen, Blutgerinnungsstörungen, beeinträchtigter Hautbarriere sowie während der Schwangerschaft und Stillzeit von dieser Therapieform ab.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig?',
        answer:
          'Für die Haut werden in der Regel 3–5 Sitzungen im Abstand von 2–4 Wochen empfohlen, mit Auffrischungen ca. 2x pro Jahr. Für die Haare sind 6–10 Sitzungen im Abstand von 1–2 Wochen üblich, mit Auffrischungen alle 3–6 Monate. Die genaue Anzahl hängt vom Befund und den individuellen Zielen ab.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die Injektion wird als nahezu schmerzfrei wahrgenommen. Durch die Verwendung besonders feiner Nadeln ist das Hämatomrisiko äußerst gering. Die Kopfhaut kann etwas empfindlicher sein als das Gesicht. Eine Betäubungscreme kann bei Bedarf vorab aufgetragen werden.',
      },
      {
        question: 'Welche Nebenwirkungen gibt es?',
        answer:
          'Die Mesotherapie gilt als risikoarm und wird im Allgemeinen gut vertragen. Sichtbare Spuren gehen meist innerhalb von 24 Stunden zurück. Leichte Rötungen, Schwellungen oder kleine Hämatome an den Einstichstellen können auftreten, sind aber selten und vorübergehend. Kleinere Knötchenbildung an den Injektionsstellen kann ebenfalls vorkommen, verschwindet jedoch in der Regel von selbst. Allergische Reaktionen sind sehr selten, können aber nicht vollständig ausgeschlossen werden.',
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Mesotherapie in Bremen',
          description: 'Übersicht zu Mesotherapie-Behandlungen für Haut und Haare bei EL Aesthetics.',
          url: '/mesotherapie',
          about: {
            type: 'MedicalTherapy',
            name: 'Mesotherapie',
            procedureType: 'NonSurgicalProcedure',
          },
        }), '@context': undefined
      },
      getFAQSchema(faqData.faqs),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Mesotherapie in Bremen',
    subtitle:
      'Gezielte Mikronährstoff-Injektionen gegen Falten und Haarausfall. Hautverjüngung und Revitalisierung der Haut & Haare.',
    imageSrc: '/assets/mesotherapie/mesotherapie-haut_hero.webp',
    imageAlt: 'Mesotherapie-Behandlung für Haut und Haare – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Mesotherapie und wie wirkt sie?',
    content: [
      'Mesotherapie ist ein minimal-invasives Verfahren der ästhetischen Medizin, bei dem individuell abgestimmte Wirkstoffe gezielt in die Haut eingebracht werden. So können Haut und Kopfhaut direkt versorgt und natürliche Regenerationsprozesse unterstützt werden. Im Gesichtsbereich wird Mesotherapie häufig zur Unterstützung von Hautqualität, Feuchtigkeit, Frische und Ebenmäßigkeit eingesetzt. Im Bereich der Haare kann sie ergänzend angewendet werden, um die Kopfhaut zu unterstützen und diffusem oder erblich bedingtem Haarausfall entgegenzuwirken.'
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Mesotherapie-Behandlungen',
    treatments: [mesotherapieHaut, mesoHaar],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für frischere Haut oder kräftigeres Haar?',
    subtitle:
      'Vereinbaren Sie Ihren persönlichen Beratungstermin zur Mesotherapie in Bremen.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="mesotherapie-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
