import type { Metadata } from 'next';
import Script from 'next/script';
import {
  ConsultationSection,
  TableOfContents,
  TOCItem,
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
import { getWebPageSchema } from '@/lib/schema';
import { prfHaar, eigenblut, eigenblutMicroneedling } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Eigenbluttherapie Bremen – PRF & PRP',
  description: 'Eigenbluttherapie mit PRF/PRP in Bremen: Autologe Plasma-Behandlung für Hautregeneration und bei Haarausfall. Ablauf, Kosten & Beratung. Termin vereinbaren.',
  keywords: ['Eigenbluttherapie Bremen', 'PRP Bremen', 'PRF Behandlung Bremen', 'Platelet Rich Plasma Bremen', 'Eigenblut Behandlung Bremen'],
  openGraph: {
    title: 'Eigenbluttherapie (PRF/PRP) in Bremen – EL Aesthetics',
    description: 'Autologe Plasma-Behandlung (PRF/PRP) für Haut & Haare in Bremen. Ärztliche Beratung zu Ablauf und Kosten.',
    url: 'https://elaesthetics-bremen.de/eigenbluttherapie',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/eigenbluttherapie/og-eigenbluttherapie-prf.webp',
        width: 1200,
        height: 630,
        alt: 'Eigenbluttherapie (PRF/PRP) in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie',
  },
};

export default function EigenbluttherapiePRFPage() {
  const schema = getWebPageSchema({
    name: 'Eigenbluttherapie (PRF/PRP) Bremen',
    description: 'Übersicht zu Eigenbluttherapie-Anwendungen (PRF/PRP) für Haut und Haare bei EL Aesthetics.',
    url: '/eigenbluttherapie',
    about: {
      type: 'MedicalTherapy',
      name: 'Eigenbluttherapie (PRF/PRP)',
      procedureType: 'NonSurgicalProcedure',
    },
  });

  const heroData: HeroSectionProps = {
    title: 'Eigenbluttherapie in Bremen',
    subtitle:
      'PRF/PRP-Eigenbluttherapie - Natürliche Behandlung zur Unterstützung von Hautqualität und Haarwachstum',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Eigenbluttherapie PRF/PRP für Haut und Haare – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungsgespräch vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Eigenbluttherapie?',
    content: [
      'Plättchenreiches Fibrin (PRF) ist eine moderne Eigenbluttherapie, die als Weiterentwicklung der bekannten PRP-Therapie gilt.',
      'Sie ist eine minimalinvasive und innovative Methode zur Biostimulation und Revitalisierung der Haut sowie bei Haarausfall. Besonders schonend und zu 100 % natürlich, setzt sie ausschließlich auf körpereigene Substanzen.',
      'Während bei der PRP-Therapie Blutplasma verwendet wird, kommt bei der PRF-Behandlung plättchenreiches Fibrin zum Einsatz. Dieses enthält einen höheren Anteil an Wachstumsfaktoren sowie Stammzellen, welche regenerative Prozesse der Haut und der Kopfhaut unterstützen können.',
      'Durch den Verzicht auf Gerinnungshemmer bleibt die injizierte Fibrinmatrix länger im Gewebe und gibt Wachstumsfaktoren über einen längeren Zeitraum ab.'
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Anwendungsbereiche der Eigenbluttherapie',
    treatments: [prfHaar, eigenblut, eigenblutMicroneedling],
  };



  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Behandlung',
    faqs: [
      {
        question: 'Für was ist eine Eigenbluttherapie gut?',
        answer:
          'Zur Verbesserung der Hautqualität. Zum Beispiel bei feinen Linien, Trockenheit, Akne, Aknenarben, Rosazea, sowie bei Haarausfall.',
      },
      {
        question: 'Was ist der Unterschied zwischen PRF und PRP?',
        answer:
          'PRF (thrombozytenreiches Fibrin) bildet eine Matrix, die Wachstumsfaktoren über längere Zeit freisetzen kann als PRP (thrombozytenreiches Plasma).',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Eigenbluttherapie in Bremen',
    subtitle: 'Vereinbaren Sie Ihren Beratungstermin zur PRF/PRP‑Behandlung.',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Anwendungsbereiche' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="eigenbluttherapie-schema"
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
