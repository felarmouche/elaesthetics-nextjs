import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TableOfContents,
  TOCItem,
  DetailedInfoSection,
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
  CTASection,
} from '@/components/TreatmentPageComponents';
import { hyaluronTreatments } from '@/data/treatments';
import { getWebPageSchema, getFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hyaluron Behandlung Bremen',
  description: 'Hyaluronsäure-Behandlungen in Bremen: Filler für Kontur & Volumen, Skinbooster für Glow, Profhilo für Hautqualität. Ärztliche Beratung. Jetzt Termin vereinbaren.',
  keywords: ['Hyaluron Bremen', 'Hyaluronsäure Bremen', 'Hyaluron Behandlung Bremen', 'Lippen aufspritzen Bremen', 'Faltenunterspritzung Bremen'],
  openGraph: {
    title: 'Hyaluron Behandlung in Bremen – EL Aesthetics',
    description: 'Hyaluronsäure-Behandlungen in Bremen: Filler, Skinbooster, Profhilo & mehr. Ärztliche Beratung für natürliche Ergebnisse.',
    url: 'https://elaesthetics-bremen.de/hyaluron',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/hyaluron/hyaluron-filler_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Hyaluron Behandlung in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/',
  },
};

export default function HyaluronBremenPage() {
  const heroData: HeroSectionProps = {
    title: 'Hyaluronsäure Behandlung in Bremen',
    subtitle:
      'Ob Volumenaufbau, Konturierung, Faltenglättung oder tiefenwirksame Hauthydratation – Hyaluronsäure bietet vielseitige Möglichkeiten.',
    imageSrc: '/assets/hyaluron/hyaluron-filler_hero.webp',
    imageAlt: 'Hyaluronsäure-Behandlung mit Filler und Skinbooster – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Alle Behandlungen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Hyaluronsäure?',
    content: [
      'Hyaluronsäure ist ein natürlicher Bestandteil unseres Körpers und ein wichtiger Feuchtigkeitsspeicher in der Haut. Sie verleiht der Haut Elastizität, Spannkraft und Glätte. Mit zunehmendem Alter nimmt der körpereigene Hyaluronsäuregehalt ab – die Haut verliert Volumen, Feuchtigkeit und Struktur.',
      'In der ästhetischen Medizin nutzen wir Hyaluronsäure in verschiedenen Formen: als vernetzte Filler für Volumen und Kontur, als unvernetzte Skinbooster für tiefe Hydratation, oder als hochkonzentriertes Bio-Remodeling zur Gewebestimulation. Jede Anwendung hat eigene Stärken und Indikationen.',
      'Welche Behandlung für Ihr Anliegen die richtige ist, hängt von Ihren Zielen und Ihrer Ausgangssituation ab. In einem persönlichen Beratungsgespräch klären wir das gemeinsam.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Anwendungsgebiete im Überblick',
    treatments: hyaluronTreatments,
  };

  const faqData: FAQSectionProps = {
    title: 'Allgemeine Fragen zu Hyaluronsäure',
    faqs: [
      {
        question: 'Ist Hyaluronsäure sicher?',
        answer:
          'Hyaluronsäure ist ein körpereigener Stoff und wird biologisch abgebaut. Behandlungen gelten als sehr sicher, wenn sie von qualifizierten Ärzten durchgeführt werden. Über seltene Risiken klären wir Sie im persönlichen Gespräch auf.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Die Haltbarkeit hängt vom verwendeten Produkt, der behandelten Region und dem individuellen Stoffwechsel ab. In der Regel zwischen 6 und 24 Monaten.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die meisten Patienten empfinden die Behandlung als gut erträglich. Viele Präparate enthalten bereits ein lokales Betäubungsmittel (Lidocain). Zusätzlich kann eine Betäubungscreme aufgetragen werden.',
      },
      {
        question: 'Welche Nebenwirkungen können auftreten?',
        answer:
          'Leichte Rötungen, Schwellungen oder kleine Blutergüsse an der Einstichstelle sind normal und klingen meist innerhalb weniger Tage ab. Über Risiken werden Sie im Beratungsgespräch aufgeklärt.',
      },
      {
        question: 'Wie setzen sich die Kosten zusammen?',
        answer:
          'Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). Der Preis hängt von Produkt, Menge und Behandlungsregion ab. Detaillierte Preisinformationen finden Sie auf den jeweiligen Unterseiten oder unter „Preise".',
      },
    ],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Hyaluron Behandlungen Bremen',
          description: 'Übersicht zu Hyaluronsäure-Therapien (Filler, Skinbooster, Profhilo) bei EL Aesthetics.',
          url: '/hyaluron',
          about: {
            type: 'MedicalTherapy',
            name: 'Hyaluronsäure Behandlung',
            procedureType: 'NonSurgicalProcedure',
          },
        }), '@context': undefined
      },
      getFAQSchema(faqData.faqs),
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Ihr Termin für Hyaluron in Bremen',
    subtitle:
      'Lassen Sie sich ärztlich beraten. Wir finden gemeinsam heraus, welche Hyaluronsäure-Behandlung für Ihr Anliegen die richtige ist.',
    primaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
    secondaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Wirkstoff' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Allgemeine FAQ' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="hyaluron-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <DetailedInfoSection />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
