import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TableOfContents,
  TOCItem,
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
  CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema } from '@/lib/schema';

// Import der zentralen Daten
import { fillerPageTreatments } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Filler Behandlung Bremen',
  description: 'Filler in Bremen: Hyaluron-Filler & Biostimulation für Lippen, Jawline & Wangen. Natürliche Konturierung ohne „künstlichen" Look. Ärztliche Beratung buchen.',
  keywords: ['Filler Bremen', 'Volumenaufbau Gesicht Bremen', 'Wangen Filler Bremen', 'Kinn Filler Bremen'],
  openGraph: {
    title: 'Filler & Volumenaufbau in Bremen – EL Aesthetics',
    description: 'Hyaluron-Filler & Biostimulation für natürliche Konturierung in Bremen. Lippen, Jawline, Wangen & mehr.',
    url: 'https://elaesthetics-bremen.de/filler',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/filler/og-image-filler-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Filler & Volumenaufbau in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/filler',
  },
};

export default function FillerHubPage() {
  const schema = getWebPageSchema({
    name: 'Filler & Volumenaufbau in Bremen',
    description: 'Übersicht zu Filler-Behandlungen: Hyaluronsäure und Calciumhydroxylapatit für Konturierung und Volumenaufbau bei EL Aesthetics.',
    url: '/filler',
    about: {
      type: 'MedicalTherapy',
      name: 'Filler & Volumenaufbau',
      procedureType: 'NonSurgicalProcedure',
    },
  });

  const heroData: HeroSectionProps = {
    title: 'Filler-Behandlung in Bremen',
    subtitle:
      'Volumenaufbau & Konturierung für Wangen, Kinn, Jawline & Lippen.',
    imageSrc: '/assets/filler/filler_hero.webp',
    imageAlt: 'Filler-Behandlung für Lippen, Wangen und Jawline – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Volumenaufbau & Konturierung mit Fillern',
    content: [
      'Filler-Behandlungen sind minimal-invasive Verfahren der ästhetischen Medizin zum gezielten Volumenaufbau und zur Konturierung.',
      'Filler eignen sich besonders für die Konturierung von Wangen, Kinn und Jawline sowie für die Formung und Volumensteigerung der Lippen. Durch die Verwendung hochwertiger, biokompatibler Materialien können natürliche Ergebnisse erzielt werden, die Ihre individuellen Gesichtszüge harmonisch unterstreichen – ohne den „künstlichen“ Look.',
      'Jede Behandlung wird individuell auf Ihre Wünsche und anatomischen Gegebenheiten abgestimmt. In einem ausführlichen Beratungsgespräch analysiere ich gemeinsam mit Ihnen Ihre Ziele und entwickle ein maßgeschneidertes Behandlungskonzept. Dabei lege ich großen Wert auf Sicherheit, Präzision und ein ästhetisches Ergebnis, das zu Ihnen passt.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Behandlungen zur Konturierung & Volumenaufbau',
    treatments: fillerPageTreatments,
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen',
    faqs: [
      {
        question: 'Gibt es Downtime oder Nebenwirkungen?',
        answer:
          'Vorübergehende Rötung, Schwellung oder kleine Hämatome sind möglich und klingen meist in 1–3 Tagen ab. Alle möglichen Nebenwirkungen werden Ihnen vor der Behandlung ausführlich erläutert.',
      },
      {
        question: 'Kann Hyaluron wieder aufgelöst werden?',
        answer:
          'Ja. Unerwünschte Effekte mit Hyaluron können in der Regel mit Hyaluronidase adressiert werden.',
      },

      {
        question: 'Wann ist eine Filler-Behandlung nicht geeignet?',
        answer:
          'Bei Schwangerschaft/Stillzeit, akuten Infektionen, entzündlichen Hautzuständen im Behandlungsareal oder unmittelbar nach zahnärztlichen Eingriffen/Impfungen wird in der Regel verschoben. Bei bestimmten Grunderkrankungen/Medikationen ist eine individuelle Abklärung erforderlich.',
      },

    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für mehr Definition & Volumen?',
    subtitle:
      'Vereinbaren Sie Ihren Termin zur Filler-Behandlung in Bremen. Ob sinnliche Lippen, eine definierte Jawline, Wangenaufbau oder Korrektur von Asymmetrien – wir beraten Sie ehrlich zu den Möglichkeiten mit Hyaluron und Biostimulatoren.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Filler & Methoden' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="filler-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection />
      {/* FAQSection generiert JSON-LD automatisch */}
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}