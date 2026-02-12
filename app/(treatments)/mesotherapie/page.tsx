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
          'Die Mesotherapie eignet sich für Menschen, die ihre Hautqualität verbessern (z. B. bei müder, fahler Haut, feinen Linien, Augenringen) oder Haarausfall entgegenwirken möchten. In einem persönlichen Beratungsgespräch klären wir, ob das Verfahren für Ihre individuellen Ziele sinnvoll ist.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig?',
        answer:
          'In der Regel werden 3–6 Sitzungen im Abstand von 2–4 Wochen empfohlen, gefolgt von Auffrischungen alle 3–6 Monate. Die genaue Anzahl hängt vom Befund und den individuellen Zielen ab.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Durch die sehr feinen Nadeln und geringe Injektionstiefen ist die Mesotherapie in der Regel gut erträglich. Die Kopfhaut kann etwas empfindlicher sein als das Gesicht. Eine Betäubungscreme kann bei Bedarf vorab aufgetragen werden.',
      },
      {
        question: 'Welche Nebenwirkungen gibt es?',
        answer:
          'Vorübergehend können leichte Rötungen, Schwellungen oder kleine Hämatome auftreten. Diese klingen meist innerhalb weniger Stunden bis Tage ab. Wir klären Sie im Beratungsgespräch umfassend über Risiken und Gegenanzeigen auf.',
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { ...getWebPageSchema({
          name: 'Mesotherapie in Bremen',
          description: 'Übersicht zu Mesotherapie-Behandlungen für Haut und Haare bei EL Aesthetics.',
          url: '/mesotherapie',
          about: {
            type: 'MedicalTherapy',
            name: 'Mesotherapie',
            procedureType: 'NonSurgicalProcedure',
          },
      }), '@context': undefined },
      getFAQSchema(faqData.faqs),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Mesotherapie in Bremen',
    subtitle:
      'Gezielte Mikronährstoff-Injektionen für strahlende Haut und kräftigeres Haar. Individuell abgestimmte Wirkstoffcocktails – ärztlich geplant und durchgeführt.',
    imageSrc: '/assets/mesotherapie/mesotherapie-haut_hero.webp',
    imageAlt: 'Mesotherapie-Behandlung für Haut und Haare – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Mesotherapie und wie wirkt sie?',
    content: [
      'Die Mesotherapie ist ein nicht-chirurgisches Verfahren der ästhetischen und regenerativen Medizin, bei dem individuell abgestimmte Wirkstoffcocktails in geringer Dosierung direkt in die Haut oder Kopfhaut injiziert werden.',
      'Für die Haut setzt die Mesotherapie (Meso-Glow) auf Hyaluronsäure, Vitamine, Aminosäuren und Antioxidantien, um müde Haut zu revitalisieren, feine Linien zu glätten und einen frischen, strahlenden Teint zu erzeugen.',
      'Für die Haare versorgen gezielte Mikroinjektionen die Kopfhaut mit wachstumsfördernden Nährstoffen. Das kann die Durchblutung verbessern, Haarwurzeln stärken und Haarausfall entgegenwirken.',
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
